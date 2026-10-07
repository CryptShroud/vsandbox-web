import Image from "next/image";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { EDITIONS, SANDBOX_CON } from "@/lib/events";
import { Button, Chip, IconBadge, PageHeader, Section, SectionHeading } from "@/components/ui";
import { EditionCard, JoinCta } from "@/components/blocks";
import { Countdown, Reveal } from "@/components/fx";
import { Icon } from "@/components/icon";

export const metadata = pageMeta({
  title: "Eventos",
  description: "Sandbox-Con 2026, meetups mensuales y el archivo completo de las ediciones de V-SandBox en Quito.",
  path: "/eventos",
});

export default function Eventos() {
  return (
    <>
      <PageHeader
        eyebrow="Calendario"
        title="Eventos"
        lead="Conferencias, CTFs y meetups presenciales en Quito. Todo se anuncia primero en el grupo de la comunidad."
        crumbs={[{ label: "Eventos", href: "/eventos" }]}
      />

      <Section>
        <SectionHeading eyebrow="Próximo" title="Lo que viene" />
        <Reveal>
          <Link href={`/eventos/${SANDBOX_CON.slug}`} className="card card-hover spotlight beam group grid overflow-hidden bg-surface lg:grid-cols-2">
            <div className="relative min-h-72 overflow-hidden">
              <Image src={SANDBOX_CON.cover.src} alt={SANDBOX_CON.cover.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/90 max-lg:bg-gradient-to-t" />
            </div>
            <div className="relative p-7 md:p-10">
              <div className="flex flex-wrap gap-2">
                <Chip tone="brand">Main event</Chip>
                <Chip>{SANDBOX_CON.venue}</Chip>
              </div>
              <h2 className="font-display mt-5 text-4xl font-semibold text-fg md:text-5xl">{SANDBOX_CON.name}</h2>
              <p className="mt-2 font-mono text-sm uppercase tracking-[0.14em] text-brand-2">{SANDBOX_CON.dateLabel}</p>
              <p className="mt-5 text-muted">{SANDBOX_CON.summary}</p>
              <div className="mt-8"><Countdown target={SANDBOX_CON.start} /></div>
              <span className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-2">
                Ver detalles <Icon name="arrow-right" size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </Reveal>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="card spotlight flex h-full flex-col p-7 md:p-8">
              <IconBadge name="users" />
              <h3 className="font-display mt-6 text-2xl font-semibold text-fg">Meetups mensuales</h3>
              <p className="mt-3 text-muted">Charlas cortas, retos y café en {SITE.hq.street}. Fechas y temas se confirman en el grupo.</p>
              <p className="mt-5 flex items-center gap-2 font-mono text-sm text-fg"><Icon name="clock" size={16} className="text-brand-2" /> {SITE.meetup}</p>
              <div className="mt-auto pt-8"><Button href={SITE.whatsapp} variant="wa" size="sm">Ver próximas fechas</Button></div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card spotlight flex h-full flex-col p-7 md:p-8">
              <IconBadge name="mic" />
              <h3 className="font-display mt-6 text-2xl font-semibold text-fg">Call for Papers</h3>
              <p className="mt-3 text-muted">¿Rompiste algo interesante? Sube al escenario de Sandbox-Con. Hay mentoría para primeras charlas.</p>
              <p className="mt-5 flex items-center gap-2 font-mono text-sm text-fg"><Icon name="calendar" size={16} className="text-brand-2" /> Cierre: {SANDBOX_CON.cfp.deadlineLabel}</p>
              <div className="mt-auto pt-8"><Button href="/cfp" size="sm" icon="arrow-right">Proponer charla</Button></div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-line bg-bg-2/50">
        <SectionHeading eyebrow="Archivo" title="Ediciones pasadas" lead="Agenda, ponentes y galería completa de cada edición." />
        <div className="grid gap-6 md:grid-cols-2">
          {EDITIONS.map((ed, i) => (
            <Reveal key={ed.slug} delay={i * 100} className="h-full">
              <EditionCard ed={ed} />
            </Reveal>
          ))}
        </div>
      </Section>

      <JoinCta title="No te pierdas el próximo evento." lead="Las fechas, los registros y los cambios de última hora se publican primero en el grupo de WhatsApp." />
    </>
  );
}
