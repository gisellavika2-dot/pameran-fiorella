// src/lib/assets.ts
import karyaTerbaikFotoMeta from "@/app/(pages)/sayembara/assets/karya-terbaik-foto/meta.json";
import karyaTerbaikVideoMeta from "@/app/(pages)/sayembara/assets/karya-terbaik-video/meta.json";
import kompilasiFotoMeta from "@/app/(pages)/sayembara/assets/kompilasi-foto/meta.json";
import kompilasiVideoMeta from "@/app/(pages)/sayembara/assets/kompilasi-video/meta.json";

export interface AssetFile {
  fileName: string;
  url: string;
  type: "image" | "video";
  title: string;
  username?: string;
  rank: number;
}

interface AssetMetaItem {
  filename: string;
  title?: string;
  username?: string;
  juara?: number;
  type: "photo" | "video";
}

export type AssetFolderKey =
  | "karya-terbaik-foto"
  | "karya-terbaik-video"
  | "kompilasi-foto"
  | "kompilasi-video";

const ASSET_META: Record<AssetFolderKey, AssetMetaItem[]> = {
  "karya-terbaik-foto": karyaTerbaikFotoMeta.items as AssetMetaItem[],
  "karya-terbaik-video": karyaTerbaikVideoMeta.items as AssetMetaItem[],
  "kompilasi-foto": kompilasiFotoMeta.items as AssetMetaItem[],
  "kompilasi-video": kompilasiVideoMeta.items as AssetMetaItem[],
};

function formatTitle(fileName: string): string {
  const withoutExt = fileName.replace(/\.[^.]+$/, "");
  return withoutExt.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export function listAssets(key: AssetFolderKey): AssetFile[] {
  return ASSET_META[key].map((item, index) => ({
    fileName: item.filename,
    url: `/sayembara/assets/${key}/${encodeURIComponent(item.filename)}`,
    type: item.type === "video" ? "video" : "image",
    title: item.title || formatTitle(item.filename),
    username: item.username,
    rank: item.juara ?? index + 1,
  }));
}
