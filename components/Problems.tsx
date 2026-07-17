import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import {
  FileText,
  FolderOpen,
  Mail,
  MessagesSquare,
  BarChart3,
  ClipboardCopy,
  Zap,
} from "lucide-react";

const tasks = [
  { icon: FileText, label: "Offertes opstellen", time: "± 45 min per stuk" },
  { icon: FolderOpen, label: "Administratie bijwerken", time: "± 6 uur per week" },
  { icon: Mail, label: "E-mails beantwoorden", time: "± 2 uur per dag" },
  { icon: MessagesSquare, label: "Klantvragen afhandelen", time: "± 3 uur per dag" },
  { icon: BarChart3, label: "Rapportages maken", time: "± 4 uur per maand" },
  { icon: ClipboardCopy, label: "Gegevens overtypen", time: "± 5 uur per week" },
];

export function Problems() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Herkenbaar?"
          title={
            <>
              Besteedt jouw team nog{" "}
              <span className="text-accent">uren</span> aan dit soort werk?
            </>
          }
          description="Elke ondernemer kent het: goede mensen die hun dagen vullen met repeterend werk dat niets toevoegt aan de groei van het bedrijf. Dat kost tijd, geld en energie. Elke dag opnieuw."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tasks.map((t, i) => (
            <Reveal key={t.label} delay={i * 0.06}>
              <div className="group flex items-center justify-between rounded-2xl border border-line bg-card p-6 transition-colors duration-200 hover:border-line-strong">
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-tile">
                    <t.icon className="h-4.5 w-4.5 text-fg-muted" aria-hidden />
                  </span>
                  <p className="font-medium">{t.label}</p>
                </div>
                <span className="font-mono text-[11px] text-fg-faint">
                  {t.time}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-10 flex items-center gap-4 rounded-2xl border border-accent/25 bg-accent/[0.05] p-6">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15">
              <Zap className="h-5 w-5 text-accent" aria-hidden />
            </span>
            <p className="text-lg font-semibold">
              AI kan dit binnen enkele seconden uitvoeren.{" "}
              <span className="font-normal text-fg-muted">
                Betrouwbaar, 24/7 en zonder fouten.
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
