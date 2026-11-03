"use client";

import { LayoutPanelLeft, Server, Layers } from "lucide-react";
import { services } from "@/lib/data";
import { Reveal, dirFor, Section, SectionHeader, images, videos } from "./ui";

const icons = {
  layout: LayoutPanelLeft,
  server: Server,
  layers: Layers,
};

export default function Services() {
  return (
    <Section id="services" image={images.workspace} video={videos.code} dark>
      <SectionHeader
        dark
        title="End to end, without handoffs."
        text="From polished interfaces to complete backend systems, I build scalable digital experiences from start to finish."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {services.map((service, index) => {
          const Icon = icons[service.icon as keyof typeof icons];
          return (
            <Reveal key={service.title} index={index} direction={dirFor(index, services.length)} className="h-full">
              <div className="card gold-line flex h-full flex-col p-7">
                <span className="black-panel flex h-11 w-11 items-center justify-center rounded-xl!">
                  <Icon size={18} strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 text-[15px] font-semibold tracking-tight text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-[13px] leading-6 text-muted">
                  {service.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
