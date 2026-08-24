"use client";

import { useState } from "react";

type HomeBehindGalleryProps = {
  rows: number[][];
};

export default function HomeBehindGallery({ rows }: HomeBehindGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <>
      <div className="mosaic" aria-label="Kolase dokumentasi panitia">
        {rows.map((row, rowIndex) => (
          <div className={`mosaic-row ${rowIndex === 1 ? "mosaic-row-left" : "mosaic-row-right"}`} key={rowIndex}>
            {Array.from({ length: 4 }, (_, setIndex) => (
              <div className="mosaic-track" key={setIndex}>
                {row.map((photoIndex) => {
                  const src = `https://picsum.photos/seed/fiorella-panitia-${photoIndex}/560/320`;
                  return (
                    <button className="mosaic-cell" type="button" key={photoIndex} onClick={() => setSelectedPhoto(src)} aria-label="Perbesar dokumentasi panitia">
                      <img src={src} alt="Placeholder dokumentasi panitia" />
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
            <img src={selectedPhoto} alt="Dokumentasi panitia diperbesar" />
          </div>
        </div>
      )}
    </>
  );
}
