"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { schedule } from "@/data/schedule";

const eventImages = [
  "/figma/SIO.webp",
  "/figma/Penanaman.webp",
  "/figma/PENYINARAN.webp",
  "/figma/PEREKAHAN.webp",
  "/figma/STS.webp",
];

export default function HariPelaksanaanPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const dragStartY = useRef<number | null>(null);
  const dragged = useRef(false);

  const wheelOffset = useRef(0);
  const wheelLocked = useRef(false);

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

  function move(direction: -1 | 1) {
    setActiveIndex((current) => (current + direction + schedule.length) % schedule.length);
  }

  function selectDay(index: number) {
    const distance = Math.abs(index - activeIndex);
    if (distance > 1 && distance < schedule.length - 1) {
      setIsJumping(true);
      window.setTimeout(() => setIsJumping(false), 0);
    }
    setActiveIndex(index);
  }

  function relativePosition(index: number) {
    let position = index - activeIndex;
    if (position > schedule.length / 2) position -= schedule.length;
    if (position < -schedule.length / 2) position += schedule.length;
    return position;
  }

  function isInteractiveTarget(target: EventTarget | null) {
    return target instanceof Element && target.closest("a, button") !== null;
  }

  function handlePointerDown(event: React.PointerEvent<HTMLElement>) {
    if (isInteractiveTarget(event.target)) return;
    dragStartY.current = event.clientY;
    dragged.current = false;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (dragStartY.current === null) return;
    const distance = event.clientY - dragStartY.current;
    setDragOffset(Math.max(-150, Math.min(150, distance)));
    if (Math.abs(distance) > 8) dragged.current = true;
  }

  function handlePointerEnd(event: React.PointerEvent<HTMLElement>) {
    if (dragStartY.current === null) return;
    const distance = event.clientY - dragStartY.current;
    if (Math.abs(distance) > 70) move(distance < 0 ? 1 : -1);
    dragStartY.current = null;
    setDragOffset(0);
    setIsDragging(false);
  }

  function handleWheel(event: React.WheelEvent<HTMLElement>) {
    event.preventDefault();
    if (wheelLocked.current) return;
    wheelOffset.current += event.deltaY;
    if (Math.abs(wheelOffset.current) <= 70) return;
    move(wheelOffset.current > 0 ? 1 : -1);
    wheelOffset.current = 0;
    wheelLocked.current = true;
    window.setTimeout(() => { wheelLocked.current = false; }, 700);
  }

  return (
    <section className="relative isolate h-svh min-h-[620px] touch-none overflow-hidden bg-[url('/gradients/VARIASI%20GRADIENT-52.webp')] bg-cover bg-center bg-no-repeat text-[var(--paper)] select-none max-[760px]:min-h-[520px]" onPointerDownCapture={handlePointerDown} onPointerMoveCapture={handlePointerMove} onPointerUpCapture={handlePointerEnd} onPointerCancelCapture={handlePointerEnd} onDragStart={(event) => event.preventDefault()}>
      <div className="relative z-2 h-full w-full outline-none" aria-label="Daftar hari pelaksanaan. Geser ke atas atau ke bawah untuk berpindah hari." onWheel={handleWheel} role="region" tabIndex={0}>
        {schedule.map((day, index) => {
          const position = relativePosition(index);
          const positionClass = position === 0
            ? "z-10 pointer-events-auto opacity-100"
            : Math.abs(position) === 1
              ? "z-1 pointer-events-auto opacity-[.92]"
              : "z-0 pointer-events-none opacity-0";
          const direction = position > 0 ? 1 : -1;
          const cardOffset = position === 0 ? `${dragOffset}px` : Math.abs(position) === 1 ? `calc(${direction * 68}svh + ${direction * 32}px + ${dragOffset}px)` : `${direction * 120}svh`;
          const mobileCardOffset = position === 0 ? `${dragOffset}px` : Math.abs(position) === 1 ? `calc(${direction * 60}svh + ${dragOffset}px)` : `${direction * 120}svh`;
          return <article key={day.id} className={`absolute top-1/2 left-1/2 h-[min(59vw,648px)] min-h-[390px] w-[min(76vw,1120px)] overflow-hidden rounded-[31px] bg-[#cdd3d2] text-[var(--ink)] shadow-[0_22px_50px_rgba(0,0,0,.34)] [transform:translate3d(-50%,calc(-50%_+_var(--card-offset)),0)_scale(var(--card-scale))] will-change-transform ${isDragging || isJumping ? "transition-none" : "[transition:transform_.7s_cubic-bezier(.22,1,.36,1),opacity_.35s_ease]"} ${positionClass} max-[1024px]:h-[min(62vw,590px)] max-[1024px]:w-[min(84vw,820px)] max-[760px]:h-[min(58svh,520px)] max-[760px]:min-h-[350px] max-[760px]:w-[calc(100vw-12px)] max-[760px]:rounded-[22px] max-[760px]:[--card-offset:var(--mobile-card-offset)] max-[760px]:[--card-scale:var(--mobile-card-scale)] max-[380px]:h-[min(58svh,440px)] max-[380px]:min-h-[320px] [@media(max-height:650px)]:h-[min(58svh,440px)] [@media(max-height:650px)]:min-h-[320px]`} aria-current={position === 0 ? "true" : undefined} style={{ "--card-offset": cardOffset, "--mobile-card-offset": mobileCardOffset, "--card-scale": position === 0 ? 1 : Math.abs(position) === 1 ? .98 : .9, "--mobile-card-scale": position === 0 ? 1 : Math.abs(position) === 1 ? .97 : .9 } as React.CSSProperties}>
            <Image className="object-cover object-center" src={eventImages[index]} alt={`Dokumentasi ${day.title}`} fill draggable={false} priority={index < 2} sizes="(max-width: 760px) 90vw, min(76vw, 1120px)" />
            <div className="absolute inset-0 z-2 bg-[linear-gradient(to_bottom,transparent_34%,rgba(237,236,230,.1)_49%,rgba(101,144,194,.44)_65%,rgba(54,74,140,.84)_79%,#25366d_100%)]" />
            <div className={`absolute right-0 bottom-0 left-0 z-3 bg-transparent p-[clamp(20px,2.4vw,38px)] pt-[clamp(34px,4vw,58px)] font-[Figtree,Arial,sans-serif] text-[var(--paper)] [text-shadow:0_3px_14px_rgba(18,30,66,.7)] max-[760px]:p-[clamp(18px,5vw,24px)] ${position === 0 ? "visible z-4" : "invisible"}`}><p className="mb-1 text-[clamp(15px,1.45vw,23px)] leading-[1.1] font-normal max-[760px]:mb-1.5 max-[760px]:text-[clamp(12px,3.5vw,16px)]">{day.date}</p><h1 className="font-[Castoro,Georgia,serif] text-[clamp(29px,3.25vw,55px)] leading-[1.2] font-bold tracking-[-.02em] [text-shadow:0_3px_16px_rgba(18,30,66,.85)] max-[1024px]:text-[clamp(31px,5vw,48px)] max-[760px]:text-[clamp(29px,9vw,42px)] max-[760px]:leading-[1.05] max-[380px]:text-[clamp(25px,8vw,34px)] [@media(max-height:650px)]:text-[clamp(25px,8vw,34px)]">{day.title}</h1><div className="mt-[11px] flex items-end justify-between gap-[30px] text-[clamp(10px,.8vw,13px)] leading-[1.35] max-[760px]:mt-2.5 max-[760px]:flex-col max-[760px]:items-stretch max-[760px]:gap-3 max-[760px]:text-[11px] max-[760px]:leading-[1.45]"><span className="max-w-[60%] font-normal max-[760px]:line-clamp-2 max-[760px]:max-w-full max-[760px]:overflow-hidden max-[760px]:text-[clamp(10px,2.8vw,12px)] max-[380px]:line-clamp-1 [@media(max-height:650px)]:line-clamp-1">{day.description}</span><Link href={`/hari-pelaksanaan/${day.day}`} className="inline-flex min-w-[236px] items-center justify-between gap-[34px] rounded-full border border-[rgba(237,236,230,.62)] bg-[#edece6] px-[26px] py-4 text-[13px] leading-[1.5] font-medium text-[#364a8c] no-underline shadow-[0_10px_24px_rgba(18,30,66,.16)] [text-shadow:none] transition-[transform,background,color,box-shadow] duration-200 hover:-translate-y-[3px] hover:bg-[#121e42] hover:text-[#edece6] hover:shadow-[0_14px_28px_rgba(18,30,66,.32)] max-[1024px]:min-w-[190px] max-[1024px]:gap-[22px] max-[1024px]:px-5 max-[1024px]:py-[13px] max-[1024px]:text-xs max-[760px]:min-h-11 max-[760px]:w-full max-[760px]:min-w-0 max-[760px]:gap-3 max-[760px]:px-4 max-[760px]:py-2.5 max-[760px]:text-[11px] max-[380px]:min-h-10 max-[380px]:py-2 [@media(max-height:650px)]:min-h-10 [@media(max-height:650px)]:py-2" onClick={(event) => { if (dragged.current || position !== 0) event.preventDefault(); }}>Lihat Dokumentasi <i className="text-2xl leading-none not-italic max-[760px]:text-xl">→</i></Link></div></div>
          </article>;
        })}
      </div>
      <div className="absolute top-1/2 right-[max(18px,2.5vw)] z-5 flex w-[52px] -translate-y-1/2 flex-col items-center gap-[18px] rounded-full bg-[rgba(237,236,230,.88)] py-[18px] shadow-[0_12px_28px_rgba(0,0,0,.22)] max-[960px]:top-auto max-[960px]:right-auto max-[960px]:bottom-[max(16px,env(safe-area-inset-bottom))] max-[960px]:left-1/2 max-[960px]:w-auto max-[960px]:-translate-x-1/2 max-[960px]:translate-y-0 max-[960px]:flex-row max-[960px]:gap-2 max-[960px]:bg-[rgba(237,236,230,.78)] max-[960px]:px-3 max-[960px]:py-2" aria-label="Navigasi hari pelaksanaan">
        {schedule.map((day, index) => <button type="button" key={day.id} className={`h-4 w-4 rounded-full border-0 p-0 transition-[transform,background] duration-200 hover:scale-[1.18] hover:bg-[var(--blue)] max-[960px]:h-[9px] max-[960px]:w-[9px] ${index === activeIndex ? "scale-[1.16] bg-[var(--ink)] shadow-[0_0_0_4px_rgba(18,30,66,.14)]" : "bg-[#6590c2]"}`} onClick={() => selectDay(index)} aria-label={`Pilih ${day.title}`} aria-current={index === activeIndex ? "true" : undefined} />)}
      </div>
    </section>
  );
}
