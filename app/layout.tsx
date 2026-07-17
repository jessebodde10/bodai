import type { Metadata } from "next";
import { Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bodai.nl"),
  title: {
    default: "Bodai | AI-automatisering en AI Agents voor het MKB",
    template: "%s | Bodai",
  },
  description:
    "Bodai helpt MKB-bedrijven hun bedrijfsprocessen te automatiseren met AI-agents, slimme workflows en maatwerkoplossingen. Bespaar tijd, verlaag kosten en groei zonder extra personeel.",
  keywords: [
    "AI automatisering",
    "AI agents",
    "AI consultancy",
    "AI implementatie",
    "workflow automatisering",
    "procesautomatisering",
    "AI voor MKB",
    "slimme bedrijfsprocessen",
  ],
  openGraph: {
    title: "Bodai | Slimmer werken. Meer bereiken.",
    description:
      "AI-consultancy en implementatie voor het MKB. AI-agents, slimme workflows en procesoptimalisatie die meetbaar tijd en kosten besparen.",
    url: "https://www.bodai.nl",
    siteName: "Bodai",
    locale: "nl_NL",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <head>
        {/* Thema toepassen vóór eerste render om een flits te voorkomen */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("bodai-theme");if(t==="light")document.documentElement.dataset.theme="light"}catch(e){}`,
          }}
        />
      </head>
      <body className={`${jakarta.variable} ${plexMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
