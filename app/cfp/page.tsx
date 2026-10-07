import { pageMeta } from "@/lib/seo";
import { Card, CheckList, Chip, PageHeader, Section } from "@/components/ui";
import { CfpForm } from "@/components/cfp-form";
import { TRACKS } from "@/lib/content";
import { Reveal } from "@/components/fx";
import { Icon } from "@/components/icon";

export const metadata = pageMeta({
  title: "Proponer una charla",
  description: "Propón tu charla o taller para un meetup virtual o la próxima edición de V-SandBox. Demos en vivo y mentoría para primeras charlas.",
  path: "/cfp",
});

const FORMATS: [string, string, string][] = [
  ["Meetup virtual", "30 a 60 minutos por Zoom. El formato ideal para tu primera charla.", "globe"],
  ["Mini workshop", "Una hora práctica para que la comunidad aprenda haciendo contigo.", "terminal"],
  ["Edición presencial", "25 minutos + 5 de Q&A en el escenario de la próxima edición.", "mic"],
];

export default function Cfp() {
  return (
    <>
      <PageHeader
        eyebrow="Convocatoria abierta"
        title={<>Proponer una <span className="text-gradient">charla</span></>}
        lead="¿Rompiste algo interesante? Queremos escucharte. Recibimos propuestas todo el año, con demos en vivo antes que slides y mentoría si es tu primera vez."
        crumbs={[{ label: "Eventos", href: "/eventos" }, { label: "Proponer charla", href: "/cfp" }]}
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr]">
          <div className="space-y-6">
            <Reveal>
              <Card className="p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-dim">Formatos</p>
                <ol className="mt-5 space-y-5">
                  {FORMATS.map(([k, v, icon]) => (
                    <li key={k} className="flex gap-4">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-brand-2"><Icon name={icon} size={18} /></span>
                      <div>
                        <p className="font-semibold text-fg">{k}</p>
                        <p className="text-sm text-muted">{v}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </Card>
            </Reveal>
            <Reveal delay={80}>
              <Card className="p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-dim">Qué buscamos</p>
                <CheckList
                  className="mt-5"
                  items={[
                    "Demos en vivo: romper cosas en directo es lo nuestro.",
                    "Investigación propia, casos reales y lecciones aprendidas.",
                    "Primeras charlas bienvenidas, con mentoría incluida.",
                    "Nada de pitches de producto. Venimos a compartir.",
                  ]}
                />
              </Card>
            </Reveal>
            <Reveal delay={160}>
              <Card className="p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-dim">Tracks</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {TRACKS.map((t) => <Chip key={t}>{t}</Chip>)}
                </div>
              </Card>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="card beam bg-surface p-6 md:p-10">
              <h2 className="font-display text-3xl font-semibold text-fg">Envía tu propuesta</h2>
              <p className="mt-2 mb-8 text-muted">Revisamos cada propuesta a mano y respondemos a todas.</p>
              <CfpForm />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
