import { pageMeta } from "@/lib/seo";
import { mailto } from "@/lib/site";
import { COMMUNITY_STATS } from "@/lib/events";
import { SPONSOR_TIERS } from "@/lib/content";
import { Button, Card, CheckList, Chip, IconBadge, PageHeader, Section, SectionHeading, StatBlock } from "@/components/ui";
import { PartnersStrip } from "@/components/blocks";
import { Reveal } from "@/components/fx";

export const metadata = pageMeta({
  title: "Patrocinadores",
  description: "Patrocina V-SandBox y conecta tu marca con el talento de ciberseguridad de Ecuador. Paquetes Bronce, Plata y Oro.",
  path: "/patrocinadores",
});

const WHY = [
  { icon: "briefcase", title: "Talento", desc: "Conecta con estudiantes, pentesters y analistas antes que nadie. El paquete Oro incluye acceso a la bolsa de talento." },
  { icon: "target", title: "Audiencia técnica", desc: "Nada de público genérico: gente que vive la ciberseguridad y decide qué herramientas usar." },
  { icon: "heart", title: "Impacto real", desc: "El 100 % se reinvierte en la comunidad: sedes, hardware para villages, premios del CTF y café." },
];

export default function Patrocinadores() {
  return (
    <>
      <PageHeader
        eyebrow="Fuel the community"
        title={<>Patrocina la escena hacker <span className="text-gradient">de Ecuador</span></>}
        lead="V-SandBox reúne a la próxima generación de profesionales de ciberseguridad. Tu marca puede ser parte de cada edición, cada village y cada flag."
        crumbs={[{ label: "Patrocinadores", href: "/patrocinadores" }]}
        actions={
          <>
            <Button href={mailto("Patrocinio V-SandBox", "Hola, me interesa patrocinar V-SandBox.\n\nEmpresa:\nPaquete de interés:\nContacto:\n")} size="lg" icon="arrow-right">Solicitar propuesta</Button>
            <Button href="#paquetes" variant="secondary" size="lg">Ver paquetes</Button>
          </>
        }
      >
        <div className="mt-14 grid grid-cols-2 gap-8 border-t border-line pt-10 md:grid-cols-4">
          <StatBlock value="100+" label="Asistentes Ed. 00" />
          <StatBlock value={COMMUNITY_STATS.editions} label="Ediciones" />
          <StatBlock value={COMMUNITY_STATS.speakers} label="Ponentes" />
          <StatBlock value="100%" label="Reinvertido" />
        </div>
      </PageHeader>

      <PartnersStrip title="Organizaciones que ya estuvieron con nosotros" />

      <Section>
        <SectionHeading eyebrow="Por qué" title="Más que un logo en un banner" />
        <div className="grid gap-4 md:grid-cols-3">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={i * 80}>
              <Card className="h-full p-7">
                <IconBadge name={w.icon} />
                <h3 className="font-display mt-6 text-xl font-semibold text-fg">{w.title}</h3>
                <p className="mt-2 text-muted">{w.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="paquetes" className="border-y border-line bg-bg-2/50">
        <SectionHeading eyebrow="Paquetes" title="Elige tu nivel" lead="Precios en dólares. Armamos propuestas a medida para patrocinar el CTF, un village o la comunidad todo el año." center />
        <div className="grid items-stretch gap-5 lg:grid-cols-3">
          {SPONSOR_TIERS.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <div className={`card relative flex h-full flex-col p-8 ${t.highlight ? "beam bg-surface lg:-translate-y-4" : ""}`}>
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl font-semibold text-fg">{t.name}</h3>
                  {t.highlight && <Chip tone="brand">Recomendado</Chip>}
                </div>
                <p className="mt-6">
                  <span className="font-display text-5xl font-semibold text-fg">{t.price}</span>
                  <span className="ml-2 text-sm text-dim">USD</span>
                </p>
                <CheckList className="mt-8 flex-1" items={t.perks} />
                <div className="mt-10">
                  <Button href={mailto(`Patrocinio ${t.name} · V-SandBox`)} variant={t.highlight ? "primary" : "secondary"} className="w-full">
                    Quiero el paquete {t.name}
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Card className="grid items-center gap-6 p-8 md:grid-cols-[1fr_auto] md:p-12">
          <div>
            <h2 className="font-display text-2xl font-semibold text-fg md:text-3xl">¿Prefieres algo a medida?</h2>
            <p className="mt-2 text-muted">Premios del CTF, kits de hardware, coffee break, becas de certificación… Cuéntanos qué te interesa y lo armamos juntos.</p>
          </div>
          <Button href="/contacto" icon="arrow-right">Hablemos</Button>
        </Card>
      </Section>
    </>
  );
}
