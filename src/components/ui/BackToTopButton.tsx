// src/components/ui/BackToTopButton.tsx

"use client";

export default function BackToTopButton() {
  const handleClick = () => {
    const container = document.querySelector(".scroll-snap-container");
    if (container) {
      container.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Kembali ke atas"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-dark text-neutral-light-bg transition-colors hover:bg-primary-dark-alt"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    </button>
  );
}