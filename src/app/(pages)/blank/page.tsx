import Image from "next/image";
import Link from "next/link";

export default function BlankPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#edece6] px-5 pb-16 pt-32 text-[#121e42] sm:px-8 lg:px-12">
      <section className="relative z-10 mx-auto grid max-w-6xl overflow-hidden rounded-[2.5rem] bg-[#121e42] lg:grid-cols-[1.1fr_.9fr]">
        <div className="flex min-h-[32rem] flex-col justify-between p-8 sm:p-12 lg:p-16">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#a8c4d4]">
            <span className="h-px w-10 bg-[#a8c4d4]" />
            Visual note 01
          </div>

          <div className="py-12">
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#a8c4d4]">
              A small study for Fiorella
            </p>
            <h1 className="max-w-xl font-serif text-6xl leading-[0.86] tracking-[-0.06em] text-[#edece6] sm:text-7xl lg:text-8xl">
              Every frame has a feeling.
            </h1>
          </div>

          <Link
            href="/"
            className="group inline-flex w-fit items-center gap-5 rounded-full bg-[#a8c4d4] px-5 py-3 text-sm font-bold text-[#121e42] transition-colors hover:bg-[#edece6]"
          >
            Return to Fiorella
            <span className="text-xl transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>

        <div className="relative min-h-80 overflow-hidden bg-[#364a8c]">
          <Image
            src="/figma/event-main.webp"
            alt="Fiorella visual exhibition"
            fill
            loading="eager"
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover opacity-80 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121e42]/80 via-transparent to-[#a8c4d4]/20" />
          <p className="absolute bottom-8 left-8 max-w-52 font-sans text-3xl leading-none text-[#edece6] sm:bottom-12 sm:left-12">
            An archive in motion.
          </p>
          <div className="absolute right-6 top-6 grid size-16 place-items-center rounded-full border border-[#edece6]/50 text-xs font-bold tracking-widest text-[#edece6]">
            2026
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-6xl gap-5 pt-5 md:grid-cols-3">
        {["Still", "Story", "Together"].map((word, index) => (
          <div
            key={word}
            className="rounded-3xl border border-[#121e42]/10 p-6 sm:p-8"
          >
            <span className="text-xs font-bold tracking-[0.18em] text-[#364a8c]">
              0{index + 1}
            </span>
            <h2 className="mt-12 font-serif text-4xl tracking-[-0.04em]">
              {word}
            </h2>
          </div>
        ))}
      </section>
    </div>
  );
}
