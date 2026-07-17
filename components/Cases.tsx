"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

type Project = {
  type: "Website" | "Web-app";
  title: string;
  description: string;
  tags: string[];
  url: string;
  domain: string;
  image: string;
};

const projects: Project[] = [
  {
    type: "Website",
    title: "Happy Face, schoonheidssalon",
    description:
      "Complete website voor een schoonheidssalon in Rijswijk: behandelingen, merken en contact, met een warme en persoonlijke uitstraling.",
    tags: ["Next.js", "Responsive", "SEO"],
    url: "https://happy-face.nl",
    domain: "happy-face.nl",
    image: "/cases/happy-face.webp",
  },
  {
    type: "Website",
    title: "Connect & Rise, ademcoach",
    description:
      "Website voor een ademcoach met workshops en circles rond ouder & kind, gericht op rust, ruimte en verbinding.",
    tags: ["Next.js", "Responsive", "SEO"],
    url: "https://connectrise.nl",
    domain: "connectrise.nl",
    image: "/cases/connect-rise.webp",
  },
  {
    type: "Website",
    title: "De Groeituin, kinderopvang",
    description:
      "Website voor een kinderopvang met dagverblijf, peuteropvang en BSO: een warme uitstraling, heldere informatie per leeftijd en in een paar klikken een rondleiding plannen.",
    tags: ["Next.js", "Responsive", "SEO"],
    url: "https://groeituin.vercel.app",
    domain: "groeituin.vercel.app",
    image: "/cases/groeituin.webp",
  },
  {
    type: "Web-app",
    title: "Freezo, freelance dashboard",
    description:
      "Een centraal dashboard voor zelfstandige professionals om hun werk te organiseren en beheren. Alles op één plek, overzichtelijk en snel.",
    tags: ["Next.js", "Supabase", "Dashboard"],
    url: "https://freezo.nl",
    domain: "freezo.nl",
    image: "/cases/freezo.webp",
  },
];

const filters = ["Alles", "Website", "Web-app"] as const;

export function Cases() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Alles");
  const visible =
    filter === "Alles" ? projects : projects.filter((p) => p.type === filter);

  return (
    <section id="cases" className="scroll-mt-20 border-t border-line py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title={
            <>
              Een greep uit{" "}
              <span className="text-accent">wat we bouwen</span>
            </>
          }
          description="Concrete oplossingen voor concrete problemen. Van automatisering tot webapplicatie."
        />

        <Reveal delay={0.1}>
          <div
            className="mt-12 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Portfolio filteren op type"
          >
            {filters.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={f === filter}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                  f === filter
                    ? "border-accent-fill bg-accent-fill text-black"
                    : "border-line text-fg-muted hover:border-line-strong hover:text-fg"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {visible.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card transition-all duration-200 hover:-translate-y-1 hover:border-accent/30"
              >
                <div className="relative h-64 overflow-hidden border-b border-line">
                  <div className="absolute left-4 top-4 z-10 rounded-full border border-line bg-bg/80 px-3 py-1 font-mono text-[11px] text-fg-muted backdrop-blur">
                    {p.domain}
                  </div>
                  <Image
                    src={p.image}
                    alt={`Screenshot van ${p.title}`}
                    width={1280}
                    height={3200}
                    sizes="(min-width: 1024px) 580px, (min-width: 640px) 45vw, 100vw"
                    className="w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    style={{ height: "auto", minHeight: "100%" }}
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-accent/10 px-3 py-1 font-mono text-[11px] text-accent">
                      {p.type}
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 text-fg-faint transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                      aria-hidden
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-bold">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-fg-muted">
                    {p.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-line px-3 py-1 text-xs text-fg-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
