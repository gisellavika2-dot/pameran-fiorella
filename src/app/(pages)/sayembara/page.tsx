// src/app/(pages)/sayembara/page.tsx
import { ANNOUNCEMENT } from "@/data/constants";
import CategoryCard from "@/components/ui/CategoryCard";
import PillLink from "@/components/ui/PillLink";
import { listAssets } from "@/lib/assets";
function CalendarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function EventInfo() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#EDECE6]/14 bg-[#EDECE6]/8 p-6 backdrop-blur-md">
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#A8C4D4]/22 blur-2xl" />
      <p className="relative mb-4 text-[10px] font-bold uppercase tracking-[0.24em] text-[#A8C4D4]">
        Detail Acara
      </p>
      <div className="relative flex flex-col gap-4">
        <div className="flex items-center gap-3 text-[#EDECE6]">
          <CalendarIcon />
          <span className="font-sans text-sm">28 Agustus 2026</span>
        </div>
        <div className="flex items-center gap-3 text-[#EDECE6]">
          <ClockIcon />
          <span className="font-sans text-sm">17.30 - 22.00</span>
        </div>
        <div className="flex items-center gap-3 text-[#EDECE6]">
          <PinIcon />
          <span className="font-sans text-sm">Function Hall, Gedung A, UMN</span>
        </div>
      </div>
    </div>
  );
}
export default function SayembaraPage() {
  if (ANNOUNCEMENT === "no") {
    return (
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[radial-gradient(circle_at_16%_18%,rgba(101,144,194,0.42),transparent_30%),radial-gradient(circle_at_86%_12%,rgba(168,196,212,0.22),transparent_28%),linear-gradient(155deg,#121E42_0%,#24386F_52%,#364A8C_100%)] px-4 py-24 md:px-8 md:py-32">
        <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#6590C2]/18 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-8 h-80 w-80 rounded-full bg-[#A8C4D4]/14 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-14">
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#A8C4D4]">
                Sayembara Visual
              </p>
              <h1 className="font-serif text-4xl font-normal leading-[0.95] tracking-[-0.045em] text-[#EDECE6] md:text-6xl">
                Pemenang akan segera terungkap.
              </h1>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-[#EDECE6]/75 md:text-base">
                Pemenang sayembara visual akan diumumkan pada penayangan after movie.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PillLink href="/sayembara/foto" variant="light">
                  Kompilasi Sayembara Foto
                </PillLink>
                <PillLink href="/sayembara/video" variant="light">
                  Kompilasi Sayembara Video
                </PillLink>
              </div>
            </div>
            <EventInfo />
          </div>
        </div>
      </div>
    );
  }
  const topFoto = listAssets("karya-terbaik-foto")[0];
  const topVideo = listAssets("karya-terbaik-video")[0];
  return (
    <div className="gradient-fiorella flex min-h-screen flex-col items-center justify-center px-4 pb-16 pt-24 md:pb-24 md:pt-32">
      <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#A8C4D4]">
        Hasil Sayembara Visual
      </p>
      <h1 className="mb-10 text-center font-serif text-4xl font-normal leading-none tracking-[-0.045em] text-neutral-light-bg md:text-6xl">
        Karya Terbaik
      </h1>
      <div className="grid w-full max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col items-center gap-4">
          <CategoryCard
            href="/sayembara/video"
            label="Kategori Video"
            placeholder="Video Karya"
            media={topVideo}
          />
          <PillLink href="/sayembara/video" variant="light">
            Kompilasi Sayembara video
          </PillLink>
        </div>
        <div className="flex flex-col items-center gap-4">
          <CategoryCard
            href="/sayembara/foto"
            label="Kategori Foto"
            placeholder="Foto Karya"
            media={topFoto}
          />
          <PillLink href="/sayembara/foto" variant="light">
            Kompilasi Sayembara Foto
          </PillLink>
        </div>
      </div>
    </div>
  );
}