"use client";

import { useEffect } from "react";

/* Anchor links always take the SAME time to scroll (900ms),
   whether the section is near or far. */
const DURATION = 900;
const NAV_OFFSET = 74;

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export default function ScrollManager() {
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    let raf = 0;

    const stop = () => cancelAnimationFrame(raf);

    function scrollToY(target: number) {
      stop();
      const start = window.scrollY;
      const distance = target - start;

      if (reduce || Math.abs(distance) < 2) {
        window.scrollTo(0, target);
        return;
      }

      const t0 = performance.now();
      const step = (now: number) => {
        const p = Math.min((now - t0) / DURATION, 1);
        window.scrollTo(0, start + distance * easeInOutCubic(p));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }

    function onClick(e: MouseEvent) {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      )
        return;

      const anchor = (e.target as Element | null)?.closest?.(
        "a[href^='#']"
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      const hash = anchor.getAttribute("href") ?? "";
      if (hash.length < 2) return;

      const el = document.getElementById(hash.slice(1));
      if (!el) return;

      e.preventDefault();
      const y =
        hash === "#top"
          ? 0
          : el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET + 1;

      scrollToY(y);
      history.pushState(null, "", hash);
    }

    document.addEventListener("click", onClick);
    window.addEventListener("wheel", stop, { passive: true });
    window.addEventListener("touchstart", stop, { passive: true });

    return () => {
      stop();
      document.removeEventListener("click", onClick);
      window.removeEventListener("wheel", stop);
      window.removeEventListener("touchstart", stop);
    };
  }, []);

  return null;
}
