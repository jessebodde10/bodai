# Bodai: Website-gids

Complete documentatie bij de nieuwe Bodai-website: structuur, designrichtlijnen, UX/CRO-aanbevelingen, SEO en roadmap.

---

## 1. Positionering & merkstem

**Bodai is:** AI-consultancy + AI-implementatie + AI-agents + procesoptimalisatie voor het MKB (5–100 medewerkers).

**We verkopen nooit** workflows, chatbots, websites of software. **We verkopen** bedrijfsresultaat: tijd, lagere kosten, minder fouten, schaalbaarheid.

**Toon:** zelfverzekerd, concreet, zonder jargon of hype. Elke claim krijgt een cijfer of een concreet voorbeeld. Aanspreekvorm: "je/jouw". Tagline: *Slimmer werken. Meer bereiken.*

---

## 2. Menustructuur

| Positie | Item | Doel |
|---|---|---|
| Links | Bodai-logo | Home |
| Midden | Oplossingen · AI Agents · Automatiseringen · Cases · Over ons · Contact | Ankerlinks (homepage) → later eigen pagina's |
| Rechts | **Plan een AI Scan** (lime knop) | Primaire conversie, altijd zichtbaar |

Mobiel: hamburger met dezelfde items + full-width CTA-knop onderaan.

---

## 3. Homepage-wireframe

```
┌─────────────────────────────────────────────────┐
│ NAV  logo · links · [Plan een AI Scan]          │
├─────────────────────────────────────────────────┤
│ HERO                                            │
│ ┌───────────────────┐  ┌──────────────┐         │
│ │ badge             │  │ [AI Agent]   │         │
│ │ H1 (3 regels,     │  │     ↓ puls   │         │
│ │  regel 3 = lime)  │  │ [Automatis.] │         │
│ │ subheadline       │  │     ↓ puls   │         │
│ │ [CTA] [secundair] │  │ [Resultaat]  │         │
│ └───────────────────┘  └──────────────┘         │
├─────────────────────────────────────────────────┤
│ DASHBOARD PREVIEW (venster met sidebar,         │
│  5 stat-kaarten, workflowlijst, staafgrafiek)   │
├─────────────────────────────────────────────────┤
│ VERTROUWD DOOR (sector-ticker + 4 checks)       │
├─────────────────────────────────────────────────┤
│ PROBLEMEN (6 taak-kaarten + lime conclusiebalk) │
├─────────────────────────────────────────────────┤
│ OPLOSSINGEN (4 kaarten: probleem→opl.→result.)  │
├─────────────────────────────────────────────────┤
│ AI AGENTS (5 agent-kaarten + maatwerk-kaart)    │
├─────────────────────────────────────────────────┤
│ AUTOMATISERINGEN (3 trigger→actie→resultaat)    │
├─────────────────────────────────────────────────┤
│ RESULTATEN (4 grote cijfers in raster)          │
├─────────────────────────────────────────────────┤
│ WERKWIJZE (5-staps horizontale tijdlijn)        │
├─────────────────────────────────────────────────┤
│ WAAROM BODAI (kop links, 4 USP-kaarten rechts)  │
├─────────────────────────────────────────────────┤
│ CASES (5 branche-tabs → 3-koloms detail)        │
├─────────────────────────────────────────────────┤
│ OVER JESSE (verhaal links, tools+quote rechts)  │
├─────────────────────────────────────────────────┤
│ FAQ (6 accordeon-items, gecentreerd)            │
├─────────────────────────────────────────────────┤
│ CTA (grote kaart met gloed, 2 knoppen)          │
├─────────────────────────────────────────────────┤
│ FOOTER (logo, 3 kolommen, tagline)              │
└─────────────────────────────────────────────────┘
```

---

## 4. Designrichtlijnen

### Kleuren
| Token | Waarde | Gebruik |
|---|---|---|
| `bg` | `#050505` | Paginaachtergrond |
| `card` | `#111111` | Kaarten, panelen |
| `accent` | `#B8FF3D` | CTA's, accentwoorden, statussen: max. 1 accentmoment per sectie |
| `fg` | `#FFFFFF` | Koppen |
| `fg-muted` | `rgba(255,255,255,.65)` | Lopende tekst |
| `fg-faint` | `rgba(255,255,255,.4)` | Bijschriften, meta |
| `line` | `rgba(255,255,255,.08)` | Borders, dividers |

Regel: lime nooit als vlakvulling voor grote oppervlakken; alleen als signaal (knop, accentwoord, statuspunt, resultaat-blok).

### Typografie
- **Plus Jakarta Sans** (merk-font): koppen bold/extrabold met `tracking-tight`, body regular.
- **IBM Plex Mono**: eyebrows (uppercase, `tracking .25em`), data, timestamps, microcopy. De mono-laag geeft de site zijn "systeem"-gevoel.
- H1: 48–72 px, leading 1.05. H2: 36–48 px. Body: 16–18 px, leading relaxed.
- Accentwoorden in koppen: laatste zinsdeel in lime, nooit meer dan één per kop.

### Spacing & layout
- Container: `max-w-7xl`, padding 24 px (mobiel) / 32 px (desktop).
- Sectieritme: `py-28` (112 px), CTA `py-32`. Secties gescheiden door 1px `line`-border, geen achtergrondwissels.
- Kaarten: `rounded-2xl`, border `line`, achtergrond `card`, padding 24–28 px.
- Knoppen: pill (`rounded-full`); primair lime met zwarte tekst, secundair outline.

### Iconen & illustraties
- Lucide, 16–20 px, `stroke-width` standaard, altijd in een 40–48 px afgeronde tegel (`bg-accent/10` voor accent, `bg-white/5` voor neutraal).
- Geen robots, hersenen, circuits of stockfoto's. "Illustraties" zijn opgebouwde UI: de workflow-rail en het dashboard.

### Animaties & micro-interacties
- Scroll-reveal: fade + 24 px omhoog, 0,6 s, ease-out, eenmalig, gestaffeld per kaart (60–100 ms).
- Hero: pulsjes die langs de lime verbindingslijnen lopen; kaarten zweven traag (5–7 s).
- Dashboard: staafgrafiek groeit in bij scroll-intree.
- Hover: kaarten border-verheldering (agents ook 4 px lift), knoppen lime-gloed + pijl schuift 2 px.
- Alles respecteert `prefers-reduced-motion`.

### Responsive
- Grids vallen terug: 4→2→1 kolommen; hero en dashboard stapelen; werkwijze wordt verticale lijst; sidebar van het dashboard verdwijnt onder `lg`.
- Wireframe-visual en ticker krijgen `mask-image`-fades zodat niets hard afsnijdt.

---

## 5. UX-aanbevelingen (toegepast)

1. **Eén verhaal, één scroll**: probleem → oplossing → bewijs → proces → vertrouwen → actie. Elke sectie beantwoordt de bezwaren van de vorige.
2. **Dashboard direct onder de hero**: bewijst binnen 5 seconden dat Bodai systemen *bouwt*, niet alleen adviseert.
3. **Cases als tabs** in plaats van een lange lijst: bezoekers zoeken alleen hun eigen branche.
4. **FAQ adresseert de echte koopbezwaren**: prijs, kennis, veiligheid, banen, nazorg.
5. **Sticky nav met permanente CTA**; ankernavigatie met `scroll-mt` zodat koppen niet onder de balk verdwijnen.
6. Toegankelijkheid: focusringen in lime, aria-labels op tabs/accordeon/menu, semantische secties.

## 6. CRO-verbeteringen (toegepast)

1. **Risico-reductie bij elke CTA**: "Vrijblijvend · 30 minuten · direct inzicht" als microcopy onder de knoppen.
2. **Prijsindicatie in de FAQ** (€5.000–€25.000+): kwalificeert leads vóór het gesprek en verankert het premium segment.
3. **Concrete cijfers boven abstracties**: "±45 min per offerte" → "2 minuten" is overtuigender dan "sneller werken".
4. **Tweede CTA-pad** ("Vraag een demo aan") voor bezoekers die nog niet klaar zijn voor een gesprek.
5. **Resultaat-blokken in lime** binnen oplossingen en cases: het oog landt altijd op de uitkomst.
6. Aanbevolen vervolgstappen: koppel de CTA aan een Calendly-embed i.p.v. mailto, voeg 2–3 klantquotes met naam/bedrijf toe zodra beschikbaar, en A/B-test de hero-CTA-tekst ("Plan gratis AI Scan" vs. "Bereken je besparing").

## 7. SEO-optimalisatie (toegepast)

- **Title**: "Bodai: AI-automatisering en AI Agents voor het MKB"; description met kernzoekwoorden en propositie.
- **Zoekwoorden** verwerkt in koppen en lopende tekst: AI automatisering, AI agents, AI consultancy, AI implementatie, workflow automatisering, procesautomatisering, AI voor MKB, slimme bedrijfsprocessen.
- **Structured data**: `ProfessionalService` JSON-LD (naam, slogan, diensten, areaServed NL).
- **Open Graph** voor social sharing; `lang="nl"`; semantische heading-hiërarchie (één H1).
- Volledig statisch gerenderd (SSG) → snelle LCP, goede Core Web Vitals.
- Vervolgstappen: sitemap.xml + robots.ts toevoegen bij meerdere pagina's, FAQ-schema (`FAQPage`) op de FAQ-sectie, en een blog voor long-tail ("AI voor accountants", "offertes automatiseren").

---

## 8. Structuur overige pagina's

| Pagina | URL | Opbouw |
|---|---|---|
| Oplossingen | `/oplossingen` | Hero → 4 oplossingsgebieden uitgediept → integraties → CTA |
| AI Agents | `/ai-agents` | Hero → per agent een detailblok (taken, systemen, resultaat) → demovideo → CTA |
| Automatiseringen | `/automatiseringen` | Hero → workflowvoorbeelden per afdeling → integratie-logowall → CTA |
| Cases | `/cases` | Overzicht → per case eigen pagina (probleem/aanpak/resultaat + cijfers) |
| Over ons | `/over-ons` | Verhaal van Jesse → werkwijze → waarden → tools → CTA |
| Contact / AI Scan | `/ai-scan` | Uitleg wat de scan inhoudt → planner (Calendly) → FAQ |
| Privacy | `/privacy` | Juridisch |
| Voorwaarden | `/voorwaarden` | Juridisch |

## 9. Toekomstige uitbreidingsideeën

1. **ROI-calculator**: interactieve tool ("hoeveel uur besteedt je team aan X?") → gepersonaliseerd besparingsrapport als leadmagnet.
2. **Blog/kennisbank** gericht op long-tail SEO per branche.
3. **Klantportaal-preview**: echte (geanonimiseerde) dashboards als bewijs.
4. **Videocases** met klanten aan het woord.
5. **Nieuwsbrief "AI voor het MKB"**: maandelijkse praktische AI-tips.
6. **AI Scan-intake als slimme wizard**: een agent die de intake zelf afneemt: het product als demo.
7. Engelstalige versie (`/en`) bij internationale ambities.

---

## 10. Technische notities

- Stack: Next.js 15 (App Router, Turbopack), React 19, Tailwind CSS 4 (`@theme`-tokens), Framer Motion, Lucide.
- Componenten in `components/`, herbruikbare primitives in `components/ui/` (Button, Logo, Reveal, SectionHeading).
- `npm run dev` voor ontwikkeling, `npm run build` voor productie (volledig statisch).
- Deploy-advies: Vercel (zero-config voor deze stack).

