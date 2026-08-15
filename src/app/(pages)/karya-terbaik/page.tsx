import Link from "next/link";
import Button from "@/components/ui/Button";

export default function KaryaTerbaikPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="section-container">
        {/* Header */}
        <div className="mb-16">
          <Link href="/sayembara" className="text-blue-600 hover:underline mb-8 inline-block">
            ← Kembali ke Sayembara
          </Link>
          <h1 className="section-title mb-4">Karya Foto Terbaik</h1>
          <p className="text-gray-600 text-lg">
            Koleksi foto-foto terbaik yang terpilih dari sayembara visual
            Fiorella. Setiap karya mencerminkan talenta dan dedikasi fotografer
            kami.
          </p>
        </div>

        {/* Gallery */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <div
                key={item}
                className="group cursor-pointer"
              >
                <div className="bg-gray-300 rounded-lg h-64 flex items-center justify-center group-hover:bg-gray-400 transition-colors overflow-hidden">
                  <span className="text-gray-500">Foto Terbaik {item}</span>
                </div>
                <h3 className="font-semibold mt-3 mb-1">Judul Karya {item}</h3>
                <p className="text-sm text-gray-600">Nama Fotografer</p>
              </div>
            ))}
          </div>
        </section>

        {/* Info */}
        <section className="bg-gray-50 p-8 rounded-lg text-center">
          <h2 className="font-bold text-lg mb-2">Total Karya Terbaik: 9</h2>
          <p className="text-gray-600">
            Foto-foto pilihan yang memenangkan hati dewan juri sayembara Fiorella
          </p>
        </section>
      </div>
    </div>
  );
}
