import { Reveal } from "./ui/Reveal";
import { CalEmbed } from "./CalEmbed";

export function CTA() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 overflow-hidden border-t border-line py-32"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Reveal>
          <div className="relative text-center">
            <div
              aria-hidden
              className="absolute left-1/2 top-0 h-64 w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.08] blur-3xl"
            />
            <h2 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Klaar om slimmer te werken{" "}
              <span className="text-accent">met AI?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted">
              Plan een gratis AI Scan en ontdek waar jouw organisatie direct
              tijd, geld en capaciteit kan besparen. Kies hieronder een moment
              dat jou uitkomt.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div id="agenda" className="mt-12 scroll-mt-24">
            <CalEmbed />
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-8 text-center font-mono text-xs text-fg-faint">
            30 minuten · vrijblijvend · concreet besparingsoverzicht als
            resultaat
          </p>
        </Reveal>
      </div>
    </section>
  );
}
