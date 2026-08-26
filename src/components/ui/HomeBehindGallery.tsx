"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";
import adhikaraPhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/ADHIKARA_1.webp";
import anantaraPhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/Anantara_1.webp";
import arthaTwoPhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/Artha_2.webp";
import arthaThreePhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/Artha_3.webp";
import birendraPhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/Birendra_1.webp";
import darakaPhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/Daraka_2.webp";
import janardanaOnePhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/Janardana_1.webp";
import janardanaTwoPhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/Janardana_2.webp";
import nayakaPhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/Nayaka_1.webp";
import sancharaPhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/SANCHARA_1.webp";
import sanchitaPhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/Sanchita_1.webp";
import swarnaPhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/SWARNA_1.webp";

const photos = [
  { preview: "/fotoKepanitiaan/landing/1.webp", full: adhikaraPhoto },
  { preview: "/fotoKepanitiaan/landing/2.webp", full: anantaraPhoto },
  { preview: "/fotoKepanitiaan/landing/3.webp", full: arthaTwoPhoto },
  { preview: "/fotoKepanitiaan/landing/4.webp", full: arthaThreePhoto },
  { preview: "/fotoKepanitiaan/landing/5.webp", full: birendraPhoto },
  { preview: "/fotoKepanitiaan/landing/6.webp", full: darakaPhoto },
  { preview: "/fotoKepanitiaan/landing/7.webp", full: janardanaOnePhoto },
  { preview: "/fotoKepanitiaan/landing/8.webp", full: janardanaTwoPhoto },
  { preview: "/fotoKepanitiaan/landing/9.webp", full: nayakaPhoto },
  { preview: "/fotoKepanitiaan/landing/10.webp", full: sancharaPhoto },
  { preview: "/fotoKepanitiaan/landing/11.webp", full: sanchitaPhoto },
  { preview: "/fotoKepanitiaan/landing/12.webp", full: swarnaPhoto },
];

type HomeBehindGalleryProps = {
  rows: number[][];
};

export default function HomeBehindGallery({ rows }: HomeBehindGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<StaticImageData | null>(null);

  return (
    <>
      <div className="mosaic" aria-label="Kolase dokumentasi panitia">
        {rows.map((row, rowIndex) => (
          <div className={`mosaic-row ${rowIndex === 1 ? "mosaic-row-left" : "mosaic-row-right"}`} key={rowIndex}>
            {Array.from({ length: 4 }, (_, setIndex) => (
              <div className="mosaic-track" key={setIndex}>
                {row.map((photoIndex) => {
                  const photo = photos[photoIndex % photos.length];
                  return (
                    <button className="mosaic-cell" type="button" key={photoIndex} onClick={() => setSelectedPhoto(photo.full)} aria-label="Perbesar dokumentasi panitia">
                      <Image src={photo.preview} alt="Dokumentasi panitia Fiorella" fill loading="lazy" sizes="(max-width: 760px) 190px, 280px" />
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        ))}
      </div>
      {selectedPhoto &&
        createPortal(
          <div className="inline-photo-popover" role="dialog" aria-modal="true" aria-label="Pratinjau dokumentasi" onClick={() => setSelectedPhoto(null)}>
            <div className="inline-photo-popover-card" onClick={(event) => event.stopPropagation()}>
              <button type="button" onClick={() => setSelectedPhoto(null)} aria-label="Tutup pratinjau">×</button>
              <Image src={selectedPhoto} alt="Dokumentasi panitia diperbesar" />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
