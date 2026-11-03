"use client";

import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { Reveal, Section, SectionHeader, thumbs, hostOf } from "./ui";

export default function Projects() {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p !== featured);

  return (
    <Section id="work">
      <SectionHeader
        title="A few things I've built."
        text="A collection of digital products, interfaces and full-stack experiences crafted with modern technologies."
      />

      {/* ---------------- FEATURED ---------------- */}
      <Reveal direction="left">
        <a
          href={featured.link || "#"}
          target={featured.link ? "_blank" : undefined}
          rel={featured.link ? "noopener noreferrer" : undefined}
          className="group card grid overflow-hidden rounded-2xl! p-0 md:grid-cols-[1.1fr_0.9fr]"
        >
          {/* visual */}
          <div
            className="relative min-h-[260px] overflow-hidden md:min-h-[360px]"
            style={{
              backgroundColor: "#0b0b0c",
              backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.88) 0%, rgba(20,20,24,0.72) 55%, rgba(0,0,0,0.9) 100%), url(${thumbs[0]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-6 flex flex-col overflow-hidden rounded-xl border border-white/15 bg-black/40 backdrop-blur-sm transition-transform duration-700 group-hover:scale-[1.02] sm:inset-8">
              <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-white/30" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/10" />
                <span className="ml-3 truncate rounded-full bg-white/10 px-3 py-1 text-[10.5px] text-white/70">
                  {hostOf(featured.link) || "coming soon"}
                </span>
              </div>
              <div className="flex flex-1 items-center justify-center">
                <span className="font-display text-xl text-white/90 sm:text-2xl">
                  {featured.title}
                </span>
              </div>
            </div>
          </div>

          {/* content */}
          <div className="flex flex-col justify-center p-7 sm:p-9">
            <span className="chip w-fit">Featured project</span>
            <h3 className="mt-5 font-display text-xl font-medium tracking-tight text-ink sm:text-2xl">
              {featured.title}
            </h3>
            <p className="mt-3 max-w-md text-[13px] leading-6 text-muted">
              {featured.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {featured.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
            <span className="btn-black mt-7 w-fit">
              View live
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </div>
        </a>
      </Reveal>

      {/* ---------------- GRID ---------------- */}
      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {rest.map((project, index) => (
          <Reveal key={project.title} index={index % 4} direction={index % 4 < 2 ? "left" : "right"} className="h-full">
            <a
              href={project.link || "#"}
              target={project.link ? "_blank" : undefined}
              rel={project.link ? "noopener noreferrer" : undefined}
              className="group card gold-line flex h-full flex-col overflow-hidden p-0"
            >
              <div
                className="relative h-36 overflow-hidden"
                style={{ backgroundColor: "#e9e9e4" }}
              >
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.72) 100%), url(${thumbs[(index + 1) % thumbs.length]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <span className="absolute bottom-3 left-4 max-w-[80%] truncate rounded-full bg-white/90 px-3 py-1 text-[10.5px] text-ink">
                  {hostOf(project.link) || "coming soon"}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-[14px] font-semibold tracking-tight text-ink">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={15}
                    className="mt-0.5 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                  />
                </div>
                <p className="mt-2 line-clamp-3 text-[12.5px] leading-6 text-muted">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </Reveal>
        ))}

        {/* closing card keeps the grid even */}
        <Reveal index={rest.length % 4} direction={rest.length % 4 < 2 ? "left" : "right"} className="h-full">
          <a
            href="#contact"
            className="group black-panel flex h-full min-h-[260px] flex-col justify-between p-6 transition-transform duration-500 hover:-translate-y-1"
          >
            <span className="font-display text-lg leading-snug text-white">
              Your project could be next.
            </span>
            <span className="flex items-center gap-2 text-[12.5px] text-white/70 transition-colors group-hover:text-white">
              Start a conversation
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </a>
        </Reveal>
      </div>
    </Section>
  );
}
