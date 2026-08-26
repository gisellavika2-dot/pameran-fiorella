"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ScheduleDay } from "@/data/schedule";
import "./EventCarousel.css";

const eventImages = [
  "/figma/event-side-left.webp",
  "/figma/event-side-left.webp",
  "/figma/event-main.webp",
  "/figma/event-side-right.webp",
  "/figma/event-side-right.webp",
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
  const [wrappingIndex, setWrappingIndex] = useState<number | null>(null);
  const [isJumping, setIsJumping] = useState(false);
  const activeRef = useRef(active);
  const transitionLocked = useRef(false);
  const transitionTimer = useRef<number | null>(null);
  const jumpTimer = useRef<number | null>(null);
  const interactionPauseTimer = useRef<number | null>(null);
  const swipeResetTimer = useRef<number | null>(null);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const swipeHandled = useRef(false);

  const move = useCallback((step: 1 | -1) => {
    if (transitionLocked.current || items.length < 2) return;

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
        className="event-deck"
        onPointerDown={(event) => {
          if (event.button !== 0 || event.pointerType === "mouse") return;
          event.currentTarget.setPointerCapture(event.pointerId);
          pointerStart.current = { x: event.clientX, y: event.clientY };
          setPaused(true);
          if (interactionPauseTimer.current !== null) {
            window.clearTimeout(interactionPauseTimer.current);
          }
        }}
        onPointerUp={(event) => {
          const start = pointerStart.current;
          if (!start) return;
          pointerStart.current = null;

          if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
          }

          const distanceX = event.clientX - start.x;
          const distanceY = event.clientY - start.y;

          if (Math.abs(distanceX) > Math.abs(distanceY) && Math.abs(distanceX) >= 42) {
            swipeHandled.current = true;
            move(distanceX < 0 ? 1 : -1);

            if (swipeResetTimer.current !== null) {
              window.clearTimeout(swipeResetTimer.current);
            }
            swipeResetTimer.current = window.setTimeout(() => {
              swipeHandled.current = false;
            }, 500);
          }

          interactionPauseTimer.current = window.setTimeout(() => setPaused(false), 2500);
        }}
        onPointerCancel={() => {
          pointerStart.current = null;
          interactionPauseTimer.current = window.setTimeout(() => setPaused(false), 2500);
        }}
      >
        {items.map((day, index) => {
          const position = relativePosition(index, active, items.length);
          return (
            <Link
              href={`/hari-pelaksanaan/${day.day}`}
              className={`event-card${wrappingIndex === index ? " is-wrapping" : ""}`}
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
                  if (Math.abs(position) === 1) move(position > 0 ? 1 : -1);
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
                <small>Hari {day.day}</small>
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
