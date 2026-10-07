import { pageMeta } from "@/lib/seo";
import { SITE, mailto } from "@/lib/site";
import { CODE_OF_CONDUCT } from "@/lib/content";
import { Button, Card, PageHeader, Section } from "@/components/ui";
import { Reveal } from "@/components/fx";

export const metadata = pageMeta({
  title: "Código de conducta",
  description: "Las reglas que hacen de V-SandBox un espacio seguro: hacking ético, cero acoso y respeto por la comunidad.",
  path: "/codigo-conducta",
});

export default function Codigo() {
  return (
    <>
      <PageHeader
        eyebrow="v1.1"
        title="Código de conducta"
        lead="Aplica en el grupo, en los meetups, en las ediciones y en cualquier espacio de V-SandBox. Participar implica aceptarlo."
        crumbs={[{ label: "Código de conducta", href: "/codigo-conducta" }]}
      />
      <Section>
        <ol className="grid gap-4 md:grid-cols-2">
          {CODE_OF_CONDUCT.map(([t, d], i) => (
            <Reveal key={t} delay={(i % 2) * 70}>
              <Card className="flex h-full gap-5 p-7">
                <span className="font-display text-4xl font-semibold text-brand/70">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h2 className="font-display text-xl font-semibold text-fg">{t}</h2>
                  <p className="mt-2 text-muted">{d}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </ol>
        <Card className="mt-6 grid items-center gap-6 border-brand/30 p-8 md:grid-cols-[1fr_auto]">
          <div>
            <h2 className="font-display text-2xl font-semibold text-fg">¿Viste algo que no está bien?</h2>
            <p className="mt-2 text-muted">Escríbenos a {SITE.email} o habla con cualquier persona del staff durante un evento. Todos los reportes son confidenciales.</p>
          </div>
          <Button href={mailto("[Confidencial] Reporte de código de conducta")} icon="arrow-right">Reportar</Button>
        </Card>
      </Section>
    </>
  );
}
