import "server-only";

import { readdirSync } from "node:fs";
import path from "node:path";

const IMAGE_EXTENSION = /\.(?:avif|gif|jpe?g|png|svg|webp)$/i;

function collectImages(directory: string, publicDirectory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolutePath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      return collectImages(absolutePath, publicDirectory);
    }

    if (!entry.isFile() || !IMAGE_EXTENSION.test(entry.name)) return [];

    return `/${path.relative(publicDirectory, absolutePath).split(path.sep).join("/")}`;
  });
}

export function getPublicImageSources() {
  const publicDirectory = path.join(process.cwd(), "public");
  return collectImages(publicDirectory, publicDirectory).sort();
}
