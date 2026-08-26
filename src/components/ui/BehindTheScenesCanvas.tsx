"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import adhikaraPhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/ADHIKARA_1.webp";
import anantaraPhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/Anantara_1.webp";
import arthaTwoPhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/Artha_2.webp";
import arthaThreePhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/Artha_3.webp";
import birendraPhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/Birendra_1.webp";
import birendraTwoPhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/Birendra_2.webp";
import darakaPhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/Daraka_2.webp";
import extraOnePhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/EXTRA_1.webp";
import extraTwoPhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/EXTRA_2.webp";
import extraThreePhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/EXTRA_3.webp";
import janardanaOnePhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/Janardana_1.webp";
import janardanaTwoPhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/Janardana_2.webp";
import nayakaPhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/Nayaka_1.webp";
import sancharaPhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/SANCHARA_1.webp";
import sanchitaPhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/Sanchita_1.webp";
import swarnaOnePhoto from "@/app/(pages)/dibalik-kepanitiaan/asset/SWARNA_1.webp";

const photos = [
  { id: "01", src: adhikaraPhoto, title: "Rain", message: "Asik banget liat rein bawa bawa benderaaa! semangat teruss reinn, ditunggu S3 nyaa!" },
  { id: "02", src: anantaraPhoto, title: "Anantara", message: "Berdua aja nih di poskooooo" },
  { id: "03", src: arthaTwoPhoto, title: "Lady", message: "Gokilllllll mana gokil" },
  { id: "04", src: arthaThreePhoto, title: "Panitia", message: "ASEKK ASEKKKK ABEEE" },
  { id: "05", src: birendraPhoto, title: "Leroy", message: "Kokooo birendraa so coolll! kangen diamanin lagi tiap pagi pagii" },
  { id: "06", src: darakaPhoto, title: "Daraka", message: "ini dia keiii n the gengg yg selalu semangatt jadi tim hore buat pejuang kembang sepatuuu!" },
  { id: "07", src: janardanaOnePhoto, title: "Janardana", message: "ini diaaa medic medic kitaa, ditunggu yaa pas udah pada jadi dokterrr" },
  { id: "08", src: janardanaTwoPhoto, title: "Angel", message: "Angel berikan senyuman terbaikmuh!!!!!!!!!" },
  { id: "09", src: nayakaPhoto, title: "Posko 4", message: "Pompa yang banyakkkkkk!" },
  { id: "10", src: sancharaPhoto, title: "Sanchara", message: "kecintaannya bu ika dan mba iga nihh!" },
  { id: "11", src: sanchitaPhoto, title: "Sanchita", message: "si palinggg kameraaa yang kemana mana pasti bawa pegangan masing masinggg... so proud of you guysss., thanks for the new experiences terutama selama dii UMN NEXT 2026 iniii! lov sansibss banyak banyak" },
  { id: "12", src: swarnaOnePhoto, title: "Hari pameran", message: "Terima kasih telah menjadi bagian dari hari yang kami persiapkan bersama." },
  { id: "13", src: birendraTwoPhoto, title: "Andrew", message: "Body bag check duluuuu~" },
  { id: "14", src: extraOnePhoto, title: "Artha", message: "jadi konsepnya day one or one day ni?" },
  { id: "15", src: anantaraPhoto, title: "Anantara", message: "Berdua aja nih di poskooooo" },
  { id: "16", src: extraTwoPhoto, title: "PIC", message: "candid bangett ni yaa! keren mpruy mpruy inii" },
  { id: "17", src: extraThreePhoto, title: "Momen bersama", message: "Momen sederhana bersama menjadi bagian yang tidak terpisahkan dari perjalanan kepanitiaan." },
  { id: "18", src: adhikaraPhoto, title: "Rain", message: "Asik banget liat rein bawa bawa benderaaa! semangat teruss reinn, ditunggu S3 nyaa!" },
];

type Point = { x: number; y: number };
type ViewerStage = "envelope" | "photo" | "letter";

const wrap = (value: number, size: number) =>
  ((value + size / 2) % size + size) % size - size / 2;

export default function BehindTheScenesCanvas() {
  const [offset, setOffset] = useState<Point>({ x: 0, y: 0 });
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
    const previousOverflow = document.body.style.overflow;
    const footer = document.querySelector<HTMLElement>("body > footer");
    const previousFooterDisplay = footer?.style.display;
    document.body.style.overflow = "hidden";
    if (footer) footer.style.display = "none";
    return () => {
      document.body.style.overflow = previousOverflow;
      if (footer) footer.style.display = previousFooterDisplay ?? "";
    };
  }, []);

  useEffect(() => {
    if (selectedPhoto === null || viewerStage !== "envelope") return;
    const photoTimer = window.setTimeout(() => setViewerStage("photo"), 340);
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
      y: wrap(y, isMobileLayout ? 1236 : 1680),
    });
  }

  function endDrag() {
    pressedPhoto.current = null;
    start.current = null;
  }

  function cancelDrag() {
    pressedPhoto.current = null;
    start.current = null;
  }

  function centerAndOpen(index: number, target: HTMLButtonElement) {
    const rect = target.getBoundingClientRect();
    const x = window.innerWidth / 2 - (rect.left + rect.width / 2);
    const y = window.innerHeight / 2 - (rect.top + rect.height / 2);

    setCentering(true);
    setOffset((current) => ({
      x: wrap(current.x + x, 930),
      y: wrap(current.y + y, 1236),
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
    <section className="behind-canvas-page relative isolate h-svh min-h-[620px] overflow-hidden bg-[url('/gradients/VARIASI%20GRADIENT-52.webp')] bg-cover bg-center bg-no-repeat font-sans text-[var(--paper)] max-[760px]:min-h-[520px]" aria-label="Di balik kepanitiaan">
      <a className="absolute bottom-[52px] left-1/2 z-5 inline-flex -translate-x-1/2 items-center gap-[22px] rounded-full border border-[rgba(237,236,230,.55)] bg-[var(--paper)] px-5 py-3 text-xs font-semibold text-[var(--blue)] no-underline shadow-[0_10px_24px_rgba(0,0,0,.2)] transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-[var(--sky)] max-[760px]:bottom-[max(42px,env(safe-area-inset-bottom))] max-[760px]:gap-3.5 max-[760px]:px-[15px] max-[760px]:py-[9px] max-[760px]:text-[10px]" href="https://drive.google.com/drive/folders/1qHcfbiUmdQ52qsOdGLL7JW7yrAYiEDdq?usp=drive_link" target="_blank" rel="noopener noreferrer">
        Lihat Google Drive <span className="text-[17px]" aria-hidden="true">↗</span>
      </a>
      <div className="absolute inset-0 touch-none overflow-hidden select-none" onPointerDown={startDrag} onPointerMove={moveDrag} onPointerUp={endDrag} onPointerCancel={cancelDrag} role="application" aria-label="Dinding foto dokumentasi panitia">
        <div className={`absolute top-1/2 left-1/2 h-px w-px will-change-transform ${centering ? "transition-transform duration-400 ease-[cubic-bezier(.22,1,.36,1)]" : ""}`} style={{ transform: `translate3d(calc(-50% + ${offset.x}px), calc(-50% + ${offset.y}px), 0)` }}>
          {[-1, 0, 1].flatMap((tileY) => [-1, 0, 1].map((tileX) => (
            <div className="pointer-events-none absolute top-[-810px] left-[-600px] grid auto-rows-[220px] grid-cols-[repeat(3,360px)] gap-[60px] [transform:translate3d(calc(var(--tile-x)*1260px),calc(var(--tile-y)*1680px),0)] max-[760px]:top-[-598px] max-[760px]:left-[-465px] max-[760px]:auto-rows-[166px] max-[760px]:grid-cols-[repeat(3,270px)] max-[760px]:gap-10 max-[760px]:[transform:translate3d(calc(var(--tile-x)*930px),calc(var(--tile-y)*1236px),0)]" key={`${tileX}-${tileY}`} style={{ "--tile-x": tileX, "--tile-y": tileY } as CSSProperties}>
              {photos.map((photo, index) => (
                <button className={`group relative h-[220px] overflow-visible border-0 bg-transparent p-0 shadow-none transition-[transform,filter] duration-200 pointer-events-auto hover:z-2 hover:scale-[1.025] hover:brightness-108 max-[760px]:h-[166px] ${index % 6 < 3 ? "-translate-x-[30px] hover:-translate-x-[30px]" : "translate-x-[30px] hover:translate-x-[30px]"}`} type="button" key={photo.id} data-photo-index={index} onPointerDown={handlePhotoPointerDown} onPointerUp={handlePhotoPointerUp} onClick={openPhoto} aria-label={`Buka postcard ${photo.title}`}>
                  <span className="absolute inset-0 overflow-hidden rounded-none border border-[rgba(18,30,66,.58)] bg-[#f3efe4] shadow-[0_16px_34px_rgba(0,0,0,.32)] before:pointer-events-none before:absolute before:inset-[10px_10px_31px] before:z-2 before:border before:border-[rgba(18,30,66,.72)] after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(rgba(18,30,66,.38)_.5px,transparent_.7px)] after:bg-[length:5px_5px] after:opacity-16 after:mix-blend-multiply max-[760px]:before:inset-[8px_8px_25px]">
                    <Image className="pointer-events-none object-cover p-[11px_11px_32px] [-webkit-user-drag:none] max-[760px]:p-[9px_9px_26px]" src={photo.src} alt={`Dokumentasi ${photo.title}`} fill loading={tileX === 0 && tileY === 0 && index >= 6 && index <= 11 ? "eager" : "lazy"} sizes="(max-width: 760px) 260px, 360px" draggable={false} />
                    <span className="pointer-events-none absolute right-3 bottom-[7px] left-3 z-3 overflow-hidden text-center font-sans text-[8px] leading-[1.4] tracking-[.15em] text-ellipsis whitespace-nowrap text-[rgba(18,30,66,.82)] uppercase max-[760px]:right-[9px] max-[760px]:bottom-[5px] max-[760px]:left-[9px] max-[760px]:text-[6px]">Fiorella · 2026</span>
                  </span>
                </button>
              ))}
            </div>
          )))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-1000 grid place-items-center bg-[rgba(18,30,66,.48)] px-[clamp(18px,5vw,72px)] pt-[clamp(72px,8vw,112px)] pb-7 backdrop-blur-2xl animate-[behind-viewer-fade-in_.25s_ease-out_both] max-[760px]:px-3.5 max-[760px]:pt-[86px] max-[760px]:pb-6 motion-reduce:animate-none" role="dialog" aria-modal="true" aria-label={`Postcard ${selected.title}`} onClick={() => setSelectedPhoto(null)}>
          <button className="absolute top-[max(20px,env(safe-area-inset-top))] right-[clamp(18px,3vw,42px)] z-5 h-11 w-11 rounded-full border border-[rgba(237,236,230,.75)] bg-[rgba(18,30,66,.22)] text-[28px] leading-none text-[var(--paper)] max-[760px]:top-[78px] max-[760px]:right-4 max-[760px]:h-[38px] max-[760px]:w-[38px] max-[760px]:text-2xl" type="button" onClick={() => setSelectedPhoto(null)} aria-label="Tutup postcard">×</button>
          <button className="relative aspect-3/2 h-auto! w-[min(76vw,900px,calc((100svh-150px)*1.5))] border-0 bg-transparent p-0 text-left text-[var(--ink)] [perspective:1600px] max-[760px]:w-[min(92vw,calc((100svh-150px)*1.5))] max-[480px]:w-[min(94vw,calc((100svh-175px)*1.5))]" type="button" aria-label={viewerStage === "photo" ? "Lihat pesan postcard" : "Kembali ke foto postcard"} onClick={(event) => { event.stopPropagation(); if (viewerStage === "photo") setViewerStage("letter"); if (viewerStage === "letter") setViewerStage("photo"); }}>
            <span className="pointer-events-none absolute inset-0 z-3 grid h-full w-full place-items-center overflow-hidden rounded-xl bg-[linear-gradient(145deg,#121e42_0%,#364a8c_56%,#6590c2_100%)] opacity-100 shadow-[0_28px_62px_rgba(18,30,66,.46)] [backface-visibility:hidden]" aria-hidden="true">
              <span className={`absolute top-0 left-0 z-3 h-[62%] w-full origin-top bg-[linear-gradient(160deg,#a8c4d4_0%,#6590c2_43%,#364a8c_100%)] shadow-[0_16px_24px_rgba(18,30,66,.35)] [clip-path:polygon(0_0,100%_0,50%_100%)] transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${viewerStage === "photo" ? "[transform:rotateX(160deg)]" : ""}`} />
              <span className="absolute top-[56%] left-1/2 z-4 grid aspect-square w-[clamp(58px,8vw,82px)] -translate-x-1/2 -translate-y-1/2 -rotate-3 place-items-center rounded-full border border-[rgba(18,30,66,.28)] bg-[var(--paper)] p-3 shadow-[0_4px_10px_rgba(18,30,66,.2)]"><Image className="h-full w-full object-contain" src="/logo/Pictorial w_o type.webp" alt="" width={72} height={72} /></span>
            </span>

            <span className={`absolute inset-0 h-full w-full origin-bottom [backface-visibility:hidden] will-change-[transform,opacity,filter] transition-[opacity,transform,filter] duration-700 ease-[cubic-bezier(.16,1,.3,1)] motion-reduce:transition-none ${viewerStage === "photo" ? "z-4 translate-y-0 scale-100 rotate-y-0 opacity-100 blur-none" : viewerStage === "letter" ? "pointer-events-none z-4 -rotate-y-180 scale-100 opacity-0 blur-[2px]" : "pointer-events-none z-2 translate-y-[22%] scale-[.78] opacity-0 blur-[3px]"}`} aria-hidden={viewerStage !== "photo"}>
              <span className="absolute inset-0 flex flex-col border border-[rgba(18,30,66,.58)] bg-[#f3efe4] p-[clamp(14px,1.8vw,22px)_clamp(14px,1.8vw,22px)_clamp(36px,4.5vw,54px)] shadow-[0_28px_70px_rgba(0,0,0,.42)] after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(rgba(18,30,66,.38)_.5px,transparent_.7px)] after:bg-[length:5px_5px] after:opacity-14 after:mix-blend-multiply max-[760px]:p-[11px_11px_31px]">
                <span className="relative z-1 min-h-0 flex-1 overflow-hidden border border-[rgba(18,30,66,.72)]"><Image className="object-cover" src={selected.src} alt={`Dokumentasi ${selected.title}`} fill sizes="(max-width: 760px) 92vw, 900px" /></span>
                <span className="absolute right-[clamp(16px,2vw,24px)] bottom-[clamp(8px,1vw,12px)] z-3 max-w-[calc(100%-44px)] overflow-hidden rounded-full bg-[rgba(18,30,66,.78)] px-2 py-[5px] text-[clamp(7px,.85vw,10px)] font-semibold tracking-[.08em] text-ellipsis whitespace-nowrap text-[var(--paper)] uppercase max-[760px]:right-3.5 max-[760px]:bottom-[7px] max-[760px]:px-[7px]">Klik untuk melihat pesan</span>
                <span className="pointer-events-none absolute bottom-[clamp(10px,1.2vw,15px)] left-[clamp(18px,2vw,25px)] z-2 font-sans text-[clamp(7px,.8vw,10px)] leading-[1.4] tracking-[.15em] text-[rgba(18,30,66,.82)] uppercase max-[760px]:bottom-2 max-[760px]:left-3.5 max-[760px]:text-[6px]">Fiorella · 2026</span>
              </span>
            </span>

            <span className={`absolute inset-0 grid h-full w-full grid-cols-[.84fr_1px_1.16fr] gap-[clamp(24px,4vw,52px)] overflow-hidden bg-[repeating-linear-gradient(45deg,var(--blue)_0_11px,var(--paper)_11px_22px)] p-[clamp(40px,5.5vw,70px)] shadow-[0_28px_70px_rgba(0,0,0,.42)] [backface-visibility:hidden] transition-[opacity,transform] duration-800 ease-[cubic-bezier(.22,1,.36,1)] before:pointer-events-none before:absolute before:inset-[clamp(10px,1.25vw,15px)] before:z-0 before:bg-white motion-reduce:transition-none max-[760px]:gap-x-1.5 max-[760px]:p-[22px] max-[480px]:grid-cols-[.78fr_1px_1.22fr] max-[480px]:gap-x-1 max-[480px]:p-4 ${viewerStage === "letter" ? "z-4 opacity-100 [transform:rotateY(0deg)]" : "z-1 opacity-0 [transform:rotateY(180deg)]"}`} aria-hidden={viewerStage !== "letter"}>
              <span className="relative z-1 flex min-w-0 flex-col">
                <small className="text-[clamp(8px,1vw,11px)] font-semibold tracking-[.17em] uppercase max-[480px]:text-[6px]">Postcard</small>
                <strong className="mt-[clamp(8px,1.2vw,16px)] font-serif text-[clamp(30px,4.4vw,58px)] leading-[.98] font-normal tracking-[-.045em] max-[760px]:text-[clamp(21px,7vw,32px)] max-[480px]:text-xl">Postcard<br />from Fiorella</strong>
                <span className="mt-auto grid grid-cols-[auto_1fr] gap-x-2.5 gap-y-[7px] text-[clamp(8px,1vw,12px)] max-[760px]:gap-x-1.5 max-[760px]:gap-y-1"><i className="not-italic font-semibold tracking-[.1em] uppercase">From:</i><b className="overflow-hidden border-b border-[rgba(18,30,66,.38)] pb-1 font-medium text-ellipsis whitespace-nowrap max-[480px]:max-w-[13ch]">{selected.title}</b></span>
              </span>
              <span className="relative z-1 h-full w-px bg-[rgba(18,30,66,.42)]" />
              <span className="relative z-1 -ml-[clamp(8px,1.5vw,20px)] flex min-w-0 flex-col bg-[repeating-linear-gradient(to_bottom,transparent_0_31px,rgba(18,30,66,.28)_31px_32px)] pt-[clamp(48px,6vw,68px)] pl-[clamp(8px,1.5vw,20px)] max-[760px]:-ml-1.5 max-[760px]:bg-[repeating-linear-gradient(to_bottom,transparent_0_19px,rgba(18,30,66,.28)_19px_20px)] max-[760px]:[background-position:0_10px] max-[760px]:pt-9 max-[760px]:pl-0 max-[480px]:-ml-1 max-[480px]:pt-8">
                <span className="absolute top-0 right-0 w-[clamp(62px,8vw,94px)] rotate-8 rounded-[50%] border border-[var(--blue)] p-1.5 text-center text-[clamp(6px,.7vw,8px)] leading-[1.2] text-[var(--blue)]" aria-hidden="true">FIORELLA<br />27 · 08 · 26</span>
                <p className="m-0 text-[clamp(11px,1.45vw,16px)] leading-8 max-[760px]:text-[clamp(8px,2.6vw,11px)] max-[760px]:leading-5 max-[480px]:text-[8px]">{selected.message}</p>
                <small className="mt-auto self-end bg-[var(--paper)] py-1 pl-2 text-[clamp(7px,.8vw,9px)] font-semibold tracking-[.08em] uppercase max-[480px]:hidden">Klik untuk kembali ke foto</small>
              </span>
            </span>
          </button>
        </div>
      )}
    </section>
  );
}
