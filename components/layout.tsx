"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { LogoMark, LogoFull, LogoInk } from "./logo";

const NAV: [string, string][] = [
  ["CTF", "/ctf"],
  ["Villages", "/villages"],
  ["Eventos", "/eventos"],
  ["Comunidad", "/comunidad"],
];

export function Navbar() {
  const { lang, setLang, t } = useLang();
  return (
    <header className="sticky top-0 z-50 border-b border-[#e7e0d4] bg-[#faf9f7]/85 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 flex items-center gap-2 sm:gap-3 h-[72px]">
        <Link href="/" className="flex items-center shrink-0 group min-w-0" aria-label="V-SandBox inicio">
          <span className="transition-all duration-300 group-hover:opacity-90 inline-block">
            <LogoInk height={30} className="h-[24px] sm:h-[30px] w-auto" />
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-7 ml-8">
          {NAV.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#4a443b] hover:text-[#ff4d00] transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="font-pixel text-[10px] px-3 py-2 rounded-full border border-[#e7e0d4] text-[#4a443b] hover:border-[#16130e] transition cursor-pointer bg-white"
            aria-label="toggle language"
          >
            {lang === "es" ? "ES" : "EN"}
          </button>
          <Link href="/unete" className="pixel-btn !py-2.5 !px-5">
            {t.join} →
          </Link>
        </div>
      </div>
      <nav className="lg:hidden flex gap-6 overflow-x-auto no-scrollbar px-4 pb-3">
        {NAV.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#4a443b] hover:text-[#ff4d00] whitespace-nowrap"
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-[#16130e] text-[#faf9f7] mt-20 rounded-t-[32px]">
      <div className="mx-auto max-w-6xl px-4 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="mb-4"><LogoFull height={36} /></div>
          <p className="text-[#a39e93]">Comunidad hacker de Quito. Aprende, compite, comparte.</p>
          <p className="text-[#a39e93] mt-1">La Floresta, Valladolid N24-120 · Quito, Ecuador</p>
          <p className="font-pixel text-[10px] text-[#ff9d00] mt-4 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            SERVER ONLINE · UIO-01
          </p>
        </div>
        <div>
          <p className="font-pixel text-[10px] text-[#a39e93] mb-4">MAPA</p>
          <ul className="space-y-2 font-semibold">
            <li><Link href="/manifiesto" className="hover:text-[#ff9d00] transition-colors">Manifiesto</Link></li>
            <li><Link href="/ctf" className="hover:text-[#ff9d00] transition-colors">CTF</Link></li>
            <li><Link href="/villages" className="hover:text-[#ff9d00] transition-colors">Villages</Link></li>
            <li><Link href="/eventos" className="hover:text-[#ff9d00] transition-colors">Eventos</Link></li>
            <li><Link href="/proyectos" className="hover:text-[#ff9d00] transition-colors">Proyectos</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-pixel text-[10px] text-[#a39e93] mb-4">AYUDA</p>
          <ul className="space-y-2 font-semibold">
            <li><Link href="/faq" className="hover:text-[#ff9d00] transition-colors">FAQ</Link></li>
            <li><Link href="/cfp" className="hover:text-[#ff9d00] transition-colors">Call for Papers</Link></li>
            <li><Link href="/patrocinadores" className="hover:text-[#ff9d00] transition-colors">Patrocinadores</Link></li>
            <li><Link href="/contacto" className="hover:text-[#ff9d00] transition-colors">Contacto</Link></li>
            <li><Link href="/codigo-conducta" className="hover:text-[#ff9d00] transition-colors">Código de conducta</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-pixel text-[10px] text-[#a39e93] mb-4">CANALES</p>
          <ul className="space-y-2 font-semibold">
            <li><a href="https://chat.whatsapp.com/JQUY0vBwG44GGVkwZEonA5" target="_blank" rel="noopener noreferrer" className="text-[#4ade80] hover:text-[#86efac] transition-colors">WhatsApp · grupo principal</a></li>
            <li><span className="text-[#a39e93]">Twitch · streams viernes</span></li>
            <li><span className="text-[#a39e93]">GitHub · org vsandbox</span></li>
            <li><Link href="/unete" className="text-[#ff9d00] hover:text-[#ffb000] transition-colors">→ {t.join}</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center font-pixel text-[10px] text-[#a39e93]">
        {t.footer_note} — <Link href="/terminos" className="hover:text-[#ff9d00]">TÉRMINOS</Link>
      </div>
    </footer>
  );
}

export { LogoMark };
