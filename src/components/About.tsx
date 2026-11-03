"use client";

import { Check } from "lucide-react";
import { profile, highlights, stats } from "@/lib/data";
import { Reveal, Section, SectionHeader, images } from "./ui";

export default function About() {
  return (
    <Section id="about" image={images.laptop}>
      <SectionHeader
        title="Building the whole product, not just one layer of it."
        text="Frontend, backend and everything between — owned by one person, so nothing gets lost in handoffs."
      />

      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        {/* ---------------- text ---------------- */}
        <Reveal direction="left" className="h-full">
          <div className="card flex h-full flex-col p-7 sm:p-9">
            <p className="text-[14px] leading-7 text-ink-2">{profile.bio}</p>

            <ul className="mt-7 grid gap-4 border-t border-line pt-7 sm:grid-cols-2">
              {highlights.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="black-panel mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full!">
                    <Check size={11} strokeWidth={2.4} />
                  </span>
                  <span className="text-[12.5px] leading-6 text-muted">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* ---------------- profile panel ---------------- */}
        <Reveal index={1} direction="right" className="h-full">
          <div className="black-panel flex h-full flex-col overflow-hidden p-7 sm:p-9">
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c9a464] to-transparent"
            />
            <p className="font-display text-xl text-white">{profile.name}</p>
            <p className="mt-1 text-[12.5px] text-white/60">{profile.role}</p>

            <dl className="mt-8 divide-y divide-white/10 border-t border-white/10">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center justify-between gap-4 py-3.5"
                >
                  <dt className="text-[12px] text-white/50">{s.label}</dt>
                  <dd className="text-right text-[12.5px] font-medium text-white">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
