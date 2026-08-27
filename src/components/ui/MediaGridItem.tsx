// src/components/ui/MediaGridItem.tsx
"use client";
import { useState } from "react";
import { AssetFile } from "@/lib/assets";
import GradientBorder from "@/components/ui/GradientBorder";
function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}
interface MediaGridItemProps {
  item: AssetFile;
  onOpen: (item: AssetFile) => void;
}
export default function MediaGridItem({ item, onOpen }: MediaGridItemProps) {
  const [ratio, setRatio] = useState(1);
  return (
    <div className="mb-4" style={{ breakInside: "avoid" }}>
      <GradientBorder className="group relative overflow-hidden rounded-lg bg-gray-300">
        <button
          type="button"
          onClick={() => onOpen(item)}
          aria-label={`Buka ${item.title}`}
          className="block w-full"
          style={{ aspectRatio: ratio }}
        >
          {item.type === "image" ? (
            <img
              src={item.url}
              alt={item.title}
              onLoad={(e) => {
                const { naturalWidth, naturalHeight } = e.currentTarget;
                if (naturalWidth && naturalHeight) {
                  setRatio(naturalWidth / naturalHeight);
                }
              }}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <>
              <video
                src={item.url}
                muted
                playsInline
                preload="metadata"
                onLoadedMetadata={(e) => {
                  const { videoWidth, videoHeight } = e.currentTarget;
                  if (videoWidth && videoHeight) {
                    setRatio(videoWidth / videoHeight);
                  }
                }}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-dark/55 text-neutral-light-bg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                  <PlayIcon />
                </div>
              </div>
            </>
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-dark/85 via-primary-dark/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <p className="truncate text-left font-serif text-sm font-bold text-neutral-light-bg">
              {item.title}
            </p>
            {item.username && (
              <p className="truncate text-left font-sans text-xs text-neutral-light-bg/80">
                @{item.username}
              </p>
            )}
          </div>
        </button>
      </GradientBorder>
    </div>
  );
}