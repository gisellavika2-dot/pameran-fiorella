import Link from "next/link";
import Button from "@/components/ui/Button";

export default function KompilasiKaryaPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="section-container">
        {/* Header */}
        <div className="mb-16">
          <Link href="/sayembara" className="text-blue-600 hover:underline mb-8 inline-block">
            ← Kembali ke Sayembara
          </Link>
          <h1 className="section-title mb-4">Kompilasi Karya Video</h1>
          <p className="text-gray-600 text-lg">
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
                  <span className="text-gray-500">Video {item}</span>
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all">
                    <div className="text-white text-4xl">▶</div>
                  </div>
                </div>
                <h3 className="font-semibold mt-3 mb-1">Judul Video {item}</h3>
                <p className="text-sm text-gray-600">Pembuat Video</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Compilation */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Kompilasi Utama</h2>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center mb-4">
            <div className="text-center">
              <div className="text-6xl mb-4">🎬</div>
              <span className="text-gray-500">Video Kompilasi Utama</span>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Kompilasi Highlight Fiorella</h3>
            <p className="text-gray-600 mb-4">
              Videobercerita lengkap tentang perjalanan acara Fiorella dari awal
              hingga akhir, menampilkan momen-momen terbaik dan paling berkesan.
            </p>
            <Button variant="primary">
              Tonton Sekarang
            </Button>
          </div>
        </section>

        {/* Info */}
        <section className="bg-gray-50 p-8 rounded-lg text-center">
          <h2 className="font-bold text-lg mb-2">Total Video: 5</h2>
          <p className="text-gray-600">
            4 video karya individual + 1 kompilasi utama
          </p>
        </section>
      </div>
    </div>
  );
}
