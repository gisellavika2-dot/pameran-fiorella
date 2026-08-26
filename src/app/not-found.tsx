import Link from "next/link";

// 404 page
export default function NotFound() {
  return (
    <div
      className="relative flex flex-1 flex-col items-center justify-center px-5 pt-[72px] pb-12 sm:px-8 sm:pt-[88px] sm:pb-16"
      style={{
        background: [
          "radial-gradient(circle at 9% 16%, rgba(101,144,194,.58), transparent 31%)",
          "radial-gradient(circle at 88% 30%, rgba(54,74,140,.72), transparent 38%)",
          "radial-gradient(ellipse at 52% -12%, rgba(168,196,212,.2), transparent 48%)",
          "linear-gradient(135deg, var(--ink) 0%, #192a5a 48%, #2d437f 100%)",
        ].join(", "),
      }}
    >
      {/* eyebrow label */}
      <div className="mb-4 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--sky)] sm:mb-6 sm:text-xs">
        <span className="h-px w-6 bg-[var(--sky)] sm:w-10" />
        error
        <span className="h-px w-6 bg-[var(--sky)] sm:w-10" />
      </div>

      <span className="block font-serif text-7xl font-bold leading-none tracking-[-0.06em] text-[var(--blue)] sm:text-[8rem] lg:text-[12rem]">
        404
      </span>

      <p className="mt-5 font-serif text-xl leading-snug text-[var(--paper)] sm:mt-8 sm:text-3xl lg:text-4xl">
        Nyari halaman apa sih?
      </p>

      <p className="mx-auto mt-3 max-w-md text-xs leading-relaxed text-[var(--sky)] sm:mt-5 sm:text-base">
        Page yang dicari tidak ditemukan D:
      </p>

      <Link
        href="/"
        className="group mx-auto mt-6 inline-flex w-fit items-center gap-3 rounded-full bg-[var(--sky)] px-4 py-2.5 text-xs font-bold text-[var(--ink)] transition-colors hover:bg-[var(--paper)] sm:mt-10 sm:gap-5 sm:px-6 sm:py-3 sm:text-sm"
      >
        Balik ke Fiorella
        <span className="text-base transition-transform group-hover:translate-x-1 sm:text-xl">
          &rarr;
        </span>
      </Link>
    </div>
  );
}
