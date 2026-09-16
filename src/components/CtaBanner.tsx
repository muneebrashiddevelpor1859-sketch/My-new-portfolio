"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  MessageCircle,
  MoveUpRight,
} from "lucide-react";

export default function CtaBanner() {
  return (
    <section
      id="contact-cta"
      className="relative overflow-hidden border-b bg-[#03070b]"
      style={{ borderColor: "rgba(148,163,184,0.10)" }}
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(rgba(56,189,248,0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,0.055) 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
        }}
      />

      {/* Large ambient glow */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(14,165,233,0.18), rgba(14,165,233,0.05) 40%, transparent 72%)",
        }}
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.65, 1, 0.65],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden
      />

      {/* Moving horizontal light */}
      <motion.div
        className="pointer-events-none absolute left-[-20%] top-[25%] h-px w-[40%]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(56,189,248,0.8), transparent)",
        }}
        animate={{ x: ["0%", "350%"] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
        aria-hidden
      />

      <motion.div
        className="pointer-events-none absolute right-[-20%] bottom-[22%] h-px w-[35%]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(56,189,248,0.6), transparent)",
        }}
        animate={{ x: ["0%", "-350%"] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        aria-hidden
      />

      {/* Floating dots */}
      <motion.span
        className="absolute left-[12%] top-[25%] h-1.5 w-1.5 rounded-full bg-sky-400"
        animate={{
          y: [0, -18, 0],
          opacity: [0.25, 1, 0.25],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.span
        className="absolute right-[15%] top-[32%] h-1 w-1 rounded-full bg-sky-300"
        animate={{
          y: [0, 15, 0],
          opacity: [0.2, 0.9, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.span
        className="absolute bottom-[25%] left-[20%] h-1 w-1 rounded-full bg-cyan-300"
        animate={{
          x: [0, 15, 0],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main */}
      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 70, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden rounded-[32px] border border-white/[0.09] bg-white/[0.025] p-7 shadow-2xl backdrop-blur-xl sm:p-12 lg:p-16"
        >
          {/* Animated card border */}
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-[32px]"
            style={{
              background:
                "linear-gradient(120deg, transparent 20%, rgba(56,189,248,0.25), transparent 45%)",
              backgroundSize: "200% 200%",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            aria-hidden
          />

          {/* Inner glow */}
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-500/[0.10] blur-3xl"
            aria-hidden
          />

          <div
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/[0.07] blur-3xl"
            aria-hidden
          />

          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1fr_auto]">
            {/* Content */}
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.65 }}
                className="mb-6 flex items-center gap-3"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-sky-400/20 bg-sky-400/[0.08]">
                  <Sparkles
                    size={16}
                    className="text-sky-400"
                    strokeWidth={1.8}
                  />
                </span>

                <span className="text-xs font-medium uppercase tracking-[0.24em] text-sky-400">
                  Let&apos;s build something
                </span>

                <span className="h-px w-12 bg-sky-400/30" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, x: -35, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.25,
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-display max-w-3xl text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                Have an idea worth{" "}
                <span className="relative inline-block text-sky-400">
                  building well?
                  <motion.span
                    className="absolute -bottom-2 left-0 h-px w-full origin-left bg-gradient-to-r from-sky-400 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9, duration: 0.7 }}
                  />
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.65 }}
                className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg"
              >
                I take on a limited number of projects at a time, so I can
                actually focus on each one.
              </motion.p>

              {/* Small status row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-8 flex flex-wrap items-center gap-5 text-xs text-slate-500"
              >
                <span className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-50" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400" />
                  </span>
                  Available for select projects
                </span>

                <span className="hidden h-4 w-px bg-white/10 sm:block" />

                <span>Full Stack Development</span>
              </motion.div>
            </div>

            {/* CTA button area */}
            <motion.div
              initial={{ opacity: 0, x: 45, y: 35 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.35,
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex justify-start lg:justify-end"
            >
              <motion.a
                href="#contact"
                whileHover={{ y: -7, scale: 1.025 }}
                whileTap={{ scale: 0.97 }}
                className="group relative flex min-h-[150px] min-w-[150px] items-center justify-center overflow-hidden rounded-full border border-sky-400/30 bg-sky-400/[0.08] p-5 shadow-[0_0_60px_rgba(14,165,233,0.12)] transition-colors duration-500 hover:border-sky-400/70 hover:bg-sky-400/[0.14] sm:min-h-[175px] sm:min-w-[175px]"
              >
                {/* Button glow */}
                <motion.span
                  className="absolute inset-0 rounded-full bg-sky-400/10 blur-xl"
                  animate={{
                    scale: [0.8, 1.1, 0.8],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <span className="relative z-10 flex flex-col items-center gap-2 text-center">
                  <MessageCircle
                    size={24}
                    className="text-sky-400 transition-transform duration-500 group-hover:rotate-12"
                    strokeWidth={1.6}
                  />

                  <span className="text-sm font-semibold text-white">
                    Start a
                    <br />
                    conversation
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="text-sky-400 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </span>
              </motion.a>
            </motion.div>
          </div>

          {/* Bottom card line */}
          <motion.div
            className="absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-transparent via-sky-400/70 to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1.2 }}
          />
        </motion.div>

        {/* Bottom navigation-style label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-7 flex items-center justify-between px-2 text-[10px] uppercase tracking-[0.22em] text-slate-600"
        >
          <span>Idea → Product</span>

          <span className="flex items-center gap-2">
            Ready when you are
            <MoveUpRight size={12} className="text-sky-500" />
          </span>
        </motion.div>
      </div>
    </section>
  );
}