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
  const transitionLocked = useRef(false);
  const transitionTimer = useRef<number | null>(null);

  const move = useCallback((step: 1 | -1) => {
    if (transitionLocked.current) return;
    transitionLocked.current = true;
    setActive((current) => (current + step + items.length) % items.length);
    transitionTimer.current = window.setTimeout(() => {
      transitionLocked.current = false;
    }, 720);
  }, [items.length]);

  useEffect(() => {
    if (paused || items.length < 2) return;
    const timer = window.setInterval(() => move(1), 3000);
    return () => window.clearInterval(timer);
  }, [items.length, move, paused]);

  useEffect(() => {
    return () => {
      if (transitionTimer.current !== null) window.clearTimeout(transitionTimer.current);
    };
  }, []);

  return (
    <div
      className="event-carousel"
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
              className="event-card"
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
        <button type="button" onClick={() => move(-1)} aria-label="Hari sebelumnya">←</button>
        <span>{String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
        <button type="button" onClick={() => move(1)} aria-label="Hari berikutnya">→</button>
      </div>
    </div>
  );
}
