"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ScheduleDay } from "@/data/schedule";

const eventImages = [
  "/figma/event-side-left.png",
  "/figma/event-side-left.png",
  "/figma/event-main.png",
  "/figma/event-side-right.png",
  "/figma/event-side-right.png",
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
      <div className="event-deck">
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
