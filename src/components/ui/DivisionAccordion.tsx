"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Division } from "@/data/divisions";

const divisionLogos = [
  "/figma/division-bph.webp",
  "/figma/division-dokum.webp",
  "/figma/division-keamanan.webp",
  "/figma/division-konsum.webp",
  "/figma/division-medis.webp",
  "/figma/division-perkap.webp",
  "/figma/division-pic.webp",
  "/figma/division-pr.webp",
  "/figma/division-visual.webp",
  "/figma/division-website.webp",
  "/figma/division-acara.webp",
];

export default function DivisionAccordion({ items }: { items: Division[] }) {
  const [active, setActive] = useState(Math.floor(items.length / 2));
  const accordionRef = useRef<HTMLDivElement>(null);
  const wheelLock = useRef(false);
  const touchStart = useRef<number | null>(null);
  const hasManuallyNavigated = useRef(false);
  const autoAdvanceTimer = useRef<number | null>(null);

  const disableAutoAdvance = useCallback(() => {
    hasManuallyNavigated.current = true;

    if (autoAdvanceTimer.current !== null) {
      window.clearInterval(autoAdvanceTimer.current);
      autoAdvanceTimer.current = null;
    }
  }, []);

  const move = (direction: -1 | 1) => {
    disableAutoAdvance();
    setActive((current) => (current + direction + items.length) % items.length);
  };

  const getPosition = (index: number) => {
    const halfway = Math.floor(items.length / 2);
    let position = index - active;

    if (position > halfway) position -= items.length;
    if (position < -halfway) position += items.length;

    return position;
  };

  useEffect(() => {
    const accordion = accordionRef.current;
    if (!accordion) return;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      event.stopPropagation();
      if (wheelLock.current || Math.abs(event.deltaX) + Math.abs(event.deltaY) < 8) return;

      wheelLock.current = true;
      disableAutoAdvance();
      const direction = (event.deltaX || event.deltaY) > 0 ? 1 : -1;
      setActive((current) => (current + direction + items.length) % items.length);
      window.setTimeout(() => { wheelLock.current = false; }, 320);
    };

    accordion.addEventListener("wheel", handleWheel, { passive: false });
    return () => accordion.removeEventListener("wheel", handleWheel);
  }, [disableAutoAdvance, items.length]);

  useEffect(() => {
    if (hasManuallyNavigated.current || items.length <= 1) return;

    autoAdvanceTimer.current = window.setInterval(() => {
      if (hasManuallyNavigated.current) return;
      setActive((current) => (current + 1) % items.length);
    }, 8000);

    return () => {
      if (autoAdvanceTimer.current !== null) {
        window.clearInterval(autoAdvanceTimer.current);
        autoAdvanceTimer.current = null;
      }
    };
  }, [items.length]);

  return (
    <div className="division-accordion-shell">
      <div
        ref={accordionRef}
        className="division-accordion"
        onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }}
        onTouchEnd={(event) => {
          if (touchStart.current === null) return;
          const distance = touchStart.current - event.changedTouches[0].clientX;
          if (Math.abs(distance) > 35) move(distance > 0 ? 1 : -1);
          touchStart.current = null;
        }}
        aria-label="Daftar 11 divisi"
      >
        {items.map((division, index) => {
          const position = getPosition(index);
          const visualPosition = Math.max(-2, Math.min(2, position));
          const isActive = position === 0;
          const isVisible = Math.abs(position) <= 1;

          return (
            <article
              key={division.id}
              className={`division-panel division-panel-${index} ${isActive ? "is-active" : "is-closed"}`}
              data-position={visualPosition}

              onMouseDown={(event) => event.preventDefault()}
              
              onClick={() => {
                disableAutoAdvance();
                setActive(index);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  disableAutoAdvance();
                  setActive(index);
                }
              }}
              role="button"
              tabIndex={isVisible ? 0 : -1}
              aria-current={isActive ? "true" : undefined}
              aria-hidden={!isVisible}
              aria-label={`Tampilkan divisi ${division.name}`}
            >
              <div className="division-panel-footer">
                <Image
                  src={divisionLogos[index % divisionLogos.length]}
                  alt={`Logo ${division.name}`}
                  width={72}
                  height={72}
                />
                <div className="division-panel-copy" aria-hidden={!isActive}>
                  <h3>{division.name}</h3>
                  <p>{division.coordinatorRole}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <div className="division-controls">
        <button onClick={() => move(-1)} aria-label="Divisi sebelumnya">←</button>
        <button onClick={() => move(1)} aria-label="Divisi berikutnya">→</button>
      </div>
    </div>
  );
}
