"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  LayoutDashboard,
  Bot,
  Workflow,
  Plug,
  BarChart3,
  Play,
  CircleCheck,
} from "lucide-react";

type Tab =
  | "Dashboard"
  | "AI Agents"
  | "Workflows"
  | "Integraties"
  | "Analytics"
  | "Executies";

const nav: { icon: typeof Bot; label: Tab }[] = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Bot, label: "AI Agents" },
  { icon: Workflow, label: "Workflows" },
  { icon: Plug, label: "Integraties" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Play, label: "Executies" },
];

const workflows = [
  { name: "Lead Qualification", runs: 2841, success: "99,6%" },
  { name: "Offerte Generator", runs: 1203, success: "99,1%" },
  { name: "Factuurverwerking", runs: 4518, success: "99,8%" },
  { name: "Klantenservice", runs: 6930, success: "98,9%" },
  { name: "E-mail Assistent", runs: 3250, success: "99,4%" },
];

const agents = [
  { name: "Sales Agent", today: 148, desc: "Kwalificeert leads en volgt op" },
  { name: "Support Agent", today: 312, desc: "Beantwoordt klantvragen 24/7" },
  { name: "Offerte Agent", today: 41, desc: "Stelt offertes voor je op" },
  { name: "Administratie Agent", today: 96, desc: "Verwerkt documenten en facturen" },
  { name: "HR Agent", today: 12, desc: "Ondersteunt werving en onboarding" },
];

const integrations = [
  "Exact", "AFAS", "HubSpot", "Outlook", "Gmail", "WhatsApp", "Slack", "Moneybird",
];

const executions = [
  { t: "14:32:08", w: "Factuurverwerking", msg: "factuur F-2291 geboekt", d: "1,8s" },
  { t: "14:31:54", w: "Klantenservice", msg: "vraag beantwoord: levertijd", d: "0,9s" },
  { t: "14:31:12", w: "Lead Qualification", msg: "lead gescoord: 87/100", d: "2,1s" },
  { t: "14:30:40", w: "E-mail Assistent", msg: "reactie klaargezet ter review", d: "1,2s" },
  { t: "14:29:55", w: "Offerte Generator", msg: "offerte O-1148 gegenereerd", d: "3,4s" },
  { t: "14:29:03", w: "Factuurverwerking", msg: "factuur F-2290 geboekt", d: "1,7s" },
];

const bars = [34, 48, 41, 62, 55, 71, 66, 82, 74, 90, 85, 97];

function useCountUp(target: number, start: boolean, duration = 1200) {
  const [value, setValue] = useState(0);
  const valueRef = useRef(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!start) return;
    if (reduce) {
      valueRef.current = target;
      setValue(target);
      return;
    }
    /* animeer vanaf de huidige waarde, zodat live-updates niet vanaf 0 hertellen */
    const from = valueRef.current;
    let raf: number;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const next = Math.round(from + (target - from) * eased);
      valueRef.current = next;
      setValue(next);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration, reduce]);
  return value;
}

function StatCard({
  label,
  value,
  suffix = "",
  decimals = 0,
  start,
}: {
  label: string;
  value: number;
  suffix?: string;
  decimals?: number;
  start: boolean;
}) {
  const raw = useCountUp(Math.round(value * 10 ** decimals), start);
  const display = (raw / 10 ** decimals).toLocaleString("nl-NL", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return (
    <div className="rounded-xl border border-line bg-bg/50 p-4">
      <p className="text-[11px] text-fg-faint">{label}</p>
      <p className="mt-1.5 text-2xl font-bold tracking-tight">
        {display}
        {suffix}
      </p>
    </div>
  );
}

function Chart({ tall = false }: { tall?: boolean }) {
  const reduce = useReducedMotion();
  return (
    <div className={`flex flex-1 items-end gap-1.5 ${tall ? "min-h-48" : ""}`}>
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={reduce ? false : { height: 0 }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 + i * 0.05 }}
          className={`min-h-1 w-full rounded-t-sm ${
            i === bars.length - 1 ? "bg-accent-fill" : "bg-accent/25"
          }`}
        />
      ))}
    </div>
  );
}

function ActiveBadge() {
  return (
    <span className="rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] text-accent">
      Actief
    </span>
  );
}

export function DashboardPreview() {
  const [tab, setTab] = useState<Tab>("Dashboard");
  const [liveTasks, setLiveTasks] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const stillInView = useInView(ref, { margin: "-10%" });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !stillInView) return;
    const id = setInterval(() => {
      setLiveTasks((v) => v + 1 + Math.floor(Math.random() * 4));
    }, 2600);
    return () => clearInterval(id);
  }, [reduce, stillInView]);

  return (
    <section
      aria-label="Voorbeeld van het Bodai automation dashboard"
      className="relative pb-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={reduce ? false : { opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl border border-line bg-card shadow-[0_24px_80px_rgba(0,0,0,0.6)]"
        >
          {/* venster-balk met Bodai-beeldmerk */}
          <div className="flex items-center gap-3 border-b border-line px-5 py-3">
            <Image
              src="/beeldmerk.png"
              alt=""
              aria-hidden
              width={20}
              height={20}
              className="rounded-[5px]"
            />
            <span className="font-mono text-[11px] text-fg-faint">
              app.bodai.nl · automation dashboard
            </span>
            <span className="ml-auto flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 font-mono text-[10px] text-fg-muted">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" aria-hidden />
              live
            </span>
          </div>

          {/* mobiele tab-balk */}
          <div className="flex gap-1 overflow-x-auto border-b border-line p-2 lg:hidden">
            {nav.map((item) => (
              <button
                key={item.label}
                onClick={() => setTab(item.label)}
                className={`flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                  tab === item.label
                    ? "bg-accent/10 font-medium text-accent"
                    : "text-fg-muted"
                }`}
              >
                <item.icon className="h-4 w-4" aria-hidden />
                {item.label}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-[200px_1fr]">
            {/* sidebar */}
            <aside className="hidden border-r border-line p-4 lg:block">
              <ul className="flex flex-col gap-1">
                {nav.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => setTab(item.label)}
                      aria-current={tab === item.label ? "page" : undefined}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                        tab === item.label
                          ? "bg-accent/10 font-medium text-accent"
                          : "text-fg-muted hover:bg-tile hover:text-fg"
                      }`}
                    >
                      <item.icon className="h-4 w-4" aria-hidden />
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </aside>

            {/* main */}
            <div className="min-h-[420px] p-5 sm:p-7">
              {tab === "Dashboard" && (
                <>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                    <StatCard label="Actieve AI Agents" value={32} start={inView} />
                    <StatCard
                      label="Taken geautomatiseerd"
                      value={18742 + liveTasks}
                      start={inView}
                    />
                    <StatCard label="Bespaarde uren" value={420} start={inView} />
                    <StatCard label="ROI" value={287} suffix="%" start={inView} />
                    <StatCard
                      label="Succesratio"
                      value={99.4}
                      suffix="%"
                      decimals={1}
                      start={inView}
                    />
                  </div>

                  <div className="mt-5 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-xl border border-line bg-bg/50 p-5">
                      <p className="text-sm font-semibold">Recente workflows</p>
                      <ul className="mt-4 flex flex-col divide-y divide-line">
                        {workflows.map((w) => (
                          <li
                            key={w.name}
                            className="flex items-center justify-between py-2.5"
                          >
                            <div className="flex items-center gap-3">
                              <CircleCheck className="h-4 w-4 text-accent" aria-hidden />
                              <span className="text-sm">{w.name}</span>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="hidden font-mono text-[11px] text-fg-faint sm:block">
                                {w.runs.toLocaleString("nl-NL")} runs
                              </span>
                              <ActiveBadge />
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col rounded-xl border border-line bg-bg/50 p-5">
                      <div className="flex items-baseline justify-between">
                        <p className="text-sm font-semibold">Geautomatiseerde taken</p>
                        <span className="font-mono text-[11px] text-accent">
                          +34% dit kwartaal
                        </span>
                      </div>
                      <div className="mt-6 flex-1">
                        <Chart />
                      </div>
                      <div className="mt-3 flex justify-between font-mono text-[10px] text-fg-faint">
                        <span>jan</span>
                        <span>jun</span>
                        <span>dec</span>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {tab === "AI Agents" && (
                <ul className="flex flex-col gap-3">
                  {agents.map((a) => (
                    <li
                      key={a.name}
                      className="flex items-center justify-between rounded-xl border border-line bg-bg/50 p-4"
                    >
                      <div className="flex items-center gap-4">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                          <Bot className="h-4 w-4 text-accent" aria-hidden />
                        </span>
                        <div>
                          <p className="text-sm font-semibold">{a.name}</p>
                          <p className="text-[12px] text-fg-faint">{a.desc}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="hidden font-mono text-[11px] text-fg-faint sm:block">
                          {a.today} taken vandaag
                        </span>
                        <ActiveBadge />
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {tab === "Workflows" && (
                <div className="rounded-xl border border-line bg-bg/50 p-5">
                  <div className="flex items-baseline justify-between">
                    <p className="text-sm font-semibold">Alle workflows</p>
                    <span className="font-mono text-[11px] text-fg-faint">
                      {workflows.length} actief
                    </span>
                  </div>
                  <ul className="mt-4 flex flex-col divide-y divide-line">
                    {workflows.map((w) => (
                      <li
                        key={w.name}
                        className="flex items-center justify-between py-3"
                      >
                        <div className="flex items-center gap-3">
                          <CircleCheck className="h-4 w-4 text-accent" aria-hidden />
                          <span className="text-sm">{w.name}</span>
                        </div>
                        <div className="flex items-center gap-4 font-mono text-[11px] text-fg-faint">
                          <span className="hidden sm:block">
                            {w.runs.toLocaleString("nl-NL")} runs
                          </span>
                          <span className="text-accent">{w.success}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {tab === "Integraties" && (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {integrations.map((name) => (
                    <div
                      key={name}
                      className="flex flex-col gap-3 rounded-xl border border-line bg-bg/50 p-4"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-tile">
                        <Plug className="h-4 w-4 text-fg-muted" aria-hidden />
                      </span>
                      <div>
                        <p className="text-sm font-semibold">{name}</p>
                        <p className="mt-0.5 flex items-center gap-1.5 font-mono text-[10px] text-accent">
                          <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
                          verbonden
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {tab === "Analytics" && (
                <div className="flex h-full flex-col gap-5">
                  <div className="grid grid-cols-3 gap-3">
                    <StatCard label="Gem. verwerkingstijd" value={1.8} suffix="s" decimals={1} start />
                    <StatCard label="Fouten deze maand" value={3} start />
                    <StatCard label="Uptime" value={99.9} suffix="%" decimals={1} start />
                  </div>
                  <div className="flex flex-1 flex-col rounded-xl border border-line bg-bg/50 p-5">
                    <div className="flex items-baseline justify-between">
                      <p className="text-sm font-semibold">Geautomatiseerde taken per maand</p>
                      <span className="font-mono text-[11px] text-accent">+34% dit kwartaal</span>
                    </div>
                    <div className="mt-6 flex-1">
                      <Chart tall />
                    </div>
                    <div className="mt-3 flex justify-between font-mono text-[10px] text-fg-faint">
                      <span>jan</span>
                      <span>jun</span>
                      <span>dec</span>
                    </div>
                  </div>
                </div>
              )}

              {tab === "Executies" && (
                <div className="rounded-xl border border-line bg-bg/50 p-5">
                  <div className="flex items-baseline justify-between">
                    <p className="text-sm font-semibold">Laatste executies</p>
                    <span className="font-mono text-[11px] text-fg-faint">vandaag</span>
                  </div>
                  <ul className="mt-4 flex flex-col divide-y divide-line font-mono text-[12px]">
                    {executions.map((e) => (
                      <li key={e.t} className="flex items-center gap-3 py-2.5">
                        <CircleCheck className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
                        <span className="text-fg-faint">{e.t}</span>
                        <span className="hidden text-fg-muted sm:block">{e.w}</span>
                        <span className="truncate text-fg-muted">{e.msg}</span>
                        <span className="ml-auto shrink-0 text-fg-faint">{e.d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        <p className="mt-4 text-center font-mono text-[11px] text-fg-faint">
          Interactieve demo · klik door de tabbladen voor een indruk van een Bodai-omgeving
        </p>
      </div>
    </section>
  );
}
