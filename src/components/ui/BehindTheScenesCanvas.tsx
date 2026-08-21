"use client";

import { useRef, useState } from "react";

const photos = [
  { id: "01", title: "Ruang rapat", message: "Setiap gagasan besar selalu dimulai dari percakapan kecil di satu meja." },
  { id: "02", title: "Menyusun cerita", message: "Kami merangkai detail satu per satu agar Fiorella dapat bercerita dengan utuh." },
  { id: "03", title: "Hari persiapan", message: "Di balik hari yang indah, ada tangan-tangan yang bekerja jauh sebelum pintu dibuka." },
  { id: "04", title: "Di meja kerja", message: "Catatan, sketsa, dan banyak percobaan menjadi bagian dari perjalanan kami." },
  { id: "05", title: "Mencari bentuk", message: "Tidak semua jawaban datang cepat, tetapi kami selalu menemukan jalan bersama." },
  { id: "06", title: "Teman satu tim", message: "Kerja panitia adalah tentang saling menguatkan saat energi mulai menipis." },
  { id: "07", title: "Sebelum dimulai", message: "Ada rasa gugup yang berubah menjadi semangat saat semua sudah siap." },
  { id: "08", title: "Di balik layar", message: "Momen yang tidak terlihat sering kali menjadi bagian paling berharga." },
  { id: "09", title: "Malam terakhir", message: "Kami menutup hari dengan lelah, tawa, dan rasa bangga yang sama." },
  { id: "10", title: "Satu frekuensi", message: "Perbedaan ide membawa kami ke hasil yang lebih kaya dan bermakna." },
  { id: "11", title: "Fiorella 2026", message: "Fiorella tumbuh karena keberanian banyak orang untuk ikut mengambil peran." },
  { id: "12", title: "Hari pameran", message: "Terima kasih telah menjadi bagian dari hari yang kami persiapkan bersama." },
];

const TILE_WIDTH = 1260;
const TILE_HEIGHT = 1120;
type Point = { x: number; y: number };
const wrap = (value: number, size: number) => ((value + size / 2) % size + size) % size - size / 2;

export default function BehindTheScenesCanvas() {
  const [offset, setOffset] = useState<Point>({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  
  // Stage flow: envelope -> photo -> letter
  const [viewerStage, setViewerStage] = useState<"envelope" | "photo" | "letter">("envelope");

  const start = useRef<Point | null>(null);
  const offsetAtStart = useRef<Point>({ x: 0, y: 0 });
  const hasMoved = useRef(false);
  const pressedPhoto = useRef<number | null>(null);

  function startDrag(event: React.PointerEvent<HTMLDivElement>) {
    const photoButton = event.target instanceof Element ? event.target.closest<HTMLButtonElement>("[data-photo-index]") : null;
    pressedPhoto.current = photoButton ? Number(photoButton.dataset.photoIndex) : null;
    start.current = { x: event.clientX, y: event.clientY };
    offsetAtStart.current = offset;
    hasMoved.current = false;
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function moveDrag(event: React.PointerEvent<HTMLDivElement>) {
    if (!start.current) return;
    const x = offsetAtStart.current.x + event.clientX - start.current.x;
    const y = offsetAtStart.current.y + event.clientY - start.current.y;
    if (Math.abs(x - offsetAtStart.current.x) > 5 || Math.abs(y - offsetAtStart.current.y) > 5) hasMoved.current = true;
    setOffset({ x: wrap(x, TILE_WIDTH), y: wrap(y, TILE_HEIGHT) });
  }

  function endDrag() {
    if (!hasMoved.current && pressedPhoto.current !== null) {
      setViewerStage("envelope");
      setSelectedPhoto(pressedPhoto.current);
    }
    pressedPhoto.current = null;
    start.current = null;
    setDragging(false);
  }

  return (
    <section className="behind-canvas-page" aria-label="Dibalik Kepanitiaan">
      <a className="behind-drive-link" href="https://drive.google.com" target="_blank" rel="noopener noreferrer">
        Lihat Google Drive
      </a>
      <p className="behind-canvas-instruction">tarik untuk menjelajah, klik foto untuk pesan</p>

      <div 
        className={`behind-canvas behind-photo-wall${dragging ? " is-dragging" : ""}`} 
        onPointerDown={startDrag} 
        onPointerMove={moveDrag} 
        onPointerUp={endDrag} 
        onPointerCancel={endDrag} 
        role="application" 
        aria-label="Dinding foto dokumentasi panitia"
      >
        <div className="behind-photo-wall-world" style={{ transform: `translate3d(calc(-50% + ${offset.x}px), calc(-50% + ${offset.y}px), 0)` }}>
          {[-1, 0, 1].flatMap((tileY) => [-1, 0, 1].map((tileX) => (
            <div className="behind-photo-wall-tile" key={`${tileX}-${tileY}`} style={{ transform: `translate3d(${tileX * TILE_WIDTH}px, ${tileY * TILE_HEIGHT}px, 0)` }}>
              {photos.map((photo, index) => (
                <button className="behind-wall-photo" type="button" key={photo.id} data-photo-index={index} aria-label={`Buka kartu pos ${photo.title}`}>
                  <span className="behind-postcard-frame">
                    <img src={`https://picsum.photos/seed/fiorella-behind-${photo.id}/720/480`} alt={`Dokumentasi ${photo.title}`} draggable={false} />
                    <span className="behind-postcard-label">Sanchita 2026</span>
                  </span>
                </button>
              ))}
            </div>
          )))}
        </div>
      </div>

      {selectedPhoto !== null && (
        <div className="behind-photo-viewer" role="dialog" aria-modal="true" aria-label={`Detail ${photos[selectedPhoto].title}`} onClick={() => setSelectedPhoto(null)}>
          <button className="behind-photo-viewer-close" type="button" onClick={() => setSelectedPhoto(null)} aria-label="Tutup foto">×</button>

          <button 
            className={`behind-photo-story behind-photo-story-${viewerStage}`} 
            type="button" 
            onClick={(event) => { 
              event.stopPropagation(); 
              // Urutan alur: envelope -> photo -> letter (postcard)
              setViewerStage((stage) => stage === "envelope" ? "photo" : stage === "photo" ? "letter" : "photo"); 
            }}
          >
            {/* Amplop Soft Blue */}
            <span className="behind-envelope">
              <span className="behind-envelope-paper" />
              <span className="behind-envelope-flap" />
              <span className="behind-envelope-title"><img src="/logo/Pictorial w_o type.png" alt="Logo Fiorella" /></span>
            </span>

            {/* Tahap 1 (setelah amplop): Foto Utama Muncul Lebih Dulu */}
            <span className="behind-photo-reveal">
              <span className="behind-postcard-frame behind-postcard-frame-large">
                <img src={`https://picsum.photos/seed/fiorella-behind-${photos[selectedPhoto].id}/1200/800`} alt={`Dokumentasi ${photos[selectedPhoto].title}`} />
                <span className="behind-postcard-label">Klik untuk melihat pesan</span>
              </span>
            </span>

            {/* Tahap 2: Pesan / Postcard Back */}
            <span className="behind-photo-letter">
              <span className="behind-postcard-back-heading"><small>Postcard</small><strong>Postcard<br />from Fiorella</strong></span>
              <span className="behind-postcard-divider" />
              <span className="behind-postcard-address">
                <i>To:</i><b>{photos[selectedPhoto].title}</b>
                <i>From:</i><b>Panitia Fiorella 2026</b>
              </span>
              <span className="behind-postcard-message">
                <i>Catatan dari balik layar</i>
                <p>{photos[selectedPhoto].message}</p>
                <small>Klik untuk melihat foto</small>
              </span>
            </span>
          </button>
        </div>
      )}

      <style jsx global>{`
        .behind-wall-photo {
          overflow: visible;
          border: 0;
          border-radius: 0;
          background: transparent;
          box-shadow: none;
        }
        .behind-postcard-frame {
          position: relative;
          display: block;
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          padding: 10px 10px 28px;
          background: var(--paper);
          border: 1px solid rgba(54, 74, 140, .38);
          box-shadow: 0 14px 30px rgba(18, 30, 66, .3), inset 0 0 0 3px rgba(168, 196, 212, .45);
          transform: rotate(-1.1deg);
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .behind-wall-photo:nth-child(even) .behind-postcard-frame { transform: rotate(1deg); }
        .behind-wall-photo:hover .behind-postcard-frame {
          box-shadow: 0 18px 36px rgba(18, 30, 66, .38), inset 0 0 0 3px rgba(168, 196, 212, .65);
        }
        .behind-postcard-frame img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border: 1px solid rgba(54, 74, 140, .45);
        }
        .behind-postcard-label {
          position: absolute;
          right: 12px;
          bottom: 7px;
          color: var(--blue);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 9px;
          font-style: italic;
          letter-spacing: .12em;
          text-transform: uppercase;
        }
        .behind-photo-flip-front { padding: 22px 22px 46px; background: var(--paper); }
        .behind-photo-flip-front .behind-postcard-frame-large { padding: 12px 12px 30px; }
        .behind-photo-flip-front .behind-postcard-frame-large img { height: 100%; }
        .behind-photo-flip-front small { bottom: 12px; }
        @media (max-width: 760px) {
          .behind-postcard-frame { padding: 7px 7px 22px; }
          .behind-postcard-label { right: 8px; bottom: 5px; font-size: 7px; }
          .behind-photo-flip-front { padding: 14px 14px 38px; }
        }
      `}</style>
    </section>
  );
}
