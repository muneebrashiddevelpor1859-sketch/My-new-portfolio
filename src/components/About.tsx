"use client";

import { motion } from "framer-motion";
import { Check, ArrowDownRight, Sparkles } from "lucide-react";
import { profile, highlights } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b bg-[#03070b] text-white"
      style={{ borderColor: "rgba(56,189,248,0.12)" }}
    >
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(56,189,248,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.2) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Right blue glow */}
        <motion.div
          className="absolute -right-40 top-[20%] h-[500px] w-[500px] rounded-full blur-[140px]"
          style={{ background: "rgba(14,165,233,0.10)" }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.55, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Bottom blue glow */}
        <motion.div
          className="absolute -bottom-40 left-[20%] h-[400px] w-[400px] rounded-full blur-[130px]"
          style={{ background: "rgba(37,99,235,0.07)" }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Animated line */}
        <motion.div
          className="absolute left-[-30%] top-[32%] h-px w-[65%]"
          style={{
            background:
              "linear-gradient(90deg, transparent, #38bdf8, transparent)",
            boxShadow: "0 0 18px rgba(56,189,248,0.7)",
          }}
          animate={{
            x: ["0%", "205%"],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Second line */}
        <motion.div
          className="absolute right-[-40%] bottom-[25%] h-px w-[55%]"
          style={{
            background:
              "linear-gradient(90deg, transparent, #22d3ee, transparent)",
            boxShadow: "0 0 18px rgba(34,211,238,0.7)",
          }}
          animate={{
            x: ["0%", "-190%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto grid max-w-[1600px] gap-16 px-6 py-24 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-14 lg:py-32 xl:px-20">
        {/* ================= LEFT ================= */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative lg:sticky lg:top-32 lg:self-start"
        >
          {/* Label */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-sky-400 shadow-[0_0_12px_#38bdf8]" />

            <span className="text-xs uppercase tracking-[0.22em] text-sky-400">
              About
            </span>

            <Sparkles size={14} className="text-sky-400" />
          </div>

          {/* Heading */}
          <h2 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            Building the whole product,
            <span className="block mt-2 text-slate-500">
              not just one layer of it.
            </span>
          </h2>

          {/* Decorative element */}
          <div className="mt-10 flex items-center gap-4">
            <div className="relative h-16 w-16 rounded-2xl border border-sky-400/20 bg-sky-400/[0.05]">
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-3 rounded-full border border-dashed border-sky-400/40"
              />

              <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400 shadow-[0_0_18px_#38bdf8]" />
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
                Full Stack
              </p>
              <p className="mt-1 text-sm text-slate-400">
                Frontend → Backend → Product
              </p>
            </div>
          </div>
        </motion.div>

        {/* ================= RIGHT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, x: 100, y: 45 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative"
        >
          {/* Main bio card */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.35 }}
            className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#071018]/75 p-7 backdrop-blur-xl sm:p-10"
          >
            {/* Animated top line */}
            <motion.div
              className="absolute left-0 top-0 h-px w-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #38bdf8, #22d3ee, transparent)",
                boxShadow: "0 0 18px rgba(56,189,248,0.8)",
              }}
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Corner glow */}
            <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-sky-400/[0.07] blur-3xl transition-opacity duration-500 group-hover:bg-sky-400/[0.12]" />

            <div className="relative">
              <div className="mb-6 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
                  About / 01
                </span>

                <ArrowDownRight
                  size={18}
                  className="text-sky-400/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-sky-400"
                />
              </div>

              <p className="max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
                {profile.bio}
              </p>
            </div>
          </motion.div>

          {/* ================= HIGHLIGHTS ================= */}
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {highlights.map((point, index) => (
              <motion.div
                key={point}
                initial={{
                  opacity: 0,
                  x: 70,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.12 + index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -5,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#061018]/70 p-6 backdrop-blur-xl transition-colors duration-300 hover:border-sky-400/25"
              >
                {/* Hover glow */}
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-sky-400/0 blur-2xl transition-all duration-500 group-hover:bg-sky-400/10" />

                <div className="relative flex items-start gap-4">
                  {/* Check */}
                  <motion.span
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                    }}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/[0.06] transition-all duration-300 group-hover:border-sky-400/40 group-hover:bg-sky-400/10"
                  >
                    <Check
                      size={15}
                      className="text-sky-400"
                      strokeWidth={2.5}
                    />
                  </motion.span>

                  {/* Text */}
                  <span className="pt-1 text-sm leading-6 text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                    {point}
                  </span>
                </div>

                {/* Bottom accent */}
                <motion.div
                  className="absolute bottom-0 left-6 h-px w-0 bg-sky-400 shadow-[0_0_10px_#38bdf8] transition-all duration-500 group-hover:w-12"
                />
              </motion.div>
            ))}
          </div>

          {/* Bottom status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-6 flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-4"
          >
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute h-full w-full animate-ping rounded-full bg-sky-400 opacity-50" />
                <span className="relative h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_10px_#38bdf8]" />
              </span>

              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">
                Building digital experiences
              </span>
            </div>

            <span className="hidden font-mono text-[10px] text-sky-400/50 sm:block">
              01 / 04
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom animated line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="relative z-10 mx-auto h-px max-w-[1500px] origin-left"
        style={{
          background:
            "linear-gradient(90deg, #38bdf8, rgba(56,189,248,0.12), transparent)",
          boxShadow: "0 0 12px rgba(56,189,248,0.4)",
        }}
      />
    </section>
  );
}