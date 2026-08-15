// src/app/(pages)/hari-pelaksanaan/page.tsx
'use client';

import React, { useRef } from 'react';
import Link from "next/link";
import { schedule } from "@/data/schedule";
import Card from "@/components/ui/Card";

export default function HariPelaksanaanPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startY = useRef(0);
  const scrollTop = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startY.current = e.pageY - (containerRef.current?.offsetTop || 0);
    scrollTop.current = containerRef.current?.scrollTop || 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    e.preventDefault();
    const y = e.pageY - containerRef.current.offsetTop;
    const walk = (y - startY.current) * 2;
    containerRef.current.scrollTop = scrollTop.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <main 
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="relative w-full min-h-screen bg-[#121E42] text-[#EDECE6] flex flex-col items-center py-24 px-6 overflow-x-hidden overflow-y-auto cursor-grab active:cursor-grabbing font-sans select-none"
    >
      {/* Aksen Filmstrip Kiri & Kanan */}
      <div className="fixed left-0 top-0 bottom-0 w-12 bg-repeat-y opacity-40 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='80' viewBox='0 0 40 80' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='5' y='10' width='30' height='60' fill='%23364A8C' rx='4'/%3E%3C/svg%3E")` }} />
      <div className="fixed right-0 top-0 bottom-0 w-12 bg-repeat-y opacity-40 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='80' viewBox='0 0 40 80' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='5' y='10' width='30' height='60' fill='%23364A8C' rx='4'/%3E%3C/svg%3E")` }} />

      <div className="section-container max-w-5xl mx-auto px-6 w-full z-10 flex flex-col items-center pointer-events-auto mb-32">
        <div className="flex flex-col gap-16 w-full">
          {schedule.map((day) => (
            <Link key={day.id} href={`/hari-pelaksanaan/${day.day}`} className="group">
              <Card hoverable className="bg-[#EDECE6] rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(101,144,194,0.3)] text-[#121E42] flex flex-col">
                <div className="w-full h-[400px] bg-gray-300 relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`https://picsum.photos/seed/schedule-${day.day}/1000/800`} alt={day.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none" />
                </div>
                <div className="p-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                  <div className="flex flex-col gap-1 max-w-2xl">
                    <p className="font-sans text-[#364A8C] text-lg font-medium">{day.date}</p>
                    <h2 className="font-serif text-4xl font-bold text-[#121E42] tracking-tight mb-2">{day.title}</h2>
                    <p className="font-sans text-[#121E42]/80 text-base leading-relaxed line-clamp-2">{day.description}</p>
                  </div>
                  <span className="bg-[#364A8C] text-[#EDECE6] px-8 py-3 rounded-full text-sm font-semibold shrink-0 group-hover:bg-[#121E42] transition-colors border border-transparent">
                    Lihat Dokumentasi
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}