// src/app/(pages)/divisi/[id]/page.tsx
"use client";

import { useState, use, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { getDivisionById } from "@/data/divisions";
import Button from "@/components/ui/Button";
import { ScrollSnapContainer, ScrollSnapSection } from "@/components/ui/ScrollSnap";

interface PageProps {
  params: {
    id: string;
  };
}

export default function DivisiDetailPage({ params, }: { params: Promise<{ id: string }>; }) {  
  const { id } = use(params);
  const division = getDivisionById(id);
  const [activeSesiIndex, setActiveSesiIndex] = useState(0);
  const [activeFotoIndex, setActiveFotoIndex] = useState(0);  

  const [randomPhotos, setRandomPhotos] = useState<string[]>([]);

  useEffect(() => {
    if (division?.galeriFoto && division.galeriFoto.length > 0) {
      const shuffled = [...division.galeriFoto];
      
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      
      setRandomPhotos(shuffled.slice(0, 9));
    }
  }, [division?.galeriFoto]);

  if (!division) {
    return (
      <div className="py-16 md:py-24">
        <div className="section-container text-center">
          <h1 className="font-serif text-4xl font-bold text-primary-dark mb-4">
            Divisi tidak ditemukan
          </h1>
          <p className="font-sans text-gray-600 mb-8">
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
      <ScrollSnapSection>
        <div className="w-full py-16 md:py-24">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 flex justify-center">
                <div className="relative w-48 h-48 md:w-64 md:h-64">
                  <Image
                    src={division.logo}
                    alt={`Logo ${division.name}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="md:col-span-8">
                <h1
                  className="font-serif text-3xl md:text-5xl font-bold mb-2"
                  style={{ color: division.warna1 }}
                >
                  {division.name}
                </h1>
                <h2
                  className="font-sans text-xl md:text-2xl font-semibold mb-4 italic"
                  style={{ color: division.warna2 }}
                >
                  {division.nameEng}
                </h2>
                <p className="font-sans text-gray-600 text-lg leading-relaxed">
                  {division.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollSnapSection>

      {/* FOTO DIVISI  */}
      <ScrollSnapSection>
        <div className="flex flex-wrap justify-center w-full py-16 md:py-24 bg-neutral-light-bg">
          <div className="section-container flex flex-col items-center">
            <h2
              className="font-serif text-2xl md:text-3xl font-bold mb-8 text-center"
              style={{ color: division.warna1 }}
            >
              Foto Divisi
            </h2>

            {division.fotoDivisi && division.fotoDivisi.length > 1 && (
              <div className="flex flex-wrap justify-center gap-2 mb-6 p-1.5 bg-gray-100 rounded-xl">
                {division.fotoDivisi.map((sesi, idx) => (
                  <button
                    key={sesi.idSesi || idx}
                    onClick={() => {
                      setActiveSesiIndex(idx);
                      setActiveFotoIndex(0);
                    }}
                    className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                      activeSesiIndex === idx ? "shadow-md text-white" : "text-gray-600 hover:text-gray-900"
                    }`}
                    style={{
                      backgroundColor: activeSesiIndex === idx ? division.warna1 : "transparent",
                    }}
                  >
                    {sesi.namaSesi || `Sesi ${idx + 1}`}
                  </button>
                ))}
              </div>
            )}

            <div className="relative w-full max-w-4xl aspect-[16/9] h-80 md:h-[480px] rounded-2xl overflow-hidden shadow-lg border-2 border-gray-100 bg-gray-100">
              <Image
                src={
                  division.fotoDivisi?.[activeSesiIndex]?.fotos?.[activeFotoIndex] ||
                  "/foto.png"
                }
                alt={`Foto Divisi ${division.name}`}
                fill
                className="object-cover"
              />
            </div>

            {division.fotoDivisi?.[activeSesiIndex]?.fotos?.length > 1 && (
              <div className="flex items-center justify-center gap-6 mt-6">
                <button
                  onClick={() =>
                    setActiveFotoIndex((prev) =>
                      prev === 0
                        ? division.fotoDivisi[activeSesiIndex].fotos.length - 1
                        : prev - 1
                    )
                  }
                  className="p-2.5 w-12 rounded-full bg-white shadow border border-gray-200 text-gray-700 hover:bg-gray-50"
                >
                  &#10094;
                </button>

                <div className="flex items-center gap-2">
                  {division.fotoDivisi[activeSesiIndex].fotos.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveFotoIndex(idx)}
                      className={`rounded-full transition-all ${
                        activeFotoIndex === idx
                          ? "w-8 h-2.5 opacity-100"
                          : "w-2.5 h-2.5 bg-gray-300 opacity-40 hover:opacity-70"
                      }`}
                      style={{
                        backgroundColor:
                          activeFotoIndex === idx ? division.warna1 : undefined,
                      }}
                    />
                  ))}
                </div>

                <button
                  onClick={() =>
                    setActiveFotoIndex((prev) =>
                      prev === division.fotoDivisi[activeSesiIndex].fotos.length - 1
                        ? 0
                        : prev + 1
                    )
                  }
                  className="p-2.5 w-12 rounded-full bg-white shadow border border-gray-200 text-gray-700 hover:bg-gray-50"
                >
                  &#10095;
                </button>
              </div>
            )}
          </div>
        </div>
      </ScrollSnapSection>

{/* SARYA  */}
      <ScrollSnapSection>
        <div className="w-full py-16 md:py-24">
          <div className="section-container">
            <h2
              className="flex flex-wrap justify-center font-serif text-2xl md:text-3xl font-bold mb-8"
              style={{ color: division.warna1 }}
            >
              Sarya Divisi
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {division.sarya.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl overflow-hidden shadow-md w-64 aspect-[3/4] flex flex-col"
                >
                  <div className="relative w-full h-full bg-gray-100">
                    <Image
                      src={item.fotoSarya}
                      alt={item.nama}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </ScrollSnapSection>

      <ScrollSnapSection>
        <div className="w-full py-16 md:py-24 bg-neutral-light-bg">
          <div className="section-container">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-10 text-center" style={{ color: division.warna1 }}>
              Koordinator
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {division.cardFoto.flatMap((group) => group.isi).map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-md w-64 aspect-[3/4] flex flex-col">
                  <div className="relative w-full h-full bg-gray-100">
                    <Image src={item.foto} alt={item.nama} fill className="object-cover"/>
                  </div>
                </div>
              ))}
            </div>
            
            </div>
        </div>
      </ScrollSnapSection>

      <ScrollSnapSection>
        <div className="w-full py-16 md:py-24">
          <div className="section-container flex flex-col items-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: division.warna1 }}>
              Galeri Dokumentasi Divisi
            </h2>

            {randomPhotos.length > 0 ? (
              <div className="grid grid-cols-3 gap-3 md:gap-4 w-full max-w-4xl mx-auto">
                {randomPhotos.map((item, idx) => {
                  const isNinth = idx === 8;
                  return (
                    <div
                      key={`${item}-${idx}`}
                      className={`bg-white rounded-xl overflow-hidden shadow-md aspect-[16/9] relative transition-transform duration-300 hover:scale-[1.02] ${
                        isNinth ? "col-span-3 sm:col-span-1" : "col-span-1"
                      }`}
                    >
                      <Image src={item} alt={`Dokumentasi ${division.name} ${idx + 1}`} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover"/>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-3 md:gap-4 w-full max-w-4xl mx-auto">
                {Array.from({ length: 9 }).map((_, idx) => (
                  <div key={idx} className={`aspect-[3/4] bg-gray-200 animate-pulse rounded-xl ${ idx === 8 ? "col-span-3 sm:col-span-1" : "col-span-1"}`}/>
                ))}
              </div>
            )}
          </div>
        </div>
      </ScrollSnapSection>
    </ScrollSnapContainer>
  );
}