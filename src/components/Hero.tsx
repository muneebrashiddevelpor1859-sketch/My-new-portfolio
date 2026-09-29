"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowDown,
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

const stack = [
  "JavaScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "HTML5",
  "CSS3",
];

const techNodes = [
  {
    name: "React",
    icon: Code2,
    position: "left-[3%] top-[22%]",
  },
  {
    name: "Next.js",
    icon: Layers3,
    position: "right-[5%] top-[18%]",
  },
  {
    name: "Node",
    icon: Server,
    position: "right-[0%] bottom-[24%]",
  },
  {
    name: "MongoDB",
    icon: Database,
    position: "left-[8%] bottom-[18%]",
  },
];

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 70,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 70,
    damping: 20,
  });

  const orbX = useTransform(smoothX, [-500, 500], [-25, 25]);
  const orbY = useTransform(smoothY, [-400, 400], [-20, 20]);

  const cardX = useTransform(smoothX, [-500, 500], [-10, 10]);
  const cardY = useTransform(smoothY, [-400, 400], [-8, 8]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  return (
    <section
      id="top"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden border-b bg-[#03070b] text-white"
      style={{ borderColor: "rgba(56,189,248,0.12)" }}
    >
      {/* ===================================================== */}
      {/* BACKGROUND VIDEO */}
      {/* ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-[0.16]"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[#03070b]/65" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,rgba(14,165,233,0.16),transparent_30%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,#03070b_0%,rgba(3,7,11,0.82)_42%,rgba(3,7,11,0.52)_100%)]" />
      </div>

      {/* ===================================================== */}
      {/* PERSPECTIVE GRID */}
      {/* ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.20]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56,189,248,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(circle at center, black 15%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 15%, transparent 78%)",
        }}
      />

      {/* ===================================================== */}
      {/* CENTER RADIAL GLOW */}
      {/* ===================================================== */}

      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]"
        style={{
          x: orbX,
          y: orbY,
          background:
            "radial-gradient(circle, rgba(14,165,233,0.13), rgba(37,99,235,0.05) 42%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ===================================================== */}
      {/* TOP LIGHT */}
      {/* ===================================================== */}

      <motion.div
        className="pointer-events-none absolute left-[-20%] top-[12%] h-px w-[55%]"
        style={{
          background:
            "linear-gradient(90deg, transparent, #38bdf8, transparent)",
          boxShadow: "0 0 18px rgba(56,189,248,0.8)",
        }}
        animate={{
          x: ["0%", "260%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* ===================================================== */}
      {/* MAIN */}
      {/* ===================================================== */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] items-center px-6 pb-24 pt-32 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
          {/* ================================================= */}
          {/* LEFT */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-20"
          >
            {/* Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mb-8 flex w-fit items-center gap-3 rounded-full border border-sky-400/20 bg-sky-400/[0.05] px-4 py-2.5 backdrop-blur-xl"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute h-full w-full animate-ping rounded-full bg-sky-400 opacity-50" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_14px_#38bdf8]" />
              </span>

              <span className="text-[11px] font-medium tracking-wide text-sky-200">
                Open to freelance &amp; full-time work
              </span>
            </motion.div>

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-12 bg-sky-400" />

              <span className="text-xs uppercase tracking-[0.28em] text-slate-500">
                Full Stack Developer
              </span>
            </motion.div>

            {/* Heading */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 90, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.3,
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="max-w-4xl font-display text-[3.7rem] font-medium leading-[0.91] tracking-[-0.055em] sm:text-7xl lg:text-[6.4rem] xl:text-[7rem]"
              >
                {profile.name}
              </motion.h1>
            </div>

            {/* Gradient role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-7"
            >
              <p className="text-2xl font-medium tracking-tight sm:text-3xl">
                <span className="bg-gradient-to-r from-sky-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {profile.role}
                </span>
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg"
            >
              {profile.tagline}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a
                href="#work"
                className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-sky-400 px-7 py-3.5 text-sm font-semibold text-[#031018] shadow-[0_0_35px_rgba(56,189,248,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-sky-300 hover:shadow-[0_0_50px_rgba(56,189,248,0.32)]"
              >
                <span className="absolute inset-0 -translate-x-full skew-x-[-15deg] bg-white/30 transition-transform duration-700 group-hover:translate-x-[160%]" />

                <span className="relative">Explore my work</span>

                <ArrowUpRight
                  size={17}
                  className="relative transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#contact"
                className="group flex items-center gap-3 rounded-full border border-white/[0.10] bg-white/[0.025] px-7 py-3.5 text-sm font-medium text-slate-200 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-sky-400/[0.06]"
              >
                Let&apos;s talk

                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-sky-400/30">
                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.7 }}
              className="mt-14 flex flex-wrap gap-3"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4 }}
                  className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3 backdrop-blur-md"
                >
                  <p className="text-[9px] uppercase tracking-[0.18em] text-slate-600">
                    {stat.label}
                  </p>

                  <p className="mt-1.5 text-sm font-medium text-slate-200">
                    {stat.value}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ================================================= */}
          {/* RIGHT VISUAL */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1.1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex min-h-[540px] items-center justify-center lg:min-h-[650px]"
          >
            {/* Orbit system */}
            <motion.div
              className="absolute h-[340px] w-[340px] rounded-full border border-sky-400/[0.10]"
              style={{ x: cardX, y: cardY }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="absolute h-[460px] w-[460px] rounded-full border border-sky-400/[0.055]"
              animate={{ rotate: -360 }}
              transition={{
                duration: 42,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="absolute h-[570px] w-[570px] rounded-full border border-white/[0.025]"
              animate={{ rotate: 360 }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Center glow */}
            <motion.div
              className="absolute h-[330px] w-[330px] rounded-full bg-sky-500/[0.08] blur-[90px]"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Central identity card */}
            <motion.div
              style={{ x: cardX, y: cardY }}
              className="relative z-10 w-full max-w-[430px]"
            >
              <IdentityCard />
            </motion.div>

            {/* Floating tech nodes */}
            {techNodes.map((node, index) => {
              const Icon = node.icon;

              return (
                <motion.div
                  key={node.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, index % 2 === 0 ? -10 : 10, 0],
                  }}
                  transition={{
                    opacity: {
                      delay: 0.8 + index * 0.15,
                      duration: 0.5,
                    },
                    scale: {
                      delay: 0.8 + index * 0.15,
                      duration: 0.5,
                    },
                    y: {
                      delay: 1.2 + index * 0.2,
                      duration: 4 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className={`absolute ${node.position} z-20 hidden sm:block`}
                >
                  <div className="flex items-center gap-2 rounded-full border border-sky-400/15 bg-[#071018]/80 px-3 py-2 shadow-[0_0_25px_rgba(14,165,233,0.06)] backdrop-blur-xl">
                    <Icon
                      size={14}
                      className="text-sky-400"
                      strokeWidth={1.7}
                    />

                    <span className="text-[10px] font-medium text-slate-400">
                      {node.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}

            {/* Decorative coordinate labels */}
            <div className="absolute left-1/2 top-[4%] -translate-x-1/2 font-mono text-[9px] uppercase tracking-[0.25em] text-slate-700">
              BUILD / CREATE / SHIP
            </div>

            <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 font-mono text-[9px] uppercase tracking-[0.25em] text-sky-500/40">
              SYSTEM_READY
            </div>
          </motion.div>
        </div>
      </div>

      {/* ===================================================== */}
      {/* STACK STRIP */}
      {/* ===================================================== */}

      <div className="relative z-20 border-t border-white/[0.07] bg-black/30 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-center gap-x-7 gap-y-3 px-6 py-5 sm:px-10 lg:px-16 xl:px-20">
          <div className="mr-2 flex items-center gap-2">
            <Braces size={14} className="text-sky-400" />

            <span className="text-[9px] uppercase tracking-[0.25em] text-slate-600">
              Tech stack
            </span>
          </div>

          {stack.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.05,
                duration: 0.4,
              }}
              whileHover={{
                y: -2,
                color: "#38bdf8",
              }}
              className="cursor-default font-mono text-xs text-slate-500 transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Scroll */}
      <motion.a
        href="#work"
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[88px] left-1/2 z-30 hidden -translate-x-1/2 items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-slate-600 lg:flex"
      >
        Explore

        <ArrowDown
          size={13}
          className="text-sky-400"
        />
      </motion.a>
    </section>
  );
}

/* ========================================================= */
/* IDENTITY CARD */
/* ========================================================= */

function IdentityCard() {
  return (
    <div className="relative">
      {/* Card glow */}
      <div className="absolute -inset-8 rounded-full bg-sky-500/[0.05] blur-[70px]" />

      <div className="relative overflow-hidden rounded-[34px] border border-white/[0.10] bg-[#071018]/75 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-8">
        {/* Animated top line */}
        <motion.div
          className="absolute left-0 top-0 h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, #38bdf8, #22d3ee, transparent)",
            boxShadow: "0 0 20px #38bdf8",
          }}
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/[0.07]">
              <Terminal
                size={16}
                className="text-sky-400"
              />
            </div>

            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
                Developer.profile
              </p>

              <p className="mt-0.5 text-xs text-slate-400">
                Active session
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-sky-400/15 bg-sky-400/[0.05] px-2.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
            <span className="font-mono text-[9px] text-sky-400">
              ONLINE
            </span>
          </div>
        </div>

        {/* Main identity */}
        <div className="relative mt-10">
          <div className="flex h-24 w-24 items-center justify-center rounded-[28px] border border-sky-400/20 bg-gradient-to-br from-sky-400/[0.13] to-blue-600/[0.04] shadow-[0_0_50px_rgba(14,165,233,0.10)]">
            <Code2
              size={42}
              strokeWidth={1.2}
              className="text-sky-400"
            />
          </div>

          <motion.div
            className="absolute -right-1 top-[-8px] flex h-9 w-9 items-center justify-center rounded-full border border-sky-400/20 bg-[#071018]"
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sparkles
              size={15}
              className="text-cyan-400"
            />
          </motion.div>
        </div>

        <h2 className="mt-7 font-display text-3xl tracking-tight text-white sm:text-4xl">
          {profile.name}
        </h2>

        <p className="mt-2 text-sm text-sky-400">
          {profile.role}
        </p>

        {/* Divider */}
        <div className="my-7 h-px bg-gradient-to-r from-sky-400/30 via-white/[0.06] to-transparent" />

        {/* Mini data */}
        <div className="grid grid-cols-2 gap-3">
          <InfoItem
            icon={<Monitor size={14} />}
            label="Frontend"
            value="React / Next"
          />

          <InfoItem
            icon={<Server size={14} />}
            label="Backend"
            value="Node / Express"
          />

          <InfoItem
            icon={<Database size={14} />}
            label="Database"
            value="MongoDB"
          />

          <InfoItem
            icon={<Globe2 size={14} />}
            label="Location"
            value="Lahore, PK"
          />
        </div>

        {/* Bottom */}
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/[0.06] bg-black/20 px-4 py-3">
          <div className="flex items-center gap-2">
            <Zap
              size={13}
              className="text-sky-400"
            />

            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
              Ready to build
            </span>
          </div>

          <span className="font-mono text-[9px] text-sky-400/60">
            v2.0
          </span>
        </div>
      </div>
    </div>
  );
}

/* ========================================================= */
/* INFO ITEM */
/* ========================================================= */

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-3.5 transition-colors duration-300 hover:border-sky-400/20 hover:bg-sky-400/[0.035]"
    >
      <div className="flex items-center gap-2 text-sky-400/70">
        {icon}

        <span className="text-[9px] uppercase tracking-[0.14em] text-slate-600">
          {label}
        </span>
      </div>

      <p className="mt-2 text-xs font-medium text-slate-300">
        {value}
      </p>
    </motion.div>
  );
}