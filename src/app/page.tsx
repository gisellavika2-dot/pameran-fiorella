import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { divisions } from "@/data/divisions";
import { schedule } from "@/data/schedule";
import DivisionAccordion from "@/components/ui/DivisionAccordion";
import EventCarousel from "@/components/ui/EventCarousel";

const behindTheScenesRows = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
];

export default function Home() {
  return (
    <main className="home-page">
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ "--hero-wave-height": "0px", background: "var(--ink)" } as CSSProperties}
      >
        <div className="hero-ornament hero-ornament-one" />
        <div className="hero-ornament hero-ornament-two" />
        
        <div className="hero-card flex flex-col items-center justify-center gap-8 p-8 md:flex-row md:gap-12 md:p-14">
          {/* Logo Fiorella */}
          <div className="hero-mark flex shrink-0 items-center justify-center">
            <Image 
              src="/logo/fiorella-blue-mark.png" 
              alt="Fiorella" 
              width={432} 
              height={407} 
              className="h-auto w-full max-w-[240px] object-contain md:max-w-[280px]"
              priority 
            />
          </div>
          
          {/* Hero Text */}
          {/* Mengubah items-start menjadi items-center di mobile (md:items-start untuk layar desktop) */}
          <div className="hero-copy flex flex-col items-center text-center md:items-start md:text-left justify-center">
            
            {/* Menambahkan mt-4 atau mt-6 agar ada jarak dari logo di mobile */}
            <span className="eyebrow mt-4 md:mt-0">“bunga kecil”</span>
            
            <h1>Fiorella</h1>
            
            <p>
              Tempat karya, cerita, dan kebersamaan tumbuh menjadi satu. Sebuah
              pameran dokumentasi perjalanan OMB UMN 2026.
            </p>
            
            <Link className="figma-button" href="/tentang-fiorella">
              Selengkapnya <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Hari Pelaksanaan Section */}
      <section className="editorial-section events-section">
        <p className="section-kicker">Linimasa kegiatan</p>
        <h2>Hari Pelaksanaan</h2>
        <EventCarousel items={schedule.slice(0, 5)} />
        <Link className="text-link" href="/hari-pelaksanaan">
          Lihat seluruh rangkaian <span>→</span>
        </Link>
      </section>

      {/* Foto Divisi Section */}
      <section id="divisi" className="editorial-section divisions-section">
        <p className="section-kicker">Orang-orang di balik cerita</p>
        <h2>Foto Divisi</h2>
        <DivisionAccordion items={divisions} />
      </section>

      {/* Dibalik Kepanitiaan Section */}
      <section className="editorial-section behind-section">
        <p className="section-kicker">Yang tak terlihat di panggung</p>
        <h2>Dibalik Kepanitiaan</h2>
        <div className="mosaic" aria-label="Kolase dokumentasi panitia">
          {behindTheScenesRows.map((row, rowIndex) => (
            <div
              className={`mosaic-row ${
                rowIndex === 1 ? "mosaic-row-left" : "mosaic-row-right"
              }`}
              key={rowIndex}
            >
              {Array.from({ length: 4 }, (_, setIndex) => (
                <div className="mosaic-track" key={setIndex}>
                  {row.map((photoIndex) => (
                    <div className="mosaic-cell" key={photoIndex}>
                      <img src={`https://picsum.photos/seed/fiorella-panitia-${photoIndex}/560/320`} alt="Placeholder dokumentasi panitia" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
        <Link className="figma-button dark-button" href="/dibalik-kepanitiaan">
          Hasil Dokumentasi <span>→</span>
        </Link>
      </section>

     {/* Sayembara Visual Section (Versi Sebelum Rilis) */}
      <section id="sayembara" className="editorial-section contest-section px-4 md:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/70 bg-[radial-gradient(ellipse_at_top_right,rgba(237,236,230,0.98),rgba(209,226,236,0.92)_58%,rgba(168,196,212,0.95)_100%)] p-7 shadow-[0_22px_70px_rgba(18,30,66,0.14)] backdrop-blur-md md:rounded-[2.5rem] md:p-12 lg:p-16">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center lg:gap-12">
            {/* Sisi Kiri: Judul & Keterangan */}
            <div className="flex w-full max-w-xl flex-col items-start text-left">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#364A8C]">
                Sayembara Visual
              </p>
              <h2 className="w-full !mx-0 !text-left font-serif text-3xl font-normal leading-[0.98] tracking-[-0.04em] text-[#121E42] md:text-5xl lg:text-6xl">
                Pemenang <br /> Sayembara Visual
              </h2>
              <p className="mt-5 max-w-lg text-left text-sm leading-relaxed text-[#121E42]/75 md:text-base">
                Pemenang sayembara visual akan diumumkan pada penayangan after movie.
              </p>
            </div>

            {/* Sisi Kanan: Badge Informasi Acara dengan Gradasi & Ambient Blush */}
            <div className="group relative w-full shrink-0 overflow-hidden rounded-2xl border border-white/25 bg-[linear-gradient(135deg,#364A8C_0%,#263870_52%,#121E42_100%)] p-5 text-[#EDECE6] shadow-[0_20px_40px_rgba(18,30,66,0.28)] backdrop-blur-md md:w-auto md:min-w-[300px] md:p-6">
              {/* Pendaran Blush Warna Halus (Aksen ambient glow) */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#6590C2]/40 blur-2xl transition duration-500 group-hover:bg-[#6590C2]/55" />
              <div className="pointer-events-none absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-[#A8C4D4]/25 blur-2xl" />

              <div className="relative z-10 space-y-4 md:space-y-5">
                {/* Tanggal */}
                <div className="flex items-center gap-3.5 text-xs font-medium leading-relaxed md:text-sm">
                  <svg className="h-5 w-5 shrink-0 text-[#A8C4D4]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>28 Agustus 2026</span>
                </div>

                {/* Waktu */}
                <div className="flex items-center gap-3.5 text-xs font-medium leading-relaxed md:text-sm">
                  <svg className="h-5 w-5 shrink-0 text-[#A8C4D4]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>17.30-22.00</span>
                </div>

                {/* Lokasi */}
                <div className="flex items-center gap-3.5 text-xs font-medium leading-relaxed md:text-sm">
                  <svg className="h-5 w-5 shrink-0 text-[#A8C4D4]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Function Hall, Gedung A, UMN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}