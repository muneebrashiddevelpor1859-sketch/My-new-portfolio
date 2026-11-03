"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/* =========================================================
   ONE timing for the whole site — every reveal uses these,
   so scroll animations always feel the same.
   ========================================================= */
export const EASE = [0.22, 1, 0.36, 1] as const;
export const REVEAL_DURATION = 0.7;
export const STAGGER = 0.08;

const u = (id: string, w = 1800, q = 70) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const images = {
  workspace: u("1498050108023-c5249f4df085"),
  code: u("1461749280684-dccba630e2f6"),
  terminal: u("1555066931-4365d14bab8c"),
  laptop: u("1517694712202-14dd9538aa97"),
  circuit: u("1518770660439-4636190af475"),
  desk: u("1531297484001-80022131f5a1"),
  team: u("1519389950473-47ba0277781c"),
  dev: u("1487058792275-0ad4aaf24ca7"),
};

/* Drop your own mp4 files into /public/videos with these names.
   If a file is missing, the image behind it is shown instead. */
export const videos = {
  code: "/videos/bg-code.mp4",
  network: "/videos/bg-network.mp4",
};

export const thumbs = [
  images.code,
  images.terminal,
  images.laptop,
  images.dev,
  images.circuit,
  images.desk,
  images.team,
  images.workspace,
];

export function hostOf(link: string) {
  try {
    return new URL(link).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

/* ---------- Reveal: the single scroll-in animation ---------- */
export type Direction = "left" | "right" | "up";

export const SLIDE_DISTANCE = 70;

/* first item slides in from the left, last from the right, middle rises */
export function dirFor(index: number, total: number): Direction {
  if (total <= 1) return "up";
  if (index === 0) return "left";
  if (index === total - 1) return "right";
  return "up";
}

export function Reveal({
  children,
  index = 0,
  direction = "up",
  className,
}: {
  children: ReactNode;
  index?: number;
  direction?: Direction;
  className?: string;
}) {
  const from =
    direction === "left"
      ? { opacity: 0, x: -SLIDE_DISTANCE, y: 0 }
      : direction === "right"
        ? { opacity: 0, x: SLIDE_DISTANCE, y: 0 }
        : { opacity: 0, x: 0, y: 18 };

  return (
    <motion.div
      initial={from}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: REVEAL_DURATION,
        ease: EASE,
        delay: index * STAGGER,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Section: same padding, container, bg treatment ---------- */
export function Section({
  id,
  image,
  video,
  dark = false,
  children,
}: {
  id: string;
  image?: string;
  video?: string;
  dark?: boolean;
  children: ReactNode;
}) {
  const overlay = dark
    ? "linear-gradient(180deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.66) 45%, rgba(0,0,0,0.94) 100%)"
    : "linear-gradient(100deg, rgba(246,246,243,0.97) 0%, rgba(246,246,243,0.88) 55%, rgba(246,246,243,0.72) 100%)";

  return (
    <section id={id} className="section border-b border-line">
      {image ? (
        <>
          {/* fixed background image */}
          <div
            aria-hidden
            className="bg-fixed-img absolute inset-0 -z-30"
            style={{
              backgroundColor: dark ? "#000" : "#f6f6f3",
              backgroundImage: `url(${image})`,
            }}
          />

          {/* optional background video (desktop only) */}
          {video && (
            <video
              aria-hidden
              className="bg-video absolute inset-0 -z-20 hidden h-full w-full object-cover md:block"
              src={video}
              poster={image}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          )}

          {/* linear overlay (black on dark sections) */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{ background: overlay }}
          />

          {/* soft fade into neighbours on light sections only */}
          {!dark && (
            <div
              aria-hidden
              className="absolute inset-0 -z-10"
              style={{
                background:
                  "linear-gradient(180deg, #f6f6f3 0%, rgba(246,246,243,0) 16%, rgba(246,246,243,0) 84%, #f6f6f3 100%)",
              }}
            />
          )}
        </>
      ) : (
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{ background: "linear-gradient(180deg, #ffffff 0%, #f6f6f3 100%)" }}
        />
      )}
      <div className="container-x">{children}</div>
    </section>
  );
}

/* ---------- SectionHeader: identical in every section ---------- */
export function SectionHeader({
  title,
  text,
  dark = false,
}: {
  title: string;
  text: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-10 grid gap-4 md:grid-cols-2 md:items-end lg:mb-12">
      <Reveal direction="left">
        <span className="mb-4 block h-px w-12 bg-gradient-to-r from-gold to-transparent" />
        <h2 className={`font-display text-2xl font-medium leading-[1.15] tracking-[-0.02em] sm:text-[1.9rem] ${dark ? "text-white" : "text-ink"}`}>
          {title}
        </h2>
      </Reveal>
      <Reveal direction="right" index={1} className="md:justify-self-end">
        <p className={`max-w-md text-[13px] leading-6 ${dark ? "text-white/65" : "text-muted"}`}>
          {text}
        </p>
      </Reveal>
    </div>
  );
}
