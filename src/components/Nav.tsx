"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  X,
  Code2,
} from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* =====================================================
          FULL WIDTH NAV
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`relative w-full border-b transition-all duration-500 ${
          scrolled
            ? "border-white/[0.10] bg-black/80 shadow-[0_12px_50px_rgba(0,0,0,0.35)]"
            : "border-white/[0.08] bg-black/40"
        }`}
        style={{
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
        }}
      >
        {/* =================================================
            MOVING TOP LIGHT
        ================================================= */}

        <motion.div
          className="absolute left-0 top-0 h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(251,191,36,0.7) 35%, rgba(255,255,255,0.8) 50%, rgba(251,191,36,0.7) 65%, transparent 100%)",
          }}
          animate={{
            opacity: [0.25, 0.9, 0.25],
            scaleX: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* =================================================
            NAV ROW
        ================================================= */}

        <div className="mx-auto flex h-[74px] w-full max-w-[1600px] items-center justify-between px-6 sm:px-10 lg:px-14 xl:px-20">
          {/* =================================================
              LOGO
          ================================================= */}

          <motion.a
            href="#top"
            whileHover={{
              x: 2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group flex items-center gap-3"
          >
            {/* Icon */}

            <motion.div
              className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-amber-300/20 bg-white/[0.05]"
              animate={{
                boxShadow: [
                  "0 0 0 rgba(251,191,36,0)",
                  "0 0 25px rgba(251,191,36,0.14)",
                  "0 0 0 rgba(251,191,36,0)",
                ],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Code2
                size={19}
                strokeWidth={1.6}
                className="relative z-10 text-amber-300"
              />

              <motion.span
                className="absolute inset-y-0 -left-[100%] w-[55%] skew-x-[-20deg] bg-white/15"
                animate={{
                  left: ["-100%", "180%"],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  repeatDelay: 2.5,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Text */}

            <div>
              <motion.span
                className="block text-sm font-semibold tracking-tight text-white"
                animate={{
                  opacity: [0.85, 1, 0.85],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                {profile.name}
              </motion.span>

              <span className="mt-0.5 hidden text-[8px] uppercase tracking-[0.28em] text-white/35 sm:block">
                Full Stack Developer
              </span>
            </div>
          </motion.a>

          {/* =================================================
              DESKTOP NAV
          ================================================= */}

          <nav className="hidden items-center md:flex">
            {links.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{
                  opacity: 0,
                  y: -15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.2 + index * 0.08,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -1,
                }}
                className="group relative px-5 py-7 text-[13px] font-medium text-white/45 transition-colors duration-300 hover:text-white"
              >
                {link.label}

                {/* Hover line */}

                <motion.span
                  className="absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-amber-300"
                  initial={{
                    width: 0,
                    opacity: 0,
                  }}
                  whileHover={{
                    width: 24,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                />

                {/* Glow */}

                <motion.span
                  className="absolute bottom-[-4px] left-1/2 h-5 -translate-x-1/2 rounded-full bg-amber-300/20 blur-md"
                  initial={{
                    width: 0,
                    opacity: 0,
                  }}
                  whileHover={{
                    width: 35,
                    opacity: 1,
                  }}
                />
              </motion.a>
            ))}
          </nav>

          {/* =================================================
              RIGHT CTA
          ================================================= */}

          <div className="flex items-center gap-3">
            <motion.a
              href={`https://wa.me/${profile.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="group relative hidden overflow-hidden rounded-full border border-amber-300/25 bg-amber-300/[0.08] px-5 py-2.5 text-[13px] font-medium text-amber-200 sm:flex sm:items-center sm:gap-2"
            >
              {/* Shine */}

              <motion.span
                className="absolute inset-y-0 -left-[80%] w-[45%] skew-x-[-20deg] bg-white/10"
                animate={{
                  left: ["-80%", "160%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
              />

              <span className="relative z-10">
                Let&apos;s talk
              </span>

              <motion.span
                className="relative z-10"
                animate={{
                  x: [0, 2, 0],
                  y: [0, -1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <ArrowUpRight size={15} />
              </motion.span>
            </motion.a>

            {/* Mobile */}

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.9,
              }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/70 transition-all hover:border-amber-300/30 hover:text-amber-300 md:hidden"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{
                      rotate: -90,
                      opacity: 0,
                    }}
                    animate={{
                      rotate: 0,
                      opacity: 1,
                    }}
                    exit={{
                      rotate: 90,
                      opacity: 0,
                    }}
                  >
                    <X size={19} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{
                      rotate: 90,
                      opacity: 0,
                    }}
                    animate={{
                      rotate: 0,
                      opacity: 1,
                    }}
                    exit={{
                      rotate: -90,
                      opacity: 0,
                    }}
                  >
                    <Menu size={19} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* =====================================================
            MOBILE MENU
        ====================================================== */}

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden border-t border-white/[0.08] md:hidden"
            >
              <div className="px-5 py-4">
                {links.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={closeMobile}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.07,
                    }}
                    className="group flex items-center justify-between border-b border-white/[0.05] px-2 py-4 text-sm text-white/55 transition-colors hover:text-white"
                  >
                    <span>{link.label}</span>

                    <ArrowUpRight
                      size={15}
                      className="text-white/25 transition-colors group-hover:text-amber-300"
                    />
                  </motion.a>
                ))}

                <motion.a
                  href={`https://wa.me/${profile.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobile}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.35,
                  }}
                  className="mt-4 flex items-center justify-between rounded-xl border border-amber-300/20 bg-amber-300/[0.07] px-4 py-3.5 text-sm font-medium text-amber-200"
                >
                  <span>Let&apos;s talk</span>

                  <ArrowUpRight size={16} />
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* =====================================================
            BOTTOM ANIMATED LINE
        ====================================================== */}

        <motion.div
          className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"
          animate={{
            width: ["15%", "45%", "15%"],
            left: ["42.5%", "27.5%", "42.5%"],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </header>
  );
}