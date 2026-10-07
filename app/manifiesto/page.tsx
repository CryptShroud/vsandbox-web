import { pageMeta } from "@/lib/seo";
import { VALUES } from "@/lib/content";
import { Card, Container, IconBadge, PageHeader, Section } from "@/components/ui";
import { JoinCta } from "@/components/blocks";
import { Reveal } from "@/components/fx";

export const metadata = pageMeta({
  title: "Manifiesto",
  description: "Por qué existe V-SandBox: una comunidad hacker en Quito que cree que la seguridad se aprende haciendo.",
  path: "/manifiesto",
});

const LINES = [
  "Creemos que la seguridad se aprende rompiendo cosas: en laboratorios, en CTFs y con buena gente al lado.",
  "Creemos que el conocimiento que no se comparte no sirve. Por eso cada charla, cada reto y cada writeup es para todos.",
  "Creemos que en Ecuador hay talento de sobra y que solo le faltaba un lugar donde encontrarse.",
  "Creemos en hackear con ética: con permiso, con alcance y con la intención de proteger.",
];

export default function Manifiesto() {
  return (
    <>
      <PageHeader
        eyebrow="Lore"
        title="Manifiesto"
        lead="De «me hackearon» a «yo encuentro el bug». Esa es la misión."
        crumbs={[{ label: "Manifiesto", href: "/manifiesto" }]}
      />

      <section className="py-20 md:py-28">
        <Container className="max-w-4xl">
          <div className="space-y-10">
            {LINES.map((l, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className="font-display text-2xl font-medium leading-snug text-fg md:text-4xl">
                  <span className="mr-3 font-mono text-base text-brand-2 md:text-lg">0{i + 1}</span>
                  {l}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Section className="border-y border-line bg-bg-2/50">
        <div className="grid gap-4 md:grid-cols-2">
          {VALUES.map(([t, d, icon], i) => (
            <Reveal key={t} delay={i * 70}>
              <Card className="flex h-full gap-5 p-7">
                <IconBadge name={icon} />
                <div>
                  <h2 className="font-display text-xl font-semibold text-fg">{t}</h2>
                  <p className="mt-2 text-muted">{d}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <JoinCta eyebrow="Si leíste hasta aquí" title="Ya eres de los nuestros." />
    </>
  );
}
