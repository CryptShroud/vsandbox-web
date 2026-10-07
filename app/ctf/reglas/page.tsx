import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { CTF_RULES } from "@/lib/content";
import { Button, Card, PageHeader, Section } from "@/components/ui";
import { Reveal } from "@/components/fx";

export const metadata = pageMeta({
  title: "Reglas del CTF",
  description: "Reglas de juego limpio para los CTFs de V-SandBox: equipos, alcance, infraestructura y writeups.",
  path: "/ctf/reglas",
});

export default function CtfReglas() {
  return (
    <>
      <PageHeader
        eyebrow="Fair play"
        title="Reglas del CTF"
        lead="Pocas reglas, claras y no negociables. Están para que la competencia sea justa y divertida para todos."
        crumbs={[{ label: "CTF", href: "/ctf" }, { label: "Reglas", href: "/ctf/reglas" }]}
      />
      <Section>
        <ol className="grid gap-4 md:grid-cols-2">
          {CTF_RULES.map(([t, d], i) => (
            <Reveal key={t} delay={i * 60}>
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
        <p className="mt-10 text-muted">
          Estas reglas complementan el <Link href="/codigo-conducta" className="text-brand-2 underline underline-offset-4">código de conducta</Link>. La organización puede descalificar a cualquier equipo que las incumpla.
        </p>
        <div className="mt-8"><Button href="/ctf/equipos" icon="arrow-right">Arma tu equipo</Button></div>
      </Section>
    </>
  );
}
