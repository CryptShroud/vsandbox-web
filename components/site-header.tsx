"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, SITE } from "@/lib/site";
import { SANDBOX_CON } from "@/lib/events";
import { LogoFull } from "./logo";
import { Icon } from "./icon";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquea el scroll del fondo y permite cerrar con Escape mientras el menú móvil está abierto
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-white">
        Saltar al contenido
      </a>

      <Link
        href={`/eventos/${SANDBOX_CON.slug}`}
        className="group relative z-50 block border-b border-line bg-gradient-to-r from-brand/15 via-bg to-violet/15 py-2.5 text-center text-[13px] text-muted transition-colors hover:text-fg"
      >
        <span className="container-x flex items-center justify-center gap-2">
          <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-brand text-brand" />
          <span className="font-semibold text-fg">{SANDBOX_CON.name}</span>
          <span className="hidden sm:inline">· {SANDBOX_CON.dateLabel} · {SANDBOX_CON.venue}, Quito</span>
          <Icon name="arrow-right" size={14} className="transition-transform group-hover:translate-x-0.5" />
        </span>
      </Link>

      <header
        className={`sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
          scrolled || open ? "border-b border-line bg-bg/80 backdrop-blur-xl" : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container-x flex h-[72px] items-center gap-6">
          <Link href="/" className="shrink-0" aria-label={`${SITE.name}: inicio`} onClick={close}>
            <LogoFull height={40} priority className="h-[34px] w-auto sm:h-[40px]" />
          </Link>

          <nav aria-label="Principal" className="ml-6 hidden items-center gap-1 lg:flex">
            {NAV.map(({ label, href }) => {
              const active = isActive(pathname, href);
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active ? "text-fg" : "text-muted hover:text-fg"
                  }`}
                >
                  {label}
                  {active && <span className="absolute inset-x-4 -bottom-[17px] h-px bg-brand" aria-hidden />}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <Link href="/cfp" className="btn btn-secondary btn-sm hidden md:inline-flex">
              Call for Papers
            </Link>
            <Link href="/unete" className="btn btn-primary btn-sm">
              Únete
            </Link>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-fg lg:hidden"
              aria-expanded={open}
              aria-controls="menu-movil"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
            >
              <Icon name={open ? "x" : "menu"} size={20} />
            </button>
          </div>
        </div>

        {open && (
          <nav id="menu-movil" aria-label="Menú móvil" className="h-[calc(100dvh-72px)] overflow-y-auto border-t border-line bg-bg lg:hidden">
            <ul className="container-x py-6">
              {[{ label: "Inicio", href: "/" }, ...NAV, { label: "Call for Papers", href: "/cfp" }, { label: "Manifiesto", href: "/manifiesto" }, { label: "FAQ", href: "/faq" }, { label: "Contacto", href: "/contacto" }].map(
                ({ label, href }) => {
                  const active = href === "/" ? pathname === "/" : isActive(pathname, href);
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        onClick={close}
                        aria-current={active ? "page" : undefined}
                        className={`flex items-center justify-between border-b border-line py-4 font-display text-2xl font-semibold ${active ? "text-brand-2" : "text-fg"}`}
                      >
                        {label}
                        <Icon name="arrow-right" size={20} className="text-dim" />
                      </Link>
                    </li>
                  );
                }
              )}
            </ul>
            <div className="container-x pb-10">
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-wa w-full" onClick={close}>
                <Icon name="whatsapp" size={18} /> Unirme al grupo de WhatsApp
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
