// src/app/api/assets/[folder]/[filename]/route.ts

import fs from "fs";
import path from "path";
import { NextRequest } from "next/server";
import { ASSET_FOLDERS, AssetFolderKey } from "@/lib/assets";

const CONTENT_TYPES: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".avif": "image/avif",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".mov": "video/quicktime",
};

interface RouteParams {
  params: Promise<{
    folder: string;
    filename: string;
  }>;
}

export async function GET(_req: NextRequest, { params }: RouteParams) {
  const { folder, filename: rawFilename } = await params;

  const folderKey = folder as AssetFolderKey;
  const relativeDir = ASSET_FOLDERS[folderKey];

  if (!relativeDir) {
    return new Response("Folder tidak dikenali", { status: 404 });
  }

  const fileName = decodeURIComponent(rawFilename);

  // Cegah path traversal (../, /, \)
  if (fileName.includes("..") || fileName.includes("/") || fileName.includes("\\")) {
    return new Response("Nama file tidak valid", { status: 400 });
  }

  const absoluteDir = path.join(process.cwd(), relativeDir);
  const filePath = path.join(absoluteDir, fileName);

  if (!filePath.startsWith(absoluteDir) || !fs.existsSync(filePath)) {
    return new Response("File tidak ditemukan", { status: 404 });
  }

  const ext = path.extname(fileName).toLowerCase();
  const contentType = CONTENT_TYPES[ext];

  if (!contentType) {
    return new Response("Format file tidak didukung", { status: 415 });
  }

  const data = fs.readFileSync(filePath);

  return new Response(new Uint8Array(data), {
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}