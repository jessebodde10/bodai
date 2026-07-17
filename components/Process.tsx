import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { Search, Map, Hammer, Rocket, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Analyse",
    text: "We brengen je processen in kaart en berekenen waar AI de meeste tijd en kosten bespaart.",
    duration: "Week 1",
  },
  {
    icon: Map,
    title: "Strategie",
    text: "Je krijgt een concreet plan: welke processen we automatiseren, in welke volgorde en wat het oplevert.",
    duration: "Week 2",
  },
  {
    icon: Hammer,
    title: "Ontwikkeling",
    text: "We bouwen je AI-agents en workflows op maat en testen ze grondig met jouw eigen data.",
    duration: "Week 3–6",
  },
  {
    icon: Rocket,
    title: "Implementatie",
    text: "We rollen alles gecontroleerd uit en trainen je team, zodat iedereen ermee kan werken.",
    duration: "Week 6–8",
  },
  {
    icon: RefreshCw,
    title: "Optimalisatie",
    text: "We monitoren de resultaten en verbeteren continu, zodat het rendement elke maand groeit.",
    duration: "Doorlopend",
  },
];

export function Process() {
  return (
    <section className="border-t border-line py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Werkwijze"
          title={
            <>
              Van eerste gesprek naar{" "}
              <span className="text-accent">werkende AI in weken</span>
            </>
          }
          description="Geen maandenlange IT-trajecten. Onze aanpak is helder, snel en volledig begeleid. Jij houdt op elk moment overzicht."
        />

        <ol className="mt-16 grid gap-10 lg:grid-cols-5 lg:gap-6">
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              {/* verbindingslijn tussen stappen op desktop */}
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-[52px] top-6 hidden h-px w-[calc(100%-52px)] bg-gradient-to-r from-accent/40 to-line lg:block"
                />
              )}
              <Reveal delay={i * 0.1}>
                <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-bg">
                    <s.icon className="h-5 w-5 text-accent" aria-hidden />
                  </span>
                  <div className="lg:mt-4">
                    <p className="font-mono text-[11px] text-fg-faint">
                      {s.duration}
                    </p>
                    <h3 className="mt-0.5 text-lg font-bold">{s.title}</h3>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted lg:mt-4">
                  {s.text}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
