import { mkdir, readdir, rename, stat, unlink } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

sharp.cache(false);
sharp.concurrency(2);

const projectRoot = path.resolve(process.cwd());
const sourceRoots = [path.join(projectRoot, "public"), path.join(projectRoot, "src")];
const rasterExtension = /\.(?:jpe?g|webp)$/i;

function isInsideSourceRoots(filePath) {
  const resolved = path.resolve(filePath);
  return sourceRoots.some(
    (root) => resolved === root || resolved.startsWith(`${root}${path.sep}`),
  );
}

async function collectRasterImages(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectRasterImages(absolutePath)));
    } else if (
      entry.isFile() &&
      !entry.name.startsWith(".codex-") &&
      rasterExtension.test(entry.name)
    ) {
      files.push(absolutePath);
    }
  }

  return files;
}

function outputSettings(relativePath, metadata) {
  const normalized = relativePath.split(path.sep).join("/").toLowerCase();
  const isLandingPreview = normalized.includes("/landing/");
  const isPortrait = normalized.startsWith("public/divisi/");
  const isEventGallery = normalized.includes("/hari-pelaksanaan/");
  const isCommitteeGallery = normalized.includes("/dibalik-kepanitiaan/");
  const isDivisionGallery = normalized.includes("/fotodivisi/");
  const isPhoto =
    normalized.includes("/haripelaksanaan/") ||
    normalized.includes("/fotokepanitiaan/") ||
    normalized.includes("/tentang-fiorella/images/") ||
    normalized.includes("/galerifotodivisi/") ||
    normalized.includes("/logoarsip/bgarsip/") ||
    /public\/figma\/(?:sio|penanaman|penyinaran|perekahan|sts)\.webp$/.test(
      normalized,
    );

  if (isLandingPreview) {
    return { maxEdge: 1440, quality: 80, alphaQuality: 100 };
  }

  if (isDivisionGallery) {
    return { maxEdge: 2400, quality: 90, alphaQuality: 100 };
  }

  if (isPortrait) {
    return { maxEdge: 1200, quality: 82, alphaQuality: 100 };
  }

  if (isEventGallery) {
    return { maxEdge: 1280, quality: 80, alphaQuality: 100 };
  }

  if (isCommitteeGallery) {
    return { maxEdge: 1600, quality: 80, alphaQuality: 100 };
  }

  if (isPhoto) {
    return { maxEdge: 1920, quality: 80, alphaQuality: 100 };
  }

  if (metadata.hasAlpha) {
    return { maxEdge: 1920, quality: 90, alphaQuality: 100 };
  }

  return { maxEdge: 2400, quality: 86, alphaQuality: 100 };
}

async function optimizeImage(sourcePath, index) {
  if (!isInsideSourceRoots(sourcePath)) {
    throw new Error(`Refusing to process a file outside the source roots: ${sourcePath}`);
  }

  const relativePath = path.relative(projectRoot, sourcePath);
  const sourceStats = await stat(sourcePath);
  const metadata = await sharp(sourcePath).metadata();
  const settings = outputSettings(relativePath, metadata);
  const outputPath = sourcePath.replace(/\.(?:jpe?g|webp)$/i, ".webp");
  const sourceLongEdge = Math.max(metadata.width ?? 0, metadata.height ?? 0);

  // Existing WebP files at or below their display-size cap are already done.
  // This keeps repeat runs idempotent and avoids generational quality loss.
  if (outputPath === sourcePath && sourceLongEdge <= settings.maxEdge) {
    return { kind: "skipped", before: sourceStats.size, after: sourceStats.size };
  }

  const temporaryPath = path.join(
    path.dirname(outputPath),
    `.codex-image-${process.pid}-${index}.webp`,
  );

  if (!isInsideSourceRoots(outputPath) || !isInsideSourceRoots(temporaryPath)) {
    throw new Error(`Refusing to write outside the source roots: ${outputPath}`);
  }

  if (outputPath !== sourcePath) {
    try {
      await stat(outputPath);
      throw new Error(`Output already exists for ${relativePath}: ${outputPath}`);
    } catch (error) {
      if (error?.code !== "ENOENT") throw error;
    }
  }

  await mkdir(path.dirname(outputPath), { recursive: true });

  const result = await sharp(sourcePath)
    .rotate()
    .resize({
      width: settings.maxEdge,
      height: settings.maxEdge,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({
      quality: settings.quality,
      alphaQuality: settings.alphaQuality,
      effort: 6,
      smartSubsample: true,
    })
    .toFile(temporaryPath);

  const mustReplace = outputPath !== sourcePath || sourceLongEdge > settings.maxEdge;
  const savesSpace = result.size < sourceStats.size;

  if (!mustReplace && !savesSpace) {
    await unlink(temporaryPath);
    return { kind: "skipped", before: sourceStats.size, after: sourceStats.size };
  }

  if (outputPath === sourcePath) {
    const backupPath = path.join(
      path.dirname(sourcePath),
      `.codex-original-${process.pid}-${index}.webp`,
    );
    // libvips can release Windows file handles a moment after encoding finishes.
    await new Promise((resolve) => setTimeout(resolve, 25));
    await rename(sourcePath, backupPath);
    try {
      await rename(temporaryPath, sourcePath);
      await unlink(backupPath);
    } catch (error) {
      try {
        await rename(backupPath, sourcePath);
      } catch {
        // Keep both temporary files for manual recovery if rollback fails.
      }
      throw error;
    }
    return { kind: "reencoded", before: sourceStats.size, after: result.size };
  }

  await rename(temporaryPath, outputPath);
  await unlink(sourcePath);
  return { kind: "converted", before: sourceStats.size, after: result.size };
}

const files = (
  await Promise.all(sourceRoots.map((root) => collectRasterImages(root)))
).flat();

let beforeBytes = 0;
let afterBytes = 0;
let converted = 0;
let reencoded = 0;
let skipped = 0;

for (const [index, file] of files.entries()) {
  const result = await optimizeImage(file, index);
  beforeBytes += result.before;
  afterBytes += result.after;
  if (result.kind === "converted") converted += 1;
  if (result.kind === "reencoded") reencoded += 1;
  if (result.kind === "skipped") skipped += 1;

  if ((index + 1) % 20 === 0 || index + 1 === files.length) {
    console.log(`Optimized ${index + 1}/${files.length} images`);
  }
}

const megabytes = (bytes) => (bytes / 1024 / 1024).toFixed(2);
console.log(
  JSON.stringify(
    {
      files: files.length,
      converted,
      reencoded,
      skipped,
      beforeMB: megabytes(beforeBytes),
      afterMB: megabytes(afterBytes),
      reductionPercent: ((1 - afterBytes / beforeBytes) * 100).toFixed(1),
    },
    null,
    2,
  ),
);
