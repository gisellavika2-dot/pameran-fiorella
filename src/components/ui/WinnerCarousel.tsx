// src/components/ui/WinnerCarousel.tsx
"use client";
import { useState } from "react";
import { AssetFile } from "@/lib/assets";
import GradientBorder from "@/components/ui/GradientBorder";
interface WinnerCarouselSectionProps {
  title: string;
  items: AssetFile[];
}
export default function WinnerCarouselSection({
  title,
  items,
}: WinnerCarouselSectionProps) {
  const [index, setIndex] = useState(0);
  const goTo = (direction: 1 | -1) => {
    if (items.length === 0) return;
    setIndex((prev) => (prev + direction + items.length) % items.length);
  };
  const current = items[index];
  return (
    <div className="flex flex-col items-center">
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-[#A8C4D4]">
        Pemenang
      </p>
      <h1 className="mb-10 text-center font-serif text-3xl font-normal tracking-[-0.03em] text-neutral-light-bg md:text-4xl">
        {title}
      </h1>
      {items.length === 0 ? (
        <div className="mx-auto flex max-w-md flex-col items-center gap-2 rounded-2xl border border-dashed border-neutral-light-bg/30 px-8 py-16 text-center">
          <p className="font-serif text-lg text-neutral-light-bg">
            Belum ada karya
          </p>
          <p className="font-sans text-sm text-primary-light">
            Karya akan tampil di sini setelah tersedia di folder assets.
          </p>
        </div>
      ) : (
        <>
          <div className="mb-6 flex w-full max-w-2xl items-center justify-center gap-4 md:gap-6">
            <button
              onClick={() => goTo(-1)}
              aria-label="Sebelumnya"
              className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-neutral-light-bg/40 bg-neutral-light-bg/10 text-neutral-light-bg backdrop-blur-sm transition-colors hover:bg-neutral-light-bg hover:text-primary-dark"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <GradientBorder
              key={current.fileName}
              className="winner-carousel-media relative aspect-4/3 w-full max-w-md overflow-hidden rounded-2xl bg-gray-300"
            >
              {current.type === "image" ? (
                <img
                  src={current.url}
                  alt={current.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <video
                  src={current.url}
                  controls
                  playsInline
                  className="h-full w-full object-cover"
                />
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent" />
              <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-neutral-light-bg/30 bg-primary-dark/80 px-3 py-1 backdrop-blur-sm">
                <span className="font-sans text-xs font-semibold text-neutral-light-bg">
                  Juara {current.rank}
                </span>
              </div>
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-5">
                <p className="font-serif text-lg font-bold text-neutral-light-bg">
                  {current.title}
                </p>
                {current.username && (
                  <p className="font-sans text-xs text-neutral-light-bg/80">
                    {current.username}
                  </p>
                )}
              </div>
            </GradientBorder>
            <button
              onClick={() => goTo(1)}
              aria-label="Berikutnya"
              className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-neutral-light-bg/40 bg-neutral-light-bg/10 text-neutral-light-bg backdrop-blur-sm transition-colors hover:bg-neutral-light-bg hover:text-primary-dark"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-neutral-light-bg/20 bg-neutral-light-bg/10 px-4 py-2 backdrop-blur-sm">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Ke karya ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index
                    ? "w-6 bg-neutral-light-bg"
                    : "w-2 bg-neutral-light-bg/40 hover:bg-neutral-light-bg/70"
                }`}
              />
            ))}
          </div>
        </>
      )}
      <style jsx>{`
        .winner-carousel-media {
          animation: winnerFadeIn 0.4s ease;
        }
        @keyframes winnerFadeIn {
          from {
            opacity: 0;
            transform: scale(0.97);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}