"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "./ui/Logo";
import { Button } from "./ui/Button";
import { ThemeToggle } from "./ui/ThemeToggle";

const links = [
  { href: "#oplossingen", label: "Oplossingen" },
  { href: "#ai-agents", label: "AI Agents" },
  { href: "#automatiseringen", label: "Automatiseringen" },
  { href: "#websites", label: "Websites" },
  { href: "#cases", label: "Cases" },
  { href: "#over-ons", label: "Over ons" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-bg/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">
        <Logo />

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-medium text-fg-muted transition-colors hover:text-fg"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button href="#contact">Plan een AI Scan</Button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Menu sluiten" : "Menu openen"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-b border-line bg-bg/95 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-fg-muted transition-colors hover:text-fg"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Button href="#contact" className="w-full">
                Plan een AI Scan
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
