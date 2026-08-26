"use client";

import { useEffect, useRef, type ReactNode } from "react";

const SCROLL_DURATION = 850;
const WHEEL_THRESHOLD = 24;
const TOUCH_AXIS_LOCK_THRESHOLD = 8;
const TOUCH_SWIPE_THRESHOLD = 44;
const MIN_OVERFLOW_STOP = 64;
const SCROLL_IDLE_DELAY = 140;

type TouchGesture = {
  identifier: number;
  startX: number;
  startY: number;
  axis: "pending" | "horizontal" | "vertical";
};

type SmoothSectionScrollerProps = {
  children: ReactNode;
  className: string;
  scrollRoot?: "container" | "document";
};

function easeInOutCubic(progress: number) {
  return progress < 0.5
    ? 4 * progress * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 3) / 2;
}

export default function SmoothSectionScroller({
  children,
  className,
  scrollRoot = "container",
}: SmoothSectionScrollerProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const documentScroller = document.scrollingElement as HTMLElement | null;
    const scroller = scrollRoot === "document" ? documentScroller : container;
    if (!container || !scroller) return;

    const styleTarget =
      scrollRoot === "document" ? document.documentElement : container;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let animationFrame: number | null = null;
    let scrollIdleTimer: number | null = null;
    let wheelDistance = 0;
    let touchGesture: TouchGesture | null = null;
    let isAnimating = false;
    let previousSnapType = "";
    let previousScrollBehavior = "";

    const viewportHeight = () =>
      scrollRoot === "document" ? window.innerHeight : container.clientHeight;

    const elementTop = (element: HTMLElement) => {
      if (scrollRoot === "document") {
        return element.getBoundingClientRect().top + scroller.scrollTop;
      }

      return (
        element.getBoundingClientRect().top -
        container.getBoundingClientRect().top +
        scroller.scrollTop
      );
    };

    const scrollTargets = () => {
      const targets = [0];
      const visibleHeight = viewportHeight();
      const sections = Array.from(
        container.querySelectorAll<HTMLElement>("section"),
      );

      sections.forEach((section) => {
        const start = elementTop(section);
        const end = Math.max(
          start,
          start + section.offsetHeight - visibleHeight,
        );
        const distance = end - start;
        const steps =
          distance >= MIN_OVERFLOW_STOP
            ? Math.ceil(distance / visibleHeight)
            : 0;

        targets.push(start);
        for (let step = 1; step <= steps; step += 1) {
          targets.push(start + (distance * step) / steps);
        }
      });

      if (scrollRoot === "document") {
        targets.push(Math.max(0, scroller.scrollHeight - visibleHeight));
      }

      return targets
        .sort((a, b) => a - b)
        .filter((target, index, values) => {
          return index === 0 || Math.abs(target - values[index - 1]) > 2;
        });
    };

    const restoreScrollStyles = () => {
      styleTarget.style.scrollSnapType = previousSnapType;
      styleTarget.style.scrollBehavior = previousScrollBehavior;
      delete container.dataset.scrolling;
    };

    const animateTo = (targetTop: number) => {
      if (prefersReducedMotion.matches) {
        scroller.scrollTop = targetTop;
        return;
      }

      const startTop = scroller.scrollTop;
      const distance = targetTop - startTop;
      const startTime = performance.now();

      isAnimating = true;
      container.dataset.scrolling = "true";
      previousSnapType = styleTarget.style.scrollSnapType;
      previousScrollBehavior = styleTarget.style.scrollBehavior;
      styleTarget.style.scrollSnapType = "none";
      styleTarget.style.scrollBehavior = "auto";

      const step = (time: number) => {
        const progress = Math.min((time - startTime) / SCROLL_DURATION, 1);
        scroller.scrollTop = startTop + distance * easeInOutCubic(progress);

        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(step);
          return;
        }

        animationFrame = null;
        isAnimating = false;
        restoreScrollStyles();
      };

      animationFrame = window.requestAnimationFrame(step);
    };

    const moveByDirection = (direction: 1 | -1) => {
      if (isAnimating) return;

      const targets = scrollTargets();
      const currentTop = scroller.scrollTop;
      const target =
        direction > 0
          ? targets.find((position) => position > currentTop + 2)
          : targets.findLast((position) => position < currentTop - 2);

      if (target !== undefined) animateTo(target);
    };

    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey || Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
        return;
      }

      event.preventDefault();
      if (isAnimating) return;

      wheelDistance += event.deltaY;
      if (Math.abs(wheelDistance) < WHEEL_THRESHOLD) return;

      const direction = wheelDistance > 0 ? 1 : -1;
      wheelDistance = 0;
      moveByDirection(direction);
    };

    const handleTouchStart = (event: TouchEvent) => {
      if (event.touches.length !== 1) {
        touchGesture = null;
        return;
      }

      const target = event.target as HTMLElement | null;
      if (
        target?.closest(
          '[data-section-scroll-ignore], [aria-modal="true"], input, textarea, select, [contenteditable="true"]',
        )
      ) {
        touchGesture = null;
        return;
      }

      const touch = event.touches[0];
      touchGesture = {
        identifier: touch.identifier,
        startX: touch.clientX,
        startY: touch.clientY,
        axis: "pending",
      };
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!touchGesture || event.touches.length !== 1) return;

      const touch = Array.from(event.touches).find(
        (candidate) => candidate.identifier === touchGesture?.identifier,
      );
      if (!touch) return;

      const distanceX = touch.clientX - touchGesture.startX;
      const distanceY = touch.clientY - touchGesture.startY;

      if (
        touchGesture.axis === "pending" &&
        Math.max(Math.abs(distanceX), Math.abs(distanceY)) >=
          TOUCH_AXIS_LOCK_THRESHOLD
      ) {
        touchGesture.axis =
          Math.abs(distanceY) > Math.abs(distanceX)
            ? "vertical"
            : "horizontal";
      }

      if (touchGesture.axis === "vertical" && event.cancelable) {
        event.preventDefault();
      }
    };

    const handleTouchEnd = (event: TouchEvent) => {
      if (!touchGesture) return;

      const touch = Array.from(event.changedTouches).find(
        (candidate) => candidate.identifier === touchGesture?.identifier,
      );
      if (!touch) return;

      const distanceX = touch.clientX - touchGesture.startX;
      const distanceY = touchGesture.startY - touch.clientY;
      const isVerticalSwipe =
        Math.abs(distanceY) > Math.abs(distanceX) &&
        Math.abs(distanceY) >= TOUCH_SWIPE_THRESHOLD;

      touchGesture = null;

      if (!isVerticalSwipe) return;
      if (event.cancelable) event.preventDefault();
      moveByDirection(distanceY > 0 ? 1 : -1);
    };

    const handleTouchCancel = () => {
      touchGesture = null;
    };

    const handleScroll = () => {
      if (isAnimating) return;
      if (scrollIdleTimer !== null) window.clearTimeout(scrollIdleTimer);

      scrollIdleTimer = window.setTimeout(() => {
        scrollIdleTimer = null;
        if (isAnimating) return;

        const currentTop = scroller.scrollTop;
        const target = scrollTargets().reduce((closest, position) => {
          return Math.abs(position - currentTop) < Math.abs(closest - currentTop)
            ? position
            : closest;
        });

        if (Math.abs(target - currentTop) > 2) animateTo(target);
      }, SCROLL_IDLE_DELAY);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      const targetElement = event.target as HTMLElement | null;
      if (
        targetElement?.isContentEditable ||
        targetElement?.matches("input, textarea, select") ||
        (event.key === " " &&
          targetElement?.matches('button, [role="button"]'))
      ) {
        return;
      }

      const direction =
        event.key === "ArrowDown" ||
        event.key === "PageDown" ||
        (event.key === " " && !event.shiftKey)
          ? 1
          : event.key === "ArrowUp" ||
              event.key === "PageUp" ||
              (event.key === " " && event.shiftKey)
            ? -1
            : 0;

      if (!direction && event.key !== "Home" && event.key !== "End") return;

      event.preventDefault();
      if (isAnimating) return;

      const targets = scrollTargets();
      const currentTop = scroller.scrollTop;
      const target =
        event.key === "Home"
          ? targets[0]
          : event.key === "End"
            ? targets[targets.length - 1]
            : direction > 0
              ? targets.find((position) => position > currentTop + 2)
              : targets.findLast((position) => position < currentTop - 2);

      if (target !== undefined) animateTo(target);
    };

    if (scrollRoot === "document") {
      window.addEventListener("wheel", handleWheel, { passive: false });
    } else {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }
    container.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    container.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });
    container.addEventListener("touchend", handleTouchEnd, {
      passive: false,
    });
    container.addEventListener("touchcancel", handleTouchCancel, {
      passive: true,
    });
    scroller.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      if (scrollRoot === "document") {
        window.removeEventListener("wheel", handleWheel);
      } else {
        container.removeEventListener("wheel", handleWheel);
      }
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      container.removeEventListener("touchcancel", handleTouchCancel);
      scroller.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
      if (scrollIdleTimer !== null) window.clearTimeout(scrollIdleTimer);
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
        restoreScrollStyles();
      }
    };
  }, [scrollRoot]);

  return (
    <main
      ref={containerRef}
      className={className}
      style={
        scrollRoot === "document"
          ? { overflowX: "clip", overflowY: "visible" }
          : undefined
      }
    >
      {children}
    </main>
  );
}
