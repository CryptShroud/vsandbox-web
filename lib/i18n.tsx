"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "es" | "en";

const dict = {
  es: {
    start: "PRESS START",
    join: "ÚNETE",
    home: "INICIO",
    manifesto: "MANIFIESTO",
    academy: "ACADEMIA",
    ctf: "CTF",
    blog: "BLOG",
    events: "EVENTOS",
    resources: "RECURSOS",
    community: "COMUNIDAD",
    jobs: "EMPLEO",
    hero_sub: "Comunidad hispana de ciberseguridad. Aprende, compite y comparte botín.",
    quest_log: "QUEST LOG",
    boss_battle: "BOSS BATTLE",
    terminal_logs: "TERMINAL LOGS",
    ranking: "RANKING",
    view_all: "VER TODO >",
    footer_note: "Hecho con café y nmap. V-SANDBOX © 2026.",
  },
  en: {
    start: "PRESS START",
    join: "JOIN US",
    home: "HOME",
    manifesto: "MANIFESTO",
    academy: "ACADEMY",
    ctf: "CTF",
    blog: "BLOG",
    events: "EVENTS",
    resources: "RESOURCES",
    community: "COMMUNITY",
    jobs: "JOBS",
    hero_sub: "Cybersecurity community. Learn, compete and share loot.",
    quest_log: "QUEST LOG",
    boss_battle: "BOSS BATTLE",
    terminal_logs: "TERMINAL LOGS",
    ranking: "LEADERBOARD",
    view_all: "VIEW ALL >",
    footer_note: "Built with coffee and nmap. V-SANDBOX © 2026.",
  },
} as const;

export type Dict = (typeof dict)[Lang];

const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Dict }>({
  lang: "es",
  setLang: () => {},
  t: dict.es,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  return (
    <LangCtx.Provider value={{ lang, setLang, t: dict[lang] }}>
      {children}
    </LangCtx.Provider>
  );
}

export function useLang() {
  return useContext(LangCtx);
}
