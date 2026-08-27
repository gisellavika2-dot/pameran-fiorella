// src/components/ui/MediaGrid.tsx
"use client";
import { useState } from "react";
import { AssetFile } from "@/lib/assets";
import MediaGridItem from "@/components/ui/MediaGridItem";
import MediaModal from "@/components/ui/MediaModal";
interface MediaGridProps {
  items: AssetFile[];
}
export default function MediaGrid({ items }: MediaGridProps) {
  const [selected, setSelected] = useState<AssetFile | null>(null);
  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center gap-2 rounded-2xl border border-dashed border-neutral-light-bg/30 px-8 py-16 text-center">
        <p className="font-serif text-lg text-neutral-light-bg">
          Belum ada karya
        </p>
        <p className="font-sans text-sm text-primary-light">
          Karya akan tampil di sini setelah tersedia di folder assets.
        </p>
      </div>
    );
  }
  return (
    <>
      <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
        {items.map((item) => (
          <MediaGridItem key={item.fileName} item={item} onOpen={setSelected} />
        ))}
      </div>
      {selected && (
        <MediaModal item={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}