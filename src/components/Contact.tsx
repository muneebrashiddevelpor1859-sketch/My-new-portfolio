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
      className="relative overflow-hidden border-b border-slate-200 bg-[#f7f6f2] text-slate-900"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {/* Soft grid */}
        <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(15,23,42,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(15,23,42,0.035) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />

        {/* Amber organic glow */}
        <motion.div
          className="absolute -left-40 top-[8%] h-[500px] w-[500px] rounded-full bg-amber-300/[0.14] blur-[110px]"
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.45, 0.7, 0.45],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Violet organic glow */}
        <motion.div
          className="absolute -right-40 bottom-[5%] h-[520px] w-[520px] rounded-full bg-violet-300/[0.11] blur-[120px]"
          animate={{
            scale: [1.1, 0.9, 1.1],
            opacity: [0.35, 0.6, 0.35],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Decorative circle */}
        <motion.div
          className="absolute right-[8%] top-[12%] h-32 w-32 rounded-full border border-amber-900/[0.08]"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="absolute right-[11%] top-[15%] h-20 w-20 rounded-full border border-violet-900/[0.06]" />
      </div>

      {/* =====================================================
          MAIN
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28 lg:px-14 xl:px-20">
        {/* =================================================
            TOP LABEL
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-900/[0.08] bg-white shadow-sm">
              <Sparkles
                size={15}
                className="text-amber-600"
                strokeWidth={1.8}
              />
            </span>

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-600">
              Contact
            </span>
          </div>

          <div className="hidden items-center gap-3 rounded-full border border-slate-900/[0.07] bg-white/70 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500 shadow-sm backdrop-blur-sm sm:flex">
            <span>Available</span>

            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
          </div>
        </motion.div>

        {/* =================================================
            CONTENT GRID
        ================================================== */}

        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* =================================================
              LEFT
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -70, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            {/* Small editorial number */}
            <div className="mb-8 flex items-center gap-4">
              <span className="font-mono text-[11px] font-medium tracking-[0.2em] text-slate-400">
                01
              </span>

              <span className="h-px w-12 bg-slate-300" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Start a conversation
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-display max-w-xl text-5xl font-medium leading-[0.98] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-[4.5rem]">
              Have a project
              <span className="block">in mind?</span>

              <span className="relative mt-2 inline-block text-amber-600">
                Let&apos;s talk.
                <span className="absolute -bottom-2 left-0 h-[3px] w-[78%] rounded-full bg-amber-400/70" />
              </span>
            </h2>

            <p className="mt-8 max-w-md text-base leading-7 text-slate-500">
              Fill in the form and it opens WhatsApp with your message ready
              to send straight to me — or reach out directly below.
            </p>

            {/* =================================================
                CONTACT CARDS
            ================================================== */}

            <div className="mt-11 space-y-3">
              {/* WhatsApp */}
              <motion.a
                href={`https://wa.me/${profile.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 7 }}
                className="group relative flex max-w-md items-center gap-4 overflow-hidden rounded-2xl border border-slate-900/[0.08] bg-white/80 p-4 shadow-[0_10px_35px_rgba(15,23,42,0.045)] backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/30 hover:bg-white hover:shadow-[0_15px_40px_rgba(15,23,42,0.08)]"
              >
                {/* Accent */}
                <div className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-emerald-500 transition-transform duration-300 group-hover:scale-y-100" />

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 ring-1 ring-emerald-600/10">
                  <MessageCircle
                    size={19}
                    className="text-emerald-600"
                    strokeWidth={1.7}
                  />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    WhatsApp
                  </span>

                  <span className="mt-1 block truncate text-sm font-medium text-slate-800">
                    +{profile.whatsapp}
                  </span>
                </span>

                <ArrowUpRight
                  size={17}
                  className="text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-emerald-600"
                />
              </motion.a>

              {/* Email */}
              <motion.a
                href={`mailto:${profile.email}`}
                whileHover={{ x: 7 }}
                className="group relative flex max-w-md items-center gap-4 overflow-hidden rounded-2xl border border-slate-900/[0.08] bg-white/80 p-4 shadow-[0_10px_35px_rgba(15,23,42,0.045)] backdrop-blur-sm transition-all duration-300 hover:border-violet-500/30 hover:bg-white hover:shadow-[0_15px_40px_rgba(15,23,42,0.08)]"
              >
                <div className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-violet-500 transition-transform duration-300 group-hover:scale-y-100" />

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50 ring-1 ring-violet-600/10">
                  <Mail
                    size={18}
                    className="text-violet-600"
                    strokeWidth={1.7}
                  />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Email
                  </span>

                  <span className="mt-1 block truncate text-sm font-medium text-slate-800">
                    {profile.email}
                  </span>
                </span>

                <ArrowUpRight
                  size={17}
                  className="text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-600"
                />
              </motion.a>

              {/* Location */}
              <motion.div
                whileHover={{ x: 7 }}
                className="group relative flex max-w-md items-center gap-4 overflow-hidden rounded-2xl border border-slate-900/[0.08] bg-white/80 p-4 shadow-[0_10px_35px_rgba(15,23,42,0.045)] backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-[0_15px_40px_rgba(15,23,42,0.08)]"
              >
                <div className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-amber-500 transition-transform duration-300 group-hover:scale-y-100" />

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 ring-1 ring-amber-600/10">
                  <MapPin
                    size={18}
                    className="text-amber-600"
                    strokeWidth={1.7}
                  />
                </span>

                <span>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Location
                  </span>

                  <span className="mt-1 block text-sm font-medium text-slate-700">
                    {profile.location}
                  </span>
                </span>
              </motion.div>
            </div>

            {/* Remote */}
            <div className="mt-8 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900">
                <Globe2 size={13} className="text-white" />
              </span>

              <span>Remote &amp; Worldwide</span>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT FORM
          ================================================== */}

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
            {/* Decorative offset layer */}
            <div className="absolute -right-3 -top-3 h-full w-full rounded-[30px] border border-violet-200/60 bg-violet-50/30" />

            <div className="absolute -bottom-3 -left-3 h-full w-full rounded-[30px] border border-amber-200/60 bg-amber-50/20" />

            {/* Main form card */}
            <div className="relative overflow-hidden rounded-[28px] border border-slate-900/[0.09] bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.10)] sm:p-8">
              {/* Top corner decoration */}
              <div className="pointer-events-none absolute right-0 top-0 h-36 w-36 rounded-bl-full bg-amber-100/70" />

              <div className="pointer-events-none absolute right-7 top-7 h-16 w-16 rounded-full border border-amber-300/50" />

              {/* Form Header */}
              <div className="relative mb-8 flex items-start justify-between border-b border-slate-200 pb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-950">
                      <Send
                        size={14}
                        className="text-amber-400"
                        strokeWidth={1.8}
                      />
                    </span>

                    <span className="text-sm font-semibold text-slate-900">
                      Project details
                    </span>
                  </div>

                  <p className="mt-3 text-xs leading-5 text-slate-500">
                    Tell me what you&apos;re looking to build.
                  </p>
                </div>

                <div className="hidden rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-emerald-700 sm:block">
                  Secure
                </div>
              </div>

              {/* Existing Form */}
              <ContactForm />

              {/* Bottom accent */}
              <motion.div
                className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-gradient-to-r from-amber-400 via-violet-400 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 1 }}
              />
            </div>
          </motion.div>
        </div>

        {/* =================================================
            BOTTOM LINE
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mt-20 h-px origin-left bg-gradient-to-r from-amber-400/70 via-slate-300 to-transparent"
        />

        <div className="mt-5 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
          <span>Let&apos;s create something meaningful</span>

          <span className="hidden sm:block">
            Muneeb Ahmed · Full Stack Developer
          </span>
        </div>
      </div>
    </section>
  );
}