// src/components/ui/MediaModal.tsx

"use client";

import { useEffect } from "react";
import { AssetFile } from "@/lib/assets";
import CustomVideoPlayer from "@/components/ui/CustomVideoPlayer";

interface MediaModalProps {
  item: AssetFile;
  onClose: () => void;
}

export default function MediaModal({ item, onClose }: MediaModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-1000 flex items-center justify-center bg-primary-dark/90 px-4 pb-8 pt-[calc(var(--header-height)+24px)]"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-full max-w-[min(94vw,1600px)] flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Tutup"
          className="absolute -right-3 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-light-bg text-primary-dark transition-colors hover:bg-primary-light-alt"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="max-h-[calc(100svh-var(--header-height)-96px)] max-w-full overflow-hidden rounded-2xl">
          {item.type === "image" ? (
            <img
              src={item.url}
              alt={item.title}
              className="max-h-[calc(100svh-var(--header-height)-96px)] max-w-full object-contain"
            />
          ) : (
            <CustomVideoPlayer src={item.url} />
          )}
        </div>
      </div>
    </div>
  );
}