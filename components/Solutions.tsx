import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { ArrowDown } from "lucide-react";

const solutions = [
  {
    problem: "Leads blijven dagen liggen voordat iemand reageert",
    solution:
      "Een AI-agent kwalificeert elke lead binnen seconden en zet de opvolging automatisch klaar",
    result: "40% snellere opvolging, hogere conversie",
  },
  {
    problem: "Offertes maken kost je team elke week uren",
    solution:
      "AI stelt de offerte op basis van jouw prijzen, voorwaarden en eerdere projecten. Jij keurt alleen goed",
    result: "Van 45 minuten naar 2 minuten per offerte",
  },
  {
    problem: "Facturen en administratie stapelen zich op",
    solution:
      "Documenten worden automatisch herkend, verwerkt en geboekt in je boekhoudsysteem",
    result: "70% minder handmatig werk, minder fouten",
  },
  {
    problem: "Klantvragen komen op alle kanalen tegelijk binnen",
    solution:
      "Een support-agent beantwoordt standaardvragen direct en zet complexe vragen door naar je team",
    result: "24/7 bereikbaar zonder extra personeel",
  },
];

export function Solutions() {
  return (
    <section id="oplossingen" className="scroll-mt-20 border-t border-line py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Oplossingen"
          title={
            <>
              Van probleem naar{" "}
              <span className="text-accent">meetbaar resultaat</span>
            </>
          }
          description="We verkopen geen software of losse tools. We nemen een concreet probleem in jouw bedrijf en lossen het op met AI, met een resultaat dat je terugziet in je cijfers."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          {solutions.map((s, i) => (
            <Reveal key={s.problem} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-card p-7 transition-colors duration-200 hover:border-line-strong">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-faint">
                  Probleem
                </span>
                <p className="mt-2 text-lg font-semibold leading-snug">
                  {s.problem}
                </p>

                <ArrowDown className="my-4 h-4 w-4 text-accent/60" aria-hidden />

                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-faint">
                  Oplossing
                </span>
                <p className="mt-2 leading-relaxed text-fg-muted">{s.solution}</p>

                <div className="mt-auto pt-6">
                  <div className="rounded-xl border border-accent/20 bg-accent/[0.06] px-4 py-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                      Resultaat
                    </span>
                    <p className="mt-1 font-semibold">{s.result}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
