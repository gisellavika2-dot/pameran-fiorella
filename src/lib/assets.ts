// src/lib/assets.ts

import fs from "fs";
import path from "path";

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"];
const VIDEO_EXTENSIONS = [".mp4", ".webm", ".mov"];

export interface AssetFile {
  fileName: string;
  url: string;
  type: "image" | "video";
  title: string;
  username?: string;
  rank: number;
}

// Daftar folder assets yang boleh dibaca lewat /api/assets/[folder].
// Tambah baris baru di sini kalau ada folder assets lain yang perlu
// dibaca dinamis juga (misalnya assets divisi, hari-pelaksanaan, dst).
export const ASSET_FOLDERS = {
  "karya-terbaik-foto": "src/app/(pages)/sayembara/assets/karya-terbaik-foto",
  "karya-terbaik-video": "src/app/(pages)/sayembara/assets/karya-terbaik-video",
  "kompilasi-foto": "src/app/(pages)/sayembara/assets/kompilasi-foto",
  "kompilasi-video": "src/app/(pages)/sayembara/assets/kompilasi-video",
  "sayembara-sample-photos": "src/app/(pages)/sayembara/assets/sample-photos",
  "sayembara-sample-videos": "src/app/(pages)/sayembara/assets/sample-videos",
} as const;

export type AssetFolderKey = keyof typeof ASSET_FOLDERS;

function getFileType(fileName: string): "image" | "video" | null {
  const ext = path.extname(fileName).toLowerCase();
  if (IMAGE_EXTENSIONS.includes(ext)) return "image";
  if (VIDEO_EXTENSIONS.includes(ext)) return "video";
  return null;
}

function formatTitle(fileName: string): string {
  const withoutExt = fileName.replace(path.extname(fileName), "");
  return withoutExt
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

interface AssetMetaEntry {
  title?: string;
  username?: string;
  rank?: number;
}

// Opsional: taruh file "meta.json" di folder assets yang sama untuk
// kasih judul karya, username pembuat, dan urutan juara yang sebenarnya.
// Contoh isi:
// {
//   "placeholder1.webp": { "title": "Senja Kampus", "username": "johndoe", "rank": 1 }
// }
// Kalau file ini tidak ada, atau entry untuk file tertentu tidak ada,
// otomatis fallback ke nama file sebagai judul, username dikosongkan,
// dan rank mengikuti urutan file (juara 1 = file pertama, dst).
function readMeta(absoluteDir: string): Record<string, AssetMetaEntry> {
  const metaPath = path.join(absoluteDir, "meta.json");
  if (!fs.existsSync(metaPath)) return {};
  try {
    const raw = fs.readFileSync(metaPath, "utf-8");
    return JSON.parse(raw) as Record<string, AssetMetaEntry>;
  } catch {
    return {};
  }
}

// Membaca semua file di folder assets yang dimaksud, urutan alfanumerik
// natural, dan hanya file dengan ekstensi gambar/video yang dikenali.
// Ganti isi folder ini kapan saja -- nama file dan jumlahnya bebas.
// Untuk folder karya-terbaik-*, urutan file = urutan juara (juara 1
// adalah file pertama secara alfanumerik), kecuali di-override lewat
// meta.json.
export function listAssets(key: AssetFolderKey): AssetFile[] {
  const relativeDir = ASSET_FOLDERS[key];
  const absoluteDir = path.join(process.cwd(), relativeDir);

  if (!fs.existsSync(absoluteDir)) return [];

  const meta = readMeta(absoluteDir);

  const entries = fs
    .readdirSync(absoluteDir, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((fileName) => fileName !== "meta.json")
    .filter((fileName) => getFileType(fileName) !== null)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  return entries.map((fileName, index) => {
    const entryMeta = meta[fileName];
    return {
      fileName,
      url: `/api/assets/${key}/${encodeURIComponent(fileName)}`,
      type: getFileType(fileName) as "image" | "video",
      title: entryMeta?.title || formatTitle(fileName),
      username: entryMeta?.username,
      rank: entryMeta?.rank ?? index + 1,
    };
  });
}