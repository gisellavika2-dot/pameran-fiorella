// src/app/(pages)/sayembara/video/page.tsx
import { ANNOUNCEMENT_STATUS } from "@/data/constants";
import PillLink from "@/components/ui/PillLink";
import WinnerCarouselSection from "@/components/ui/WinnerCarousel";
import MediaGrid from "@/components/ui/MediaGrid";
import { listAssets } from "@/lib/assets";

export default function SayembaraVideoPage() {
  const winners = ANNOUNCEMENT_STATUS.isOn ? listAssets("karya-terbaik-video") : [];
  const compilation = listAssets("kompilasi-video");

  return (
    <div className="gradient-fiorella min-h-screen px-4 pb-16 pt-24 md:pb-24 md:pt-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:justify-between">
          <PillLink href="/sayembara" direction="left" variant="light">
            Kembali ke Sayembara
          </PillLink>
          <PillLink href="/sayembara/foto" direction="right" variant="light">
            Lihat Sayembara Foto
          </PillLink>
        </div>
        {ANNOUNCEMENT_STATUS.isOn && (
          <WinnerCarouselSection title="Karya Terbaik Video" items={winners} />
        )}
        <div className={`text-center ${ANNOUNCEMENT_STATUS.isOn ? "mt-20 mb-10" : "mb-10"}`}>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-[#A8C4D4]">
            Semua Karya
          </p>
          <h2 className="font-serif text-3xl font-normal tracking-[-0.03em] text-neutral-light-bg md:text-4xl">
            Kompilasi Karya Video
          </h2>
        </div>
        <MediaGrid items={compilation} showTitle={ANNOUNCEMENT_STATUS.isOn} />
      </div>
    </div>
  );
}
