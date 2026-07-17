"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { Inbox, Cog, Send } from "lucide-react";

const flows = [
  {
    trigger: "Nieuwe lead via je website",
    action: "AI kwalificeert, verrijkt en scoort de lead",
    outcome: "Warme lead met context in je CRM, opvolging ingepland",
  },
  {
    trigger: "Factuur komt binnen per e-mail",
    action: "AI leest, controleert en boekt het document",
    outcome: "Verwerkt in je boekhouding, zonder overtypen",
  },
  {
    trigger: "Project wordt afgerond",
    action: "AI stelt factuur en evaluatie automatisch op",
    outcome: "Factuur verstuurd, feedback verzameld, dossier gesloten",
  },
];

/* fase binnen de actieve rij: 0 trigger, 1 puls 1, 2 automatisering, 3 puls 2, 4 resultaat */
const PHASE_DURATIONS = [900, 650, 1500, 650, 1800];

function Connector({ active }: { active: boolean }) {
  return (
    <div
      aria-hidden
      className="relative hidden h-px w-10 shrink-0 self-center bg-line lg:block"
    >
      {active && (
        <motion.span
          className="absolute -top-[3px] left-0 h-[7px] w-[7px] rounded-full bg-accent-fill shadow-[0_0_10px_rgba(184,255,61,0.7)]"
          initial={{ left: 0, opacity: 0 }}
          animate={{ left: 34, opacity: [0, 1, 1, 0] }}
          transition={{ duration: 0.65, ease: "easeInOut" }}
        />
      )}
    </div>
  );
}

type StepProps = {
  icon: typeof Inbox;
  label: string;
  text: string;
  lit: boolean;
  spinning?: boolean;
  accentTile?: boolean;
};

function Step({ icon: Icon, label, text, lit, spinning, accentTile }: StepProps) {
  return (
    <div
      className={`flex flex-1 items-center gap-4 rounded-xl border p-4 transition-all duration-400 ${
        lit
          ? "-translate-y-0.5 border-accent/40 bg-accent/[0.04]"
          : "border-transparent"
      }`}
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-400 ${
          accentTile || lit ? "bg-accent/15" : "bg-tile"
        }`}
      >
        <Icon
          className={`h-4 w-4 transition-colors duration-400 ${
            accentTile || lit ? "text-accent" : "text-fg-muted"
          } ${spinning ? "animate-spin [animation-duration:1.4s]" : ""}`}
          aria-hidden
        />
      </span>
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-faint">
          {label}
        </p>
        <p className="mt-0.5 font-medium">{text}</p>
      </div>
    </div>
  );
}

export function Automations() {
  const [activeRow, setActiveRow] = useState(0);
  const [phase, setPhase] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { margin: "-15%" });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !inView) return;
    const timer = setTimeout(() => {
      if (phase < PHASE_DURATIONS.length - 1) {
        setPhase(phase + 1);
      } else {
        setPhase(0);
        setActiveRow((activeRow + 1) % flows.length);
      }
    }, PHASE_DURATIONS[phase]);
    return () => clearTimeout(timer);
  }, [phase, activeRow, inView, reduce]);

  return (
    <section
      id="automatiseringen"
      ref={sectionRef}
      className="scroll-mt-20 border-t border-line py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Automatiseringen"
          title={
            <>
              Workflows die je systemen{" "}
              <span className="text-accent">met elkaar laten samenwerken</span>
            </>
          }
          description="Je CRM, e-mail, boekhouding en planning werken vandaag langs elkaar heen. Wij verbinden ze met slimme workflows, zodat werk automatisch van A naar B stroomt, zonder dat iemand ernaar hoeft om te kijken."
        />

        <div className="mt-14 flex flex-col gap-4">
          {flows.map((f, i) => {
            const rowActive = !reduce && inView && i === activeRow;
            return (
              <Reveal key={f.trigger} delay={i * 0.08}>
                <div
                  className={`flex flex-col gap-2 rounded-2xl border bg-card p-3 transition-colors duration-500 sm:p-4 lg:flex-row lg:items-stretch ${
                    rowActive ? "border-line-strong" : "border-line"
                  }`}
                >
                  <Step
                    icon={Inbox}
                    label="Trigger"
                    text={f.trigger}
                    lit={rowActive && phase >= 0}
                  />
                  <Connector active={rowActive && phase === 1} />
                  <Step
                    icon={Cog}
                    label="Automatisering"
                    text={f.action}
                    lit={rowActive && phase >= 2}
                    spinning={rowActive && phase >= 2 && phase < 4}
                    accentTile
                  />
                  <Connector active={rowActive && phase === 3} />
                  <Step
                    icon={Send}
                    label="Resultaat"
                    text={f.outcome}
                    lit={rowActive && phase >= 4}
                  />
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-8 text-fg-muted">
            We koppelen met de systemen die je al gebruikt: van Exact en AFAS
            tot HubSpot, Outlook en meer dan 1.000 andere tools.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
