import { Reveal } from "./ui/Reveal";
import { Check } from "lucide-react";

const sectors = [
  "Recruitment",
  "Logistiek",
  "Accountancy",
  "Installatietechniek",
  "Zakelijke dienstverlening",
  "Groothandel",
  "E-commerce",
  "Bouw",
];

const proofs = [
  "Tot honderden uren per maand bespaard",
  "Minder handmatig werk",
  "Hogere productiviteit",
  "AI-oplossingen op maat",
];

export function TrustBar() {
  return (
    <section className="border-y border-line py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p className="text-center font-mono text-xs uppercase tracking-[0.25em] text-fg-faint">
            Vertrouwd door MKB-bedrijven in
          </p>
        </Reveal>

        {/* doorlopende sector-ticker */}
        <div
          className="mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
          aria-hidden
        >
          <div className="animate-ticker flex w-max gap-14">
            {[...sectors, ...sectors].map((s, i) => (
              <span
                key={`${s}-${i}`}
                className="whitespace-nowrap text-lg font-semibold text-fg-faint"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <ul className="sr-only">
          {sectors.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <Reveal delay={0.15}>
          <ul className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-3">
            {proofs.map((p) => (
              <li
                key={p}
                className="flex items-center gap-2 text-sm text-fg-muted"
              >
                <Check className="h-4 w-4 text-accent" aria-hidden />
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
