import Image from "next/image";
import { pageMeta } from "@/lib/seo";
import { SITE, PARTNERS, mailto } from "@/lib/site";
import { EDITIONS } from "@/lib/events";
import { Button, Card, Chip, IconBadge, PageHeader, Section, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/fx";

export const metadata = pageMeta({
  title: "Quiénes somos",
  description: "El equipo detrás de V-SandBox, la comunidad de ciberseguridad de Quito, y las organizaciones que la impulsan.",
  path: "/comunidad/miembros",
});

const FOUNDER = EDITIONS[0].speakers.find((s) => s.name === "Felipe Grados")!;

export default function Miembros() {
  return (
    <>
      <PageHeader
        eyebrow="El equipo"
        title="Quiénes somos"
        lead="Una comunidad de voluntarios impulsada por Vultaethel, con decenas de personas que llegan a cada edición a enseñar, competir y ayudar."
        crumbs={[{ label: "Comunidad", href: "/comunidad" }, { label: "Quiénes somos", href: "/comunidad/miembros" }]}
      />

      <Section>
        <Reveal>
          <Card className="grid overflow-hidden md:grid-cols-[340px_1fr]">
            <div className="relative min-h-80">
              <Image src={FOUNDER.img} alt={`Retrato de ${FOUNDER.name}`} fill sizes="(max-width: 768px) 100vw, 340px" className="object-cover object-top" />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <div><Chip tone="brand">Fundador</Chip></div>
              <h2 className="font-display mt-5 text-4xl font-semibold text-fg">{FOUNDER.name}</h2>
              <p className="mt-2 font-mono text-sm uppercase tracking-[0.12em] text-brand-2">{FOUNDER.role}</p>
              <p className="mt-5 max-w-xl text-lg text-muted">
                Fundó V-SandBox para crear en Quito el espacio que la escena de ciberseguridad necesitaba: técnico, abierto y hecho por la propia comunidad. Ha dado charlas en todas las ediciones, desde ransomware en vivo hasta privilege escalation.
              </p>
            </div>
          </Card>
        </Reveal>
      </Section>

      <Section className="border-y border-line bg-bg-2/50">
        <SectionHeading eyebrow="Ecosistema" title="Organizaciones que nos acompañan" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {PARTNERS.map((p, i) => (
            <Reveal key={p.name} delay={i * 60}>
              <Card className="flex h-full flex-col justify-between p-6">
                <p className="font-display text-xl font-semibold text-fg">{p.name}</p>
                <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-dim">{p.role}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <Card className="grid items-center gap-8 p-8 md:grid-cols-[auto_1fr_auto] md:p-12">
            <IconBadge name="heart" />
            <div>
              <h2 className="font-display text-2xl font-semibold text-fg md:text-3xl">Súmate al staff</h2>
              <p className="mt-2 text-muted">Registro, villages, infraestructura del CTF, foto, redes… Cada edición necesita manos. Ser voluntario es la mejor forma de conocer la comunidad por dentro.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href={mailto("Quiero ser voluntario en V-SandBox")} icon="arrow-right">Quiero ayudar</Button>
              <Button href={SITE.whatsapp} variant="secondary">Grupo</Button>
            </div>
          </Card>
        </Reveal>
      </Section>
    </>
  );
}
