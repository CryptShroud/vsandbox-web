import { pageMeta } from "@/lib/seo";
import { SANDBOX_CON } from "@/lib/events";
import { Card, CheckList, Chip, PageHeader, Section } from "@/components/ui";
import { CfpForm } from "@/components/cfp-form";
import { TRACKS } from "@/lib/content";
import { Reveal } from "@/components/fx";
import { Icon } from "@/components/icon";

export const metadata = pageMeta({
  title: "Call for Papers",
  description: `Propón tu charla para ${SANDBOX_CON.name}: 25 minutos + Q&A, demos en vivo y mentoría para primeras charlas. Cierre: ${SANDBOX_CON.cfp.deadlineLabel}.`,
  path: "/cfp",
});

const DATES: [string, string, string][] = [
  ["Cierre del CFP", SANDBOX_CON.cfp.deadlineLabel, "calendar"],
  ["Respuestas", SANDBOX_CON.cfp.resultsLabel, "mail"],
  ["Main event", `${SANDBOX_CON.dateLabel} · ${SANDBOX_CON.venue}`, "mic"],
];

export default function Cfp() {
  return (
    <>
      <PageHeader
        eyebrow={`${SANDBOX_CON.name} · 25 min + 5 de Q&A`}
        title={<>Call for <span className="text-gradient">Papers</span></>}
        lead="¿Rompiste algo interesante? Queremos verlo en el escenario. Demos en vivo antes que slides, y mentoría si es tu primera charla."
        crumbs={[{ label: "Eventos", href: "/eventos" }, { label: "Call for Papers", href: "/cfp" }]}
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr]">
          <div className="space-y-6">
            <Reveal>
              <Card className="p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-dim">Fechas clave</p>
                <ol className="mt-5 space-y-5">
                  {DATES.map(([k, v, icon]) => (
                    <li key={k} className="flex gap-4">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-brand-2"><Icon name={icon} size={18} /></span>
                      <div>
                        <p className="text-sm text-dim">{k}</p>
                        <p className="font-semibold text-fg">{v}</p>
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
              <CfpForm deadline={SANDBOX_CON.cfp.deadline} deadlineLabel={SANDBOX_CON.cfp.deadlineLabel} />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
