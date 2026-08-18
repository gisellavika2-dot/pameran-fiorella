"use client";

import { useRef, useState } from "react";
import Link from "next/link";

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
// Include the final row gap so repeated tiles do not touch vertically.
const TILE_HEIGHT = 1120;
type Point = { x: number; y: number };
const wrap = (value: number, size: number) => ((value + size / 2) % size + size) % size - size / 2;

export default function BehindTheScenesCanvas() {
  const [offset, setOffset] = useState<Point>({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [viewerFlipped, setViewerFlipped] = useState(false);
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
      setViewerFlipped(false);
      setSelectedPhoto(pressedPhoto.current);
    }
    pressedPhoto.current = null;
    start.current = null;
    setDragging(false);
  }

  return <section className="behind-canvas-page" aria-labelledby="behind-title">
    <Link id="behind-title" className="behind-canvas-title" href="/">Dibalik Kepanitiaan</Link>
    <p className="behind-canvas-instruction">tarik untuk menjelajah, klik foto untuk pesan</p>
    <div className={`behind-canvas behind-photo-wall${dragging ? " is-dragging" : ""}`} onPointerDown={startDrag} onPointerMove={moveDrag} onPointerUp={endDrag} onPointerCancel={endDrag} role="application" aria-label="Dinding foto dokumentasi panitia">
      <div className="behind-photo-wall-world" style={{ transform: `translate3d(calc(-50% + ${offset.x}px), calc(-50% + ${offset.y}px), 0)` }}>
        {[-1, 0, 1].flatMap((tileY) => [-1, 0, 1].map((tileX) => <div className="behind-photo-wall-tile" key={`${tileX}-${tileY}`} style={{ transform: `translate3d(${tileX * TILE_WIDTH}px, ${tileY * TILE_HEIGHT}px, 0)` }}>
          {photos.map((photo, index) => <button className="behind-wall-photo" type="button" key={photo.id} data-photo-index={index}><img src={`https://picsum.photos/seed/fiorella-behind-${photo.id}/720/480`} alt={`Dokumentasi ${photo.title}`} draggable={false} /></button>)}
        </div>))}
      </div>
    </div>
    {selectedPhoto !== null && <div className="behind-photo-viewer" role="dialog" aria-modal="true" aria-label={`Detail ${photos[selectedPhoto].title}`} onClick={() => setSelectedPhoto(null)}><button className="behind-photo-viewer-close" type="button" onClick={() => setSelectedPhoto(null)} aria-label="Tutup foto">×</button><button className={`behind-photo-flip-card${viewerFlipped ? " is-flipped" : ""}`} type="button" onClick={(event) => { event.stopPropagation(); setViewerFlipped((flipped) => !flipped); }}><span className="behind-photo-flip-inner"><span className="behind-photo-flip-front"><img src={`https://picsum.photos/seed/fiorella-behind-${photos[selectedPhoto].id}/1200/800`} alt={`Dokumentasi ${photos[selectedPhoto].title}`} /><small>Klik foto untuk membaca pesan</small></span><span className="behind-photo-flip-back"><i>Fiorella 2026</i><b>{photos[selectedPhoto].title}</b><span className="behind-photo-flip-line" /><p>{photos[selectedPhoto].message}</p><small>Klik kartu untuk kembali ke foto</small></span></span></button></div>}
  </section>;
}
