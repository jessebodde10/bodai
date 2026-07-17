import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { DashboardPreview } from "@/components/DashboardPreview";
import { TrustBar } from "@/components/TrustBar";
import { Problems } from "@/components/Problems";
import { Solutions } from "@/components/Solutions";
import { Agents } from "@/components/Agents";
import { Automations } from "@/components/Automations";
import { Websites } from "@/components/Websites";
import { Calculator } from "@/components/Calculator";
import { Process } from "@/components/Process";
import { WhyBodai } from "@/components/WhyBodai";
import { Cases } from "@/components/Cases";
import { AboutJesse } from "@/components/AboutJesse";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bodai",
  url: "https://www.bodai.nl",
  description:
    "AI-consultancy en implementatie voor het MKB: AI-agents, workflow-automatisering en procesoptimalisatie.",
  areaServed: "NL",
  slogan: "Slimmer werken. Meer bereiken.",
  knowsAbout: [
    "AI automatisering",
    "AI agents",
    "AI consultancy",
    "AI implementatie",
    "Workflow automatisering",
    "Procesautomatisering",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main>
        <Hero />
        <DashboardPreview />
        <TrustBar />
        <Problems />
        <Solutions />
        <Agents />
        <Automations />
        <Websites />
        <Calculator />
        <Process />
        <WhyBodai />
        <Cases />
        <AboutJesse />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
