"use client";

import { useEffect, useRef } from "react";
import styles from "./SupergrafisField.module.css";

const SUPERGRAFIS_SOURCE = "/supergrafis/SUPERGRAFIS-04.webp";
const GSM_COLORS = ["#121E42", "#364A8C", "#6590C2", "#A8C4D4"];
const REPEL_RADIUS = 132;

type Particle = {
  alpha: number;
  direction: number;
  phase: number;
  rotation: number;
  size: number;
  speed: number;
  spin: number;
  sprite: number;
  vx: number;
  vy: number;
  x: number;
  y: number;
};

function seededRandom(seed: number) {
  let value = seed >>> 0;

  return () => {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 4294967296;
  };
}

function createParticles(width: number, height: number): Particle[] {
  const random = seededRandom(Math.round(width * 31 + height * 17));
  const isCompact = width <= 760;
  const count = isCompact
    ? Math.max(22, Math.min(34, Math.round(height / 24)))
    : Math.max(38, Math.min(72, Math.round((width * height) / 19000)));

  return Array.from({ length: count }, (_, index) => {
    const size = isCompact ? 18 + random() * 18 : 26 + random() * 34;

    return {
      alpha: 0.16 + random() * 0.14,
      direction: random() * Math.PI * 2,
      phase: random() * Math.PI * 2,
      rotation: random() * Math.PI * 2,
      size,
      speed: 0.18 + random() * 0.22,
      spin: (random() - 0.5) * 0.002,
      sprite: index % GSM_COLORS.length,
      vx: 0,
      vy: 0,
      x: size + random() * Math.max(1, width - size * 2),
      y: size + random() * Math.max(1, height - size * 2),
    };
  });
}

function createTintedSprites(images: HTMLImageElement[]) {
  return images.flatMap((image) => GSM_COLORS.map((color) => {
    const sprite = document.createElement("canvas");
    const context = sprite.getContext("2d");

    sprite.width = 192;
    sprite.height = 192;

    if (!context) return sprite;

    context.drawImage(image, 0, 0, sprite.width, sprite.height);
    context.globalCompositeOperation = "source-in";
    context.fillStyle = color;
    context.fillRect(0, 0, sprite.width, sprite.height);

    return sprite;
  }));
}

export default function SupergrafisField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = { active: false, x: 0, y: 0 };
    let particles: Particle[] = [];
    let sprites: HTMLCanvasElement[] = [];
    let frameId = 0;
    let lastTime = 0;
    let reducedMotion = motionQuery.matches;
    let disposed = false;

    const draw = (time: number, update: boolean) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const delta = lastTime ? Math.min(2.5, (time - lastTime) / 16.667) : 1;
      const seconds = time / 1000;
      lastTime = time;

      context.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        if (update) {
          if (pointer.active) {
            const dx = particle.x - pointer.x;
            const dy = particle.y - pointer.y;
            const distance = Math.hypot(dx, dy);

            if (distance < REPEL_RADIUS) {
              const angle = distance > 0.1 ? Math.atan2(dy, dx) : particle.phase;
              const force = ((REPEL_RADIUS - distance) / REPEL_RADIUS) ** 2 * 4.2;
              particle.vx += Math.cos(angle) * force * delta;
              particle.vy += Math.sin(angle) * force * delta;
            }
          }

          const damping = 0.86 ** delta;
          particle.vx *= damping;
          particle.vy *= damping;
          const course = particle.direction
            + Math.sin(seconds * 0.23 + particle.phase) * 0.75;
          particle.x += (Math.cos(course) * particle.speed + particle.vx) * delta;
          particle.y += (Math.sin(course) * particle.speed + particle.vy) * delta;
          particle.rotation += particle.spin * delta;

          const edge = particle.size;
          if (particle.x < -edge) particle.x = width + edge;
          if (particle.x > width + edge) particle.x = -edge;
          if (particle.y < -edge) particle.y = height + edge;
          if (particle.y > height + edge) particle.y = -edge;
        }

        const sprite = sprites[particle.sprite];
        if (!sprite) return;

        context.save();
        context.globalAlpha = particle.alpha;
        context.translate(particle.x, particle.y);
        context.rotate(particle.rotation);
        context.drawImage(
          sprite,
          -particle.size / 2,
          -particle.size / 2,
          particle.size,
          particle.size,
        );
        context.restore();
      });
    };

    const animate = (time: number) => {
      frameId = 0;
      draw(time, true);

      if (!disposed && !reducedMotion && !document.hidden) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    const startAnimation = () => {
      if (!frameId && sprites.length && !reducedMotion && !document.hidden) {
        lastTime = 0;
        frameId = window.requestAnimationFrame(animate);
      }
    };

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      particles = createParticles(width, height);

      if (sprites.length) draw(performance.now(), false);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      pointer.active = true;
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };

    const handlePointerOut = (event: PointerEvent) => {
      if (!event.relatedTarget) pointer.active = false;
    };

    const handleMotionPreference = (event: MediaQueryListEvent) => {
      reducedMotion = event.matches;

      if (reducedMotion) {
        window.cancelAnimationFrame(frameId);
        frameId = 0;
        draw(performance.now(), false);
      } else {
        startAnimation();
      }
    };

    const handleVisibility = () => {
      if (document.hidden) {
        window.cancelAnimationFrame(frameId);
        frameId = 0;
      } else if (reducedMotion) {
        draw(performance.now(), false);
      } else {
        startAnimation();
      }
    };

    const loadImage = (source: string) => new Promise<HTMLImageElement | null>((resolve) => {
      const image = new Image();
      image.decoding = "async";
      image.onload = () => resolve(image);
      image.onerror = () => resolve(null);
      image.src = source;
    });

    void Promise.all([loadImage(SUPERGRAFIS_SOURCE)]).then((images) => {
      if (disposed) return;
      sprites = createTintedSprites(
        images.filter((image): image is HTMLImageElement => image !== null),
      );
      draw(performance.now(), false);
      startAnimation();
    });

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerout", handlePointerOut, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);
    motionQuery.addEventListener("change", handleMotionPreference);

    return () => {
      disposed = true;
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerout", handlePointerOut);
      document.removeEventListener("visibilitychange", handleVisibility);
      motionQuery.removeEventListener("change", handleMotionPreference);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
