import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { COLLABS, COMMUNITY_STATS, EDITIONS, LABS, MEETUPS } from "@/lib/events";
import { Button, PageHeader, Section, SectionHeading, StatBlock } from "@/components/ui";
import { CommunityEventCard, EditionCard, JoinCta } from "@/components/blocks";
import { Reveal } from "@/components/fx";
import { Icon } from "@/components/icon";

export const metadata = pageMeta({
  title: "Eventos",
  description: "Ediciones presenciales, meetups virtuales, eventos con aliados y laboratorios: todo el archivo de V-SandBox en Quito.",
  path: "/eventos",
});

export default function Eventos() {
  return (
    <>
      <PageHeader
        eyebrow="Calendario y archivo"
        title="Eventos"
        lead="Ediciones presenciales, meetups virtuales, eventos con aliados y laboratorios prácticos. Todo lo que ha pasado en la comunidad, en un solo lugar."
        crumbs={[{ label: "Eventos", href: "/eventos" }]}
      >
        <div className="mt-12 grid max-w-2xl grid-cols-2 gap-8 border-t border-line pt-8 sm:grid-cols-4">
          <StatBlock value={COMMUNITY_STATS.events} label="Eventos" />
          <StatBlock value={COMMUNITY_STATS.editions} label="Ediciones" />
          <StatBlock value={COMMUNITY_STATS.meetups} label="Meetups" />
          <StatBlock value="100+" label="Asistentes Ed. 00" />
        </div>
      </PageHeader>

      <Section className="!pb-0">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-dashed border-brand/40 bg-brand/[0.05] p-8 md:p-12">
            <div className="orb -right-16 -top-16 h-64 w-64 bg-brand/20" aria-hidden />
            <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-brand-2">
                  <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-brand text-brand" /> Próximamente
                </p>
                <h2 className="font-display mt-4 text-3xl font-semibold text-fg md:text-4xl">Los próximos eventos se anuncian pronto.</h2>
                <p className="mt-3 max-w-xl text-muted">Por ahora no hay una fecha confirmada. Todo se publica primero en el grupo de WhatsApp, y aquí en cuanto esté listo.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href={SITE.whatsapp} variant="wa">Enterarme primero</Button>
                <Button href="/cfp" variant="secondary" icon="arrow-right">Proponer una charla</Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section id="ediciones">
        <SectionHeading eyebrow="Presenciales" title="Ediciones" lead="Las conferencias de V-SandBox: charlas técnicas, demos en vivo y CTF. Cada una, una fase de la cadena de ataque." />
        <div className="grid gap-6 md:grid-cols-2">
          {EDITIONS.map((ed, i) => (
            <Reveal key={ed.slug} delay={i * 100} className="h-full">
              <EditionCard ed={ed} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="meetups" className="border-y border-line bg-bg-2/50">
        <SectionHeading eyebrow="Online · cada semana o dos" title="Meetups virtuales" lead="Mini workshops y charlas por Zoom con invitados de la comunidad. Gratis y abiertos a todos los niveles." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MEETUPS.map((ev, i) => (
            <Reveal key={ev.slug} delay={(i % 4) * 70} className="h-full">
              <CommunityEventCard ev={ev} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="comunidad">
        <SectionHeading eyebrow="Fuera de casa" title="En comunidad" lead="Eventos de aliados donde V-SandBox estuvo presente, y el laboratorio práctico de Red Team." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[...COLLABS, ...LABS].map((ev, i) => (
            <Reveal key={ev.slug} delay={(i % 3) * 70} className="h-full">
              <CommunityEventCard ev={ev} />
            </Reveal>
          ))}
        </div>
        <p className="mt-10 flex items-center gap-2 text-sm text-dim"><Icon name="camera" size={16} /> ¿Tienes fotos de algún evento? Compártelas en el grupo y las sumamos al archivo.</p>
      </Section>

      <JoinCta title="No te pierdas el próximo evento." lead="Las fechas, los registros y los cambios de última hora se publican primero en el grupo de WhatsApp." />
    </>
  );
}
