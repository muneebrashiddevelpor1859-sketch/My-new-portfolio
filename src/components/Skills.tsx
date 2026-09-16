"use client";

import { motion } from "framer-motion";
import {
  FileCode2,
  Braces,
  Palette,
  Atom,
  Hexagon,
  Server,
  Workflow,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { skillGroups } from "@/lib/data";

const icons: Record<
  string,
  React.ComponentType<{
    size?: number;
    strokeWidth?: number;
    style?: React.CSSProperties;
  }>
> = {
  JavaScript: Braces,
  HTML5: FileCode2,
  CSS3: Palette,
  "React.js": Atom,
  "Next.js": Hexagon,
  "Node.js": Server,
  "Express.js": Workflow,
};

const accentColors = [
  "#38bdf8",
  "#22d3ee",
  "#818cf8",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-b bg-[#03070b] text-white"
      style={{ borderColor: "rgba(56,189,248,0.12)" }}
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

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

        {/* Main glow */}
        <motion.div
          className="absolute right-[-180px] top-[15%] h-[550px] w-[550px] rounded-full blur-[150px]"
          style={{
            background: "rgba(14,165,233,0.10)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.55, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Secondary glow */}
        <motion.div
          className="absolute bottom-[-180px] left-[-100px] h-[450px] w-[450px] rounded-full blur-[140px]"
          style={{
            background: "rgba(37,99,235,0.08)",
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Moving line 1 */}
        <motion.div
          className="absolute left-[-35%] top-[22%] h-px w-[65%]"
          style={{
            background:
              "linear-gradient(90deg, transparent, #38bdf8, transparent)",
            boxShadow: "0 0 18px rgba(56,189,248,0.8)",
          }}
          animate={{
            x: ["0%", "210%"],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Moving line 2 */}
        <motion.div
          className="absolute right-[-35%] bottom-[20%] h-px w-[60%]"
          style={{
            background:
              "linear-gradient(90deg, transparent, #22d3ee, transparent)",
            boxShadow: "0 0 18px rgba(34,211,238,0.7)",
          }}
          animate={{
            x: ["0%", "-210%"],
          }}
          transition={{
            duration: 10,
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
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            {/* Label */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-sky-400 shadow-[0_0_12px_#38bdf8]" />

              <span className="text-xs uppercase tracking-[0.22em] text-sky-400">
                Skills
              </span>

              <Sparkles
                size={14}
                className="text-sky-400"
              />
            </div>

            {/* Heading */}
            <h2 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              The tools
              <span className="block mt-2 text-slate-500">
                I reach for.
              </span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
              A modern full-stack toolkit for building fast interfaces,
              scalable applications, and complete backend systems.
            </p>

            {/* Skill counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.35,
                duration: 0.6,
              }}
              className="mt-10 flex w-fit items-center gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.025] px-5 py-4 backdrop-blur-xl"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/[0.06]">
                <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_14px_#38bdf8]" />
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">
                  Tech Stack
                </p>

                <p className="mt-1 text-sm text-slate-300">
                  Frontend + Backend
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT SIDE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 100,
              y: 45,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {skillGroups.map((group, groupIndex) => {
              const accent =
                accentColors[groupIndex % accentColors.length];

              return (
                <motion.div
                  key={group.category}
                  initial={{
                    opacity: 0,
                    y: 40,
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
                    duration: 0.7,
                    delay: groupIndex * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group relative"
                >
                  {/* Category glow */}
                  <div
                    className="absolute -inset-1 rounded-3xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: `${accent}12`,
                    }}
                  />

                  {/* Category card */}
                  <div className="relative h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-[#071018]/75 p-5 backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-sky-400/25 group-hover:bg-[#08131c]">
                    {/* Top animated line */}
                    <motion.div
                      className="absolute left-0 top-0 h-px w-full"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
                        boxShadow: `0 0 14px ${accent}`,
                      }}
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                        delay: groupIndex * 0.7,
                      }}
                    />

                    {/* Category header */}
                    <div className="mb-5 flex items-center justify-between">
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">
                          0{groupIndex + 1}
                        </span>

                        <h3 className="mt-1 text-sm font-medium text-slate-300">
                          {group.category}
                        </h3>
                      </div>

                      <ArrowUpRight
                        size={16}
                        className="text-slate-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-400"
                      />
                    </div>

                    {/* Skills */}
                    <div className="flex flex-col gap-2.5">
                      {group.items.map((item, itemIndex) => {
                        const Icon = icons[item];

                        return (
                          <motion.div
                            key={item}
                            initial={{
                              opacity: 0,
                              x: 25,
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              duration: 0.45,
                              delay:
                                groupIndex * 0.1 +
                                itemIndex * 0.06,
                            }}
                            whileHover={{
                              x: 5,
                            }}
                            className="group/item flex items-center gap-3 rounded-xl border border-white/[0.05] bg-black/20 p-3 transition-all duration-300 hover:border-sky-400/20 hover:bg-sky-400/[0.05]"
                          >
                            {/* Icon */}
                            <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.025] transition-all duration-300 group-hover/item:border-sky-400/25 group-hover/item:bg-sky-400/[0.07]">
                              {Icon && (
                                <Icon
                                  size={17}
                                  strokeWidth={1.7}
                                  style={{
                                    color: accent,
                                  }}
                                />
                              )}

                              <span
                                className="absolute inset-0 rounded-lg opacity-0 blur-md transition-opacity duration-300 group-hover/item:opacity-30"
                                style={{
                                  background: accent,
                                }}
                              />
                            </span>

                            {/* Name */}
                            <span className="text-[14px] text-slate-400 transition-colors duration-300 group-hover/item:text-slate-200">
                              {item}
                            </span>

                            {/* Status */}
                            <span className="ml-auto h-1.5 w-1.5 rounded-full bg-sky-400/40 transition-all duration-300 group-hover/item:bg-sky-400 group-hover/item:shadow-[0_0_8px_#38bdf8]" />
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Bottom glow */}
                    <div
                      className="absolute -bottom-20 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                      style={{
                        background: accent,
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* =================================================
            BOTTOM LINE
        ================================================== */}

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
          className="mt-20 h-px origin-left"
          style={{
            background:
              "linear-gradient(90deg, #38bdf8, rgba(56,189,248,0.12), transparent)",
            boxShadow: "0 0 12px rgba(56,189,248,0.45)",
          }}
        />
      </div>
    </section>
  );
}