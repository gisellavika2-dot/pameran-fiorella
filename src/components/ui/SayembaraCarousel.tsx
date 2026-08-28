// src/components/ui/SayembaraCarousel.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { AssetFile } from "@/lib/assets";
import "./EventCarousel.css";

function relativePosition(index: number, active: number, length: number) {
  let distance = index - active;
  if (distance > length / 2) distance -= length;
  if (distance < -length / 2) distance += length;
  return distance;
}

export default function SayembaraCarousel({
  items,
  href,
  label,
}: {
  items: AssetFile[];
  href: string;
  label: string;
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const activeRef = useRef(active);

  const move = useCallback(
    (step: 1 | -1) => {
      if (items.length < 2) return;
      const next = (activeRef.current + step + items.length) % items.length;
      activeRef.current = next;
      setActive(next);
    },
    [items.length],
  );

  useEffect(() => {
    if (paused || items.length < 2) return;
    const timer = window.setInterval(() => move(1), 3000);
    return () => window.clearInterval(timer);
  }, [items.length, move, paused]);

  if (items.length === 0) {
    return (
      <div className="event-carousel" aria-label={label}>
        <div className="event-deck">
          <Link href={href} className="event-card" data-position={0} aria-current="true">
            <div className="event-caption">
              <span>{label}</span>
              <strong>Segera hadir</strong>
            </div>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className="event-carousel sayembara-carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="event-deck">
        {items.map((item, index) => {
          const position = relativePosition(index, active, items.length);
          return (
            <Link
              href={href}
              className="event-card"
              data-position={position}
              aria-label={item.title}
              aria-current={position === 0 ? "true" : undefined}
              key={item.fileName}
              onClick={(event) => {
                if (position !== 0) {
                  event.preventDefault();
                  activeRef.current = index;
                  setActive(index);
                }
              }}
            >
              {item.type === "image" ? (
                <Image src={item.url} alt={item.title} fill sizes="(max-width: 760px) 78vw, 38vw" />
              ) : (
                <video
                  src={item.url}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
              <div className="event-caption">
                <span>Juara {item.rank}</span>
                <strong>{item.title}</strong>
                {item.username && <small>{item.username}</small>}
              </div>
            </Link>
          );
        })}
      </div>
      <div className="event-carousel-controls" aria-label={`Navigasi ${label}`}>
        <div className="event-carousel-pagination" aria-label={`Pilih karya ${label}`}>
          {items.map((item, index) => (
            <button
              type="button"
              key={item.fileName}
              className={index === active ? "is-active" : ""}
              onClick={() => {
                activeRef.current = index;
                setActive(index);
              }}
              aria-label={`Pilih ${item.title}`}
              aria-current={index === active ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
