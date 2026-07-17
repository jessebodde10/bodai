"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Bot, Workflow, TrendingUp, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/Button";

const cards = [
  {
    icon: Bot,
    title: "AI Agent",
    caption: "Leest, begrijpt en handelt af",
    detail: "Nieuwe lead ontvangen · beoordeeld in 4 sec.",
  },
  {
    icon: Workflow,
    title: "Automatisering",
    caption: "Verbindt je systemen",
    detail: "CRM bijgewerkt · offerte klaargezet",
  },
  {
    icon: TrendingUp,
    title: "Bedrijfsresultaat",
    caption: "Meetbaar elke maand",
    detail: "+38 uur bespaard deze week",
  },
];

function WorkflowVisual() {
  const reduce = useReducedMotion();
  return (
    <div className="relative mx-auto flex w-full max-w-sm flex-col items-center">
      {/* zachte gloed achter de visual */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.06] blur-3xl"
      />
      {cards.map((card, i) => (
        <div key={card.title} className="flex w-full flex-col items-center">
          {i > 0 && (
            <div className="relative h-14 w-px overflow-hidden bg-gradient-to-b from-accent/10 via-accent/40 to-accent/10">
              {!reduce && (
                <motion.span
                  className="absolute left-0 top-0 h-4 w-px bg-accent"
                  animate={{ y: [-16, 72] }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.8,
                    repeatDelay: 1.6,
                  }}
                />
              )}
            </div>
          )}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 + i * 0.2 }}
            style={
              reduce
                ? undefined
                : { animation: `float-a ${5 + i}s ease-in-out infinite` }
            }
            className="w-full rounded-2xl border border-line bg-card/90 p-5 shadow-[0_8px_40px_rgba(0,0,0,0.5)] backdrop-blur"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                <card.icon className="h-5 w-5 text-accent" aria-hidden />
              </span>
              <div>
                <p className="font-semibold">{card.title}</p>
                <p className="text-sm text-fg-muted">{card.caption}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 rounded-lg border border-line bg-bg/60 px-3 py-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-accent" aria-hidden />
              <span className="font-mono text-[11px] text-fg-muted">
                {card.detail}
              </span>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden pt-40 pb-24 lg:pt-48">
      {/* zachte gloed achter de headline */}
      <div
        aria-hidden
        className="absolute left-[8%] top-[6%] -z-10 h-[480px] w-[640px] rounded-full bg-accent/[0.05] blur-[140px]"
      />
      <div
        aria-hidden
        className="absolute right-[4%] top-[30%] -z-10 h-[380px] w-[380px] rounded-full bg-white/[0.03] blur-[120px]"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:px-8">
        <div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 font-mono text-xs text-fg-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              AI-consultancy &amp; implementatie voor het MKB
            </span>
          </motion.div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Van handmatig werk
            <br />
            naar <span className="text-accent">slimme systemen</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-fg-muted"
          >
            Bodai helpt bedrijven hun bedrijfsprocessen te automatiseren met
            AI-agents, slimme workflows en maatwerkoplossingen. Zo bespaar je
            tijd, verlaag je kosten en creëer je ruimte om te groeien.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="#contact" size="lg" withArrow>
              Plan gratis AI Scan
            </Button>
            <Button href="#oplossingen" size="lg" variant="secondary">
              Bekijk oplossingen
            </Button>
          </motion.div>

          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 font-mono text-xs text-fg-faint"
          >
            Vrijblijvend · 30 minuten · direct inzicht in je besparingspotentieel
          </motion.p>
        </div>

        <WorkflowVisual />
      </div>
    </section>
  );
}
