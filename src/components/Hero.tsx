"use client";

import React, { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Code2,
  Database,
  Globe2,
  Layers3,
  Monitor,
  Server,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";

import { profile, stats } from "@/lib/data";

// ======================================================
// Types
// ======================================================

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

// ======================================================
// Reveal Animation
// ======================================================

function Reveal({
  children,
  delay = 0,
  className = "",
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ======================================================
// Tech Stack
// ======================================================

const stack = [
  "JavaScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "HTML5",
  "CSS3",
];

// ======================================================
// Floating Tech Nodes
// ======================================================

const techNodes = [
  {
    name: "React",
    icon: Code2,
    className: "left-[2%] top-[18%]",
  },
  {
    name: "Next.js",
    icon: Layers3,
    className: "right-[0%] top-[20%]",
  },
  {
    name: "Node",
    icon: Server,
    className: "left-[7%] bottom-[22%]",
  },
  {
    name: "MongoDB",
    icon: Database,
    className: "right-[5%] bottom-[19%]",
  },
];

// ======================================================
// Info Item
// ======================================================

function InfoItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
      className="group flex items-center gap-3"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-slate-400 transition-colors group-hover:border-cyan-300/20 group-hover:text-cyan-200">
        <Icon size={15} />
      </div>

      <div>
        <p className="text-[9px] uppercase tracking-[0.18em] text-slate-500">
          {label}
        </p>

        <p className="mt-0.5 text-xs font-medium text-slate-200">
          {value}
        </p>
      </div>
    </motion.div>
  );
}

// ======================================================
// Identity Card
// ======================================================

function IdentityCard() {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative w-full max-w-[390px] overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#071018]/80 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
    >
      {/* Card glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(103,232,249,0.12),transparent_35%),radial-gradient(circle_at_100%_100%,rgba(59,130,246,0.08),transparent_35%)]" />

      {/* Top */}
      <div className="relative flex items-center justify-between border-b border-white/[0.07] pb-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-200">
            <Code2 size={16} />
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
              developer.profile
            </p>

            <p className="text-xs text-slate-300">
              Active session
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 rounded-full border border-emerald-300/10 bg-emerald-300/5 px-2.5 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.9)]" />

          <span className="text-[9px] font-semibold tracking-[0.16em] text-emerald-200">
            ONLINE
          </span>
        </div>
      </div>

      {/* Profile */}
      <div className="relative mt-5 flex items-center gap-4">
        <div className="relative">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-200/10 bg-gradient-to-br from-cyan-300/15 to-blue-500/10">
            <Terminal
              size={27}
              className="text-cyan-200"
            />
          </div>

          <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border border-[#071018] bg-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-[#071018]" />
          </span>
        </div>

        <div>
          <h3 className="text-lg font-semibold tracking-tight text-white">
            {profile.name}
          </h3>

          <p className="mt-1 text-xs text-slate-400">
            {profile.role}
          </p>
        </div>
      </div>

      {/* Info */}
      <div className="relative mt-6 grid grid-cols-2 gap-x-5 gap-y-5">
        <InfoItem
          icon={Monitor}
          label="Frontend"
          value="React / Next"
        />

        <InfoItem
          icon={Server}
          label="Backend"
          value="Node / Express"
        />

        <InfoItem
          icon={Database}
          label="Database"
          value="MongoDB"
        />

        <InfoItem
          icon={Globe2}
          label="Location"
          value="Lahore, PK"
        />
      </div>

      {/* Bottom status */}
      <div className="relative mt-6 flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.025] px-4 py-3">
        <div>
          <p className="text-[9px] uppercase tracking-[0.18em] text-slate-500">
            Status
          </p>

          <p className="mt-1 text-xs font-medium text-slate-200">
            Ready to build
          </p>
        </div>

        <span className="font-mono text-[10px] text-cyan-200/60">
          v2.0
        </span>
      </div>
    </motion.div>
  );
}

// ======================================================
// Hero
// ======================================================

export default function Hero() {
  // ====================================================
  // Mouse Parallax
  // ====================================================

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 70,
    damping: 20,
  });

  const springY = useSpring(mouseY, {
    stiffness: 70,
    damping: 20,
  });

  const orbX = useTransform(
    springX,
    [-1, 1],
    [-22, 22]
  );

  const orbY = useTransform(
    springY,
    [-1, 1],
    [-22, 22]
  );

  // ====================================================
  // Scroll
  // ====================================================

  const [scrollProgress, setScrollProgress] =
    useState(0);

  const [scrollingUp, setScrollingUp] =
    useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    let timeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hero scroll progress
      const heroHeight = window.innerHeight;

      const progress = Math.min(
        Math.max(currentScrollY / heroHeight, 0),
        1
      );

      setScrollProgress(progress);

      // Detect upward scrolling
      if (
        currentScrollY < lastScrollY &&
        currentScrollY > 20
      ) {
        setScrollingUp(true);

        clearTimeout(timeout);

        timeout = setTimeout(() => {
          setScrollingUp(false);
        }, 900);
      } else if (currentScrollY > lastScrollY) {
        setScrollingUp(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      clearTimeout(timeout);
    };
  }, []);

  // ====================================================
  // Mouse
  // ====================================================

  const handleMouseMove = (
    e: React.MouseEvent<HTMLElement>
  ) => {
    const rect =
      e.currentTarget.getBoundingClientRect();

    const x =
      (e.clientX - rect.left) / rect.width;

    const y =
      (e.clientY - rect.top) / rect.height;

    mouseX.set(x * 2 - 1);
    mouseY.set(y * 2 - 1);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // ====================================================
  // Hero Scroll Animation
  // ====================================================

  const heroScale =
    1 - scrollProgress * 0.055;

  const heroOpacity =
    1 - scrollProgress * 0.5;

  const contentY =
    scrollProgress * -90;

  const backgroundScale =
    1 + scrollProgress * 0.09;

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen overflow-hidden bg-[#02070b] text-white"
    >
      {/* ==================================================
          HERO WRAPPER
      ================================================== */}

      <motion.div
        style={{
          scale: heroScale,
          opacity: heroOpacity,
        }}
        className="relative min-h-screen origin-top"
      >
        {/* ==================================================
            BACKGROUND VIDEO
        ================================================== */}

        <motion.div
          style={{
            scale: backgroundScale,
            x: orbX,
            y: orbY,
          }}
          className="absolute inset-0"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source
              src="/hero-video.mp4"
              type="video/mp4"
            />
          </video>

          {/* Main darkness */}
          <div className="absolute inset-0 bg-black/65" />

          {/* Left gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#02070b] via-[#02070b]/85 to-[#02070b]/35" />

          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-[#02070b] to-transparent" />

          {/* Top fade */}
          <div className="absolute inset-x-0 top-0 h-[18%] bg-gradient-to-b from-[#02070b]/70 to-transparent" />

          {/* Center glow */}
          <div className="absolute left-[55%] top-[42%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/[0.035] blur-[130px]" />
        </motion.div>

        {/* ==================================================
            MOVING TOP LIGHT
        ================================================== */}

        <motion.div
          animate={{
            x: ["-10%", "15%", "-5%"],
            opacity: [0.2, 0.45, 0.2],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute left-0 top-[-15%] z-[1] h-[35%] w-[70%] rounded-full bg-cyan-200/[0.035] blur-[100px]"
        />

        {/* ==================================================
            SCROLL-UP FOG
        ================================================== */}

        <div className="pointer-events-none absolute inset-0 z-[4] overflow-hidden">
          {/* Large fog */}
          <motion.div
            initial={false}
            animate={{
              opacity: scrollingUp ? 0.75 : 0,
              x: scrollingUp
                ? ["-12%", "8%", "-3%"]
                : "-12%",
              y: scrollingUp
                ? [90, 20, -70]
                : 100,
              scale: scrollingUp
                ? [0.9, 1.12, 1.25]
                : 0.85,
            }}
            transition={{
              duration: 3.8,
              ease: "easeInOut",
            }}
            className="absolute -bottom-[15%] left-[-8%] h-[50%] w-[85%] rounded-[50%] bg-gradient-to-r from-white/[0.02] via-slate-200/[0.08] to-transparent blur-[90px]"
          />

          {/* Fog cloud */}
          <motion.div
            initial={false}
            animate={{
              opacity: scrollingUp ? 0.65 : 0,
              x: scrollingUp
                ? [0, 90, 170]
                : 0,
              y: scrollingUp
                ? [110, 30, -100]
                : 100,
              scale: scrollingUp
                ? [0.7, 1, 1.35]
                : 0.7,
            }}
            transition={{
              duration: 3.1,
              ease: "easeOut",
            }}
            className="absolute bottom-[2%] left-[25%] h-72 w-72 rounded-full bg-white/[0.055] blur-[85px]"
          />

          {/* Cyan mist */}
          <motion.div
            initial={false}
            animate={{
              opacity: scrollingUp ? 0.6 : 0,
              x: scrollingUp
                ? [120, 20, -80]
                : 120,
              y: scrollingUp
                ? [80, 0, -110]
                : 80,
              scale: scrollingUp
                ? [0.75, 1.1, 1.25]
                : 0.75,
            }}
            transition={{
              duration: 3.5,
              delay: 0.12,
              ease: "easeOut",
            }}
            className="absolute bottom-[8%] right-[12%] h-80 w-80 rounded-full bg-cyan-100/[0.045] blur-[105px]"
          />

          {/* Wide drifting fog */}
          <motion.div
            initial={false}
            animate={{
              opacity: scrollingUp
                ? [0, 0.55, 0]
                : 0,
              x: scrollingUp
                ? ["-20%", "10%", "30%"]
                : "-20%",
              y: scrollingUp
                ? [70, -20, -120]
                : 70,
              rotate: scrollingUp
                ? [0, 5, -2]
                : 0,
            }}
            transition={{
              duration: 4.2,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 left-0 h-[30%] w-[130%] rounded-[50%] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent blur-[55px]"
          />

          {/* Small floating fog */}
          <motion.div
            initial={false}
            animate={{
              opacity: scrollingUp
                ? [0, 0.5, 0]
                : 0,
              x: scrollingUp
                ? [0, -80, -160]
                : 0,
              y: scrollingUp
                ? [80, 0, -130]
                : 80,
              scale: scrollingUp
                ? [0.7, 1, 1.25]
                : 0.7,
            }}
            transition={{
              duration: 3.4,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="absolute bottom-[10%] right-[30%] h-56 w-56 rounded-full bg-slate-100/[0.045] blur-[75px]"
          />
        </div>

        {/* ==================================================
            PERSPECTIVE GRID
        ================================================== */}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[42%] overflow-hidden opacity-30 [mask-image:linear-gradient(to_top,black,transparent)]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
              `,
              backgroundSize: "70px 70px",
              transform:
                "perspective(500px) rotateX(60deg) scale(1.5)",
              transformOrigin: "bottom center",
            }}
          />
        </div>

        {/* ==================================================
            MAIN CONTENT
        ================================================== */}

        <motion.div
          style={{
            y: contentY,
          }}
          className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-5 pb-20 pt-28 sm:px-8 lg:px-10"
        >
          <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            {/* ==================================================
                LEFT CONTENT
            ================================================== */}

            <div className="max-w-3xl">
              {/* Status */}
              <Reveal delay={0.05}>
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.035] px-3.5 py-2 backdrop-blur-xl">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-60" />

                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                  </span>

                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-300">
                    Open to freelance & full-time work
                  </span>
                </div>
              </Reveal>

              {/* Eyebrow */}
              <Reveal delay={0.12}>
                <div className="mb-5 flex items-center gap-3">
                  <div className="h-px w-10 bg-cyan-300/50" />

                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
                    Full Stack Developer
                  </span>
                </div>
              </Reveal>

              {/* Name */}
              <Reveal delay={0.18}>
                <h1 className="max-w-4xl text-[clamp(3.5rem,8vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.065em] text-white">
                  {profile.name}
                </h1>
              </Reveal>

              {/* Role */}
              <Reveal delay={0.24}>
                <div className="mt-6 flex items-center gap-3">
                  <Sparkles
                    size={17}
                    className="text-cyan-200"
                  />

                  <p className="text-lg font-medium tracking-tight text-slate-300 sm:text-xl">
                    {profile.role}
                  </p>
                </div>
              </Reveal>

              {/* Tagline */}
              <Reveal delay={0.3}>
                <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                  {profile.tagline}
                </p>
              </Reveal>

              {/* CTA */}
              <Reveal delay={0.38}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <Link
                    href="#work"
                    className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-100 hover:shadow-[0_15px_45px_rgba(103,232,249,0.18)]"
                  >
                    Explore my work

                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>

                  <Link
                    href="#contact"
                    className="group inline-flex items-center gap-3 rounded-full border border-white/[0.1] bg-white/[0.035] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200/20 hover:bg-white/[0.07]"
                  >
                    Let's talk

                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </Reveal>

              {/* Stats */}
              <Reveal delay={0.46}>
                <div className="mt-12 grid max-w-2xl grid-cols-3 divide-x divide-white/[0.08] border-y border-white/[0.07] py-5">
                  {stats
                    .slice(0, 3)
                    .map((item, index) => (
                      <div
                        key={index}
                        className="px-4 first:pl-0 last:pr-0"
                      >
                        <p className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                          {item.value}
                        </p>

                        <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-slate-500">
                          {item.label}
                        </p>
                      </div>
                    ))}
                </div>
              </Reveal>
            </div>

            {/* ==================================================
                RIGHT CONTENT
            ================================================== */}

            <div className="relative mx-auto flex min-h-[580px] w-full max-w-[560px] items-center justify-center lg:min-h-[650px]">
              {/* Outer orbit */}
              <motion.div
                style={{
                  x: orbX,
                  y: orbY,
                }}
                className="absolute h-[470px] w-[470px] rounded-full border border-white/[0.055]"
              />

              {/* Middle orbit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 45,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[390px] w-[390px] rounded-full border border-dashed border-cyan-200/[0.08]"
              />

              {/* Inner orbit */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[300px] w-[300px] rounded-full border border-white/[0.055]"
              />

              {/* Center glow */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.25, 0.4, 0.25],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute h-64 w-64 rounded-full bg-cyan-300/[0.08] blur-[90px]"
              />

              {/* Identity Card */}
              <motion.div
                style={{
                  x: useTransform(
                    springX,
                    [-1, 1],
                    [-12, 12]
                  ),
                  y: useTransform(
                    springY,
                    [-1, 1],
                    [-12, 12]
                  ),
                }}
                className="relative z-20 w-full max-w-[390px]"
              >
                <IdentityCard />
              </motion.div>

              {/* Floating Nodes */}
              {techNodes.map((node, index) => {
                const Icon = node.icon;

                return (
                  <motion.div
                    key={node.name}
                    animate={{
                      y: [0, -12, 0],
                      rotate: [0, 2, 0],
                    }}
                    transition={{
                      duration: 4 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                    className={`absolute ${node.className} z-30`}
                  >
                    <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#071018]/75 px-3 py-2 shadow-xl backdrop-blur-xl">
                      <Icon
                        size={13}
                        className="text-cyan-200"
                      />

                      <span className="text-[10px] font-medium text-slate-300">
                        {node.name}
                      </span>
                    </div>
                  </motion.div>
                );
              })}

              {/* Coordinates */}
              <div className="absolute right-0 top-[8%] hidden font-mono text-[9px] tracking-[0.15em] text-slate-600 sm:block">
                31.5204° N
              </div>

              <div className="absolute bottom-[10%] left-0 hidden font-mono text-[9px] tracking-[0.15em] text-slate-600 sm:block">
                74.3587° E
              </div>

              {/* Symbols */}
              <div className="absolute left-[12%] top-[13%] text-cyan-200/20">
                <Braces size={25} />
              </div>

              <div className="absolute bottom-[14%] right-[12%] text-cyan-200/20">
                <Zap size={22} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* ==================================================
            STACK STRIP
        ================================================== */}

        <motion.div
          style={{
            opacity: 1 - scrollProgress * 0.8,
          }}
          className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/[0.06] bg-black/20 backdrop-blur-md"
        >
          <div className="mx-auto flex max-w-7xl items-center gap-5 overflow-hidden px-5 py-4 sm:px-8 lg:px-10">
            <div className="flex shrink-0 items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-600">
              <Layers3 size={13} />
              Stack
            </div>

            <div className="h-4 w-px bg-white/[0.08]" />

            <div className="flex min-w-max items-center gap-6">
              {stack.map((item) => (
                <span
                  key={item}
                  className="text-[10px] font-medium text-slate-500 transition-colors hover:text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ==================================================
            SCROLL INDICATOR
        ================================================== */}

        <motion.div
          animate={{
            opacity:
              scrollProgress > 0.15 ? 0 : 1,
            y:
              scrollProgress > 0.15 ? 10 : 0,
          }}
          className="absolute bottom-20 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
        >
          <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-slate-500">
            Explore
          </span>

          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{
              duration: 1.7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025]"
          >
            <ArrowDown
              size={14}
              className="text-slate-400"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ==================================================
          BOTTOM EDGE GLOW
      ================================================== */}

      <motion.div
        style={{
          opacity: scrollProgress * 0.7,
        }}
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-40 h-24 bg-gradient-to-t from-cyan-300/[0.025] to-transparent"
      />
    </section>
  );
}