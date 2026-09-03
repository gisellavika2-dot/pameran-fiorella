// src/app/(pages)/divisi/[id]/page.tsx
"use client";

import { useState, use, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { getDivisionById } from "@/data/divisions";
import Button from "@/components/ui/Button";
import { ScrollSnapSection } from "@/components/ui/ScrollSnap";
import SmoothSectionScroller from "@/components/ui/SmoothSectionScroller";

export default function DivisiDetailPage({ params, }: { params: Promise<{ id: string }>; }) {  
  const { id } = use(params);
  const division = getDivisionById(id);
  const [activeSesiIndex, setActiveSesiIndex] = useState(0);
  const [activeFotoIndex, setActiveFotoIndex] = useState(0);  

  if (!division) {
    return (
      <div className="relative bg-[#EDECE6] py-16 md:py-24">
        <div className="section-container relative z-10 text-center">
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

  const w1 = division.warna1;
  const w2 = division.warna2;
  const w3 = division.warna3 || division.warna1;

  // const nameLower = division.name?.toLowerCase() || "";
  // const adhiBiren = nameLower.includes("adhikara") || nameLower.includes("birendra") || nameLower.includes("sanchara");

  // const textColorMain = adhiBiren ? "#FFFFFF" : "#121E42";
  // const textColorSub = adhiBiren ? "#FFFFFF" : "#364A8C";
  const textColorMain = "#FFFFFF";
  const textColorSub = "#FFFFFF";

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [randomPhotos, setRandomPhotos] = useState<string[]>([]);

  useEffect(() => {
  const photos = division?.galeriFoto || [];

  if (photos.length > 0) {
    const shuffled = [...photos];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setRandomPhotos(shuffled.slice(0, 9));
  } else {
    setRandomPhotos([]);
  }
}, [division?.galeriFoto]);

useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setSelectedImage(null);
    }
  };

  if (selectedImage) {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
  } else {
    document.body.style.overflow = "unset";
  }

  return () => {
    document.body.style.overflow = "unset";
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [selectedImage]);

  return ( 
    <SmoothSectionScroller
      className="division-scroller smooth-section-page relative"
      scrollRoot="document"
    >
      <ScrollSnapSection>
        <div className="relative flex min-h-[100dvh] w-full flex-col justify-center overflow-hidden py-20 md:min-h-screen md:py-24" style={{ background: `linear-gradient(150deg, ${w1} 0%, ${w2} 50%, ${w3} 120%)`,}}>
          <div className="absolute inset-0 z-0 ">
            <Image
              src={division.bg}
              alt={`Foto Divisi ${division.name}`}
              fill
              loading="eager"
              sizes="100vw"
              className="object-cover opacity-20 mix-blend-overlay z-0"
            />
          </div>
          <div className="section-container z-10 w-full">
            <div className="grid grid-cols-1 items-center gap-5 sm:gap-8 md:grid-cols-12">
              <div className="md:col-span-4 flex justify-center">
                <div className="relative h-32 w-32 sm:h-48 sm:w-48 md:h-64 md:w-64">
                  <Image
                    src={division.logo}
                    alt={`Logo ${division.name}`}
                    fill
                    sizes="(max-width: 640px) 128px, (max-width: 768px) 192px, 256px"
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="text-left md:col-span-8">
                <h1
                  className="mb-1 font-serif text-3xl font-bold leading-tight drop-shadow-xl sm:text-4xl md:mb-2 md:text-5xl"
                  style={{ color: textColorMain }}
                >
                  {division.name}
                </h1>
                <h2
                  className="mb-3 font-sans text-lg font-semibold italic opacity-90 sm:text-xl md:mb-4 md:text-2xl"
                  style={{ color: textColorSub }}
                >
                  {division.nameEng}
                </h2>
                <p 
                  className="mb-2 font-sans text-base font-bold leading-relaxed sm:text-lg"
                  style={{ color: textColorMain }}
                >
                  &ldquo;{division.description}&rdquo;
                </p>
                <p 
                  className="font-sans text-sm leading-relaxed opacity-95 sm:text-base md:text-lg"
                  style={{ color: textColorMain }}
                >
                  {division.tugas}
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollSnapSection>

      {/* FOTO DIVISI  */}
      <ScrollSnapSection>
        <div className="relative flex min-h-[100dvh] w-full flex-wrap justify-center overflow-hidden py-16 md:min-h-screen md:py-24" style={{ backgroundColor: w1 }}>
          <Image
            src={division.bg}
            alt=""
            fill
            sizes="100vw"
            aria-hidden="true"
            className="z-0 object-cover opacity-20"
          />
          <div
            className="absolute inset-0 z-0"
            style={{
              background: `linear-gradient(150deg, ${w1}ed 0%, ${w2}e3 50%, ${w3}d9 100%)`,
            }}
            aria-hidden="true"
          />
          <div className="section-container z-10 flex w-full flex-col items-center">
            <h2
              className="mb-6 text-center font-serif text-3xl font-bold md:mb-8 md:text-5xl"
              style={{ color: "white" }}
            >
              Foto Divisi
            </h2>

            {division.fotoDivisi && division.fotoDivisi.length > 1 && (
              <div className="mb-5 flex max-w-full flex-wrap justify-center gap-1.5 rounded-xl bg-gray-100 p-1.5 md:mb-6 md:gap-2">
                {division.fotoDivisi.map((sesi, idx) => (
                  <button
                    key={sesi.idSesi || idx}
                    onClick={() => {
                      setActiveSesiIndex(idx);
                      setActiveFotoIndex(0);
                    }}
                    className={`min-h-10 rounded-lg px-3 py-2 text-xs font-semibold transition-all sm:px-4 sm:text-sm ${
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

            <div className="relative aspect-[4/3] w-full max-w-4xl overflow-hidden rounded-xl border-2 border-gray-100 bg-gray-100 shadow-lg sm:aspect-[16/9] md:h-[480px] md:rounded-2xl">
              {(division.fotoDivisi?.[activeSesiIndex]?.fotos?.length
                ? division.fotoDivisi[activeSesiIndex].fotos
                : ["/galeriFotoDivisi/foto_sementara.webp"]
              ).map((photo, idx) => {
                const isActive = idx === activeFotoIndex;

                return (
                  <Image
                    key={photo}
                    src={photo}
                    alt={isActive ? `Foto Divisi ${division.name}` : ""}
                    aria-hidden={!isActive}
                    fill
                    sizes="(max-width: 768px) calc(100vw - 48px), 896px"
                    className={`object-cover transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none ${
                      isActive
                        ? "z-10 scale-100 opacity-100"
                        : "z-0 scale-[1.035] opacity-0"
                    }`}
                  />
                );
              })}
            </div>

            {division.fotoDivisi?.[activeSesiIndex]?.fotos?.length > 1 && (
              <div className="mt-5 flex max-w-full items-center justify-center gap-3 sm:gap-6 md:mt-6">
                <button
                  onClick={() =>
                    setActiveFotoIndex((prev) =>
                      prev === 0
                        ? division.fotoDivisi[activeSesiIndex].fotos.length - 1
                        : prev - 1
                    )
                  }
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gray-200 bg-white p-2 text-gray-700 shadow transition-[transform,background-color,box-shadow] duration-200 hover:scale-105 hover:bg-gray-50 hover:shadow-md active:scale-95 motion-reduce:transition-none sm:h-12 sm:w-12 sm:p-2.5"
                  aria-label="Foto divisi sebelumnya"
                >
                  &#10094;
                </button>

                <div className="flex flex-wrap items-center justify-center gap-2">
                  {division.fotoDivisi[activeSesiIndex].fotos.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveFotoIndex(idx)}
                      aria-label={`Tampilkan foto ${idx + 1}`}
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
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gray-200 bg-white p-2 text-gray-700 shadow transition-[transform,background-color,box-shadow] duration-200 hover:scale-105 hover:bg-gray-50 hover:shadow-md active:scale-95 motion-reduce:transition-none sm:h-12 sm:w-12 sm:p-2.5"
                  aria-label="Foto divisi berikutnya"
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
        <div className="relative flex min-h-[100dvh] w-full flex-col justify-center overflow-hidden py-16 md:min-h-screen md:py-24" style={{ backgroundColor: w1 }}>
          <Image
            src={division.bg}
            alt=""
            fill
            sizes="100vw"
            aria-hidden="true"
            className="z-0 object-cover opacity-20"
          />
          <div
            className="absolute inset-0 z-0"
            style={{
              background: `linear-gradient(150deg, ${w1}e6 0%, ${w2}d9 50%, ${w3}c7 100%)`,
            }}
            aria-hidden="true"
          />
          <div className="section-container z-10 w-full">
            <h2
              className="mb-6 flex flex-wrap justify-center font-serif text-3xl font-bold md:mb-8 md:text-5xl"
              style={{ color: "white" }}
            >
              Sarya
            </h2>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
              {division.sarya.map((item, idx) => (
                <div
                  key={idx}
                  className=" justify-center flex aspect-[3/4] w-full max-w-40 flex-col overflow-hidden rounded-xl bg-white shadow-md sm:w-40 md:w-64 md:max-w-64"
                >
                  <div className="relative w-full h-full bg-gray-100">
                    <Image
                      src={item.fotoSarya}
                      alt={item.nama}
                      fill
                      sizes="(max-width: 640px) calc((100vw - 60px) / 2), (max-width: 768px) 160px, 256px"
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
        <div className="relative flex min-h-[100dvh] w-full flex-col justify-center overflow-hidden py-16 md:min-h-screen md:py-24" style={{ backgroundColor: w1 }}>
          <Image
            src={division.bg}
            alt=""
            fill
            sizes="100vw"
            aria-hidden="true"
            className="z-0 object-cover opacity-20"
          />
          <div
            className="absolute inset-0 z-0"
            style={{
              background: `linear-gradient(150deg, ${w1}e6 0%, ${w2}d9 50%, ${w3}c7 100%)`,
            }}
            aria-hidden="true"
          />
          <div className="section-container z-10 w-full">
            <h2 className="mb-6 text-center font-serif text-3xl font-bold md:mb-10 md:text-5xl" style={{ color: "white" }}>
              Koordinator
            </h2>
            <div className="flex flex-wrap justify-center gap-3 sm:flex sm:flex-wrap sm:gap-6">
              {division.cardFoto.flatMap((group) => group.isi).map((item, idx) => (
                <div key={idx} className="flex aspect-[3/4] w-full max-w-40 flex-col overflow-hidden rounded-xl bg-white shadow-md sm:w-40 md:w-64 md:max-w-64">
                  <div className="relative w-full h-full bg-gray-100">
                    <Image src={item.foto} alt={item.nama} fill sizes="(max-width: 640px) calc((100vw - 60px) / 2), (max-width: 768px) 160px, 256px" className="object-cover"/>
                  </div>
                </div>
              ))}
            </div>
            
            </div>
        </div>
      </ScrollSnapSection>
      
      {division.anggota && division.anggota.length > 0 && (
        <ScrollSnapSection>
          <div className="flex min-h-[100dvh] w-full flex-col justify-center py-16 md:min-h-screen md:py-24" style={{ background: `linear-gradient(150deg, ${w1} 0%, ${w2} 50%, ${w3} 100%)`,}}>
            <div className="section-container z-10 w-full">
              <h2 className="mb-6 text-center font-serif text-3xl font-bold md:mb-10 md:text-5xl" style={{ color: "white" }}>
                Anggota
              </h2>
              <div className="grid grid-cols-2 justify-center gap-3 sm:flex sm:flex-wrap sm:gap-6">
                {division.anggota.map((item, idx) => (
                  <div key={idx} className="flex aspect-[3/4] w-full max-w-40 flex-col overflow-hidden rounded-xl bg-white shadow-md sm:w-40 md:w-64 md:max-w-64">
                    <div className="relative w-full h-full bg-gray-100">
                      <Image src={item.fotoAnggota} alt={item.nama} fill sizes="(max-width: 640px) calc((100vw - 60px) / 2), (max-width: 768px) 160px, 256px" className="object-cover"/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollSnapSection>
      )}

      <ScrollSnapSection>
        <div className="min-h-screen w-full py-16 md:py-24" style={{ background: `linear-gradient(150deg, ${w1} 0%, ${w2} 50%, ${w3} 100%)`,}}>
          <div className="section-container flex flex-col items-center z-10">
            <h2 className="font-serif text-2xl md:text-5xl font-bold mb-8 text-center" style={{ color: "white" }}>
              Galeri Dokumentasi Divisi
            </h2>

            {randomPhotos.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 w-full max-w-4xl mx-auto">
                {randomPhotos.map((item, idx) => {
                  const isNinth = idx === 8;
                  return (
                    <div
                      key={`${item}-${idx}`}
                      onClick={() => setSelectedImage(item)}
                      className={`bg-white rounded-xl overflow-hidden shadow-md aspect-[16/9] relative transition-transform duration-300 hover:scale-[1.02] ${
                        isNinth ? "col-span-2 sm:col-span-1" : "col-span-1"
                      }`}
                    >
                      <Image
                        src={item}
                        alt={`Dokumentasi ${division.name} ${idx + 1}`}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-cover scale-110"
                      />
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

            {selectedImage && (
            <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={() => setSelectedImage(null)}>
              <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl font-bold z-10 w-10 h-10 flex items-center justify-center bg-black/50 rounded-full" aria-label="Tutup foto" >
                &times;
              </button>

              <div className="relative max-w-5xl w-full max-h-[90vh] aspect-[16/9] rounded-xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
                <Image
                  src={selectedImage}
                  alt="Dokumentasi Membesar"
                  fill
                  sizes="100vw"
                  className="object-contain"
                  loading="eager"
                />
              </div>
            </div>
            )}

          </div>
        </div>
      </ScrollSnapSection>
    </SmoothSectionScroller>
  );
}
