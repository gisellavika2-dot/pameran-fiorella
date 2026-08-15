// src/app/(pages)/karya-terbaik/page.tsx

import Link from "next/link";

export default function KaryaTerbaikPage() {
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
            Karya Foto Terbaik
          </h1>
          <p className="font-sans text-gray-600 text-lg">
            Koleksi foto-foto terbaik yang terpilih dari sayembara visual
            Fiorella. Setiap karya mencerminkan talenta dan dedikasi fotografer
            kami.
          </p>
        </div>

        {/* Gallery */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="bg-gray-300 rounded-lg h-64 flex items-center justify-center group-hover:bg-gray-400 transition-colors overflow-hidden">
                  <span className="font-sans text-gray-500">Foto Terbaik {item}</span>
                </div>
                <h3 className="font-sans font-semibold text-primary-dark mt-3 mb-1">
                  Judul Karya {item}
                </h3>
                <p className="font-sans text-sm text-gray-600">Nama Fotografer</p>
              </div>
            ))}
          </div>
        </section>

        {/* Info */}
        <section className="bg-neutral-light-bg p-8 rounded-lg text-center">
          <h2 className="font-serif font-bold text-lg text-primary-dark mb-2">
            Total Karya Terbaik: 9
          </h2>
          <p className="font-sans text-gray-600">
            Foto-foto pilihan yang memenangkan hati dewan juri sayembara Fiorella
          </p>
        </section>
      </div>
    </div>
  );
}