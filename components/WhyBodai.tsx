import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { Target, LineChart, UserCheck, RefreshCw } from "lucide-react";

const usps = [
  {
    icon: Target,
    title: "Praktische AI",
    text: "Geen experimenten of hype. We zetten AI alleen in waar het aantoonbaar tijd of geld oplevert, te beginnen bij je grootste knelpunt.",
  },
  {
    icon: LineChart,
    title: "Meetbare resultaten",
    text: "Elke automatisering krijgt een doel: bespaarde uren, snellere doorlooptijd of lagere kosten. Je ziet precies wat het oplevert.",
  },
  {
    icon: UserCheck,
    title: "Persoonlijke begeleiding",
    text: "Je werkt direct met de specialist die je systemen bouwt. Korte lijnen, snelle beslissingen, geen accountmanagers ertussen.",
  },
  {
    icon: RefreshCw,
    title: "Continue optimalisatie",
    text: "AI ontwikkelt zich razendsnel. Wij houden je systemen actueel en verbeteren ze doorlopend, zodat je voorsprong groeit.",
  },
];

export function WhyBodai() {
  return (
    <section className="border-t border-line py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Waarom Bodai"
              title={
                <>
                  Geen standaard software.{" "}
                  <span className="text-accent">Wel resultaat.</span>
                </>
              }
              description="Veel AI-trajecten stranden in ingewikkelde implementaties of tools die niemand gebruikt. Wij doen het anders: klein beginnen, snel resultaat, en vandaaruit opschalen."
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {usps.map((u, i) => (
              <Reveal key={u.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-line bg-card p-7 transition-colors hover:border-line-strong">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                    <u.icon className="h-5 w-5 text-accent" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{u.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {u.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
