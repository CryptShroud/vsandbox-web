import { pageMeta } from "@/lib/seo";
import { SITE, mailto } from "@/lib/site";
import { Button, Card, IconBadge, PageHeader, Section } from "@/components/ui";
import { Reveal } from "@/components/fx";
import { Icon } from "@/components/icon";

export const metadata = pageMeta({
  title: "Contacto",
  description: "Contacta con V-SandBox: WhatsApp de la comunidad, alianzas, prensa, patrocinio y reportes del código de conducta.",
  path: "/contacto",
});

const CHANNELS = [
  { icon: "briefcase", title: "Patrocinio y alianzas", desc: "Paquetes, propuestas a medida y colaboraciones.", subject: "Patrocinio / alianza con V-SandBox" },
  { icon: "camera", title: "Prensa", desc: "Entrevistas, material gráfico y cobertura de eventos.", subject: "Prensa · V-SandBox" },
  { icon: "mic", title: "Charlas y talleres", desc: "Propón un tema para un meetup o una edición.", subject: "Propuesta de charla o taller" },
  { icon: "shield", title: "Reporte de conducta", desc: "Confidencial. Lo revisa solo el equipo organizador.", subject: "[Confidencial] Reporte de código de conducta" },
];

export default function Contacto() {
  return (
    <>
      <PageHeader
        eyebrow="Send message"
        title="Contacto"
        lead="La forma más rápida de hablar con nosotros es el grupo de WhatsApp. Para temas formales, escríbenos por correo."
        crumbs={[{ label: "Contacto", href: "/contacto" }]}
      />
      <Section>
        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="card beam relative flex h-full flex-col overflow-hidden bg-surface p-8 md:p-10">
              <div className="orb -right-20 -top-20 h-64 w-64 bg-wa/15" aria-hidden />
              <p className="relative inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[#6ee7a0]">
                <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-wa text-wa" /> Respuesta en minutos
              </p>
              <h2 className="font-display relative mt-5 text-3xl font-semibold text-fg">Escríbenos en WhatsApp</h2>
              <p className="relative mt-3 text-muted">Dudas, eventos, ayuda técnica o simplemente saludar. El grupo es el canal oficial de la comunidad.</p>
              <div className="relative mt-auto pt-10">
                <Button href={SITE.whatsapp} variant="wa" size="lg" className="w-full">Abrir WhatsApp</Button>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {CHANNELS.map((c, i) => (
              <Reveal key={c.title} delay={i * 70}>
                <a href={mailto(c.subject)} className="card card-hover spotlight group flex h-full flex-col p-7">
                  <IconBadge name={c.icon} />
                  <h2 className="font-display mt-5 text-xl font-semibold text-fg">{c.title}</h2>
                  <p className="mt-2 flex-1 text-muted">{c.desc}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-2">
                    Escribir correo <Icon name="arrow-right" size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
        <Card className="mt-6 flex flex-wrap items-center justify-between gap-6 p-7">
          <div className="flex items-center gap-4">
            <Icon name="mail" size={22} className="text-brand-2" />
            <div>
              <p className="text-sm text-dim">Correo de la comunidad · respuesta en ~48 h</p>
              <a href={`mailto:${SITE.email}`} className="font-semibold text-fg hover:text-brand-2">{SITE.email}</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Icon name="pin" size={22} className="text-brand-2" />
            <div>
              <p className="text-sm text-dim">Base</p>
              <p className="font-semibold text-fg">{SITE.hq.street}, {SITE.hq.city}</p>
            </div>
          </div>
        </Card>
      </Section>
    </>
  );
}
