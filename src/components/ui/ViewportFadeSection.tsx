"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function ViewportFadeSection({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
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
    <section
      ref={sectionRef}
      className={`${className} transition-opacity duration-1000 ease-in-out motion-reduce:opacity-100 motion-reduce:transition-none ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      {children}
    </section>
  );
}
