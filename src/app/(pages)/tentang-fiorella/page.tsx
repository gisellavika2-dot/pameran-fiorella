// src/app/(pages)/tentang-fiorella/page.tsx

import Link from "next/link";
import Button from "@/components/ui/Button";
import { ScrollSnapContainer, ScrollSnapSection } from "@/components/ui/ScrollSnap";

export default function TentangFiorellaPage() {
  return (
    <ScrollSnapContainer>
      {/* Hero Section */}
      <ScrollSnapSection>
        <div className="w-full py-16 md:py-24">
          <div className="section-container">
            <Link
              href="/"
              className="text-blue-600 hover:underline mb-8 inline-block"
            >
              ← Kembali ke Home
            </Link>
            <div className="py-12 bg-black text-white rounded-lg p-12">
              <h1 className="section-title text-white mb-4">Tentang Fiorella</h1>
              <p className="text-xl text-gray-200 leading-relaxed max-w-3xl">
                Fiorella adalah sebuah pameran foto dan video yang menampilkan
                dokumentasi lengkap dari sebuah kegiatan besar. Melalui lensa
                para fotografer berbakat, kami mengabadikan setiap momen
                berharga yang terjadi selama acara berlangsung.
              </p>
            </div>
          </div>
        </div>
      </ScrollSnapSection>

      {/* Values Section */}
      <ScrollSnapSection>
        <div className="w-full py-16 md:py-24 bg-gray-50">
          <div className="section-container">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Nilai Fiorella
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Dokumentasi",
                  description:
                    "Mengabadikan setiap momen penting dengan detail dan profesionalisme.",
                },
                {
                  title: "Kreativitas",
                  description:
                    "Menampilkan perspektif unik dan kreatif dari setiap karya visual.",
                },
                {
                  title: "Kolaborasi",
                  description:
                    "Merupakan hasil kerja sama dari berbagai divisi dan talenta.",
                },
              ].map((value, idx) => (
                <div key={idx} className="bg-white p-8 rounded-lg text-center">
                  <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollSnapSection>

      {/* Documentation Section */}
      <ScrollSnapSection>
        <div className="w-full py-16 md:py-24">
          <div className="section-container">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Dokumentasi Fiorella
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Jelajahi koleksi lengkap dokumentasi Fiorella melalui berbagai
              kategori. Dari foto hari demi hari, hingga galeri khusus dari
              setiap divisi.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="bg-gray-300 rounded-lg h-64 flex items-center justify-center mb-4">
                  <span className="text-gray-500">Foto Dokumentasi 1</span>
                </div>
                <h3 className="font-bold text-lg">Galeri Keseluruhan</h3>
                <p className="text-gray-600 mb-4">
                  Lihat semua foto dan video dari seluruh acara Fiorella.
                </p>
                <Link href="/hari-pelaksanaan">
                  <Button variant="outline" className="w-full">
                    Lihat Galeri
                  </Button>
                </Link>
              </div>

              <div>
                <div className="bg-gray-300 rounded-lg h-64 flex items-center justify-center mb-4">
                  <span className="text-gray-500">Foto Dokumentasi 2</span>
                </div>
                <h3 className="font-bold text-lg">Divisi</h3>
                <p className="text-gray-600 mb-4">
                  Jelajahi karya spesifik dari masing-masing divisi.
                </p>
                <Link href="/">
                  <Button variant="outline" className="w-full">
                    Lihat Divisi
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ScrollSnapSection>
    </ScrollSnapContainer>
  );
}