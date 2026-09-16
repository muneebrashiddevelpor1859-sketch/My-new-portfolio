"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  MessageCircle,
  MoveUpRight,
  Sparkles,
  Zap,
} from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  });

  const glowX = useTransform(smoothX, [-500, 500], ["35%", "65%"]);
  const glowY = useTransform(smoothY, [-300, 300], ["35%", "65%"]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  return (
    <footer
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#02060a]"
    >
      {/* ========================================================= */}
      {/* BACKGROUND */}
      {/* ========================================================= */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56,189,248,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,0.045) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Mouse glow */}
      <motion.div
        className="pointer-events-none absolute h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]"
        style={{
          left: glowX,
          top: glowY,
          background:
            "radial-gradient(circle, rgba(14,165,233,0.10), transparent 68%)",
        }}
      />

      {/* ========================================================= */}
      {/* TOP MASSIVE CTA */}
      {/* ========================================================= */}

      <div className="relative mx-auto max-w-7xl px-6 pt-24 sm:px-10 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative"
        >
          {/* Small top system label */}
          <div className="mb-8 flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-sky-400 opacity-50" />
              <span className="relative h-2 w-2 rounded-full bg-sky-400" />
            </span>

            <span className="text-[10px] uppercase tracking-[0.3em] text-sky-400">
              System online · Available for projects
            </span>
          </div>

          {/* Huge typography */}
          <div className="relative overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.1,
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-display text-[16vw] font-medium leading-[0.78] tracking-[-0.07em] text-white sm:text-[14vw] lg:text-[11vw]"
            >
              LET&apos;S
            </motion.h2>

            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-display ml-[8vw] text-[16vw] font-medium leading-[0.82] tracking-[-0.07em] text-sky-400 sm:text-[14vw] lg:text-[11vw]"
            >
              BUILD
            </motion.h2>

            {/* Thin animated line through typography */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.8,
                duration: 1.3,
                ease: "easeOut",
              }}
              className="absolute left-0 top-[57%] h-px w-full origin-left bg-gradient-to-r from-transparent via-sky-400/60 to-transparent"
            />
          </div>

          {/* Description */}
          <div className="mt-12 flex flex-col gap-8 lg:ml-auto lg:max-w-xl">
            <p className="text-base leading-7 text-slate-400 sm:text-lg">
              {profile.role} based in {profile.location}, building full stack
              products with React, Next.js, Node.js and Express.
            </p>

            <a
              href="#contact"
              className="group flex w-fit items-center gap-4"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-sky-400/30 bg-sky-400/[0.06] transition-all duration-500 group-hover:scale-110 group-hover:border-sky-400/70 group-hover:bg-sky-400/[0.12]">
                <ArrowUpRight
                  size={21}
                  className="text-sky-400 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </span>

              <span>
                <span className="block text-sm font-medium text-white">
                  Start a conversation
                </span>

                <span className="mt-1 block text-[10px] uppercase tracking-[0.18em] text-slate-600">
                  Let&apos;s create something
                </span>
              </span>
            </a>
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* ORBITAL CENTER */}
        {/* ========================================================= */}

        <div className="relative mt-28 h-[300px] overflow-hidden rounded-[32px] border border-white/[0.07] bg-white/[0.015] sm:h-[380px]">
          {/* Orbital rings */}
          <motion.div
            className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-400/10 sm:h-[230px] sm:w-[230px]"
            animate={{ rotate: 360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-400/[0.07] sm:h-[310px] sm:w-[310px]"
            animate={{ rotate: -360 }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04] sm:h-[390px] sm:w-[390px]"
            animate={{ rotate: 360 }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Orbital dots */}
          <motion.span
            className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_25px_rgba(56,189,248,0.9)]"
            animate={{
              rotate: 360,
              x: [90, 0, -90, 0, 90],
              y: [0, -90, 0, 90, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Center */}
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                boxShadow: [
                  "0 0 0 rgba(56,189,248,0)",
                  "0 0 40px rgba(56,189,248,0.18)",
                  "0 0 0 rgba(56,189,248,0)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex h-16 w-16 items-center justify-center rounded-full border border-sky-400/30 bg-sky-400/[0.07]"
            >
              <Zap
                size={24}
                className="text-sky-400"
                strokeWidth={1.6}
              />
            </motion.div>

            <span className="mt-5 text-[10px] uppercase tracking-[0.3em] text-slate-600">
              Muneeb Ahmed
            </span>

            <span className="mt-2 text-xs text-slate-500">
              Full Stack Developer
            </span>
          </div>

          {/* Corner labels */}
          <span className="absolute left-5 top-5 text-[9px] uppercase tracking-[0.2em] text-slate-700">
            01 / Create
          </span>

          <span className="absolute right-5 top-5 text-[9px] uppercase tracking-[0.2em] text-slate-700">
            02 / Build
          </span>

          <span className="absolute bottom-5 left-5 text-[9px] uppercase tracking-[0.2em] text-slate-700">
            03 / Refine
          </span>

          <span className="absolute bottom-5 right-5 text-[9px] uppercase tracking-[0.2em] text-slate-700">
            04 / Launch
          </span>
        </div>

        {/* ========================================================= */}
        {/* NAVIGATION */}
        {/* ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid gap-10 lg:grid-cols-[1fr_auto]"
        >
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/[0.06]">
                <Sparkles size={16} className="text-sky-400" />
              </span>

              <span className="font-display text-xl text-white">
                {profile.name}
              </span>
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              Building thoughtful digital products from idea to production,
              with a focus on clean interfaces and reliable full stack
              systems.
            </p>
          </div>

          {/* Navigation nodes */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-5 sm:grid-cols-4 lg:grid-cols-4">
            <FooterLink number="01" label="Work" href="#work" />
            <FooterLink number="02" label="About" href="#about" />
            <FooterLink number="03" label="Skills" href="#skills" />
            <FooterLink number="04" label="Contact" href="#contact" />
          </div>
        </motion.div>

       
        <div className="mt-12 flex flex-col gap-4 border-t border-white/[0.06] py-7 text-[10px] uppercase tracking-[0.15em] text-slate-700 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </span>

          <span className="flex items-center gap-2">
            Designed &amp; built from Lahore, Pakistan.
            <MoveUpRight size={12} className="text-sky-500/60" />
          </span>
        </div>
      </div>
    </footer>
  );
}


function FooterLink({
  number,
  label,
  href,
}: {
  number: string;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex items-center gap-3 transition-transform duration-300 hover:translate-x-1"
    >
      <span className="text-[9px] text-sky-500/50 transition-colors group-hover:text-sky-400">
        {number}
      </span>

      <span className="text-sm text-slate-500 transition-colors group-hover:text-white">
        {label}
      </span>

      <ArrowUpRight
        size={13}
        className="text-slate-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-400"
      />
    </a>
  );
}

/* ========================================================= */
/* SOCIAL LINK */
/* ========================================================= */

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-full border border-white/[0.07] bg-white/[0.02] px-4 py-2.5 text-xs text-slate-500 backdrop-blur-md transition-all duration-300 hover:border-sky-400/25 hover:bg-sky-400/[0.05] hover:text-white"
    >
      <span className="text-sky-400/70 transition-colors group-hover:text-sky-400">
        {icon}
      </span>

      {label}

      <ArrowUpRight
        size={12}
        className="text-slate-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-400"
      />
    </a>
  );
}