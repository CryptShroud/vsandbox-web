import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { SANDBOX_CON } from "@/lib/events";
import { Button, Card, Chip, IconBadge, PageHeader, Section, SectionHeading } from "@/components/ui";
import { Countdown, HackConsole, Reveal } from "@/components/fx";
import { JoinCta } from "@/components/blocks";
import { Icon } from "@/components/icon";

export const metadata = pageMeta({
  title: "CTF",
  description: `Capture The Flag de V-SandBox: el CTF de ${SANDBOX_CON.name} por equipos, reglas, cómo armar tu equipo y archivo de competencias.`,
  path: "/ctf",
});

const HUB = [
  { title: "Reglas", desc: "Formato, alcance y juego limpio.", href: "/ctf/reglas", icon: "shield" },
  { title: "Scoreboard", desc: "La clasificación en vivo durante la competencia.", href: "/ctf/ranking", icon: "trophy" },
  { title: "Equipos", desc: "Cómo armar o encontrar tu equipo.", href: "/ctf/equipos", icon: "users" },
  { title: "Archivo", desc: "Los CTFs de ediciones anteriores.", href: "/ctf/archivo", icon: "book" },
];

export default function Ctf() {
  return (
    <>
      <PageHeader
        eyebrow={`${SANDBOX_CON.ctf.format} · ${SANDBOX_CON.dateLabel}`}
        title={<>Capture <span className="text-gradient">The Flag</span></>}
        lead="Retos diseñados por la comunidad, infraestructura propia y una sala llena de equipos peleando por cada flag."
        crumbs={[{ label: "CTF", href: "/ctf" }]}
        actions={
          <>
            <Button href={SITE.whatsapp} variant="wa" size="lg">Inscribir mi equipo</Button>
            <Button href="/ctf/reglas" variant="secondary" size="lg" icon="arrow-right">Leer las reglas</Button>
          </>
        }
      />

      <Section>
        <Reveal>
          <div className="card beam noise relative grid gap-10 overflow-hidden bg-surface p-7 md:p-12 lg:grid-cols-2">
            <div className="orb -left-20 -top-20 h-80 w-80 bg-brand/20" aria-hidden />
            <div className="relative">
              <Chip tone="brand">{SANDBOX_CON.name}</Chip>
              <h2 className="font-display mt-5 text-4xl font-semibold text-fg md:text-5xl">El CTF del main event</h2>
              <p className="mt-4 text-lg text-muted">{SANDBOX_CON.ctf.teams}. {SANDBOX_CON.ctf.prizes}.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {SANDBOX_CON.ctf.categories.map((c) => <Chip key={c}>{c}</Chip>)}
              </div>
            </div>
            <div className="relative self-center">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-dim">Arranca en</p>
              <Countdown target={SANDBOX_CON.start} doneLabel="El CTF ya arrancó" />
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HUB.map((h, i) => (
            <Reveal key={h.href} delay={i * 70}>
              <Link href={h.href} className="card card-hover spotlight group flex h-full flex-col p-7">
                <IconBadge name={h.icon} />
                <h3 className="font-display mt-6 text-xl font-semibold text-fg">{h.title}</h3>
                <p className="mt-2 flex-1 text-muted">{h.desc}</p>
                <Icon name="arrow-right" size={18} className="mt-6 text-brand-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-y border-line bg-bg-2/50">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Primera vez" title="¿Nunca jugaste un CTF?" lead="Un CTF es una competencia en la que resuelves retos de seguridad para encontrar «flags»: cadenas de texto escondidas que valen puntos." />
            <ol className="space-y-4">
              {[
                ["Prepara tu máquina", "Una VM con Kali, Parrot o tu distro favorita. Nada más."],
                ["Únete a un equipo", "Si llegas solo, en el grupo te ayudamos a encontrar compañeros."],
                ["Empieza por lo fácil", "Cada categoría tiene retos de entrada. Suma puntos y aprende."],
                ["Pregunta y comparte", "Después del cierre, los writeups son donde más se aprende."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-4">
                  <span className="font-mono text-sm text-brand-2">0{i + 1}</span>
                  <div>
                    <p className="font-semibold text-fg">{t}</p>
                    <p className="text-muted">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <Reveal delay={100}><HackConsole /></Reveal>
        </div>
      </Section>

      <Section>
        <Card className="grid items-center gap-6 p-8 md:grid-cols-[1fr_auto] md:p-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-fg md:text-3xl">¿Tu empresa quiere un reto con su nombre?</h2>
            <p className="mt-2 text-muted">El paquete Oro incluye el naming de un reto del CTF y acceso al talento que lo resuelva.</p>
          </div>
          <Button href="/patrocinadores" variant="secondary" icon="arrow-right">Patrocinar el CTF</Button>
        </Card>
      </Section>

      <JoinCta title="Arma tu equipo en el grupo." />
    </>
  );
}
