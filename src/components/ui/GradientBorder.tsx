// src/components/ui/GradientBorder.tsx

"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

interface GradientBorderProps {
  children: ReactNode;
  className?: string;
}

// Border gradasi biru tua -> biru muda.
// Desktop: bagian terang selalu mengarah ke posisi kursor di layar,
// walau kursor sedang berada di luar kartu (tracking mouse global).
// Saat kursor masuk ke area kartu, border transisi halus jadi biru
// muda solid sepenuhnya.
// Mobile/tablet (tanpa mouse): otomatis berputar via CSS animation
// (lihat .gradient-border di globals.css), tidak perlu JS sama sekali.
export default function GradientBorder({
  children,
  className = "",
}: GradientBorderProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    let frame: number;

    const handleMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const angle =
          (Math.atan2(e.clientY - centerY, e.clientX - centerX) * 180) /
            Math.PI +
          90;
        el.style.setProperty("--gradient-angle", `${angle}deg`);
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`gradient-border ${isHovering ? "is-hovering" : ""} ${className}`}
    >
      {children}
    </div>
  );
}