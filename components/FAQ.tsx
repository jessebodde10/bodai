"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const faqs = [
  {
    q: "We hebben geen technische kennis in huis. Is dat een probleem?",
    a: "Nee, dat is juist ons uitgangspunt. Wij ontwerpen, bouwen en beheren alles. Jouw team hoeft alleen te weten hoe ze de resultaten gebruiken, en dat leren we ze in een korte training.",
  },
  {
    q: "Wat kost een AI-implementatie?",
    a: "Projecten starten vanaf €5.000 voor een afgebakende automatisering en lopen tot €25.000+ voor complete trajecten met meerdere agents en workflows. Na de gratis AI Scan krijg je een concreet voorstel met de verwachte besparing ernaast, zo zie je vooraf of de investering zich terugverdient.",
  },
  {
    q: "Hoe snel zien we resultaat?",
    a: "De eerste werkende automatisering staat meestal binnen 4 tot 6 weken live. We beginnen bewust met het proces dat de meeste tijd kost, zodat je de besparing direct merkt.",
  },
  {
    q: "Is onze bedrijfsdata veilig?",
    a: "Ja. We werken uitsluitend met professionele AI-platforms met Europese dataverwerking waar mogelijk, sluiten verwerkersovereenkomsten af en zorgen dat jouw data nooit wordt gebruikt om publieke modellen te trainen.",
  },
  {
    q: "Vervangt AI onze medewerkers?",
    a: "Nee, het vervangt hun vervelendste taken. Klanten zetten de vrijgekomen uren in voor werk dat wél groei oplevert: klantcontact, advies en verkoop. Groeien zonder extra personeel, dat is het doel.",
  },
  {
    q: "Wat gebeurt er na de oplevering?",
    a: "We blijven betrokken. Via monitoring en periodieke optimalisatie zorgen we dat je systemen blijven presteren en meegroeien met je bedrijf, en met de razendsnelle ontwikkeling van AI.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-line bg-card transition-colors hover:border-line-strong">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 p-6 text-left"
      >
        <span className="text-lg font-semibold">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-fg-muted transition-transform duration-300 ${
            open ? "rotate-180 text-accent" : ""
          }`}
          aria-hidden
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 leading-relaxed text-fg-muted">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section className="border-t border-line py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Veelgestelde vragen"
          title={
            <>
              Alles wat je wilt weten{" "}
              <span className="text-accent">voordat we starten</span>
            </>
          }
          align="center"
        />
        <div className="mt-14 flex flex-col gap-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <FaqItem q={f.q} a={f.a} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
