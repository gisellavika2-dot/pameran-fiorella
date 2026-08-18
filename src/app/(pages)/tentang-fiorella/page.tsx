"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// ==========================================
// SUB-KOMPONEN: ANIMASI ORBIT DINAMIS
// ==========================================
const OrbitSystem = () => {
  const [angle, setAngle] = useState(0);
  const requestRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  
  const isHoveredRef = useRef(false);
  
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);
  const activeTooltipRef = useRef<number | null>(null);

  // Animasi berputar menggunakan frame browser (60fps)
  const animate = (time: number) => {
    if (!lastTimeRef.current) lastTimeRef.current = time;
    const deltaTime = time - lastTimeRef.current;

    // Animasi HANYA berjalan jika tidak di-hover dan tidak ada tooltip yang di-klik
    if (!isHoveredRef.current && activeTooltipRef.current === null) {
      setAngle((prev) => (prev + deltaTime * 0.015) % 360);
    }
    
    lastTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    // 1. Jalankan animasi orbit
    requestRef.current = requestAnimationFrame(animate);
    
    // 2. Event listener untuk menutup tooltip otomatis saat layar di-scroll
    const handleScroll = () => {
      if (activeTooltipRef.current !== null) {
        setActiveTooltip(null);
        activeTooltipRef.current = null;
        isHoveredRef.current = false; // Mengizinkan orbit berputar lagi
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const orbitItems = [
    { id: 1, label: "01", title: "Nilai Pertama", offset: -90 }, // Start di atas
    { id: 2, label: "02", title: "Nilai Kedua", offset: 30 },    // Kanan bawah
    { id: 3, label: "03", title: "Nilai Ketiga", offset: 150 },  // Kiri bawah
  ];

  return (
    <div className="
      relative
      w-[280px] h-[280px]
      sm:w-[320px] sm:h-[320px]
      md:w-[500px] md:h-[500px]
      mt-10
    ">
      <div className="
        absolute inset-0 m-auto
        w-28 h-28
        md:w-[180px] md:h-[180px]
        bg-[#121E42]
        rounded-full
        flex items-center justify-center
        z-30
        shadow-2xl
        transition-transform
        hover:scale-105
        cursor-default
        p-5
        border-2 border-[#A8C4D4]/40
      ">
        <div className="relative w-20 h-20 md:w-[130px] md:h-[130px]">
          <Image
            src="/logo/Pictorial w_o type.png"
            alt="Logo Center"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Orbit Track Garis Putus-putus */}
      <div className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-[#EDECE6]/40 pointer-events-none" />

      {/* Render Node Orbit */}
      {orbitItems.map((item) => {
        // Kalkulasi Trigonometri
        const currentAngle = (angle + item.offset) * (Math.PI / 180);
        const x = 50 + 50 * Math.cos(currentAngle);
        const y = 50 + 50 * Math.sin(currentAngle);
        
        // Logika Pintar Arah Tooltip
        const isBottom = y > 50;
        
        // Mencegah tooltip terpotong di kiri/kanan layar HP:
        // Jika bola di ujung kiri (x < 25%), dorong ke kanan (left-0).
        // Jika bola di ujung kanan (x > 75%), dorong ke kiri (right-0).
        // Sisanya di tengah (left-1/2 -translate-x-1/2).
        let horizontalAlignClass = "left-1/2 -translate-x-1/2"; 
        if (x < 25) {
          horizontalAlignClass = "left-0"; 
        } else if (x > 75) {
          horizontalAlignClass = "right-0";
        }

        return (
          <div
            key={item.id}
            className="absolute z-40"
            style={{ 
              top: `${y}%`, 
              left: `${x}%`, 
              transform: "translate(-50%, -50%)" 
            }}
          >
            <div
              className="relative group/item flex flex-col items-center justify-center cursor-pointer"
              onMouseEnter={() => {
                isHoveredRef.current = true;
              }}
              onMouseLeave={() => {
                isHoveredRef.current = false;
                setActiveTooltip(null);
                activeTooltipRef.current = null;
              }}
              onClick={() => {
                const newActiveId = activeTooltip === item.id ? null : item.id;
                setActiveTooltip(newActiveId);
                activeTooltipRef.current = newActiveId;
              }}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#EDECE6] text-[#121E42] rounded-full flex items-center justify-center font-serif text-lg md:text-xl shadow-lg hover:scale-110 hover:bg-[#A8C4D4] hover:text-[#121E42] transition-all">
                {item.label}
              </div>

              {/* Tooltip dengan penyelarasan dinamis Kiri/Kanan dan Atas/Bawah */}
              <div
                className={`absolute ${
                  isBottom ? "bottom-full mb-4" : "top-full mt-4"
                } ${horizontalAlignClass} transition-opacity duration-300 bg-[#EDECE6] text-[#121E42] p-4 rounded-xl shadow-2xl text-sm w-56 text-left md:text-center pointer-events-none z-50 font-sans ${
                  activeTooltip === item.id ? "opacity-100" : "opacity-0 group-hover/item:opacity-100"
                }`}
              >
                <strong className="block mb-1 font-serif text-[#364A8C] text-base">
                  {item.title}
                </strong>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};


// ==========================================
// HALAMAN UTAMA
// ==========================================
export default function TentangFiorellaPage() {
  return (
    <main
      className="relative min-h-screen text-[#EDECE6] font-sans overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #121E42 0%, #283C66 20%, #364A8C 45%, #6590C2 70%, #364A8C 88%, #121E42 100%)",
      }}
    >

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-28 space-y-32">

        <section className="space-y-6">
          <div className="bg-[#EDECE6] rounded-3xl p-10 md:p-16 flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
            <div className="w-50 h-50 md:w-88 md:h-88 mb-2 relative">
              <Image
                src="/logo/Logo_Blue.png"
                alt="Fiorella Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="font-serif text-xl md:text-2xl italic text-[#6590C2] mb-8">
              "bunga kecil"
            </p>
            <p className="font-sans text-[#121E42] max-w-2xl leading-relaxed">
              Fiorella adalah sebuah pameran foto dan video yang menampilkan dokumentasi lengkap dari sebuah kegiatan besar. Melalui lensa para fotografer berbakat, kami mengabadikan setiap momen berharga yang terjadi selama acara berlangsung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#EDECE6] rounded-3xl p-8 shadow-xl transition-transform hover:-translate-y-1">
              <h2 className="font-serif text-2xl font-bold text-[#121E42] mb-4">Tema Besar</h2>
              <p className="font-sans text-[#121E42]/80 leading-relaxed text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="bg-[#EDECE6] rounded-3xl p-8 shadow-xl transition-transform hover:-translate-y-1">
              <h2 className="font-serif text-2xl font-bold text-[#121E42] mb-4">Konsep Besar</h2>
              <p className="font-sans text-[#121E42]/80 leading-relaxed text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center justify-center py-10">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#EDECE6] mb-8 drop-shadow-md">
            Nilai Utama
          </h2>

          <OrbitSystem />
        </section>

        <section className="flex flex-col items-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#EDECE6] mb-12 drop-shadow-md">
            Dokumentasi
          </h2>

          <div className="w-full max-w-4xl space-y-8">
            <div className="group relative w-full h-64 md:h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000&auto=format&fit=crop')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121E42]/95 via-[#121E42]/40 to-transparent" />
              <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#EDECE6] max-w-sm">
                    Hari 1 Pameran Fiorella
                  </h3>
                  <Link href="#" className="flex items-center gap-2 bg-[#EDECE6] text-[#121E42] px-5 py-3 rounded-full font-sans text-sm md:text-base font-semibold transition-transform hover:scale-105 hover:bg-white shadow-lg shrink-0">
                    Akses Drive
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative w-full h-64 md:h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121E42]/95 via-[#121E42]/40 to-transparent" />
              <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#EDECE6] max-w-sm">
                    Hari 2 Pameran Fiorella
                  </h3>
                  <Link href="#" className="flex items-center gap-2 bg-[#EDECE6] text-[#121E42] px-5 py-3 rounded-full font-sans text-sm md:text-base font-semibold transition-transform hover:scale-105 hover:bg-white shadow-lg shrink-0">
                    Akses Drive
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative w-full h-64 md:h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1000&auto=format&fit=crop')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121E42]/95 via-[#121E42]/40 to-transparent" />
              <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#EDECE6] max-w-sm">
                    Penayangan After Movie
                  </h3>
                  <Link href="#" className="flex items-center gap-2 bg-[#EDECE6] text-[#121E42] px-5 py-3 rounded-full font-sans text-sm md:text-base font-semibold transition-transform hover:scale-105 hover:bg-white shadow-lg shrink-0">
                    Akses Drive
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}