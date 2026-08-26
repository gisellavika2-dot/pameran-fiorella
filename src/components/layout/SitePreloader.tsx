"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import "./SitePreloader.css";

const PRELOAD_STORAGE_KEY = "fiorella-site-assets-v1";
const IMAGE_WIDTHS = [32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920];
const PRELOAD_CONCURRENCY = 6;

type PreloaderPhase = "loading" | "exiting" | "ready";

function closestImageWidth(target: number) {
  return IMAGE_WIDTHS.find((width) => width >= target) ?? IMAGE_WIDTHS.at(-1)!;
}

function optimizedImageUrl(source: string, width: number) {
  if (/\.svg(?:$|\?)/i.test(source)) return source;
  return `/_next/image?url=${encodeURIComponent(source)}&w=${width}&q=75`;
}

function loadImage(source: string, width: number, signal: AbortSignal) {
  return new Promise<void>((resolve) => {
    const image = new window.Image();
    let settled = false;

    const finish = () => {
      if (settled) return;
      settled = true;
      image.onload = null;
      image.onerror = null;
      signal.removeEventListener("abort", abort);
      resolve();
    };

    const abort = () => {
      image.src = "";
      finish();
    };

    image.decoding = "async";
    image.fetchPriority = "low";
    image.onload = finish;
    image.onerror = finish;
    signal.addEventListener("abort", abort, { once: true });
    image.src = optimizedImageUrl(source, width);

    if (image.complete) finish();
  });
}

async function warmImageCache(
  sources: string[],
  width: number,
  signal: AbortSignal,
  onProgress: (completed: number) => void,
) {
  let cursor = 0;
  let completed = 0;

  const worker = async () => {
    while (!signal.aborted) {
      const index = cursor;
      cursor += 1;
      if (index >= sources.length) return;

      await loadImage(sources[index], width, signal);
      completed += 1;
      onProgress(completed);
    }
  };

  await Promise.all(
    Array.from(
      { length: Math.min(PRELOAD_CONCURRENCY, sources.length) },
      () => worker(),
    ),
  );
}

export default function SitePreloader({ imageSources }: { imageSources: string[] }) {
  const [phase, setPhase] = useState<PreloaderPhase>("loading");
  const [progress, setProgress] = useState(0);
  const [needsInteraction, setNeedsInteraction] = useState(false);
  const assetsReady = useRef(false);
  const videoFinished = useRef(false);
  const isFinishing = useRef(false);
  const exitTimer = useRef<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const finishPreload = useCallback(() => {
    if (isFinishing.current) return;
    isFinishing.current = true;

    try {
      window.sessionStorage.setItem(PRELOAD_STORAGE_KEY, "ready");
    } catch {
      // The gate still works when storage is unavailable.
    }

    document.body.classList.remove("site-preload-pending");
    setPhase("exiting");
    exitTimer.current = window.setTimeout(() => setPhase("ready"), 480);
  }, []);

  const finishWhenReady = useCallback(() => {
    if (assetsReady.current && videoFinished.current) finishPreload();
  }, [finishPreload]);

  const markVideoFinished = useCallback(() => {
    videoFinished.current = true;
    finishWhenReady();
  }, [finishWhenReady]);

  useEffect(() => {
    let wasPreloaded = false;

    try {
      wasPreloaded = window.sessionStorage.getItem(PRELOAD_STORAGE_KEY) === "ready";
    } catch {
      // Continue with a normal preload when storage is unavailable.
    }

    if (wasPreloaded) {
      const frame = window.requestAnimationFrame(() => {
        document.body.classList.remove("site-preload-pending");
        setPhase("ready");
      });
      return () => window.cancelAnimationFrame(frame);
    }

    const controller = new AbortController();
    const sources = Array.from(new Set(imageSources));
    const displayWidth = Math.min(window.innerWidth, 1380);
    const density = Math.min(window.devicePixelRatio || 1, 2);
    const targetWidth = window.innerWidth <= 768
      ? Math.min(displayWidth, 384) * density
      : displayWidth * 0.6 * density;
    const width = closestImageWidth(targetWidth);

    void warmImageCache(sources, width, controller.signal, (completed) => {
      const nextProgress = Math.round((completed / sources.length) * 100);
      setProgress((current) => current === nextProgress ? current : nextProgress);
    }).then(() => {
      if (controller.signal.aborted) return;
      assetsReady.current = true;
      setProgress(100);
      finishWhenReady();
    });

    return () => controller.abort();
  }, [finishPreload, finishWhenReady, imageSources]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    const playback = video.play();
    void playback?.catch(() => setNeedsInteraction(true));
  }, []);

  useEffect(() => {
    return () => {
      if (exitTimer.current !== null) window.clearTimeout(exitTimer.current);
      document.body.classList.remove("site-preload-pending");
    };
  }, []);

  if (phase === "ready") return null;

  return (
    <div
      className={`site-preloader${phase === "exiting" ? " is-exiting" : ""}`}
      role="status"
      aria-live="polite"
      aria-label={`Menyiapkan Fiorella, ${progress}%`}
    >
      <video
        ref={videoRef}
        className="site-preloader-video"
        src="/bumperVideo/bumperVideo.mp4"
        autoPlay
        playsInline
        preload="auto"
        onPlay={() => setNeedsInteraction(false)}
        onEnded={markVideoFinished}
        onError={markVideoFinished}
        aria-hidden="true"
      />
      <div className="site-preloader-shade" />
      {needsInteraction && (
        <button
          className="site-preloader-start"
          type="button"
          onClick={() => {
            const video = videoRef.current;
            if (!video) return;
            video.currentTime = 0;
            video.muted = false;
            void video.play().catch(() => setNeedsInteraction(true));
          }}
        >
          Putar dengan suara
        </button>
      )}
      <div className="site-preloader-progress">
        <span>Menyiapkan pengalaman Fiorella</span>
        <div className="site-preloader-track" aria-hidden="true">
          <i style={{ transform: `scaleX(${progress / 100})` }} />
        </div>
        <b>{progress}%</b>
      </div>
    </div>
  );
}
