"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Code2, Terminal } from "lucide-react";
import { profile, stats } from "@/lib/data";

const stack = [
  "JavaScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "HTML5",
  "CSS3",
];

const lineColors = [
  "#38bdf8",
  "#22d3ee",
  "#60a5fa",
  "#818cf8",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden border-b bg-[#03070b] text-white"
      style={{ borderColor: "rgba(56,189,248,0.14)" }}
    >
      {/* ================= BACKGROUND VIDEO ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-[0.20]"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#03070b_5%,rgba(3,7,11,0.82)_45%,rgba(3,7,11,0.72)_100%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(14,165,233,0.14),transparent_35%)]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(56,189,248,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.16) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* ================= SKY BLUE ANIMATED LINES ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {lineColors.map((color, index) => (
          <motion.div
            key={color}
            className="absolute h-px w-[55vw]"
            style={{
              background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
              top: `${18 + index * 19}%`,
              left: "-60%",
              boxShadow: `0 0 14px ${color}`,
              opacity: 0.75,
            }}
            animate={{
              x: ["0vw", "170vw"],
            }}
            transition={{
              duration: 7 + index * 1.4,
              repeat: Infinity,
              ease: "linear",
              delay: index * 1.2,
            }}
          />
        ))}

        {/* Diagonal light beam */}
        <motion.div
          className="absolute -left-[20%] top-[20%] h-[1px] w-[150%] rotate-[-18deg]"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(56,189,248,0.8), transparent)",
            boxShadow: "0 0 25px rgba(56,189,248,0.8)",
          }}
          animate={{
            x: ["-20%", "35%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -left-[20%] top-[70%] h-[1px] w-[150%] rotate-[14deg]"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(34,211,238,0.65), transparent)",
            boxShadow: "0 0 22px rgba(34,211,238,0.7)",
          }}
          animate={{
            x: ["-20%", "40%"],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* ================= GLOW ORBS ================= */}
      <motion.div
        className="pointer-events-none absolute right-[-100px] top-[12%] h-[500px] w-[500px] rounded-full blur-[120px]"
        style={{ background: "rgba(14,165,233,0.13)" }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute bottom-[-180px] left-[-100px] h-[450px] w-[450px] rounded-full blur-[120px]"
        style={{ background: "rgba(37,99,235,0.10)" }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 mx-auto grid min-h-screen max-w-[1600px] items-center gap-14 px-6 pb-24 pt-32 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-14 xl:px-20">
        {/* ================= LEFT ================= */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-7 flex w-fit items-center gap-3 rounded-full border border-sky-400/20 bg-sky-400/[0.06] px-4 py-2 backdrop-blur-xl"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_12px_#38bdf8]" />
            </span>

            <span className="text-xs font-medium tracking-wide text-sky-200">
              Open to freelance &amp; full-time work
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-[5.2rem]"
          >
            {profile.name}
          </motion.h1>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-5 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-sky-400 shadow-[0_0_10px_#38bdf8]" />

            <p className="text-xl font-medium text-sky-400 sm:text-2xl">
              {profile.role}
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#work"
              className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-sky-400 px-7 py-3.5 text-sm font-semibold text-[#031018] shadow-[0_0_30px_rgba(56,189,248,0.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-sky-300 hover:shadow-[0_0_40px_rgba(56,189,248,0.38)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-full" />
              <span className="relative">View projects</span>
              <ArrowUpRight
                size={17}
                className="relative transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-sky-400/[0.06]"
            >
              Get in touch
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="mt-14 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 border-t border-white/10 pt-7 sm:grid-cols-4"
          >
            {stats.map((s, index) => (
              <motion.div
                key={s.label}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <dt className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                  {s.label}
                </dt>

                <dd className="mt-2 text-sm font-medium text-slate-200">
                  {s.value}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </motion.div>

        {/* ================= RIGHT TERMINAL ================= */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          {/* Outer glow */}
          <div className="absolute h-[330px] w-[330px] rounded-full bg-sky-500/10 blur-[100px]" />

          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full max-w-[620px]"
          >
            <TerminalCard />
          </motion.div>
        </motion.div>
      </div>

      {/* ================= STACK BAR ================= */}
      <div className="relative z-10 border-t border-white/[0.08] bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-x-8 gap-y-4 px-6 py-6 sm:px-10 lg:px-14 xl:px-20">
          <div className="flex items-center gap-2">
            <Code2 size={15} className="text-sky-400" />
            <span className="text-xs uppercase tracking-[0.18em] text-slate-500">
              Core stack
            </span>
          </div>

          {stack.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{
                y: -2,
                color: "#38bdf8",
              }}
              className="cursor-default font-mono text-sm text-slate-400 transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#work"
        animate={{ y: [0, 7, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[105px] left-1/2 z-20 hidden -translate-x-1/2 items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-slate-500 lg:flex"
      >
        Scroll
        <ArrowDown size={13} className="text-sky-400" />
      </motion.a>
    </section>
  );
}

/* =========================================================
   TERMINAL CARD
========================================================= */

function TerminalCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-sky-400/15 bg-[#071018]/80 shadow-[0_0_80px_rgba(14,165,233,0.08)] backdrop-blur-2xl">
      {/* Top animated blue line */}
      <motion.div
        className="absolute left-0 top-0 h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, #38bdf8, #22d3ee, transparent)",
          boxShadow: "0 0 18px #38bdf8",
        }}
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />

          <span className="ml-3 font-mono text-xs text-slate-500">
            whoami.ts
          </span>
        </div>

        <Terminal size={15} className="text-sky-400" />
      </div>

      {/* Code */}
      <pre className="overflow-x-auto px-6 py-7 font-mono text-[12px] leading-7 sm:px-8 sm:text-[13px]">
        <code>
          <span className="text-sky-400">const</span>{" "}
          <span className="text-white">developer</span>{" "}
          <span className="text-slate-500">=</span> {"{"}
          {"\n"}
          {"  "}name:{" "}
          <span className="text-cyan-300">
            &quot;Muneeb Ahmed&quot;
          </span>
          ,
          {"\n"}
          {"  "}role:{" "}
          <span className="text-cyan-300">
            &quot;Full Stack Developer&quot;
          </span>
          ,
          {"\n"}
          {"  "}stack: [
          <span className="text-cyan-300">&quot;React&quot;</span>,{" "}
          <span className="text-cyan-300">&quot;Next.js&quot;</span>,
          {"\n"}
          {"         "}
          <span className="text-cyan-300">&quot;Node&quot;</span>,{" "}
          <span className="text-cyan-300">&quot;Express&quot;</span>],
          {"\n"}
          {"  "}location:{" "}
          <span className="text-cyan-300">
            &quot;Lahore, PK&quot;
          </span>
          ,
          {"\n"}
          {"  "}available:{" "}
          <span className="text-sky-400">true</span>,
          {"\n"}
          {"}"};
        </code>
      </pre>

      {/* Bottom status */}
      <div className="flex items-center justify-between border-t border-white/[0.08] px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_10px_#38bdf8]" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
            system.online
          </span>
        </div>

        <span className="font-mono text-[10px] text-sky-400/70">
          v2.0.26
        </span>
      </div>
    </div>
  );
}