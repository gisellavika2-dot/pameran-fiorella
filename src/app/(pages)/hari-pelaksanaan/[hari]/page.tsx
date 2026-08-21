// src/app/(pages)/hari-pelaksanaan/[hari]/page.tsx
'use client';

import Image from "next/image";
import React, { use, useRef } from 'react';
import Link from "next/link";
import { schedule } from "@/data/schedule";
import "./hari-detail.css";

const eventImages = [
  "/figma/event-main.png",
  "/figma/event-side-right.png",
  "/figma/event-side-left.png",
  "/figma/division-event.png",
  "/figma/division-documentation.png",
];

interface PageProps {
  params: Promise<{
    hari: string;
  }>;
}

export default function HariDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const day = parseInt(resolvedParams.hari);
  const scheduleDay = schedule.find((s) => s.day === day);

  const containerRef = useRef<HTMLDivElement>(null);
  const marquee1Ref = useRef<HTMLDivElement>(null);
  const marquee2Ref = useRef<HTMLDivElement>(null);
  const marquee3Ref = useRef<HTMLDivElement>(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const startY = useRef(0);
  const scrollTop = useRef(0);

  const handleContainerMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startY.current = e.pageY - (containerRef.current?.offsetTop || 0);
    scrollTop.current = containerRef.current?.scrollTop || 0;
  };

  const handleContainerMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    e.preventDefault();
    const y = e.pageY - containerRef.current.offsetTop;
    const walk = (y - startY.current) * 2;
    containerRef.current.scrollTop = scrollTop.current - walk;
  };

  const handleContainerMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseDown = (e: React.MouseEvent, ref: React.RefObject<HTMLDivElement | null>) => {
    isDragging.current = true;
    startX.current = e.pageX - (ref.current?.offsetLeft || 0);
    scrollLeft.current = ref.current?.scrollLeft || 0;
  };

  const handleMouseMove = (e: React.MouseEvent, ref: React.RefObject<HTMLDivElement | null>) => {
    if (!isDragging.current || !ref.current) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    ref.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  if (!scheduleDay) {
    return (
      <div className="min-h-screen bg-[#EDECE6] text-[#121E42] flex flex-col items-center justify-center p-6 text-center font-sans">
        <h1 className="text-3xl font-bold font-serif mb-2">Hari tidak ditemukan</h1>
        <p className="text-sm opacity-80 mb-6">Hari yang Anda cari tidak tersedia.</p>
        <Link 
          href="/hari-pelaksanaan" 
          className="bg-[#364A8C] text-[#EDECE6] px-6 py-2 rounded-full text-sm font-medium hover:bg-[#121E42] transition-all shadow-md"
        >
          Kembali ke Hari Pelaksanaan
        </Link>
      </div>
    );
  }

  return (
    <main 
      ref={containerRef}
      onMouseDown={handleContainerMouseDown}
      onMouseMove={handleContainerMouseMove}
      onMouseUp={handleContainerMouseUp}
      onMouseLeave={handleContainerMouseUp}
      className="hari-detail-page relative min-h-screen bg-[#EDECE6] text-[#121E42] flex flex-col items-center overflow-y-auto overflow-x-hidden pt-12 font-sans select-none"
    >
      <Link
        href="/hari-pelaksanaan"
        className="fixed right-5 top-5 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-[#121E42]/20 bg-[#EDECE6]/95 pb-1 text-3xl font-light leading-none text-[#121E42] shadow-lg backdrop-blur transition hover:scale-105 hover:bg-[#121E42] hover:text-[#EDECE6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#364A8C] md:right-8 md:top-8"
        aria-label="Kembali ke Hari Pelaksanaan"
        title="Kembali ke Hari Pelaksanaan"
      >
        <span aria-hidden="true">×</span>
      </Link>
      {/* Main Header Information */}
      <div className="w-full max-w-7xl bg-transparent flex flex-col gap-7 mb-16 pt-28 text-[#121E42] z-10 pointer-events-auto px-4 md:px-0">
        <div className="relative w-full h-[62vh] min-h-[560px] max-h-[780px] rounded-[2.5rem] overflow-hidden shadow-2xl bg-[#121E42] border border-[#EDECE6]/20">
          <Image src={eventImages[scheduleDay.id - 1]} alt={`Dokumentasi ${scheduleDay.title}`} fill priority sizes="(max-width: 768px) 100vw, 90vw" className="object-cover pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121E42]/75 via-transparent to-transparent pointer-events-none" />
        </div>
        <div className="flex flex-col gap-2 px-2 md:px-6">
          <p className="text-[#364A8C] text-lg font-semibold">{scheduleDay.date}</p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#121E42] tracking-tight">{scheduleDay.title}</h1>
          <p className="text-[#121E42]/80 text-base leading-relaxed max-w-4xl mt-2">{scheduleDay.description}</p>
        </div>
      </div>

      {/* Galeri Dokumentasi */}
      <div className="w-full flex flex-col gap-8 mb-32 z-10 pointer-events-auto py-6">
        <hr className="w-full border-[#121E42]/20"/>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-[#121E42] px-4">
          Galeri Dokumentasi
        </h2>
        <hr className="w-full border-[#121E42]/20 mb-10"/>
        
        <div className="flex flex-col gap-4 w-full mt-2">
          {/* Baris 1: Kanan */}
          <div 
            ref={marquee1Ref}
            onMouseDown={(e) => handleMouseDown(e, marquee1Ref)}
            onMouseMove={(e) => handleMouseMove(e, marquee1Ref)}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="flex w-max animate-marquee-right gap-4 overflow-x-auto cursor-grab active:cursor-grabbing scrollbar-none select-none"
          >
            {Array.from({ length: 15 }).map((_, idx) => (
              <div key={`row1-${idx}`} className="w-[300px] h-[180px] rounded-xl overflow-hidden shadow-sm border border-[#364A8C]/20 shrink-0 bg-gray-200 flex items-center justify-center pointer-events-none">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`https://picsum.photos/seed/row1-${scheduleDay.day}-${idx}/300/180`} alt="Gallery" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Baris 2: Kiri */}
          <div 
            ref={marquee2Ref}
            onMouseDown={(e) => handleMouseDown(e, marquee2Ref)}
            onMouseMove={(e) => handleMouseMove(e, marquee2Ref)}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="flex w-max animate-marquee-left gap-4 overflow-x-auto cursor-grab active:cursor-grabbing scrollbar-none select-none"
          >
            {Array.from({ length: 15 }).map((_, idx) => (
              <div key={`row2-${idx}`} className="w-[300px] h-[180px] rounded-xl overflow-hidden shadow-sm border border-[#364A8C]/20 shrink-0 bg-gray-200 flex items-center justify-center pointer-events-none">
                <img src={`https://picsum.photos/seed/row2-${scheduleDay.day}-${idx}/300/180`} alt="Gallery" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Baris 3: Kanan */}
          <div 
            ref={marquee3Ref}
            onMouseDown={(e) => handleMouseDown(e, marquee3Ref)}
            onMouseMove={(e) => handleMouseMove(e, marquee3Ref)}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="flex w-max animate-marquee-right gap-4 overflow-x-auto cursor-grab active:cursor-grabbing scrollbar-none select-none"
          >
            {Array.from({ length: 15 }).map((_, idx) => (
              <div key={`row3-${idx}`} className="w-[300px] h-[180px] rounded-xl overflow-hidden shadow-sm border border-[#364A8C]/20 shrink-0 bg-gray-200 flex items-center justify-center pointer-events-none">
                <img src={`https://picsum.photos/seed/row3-${scheduleDay.day}-${idx}/300/180`} alt="Gallery" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <a
          href="https://drive.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto bg-[#364A8C] hover:bg-[#121E42] text-[#EDECE6] font-semibold px-8 py-3.5 rounded-full shadow-md transition-colors mt-4"
        >
          Lihat Google Drive
        </a>
      </div>

    </main>
  );
}
