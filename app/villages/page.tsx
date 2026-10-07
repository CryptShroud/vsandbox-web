import { pageMeta } from "@/lib/seo";
import { mailto } from "@/lib/site";
import { VILLAGES } from "@/lib/content";
import { Button, Card, Chip, IconBadge, PageHeader, Section } from "@/components/ui";
import { JoinCta } from "@/components/blocks";
import { Reveal } from "@/components/fx";
import { Icon } from "@/components/icon";

export const metadata = pageMeta({
  title: "Villages",
  description: "Zonas prácticas de lockpicking, hardware hacking, OSINT, blue team, criptografía e ingeniería social en los eventos de V-SandBox.",
  path: "/villages",
});

export default function Villages() {
  return (
    <>
      <PageHeader
        eyebrow="Estilo DEF CON · Edición Quito"
        title={<>Villages: <span className="text-gradient">aquí se aprende con las manos</span></>}
        lead="Zonas temáticas abiertas durante nuestros eventos, con mesas, herramientas y gente que te enseña a hacer. Nada de charlas eternas."
        crumbs={[{ label: "Villages", href: "/villages" }]}
      >
        <div className="mt-8 flex flex-wrap gap-2">
          <Chip tone="brand">Entrada libre</Chip>
          <Chip>{VILLAGES.length} villages</Chip>
          <Chip>Todos los niveles</Chip>
        </div>
      </PageHeader>

      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {VILLAGES.map((v, i) => (
            <Reveal key={v.slug} delay={(i % 3) * 80}>
              <Card hover className="flex h-full flex-col p-7">
                <div className="flex items-start justify-between gap-4">
                  <IconBadge name={v.icon} />
                  <Chip>{v.level}</Chip>
                </div>
                <h2 className="font-display mt-6 text-2xl font-semibold text-fg">{v.name}</h2>
                <p className="mt-2 text-muted">{v.desc}</p>
                <ul className="mt-6 space-y-2 border-t border-line pt-5">
                  {v.activities.map((a) => (
                    <li key={a} className="flex items-center gap-3 text-sm text-fg">
                      <Icon name="chevron-right" size={14} className="text-brand-2" /> {a}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 grid items-center gap-8 rounded-[28px] border border-dashed border-brand/40 bg-brand/[0.05] p-8 md:grid-cols-[1fr_auto] md:p-12">
            <div>
              <h2 className="font-display text-2xl font-semibold text-fg md:text-3xl">¿Quieres montar tu propio village?</h2>
              <p className="mt-2 text-muted">Propón tu zona: con dos voluntarios y una mesa basta. Nosotros ponemos espacio, corriente y café.</p>
            </div>
            <Button href={mailto("Propuesta de village para V-SandBox")} icon="arrow-right">Proponer village</Button>
          </div>
        </Reveal>
      </Section>

      <JoinCta />
    </>
  );
}
