"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function ViewportFadeSection({
  children,
  className,
  background,
  id,
}: {
  children: ReactNode;
  className: string;
  background?: ReactNode;
  id?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.disconnect();
      },
      {
        rootMargin: "0px 0px 20% 0px",
        threshold: 0.01,
      },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} ref={sectionRef} className={className}>
      {background && (
        <div
          aria-hidden="true"
          className={`section-fade-bg transition-opacity duration-1000 ease-in-out motion-reduce:opacity-100 motion-reduce:transition-none ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          {background}
        </div>
      )}
      {children}
    </section>
  );
}
