"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  const featured =
    projects.find((p) => p.featured) ?? projects[0];

  const rest = projects.filter((p) => p !== featured);

  const [mouse, setMouse] = useState({
    x: 50,
    y: 50,
  });

  const [scrollDirection, setScrollDirection] = useState<
    "up" | "down"
  >("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      } else if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <section
      id="work"
      className="relative overflow-hidden border-b bg-black text-white"
      style={{
        borderColor: "rgba(125, 211, 252, 0.12)",
      }}
    >
      {/* =====================================================
          ANIMATED BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Mouse following glow */}
        <motion.div
          animate={{
            left: `${mouse.x}%`,
            top: `${mouse.y}%`,
          }}
          transition={{
            type: "spring",
            stiffness: 35,
            damping: 25,
            mass: 0.8,
          }}
          className="absolute h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(56,189,248,0.7), transparent 65%)",
          }}
        />

        {/* Ambient glows */}
        <div className="absolute left-[15%] top-[20%] h-72 w-72 rounded-full bg-blue-500/5 blur-[120px]" />

        <div className="absolute right-[15%] top-[45%] h-80 w-80 rounded-full bg-purple-500/5 blur-[130px]" />

        <div className="absolute bottom-[10%] left-[40%] h-72 w-72 rounded-full bg-cyan-400/5 blur-[120px]" />

        {/* =====================================================
            SKY BLUE LINE
        ====================================================== */}

        <motion.div
          className="absolute left-[-30%] top-[12%] h-px w-[160%]"
          style={{
            background:
              "linear-gradient(90deg, transparent, #38bdf8, transparent)",
            boxShadow: "0 0 12px #38bdf8",
          }}
          animate={{
            x: ["-10%", "20%", "-10%"],
            opacity: [0.15, 0.8, 0.15],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* =====================================================
            PURPLE LINE
        ====================================================== */}

        <motion.div
          className="absolute left-[-30%] top-[22%] h-px w-[160%]"
          style={{
            background:
              "linear-gradient(90deg, transparent, #a855f7, transparent)",
            boxShadow: "0 0 12px #a855f7",
          }}
          animate={{
            x: ["20%", "-15%", "20%"],
            opacity: [0.1, 0.65, 0.1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* =====================================================
            CYAN LINE
        ====================================================== */}

        <motion.div
          className="absolute left-[-30%] top-[34%] h-px w-[160%]"
          style={{
            background:
              "linear-gradient(90deg, transparent, #22d3ee, transparent)",
            boxShadow: "0 0 12px #22d3ee",
          }}
          animate={{
            x: ["-15%", "18%", "-15%"],
            opacity: [0.1, 0.7, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* =====================================================
            GREEN LINE
        ====================================================== */}

        <motion.div
          className="absolute left-[-30%] top-[46%] h-px w-[160%]"
          style={{
            background:
              "linear-gradient(90deg, transparent, #34d399, transparent)",
            boxShadow: "0 0 12px #34d399",
          }}
          animate={{
            x: ["15%", "-20%", "15%"],
            opacity: [0.08, 0.6, 0.08],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* =====================================================
            PINK LINE
        ====================================================== */}

        <motion.div
          className="absolute left-[-30%] top-[58%] h-px w-[160%]"
          style={{
            background:
              "linear-gradient(90deg, transparent, #f472b6, transparent)",
            boxShadow: "0 0 12px #f472b6",
          }}
          animate={{
            x: ["-20%", "15%", "-20%"],
            opacity: [0.08, 0.55, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* =====================================================
            ORANGE LINE
        ====================================================== */}

        <motion.div
          className="absolute left-[-30%] top-[70%] h-px w-[160%]"
          style={{
            background:
              "linear-gradient(90deg, transparent, #f59e0b, transparent)",
            boxShadow: "0 0 12px #f59e0b",
          }}
          animate={{
            x: ["20%", "-18%", "20%"],
            opacity: [0.08, 0.5, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* =====================================================
            INDIGO LINE
        ====================================================== */}

        <motion.div
          className="absolute left-[-30%] top-[82%] h-px w-[160%]"
          style={{
            background:
              "linear-gradient(90deg, transparent, #818cf8, transparent)",
            boxShadow: "0 0 12px #818cf8",
          }}
          animate={{
            x: ["-18%", "22%", "-18%"],
            opacity: [0.1, 0.65, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* =====================================================
            DIAGONAL BLUE LINE
        ====================================================== */}

        <motion.div
          className="absolute left-[-20%] top-[28%] h-px w-[140%]"
          style={{
            transform: "rotate(-15deg)",
            background:
              "linear-gradient(90deg, transparent, rgba(56,189,248,.45), transparent)",
          }}
          animate={{
            x:
              scrollDirection === "up"
                ? ["10%", "-10%", "10%"]
                : ["-5%", "15%", "-5%"],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* =====================================================
            DIAGONAL PURPLE LINE
        ====================================================== */}

        <motion.div
          className="absolute left-[-20%] top-[63%] h-px w-[140%]"
          style={{
            transform: "rotate(12deg)",
            background:
              "linear-gradient(90deg, transparent, rgba(168,85,247,.4), transparent)",
          }}
          animate={{
            x:
              scrollDirection === "up"
                ? ["-10%", "10%", "-10%"]
                : ["15%", "-10%", "15%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* =====================================================
            PARTICLES
        ====================================================== */}

        <motion.div
          className="absolute left-[20%] top-[30%] h-1 w-1 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]"
          animate={{
            y: [-20, 30, -20],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />

        <motion.div
          className="absolute left-[75%] top-[55%] h-1 w-1 rounded-full bg-purple-400 shadow-[0_0_12px_#a855f7]"
          animate={{
            y: [20, -30, 20],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        />

        <motion.div
          className="absolute left-[45%] top-[75%] h-1 w-1 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]"
          animate={{
            x: [-20, 25, -20],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Fade */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28 lg:px-10">
        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-sky-400" />

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-sky-300">
              Selected Work
            </span>
          </div>

          <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              A few things
              <span className="block text-sky-300">
                I&apos;ve built.
              </span>
            </h2>

            <p className="max-w-sm text-sm leading-7 text-zinc-500">
              A collection of digital products, interfaces and
              full-stack experiences crafted with modern
              technologies.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            FEATURED PROJECT
        ====================================================== */}

        <motion.a
          href={featured.link || "#"}
          target={
            featured.link ? "_blank" : undefined
          }
          rel={
            featured.link
              ? "noopener noreferrer"
              : undefined
          }
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="group relative mt-16 block overflow-hidden rounded-[28px]"
        >
          {/* Animated border */}

          <div className="absolute inset-0 rounded-[28px] bg-gradient-to-r from-sky-500/40 via-purple-500/10 to-cyan-400/30 opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative m-[1px] grid overflow-hidden rounded-[27px] bg-[#080808] md:grid-cols-[1.05fr_0.95fr]">
            {/* Featured visual */}

            <div className="relative min-h-[350px] overflow-hidden border-b border-white/5 md:min-h-[460px] md:border-b-0 md:border-r">
              {/* Glow */}

              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-[100px] transition-all duration-700 group-hover:bg-sky-400/20" />

              {/* Blue moving line */}

              <motion.div
                animate={{
                  x: ["-20%", "20%", "-20%"],
                  rotate: [-8, -4, -8],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-[-20%] top-1/2 h-px w-[140%] bg-gradient-to-r from-transparent via-sky-400/60 to-transparent"
              />

              {/* Purple moving line */}

              <motion.div
                animate={{
                  x: ["20%", "-20%", "20%"],
                  rotate: [8, 4, 8],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-[-20%] top-[58%] h-px w-[140%] bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"
              />

              {/* Big letter */}

              <motion.div
                initial={{
                  scale: 0.8,
                  opacity: 0,
                }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="select-none text-[12rem] font-bold leading-none text-white/[0.035] transition-all duration-700 group-hover:text-sky-300/[0.08] sm:text-[15rem]">
                  {featured.title.charAt(0)}
                </span>
              </motion.div>

              {/* Featured badge */}

              <div className="absolute left-7 top-7 flex items-center gap-2 rounded-full border border-sky-400/20 bg-black/60 px-4 py-2 backdrop-blur-xl">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-400" />

                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-sky-300">
                  Featured Project
                </span>
              </div>

              {/* Bottom info */}

              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                    Case Study
                  </p>

                  <p className="mt-1 text-sm text-zinc-400">
                    Full Stack Experience
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 group-hover:border-sky-400/40 group-hover:bg-sky-400/10">
                  <ArrowUpRight
                    size={20}
                    className="text-sky-300 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </div>

            {/* Featured content */}

            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-sky-400/70" />

                <span className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                  Featured
                </span>
              </div>

              <h3 className="max-w-xl text-3xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-sky-200 sm:text-4xl lg:text-5xl">
                {featured.title}
              </h3>

              <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
                {featured.description}
              </p>

              {/* Tags */}

              <div className="mt-8 flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.025] px-3.5 py-2 text-[11px] text-zinc-400 transition-all duration-300 group-hover:border-sky-400/20 group-hover:text-sky-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}

              <div className="mt-10 flex items-center gap-3 text-sm font-medium text-sky-300">
                <span>
                  Explore project
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-sky-400/20 bg-sky-400/5 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-sky-400/10">
                  <ExternalLink size={14} />
                </span>
              </div>
            </div>
          </div>
        </motion.a>

        {/* =====================================================
            OTHER PROJECTS
        ====================================================== */}

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link || "#"}
              target={
                project.link
                  ? "_blank"
                  : undefined
              }
              rel={
                project.link
                  ? "noopener noreferrer"
                  : undefined
              }
              initial={{
                opacity: 0,
                y: 45,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-2xl"
            >
              {/* Hover border */}

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-400/30 via-purple-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative m-[1px] flex h-full min-h-[300px] flex-col rounded-[15px] border border-white/[0.08] bg-[#080808] p-7 transition-all duration-500 group-hover:border-sky-400/20 group-hover:bg-[#0a0a0a]">
                {/* Top */}

                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] text-sm font-semibold text-sky-300 transition-all duration-500 group-hover:border-sky-400/30 group-hover:bg-sky-400/10">
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-600 transition-all duration-300 group-hover:border-sky-400/30 group-hover:text-sky-300">
                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                </div>

                {/* Title */}

                <h3 className="mt-8 text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-sky-200">
                  {project.title}
                </h3>

                {/* Description */}

                <p className="mt-4 text-sm leading-7 text-zinc-500">
                  {project.description}
                </p>

                {/* Tags */}

                <div className="mt-auto flex flex-wrap gap-2 pt-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.08] px-3 py-1.5 text-[10px] uppercase tracking-wider text-zinc-600 transition-colors duration-300 group-hover:border-sky-400/15 group-hover:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom animated line */}

                <motion.div
                  className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent"
                  initial={{
                    width: "0%",
                  }}
                  whileHover={{
                    width: "100%",
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom line */}

        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="mt-20 h-px origin-left bg-gradient-to-r from-sky-400/40 via-purple-400/20 to-transparent"
        />
      </div>
    </section>
  );
}