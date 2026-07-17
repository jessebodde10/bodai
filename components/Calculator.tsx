"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";

const AUTOMATION_FACTOR = 0.7;

function formatEuro(n: number) {
  return "€ " + Math.round(n).toLocaleString("nl-NL");
}

type StepperProps = {
  label: string;
  value: number;
  unit: string;
  prefix?: string;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
};

function Stepper({ label, value, unit, prefix, min, max, step, onChange }: StepperProps) {
  const clamp = (v: number) => Math.min(max, Math.max(min, v));
  return (
    <div className="border-b border-line pb-5">
      <label className="text-sm font-semibold">{label}</label>
      <div className="mt-3 flex items-center justify-between gap-4">
        <div className="flex items-baseline gap-2">
          {prefix && <span className="text-lg text-fg-muted">{prefix}</span>}
          <input
            type="number"
            value={value}
            min={min}
            max={max}
            onChange={(e) => onChange(clamp(Number(e.target.value) || min))}
            className="w-16 bg-transparent text-2xl font-bold tracking-tight outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            aria-label={label}
          />
          <span className="font-mono text-xs text-fg-faint">{unit}</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onChange(clamp(value - step))}
            aria-label={`${label} verlagen`}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-fg-muted transition-colors hover:border-line-strong hover:text-fg"
          >
            <Minus className="h-4 w-4" aria-hidden />
          </button>
          <button
            onClick={() => onChange(clamp(value + step))}
            aria-label={`${label} verhogen`}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-fg-muted transition-colors hover:border-line-strong hover:text-fg"
          >
            <Plus className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
}

export function Calculator() {
  const [people, setPeople] = useState(3);
  const [hours, setHours] = useState(8);
  const [rate, setRate] = useState(30);

  const savedHoursWeek = people * hours * AUTOMATION_FACTOR;
  const savedEuroWeek = savedHoursWeek * rate;

  const rows = [
    {
      label: "Per week",
      euro: savedEuroWeek,
      hours: savedHoursWeek,
      highlight: false,
    },
    {
      label: "Per maand",
      euro: (savedEuroWeek * 52) / 12,
      hours: (savedHoursWeek * 52) / 12,
      highlight: false,
    },
    {
      label: "Per jaar",
      euro: savedEuroWeek * 52,
      hours: savedHoursWeek * 52,
      highlight: true,
    },
  ];

  return (
    <section id="calculator" className="scroll-mt-20 border-t border-line py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Bereken je besparing"
          title={
            <>
              Reken uit wat automatisering{" "}
              <span className="text-accent">jou oplevert</span>
            </>
          }
          description="Vul drie getallen in en zie direct wat je per week, maand en jaar terugwint."
          align="center"
        />

        <Reveal delay={0.15}>
          <div className="mx-auto mt-14 max-w-5xl rounded-3xl border border-line bg-card p-8 sm:p-12">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* invoer */}
              <div className="flex flex-col gap-6">
                <Stepper
                  label="Medewerkers die handmatig werk doen"
                  value={people}
                  unit="personen"
                  min={1}
                  max={250}
                  step={1}
                  onChange={setPeople}
                />
                <Stepper
                  label="Uren handmatig werk per medewerker per week"
                  value={hours}
                  unit="uur"
                  min={1}
                  max={40}
                  step={1}
                  onChange={setHours}
                />
                <Stepper
                  label="Gemiddeld uurloon"
                  value={rate}
                  unit="per uur"
                  prefix="€"
                  min={10}
                  max={200}
                  step={5}
                  onChange={setRate}
                />
              </div>

              {/* resultaat */}
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                  Potentiële besparing
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  {rows.map((r) => (
                    <div
                      key={r.label}
                      className={`flex items-baseline justify-between rounded-xl border px-5 py-4 ${
                        r.highlight
                          ? "border-accent/30 bg-accent/[0.06]"
                          : "border-line bg-bg/50"
                      }`}
                    >
                      <span
                        className={`text-sm font-medium ${
                          r.highlight ? "text-accent" : "text-fg-muted"
                        }`}
                      >
                        {r.label}
                      </span>
                      <span className="flex items-baseline gap-3">
                        <span
                          className={`font-bold tracking-tight ${
                            r.highlight ? "text-3xl" : "text-2xl"
                          }`}
                        >
                          {formatEuro(r.euro)}
                        </span>
                        <span className="font-mono text-[11px] text-fg-faint">
                          · {Math.round(r.hours)} uur
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-xs leading-relaxed text-fg-faint">
                  Berekening op basis van een geschatte automatiseringswinst van
                  70% bij terugkerend handmatig werk. De werkelijke besparing
                  hangt af van je processen.
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center gap-6 border-t border-line pt-10 text-center">
              <p className="max-w-md text-fg-muted">
                Dit is tijd en capaciteit die je direct terugwint zodra je
                processen geautomatiseerd zijn.
              </p>
              <Button href="#contact" size="lg" withArrow>
                Plan een verkenningsgesprek
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
