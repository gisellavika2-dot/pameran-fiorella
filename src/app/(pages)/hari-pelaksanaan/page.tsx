// src/app/(pages)/hari-pelaksanaan/page.tsx
'use client';

import React from 'react';
import Link from "next/link";
import { schedule } from "@/data/schedule";

export default function HariPelaksanaanPage() {
  return (
    <main 
      className="relative w-full min-h-screen bg-[#121E42] text-[#EDECE6] flex flex-col items-center py-20 px-2 sm:px-6 md:px-16 overflow-x-hidden overflow-y-auto font-sans"
    >
      <div className="max-w-6xl mx-auto w-full z-10 flex flex-col items-center pb-32">
        <div className="flex flex-col gap-12 w-full">
          {schedule.map((day, index) => (
            <Link key={day.id} href={`/hari-pelaksanaan/${day.day}`} className="group block w-full">
              <div className="bg-black/95 rounded-[2.5rem] p-5 sm:p-7 md:p-8 border-4 border-[#364A8C]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-500 group-hover:border-[#364A8C] group-hover:shadow-[0_0_40px_rgba(54,74,140,0.4)] group-hover:-translate-y-1 relative overflow-hidden flex flex-col w-full">
                
                {/* Aksen Film Strip Atas */}
                <div className="absolute top-2 left-6 right-6 sm:left-10 sm:right-10 h-2 flex justify-between opacity-40 pointer-events-none z-20">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="w-3 sm:w-4 h-1.5 bg-[#EDECE6] rounded-sm"></div>
                  ))}
                </div>

                {/* Aksen Film Strip Bawah */}
                <div className="absolute bottom-2 left-6 right-6 sm:left-10 sm:right-10 h-2 flex justify-between opacity-40 pointer-events-none z-20">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="w-3 sm:w-4 h-1.5 bg-[#EDECE6] rounded-sm"></div>
                  ))}
                </div>

                {/* Container Gambar */}
                <div className="w-full h-[460px] md:h-[600px] bg-black relative overflow-hidden rounded-[1.8rem] my-1 shadow-inner">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={`https://picsum.photos/seed/schedule-${day.day}/1400/1000`} 
                    alt={day.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100" 
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 pointer-events-none" />

                  {/* Header Konten di atas Gambar */}
                  <div className="absolute top-6 left-6 right-6 flex justify-between items-start pointer-events-none">
                    <div className="flex flex-col">
                      <span className="text-[#EDECE6] font-mono text-xs uppercase tracking-widest font-bold px-3.5 py-1.5 rounded-md backdrop-blur-md border border-white/10 w-fit mb-2 shadow-md">
                        {day.date}
                      </span>
                      <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#EDECE6] tracking-wide drop-shadow-lg">
                        {day.title}
                      </h2>
                    </div>

                    <div className="hidden md:flex flex-col items-end gap-1 font-mono text-xs text-white/80 bg-black/70 px-4 py-2 rounded-xl backdrop-blur-md border border-white/10 shadow-md">
                      <span className="tracking-widest uppercase">SESSION 0{index + 1}</span>
                      <span className="text-white font-bold">DOC / 2026</span>
                    </div>
                  </div>

                  {/* Footer Konten di atas Gambar */}
                  <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 pointer-events-none">
                    <p className="font-sans text-white/90 text-sm md:text-base leading-relaxed line-clamp-2 max-w-3xl drop-shadow-md">
                      {day.description}
                    </p>

                    <span className="bg-[#364A8C] text-white px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase shrink-0 group-hover:bg-white group-hover:text-[#121E42] transition-colors shadow-lg flex items-center gap-2 pointer-events-auto">
                      Lihat Dokumentasi &rarr;
                    </span>
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}