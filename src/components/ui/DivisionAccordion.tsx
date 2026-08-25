"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Division } from "@/data/divisions";
import "./DivisionAccordion.css";

const divisionLogos = [
  "/figma/division-bph.webp",
  "/figma/division-pr.webp",
  "/figma/division-pic.webp",
  "/figma/division-keamanan.webp",
  "/figma/division-perkap.webp",
  "/figma/division-medis.webp",
  "/figma/division-konsum.webp",
  "/figma/division-website.webp",
  "/figma/division-acara.webp",
  "/figma/division-dokum.webp",
  "/figma/division-visual.webp",
];

export default function DivisionAccordion({ items }: { items: Division[] }) {
  const [active, setActive] = useState(0);
  const accordionRef = useRef<HTMLDivElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);
  
  const touchStart = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const isInitialMount = useRef(true);
  const autoAdvanceTimer = useRef<NodeJS.Timeout | null>(null);
  const pauseTimer = useRef<NodeJS.Timeout | null>(null);
  const isPaused = useRef(false);

  const pauseAutoAdvance = useCallback(() => {
    isPaused.current = true;

    if (pauseTimer.current) clearTimeout(pauseTimer.current);

    pauseTimer.current = setTimeout(() => {
      isPaused.current = false;
    }, 3000);
  }, []);

  const selectDivision = (index: number) => {
    pauseAutoAdvance();
    setActive(index);
  };

  const getPosition = (index: number) => {
    const halfway = Math.floor(items.length / 2);
    let position = index - active;

    if (position > halfway) position -= items.length;
    if (position < -halfway) position += items.length;

    return position;
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const container = navContainerRef.current;
    if (!container) return;

    const activeItem = container.children[active] as HTMLElement;
    if (activeItem) {
      const scrollLeft =
        activeItem.offsetLeft -
        container.clientWidth / 2 +
        activeItem.clientWidth / 2;

      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  }, [active]);

  useEffect(() => {
    if (items.length <= 1) return;

    autoAdvanceTimer.current = setInterval(() => {
      if (!isPaused.current) {
        setActive((current) => (current + 1) % items.length);
      }
    }, 3000);

    return () => {
      if (autoAdvanceTimer.current) clearInterval(autoAdvanceTimer.current);
      if (pauseTimer.current) clearTimeout(pauseTimer.current);
    };
  }, [items.length]);

  return (
    <div className="division-accordion-shell">
      <div
        ref={accordionRef}
        className="division-accordion"
        onTouchStart={(event) => { 
          touchStart.current = event.touches[0].clientX;
          touchStartY.current = event.touches[0].clientY;
        }}
        onTouchEnd={(event) => {
          if (touchStart.current === null || touchStartY.current === null) return;
          const distanceX = touchStart.current - event.changedTouches[0].clientX;
          const distanceY = touchStartY.current - event.changedTouches[0].clientY;

          if (Math.abs(distanceX) > Math.abs(distanceY) && Math.abs(distanceX) > 30) {
            pauseAutoAdvance();
            setActive((current) => (current + (distanceX > 0 ? 1 : -1) + items.length) % items.length);
          }
          touchStart.current = null;
          touchStartY.current = null;
        }}
        aria-label="Daftar 11 divisi"
      >
        {items.map((division, index) => {
          const position = getPosition(index);
          const visualPosition = Math.max(-3, Math.min(3, position));
          const isActive = position === 0;
          const isVisible = Math.abs(position) <= 2;

          return (
            <article
              key={division.id}
              className={`h-80 division-panel division-panel-${index} ${isActive ? "is-active" : "is-closed"}`}
              data-position={visualPosition}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => selectDivision(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  selectDivision(index);
                }
              }}
              role="button"
              tabIndex={isVisible ? 0 : -1}
              aria-current={isActive ? "true" : undefined}
              aria-hidden={!isVisible}
              aria-label={`Tampilkan divisi ${division.name}`}
            >
              <div className="division-panel-footer flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                  <Image
                    src={divisionLogos[index % divisionLogos.length]}
                    alt={`Logo ${division.name}`}
                    width={72}
                    height={72}
                  />
                  <div className="division-panel-copy" aria-hidden={!isActive}>
                    <h3>{division.name}</h3>
                    <p>{division.nameEng}</p>
                  </div>
                </div>

                {isActive && (
                  <Link
                    href={`/divisi/${division.id}`}
                    onClick={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                    onTouchEnd={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-primary-dark hover:bg-[#364A8C] rounded-full transition-all duration-200 shadow-md hover:shadow-lg shrink-0"
                    aria-label={`Lihat detail divisi ${division.name}`}
                  >
                    <span>Selengkapnya</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </Link>
                )}
              </div>
            </article>
          );
        })}
      </div>

      <nav 
        ref={navContainerRef}
        className="flex justify-start sm:justify-center items-center overflow-x-auto overflow-y-hidden scrollbar-none py-6 px-4 division-nav-thumbnails"
        aria-label="Navigasi Divisi"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {items.map((division, index) => {
          const isActive = index === active; 
          return (
            <button
              key={`thumb-${division.id}`}
              type="button"
              onClick={() => selectDivision(index)}
              onTouchEnd={(e) => {
                e.preventDefault();
                selectDivision(index);
              }}
              className={`division-nav-item flex-shrink-0 transition-transform duration-300 ${
                isActive ? "opacity-100 scale-125 mx-6 z-10" : "opacity-60 hover:opacity-100 hover:scale-110 mx-3"
              }`}
              aria-label={`Pilih ${division.name}`}
              aria-pressed={isActive}
            >
              <div className="division-thumb-circle pointer-events-none">
                <Image
                  src={divisionLogos[index % divisionLogos.length]}
                  alt=""
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            </button>
          );
        })}
      </nav>
    </div>
  );
}