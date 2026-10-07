import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { VALUES } from "@/lib/content";
import { Button, Card, IconBadge, PageHeader, Section, SectionHeading } from "@/components/ui";
import { JoinCta } from "@/components/blocks";
import { Reveal } from "@/components/fx";
import { Icon } from "@/components/icon";

export const metadata = pageMeta({
  title: "Comunidad",
  description: "Cómo funciona la comunidad V-SandBox: valores, reglas rápidas, ruta de participación, ponentes y equipo.",
  path: "/comunidad",
});

const HUB = [
  { title: "Ruta del hacker", desc: "De asistente a core team: cómo crecer dentro de la comunidad.", href: "/comunidad/rangos", icon: "zap" },
  { title: "Quiénes somos", desc: "El equipo y la gente que hace posible cada edición.", href: "/comunidad/miembros", icon: "users" },
  { title: "Hall of Fame", desc: "Todas las personas que han subido a nuestro escenario.", href: "/comunidad/hall-of-fame", icon: "trophy" },
  { title: "Proyectos", desc: "Iniciativas open source que buscan colaboradores.", href: "/proyectos", icon: "code" },
];

export default function Comunidad() {
  return (
    <>
      <PageHeader
        eyebrow="Town square"
        title={<>Una comunidad, <span className="text-gradient">no una audiencia</span></>}
        lead="V-SandBox nació en Quito para que la ciberseguridad se aprenda haciendo: juntos, en persona y sin elitismo."
        crumbs={[{ label: "Comunidad", href: "/comunidad" }]}
        actions={<Button href={SITE.whatsapp} variant="wa" size="lg">Entrar al grupo</Button>}
      />

      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HUB.map((h, i) => (
            <Reveal key={h.href} delay={i * 70}>
              <Link href={h.href} className="card card-hover spotlight group flex h-full flex-col p-7">
                <IconBadge name={h.icon} />
                <h2 className="font-display mt-6 text-xl font-semibold text-fg">{h.title}</h2>
                <p className="mt-2 flex-1 text-muted">{h.desc}</p>
                <Icon name="arrow-right" size={18} className="mt-6 text-brand-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-y border-line bg-bg-2/50">
        <SectionHeading eyebrow="Valores" title="Lo que nos mueve" />
        <div className="grid gap-4 md:grid-cols-2">
          {VALUES.map(([t, d, icon], i) => (
            <Reveal key={t} delay={i * 70}>
              <Card className="flex h-full gap-5 p-7">
                <IconBadge name={icon} />
                <div>
                  <h3 className="font-display text-xl font-semibold text-fg">{t}</h3>
                  <p className="mt-2 text-muted">{d}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <SectionHeading eyebrow="Reglas rápidas" title="Tres cosas antes de entrar" />
          <ol className="space-y-4">
            {[
              ["Solo labs autorizados", "Nada de «probar» en la empresa del vecino. Nunca."],
              ["Preséntate", "Cuenta quién eres y qué quieres aprender. Así te conectamos con la gente correcta."],
              ["Respeta los spoilers", "Las soluciones de retos activos van marcadas como spoiler por al menos 7 días."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 70}>
                <li className="card flex gap-5 p-6">
                  <span className="font-display text-3xl font-semibold text-brand/70">0{i + 1}</span>
                  <div>
                    <p className="font-semibold text-fg">{t}</p>
                    <p className="mt-1 text-muted">{d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
            <li className="pt-2">
              <Link href="/codigo-conducta" className="inline-flex items-center gap-2 font-semibold text-brand-2">
                Leer el código de conducta completo <Icon name="arrow-right" size={16} />
              </Link>
            </li>
          </ol>
        </div>
      </Section>

      <JoinCta />
    </>
  );
}
