"use client";

import { Code2, LayoutPanelLeft, Server } from "lucide-react";
import { skillGroups } from "@/lib/data";
import { Reveal, dirFor, Section, SectionHeader } from "./ui";

const groupIcons = [Code2, LayoutPanelLeft, Server];

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        title="The tools I reach for."
        text="A modern full-stack toolkit for building fast interfaces, scalable applications, and complete backend systems."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = groupIcons[index % groupIcons.length];
          return (
            <Reveal key={group.category} index={index} direction={dirFor(index, skillGroups.length)} className="h-full">
              <div className="card gold-line h-full p-7">
                <div className="flex items-center gap-3">
                  <span className="black-panel flex h-10 w-10 items-center justify-center rounded-xl!">
                    <Icon size={17} strokeWidth={1.6} />
                  </span>
                  <h3 className="text-[14px] font-semibold tracking-tight text-ink">
                    {group.category}
                  </h3>
                </div>

                <ul className="mt-6 divide-y divide-line border-t border-line">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center justify-between py-3 text-[13px] text-ink-2"
                    >
                      {item}
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
