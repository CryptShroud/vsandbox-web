import Link from "next/link";
import { SITE } from "@/lib/site";
import { LogoFull } from "./logo";
import { Icon } from "./icon";

const COLUMNS: { title: string; links: [string, string][] }[] = [
  {
    title: "Eventos",
    links: [
      ["Todos los eventos", "/eventos"],
      ["Sandbox-Con 2026", "/eventos/sandbox-con-2026"],
      ["Edición 01", "/eventos/edicion-01"],
      ["Edición 00", "/eventos/edicion-00"],
      ["Call for Papers", "/cfp"],
    ],
  },
  {
    title: "Comunidad",
    links: [
      ["Manifiesto", "/manifiesto"],
      ["Ruta del hacker", "/comunidad/rangos"],
      ["Ponentes", "/comunidad/hall-of-fame"],
      ["Quiénes somos", "/comunidad/miembros"],
      ["Proyectos", "/proyectos"],
    ],
  },
  {
    title: "Juega",
    links: [
      ["CTF", "/ctf"],
      ["Reglas del CTF", "/ctf/reglas"],
      ["Arma tu equipo", "/ctf/equipos"],
      ["Archivo de CTFs", "/ctf/archivo"],
      ["Villages", "/villages"],
    ],
  },
  {
    title: "Ayuda",
    links: [
      ["Patrocinadores", "/patrocinadores"],
      ["FAQ", "/faq"],
      ["Contacto", "/contacto"],
      ["Código de conducta", "/codigo-conducta"],
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-line bg-bg-2">
      <div className="orb -bottom-60 left-1/2 h-[400px] w-[900px] -translate-x-1/2 bg-brand/10" aria-hidden />
      <div className="container-x relative grid gap-12 py-16 md:py-20 lg:grid-cols-[1.3fr_2fr]">
        <div>
          <LogoFull height={40} />
          <p className="mt-6 max-w-sm text-muted">{SITE.description}</p>
          <address className="mt-6 space-y-2 not-italic text-sm text-dim">
            <p className="flex items-center gap-2"><Icon name="pin" size={16} /> {SITE.hq.street} · {SITE.hq.city}</p>
            <p className="flex items-center gap-2">
              <Icon name="mail" size={16} />
              <a href={`mailto:${SITE.email}`} className="hover:text-fg">{SITE.email}</a>
            </p>
          </address>
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-sm mt-8">
            <Icon name="whatsapp" size={16} /> Grupo de WhatsApp
          </a>
        </div>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-dim">{col.title}</p>
              <ul className="mt-5 space-y-3 text-sm">
                {col.links.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="text-muted transition-colors hover:text-fg">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="relative border-t border-line">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-xs text-dim sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.fullName} · Hecho en Quito con café y nmap · Impulsado por{" "}
            <a href={SITE.organizer.url} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-fg">{SITE.organizer.name}</a>
          </p>
          <div className="flex gap-6">
            <Link href="/privacidad" className="hover:text-fg">Privacidad</Link>
            <Link href="/terminos" className="hover:text-fg">Términos</Link>
            <Link href="/codigo-conducta" className="hover:text-fg">Conducta</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
