"use client";

import { motion } from "framer-motion";
import {
  LayoutPanelLeft,
  Server,
  Layers,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { services } from "@/lib/data";

const icons = {
  layout: LayoutPanelLeft,
  server: Server,
  layers: Layers,
};

const accents = [
  {
    color: "#38bdf8",
    glow: "rgba(56,189,248,0.16)",
  },
  {
    color: "#22d3ee",
    glow: "rgba(34,211,238,0.14)",
  },
  {
    color: "#818cf8",
    glow: "rgba(129,140,248,0.14)",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-b bg-[#03070b] text-white"
      style={{ borderColor: "rgba(56,189,248,0.12)" }}
    >
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(56,189,248,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.2) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Blue glow */}
        <motion.div
          className="absolute -right-40 top-20 h-[450px] w-[450px] rounded-full blur-[130px]"
          style={{ background: "rgba(14,165,233,0.10)" }}
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
          className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full blur-[130px]"
          style={{ background: "rgba(37,99,235,0.08)" }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Animated horizontal lines */}
        <motion.div
          className="absolute left-[-30%] top-[25%] h-px w-[70%]"
          style={{
            background:
              "linear-gradient(90deg, transparent, #38bdf8, transparent)",
            boxShadow: "0 0 18px rgba(56,189,248,0.8)",
          }}
          animate={{ x: ["0%", "190%"] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute left-[-40%] top-[75%] h-px w-[60%]"
          style={{
            background:
              "linear-gradient(90deg, transparent, #22d3ee, transparent)",
            boxShadow: "0 0 18px rgba(34,211,238,0.7)",
          }}
          animate={{ x: ["0%", "210%"] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 py-24 sm:px-10 lg:px-14 lg:py-28 xl:px-20">
        {/* Heading */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            {/* Small label */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-sky-400 shadow-[0_0_12px_#38bdf8]" />

              <span className="text-xs font-medium uppercase tracking-[0.22em] text-sky-400">
                What I do
              </span>

              <Sparkles
                size={14}
                className="text-sky-400"
              />
            </div>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              End to end,
              <br />
              <span className="text-slate-400">
                without handoffs.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-500">
              From polished interfaces to complete backend systems, I build
              scalable digital experiences from start to finish.
            </p>
          </motion.div>

          {/* Number */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="hidden items-center gap-4 lg:flex"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-600">
              Services
            </span>

            <span className="font-mono text-4xl font-light text-sky-400/40">
              03
            </span>
          </motion.div>
        </div>

        {/* ================= SERVICE CARDS ================= */}
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.icon as keyof typeof icons];
            const accent = accents[index % accents.length];

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Card glow */}
                <div
                  className="absolute -inset-px rounded-3xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: accent.glow,
                  }}
                />

                {/* Card */}
                <div className="relative flex min-h-[360px] flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#071018]/80 p-8 backdrop-blur-xl transition-all duration-500 group-hover:border-sky-400/25 group-hover:bg-[#08131c] sm:p-9">
                  {/* Top animated line */}
                  <motion.div
                    className="absolute left-0 top-0 h-px w-full"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${accent.color}, transparent)`,
                      boxShadow: `0 0 15px ${accent.color}`,
                    }}
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.8,
                    }}
                  />

                  {/* Number */}
                  <div className="absolute right-7 top-7 font-mono text-xs text-slate-700 transition-colors duration-300 group-hover:text-sky-400/40">
                    0{index + 1}
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 6, scale: 1.08 }}
                    className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-400/15 bg-sky-400/[0.06] transition-all duration-300 group-hover:border-sky-400/30 group-hover:bg-sky-400/[0.10]"
                    style={{
                      boxShadow: `0 0 30px ${accent.glow}`,
                    }}
                  >
                    <Icon
                      size={23}
                      strokeWidth={1.6}
                      style={{ color: accent.color }}
                    />

                    {/* Icon glow */}
                    <span
                      className="absolute inset-0 rounded-2xl opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-50"
                      style={{
                        background: accent.color,
                      }}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="mt-8">
                    <h3 className="text-2xl font-medium tracking-tight text-white transition-colors duration-300 group-hover:text-sky-300">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-500 transition-colors duration-300 group-hover:text-slate-400">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom */}
                  <div className="mt-auto flex items-end justify-between pt-10">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-700 transition-colors duration-300 group-hover:text-slate-500">
                      Full Stack
                    </span>

                    <motion.div
                      initial={{ opacity: 0, x: -5 }}
                      whileHover={{ x: 3 }}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-slate-500 transition-all duration-300 group-hover:border-sky-400/30 group-hover:bg-sky-400/10 group-hover:text-sky-400"
                    >
                      <ArrowUpRight size={17} />
                    </motion.div>
                  </div>

                  {/* Bottom glow */}
                  <div
                    className="absolute -bottom-24 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-30"
                    style={{
                      background: accent.color,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mt-16 h-px origin-left"
          style={{
            background:
              "linear-gradient(90deg, #38bdf8, rgba(56,189,248,0.15), transparent)",
            boxShadow: "0 0 12px rgba(56,189,248,0.5)",
          }}
        />
      </div>
    </section>
  );
}