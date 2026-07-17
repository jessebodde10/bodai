import Link from "next/link";
import { Logo } from "./ui/Logo";

function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

const columns = [
  {
    title: "Navigatie",
    links: [
      { label: "Oplossingen", href: "#oplossingen" },
      { label: "AI Agents", href: "#ai-agents" },
      { label: "Automatiseringen", href: "#automatiseringen" },
      { label: "Websites", href: "#websites" },
      { label: "Cases", href: "#cases" },
      { label: "Over ons", href: "#over-ons" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Plan een AI Scan", href: "#contact" },
      { label: "info@bodai.nl", href: "mailto:info@bodai.nl" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/bodai" },
    ],
  },
  {
    title: "Juridisch",
    links: [
      { label: "Privacyverklaring", href: "/privacy" },
      { label: "Algemene voorwaarden", href: "/voorwaarden" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_repeat(3,0.6fr)]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-fg-muted">
              Bodai helpt MKB-bedrijven slimmer werken met AI en automatisering.
              Slimmer werken. Meer bereiken.
            </p>
          </div>
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-fg-faint">
                {col.title}
              </p>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-fg-muted transition-colors hover:text-fg"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-fg-faint">
            © {new Date().getFullYear()} Bodai. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/bodai"
              aria-label="Bodai op LinkedIn"
              className="text-fg-faint transition-colors hover:text-accent"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <span className="font-mono text-xs text-fg-faint">
              Slimmer werken. <span className="text-accent">Meer bereiken.</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
