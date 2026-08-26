// src/app/(pages)/kompilasi-karya/page.tsx

import Link from "next/link";
import Button from "@/components/ui/Button";

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}

function FilmIcon() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="3" width="20" height="18" rx="2" ry="2" />
      <line x1="7" y1="3" x2="7" y2="21" />
      <line x1="17" y1="3" x2="17" y2="21" />
      <line x1="2" y1="8" x2="7" y2="8" />
      <line x1="2" y1="16" x2="7" y2="16" />
      <line x1="17" y1="8" x2="22" y2="8" />
      <line x1="17" y1="16" x2="22" y2="16" />
    </svg>
  );
}

export default function KompilasiKaryaPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="section-container">
        {/* Header */}
        <div className="mb-16">
          <Link
            href="/sayembara"
            className="font-sans text-primary-dark hover:text-[#364A8C] underline mb-8 inline-block"
          >
            ← Kembali ke Sayembara
          </Link>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Kompilasi Karya Video
          </h1>
          <p className="font-sans text-gray-600 text-lg">
            Tonton kompilasi video-video terbaik dari sayembara visual Fiorella.
            Setiap video menceritakan kisah unik dari acara kami.
          </p>
        </div>

        {/* Video Gallery */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="bg-gray-300 rounded-lg h-64 flex items-center justify-center group-hover:bg-gray-400 transition-colors relative overflow-hidden">
                  <span className="font-sans text-gray-500">Video {item}</span>
                  <div className="absolute inset-0 flex items-center justify-center bg-primary-dark bg-opacity-40 group-hover:bg-opacity-60 transition-all">
                    <div className="text-neutral-light-bg">
                      <PlayIcon />
                    </div>
                  </div>
                </div>
                <h3 className="font-serif font-semibold text-primary-dark mt-3 mb-1">
                  Judul Video {item}
                </h3>
                <p className="font-sans text-sm text-gray-600">Pembuat Video</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Compilation */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl font-bold text-primary-dark mb-8">
            Kompilasi Utama
          </h2>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center mb-4">
            <div className="text-center">
              <div className="flex justify-center text-primary-dark mb-4">
                <FilmIcon />
              </div>
              <span className="font-sans text-gray-500">Video Kompilasi Utama</span>
            </div>
          </div>
          <div className="bg-neutral-light-bg p-6 rounded-lg">
            <h3 className="font-serif font-bold text-lg text-primary-dark mb-2">
              Kompilasi Highlight Fiorella
            </h3>
            <p className="font-sans text-gray-600 mb-4">
              Video bercerita lengkap tentang perjalanan acara Fiorella dari awal
              hingga akhir, menampilkan momen-momen terbaik dan paling berkesan.
            </p>
            <Button variant="primary">Tonton Sekarang</Button>
          </div>
        </section>

        {/* Info */}
        <section className="bg-neutral-light-bg p-8 rounded-lg text-center">
          <h2 className="font-serif font-bold text-lg text-primary-dark mb-2">
            Total Video: 5
          </h2>
          <p className="font-sans text-gray-600">
            4 video karya individual + 1 kompilasi utama
          </p>
        </section>
      </div>
    </div>
  );
}
