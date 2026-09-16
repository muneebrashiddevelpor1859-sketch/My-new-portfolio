"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  X,
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
      setScrolled(window.scrollY > 20);
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
   <header className="fixed left-0 right-0 top-0 z-50">
      <motion.div
        initial={{
          opacity: 0,
          y: -25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className={`relative w-full overflow-hidden border-b transition-all duration-500 ${
          scrolled
            ? "border-sky-400/20 bg-black/85 shadow-[0_8px_40px_rgba(0,0,0,0.45)]"
            : "border-white/[0.08] bg-black/65"
        }`}
        style={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        {/* =====================================================
            ANIMATED TOP LINE
        ====================================================== */}

        <motion.div
          className="absolute left-0 top-0 h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, #38bdf8, #a855f7, #22d3ee, transparent)",
          }}
          animate={{
            x: ["-30%", "30%", "-30%"],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* =====================================================
            NAV CONTENT
        ====================================================== */}

        <div className="mx-auto flex h-[72px] w-full max-w-[1600px] items-center justify-between px-6 sm:px-10 lg:px-14 xl:px-20">
          {/* Logo */}

          <motion.a
            href="#top"
            whileHover={{
              scale: 1.02,
            }}
            className="group relative flex items-center gap-3"
          >
            {/* Logo mark */}

            <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-sky-400/20 bg-sky-400/5">
              <span className="text-sm font-bold text-sky-300">
                M
              </span>

              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{
                  x: ["-120%", "120%"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
              />
            </div>

            <div>
              <span className="block text-sm font-semibold tracking-tight text-white">
                Muneeb Ahmed
              </span>

              <span className="hidden text-[9px] uppercase tracking-[0.22em] text-zinc-600 sm:block">
                Full Stack Developer
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.15 + index * 0.08,
                }}
                whileHover={{
                  y: -1,
                }}
                className="group relative rounded-lg px-4 py-2.5 text-sm text-zinc-500 transition-colors duration-300 hover:bg-white/[0.035] hover:text-white"
              >
                {link.label}

                {/* Animated underline */}

                <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-sky-400 transition-all duration-300 group-hover:w-5" />

                {/* Small glow */}

                <span className="absolute inset-x-4 bottom-0 h-3 bg-sky-400/10 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
              </motion.a>
            ))}
          </nav>

          {/* Right */}

          <div className="flex items-center gap-2">
            {/* Let's Talk */}

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
              className="group relative hidden overflow-hidden rounded-full border border-sky-400/25 bg-sky-400/[0.06] px-5 py-2.5 text-sm font-medium text-sky-200 transition-all duration-300 hover:border-sky-400/50 hover:bg-sky-400/10 sm:flex sm:items-center sm:gap-2"
            >
              {/* Shine */}

              <motion.span
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              />

              <span className="relative z-10">
                Let&apos;s talk
              </span>

              <ArrowUpRight
                size={15}
                className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.a>

            {/* Mobile menu */}

            <motion.button
              whileTap={{
                scale: 0.9,
              }}
              onClick={() =>
                setMobileOpen(!mobileOpen)
              }
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-400 transition-colors hover:border-sky-400/30 hover:text-sky-300 md:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X size={19} />
              ) : (
                <Menu size={19} />
              )}
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
                duration: 0.3,
              }}
              className="overflow-hidden border-t border-white/[0.06] md:hidden"
            >
              <div className="space-y-1 px-4 py-4">
                {links.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={closeMobile}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm text-zinc-400 transition-all hover:bg-sky-400/[0.06] hover:text-sky-300"
                  >
                    <span>{link.label}</span>

                    <ArrowUpRight size={15} />
                  </motion.a>
                ))}

                {/* Mobile CTA */}

                <motion.a
                  href={`https://wa.me/${profile.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobile}
                  className="mt-2 flex items-center justify-between rounded-xl border border-sky-400/20 bg-sky-400/[0.06] px-4 py-3.5 text-sm font-medium text-sky-300"
                >
                  <span>
                    Let&apos;s talk
                  </span>

                  <ArrowUpRight size={16} />
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* =====================================================
            BOTTOM GLOW
        ====================================================== */}

        <motion.div
          className="absolute bottom-0 left-1/2 h-px w-1/3 -translate-x-1/2 bg-sky-400"
          animate={{
            opacity: [0.15, 0.6, 0.15],
            width: ["20%", "45%", "20%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </header>
  );
}