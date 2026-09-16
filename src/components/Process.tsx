"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Workflow,
} from "lucide-react";
import { process } from "@/lib/data";

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-b bg-[#03070b] text-white"
      style={{ borderColor: "rgba(56,189,248,0.12)" }}
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(56,189,248,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.22) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Main glow */}
        <motion.div
          className="absolute left-[35%] top-[-180px] h-[500px] w-[500px] rounded-full blur-[150px]"
          style={{
            background: "rgba(14,165,233,0.08)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Bottom glow */}
        <motion.div
          className="absolute bottom-[-180px] right-[-100px] h-[450px] w-[450px] rounded-full blur-[140px]"
          style={{
            background: "rgba(37,99,235,0.07)",
          }}
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Moving blue line */}
        <motion.div
          className="absolute left-[-35%] top-[35%] h-px w-[60%]"
          style={{
            background:
              "linear-gradient(90deg, transparent, #38bdf8, transparent)",
            boxShadow: "0 0 18px rgba(56,189,248,0.8)",
          }}
          animate={{
            x: ["0%", "220%"],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Second moving line */}
        <motion.div
          className="absolute right-[-35%] bottom-[28%] h-px w-[55%]"
          style={{
            background:
              "linear-gradient(90deg, transparent, #22d3ee, transparent)",
            boxShadow: "0 0 18px rgba(34,211,238,0.7)",
          }}
          animate={{
            x: ["0%", "-210%"],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
        />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 py-24 sm:px-10 lg:px-14 lg:py-32 xl:px-20">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
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
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-2xl"
        >
          {/* Label */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-sky-400 shadow-[0_0_12px_#38bdf8]" />

            <span className="text-xs uppercase tracking-[0.22em] text-sky-400">
              How I work
            </span>

            <Sparkles
              size={14}
              className="text-sky-400"
            />
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            A steady process,
            <span className="block mt-2 text-slate-500">
              not guesswork.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-500">
            Every project moves through a clear workflow designed to keep
            ideas focused, development efficient, and the final product
            scalable.
          </p>
        </motion.div>

        {/* ================= TIMELINE ================= */}

        <div className="relative mt-20">
          {/* Desktop connecting line */}
          <div className="absolute left-[8%] right-[8%] top-[39px] hidden h-px bg-white/[0.08] lg:block" />

          {/* Animated connecting line */}
          <motion.div
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 1.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-[8%] right-[8%] top-[39px] hidden h-px origin-left lg:block"
            style={{
              background:
                "linear-gradient(90deg, #38bdf8, #22d3ee, #818cf8, transparent)",
              boxShadow: "0 0 12px rgba(56,189,248,0.45)",
            }}
          />

          {/* Moving light on timeline */}
          <motion.div
            className="absolute left-[8%] top-[37px] hidden h-[5px] w-16 rounded-full blur-sm lg:block"
            style={{
              background: "#38bdf8",
              boxShadow: "0 0 20px #38bdf8",
            }}
            animate={{
              x: ["0%", "1150%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
              delay: 1.5,
            }}
          />

          {/* Steps */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <ProcessCard
                key={item.step}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* ================= BOTTOM STATUS ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.5,
            duration: 0.7,
          }}
          className="mt-16 flex flex-col justify-between gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-5 py-5 backdrop-blur-xl sm:flex-row sm:items-center"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute h-full w-full animate-ping rounded-full bg-sky-400 opacity-50" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_12px_#38bdf8]" />
            </span>

            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
              Clear process · Better products
            </span>
          </div>

          <div className="flex items-center gap-3 text-slate-600">
            <Workflow size={15} className="text-sky-400/60" />

            <span className="font-mono text-[10px] uppercase tracking-[0.18em]">
              Plan → Build → Refine → Launch
            </span>
          </div>
        </motion.div>

        {/* Bottom line */}
        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.2,
          }}
          className="mt-16 h-px origin-left"
          style={{
            background:
              "linear-gradient(90deg, #38bdf8, rgba(56,189,248,0.12), transparent)",
            boxShadow: "0 0 12px rgba(56,189,248,0.4)",
          }}
        />
      </div>
    </section>
  );
}

/* =========================================================
   PROCESS CARD
========================================================= */

function ProcessCard({
  item,
  index,
}: {
  item: {
    step: string;
    title: string;
    description: string;
  };
  index: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 70,
        x: index % 2 === 0 ? -25 : 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.75,
        delay: index * 0.13,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -9,
      }}
      className="group relative"
    >
      {/* Card */}
      <div className="relative h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-[#071018]/75 p-6 backdrop-blur-xl transition-all duration-500 group-hover:border-sky-400/25 group-hover:bg-[#08131c] sm:p-7">
        {/* Top animated accent */}
        <motion.div
          className="absolute left-0 top-0 h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, #38bdf8, transparent)",
            boxShadow: "0 0 15px rgba(56,189,248,0.8)",
          }}
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.7,
          }}
        />

        {/* Step node */}
        <div className="relative mb-7">
          <motion.div
            whileHover={{
              scale: 1.08,
              rotate: 5,
            }}
            className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/[0.05] transition-all duration-300 group-hover:border-sky-400/40 group-hover:bg-sky-400/[0.09]"
          >
            <span className="font-mono text-2xl font-medium text-sky-400/80 transition-colors duration-300 group-hover:text-sky-300">
              {item.step}
            </span>

            {/* Outer glow */}
            <span className="absolute inset-0 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30">
              <span className="absolute inset-0 rounded-full bg-sky-400" />
            </span>
          </motion.div>

          {/* Desktop node */}
          <span className="absolute -right-2 top-1/2 hidden h-3 w-3 -translate-y-1/2 rounded-full border-2 border-[#071018] bg-sky-400 shadow-[0_0_14px_#38bdf8] lg:block" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-medium tracking-tight text-slate-100 transition-colors duration-300 group-hover:text-sky-300">
          {item.title}
        </h3>

        {/* Description */}
        <p className="mt-4 text-sm leading-7 text-slate-500 transition-colors duration-300 group-hover:text-slate-400">
          {item.description}
        </p>

        {/* Bottom */}
        <div className="mt-8 flex items-center justify-between border-t border-white/[0.06] pt-5">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-700">
            Step {item.step}
          </span>

          {index < process.length - 1 ? (
            <ArrowRight
              size={16}
              className="text-slate-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-sky-400"
            />
          ) : (
            <CheckCircle2
              size={16}
              className="text-slate-700 transition-colors duration-300 group-hover:text-sky-400"
            />
          )}
        </div>

        {/* Bottom glow */}
        <div className="absolute -bottom-20 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-sky-400/0 blur-3xl transition-all duration-500 group-hover:bg-sky-400/10" />
      </div>
    </motion.div>
  );
}