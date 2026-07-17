"use client";

import { useEffect } from "react";

const CAL_LINK = "leadz-systems-2yvqzu";

type CalApi = {
  (...args: unknown[]): void;
  q: unknown[][];
  ns: Record<string, CalApi>;
  loaded?: boolean;
};

declare global {
  interface Window {
    Cal?: CalApi;
  }
}

/* Officiële cal.com inline-embed loader, getypeerde variant */
function loadCal(): CalApi {
  if (window.Cal) return window.Cal;

  const push = (api: CalApi, args: unknown[]) => {
    api.q.push(args);
  };

  const cal = function (...args: unknown[]) {
    if (!cal.loaded) {
      cal.ns = {};
      cal.q = cal.q || [];
      const script = document.createElement("script");
      script.src = "https://app.cal.com/embed/embed.js";
      document.head.appendChild(script);
      cal.loaded = true;
    }
    if (args[0] === "init" && typeof args[1] === "string") {
      const namespace = args[1];
      const api = function (...a: unknown[]) {
        push(api, a);
      } as CalApi;
      api.q = api.q || [];
      api.ns = {};
      cal.ns[namespace] = cal.ns[namespace] || api;
      push(cal.ns[namespace], args);
      push(cal, ["initNamespace", namespace]);
      return;
    }
    push(cal, args);
  } as CalApi;

  cal.q = [];
  cal.ns = {};
  window.Cal = cal;
  return cal;
}

export function CalEmbed() {
  useEffect(() => {
    const theme =
      document.documentElement.dataset.theme === "light" ? "light" : "dark";
    const Cal = loadCal();
    Cal("init", "agenda", { origin: "https://cal.com" });
    Cal.ns.agenda("inline", {
      elementOrSelector: "#cal-inline",
      calLink: CAL_LINK,
      config: { layout: "month_view", theme },
    });
    Cal.ns.agenda("ui", {
      theme,
      cssVarsPerTheme: {
        dark: { "cal-brand": "#b8ff3d" },
        light: { "cal-brand": "#4a8500" },
      },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return (
    <div
      id="cal-inline"
      className="overflow-hidden rounded-2xl border border-line bg-card"
      style={{ width: "100%", minHeight: 640 }}
    />
  );
}
