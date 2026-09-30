"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Sparkles,
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

export default function Hero() {
  /* =====================================================
     MOUSE PARALLAX
  ====================================================== */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 70,
    damping: 20,
    mass: 0.6,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 70,
    damping: 20,
    mass: 0.6,
  });

  const imageX = useTransform(smoothX, [-700, 700], [-18, 18]);
  const imageY = useTransform(smoothY, [-500, 500], [-12, 12]);

  const glowX = useTransform(smoothX, [-700, 700], [-80, 80]);
  const glowY = useTransform(smoothY, [-500, 500], [-60, 60]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(
      e.clientX - rect.left - rect.width / 2
    );

    mouseY.set(
      e.clientY - rect.top - rect.height / 2
    );
  }

  return (
    <section
      id="top"
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen h-screen w-full items-center justify-center overflow-hidden bg-black text-white"
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <motion.div
        className="absolute -inset-[3%]"
        style={{
          x: imageX,
          y: imageY,
        }}
      >
        <motion.img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2400&q=90"
          alt="Developer coding workspace"
          className="h-full w-full object-cover"
          initial={{
            scale: 1.08,
            opacity: 0,
          }}
          animate={{
            scale: [1.08, 1.13, 1.08],
            opacity: 1,
          }}
          transition={{
            opacity: {
              duration: 1.2,
            },
            scale: {
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      </motion.div>

      {/* =====================================================
          BLACK LINEAR GRADIENT
      ====================================================== */}

      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0.92, 0.84, 0.92],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.64) 32%, rgba(0,0,0,0.55) 68%, rgba(0,0,0,0.88) 100%)",
        }}
      />

      {/* Vertical cinematic gradient */}

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.08)_40%,rgba(0,0,0,0.78)_100%)]" />

      {/* =====================================================
          MOVING CENTER GLOW
      ====================================================== */}

      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/[0.07] blur-[140px]"
        style={{
          x: glowX,
          y: glowY,
        }}
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.35, 0.8, 0.35],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          MOVING LIGHT BEAM
      ====================================================== */}

      <motion.div
        className="pointer-events-none absolute -left-[20%] top-[12%] h-px w-[45%]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), rgba(251,191,36,0.8), transparent)",
          boxShadow:
            "0 0 25px rgba(251,191,36,0.55)",
        }}
        animate={{
          x: ["0%", "330%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="pointer-events-none absolute -right-[20%] bottom-[30%] h-px w-[40%]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
        }}
        animate={{
          x: ["0%", "-350%"],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
      />

      {/* =====================================================
          FLOATING LIGHT PARTICLES
      ====================================================== */}

      <FloatingParticle
        className="left-[12%] top-[25%]"
        delay={0}
        duration={5}
      />

      <FloatingParticle
        className="right-[15%] top-[20%]"
        delay={1}
        duration={6}
      />

      <FloatingParticle
        className="left-[20%] bottom-[25%]"
        delay={2}
        duration={7}
      />

      <FloatingParticle
        className="right-[22%] bottom-[30%]"
        delay={3}
        duration={5.5}
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-20 flex h-full w-full items-center justify-center px-6">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mx-auto flex max-w-5xl flex-col items-center justify-center text-center"
        >
          {/* =================================================
              STATUS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              delay: 0.15,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              scale: 1.04,
              y: -2,
            }}
            className="group mb-7 flex items-center gap-3 rounded-full border border-white/20 bg-black/30 px-4 py-2.5 backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <motion.span
                className="absolute h-full w-full rounded-full bg-emerald-400"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />

              <motion.span
                className="relative h-2.5 w-2.5 rounded-full bg-emerald-400"
                animate={{
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </span>

            <span className="text-[11px] font-medium tracking-wide text-white/80">
              Open to freelance &amp; full-time work
            </span>
          </motion.div>

          {/* =================================================
              EYEBROW
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.7,
            }}
            className="mb-5 flex items-center gap-4"
          >
            <motion.span
              initial={{
                width: 0,
              }}
              animate={{
                width: 48,
              }}
              transition={{
                delay: 0.5,
                duration: 0.7,
              }}
              className="h-px bg-white/60"
            />

            <motion.span
              initial={{
                opacity: 0,
                letterSpacing: "0em",
              }}
              animate={{
                opacity: 1,
                letterSpacing: "0.35em",
              }}
              transition={{
                delay: 0.45,
                duration: 0.8,
              }}
              className="text-xs font-medium uppercase text-white/60"
            >
              Full Stack Developer
            </motion.span>

            <motion.span
              initial={{
                width: 0,
              }}
              animate={{
                width: 48,
              }}
              transition={{
                delay: 0.5,
                duration: 0.7,
              }}
              className="h-px bg-white/60"
            />
          </motion.div>

          {/* =================================================
              NAME REVEAL
          ================================================= */}

          <div className="overflow-hidden">
            <motion.h1
              initial={{
                opacity: 0,
                y: 120,
                filter: "blur(15px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                delay: 0.35,
                duration: 1.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-display text-[4rem] font-medium leading-[0.9] tracking-[-0.06em] text-white sm:text-7xl md:text-8xl lg:text-[8rem]"
            >
              {profile.name}
            </motion.h1>
          </div>

          {/* =================================================
              ROLE
          ================================================= */}

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              delay: 0.65,
              duration: 0.8,
            }}
            className="mt-7 text-2xl font-medium tracking-tight sm:text-3xl"
          >
            <motion.span
              className="inline-block bg-gradient-to-r from-amber-300 via-yellow-200 to-white bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              {profile.role}
            </motion.span>
          </motion.p>

          {/* =================================================
              TAGLINE
          ================================================= */}

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
              filter: "blur(8px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              delay: 0.8,
              duration: 0.8,
            }}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          {/* =================================================
              BUTTONS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.95,
              duration: 0.8,
            }}
            className="mt-9 flex flex-wrap justify-center gap-3"
          >
            {/* Primary */}

            <motion.a
              href="#work"
              whileHover={{
                y: -5,
                scale: 1.025,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black shadow-[0_15px_45px_rgba(255,255,255,0.08)]"
            >
              {/* Shine */}

              <motion.span
                className="absolute inset-y-0 left-[-80%] w-[45%] skew-x-[-20deg] bg-black/10"
                animate={{
                  left: ["-80%", "150%"],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
              />

              <span className="relative">
                Explore my work
              </span>

              <motion.span
                className="relative"
                animate={{
                  x: [0, 3, 0],
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <ArrowUpRight size={17} />
              </motion.span>
            </motion.a>

            {/* Secondary */}

            <motion.a
              href="#contact"
              whileHover={{
                y: -5,
                scale: 1.025,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group relative flex items-center gap-3 overflow-hidden rounded-full border border-white/25 bg-black/20 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-colors duration-300 hover:border-white/50 hover:bg-white/10"
            >
              <motion.span
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              />

              <span className="relative">
                Let&apos;s talk
              </span>

              <span className="relative flex h-6 w-6 items-center justify-center rounded-full border border-white/25">
                <motion.span
                  animate={{
                    x: [0, 2, 0],
                    y: [0, -2, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <ArrowUpRight size={13} />
                </motion.span>
              </span>
            </motion.a>
          </motion.div>

          {/* =================================================
              STATS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.1,
              duration: 0.8,
            }}
            className="mt-12 flex flex-wrap justify-center gap-3"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: 25,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  y: [0, -4, 0],
                  scale: 1,
                }}
                transition={{
                  opacity: {
                    delay: 1.15 + index * 0.1,
                    duration: 0.5,
                  },
                  scale: {
                    delay: 1.15 + index * 0.1,
                    duration: 0.5,
                  },
                  y: {
                    delay: 1.8 + index * 0.2,
                    duration: 4 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{
                  y: -7,
                  scale: 1.04,
                }}
                className="rounded-xl border border-white/15 bg-black/25 px-5 py-3 backdrop-blur-md"
              >
                <p className="text-[9px] uppercase tracking-[0.18em] text-white/40">
                  {stat.label}
                </p>

                <motion.p
                  className="mt-1.5 text-sm font-medium text-white/80"
                  animate={{
                    opacity: [0.65, 1, 0.65],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.4,
                  }}
                >
                  {stat.value}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>

          {/* =================================================
              SIGNATURE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.45,
              duration: 0.7,
            }}
            className="mt-8 flex items-center gap-2"
          >
            <motion.span
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Braces
                size={13}
                className="text-amber-300"
              />
            </motion.span>

            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/40">
              Design · Develop · Deploy
            </span>

            <motion.span
              animate={{
                rotate: [0, -15, 15, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <Sparkles
                size={12}
                className="text-amber-300"
              />
            </motion.span>
          </motion.div>
        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM TECH STRIP
      ====================================================== */}

      <div className="absolute bottom-0 left-0 right-0 z-30 border-t border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-7 gap-y-2 px-6 py-4">
          {stack.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: [0.35, 0.75, 0.35],
                y: [0, -2, 0],
              }}
              transition={{
                opacity: {
                  delay: 1.5 + index * 0.08,
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                y: {
                  delay: 1.5 + index * 0.08,
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{
                scale: 1.1,
                color: "#fcd34d",
              }}
              className="cursor-default font-mono text-[10px] text-white/45 transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <motion.a
        href="#work"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          y: [0, 8, 0],
        }}
        transition={{
          opacity: {
            delay: 1.5,
            duration: 0.7,
          },
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute bottom-[75px] left-1/2 z-40 hidden -translate-x-1/2 items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-white/40 lg:flex"
      >
        Explore

        <motion.span
          animate={{
            y: [0, 4, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <ArrowDown
            size={13}
            className="text-amber-300"
          />
        </motion.span>
      </motion.a>
    </section>
  );
}

/* =========================================================
   FLOATING PARTICLE
========================================================= */

function FloatingParticle({
  className,
  delay,
  duration,
}: {
  className: string;
  delay: number;
  duration: number;
}) {
  return (
    <motion.span
      className={`pointer-events-none absolute z-10 h-1 w-1 rounded-full bg-amber-300 ${className}`}
      animate={{
        y: [0, -25, 0],
        x: [0, 10, 0],
        opacity: [0.15, 0.8, 0.15],
        scale: [0.8, 1.5, 0.8],
      }}
      transition={{
        delay,
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}