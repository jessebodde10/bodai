import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import {
  Handshake,
  Headset,
  FileSignature,
  FolderCog,
  Users,
} from "lucide-react";

const agents = [
  {
    icon: Handshake,
    name: "Sales Agent",
    role: "Kwalificeert leads en volgt op",
    tasks: ["Beoordeelt elke lead direct", "Plant opvolging in je agenda", "Houdt je CRM actueel"],
  },
  {
    icon: Headset,
    name: "Support Agent",
    role: "Beantwoordt klantvragen 24/7",
    tasks: ["Reageert binnen seconden", "Kent jouw producten en beleid", "Escaleert alleen wat écht moet"],
  },
  {
    icon: FileSignature,
    name: "Offerte Agent",
    role: "Stelt offertes voor je op",
    tasks: ["Rekent met jouw prijzen", "Gebruikt jouw huisstijl", "Klaar voor akkoord in minuten"],
  },
  {
    icon: FolderCog,
    name: "Administratie Agent",
    role: "Verwerkt documenten en facturen",
    tasks: ["Herkent en boekt facturen", "Signaleert afwijkingen", "Koppelt met je boekhouding"],
  },
  {
    icon: Users,
    name: "HR Agent",
    role: "Ondersteunt werving en onboarding",
    tasks: ["Screent sollicitaties", "Plant gesprekken in", "Begeleidt nieuwe medewerkers"],
  },
];

export function Agents() {
  return (
    <section id="ai-agents" className="scroll-mt-20 border-t border-line py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="AI Agents"
          title={
            <>
              Digitale collega&apos;s die{" "}
              <span className="text-accent">nooit een taak laten liggen</span>
            </>
          }
          description="Een AI-agent is geen chatbot. Het is een digitale medewerker die zelfstandig taken uitvoert binnen jouw processen, getraind op jouw bedrijf, jouw systemen en jouw werkwijze."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((a, i) => (
            <Reveal key={a.name} delay={i * 0.06}>
              <div className="group flex h-full flex-col rounded-2xl border border-line bg-card p-7 transition-all duration-200 hover:-translate-y-1 hover:border-accent/30">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent/15">
                    <a.icon className="h-5 w-5 text-accent" aria-hidden />
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 font-mono text-[10px] text-fg-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                    Actief 24/7
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold">{a.name}</h3>
                <p className="mt-1 text-fg-muted">{a.role}</p>
                <ul className="mt-5 flex flex-col gap-2 border-t border-line pt-5">
                  {a.tasks.map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-sm text-fg-muted">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}

          {/* maatwerk-kaart */}
          <Reveal delay={0.36}>
            <div className="flex h-full flex-col items-start justify-center rounded-2xl border border-dashed border-line-strong p-7">
              <h3 className="text-xl font-bold">Jouw eigen agent</h3>
              <p className="mt-2 text-fg-muted">
                Elk bedrijf werkt anders. We bouwen agents op maat voor de
                processen die bij jou de meeste tijd kosten.
              </p>
              <a
                href="#contact"
                className="mt-5 font-semibold text-accent transition-opacity hover:opacity-80"
              >
                Bespreek de mogelijkheden →
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
