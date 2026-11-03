"use client";

import { motion } from "framer-motion";
import { process } from "@/lib/data";
import { EASE, Reveal, dirFor, Section, SectionHeader, images, videos } from "./ui";

export default function Process() {
  return (
    <Section id="process" image={images.circuit} video={videos.network} dark>
      <SectionHeader
        dark
        title="A steady process, not guesswork."
        text="Every project moves through a clear workflow designed to keep ideas focused, development efficient, and the final product scalable."
      />

      <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {/* connecting line (desktop) */}
        <motion.span
          aria-hidden
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: EASE }}
          className="absolute left-[8%] right-[8%] top-[46px] hidden h-px origin-left bg-gradient-to-r from-transparent via-white/40 to-transparent lg:block"
        />

        {process.map((item, index) => (
          <Reveal key={item.step} index={index} direction={dirFor(index, process.length)} className="h-full">
            <div className="card gold-line h-full p-7">
              <span className="black-panel relative z-10 flex h-10 w-10 items-center justify-center rounded-full! font-mono-ui text-[12px]">
                {item.step}
              </span>
              <h3 className="mt-6 text-[15px] font-semibold tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-[13px] leading-6 text-muted">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
