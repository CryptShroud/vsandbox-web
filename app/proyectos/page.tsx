import { pageMeta } from "@/lib/seo";
import { mailto } from "@/lib/site";
import { PROJECT_IDEAS } from "@/lib/content";
import { Button, Card, Chip, IconBadge, PageHeader, Section } from "@/components/ui";
import { Reveal } from "@/components/fx";

export const metadata = pageMeta({
  title: "Proyectos",
  description: "Proyectos open source de la comunidad V-SandBox que buscan colaboradores: plataforma CTF, labs, writeups y badge electrónico.",
  path: "/proyectos",
});

export default function Proyectos() {
  return (
    <>
      <PageHeader
        eyebrow="Open source · Roadmap"
        title="Proyectos de la comunidad"
        lead="Ideas que queremos construir juntos. Si sabes programar, diseñar o documentar, hay un lugar para ti."
        crumbs={[{ label: "Proyectos", href: "/proyectos" }]}
      />
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {PROJECT_IDEAS.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 80}>
              <Card hover className="flex h-full flex-col p-7">
                <div className="flex items-start justify-between gap-4">
                  <IconBadge name={p.icon} />
                  <Chip tone="ok">Buscando equipo</Chip>
                </div>
                <h2 className="font-display mt-6 text-2xl font-semibold text-fg">{p.name}</h2>
                <p className="mt-2 flex-1 text-muted">{p.desc}</p>
                <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-dim">{p.stack}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <Card className="mt-6 grid items-center gap-6 p-8 md:grid-cols-[1fr_auto] md:p-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-fg">¿Te sumas o tienes otra idea?</h2>
            <p className="mt-2 text-muted">Cuéntanos qué te gustaría construir y te conectamos con más gente interesada.</p>
          </div>
          <Button href={mailto("Quiero colaborar en un proyecto de V-SandBox")} icon="arrow-right">Quiero colaborar</Button>
        </Card>
      </Section>
    </>
  );
}
