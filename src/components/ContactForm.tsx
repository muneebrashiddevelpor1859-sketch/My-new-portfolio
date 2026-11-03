"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, MessageCircle } from "lucide-react";
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div>
        <p className="text-[14px] font-semibold tracking-tight text-ink">
          Send an inquiry
        </p>
        <p className="mt-1 text-[12px] text-muted">Usually replies within a day</p>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-[12px] font-medium text-ink-2">
          Name
        </span>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setError("");
            setSent(false);
          }}
          placeholder="Your name"
          className="field"
        />
      </label>

      <label className="block">
        <span className="mb-1.5 flex items-center justify-between text-[12px] font-medium text-ink-2">
          Email
          <span className="font-normal text-muted">Optional</span>
        </span>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setSent(false);
          }}
          placeholder="you@example.com"
          className="field"
        />
      </label>

      <label className="block">
        <span className="mb-1.5 flex items-center justify-between text-[12px] font-medium text-ink-2">
          Message
          <span className="font-normal text-muted">{message.length}/600</span>
        </span>
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
          className="field min-h-[130px] resize-none"
        />
      </label>

      <AnimatePresence mode="wait">
        {error && (
          <motion.p
            key="error"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[12px] text-red-700"
          >
            {error}
          </motion.p>
        )}
        {sent && (
          <motion.p
            key="sent"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-2.5 rounded-xl border border-line bg-white px-4 py-3 text-[12px] leading-5 text-ink-2"
          >
            <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-gold" />
            WhatsApp is opening with your message ready to send. Hit send there
            to reach me.
          </motion.p>
        )}
      </AnimatePresence>

      <button type="submit" className="btn-black group w-full justify-between py-3.5!">
        <span className="flex items-center gap-2.5">
          <MessageCircle size={15} strokeWidth={1.9} />
          Send via WhatsApp
        </span>
        <ArrowUpRight
          size={15}
          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </button>
    </form>
  );
}
