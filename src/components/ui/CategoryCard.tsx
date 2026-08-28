// src/components/ui/CategoryCard.tsx
import Link from "next/link";
import GradientBorder from "@/components/ui/GradientBorder";
import type { AssetFile } from "@/lib/assets";
function PlayIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}
interface CategoryCardProps {
  href: string;
  label: string;
  placeholder?: string;
  media?: AssetFile;
}
export default function CategoryCard({
  href,
  label,
  placeholder = "Foto Karya",
  media,
}: CategoryCardProps) {
  return (
    <Link href={href} className="group block w-full">
      <GradientBorder className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-gray-300 transition-transform group-hover:scale-[1.02]">
        {media ? (
          media.type === "image" ? (
            <img
              src={media.url}
              alt={media.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <>
              <video
                src={media.url}
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-primary-dark/25 text-neutral-light-bg transition-colors group-hover:bg-primary-dark/35">
                <PlayIcon />
              </div>
            </>
          )
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-sans text-gray-500">{placeholder}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-linear-to-t from-primary-dark/80 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="font-serif text-xl font-bold text-neutral-light-bg">
            {label}
          </p>
        </div>
      </GradientBorder>
    </Link>
  );
}