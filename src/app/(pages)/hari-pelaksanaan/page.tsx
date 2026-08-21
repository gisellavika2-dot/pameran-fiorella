"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { schedule } from "@/data/schedule";

const eventImages = ["/figma/event-main.png", "/figma/event-side-right.png", "/figma/event-side-left.png", "/figma/division-event.png", "/figma/division-documentation.png"];

export default function HariPelaksanaanPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const dragStartY = useRef<number | null>(null);
  const dragged = useRef(false);

  const wheelOffset = useRef(0);
  const wheelLocked = useRef(false);

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
    <section className={`schedule-page${isDragging ? " is-dragging" : ""}${isJumping ? " is-jumping" : ""}`} style={{ "--schedule-drag-offset": `${dragOffset}px` } as React.CSSProperties} onPointerDownCapture={handlePointerDown} onPointerMoveCapture={handlePointerMove} onPointerUpCapture={handlePointerEnd} onPointerCancelCapture={handlePointerEnd} onDragStart={(event) => event.preventDefault()}>
      <div className="schedule-drag-hint" aria-hidden="true">Tarik untuk melihat hari lainnya</div>
      <div className="schedule-deck" aria-label="Daftar hari pelaksanaan. Tarik ke atas atau ke bawah untuk berpindah hari." onWheel={handleWheel} role="region" tabIndex={0}>
        {schedule.map((day, index) => {
          const position = relativePosition(index);
          return <article key={day.id} className="schedule-card" data-position={position} aria-current={position === 0 ? "true" : undefined} style={{ "--schedule-card-gap": "32px" } as React.CSSProperties}>
            <Image src={eventImages[index]} alt={`Dokumentasi ${day.title}`} fill draggable={false} priority={index < 2} sizes="(max-width: 760px) 90vw, min(76vw, 1120px)" />
            <div className="schedule-card-shade" />
            <div className="schedule-card-content"><p>{day.date}</p><h1>{day.title}</h1><div className="schedule-card-bottom"><span>{day.description}</span><Link href={`/hari-pelaksanaan/${day.day}`} className="schedule-card-cta" onClick={(event) => { if (dragged.current || position !== 0) event.preventDefault(); }}>Lihat Dokumentasi <i>→</i></Link></div></div>
          </article>;
        })}
      </div>
      <div className="schedule-pagination" aria-label="Navigasi hari pelaksanaan">
        {schedule.map((day, index) => <button type="button" key={day.id} className={index === activeIndex ? "is-active" : ""} onClick={() => selectDay(index)} aria-label={`Pilih ${day.title}`} aria-current={index === activeIndex ? "true" : undefined} />)}
      </div>
    </section>
  );
}
