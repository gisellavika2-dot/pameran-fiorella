import Link from "next/link";
import Button from "@/components/ui/Button";

export default function DibaliKepantitiaaPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="section-container">
        {/* Header */}
        <div className="mb-16">
          <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">
            ← Kembali ke Home
          </Link>
          <h1 className="section-title mb-4">Dibalik Kepanitiaan</h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Lihat perjalanan dan kerja keras tim yang telah membuat Fiorella
            menjadi sebuah acara yang luar biasa dan berkesan.
          </p>
        </div>

        {/* Team Gallery */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Tim Panitia</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="text-center">
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-4 hover:bg-gray-300 transition-colors">
                  <span className="text-gray-400 text-sm">Foto Tim {item}</span>
                </div>
                <h3 className="font-bold">Nama Panitia {item}</h3>
                <p className="text-sm text-gray-600">Posisi Panitia</p>
              </div>
            ))}
          </div>
        </section>

        {/* Behind The Scenes */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Proses Persiapan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <span className="text-gray-400">Foto Proses {item}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">Tahap Persiapan {item}</h3>
                  <p className="text-gray-600">
                    Deskripsi tentang tahap persiapan nomor {item} dalam
                    menjalankan acara Fiorella.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stories */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Cerita di Balik Layar</h2>
          <div className="space-y-6 max-w-3xl">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="bg-gray-50 p-8 rounded-lg border-l-4 border-black"
              >
                <h3 className="font-bold text-lg mb-2">Cerita {item}</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ini adalah cerita di balik layar dari proses pembuatan Fiorella.
                  Bagaimana tim bekerja keras, menghadapi tantangan, dan
                  bersama-sama menciptakan sesuatu yang bermakna dan indah.
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
