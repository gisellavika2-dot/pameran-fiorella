// src/components/ui/CustomVideoPlayer.tsx

"use client";

import { useEffect, useRef, useState } from "react";

function PlayIcon() {
  return (
    <svg width="40%" height="40%" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="34%" height="34%" viewBox="0 0 24 24" fill="currentColor">
      <rect x="6" y="4" width="4" height="16" />
      <rect x="14" y="4" width="4" height="16" />
    </svg>
  );
}

function FullscreenIcon() {
  return (
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
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
      <path d="M3 16v3a2 2 0 0 0 2 2h3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </svg>
  );
}

function MuteIcon() {
  return (
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
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  );
}

function UnmuteIcon() {
  return (
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
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="5" r="1.6" />
      <circle cx="12" cy="12" r="1.6" />
      <circle cx="12" cy="19" r="1.6" />
    </svg>
  );
}

const SPEED_OPTIONS = [0.5, 1, 1.5, 2];

interface CustomVideoPlayerProps {
  src: string;
}

export default function CustomVideoPlayer({ src }: CustomVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showMore, setShowMore] = useState(false);
  const [showCenterButton, setShowCenterButton] = useState(true);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  const revealCenterButton = () => {
    setShowCenterButton(true);
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    if (videoRef.current && !videoRef.current.paused) {
      hideTimeoutRef.current = setTimeout(() => setShowCenterButton(false), 2000);
    }
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
      revealCenterButton();
    } else {
      v.pause();
      setIsPlaying(false);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      setShowCenterButton(true);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  const toggleFullscreen = () => {
    const el = containerRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      el.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    setProgress((v.currentTime / v.duration) * 100);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
    v.currentTime = ratio * v.duration;
  };

  const changeSpeed = (rate: number) => {
    const v = videoRef.current;
    if (!v) return;
    v.playbackRate = rate;
    setPlaybackRate(rate);
    setShowMore(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={revealCenterButton}
      className="relative w-full max-w-full overflow-hidden rounded-2xl bg-black"
    >
      <video
        ref={videoRef}
        src={src}
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onClick={togglePlay}
        onEnded={() => {
          setIsPlaying(false);
          if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
          setShowCenterButton(true);
        }}
        className="max-h-[calc(100svh-var(--header-height)-96px)] w-full object-contain"
      />

      <button
        onClick={togglePlay}
        aria-label={isPlaying ? "Jeda" : "Putar"}
        className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary-dark/70 text-neutral-light-bg transition-opacity duration-300 hover:bg-primary-dark/90 ${
          showCenterButton ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{ width: "clamp(48px, 8vw, 72px)", height: "clamp(48px, 8vw, 72px)" }}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-dark/90 to-transparent p-4">
        <div
          onClick={handleSeek}
          className="mb-3 h-1.5 w-full rounded-full bg-neutral-light-bg/30"
        >
          <div
            className="h-full rounded-full bg-primary-light"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={toggleFullscreen}
            aria-label="Layar penuh"
            className="flex items-center justify-center rounded-lg bg-neutral-light-bg/10 py-2 text-neutral-light-bg transition-colors hover:bg-neutral-light-bg/20"
          >
            <FullscreenIcon />
          </button>

          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Aktifkan suara" : "Bisukan"}
            className="flex items-center justify-center rounded-lg bg-neutral-light-bg/10 py-2 text-neutral-light-bg transition-colors hover:bg-neutral-light-bg/20"
          >
            {isMuted ? <MuteIcon /> : <UnmuteIcon />}
          </button>

          <div className="relative">
            <button
              onClick={() => setShowMore((s) => !s)}
              aria-label="Opsi lainnya"
              className="flex w-full items-center justify-center rounded-lg bg-neutral-light-bg/10 py-2 text-neutral-light-bg transition-colors hover:bg-neutral-light-bg/20"
            >
              <MoreIcon />
            </button>

            {showMore && (
              <div className="absolute bottom-full right-0 mb-2 w-32 rounded-lg bg-primary-dark p-2 shadow-lg">
                <p className="mb-1 px-2 font-sans text-xs text-primary-light">
                  Kecepatan
                </p>
                {SPEED_OPTIONS.map((rate) => (
                  <button
                    key={rate}
                    onClick={() => changeSpeed(rate)}
                    className={`block w-full rounded px-2 py-1 text-left font-sans text-sm transition-colors ${
                      playbackRate === rate
                        ? "bg-primary-dark-alt text-neutral-light-bg"
                        : "text-primary-light hover:bg-primary-dark-alt/50"
                    }`}
                  >
                    {rate}x
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}