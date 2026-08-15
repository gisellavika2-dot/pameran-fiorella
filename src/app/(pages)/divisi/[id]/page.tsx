// src/app/(pages)/divisi/[id]/page.tsx

import Link from "next/link";
import { divisions } from "@/data/divisions";
import Button from "@/components/ui/Button";
import { ScrollSnapContainer, ScrollSnapSection } from "@/components/ui/ScrollSnap";

interface PageProps {
  params: {
    id: string;
  };
}

export default function DivisiDetailPage({ params }: PageProps) {
  const divisionId = parseInt(params.id);
  const division = divisions.find((d) => d.id === divisionId);

  if (!division) {
    return (
      <div className="py-16 md:py-24">
        <div className="section-container text-center">
          <h1 className="text-4xl font-bold mb-4">Divisi tidak ditemukan</h1>
          <p className="text-gray-600 mb-8">
            Divisi yang Anda cari tidak tersedia.
          </p>
          <Link href="/">
            <Button variant="primary">Kembali ke Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <ScrollSnapContainer>
      {/* Logo Section */}
      <ScrollSnapSection>
        <div className="w-full py-16 md:py-24">
          <div className="section-container">
            <Link
              href="/"
              className="text-blue-600 hover:underline mb-8 inline-block"
            >
              ← Kembali ke Home
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Logo {division.name}</span>
              </div>
              <div>
                <h1 className="section-title mb-4">{division.name}</h1>
                <p className="text-gray-600 text-lg mb-4">
                  {division.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollSnapSection>

      {/* Gallery Section */}
      <ScrollSnapSection>
        <div className="w-full py-16 md:py-24 bg-gray-50">
          <div className="section-container">
            <h2 className="text-2xl font-bold mb-8">Galeri Divisi</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-gray-200 rounded-lg h-40 flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  <span className="text-gray-400">Foto Divisi {item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollSnapSection>

      {/* Coordinator Section */}
      <ScrollSnapSection>
        <div className="w-full py-16 md:py-24">
          <div className="section-container">
            <h2 className="text-2xl font-bold mb-8">Koordinator</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Foto</span>
                </div>
                <h3 className="font-bold text-lg">{division.coordinatorName}</h3>
                <p className="text-gray-600">{division.coordinatorRole}</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollSnapSection>

      {/* Members Section */}
      <ScrollSnapSection>
        <div className="w-full py-16 md:py-24 bg-gray-50">
          <div className="section-container">
            <h2 className="text-2xl font-bold mb-8">Anggota Divisi</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="text-center">
                  <div className="bg-gray-200 rounded-lg h-32 flex items-center justify-center mb-2">
                    <span className="text-gray-400 text-sm">Anggota {item}</span>
                  </div>
                  <p className="text-sm text-gray-600">Nama Anggota {item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollSnapSection>

      {/* Activities Section */}
      <ScrollSnapSection>
        <div className="w-full py-16 md:py-24">
          <div className="section-container">
            <h2 className="text-2xl font-bold mb-8">Foto Kegiatan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="bg-gray-200 rounded-lg h-48 flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  <span className="text-gray-400">Kegiatan {item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollSnapSection>
    </ScrollSnapContainer>
  );
}