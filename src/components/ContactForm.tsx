"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MessageCircle,
  Send,
  User,
} from "lucide-react";
import { profile } from "@/lib/data";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSent(false);

    if (!name.trim() || !message.trim()) {
      setError("Please add your name and a short message.");
      return;
    }

    const lines = [
      `New portfolio inquiry`,
      `Name: ${name.trim()}`,
      email.trim() ? `Email: ${email.trim()}` : null,
      `Message: ${message.trim()}`,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${profile.whatsapp}?text=${text}`;

    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex flex-col gap-5"
      noValidate
    >
      {/* Form intro */}
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/[0.07]">
            <Send
              size={17}
              className="text-sky-400"
              strokeWidth={1.8}
            />

            <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
          </div>

          <div>
            <p className="text-sm font-medium text-white">
              Send an inquiry
            </p>
            <p className="mt-0.5 text-[11px] text-slate-500">
              Usually replies within a day
            </p>
          </div>
        </div>

        <span className="hidden rounded-full border border-white/[0.07] px-3 py-1 text-[9px] uppercase tracking-[0.16em] text-slate-600 sm:block">
          Direct
        </span>
      </div>

      {/* Name */}
      <ModernField
        label="Name"
        icon={<User size={16} strokeWidth={1.7} />}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setError("");
            setSent(false);
          }}
          placeholder="Your name"
          className="modern-input"
        />
      </ModernField>

      {/* Email */}
      <ModernField
        label="Email"
        optional
        icon={<Mail size={16} strokeWidth={1.7} />}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setSent(false);
          }}
          placeholder="you@example.com"
          className="modern-input"
        />
      </ModernField>

      {/* Message */}
      <ModernField
        label="Message"
        icon={<MessageCircle size={16} strokeWidth={1.7} />}
      >
        <div className="relative">
          <textarea
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              setError("");
              setSent(false);
            }}
            placeholder="Tell me a little about your project or role."
            rows={5}
            maxLength={600}
            className="modern-input min-h-[140px] resize-none pr-16"
          />

          <span className="pointer-events-none absolute bottom-3 right-3 text-[10px] text-slate-600">
            {message.length}/600
          </span>
        </div>
      </ModernField>

      {/* Error */}
      <AnimatePresence mode="wait">
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            className="flex items-center gap-2 rounded-xl border border-red-400/15 bg-red-400/[0.05] px-4 py-3"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />

            <p className="text-xs text-red-300/80">
              {error}
            </p>
          </motion.div>
        )}

        {sent && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="flex items-start gap-3 rounded-xl border border-sky-400/15 bg-sky-400/[0.05] px-4 py-3"
          >
            <CheckCircle2
              size={17}
              className="mt-0.5 shrink-0 text-sky-400"
              strokeWidth={1.8}
            />

            <p className="text-xs leading-relaxed text-sky-200/70">
              WhatsApp is opening with your message ready to send — just hit
              send there to reach me.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit */}
      <motion.button
        type="submit"
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.98 }}
        className="group relative mt-1 flex w-full items-center justify-between overflow-hidden rounded-2xl border border-sky-400/30 bg-sky-400/[0.09] px-5 py-4 text-left transition-all duration-300 hover:border-sky-400/60 hover:bg-sky-400/[0.14] hover:shadow-[0_10px_40px_rgba(14,165,233,0.12)]"
      >
        {/* Button shine */}
        <motion.span
          className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent"
          animate={{ x: ["0%", "500%"] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut",
          }}
        />

        <span className="relative z-10 flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-400 text-[#021018]">
            <MessageCircle size={17} strokeWidth={2} />
          </span>

          <span>
            <span className="block text-sm font-semibold text-white">
              Send via WhatsApp
            </span>

            <span className="mt-0.5 block text-[10px] text-slate-500">
              Opens a ready-to-send message
            </span>
          </span>
        </span>

        <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03]">
          <ArrowUpRight
            size={17}
            className="text-sky-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </span>
      </motion.button>

      {/* Privacy / status */}
      <div className="flex items-center justify-between border-t border-white/[0.06] pt-4">
        <span className="flex items-center gap-2 text-[10px] text-slate-600">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400/70" />
          No spam. Just a direct conversation.
        </span>

        <span className="hidden text-[10px] uppercase tracking-[0.15em] text-slate-700 sm:block">
          WhatsApp
        </span>
      </div>

      <style jsx>{`
        .modern-input {
          width: 100%;
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.025);
          color: #e2e8f0;
          padding: 0.9rem 1rem;
          font-size: 0.875rem;
          line-height: 1.5;
          outline: none;
          transition:
            border-color 0.3s ease,
            background 0.3s ease,
            box-shadow 0.3s ease,
            transform 0.3s ease;
        }

        .modern-input::placeholder {
          color: rgba(100, 116, 139, 0.75);
        }

        .modern-input:hover {
          border-color: rgba(148, 163, 184, 0.18);
          background: rgba(255, 255, 255, 0.035);
        }

        .modern-input:focus {
          border-color: rgba(56, 189, 248, 0.55);
          background: rgba(14, 165, 233, 0.035);
          box-shadow:
            0 0 0 3px rgba(56, 189, 248, 0.06),
            0 0 30px rgba(14, 165, 233, 0.06);
          transform: translateY(-1px);
        }

        .modern-input:-webkit-autofill,
        .modern-input:-webkit-autofill:hover,
        .modern-input:-webkit-autofill:focus {
          -webkit-text-fill-color: #e2e8f0;
          -webkit-box-shadow: 0 0 0 1000px #071016 inset;
          transition: background-color 5000s ease-in-out 0s;
        }
      `}</style>
    </form>
  );
}

function ModernField({
  label,
  optional,
  icon,
  children,
}: {
  label: string;
  optional?: boolean;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <label className="group flex flex-col gap-2.5">
      <span className="flex items-center justify-between px-1">
        <span className="flex items-center gap-2 text-xs font-medium text-slate-400">
          <span className="text-sky-400/70">{icon}</span>
          {label}
        </span>

        {optional && (
          <span className="text-[9px] uppercase tracking-[0.15em] text-slate-700">
            Optional
          </span>
        )}
      </span>

      {children}
    </label>
  );
}