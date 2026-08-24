"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import "./BehindTheScenesCanvas.css";

const photos = [
  { id: "01", src: "/fotoDivisi/Foto Divisi_Adhikara_2.JPG", title: "Ruang rapat", message: "Setiap gagasan besar selalu dimulai dari percakapan kecil di satu meja." },
  { id: "02", src: "/fotoDivisi/Foto Divisi_Anantara_3.JPG", title: "Menyusun cerita", message: "Kami merangkai detail satu per satu agar Fiorella dapat bercerita dengan utuh." },
  { id: "03", src: "/fotoDivisi/Foto Divisi_Birendra_3.JPG", title: "Hari persiapan", message: "Di balik hari yang indah, ada tangan-tangan yang bekerja jauh sebelum pintu dibuka." },
  { id: "04", src: "/fotoDivisi/Foto Divisi_Daraka_3.JPG", title: "Di meja kerja", message: "Catatan, sketsa, dan banyak percobaan menjadi bagian dari perjalanan kami." },
  { id: "05", src: "/fotoDivisi/Foto Divisi_Janardana_Sesi 1_4.JPG", title: "Mencari bentuk", message: "Tidak semua jawaban datang cepat, tetapi kami selalu menemukan jalan bersama." },
  { id: "06", src: "/fotoDivisi/Foto Divisi_Nayaka_3.JPG", title: "Teman satu tim", message: "Kerja panitia adalah tentang saling menguatkan saat energi mulai menipis." },
  { id: "07", src: "/fotoDivisi/Foto Divisi_Rachana_3.JPG", title: "Sebelum dimulai", message: "Ada rasa gugup yang berubah menjadi semangat saat semua sudah siap." },
  { id: "08", src: "/fotoDivisi/Foto Divisi_Sanchara_4.JPG", title: "Di balik layar", message: "Momen yang tidak terlihat sering kali menjadi bagian paling berharga." },
  { id: "09", src: "/fotoDivisi/Foto Divisi_Sanchita_2.JPG", title: "Malam terakhir", message: "Kami menutup hari dengan lelah, tawa, dan rasa bangga yang sama." },
  { id: "10", src: "/fotoDivisi/Foto Divisi_Swarna_2.JPG", title: "Satu frekuensi", message: "Perbedaan ide membawa kami ke hasil yang lebih kaya dan bermakna." },
  { id: "11", src: "/fotoDivisi/Foto Divisi_Adhikara_6.JPG", title: "Fiorella 2026", message: "Fiorella tumbuh karena keberanian banyak orang untuk ikut mengambil peran." },
  { id: "12", src: "/fotoDivisi/Foto Divisi_Sanchita_6.JPG", title: "Hari pameran", message: "Terima kasih telah menjadi bagian dari hari yang kami persiapkan bersama." },
];

type Point = { x: number; y: number };
type ViewerStage = "envelope" | "photo" | "letter";

const wrap = (value: number, size: number) =>
  ((value + size / 2) % size + size) % size - size / 2;

export default function BehindTheScenesCanvas() {
  const [offset, setOffset] = useState<Point>({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [centering, setCentering] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [viewerStage, setViewerStage] = useState<ViewerStage>("envelope");
  const start = useRef<Point | null>(null);
  const offsetAtStart = useRef<Point>({ x: 0, y: 0 });
  const hasMoved = useRef(false);
  const pressedPhoto = useRef<number | null>(null);
  const openTimer = useRef<number | null>(null);
  const touchOpened = useRef(false);

  useEffect(() => {
    if (selectedPhoto === null || viewerStage !== "envelope") return;
    const photoTimer = window.setTimeout(() => setViewerStage("photo"), 500);
    return () => window.clearTimeout(photoTimer);
  }, [selectedPhoto, viewerStage]);

  useEffect(() => {
    if (selectedPhoto === null) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedPhoto(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selectedPhoto]);

  useEffect(() => () => {
    if (openTimer.current !== null) window.clearTimeout(openTimer.current);
  }, []);

  function startDrag(event: React.PointerEvent<HTMLDivElement>) {
    const button = event.target instanceof Element
      ? event.target.closest<HTMLButtonElement>("[data-photo-index]")
      : null;
    pressedPhoto.current = button ? Number(button.dataset.photoIndex) : null;
    start.current = { x: event.clientX, y: event.clientY };
    offsetAtStart.current = offset;
    hasMoved.current = false;
    setDragging(true);
  }

  function moveDrag(event: React.PointerEvent<HTMLDivElement>) {
    if (!start.current) return;
    const x = offsetAtStart.current.x + event.clientX - start.current.x;
    const y = offsetAtStart.current.y + event.clientY - start.current.y;
    const isTouch = event.pointerType === "touch" || window.innerWidth <= 960;
    const isMobileLayout = window.innerWidth <= 760;
    const dragThreshold = isTouch ? 28 : 6;
    if (!hasMoved.current && (Math.abs(x - offsetAtStart.current.x) > dragThreshold || Math.abs(y - offsetAtStart.current.y) > dragThreshold)) {
      hasMoved.current = true;
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    if (!hasMoved.current) return;
    setOffset({
      x: wrap(x, isMobileLayout ? 930 : 1260),
      y: wrap(y, isMobileLayout ? 824 : 1120),
    });
  }

  function endDrag() {
    pressedPhoto.current = null;
    start.current = null;
    setDragging(false);
  }

  function cancelDrag() {
    pressedPhoto.current = null;
    start.current = null;
    setDragging(false);
  }

  function centerAndOpen(index: number, target: HTMLButtonElement) {
    const rect = target.getBoundingClientRect();
    const x = window.innerWidth / 2 - (rect.left + rect.width / 2);
    const y = window.innerHeight / 2 - (rect.top + rect.height / 2);

    setCentering(true);
    setOffset((current) => ({
      x: wrap(current.x + x, 930),
      y: wrap(current.y + y, 824),
    }));

    if (openTimer.current !== null) window.clearTimeout(openTimer.current);
    openTimer.current = window.setTimeout(() => {
      setViewerStage("envelope");
      setSelectedPhoto(index);
      setCentering(false);
    }, 420);
  }

  function openPhoto(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    if (hasMoved.current) return;
    const index = Number(event.currentTarget.dataset.photoIndex);

    if (touchOpened.current) {
      touchOpened.current = false;
      return;
    }

    if (window.innerWidth <= 760) {
      centerAndOpen(index, event.currentTarget);
      return;
    }

    setViewerStage("envelope");
    setSelectedPhoto(index);
  }

  function handlePhotoPointerDown(event: React.PointerEvent<HTMLButtonElement>) {
    const index = Number(event.currentTarget.dataset.photoIndex);
    pressedPhoto.current = index;
    touchOpened.current = false;
  }

  function handlePhotoPointerUp(event: React.PointerEvent<HTMLButtonElement>) {
    if (event.pointerType !== "touch" || hasMoved.current) return;
    event.stopPropagation();
    const index = Number(event.currentTarget.dataset.photoIndex);
    touchOpened.current = true;
    centerAndOpen(index, event.currentTarget);
  }

  const selected = selectedPhoto === null ? null : photos[selectedPhoto];

  return (
    <section className="behind-canvas-page" aria-label="Di balik kepanitiaan">
      <a className="behind-drive-link" href="https://drive.google.com" target="_blank" rel="noopener noreferrer">
        Lihat Google Drive <span aria-hidden="true">↗</span>
      </a>
      <p className="behind-canvas-instruction">Tarik untuk menjelajah, klik foto untuk membuka postcard</p>

      <div className={`behind-photo-wall${dragging ? " is-dragging" : ""}${centering ? " is-centering" : ""}`} onPointerDown={startDrag} onPointerMove={moveDrag} onPointerUp={endDrag} onPointerCancel={cancelDrag} role="application" aria-label="Dinding foto dokumentasi panitia">
        <div className="behind-photo-wall-world" style={{ transform: `translate3d(calc(-50% + ${offset.x}px), calc(-50% + ${offset.y}px), 0)` }}>
          {[-1, 0, 1].flatMap((tileY) => [-1, 0, 1].map((tileX) => (
            <div className="behind-photo-wall-tile" key={`${tileX}-${tileY}`} style={{ "--tile-x": tileX, "--tile-y": tileY } as CSSProperties}>
              {photos.map((photo, index) => (
                <button className="behind-wall-photo" type="button" key={photo.id} data-photo-index={index} onPointerDown={handlePhotoPointerDown} onPointerUp={handlePhotoPointerUp} onClick={openPhoto} aria-label={`Buka postcard ${photo.title}`}>
                  <span className="behind-postcard-frame-small">
                    <Image src={photo.src} alt={`Dokumentasi ${photo.title}`} fill sizes="(max-width: 760px) 260px, 360px" draggable={false} />
                    <span className="behind-polaroid-caption">Fiorella · 2026</span>
                  </span>
                </button>
              ))}
            </div>
          )))}
        </div>
      </div>

      {selected && (
        <div className="behind-photo-viewer" role="dialog" aria-modal="true" aria-label={`Postcard ${selected.title}`} onClick={() => setSelectedPhoto(null)}>
          <button className="behind-photo-viewer-close" type="button" onClick={() => setSelectedPhoto(null)} aria-label="Tutup postcard">×</button>
          <button className={`behind-photo-story is-${viewerStage}`} type="button" aria-label={viewerStage === "photo" ? "Lihat pesan postcard" : "Kembali ke foto postcard"} onClick={(event) => { event.stopPropagation(); if (viewerStage === "photo") setViewerStage("letter"); if (viewerStage === "letter") setViewerStage("photo"); }}>
            <span className="behind-envelope" aria-hidden={viewerStage !== "envelope"}>
              <span className="behind-envelope-flap" />
              <span className="behind-envelope-title"><Image src="/logo/Pictorial w_o type.png" alt="" width={72} height={72} /></span>
            </span>

            <span className="behind-photo-reveal" aria-hidden={viewerStage !== "photo"}>
              <span className="behind-postcard-frame-large">
                <span className="behind-postcard-photo"><Image src={selected.src} alt={`Dokumentasi ${selected.title}`} fill sizes="(max-width: 760px) 92vw, 900px" /></span>
                <span className="behind-postcard-label">Klik untuk melihat pesan</span>
                <span className="behind-polaroid-caption-large">Fiorella · 2026</span>
              </span>
            </span>

            <span className="behind-photo-letter" aria-hidden={viewerStage !== "letter"}>
              <span className="behind-postcard-back-heading">
                <small>Postcard</small>
                <strong>Postcard<br />from Fiorella</strong>
                <span className="behind-postcard-address"><i>From:</i><b>Panitia Fiorella 2026</b><i>To:</i><b>{selected.title}</b></span>
              </span>
              <span className="behind-postcard-divider" />
              <span className="behind-postcard-message">
                <span className="behind-postcard-postmark" aria-hidden="true">FIORELLA<br />24 · 08 · 26</span>
                <span className="behind-postcard-stamp" aria-hidden="true">F</span>
                <i>Catatan dari balik layar</i>
                <p>{selected.message}</p>
                <small>Klik untuk kembali ke foto</small>
              </span>
            </span>
          </button>
        </div>
      )}
    </section>
  );
}
