export interface ImageAsset {
  src: string;
  alt: string;
  caption?: string;
}

export interface VideoAsset {
  src: string;
  title: string;
  thumbnail?: string;
}

export interface MediaItem {
  id: string;
  type: "photo" | "video";
  title: string;
  description?: string;
  src: string;
}

export interface NavLink {
  label: string;
  href: string;
}
