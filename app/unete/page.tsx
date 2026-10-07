import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { Button, Card, IconBadge, PageHeader, Section, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/fx";
import { LogoMark } from "@/components/logo";
import { Icon } from "@/components/icon";

export const metadata = pageMeta({
  title: "Únete",
  description: "Únete a V-SandBox en 30 segundos: entra al grupo de WhatsApp de la comunidad de ciberseguridad de Quito.",
  path: "/unete",
});

const STEPS: [string, string, string][] = [
  ["01", "Entra al grupo", "Un toque en el botón verde y estás dentro. Sin formularios ni exámenes."],
  ["02", "Preséntate", "Tu nombre o nick y qué quieres aprender. Así te conectamos con la gente correcta."],
  ["03", "Ven al próximo evento", "Un meetup, una edición o un CTF. Ahí empieza lo bueno."],
];

const NEXT = [
  { href: "/eventos", title: "Eventos", desc: "Sandbox-Con, meetups y el archivo de ediciones.", icon: "calendar" },
  { href: "/ctf", title: "CTF", desc: "Arma tu equipo y captura tu primera flag.", icon: "flag" },
  { href: "/villages", title: "Villages", desc: "Lockpicking, hardware y OSINT con tus manos.", icon: "key" },
];

export default function Unete() {
  return (
    <>
      <PageHeader eyebrow="Empieza aquí" title="Únete en 30 segundos" crumbs={[{ label: "Únete", href: "/unete" }]} />

      <Section>
        <Reveal>
          <div className="card beam noise relative overflow-hidden bg-surface px-6 py-16 text-center md:px-16 md:py-20">
            <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
            <div className="orb left-1/2 top-0 h-80 w-[600px] -translate-x-1/2 bg-wa/15" aria-hidden />
            <div className="relative mx-auto max-w-2xl">
              <LogoMark size={72} className="float-y mx-auto" />
              <p className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[#6ee7a0]">
                <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-wa text-wa" /> Todo pasa en el grupo
              </p>
              <h2 className="font-display mt-5 text-4xl font-semibold leading-[1.02] text-fg md:text-6xl">
                Sin formularios.<br /><span className="text-gradient">Un toque y estás dentro.</span>
              </h2>
              <p className="mt-6 text-lg text-muted">Eventos, CTFs, ayuda, ofertas de trabajo y memes: la comunidad vive en WhatsApp.</p>
              <div className="mt-10">
                <Button href={SITE.whatsapp} variant="wa" size="lg">Unirme al grupo de WhatsApp</Button>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {STEPS.map(([k, t, d], i) => (
            <Reveal key={k} delay={i * 80}>
              <Card className="h-full p-7">
                <span className="font-display text-5xl font-semibold text-white/10">{k}</span>
                <h3 className="font-display mt-4 text-xl font-semibold text-fg">{t}</h3>
                <p className="mt-2 text-muted">{d}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line bg-bg-2/50">
        <SectionHeading eyebrow="Después del grupo" title="Tus primeras quests" />
        <div className="grid gap-4 md:grid-cols-3">
          {NEXT.map((n, i) => (
            <Reveal key={n.href} delay={i * 80}>
              <Link href={n.href} className="card card-hover spotlight group flex h-full flex-col p-7">
                <IconBadge name={n.icon} />
                <h3 className="font-display mt-6 text-xl font-semibold text-fg">{n.title}</h3>
                <p className="mt-2 flex-1 text-muted">{n.desc}</p>
                <Icon name="arrow-right" size={18} className="mt-6 text-brand-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
