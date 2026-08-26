'use client';

import Image, { type StaticImageData } from "next/image";
import React, { use, useRef, useState } from 'react';
import Link from "next/link";
import { schedule } from "@/data/schedule";
import sioA2 from "../SIO/SIO_a (2).jpg";
import sioC from "../SIO/SIO_c.jpg";
import sioC2 from "../SIO/SIO_c (2).jpg";
import sioM from "../SIO/SIO_m.jpg";
import sioM2 from "../SIO/SIO_m (2).jpg";
import sioP from "../SIO/SIO_p.jpg";
import sioP2 from "../SIO/SIO_p (2).jpg";
import sioR from "../SIO/SIO_r.jpg";
import sioR2 from "../SIO/SIO_r (2).jpg";
import sioT from "../SIO/SIO_t.jpg";
import sioT2 from "../SIO/SIO_t (2).jpg";
import sioT3 from "../SIO/SIO_t (3).jpg";
import sioVin from "../SIO/SIO_vin.jpg";
import sioVin2 from "../SIO/SIO_vin (2).jpg";
import penanaman2 from "../Penanaman/PENANAMAN_2.jpg";
import penanaman3 from "../Penanaman/PENANAMAN_3.jpg";
import penanamanA from "../Penanaman/Penanaman_a.jpg";
import penanamanA2 from "../Penanaman/Penanaman_a (2).jpg";
import penanamanC1 from "../Penanaman/PENANAMAN_c (1).jpg";
import penanamanC2 from "../Penanaman/PENANAMAN_c (2).jpg";
import penanamanClara3 from "../Penanaman/Penanaman_Clara Dorothea Widjaja_3.jpg";
import penanamanP1 from "../Penanaman/Penanaman_p (1).jpg";
import penanamanP2 from "../Penanaman/Penanaman_p (2).jpg";
import penanamanR1 from "../Penanaman/Penanaman_r (1).jpg";
import penanamanR2 from "../Penanaman/Penanaman_r (2).jpg";
import penanamanT1 from "../Penanaman/Penanaman_t (1).jpg";
import penanamanT2 from "../Penanaman/Penanaman_t (2).jpg";
import penanamanVin1 from "../Penanaman/PENANAMAN_vin (1).jpg";
import penanamanVin2 from "../Penanaman/PENANAMAN_vin (2).jpg";
import penyinaranA1 from "../Penyinaran/Penyinaran_a (1).jpg";
import penyinaranA2 from "../Penyinaran/Penyinaran_a (2).jpg";
import penyinaranC1 from "../Penyinaran/PENYINARAN_c (1).jpg";
import penyinaranC2 from "../Penyinaran/PENYINARAN_c (2).jpg";
import penyinaranClara2 from "../Penyinaran/Penyinaran_Clara_2.jpg";
import penyinaranM1 from "../Penyinaran/PENYINARAN_m (1).jpg";
import penyinaranM2 from "../Penyinaran/PENYINARAN_m (2).jpg";
import penyinaranP1 from "../Penyinaran/Penyinaran_p (1).jpg";
import penyinaranP2 from "../Penyinaran/Penyinaran_p (2).jpg";
import penyinaranR1 from "../Penyinaran/Penyinaran_r (1).jpg";
import penyinaranR2 from "../Penyinaran/Penyinaran_r (2).jpg";
import penyinaranVin1 from "../Penyinaran/PENYINARAN_vin (1).jpg";
import penyinaranVin2 from "../Penyinaran/PENYINARAN_vin (2).jpg";
import penyinaranT1 from "../Penyinaran/PENYIRAMAN_t (1).jpg";
import penyinaranT2 from "../Penyinaran/PENYIRAMAN_t (2).jpg";
import perekahan1 from "../Perekahan/Perekahan (1).jpg";
import perekahan2 from "../Perekahan/Perekahan (2).jpg";
import perekahan3 from "../Perekahan/Perekahan (3).jpg";
import perekahan4 from "../Perekahan/Perekahan (4).jpg";
import perekahan5 from "../Perekahan/Perekahan (5).jpg";
import perekahan6 from "../Perekahan/Perekahan (6).jpg";
import perekahan7 from "../Perekahan/Perekahan (7).jpg";
import perekahan8 from "../Perekahan/Perekahan (8).jpg";
import perekahan9 from "../Perekahan/Perekahan (9).jpg";
import perekahan10 from "../Perekahan/Perekahan (10).jpg";
import perekahan11 from "../Perekahan/Perekahan (11).jpg";
import perekahan12 from "../Perekahan/Perekahan (12).jpg";
import perekahan13 from "../Perekahan/Perekahan (13).jpg";
import perekahan14 from "../Perekahan/Perekahan (14).jpg";
import perekahan15 from "../Perekahan/Perekahan (15).jpg";
import sts1 from "../STS/STS (1).jpg";
import sts2 from "../STS/STS (2).jpg";
import sts3 from "../STS/STS (3).jpg";
import sts4 from "../STS/STS (4).jpg";
import sts5 from "../STS/STS (5).jpg";
import sts6 from "../STS/STS (6).jpg";
import sts7 from "../STS/STS (7).jpg";
import sts8 from "../STS/STS (8).jpg";
import sts9 from "../STS/STS (9).jpg";
import sts10 from "../STS/STS (10).jpg";
import sts11 from "../STS/STS (11).jpg";
import sts12 from "../STS/STS (12).jpg";
import sts13 from "../STS/STS (13).jpg";
import sts14 from "../STS/STS (14).jpg";
import sts15 from "../STS/STS (15).jpg";
import "./hari-detail.css";

const eventImages = [
  "/figma/SIO.jpg",
  "/figma/Penanaman.jpg",
  "/figma/PENYINARAN.jpg",
  "/figma/PEREKAHAN.jpg",
  "/figma/STS.jpg",
];

const driveLinks = [
  "https://drive.google.com/drive/folders/19HWcXhPxFbkisOLGV-_3WcfdQVg7b4W6?usp=drive_link",
  "https://drive.google.com/drive/folders/125gFR9rp8zdmYFdBB5igxbIgdfqgnE-G?usp=drive_link",
  "https://drive.google.com/drive/folders/1md1JxvN57WGMUDhwHRs8HAMn1yMP0a8e?usp=drive_link",
  "https://drive.google.com/drive/folders/1frM6kgBxojOP12T0muXQs-pP2pCxa7x9?usp=drive_link",
  "https://drive.google.com/drive/folders/1NfP66bxmNqbkz2kG2LKn7kRkq688zHEj?usp=drive_link",
];

const sioGalleryImages = [
  sioA2,
  sioC,
  sioC2,
  sioM,
  sioM2,
  sioP,
  sioP2,
  sioR,
  sioR2,
  sioT,
  sioT2,
  sioT3,
  sioVin,
  sioVin2,
  "/figma/SIO.jpg",
];

const galleryImagesByDay: Array<Array<string | StaticImageData>> = [
  sioGalleryImages,
  [penanaman2, penanaman3, penanamanA, penanamanA2, penanamanC1, penanamanC2, penanamanClara3, penanamanP1, penanamanP2, penanamanR1, penanamanR2, penanamanT1, penanamanT2, penanamanVin1, penanamanVin2],
  [penyinaranA1, penyinaranA2, penyinaranC1, penyinaranC2, penyinaranClara2, penyinaranM1, penyinaranM2, penyinaranP1, penyinaranP2, penyinaranR1, penyinaranR2, penyinaranVin1, penyinaranVin2, penyinaranT1, penyinaranT2],
  [perekahan1, perekahan2, perekahan3, perekahan4, perekahan5, perekahan6, perekahan7, perekahan8, perekahan9, perekahan10, perekahan11, perekahan12, perekahan13, perekahan14, perekahan15],
  [sts1, sts2, sts3, sts4, sts5, sts6, sts7, sts8, sts9, sts10, sts11, sts12, sts13, sts14, sts15],
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
  const [selectedGalleryPhoto, setSelectedGalleryPhoto] = useState<string | StaticImageData | null>(null);

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

  function getGalleryPhoto(row: number, index: number) {
    const dayGallery = galleryImagesByDay[(scheduleDay?.day ?? 1) - 1];
    return dayGallery[row * 5 + (index % 5)];
  }

  function renderGalleryImage(photo: string | StaticImageData) {
    return <Image src={photo} alt={`Dokumentasi ${scheduleDay?.title}`} fill sizes="300px" className="object-cover" />;
  }

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
      className="hari-detail-page relative flex min-h-screen flex-col items-center overflow-y-auto overflow-x-hidden bg-[radial-gradient(circle_at_10%_12%,rgba(168,196,212,.62),transparent_27%),radial-gradient(circle_at_88%_32%,rgba(101,144,194,.2),transparent_24%),radial-gradient(circle_at_62%_88%,rgba(168,196,212,.34),transparent_30%),linear-gradient(180deg,#fff_0%,#f7f9fc_54%,#edece6_100%)] pt-12 font-sans text-[#121E42] select-none max-[760px]:pt-0"
    >
      <Link
        href="/hari-pelaksanaan"
        className="fixed top-5 right-5 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-[#121E42]/20 bg-[#EDECE6]/95 pb-1 text-3xl leading-none font-light text-[#121E42] shadow-lg backdrop-blur transition hover:scale-105 hover:bg-[#121E42] hover:text-[#EDECE6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#364A8C] md:top-8 md:right-8 max-[760px]:top-[max(14px,env(safe-area-inset-top))] max-[760px]:right-3.5 max-[760px]:h-[42px] max-[760px]:w-[42px] max-[760px]:text-[27px]"
        aria-label="Kembali ke Hari Pelaksanaan"
        title="Kembali ke Hari Pelaksanaan"
      >
        <span aria-hidden="true">×</span>
      </Link>
      <div className="pointer-events-auto z-10 mb-16 flex w-full max-w-7xl flex-col gap-7 bg-transparent px-4 pt-10 text-[#121E42] md:px-0 max-[1024px]:max-w-[calc(100%_-_32px)] max-[760px]:mb-14 max-[760px]:max-w-full max-[760px]:gap-5 max-[760px]:px-3.5 max-[760px]:pt-[58px] max-[380px]:px-2.5">
        <div className="relative mx-auto aspect-[2/1] w-full max-w-5xl overflow-hidden rounded-[2.5rem] border border-[#EDECE6]/20 bg-[#121E42] shadow-2xl max-[1024px]:min-h-0 max-[1024px]:rounded-[30px] max-[760px]:rounded-[22px] max-[380px]:rounded-[18px]">
          <Image src={eventImages[scheduleDay.id - 1]} alt={`Dokumentasi ${scheduleDay.title}`} fill priority sizes="(max-width: 768px) 100vw, 90vw" className="object-cover object-center pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121E42]/75 via-transparent to-transparent pointer-events-none" />
        </div>
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-2 md:px-6 max-[760px]:gap-1.5 max-[760px]:px-1">
          <p className="text-lg font-semibold text-[#364A8C] max-[760px]:text-[clamp(13px,4vw,16px)]">{scheduleDay.date}</p>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-[#121E42] md:text-6xl max-[1024px]:text-[clamp(36px,6vw,54px)] max-[1024px]:leading-[1.08] max-[760px]:text-[clamp(30px,10vw,42px)] max-[760px]:[overflow-wrap:anywhere] max-[380px]:text-[29px]">{scheduleDay.title}</h1>
          <p className="mt-2 max-w-4xl text-base leading-relaxed text-[#121E42]/80 max-[1024px]:text-[15px] max-[760px]:mt-1 max-[760px]:text-[clamp(13px,3.7vw,15px)] max-[760px]:leading-[1.6]">{scheduleDay.description}</p>
        </div>
      </div>

      <div className="pointer-events-auto z-10 mb-32 flex w-full flex-col gap-8 py-6 max-[760px]:mb-[72px] max-[760px]:gap-[22px] max-[760px]:pt-0 max-[760px]:pb-6">
        <hr className="w-full border-[#121E42]/20 max-[760px]:mb-2"/>
        <h2 className="px-4 text-center font-serif text-3xl font-bold text-[#121E42] md:text-4xl max-[760px]:text-[clamp(25px,8vw,34px)]">
          Galeri Dokumentasi
        </h2>
        <hr className="mb-10 w-full border-[#121E42]/20 max-[760px]:mb-2"/>
        
        <div className="mt-2 flex w-full flex-col gap-4 max-[760px]:gap-2.5">
          <div 
            ref={marquee1Ref}
            onMouseDown={(e) => handleMouseDown(e, marquee1Ref)}
            onMouseMove={(e) => handleMouseMove(e, marquee1Ref)}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="scrollbar-none flex w-max animate-[marqueeRight_35s_linear_infinite] gap-4 overflow-x-auto pr-4 select-none motion-reduce:[animation-play-state:paused]"
          >
            {Array.from({ length: 10 }).map((_, idx) => {
              const photo = getGalleryPhoto(0, idx);
              return (
              <button type="button" key={`row1-${idx}`} onClick={() => setSelectedGalleryPhoto(photo)} className="relative flex h-[180px] w-[300px] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#364A8C]/20 bg-gray-200 shadow-sm max-[760px]:h-auto max-[760px]:w-[clamp(220px,72vw,280px)] max-[760px]:aspect-5/3 max-[760px]:rounded-[10px] max-[380px]:w-[210px]">
                {renderGalleryImage(photo)}
              </button>
              );
            })}
          </div>

          <div 
            ref={marquee2Ref}
            onMouseDown={(e) => handleMouseDown(e, marquee2Ref)}
            onMouseMove={(e) => handleMouseMove(e, marquee2Ref)}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="scrollbar-none flex w-max animate-[marqueeLeft_35s_linear_infinite] gap-4 overflow-x-auto pr-4 select-none motion-reduce:[animation-play-state:paused]"
          >
            {Array.from({ length: 10 }).map((_, idx) => {
              const photo = getGalleryPhoto(1, idx);
              return (
              <button type="button" key={`row2-${idx}`} onClick={() => setSelectedGalleryPhoto(photo)} className="relative flex h-[180px] w-[300px] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#364A8C]/20 bg-gray-200 shadow-sm max-[760px]:h-auto max-[760px]:w-[clamp(220px,72vw,280px)] max-[760px]:aspect-5/3 max-[760px]:rounded-[10px] max-[380px]:w-[210px]">
                {renderGalleryImage(photo)}
              </button>
              );
            })}
          </div>

          <div 
            ref={marquee3Ref}
            onMouseDown={(e) => handleMouseDown(e, marquee3Ref)}
            onMouseMove={(e) => handleMouseMove(e, marquee3Ref)}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="scrollbar-none flex w-max animate-[marqueeRight_35s_linear_infinite] gap-4 overflow-x-auto pr-4 select-none motion-reduce:[animation-play-state:paused]"
          >
            {Array.from({ length: 10 }).map((_, idx) => {
              const photo = getGalleryPhoto(2, idx);
              return (
              <button type="button" key={`row3-${idx}`} onClick={() => setSelectedGalleryPhoto(photo)} className="relative flex h-[180px] w-[300px] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#364A8C]/20 bg-gray-200 shadow-sm max-[760px]:h-auto max-[760px]:w-[clamp(220px,72vw,280px)] max-[760px]:aspect-5/3 max-[760px]:rounded-[10px] max-[380px]:w-[210px]">
                {renderGalleryImage(photo)}
              </button>
              );
            })}
          </div>
        </div>

        <a
          href={driveLinks[scheduleDay.day - 1]}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-4 rounded-full bg-[#364A8C] px-8 py-3.5 font-semibold text-[#EDECE6] shadow-md transition-colors hover:bg-[#121E42] max-[760px]:mt-2 max-[760px]:inline-flex max-[760px]:min-h-[46px] max-[760px]:w-[calc(100%_-_32px)] max-[760px]:justify-center max-[760px]:px-5 max-[760px]:py-3 max-[760px]:text-[13px]"
        >
          Lihat Google Drive
        </a>
      </div>

      {selectedGalleryPhoto && (
        <div className="inline-photo-popover" role="dialog" aria-modal="true" aria-label="Pratinjau dokumentasi" onClick={() => setSelectedGalleryPhoto(null)}>
          <div className="inline-photo-popover-card" onClick={(event) => event.stopPropagation()}>
            <button type="button" onClick={() => setSelectedGalleryPhoto(null)} aria-label="Tutup pratinjau">×</button>
            <Image src={selectedGalleryPhoto} alt="Dokumentasi acara diperbesar" />
          </div>
        </div>
      )}

    </main>
  );
}
