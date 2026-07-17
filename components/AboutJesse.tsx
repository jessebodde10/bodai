import Image from "next/image";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";

export function AboutJesse() {
  return (
    <section id="over-ons" className="scroll-mt-20 border-t border-line py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Over ons"
              title={
                <>
                  Geen ver-van-je-bed software, maar{" "}
                  <span className="text-accent">iemand die meedenkt</span>
                </>
              }
            />
            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-col gap-5 text-lg leading-relaxed text-fg-muted">
                <p>
                  Ik ben Jesse, oprichter van Bodai. Ik bouw AI-software en
                  automatiseringen voor het MKB, niet vanaf een afstand, maar
                  door eerst écht te begrijpen hoe jouw bedrijf werkt.
                </p>
                <p>
                  Ik geloof niet in dikke pakketten waar je je werkwijze omheen
                  moet wringen. Ik kijk waar bij jou de meeste tijd of omzet
                  blijft liggen, en bouw daar iets concreets voor. Klein
                  beginnen, snel iets werkends, en van daaruit verder.
                </p>
                <p>
                  Korte lijntjes, geen jargon. Van het eerste gesprek tot ver na
                  de oplevering heb je gewoon met mij te maken.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href="#contact" withArrow>
                  Plan een kennismaking
                </Button>
                <Button href="https://wa.me/31624505863" variant="secondary">
                  App me direct
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-line bg-card lg:max-w-none">
              <Image
                src="/Jesse.png"
                alt="Jesse, oprichter van Bodai"
                width={832}
                height={1129}
                sizes="(min-width: 1024px) 560px, (min-width: 768px) 448px, 100vw"
                className="h-full w-full object-cover"
                priority={false}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
