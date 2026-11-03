"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal, images } from "./ui";

export default function CtaBanner() {
  return (
    <section id="contact-cta" className="relative border-b border-line bg-mist py-4 lg:py-6">
      <div className="container-x">
        <Reveal direction="left">
          <div
            className="relative overflow-hidden rounded-2xl px-7 py-12 text-white sm:px-12 lg:py-14"
            style={{
              backgroundColor: "#000",
              backgroundImage: `linear-gradient(115deg, rgba(0,0,0,0.96) 0%, rgba(20,20,24,0.88) 55%, rgba(0,0,0,0.94) 100%), url(${images.code})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0 40px 80px -40px rgba(0,0,0,0.7)",
            }}
          >
            {/* the one ambient motion on this section */}
            <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden">
              <span
                className="block h-px w-1/5 bg-gradient-to-r from-transparent via-[#c9a464] to-transparent"
                style={{ animation: "sweep 6s linear infinite" }}
              />
            </div>

            <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div className="max-w-2xl">
                <h2 className="font-display text-2xl font-medium leading-[1.2] tracking-[-0.02em] sm:text-[1.9rem]">
                  Have an idea worth building well?
                </h2>
                <p className="mt-4 max-w-md text-[13px] leading-6 text-white/60">
                  I take on a limited number of projects at a time, so I can
                  actually focus on each one.
                </p>
                <p className="mt-6 flex items-center gap-2.5 text-[12px] text-white/70">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c9a464] opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c9a464]" />
                  </span>
                  Available for select projects
                </p>
              </div>

              <a href="#contact" className="btn-light w-fit">
                Start a conversation
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
