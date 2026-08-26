"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ScheduleDay } from "@/data/schedule";
import "./EventCarousel.css";

const eventImages = [
  "/figma/landing/1.webp",
  "/figma/landing/2.webp",
  "/figma/landing/3.webp",
  "/figma/landing/4.webp",
  "/figma/landing/5.webp",
];

function relativePosition(index: number, active: number, length: number) {
  let distance = index - active;
  if (distance > length / 2) distance -= length;
  if (distance < -length / 2) distance += length;
  return distance;
}

export default function EventCarousel({ items }: { items: ScheduleDay[] }) {
  const [active, setActive] = useState(Math.floor(items.length / 2));
  const [paused, setPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [wrappingIndex, setWrappingIndex] = useState<number | null>(null);
  const [isJumping, setIsJumping] = useState(false);
  const activeRef = useRef(active);
  const transitionLocked = useRef(false);
  const transitionTimer = useRef<number | null>(null);
  const jumpTimer = useRef<number | null>(null);
  const interactionPauseTimer = useRef<number | null>(null);
  const swipeResetTimer = useRef<number | null>(null);
  const pointerStart = useRef<{
    x: number;
    y: number;
    pointerId: number;
    isDragging: boolean;
  } | null>(null);
  const swipeHandled = useRef(false);

  const move = useCallback((step: 1 | -1, force = false) => {
    if (items.length < 2 || (transitionLocked.current && !force)) return;

    if (transitionTimer.current !== null) {
      window.clearTimeout(transitionTimer.current);
    }

    transitionLocked.current = true;
    const current = activeRef.current;
    const next = (current + step + items.length) % items.length;

    if (items.length === 5) {
      const wrappingPosition = step === 1 ? -2 : 2;
      const wrappingIndex = items.findIndex(
        (_, index) => relativePosition(index, current, items.length) === wrappingPosition,
      );

      if (wrappingIndex !== -1) {
        setWrappingIndex(wrappingIndex);
      }
    }

    activeRef.current = next;
    setActive(next);
    transitionTimer.current = window.setTimeout(() => {
      setWrappingIndex(null);
      transitionLocked.current = false;
    }, 720);
  }, [items]);

  useEffect(() => {
    if (paused || items.length < 2) return;
    const timer = window.setInterval(() => move(1), 3000);
    return () => window.clearInterval(timer);
  }, [items.length, move, paused]);

  useEffect(() => {
    return () => {
      if (transitionTimer.current !== null) window.clearTimeout(transitionTimer.current);
      if (jumpTimer.current !== null) window.clearTimeout(jumpTimer.current);
      if (interactionPauseTimer.current !== null) window.clearTimeout(interactionPauseTimer.current);
      if (swipeResetTimer.current !== null) window.clearTimeout(swipeResetTimer.current);
    };
  }, []);

  return (
    <div
      className={`event-carousel${isJumping ? " is-jumping" : ""}`}
      aria-label="Hari pelaksanaan Fiorella"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        className={`event-deck${isDragging ? " is-dragging" : ""}`}
        onDragStart={(event) => event.preventDefault()}
        onPointerDown={(event) => {
          if (event.button !== 0) return;

          pointerStart.current = {
            x: event.clientX,
            y: event.clientY,
            pointerId: event.pointerId,
            isDragging: false,
          };
        }}
        onPointerMove={(event) => {
          const pointer = pointerStart.current;
          if (!pointer || pointer.pointerId !== event.pointerId || pointer.isDragging) return;

          const distanceX = event.clientX - pointer.x;
          const distanceY = event.clientY - pointer.y;
          if (Math.hypot(distanceX, distanceY) < 8) return;

          if (Math.abs(distanceY) >= Math.abs(distanceX)) {
            pointerStart.current = null;
            return;
          }

          pointer.isDragging = true;
          event.currentTarget.setPointerCapture(event.pointerId);
          setIsDragging(true);
          setPaused(true);
          if (interactionPauseTimer.current !== null) {
            window.clearTimeout(interactionPauseTimer.current);
          }
        }}
        onPointerUp={(event) => {
          const pointer = pointerStart.current;
          pointerStart.current = null;
          setIsDragging(false);
          if (!pointer || pointer.pointerId !== event.pointerId || !pointer.isDragging) return;

          if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
          }

          const distanceX = event.clientX - pointer.x;
          const distanceY = event.clientY - pointer.y;

          if (Math.abs(distanceX) > Math.abs(distanceY) && Math.abs(distanceX) >= 42) {
            move(distanceX < 0 ? 1 : -1, true);
          }

          swipeHandled.current = true;
          if (swipeResetTimer.current !== null) {
            window.clearTimeout(swipeResetTimer.current);
          }
          swipeResetTimer.current = window.setTimeout(() => {
            swipeHandled.current = false;
          }, 500);

          interactionPauseTimer.current = window.setTimeout(() => setPaused(false), 2500);
        }}
        onPointerCancel={(event) => {
          pointerStart.current = null;
          setIsDragging(false);
          if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
          }
          interactionPauseTimer.current = window.setTimeout(() => setPaused(false), 2500);
        }}
      >
        {items.map((day, index) => {
          const position = relativePosition(index, active, items.length);
          return (
            <Link
              href={`/hari-pelaksanaan/${day.day}`}
              className={`event-card${wrappingIndex === index ? " is-wrapping" : ""}`}
              draggable={false}
              data-position={position}
              aria-label={`${day.title}, ${day.date}`}
              aria-current={position === 0 ? "true" : undefined}
              key={day.id}
              onClick={(event) => {
                if (swipeHandled.current) {
                  event.preventDefault();
                  swipeHandled.current = false;
                  return;
                }

                if (position !== 0) {
                  event.preventDefault();
                  if (Math.abs(position) === 1) move(position > 0 ? 1 : -1, true);
                }
              }}
            >
              <Image
                src={eventImages[index % eventImages.length]}
                alt={`Dokumentasi ${day.title}`}
                fill
                draggable={false}
                sizes="(max-width: 760px) 78vw, 38vw"
              />
              <div className="event-caption">
                <span>{day.date}</span>
                <strong>{day.title}</strong>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="event-carousel-controls" aria-label="Navigasi hari pelaksanaan">
        <div className="event-carousel-pagination" aria-label="Pilih hari pelaksanaan">
          {items.map((day, index) => (
            <button
              type="button"
              key={day.id}
              className={index === active ? "is-active" : ""}
              onClick={() => {
                if (transitionTimer.current !== null) {
                  window.clearTimeout(transitionTimer.current);
                }
                transitionLocked.current = false;
                setWrappingIndex(null);

                const distance = Math.abs(index - activeRef.current);
                if (distance > 1 && distance < items.length - 1) {
                  setIsJumping(true);
                  if (jumpTimer.current !== null) window.clearTimeout(jumpTimer.current);
                  jumpTimer.current = window.setTimeout(() => setIsJumping(false), 50);
                }
                activeRef.current = index;
                setActive(index);
              }}
              aria-label={`Pilih ${day.title}`}
              aria-current={index === active ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
