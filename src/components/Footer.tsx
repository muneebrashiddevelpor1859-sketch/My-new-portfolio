"use client";

import { profile } from "@/lib/data";
import { Reveal } from "./ui";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-mist">
      <div className="container-x py-12">
        <Reveal>
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_auto] md:items-start">
            <div>
              <p className="font-display text-lg text-ink">{profile.name}</p>
              <p className="mt-2 max-w-xs text-[12.5px] leading-6 text-muted">
                {profile.role} based in {profile.location}, building full stack
                products with React, Next.js, Node.js and Express.
              </p>
            </div>

            <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-[12.5px] text-ink-2 transition-colors hover:text-ink"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex gap-6">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12.5px] text-ink-2 transition-colors hover:text-ink"
              >
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12.5px] text-ink-2 transition-colors hover:text-ink"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-[12px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </span>
          <span className="h-px w-24 bg-gradient-to-r from-gold to-transparent" />
        </div>
      </div>
    </footer>
  );
}
