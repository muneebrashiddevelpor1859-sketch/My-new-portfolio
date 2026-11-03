"use client";

import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { profile } from "@/lib/data";
import ContactForm from "./ContactForm";
import { Reveal, Section, SectionHeader, images } from "./ui";

export default function Contact() {
  const items = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: `+${profile.whatsapp}`,
      href: `https://wa.me/${profile.whatsapp}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: profile.location,
      href: "",
    },
  ];

  return (
    <Section id="contact" image={images.desk} dark>
      <SectionHeader
        dark
        title="Let's talk about your project."
        text="Tell me what you're building. I reply within a day, usually sooner."
      />

      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        {/* ---------------- details ---------------- */}
        <Reveal direction="left" className="h-full">
          <div className="black-panel flex h-full flex-col justify-between p-7 sm:p-9">
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c9a464] to-transparent"
            />
            <div>
              <p className="font-display text-xl text-white">{profile.name}</p>
              <p className="mt-1 text-[12.5px] text-white/60">{profile.role}</p>
            </div>

            <ul className="mt-10 divide-y divide-white/10 border-t border-white/10">
              {items.map(({ icon: Icon, label, value, href }) => {
                const inner = (
                  <>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/80">
                      <Icon size={15} strokeWidth={1.7} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[11px] text-white/45">
                        {label}
                      </span>
                      <span className="mt-0.5 block truncate text-[13px] text-white">
                        {value}
                      </span>
                    </span>
                    {href && (
                      <ArrowUpRight
                        size={15}
                        className="shrink-0 text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                      />
                    )}
                  </>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="group flex items-center gap-4 py-4"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 py-4">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>

        {/* ---------------- form ---------------- */}
        <Reveal index={1} direction="right" className="h-full">
          <div className="card card-static h-full p-7 sm:p-9">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
