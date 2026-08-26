"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import adhikaraPhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/ADHIKARA_1.jpg";
import anantaraPhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/Anantara_1.jpg";
import arthaTwoPhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/Artha_2.jpg";
import arthaThreePhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/Artha_3.jpg";
import birendraPhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/Birendra_1.jpg";
import darakaPhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/Daraka_2.jpg";
import janardanaOnePhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/Janardana_1.jpg";
import janardanaTwoPhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/Janardana_2.jpg";
import nayakaPhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/Nayaka_1.jpg";
import sancharaPhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/SANCHARA_1.jpg";
import sanchitaPhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/Sanchita_1.jpg";
import swarnaPhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/SWARNA_1.jpg";

const photos = [adhikaraPhoto, anantaraPhoto, arthaTwoPhoto, arthaThreePhoto, birendraPhoto, darakaPhoto, janardanaOnePhoto, janardanaTwoPhoto, nayakaPhoto, sancharaPhoto, sanchitaPhoto, swarnaPhoto];

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
                  const src = photos[photoIndex % photos.length];
                  return (
                    <button className="mosaic-cell" type="button" key={photoIndex} onClick={() => setSelectedPhoto(src)} aria-label="Perbesar dokumentasi panitia">
                      <Image src={src} alt="Dokumentasi panitia Fiorella" fill sizes="(max-width: 760px) 190px, 280px" />
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        ))}
      </div>
      {selectedPhoto && (
        <div className="inline-photo-popover" role="dialog" aria-modal="true" aria-label="Pratinjau dokumentasi" onClick={() => setSelectedPhoto(null)}>
          <div className="inline-photo-popover-card" onClick={(event) => event.stopPropagation()}>
            <button type="button" onClick={() => setSelectedPhoto(null)} aria-label="Tutup pratinjau">×</button>
            <Image src={selectedPhoto} alt="Dokumentasi panitia diperbesar" />
          </div>
        </div>
      )}
    </>
  );
}
