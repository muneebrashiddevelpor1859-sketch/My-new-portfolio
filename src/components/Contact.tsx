"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  MapPin,
  Sparkles,
  Send,
  Globe2,
} from "lucide-react";
import { profile } from "@/lib/data";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-white/[0.06] bg-[#02060a]"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56,189,248,0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,0.055) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
        aria-hidden
      />

      {/* Ambient glow */}
      <motion.div
        className="pointer-events-none absolute left-[-180px] top-[15%] h-[450px] w-[450px] rounded-full bg-sky-500/[0.08] blur-[120px]"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.5, 0.85, 0.5],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden
      />

      <motion.div
        className="pointer-events-none absolute bottom-[-180px] right-[-100px] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.06] blur-[130px]"
        animate={{
          scale: [1.1, 0.9, 1.1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden
      />

      {/* Moving line */}
      <motion.div
        className="pointer-events-none absolute left-[-20%] top-[18%] h-px w-[35%]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(56,189,248,0.7), transparent)",
        }}
        animate={{ x: ["0%", "380%"] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-sky-400/20 bg-sky-400/[0.07]">
              <Sparkles
                size={15}
                className="text-sky-400"
                strokeWidth={1.8}
              />
            </span>

            <span className="text-xs font-medium uppercase tracking-[0.25em] text-sky-400">
              Contact
            </span>
          </div>

          <div className="hidden items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-slate-600 sm:flex">
            <span>Available</span>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400" />
            </span>
          </div>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80, y: 35 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            {/* Vertical accent */}
            <div className="absolute -left-4 top-2 hidden h-24 w-px bg-gradient-to-b from-sky-400/80 via-sky-400/20 to-transparent lg:block" />

            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-slate-500">
              Start a conversation
            </p>

            <h2 className="font-display max-w-lg text-4xl leading-[1.08] tracking-tight text-white sm:text-5xl">
              Have a project in mind?
              <span className="mt-1 block text-sky-400">
                Let&apos;s talk.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-slate-400">
              Fill in the form and it opens WhatsApp with your message ready
              to send straight to me — or reach out directly below.
            </p>

            {/* Contact information */}
            <div className="mt-10 space-y-3">
              {/* WhatsApp */}
              <motion.a
                href={`https://wa.me/${profile.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 6 }}
                className="group flex max-w-md items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 backdrop-blur-md transition-all duration-300 hover:border-sky-400/25 hover:bg-sky-400/[0.035]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sky-400/15 bg-sky-400/[0.07]">
                  <MessageCircle
                    size={19}
                    className="text-sky-400"
                    strokeWidth={1.7}
                  />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] uppercase tracking-[0.18em] text-slate-600">
                    WhatsApp
                  </span>

                  <span className="mt-1 block truncate text-sm text-slate-200">
                    +{profile.whatsapp}
                  </span>
                </span>

                <ArrowUpRight
                  size={17}
                  className="text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-400"
                />
              </motion.a>

              {/* Email */}
              <motion.a
                href={`mailto:${profile.email}`}
                whileHover={{ x: 6 }}
                className="group flex max-w-md items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 backdrop-blur-md transition-all duration-300 hover:border-sky-400/25 hover:bg-sky-400/[0.035]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035]">
                  <Mail
                    size={18}
                    className="text-sky-400"
                    strokeWidth={1.7}
                  />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] uppercase tracking-[0.18em] text-slate-600">
                    Email
                  </span>

                  <span className="mt-1 block truncate text-sm text-slate-200">
                    {profile.email}
                  </span>
                </span>

                <ArrowUpRight
                  size={17}
                  className="text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-400"
                />
              </motion.a>

              {/* Location */}
              <motion.div
                whileHover={{ x: 6 }}
                className="flex max-w-md items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 backdrop-blur-md"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035]">
                  <MapPin
                    size={18}
                    className="text-sky-400"
                    strokeWidth={1.7}
                  />
                </span>

                <span>
                  <span className="block text-[10px] uppercase tracking-[0.18em] text-slate-600">
                    Location
                  </span>

                  <span className="mt-1 block text-sm text-slate-300">
                    {profile.location}
                  </span>
                </span>
              </motion.div>
            </div>

            {/* Mini footer */}
            <div className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-slate-600">
              <Globe2 size={13} className="text-sky-500/70" />
              <span>Remote &amp; Worldwide</span>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 80, y: 45 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              delay: 0.15,
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            {/* Outer glow */}
            <div
              className="pointer-events-none absolute -inset-1 rounded-[30px] bg-sky-400/[0.05] blur-xl"
              aria-hidden
            />

            <div className="relative overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#071016]/80 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              {/* Form header */}
              <div className="mb-8 flex items-center justify-between border-b border-white/[0.07] pb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <Send
                      size={16}
                      className="text-sky-400"
                      strokeWidth={1.8}
                    />

                    <span className="text-sm font-medium text-white">
                      Project details
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-slate-500">
                    Tell me what you&apos;re looking to build.
                  </p>
                </div>

                <div className="hidden rounded-full border border-sky-400/15 bg-sky-400/[0.06] px-3 py-1.5 text-[9px] uppercase tracking-[0.15em] text-sky-400 sm:block">
                  Secure
                </div>
              </div>

              {/* Existing form */}
              <ContactForm />

              {/* Bottom accent */}
              <motion.div
                className="absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-transparent via-sky-400/60 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 1 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mt-16 h-px origin-left bg-gradient-to-r from-sky-400/40 via-white/[0.08] to-transparent"
        />

        <div className="mt-5 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-slate-700">
          <span>Let&apos;s create something meaningful</span>
          <span className="hidden sm:block">Muneeb Ahmed · Full Stack Developer</span>
        </div>
      </div>
    </section>
  );
}