import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EVENTS, getEvent, type Edition, type MainEvent } from "@/lib/events";
import { pageMeta, jsonLd } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { BeforeAfter, Countdown, CountUp, Reveal, Tilt } from "@/components/fx";
import { Button, Card, CheckList, Chip, Container, Eyebrow, IconBadge, PageHeader, Section, SectionHeading } from "@/components/ui";
import { JoinCta, PartnersStrip, SpeakerCard } from "@/components/blocks";
import { Gallery } from "@/components/gallery";
import { Icon } from "@/components/icon";
import { VILLAGES } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return EVENTS.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: PageProps<"/eventos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const ev = getEvent(slug);
  if (!ev) return {};
  const title = ev.kind === "main" ? ev.name : `${ev.name}: ${ev.codename}`;
  return pageMeta({ title, description: ev.summary, path: `/eventos/${ev.slug}` });
}

function eventLd(ev: Edition | MainEvent) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: ev.kind === "main" ? ev.name : `${ev.name}: ${ev.codename}`,
    description: ev.summary,
    startDate: ev.start,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    image: [`${SITE.url}${ev.cover.src}`],
    location: { "@type": "Place", name: ev.venue, address: { "@type": "PostalAddress", streetAddress: ev.address, addressLocality: "Quito", addressCountry: "EC" } },
    organizer: { "@type": "Organization", name: SITE.fullName, url: SITE.url },
    ...(ev.kind === "edition" ? { performer: ev.speakers.map((s) => ({ "@type": "Person", name: s.name })) } : {}),
  };
}

export default async function EventPage({ params }: PageProps<"/eventos/[slug]">) {
  const { slug } = await params;
  const ev = getEvent(slug);
  if (!ev) notFound();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(eventLd(ev))} />
      {ev.kind === "main" ? <MainEventView ev={ev} /> : <EditionView ed={ev} />}
    </>
  );
}

/* ================= Sandbox-Con (próximo) ================= */
function MainEventView({ ev }: { ev: MainEvent }) {
  return (
    <>
      <PageHeader
        eyebrow={`${ev.codename} · ${ev.dateLabel}`}
        title={<>{ev.name.replace(" 2026", "")} <span className="text-gradient">2026</span></>}
        lead={ev.lead}
        crumbs={[{ label: "Eventos", href: "/eventos" }, { label: ev.name, href: `/eventos/${ev.slug}` }]}
        actions={
          <>
            <Button href={SITE.whatsapp} variant="wa" size="lg">Quiero ir</Button>
            <BeforeAfter
              date={ev.cfp.deadline}
              before={<Button href="/cfp" variant="secondary" size="lg" icon="arrow-right">Proponer charla</Button>}
              after={<Button href="/ctf" variant="secondary" size="lg" icon="arrow-right">Ver el CTF</Button>}
            />
          </>
        }
      >
        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {[
              ["calendar", "Fecha", `${ev.dateLabel} · 09:00`],
              ["pin", "Lugar", `${ev.venue}, ${ev.address}`],
              ["ticket", "Registro", "Novedades en el grupo de WhatsApp"],
            ].map(([icon, k, v]) => (
              <div key={k} className="flex items-start gap-4 rounded-2xl border border-line bg-white/[0.03] p-4">
                <Icon name={icon} size={20} className="mt-0.5 text-brand-2" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-dim">{k}</p>
                  <p className="mt-1 text-fg">{v}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="card beam bg-surface p-6 md:p-8">
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-dim">Cuenta regresiva</p>
            <Countdown target={ev.start} />
          </div>
        </div>
      </PageHeader>

      <Section>
        <SectionHeading eyebrow="El formato" title="Un día, cuatro frentes" lead="Elige tu modo: escuchar, competir, tocar hardware o conectar. O todos a la vez." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ev.formats.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <Card hover className="h-full p-7">
                <IconBadge name={f.icon} />
                <h3 className="font-display mt-6 text-xl font-semibold text-fg">{f.title}</h3>
                <p className="mt-2 text-muted">{f.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-y border-line bg-bg-2/50">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Capture The Flag</Eyebrow>
            <h2 className="font-display mt-5 text-4xl font-semibold text-fg md:text-5xl">El CTF de Sandbox-Con</h2>
            <p className="mt-5 text-lg text-muted">Formato {ev.ctf.format.toLowerCase()} con retos diseñados por la comunidad. {ev.ctf.teams}.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {ev.ctf.categories.map((c) => <Chip key={c} tone="brand">{c}</Chip>)}
            </div>
            <CheckList className="mt-8" items={[ev.ctf.prizes, "Equipos mixtos y principiantes bienvenidos", "Reglas claras y juego limpio"]} />
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/ctf/equipos" icon="arrow-right">Arma tu equipo</Button>
              <Button href="/ctf/reglas" variant="secondary">Reglas</Button>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-3">
              {VILLAGES.map((v) => (
                <div key={v.slug} className="rounded-2xl border border-line bg-white/[0.02] p-5">
                  <Icon name={v.icon} size={22} className="text-brand-2" />
                  <p className="mt-3 font-semibold text-fg">{v.name}</p>
                  <p className="mt-1 text-xs text-dim">Village</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="grid items-center gap-10 rounded-[32px] border border-line bg-gradient-to-br from-brand/10 via-surface to-violet/10 p-8 md:p-14 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <Eyebrow>Call for Papers</Eyebrow>
              <h2 className="font-display mt-5 text-3xl font-semibold text-fg md:text-4xl">¿Rompiste algo interesante? Enséñalo en el main stage.</h2>
              <p className="mt-4 text-muted">Charlas de 25 minutos + 5 de Q&A. Cierre: {ev.cfp.deadlineLabel}. Respuestas antes del {ev.cfp.resultsLabel}.</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button href="/cfp" size="lg" icon="arrow-right">Enviar propuesta</Button>
            </div>
          </div>
        </Reveal>
      </Section>

      <PartnersStrip title="Aliados de ediciones anteriores" />
      <JoinCta title="Nos vemos el 08 de noviembre." />
    </>
  );
}

/* ================= Edición archivada ================= */
function EditionView({ ed }: { ed: Edition }) {
  const anchors: [string, string][] = [["Recap", "#recap"], ["Agenda", "#agenda"], ["Ponentes", "#ponentes"], ...(ed.ctf ? ([["CTF", "#ctf"]] as [string, string][]) : []), ["Galería", "#galeria"]];
  return (
    <>
      <header className="noise relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 bg-grid" aria-hidden />
        <div className="orb -top-40 left-0 h-[480px] w-[480px] bg-brand/20" aria-hidden />
        <div className="orb -bottom-40 right-0 h-[420px] w-[420px] bg-violet/20" aria-hidden />
        <Container className="relative grid items-center gap-12 py-14 md:py-20 lg:grid-cols-2">
          <div>
            <nav aria-label="Migas de pan" className="mb-8 font-mono text-xs text-dim">
              <Link href="/" className="hover:text-fg">Inicio</Link> <span className="mx-1">/</span>{" "}
              <Link href="/eventos" className="hover:text-fg">Eventos</Link> <span className="mx-1">/</span>{" "}
              <span aria-current="page" className="text-muted">Edición {ed.number}</span>
            </nav>
            <div className="flex flex-wrap gap-2">
              <Chip tone="brand">Edición {ed.number}</Chip>
              <Chip tone="ok">Archivada</Chip>
            </div>
            <h1 className="font-display mt-6 text-5xl font-semibold leading-[0.95] text-fg md:text-7xl">
              {ed.name}
              <span className="mt-3 block text-2xl text-gradient md:text-4xl">{ed.codename}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">{ed.lead}</p>
            <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-line bg-white/[0.03] p-4">
                <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-dim"><Icon name="calendar" size={14} /> Fecha</p>
                <p className="mt-2 font-semibold text-fg">{ed.dateLabel}</p>
                <p className="text-sm text-muted">{ed.timeLabel}</p>
              </div>
              <div className="rounded-2xl border border-line bg-white/[0.03] p-4">
                <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-dim"><Icon name="pin" size={14} /> Lugar</p>
                <p className="mt-2 font-semibold text-fg">{ed.venue}</p>
                <p className="text-sm text-muted">{ed.address}</p>
              </div>
            </div>
          </div>
          <Tilt max={5}>
            <div className="relative">
              <span className="font-display pointer-events-none absolute -top-16 right-0 select-none text-[10rem] font-bold leading-none text-white/[0.04] md:text-[14rem]" aria-hidden>{ed.number}</span>
              <div className="card relative overflow-hidden p-2">
                <div className="relative overflow-hidden rounded-[14px]" style={{ aspectRatio: `${ed.cover.w}/${ed.cover.h}` }}>
                  <Image src={ed.cover.src} alt={ed.cover.alt} fill priority sizes="(max-width: 1024px) 100vw, 560px" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <p className="absolute bottom-4 left-4 font-mono text-[11px] uppercase tracking-[0.16em] text-white/80">{ed.venue} · {ed.dateLabel.split(" ").slice(1, 4).join(" ")}</p>
                </div>
              </div>
            </div>
          </Tilt>
        </Container>
        <Container className="relative pb-12">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
            {ed.stats.map((s) => (
              <div key={s.label} className="bg-bg p-6">
                <dd className="font-display text-4xl font-semibold text-fg"><CountUp to={s.value} suffix={s.suffix} /></dd>
                <dt className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-dim">{s.label}</dt>
              </div>
            ))}
          </dl>
        </Container>
      </header>

      <nav aria-label="Secciones" className="sticky top-[72px] z-30 border-b border-line bg-bg/80 backdrop-blur-xl">
        <Container className="no-scrollbar flex gap-1 overflow-x-auto py-2">
          {anchors.map(([label, href]) => (
            <a key={href} href={href} className="rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap text-muted transition-colors hover:bg-white/5 hover:text-fg">{label}</a>
          ))}
        </Container>
      </nav>

      <Section id="recap">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <Reveal>
            <Eyebrow>Recap</Eyebrow>
            <h2 className="font-display mt-5 text-4xl font-semibold leading-[1.02] text-fg md:text-5xl">Así fue la {ed.number === "00" ? "primera" : "segunda"} edición</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              {ed.recap.map((p, i) => <p key={i}>{p}</p>)}
              <p className="border-l-2 border-brand pl-5 font-mono text-base text-brand-2">&gt; {ed.closing}</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="agenda" className="border-y border-line bg-bg-2/50">
        <SectionHeading eyebrow={`Agenda · ${ed.timeLabel}`} title="Paso a paso" />
        <ol className="relative space-y-3 before:absolute before:bottom-4 before:left-[27px] before:top-4 before:w-px before:bg-line md:before:left-[39px]">
          {ed.agenda.map((a, i) => (
            <Reveal key={a.time + a.title} delay={Math.min(i, 5) * 50}>
              <li className="card spotlight relative flex items-start gap-4 p-4 md:gap-6 md:p-5">
                <span className="relative z-10 flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-xl border border-line bg-bg font-mono text-xs text-brand-2 md:h-[48px] md:w-[56px] md:text-sm">{a.time}</span>
                <div className="pt-1">
                  <h3 className="font-semibold text-fg">{a.title}</h3>
                  <p className="mt-1 text-muted">{a.desc}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section id="ponentes">
        <SectionHeading eyebrow={`Lineup · Edición ${ed.number}`} title="Ponentes" lead={`${ed.speakers.length} charlas técnicas de gente que trabaja en la trinchera.`} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ed.speakers.map((sp, i) => (
            <Reveal key={sp.name} delay={(i % 3) * 80}>
              <SpeakerCard sp={sp} />
            </Reveal>
          ))}
          <Reveal delay={160}>
            <div className="card flex h-full flex-col items-center justify-center border-dashed border-brand/40 bg-brand/[0.05] p-8 text-center">
              <IconBadge name="mic" />
              <p className="font-display mt-5 text-2xl font-semibold text-fg">¿Tu charla en la próxima?</p>
              <p className="mt-2 text-muted">Propón tu charla para el próximo evento. Hay mentoría para primeras charlas.</p>
              <div className="mt-6"><Button href="/cfp" variant="secondary" icon="arrow-right">Ir al CFP</Button></div>
            </div>
          </Reveal>
        </div>
      </Section>

      {ed.ctf && (
        <Section id="ctf" className="border-y border-line bg-bg-2/50">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <Eyebrow>Capture The Flag</Eyebrow>
              <h2 className="font-display mt-5 text-4xl font-semibold text-fg md:text-5xl">{ed.ctf.title}</h2>
              <p className="mt-5 text-lg text-muted">{ed.ctf.desc}</p>
              {ed.ctf.prizes && (
                <p className="mt-6 flex items-start gap-3 text-fg"><Icon name="trophy" size={20} className="mt-0.5 text-amber" /> {ed.ctf.prizes}</p>
              )}
            </Reveal>
            <Reveal delay={100}>
              <ol className="space-y-3">
                {ed.ctf.phases.map((ph, i, arr) => (
                  <li key={ph} className="flex items-center gap-4 rounded-2xl border border-line bg-white/[0.02] p-4">
                    <span className="font-mono text-sm text-brand-2">0{i + 1}</span>
                    <span className="h-px w-6 bg-line-strong" />
                    <span className="font-medium text-fg">{ph}</span>
                    {i === arr.length - 1 && <Icon name="flag" size={18} className="ml-auto text-amber" />}
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </Section>
      )}

      <Section id="galeria">
        <SectionHeading eyebrow={`${ed.photos.length} fotos`} title="Galería" lead="Filtra por categoría y abre cualquier foto en pantalla completa." />
        <Gallery photos={ed.photos} />
      </Section>

      <JoinCta eyebrow="Siguiente nodo" title="La operación no se detiene." lead="Entre ediciones, la comunidad opera en el grupo de WhatsApp y en los meetups. Asegura tu acceso al próximo evento." />
    </>
  );
}
