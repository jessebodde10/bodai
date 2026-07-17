import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import { Palette, Code2, ShieldCheck, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Palette,
    title: "Maatwerk design",
    text: "Geen template, maar een ontwerp dat bij jouw merk past. Volledig responsive, van mobiel tot desktop.",
  },
  {
    icon: Code2,
    title: "Slimme bouw",
    text: "Ontwikkeld met moderne AI-tooling voor snelheid, met technische SEO en formulieren vanaf dag één.",
  },
  {
    icon: ShieldCheck,
    title: "Beheer inbegrepen",
    text: "Hosting, SSL, back-ups en beveiligingsupdates. Alles op één plek, zonder losse partijen.",
  },
  {
    icon: TrendingUp,
    title: "Ruimte om te groeien",
    text: "Je site groeit mee: extra pagina's, een blog, koppelingen met je systemen of een AI-agent erbovenop.",
  },
];

const steps = [
  { day: "Dag 1", label: "Intake" },
  { day: "Dag 2 en 3", label: "Ontwerp" },
  { day: "Dag 4 tot 6", label: "Bouw" },
  { day: "Dag 7", label: "Live" },
];

export function Websites() {
  return (
    <section id="websites" className="scroll-mt-20 border-t border-line py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Websites"
          title={
            <>
              Een professionele website,{" "}
              <span className="text-accent">live in 1 week</span>
            </>
          }
          description="Een goede website duurt vaak maanden, of voelt als templatewerk. Wij combineren maatwerk design met AI-tooling: snel live, volledig van jou, en het beheer is inbegrepen."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-line bg-card p-7 transition-colors hover:border-line-strong">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                  <p.icon className="h-5 w-5 text-accent" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-col items-center justify-between gap-8 rounded-2xl border border-line bg-card p-8 lg:flex-row">
            <ol className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {steps.map((s, i) => (
                <li key={s.label} className="flex items-center gap-8">
                  <div>
                    <p className="font-mono text-[11px] text-fg-faint">{s.day}</p>
                    <p className="mt-0.5 font-semibold">{s.label}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden
                      className="hidden h-px w-10 bg-gradient-to-r from-accent/40 to-line sm:block"
                    />
                  )}
                </li>
              ))}
            </ol>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="#contact" withArrow>
                Plan een kennismaking
              </Button>
              <Button href="#cases" variant="secondary">
                Bekijk ons werk
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
