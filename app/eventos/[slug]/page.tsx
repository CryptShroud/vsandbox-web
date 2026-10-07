import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EVENTS, getEvent, type CommunityEvent, type Edition } from "@/lib/events";
import { pageMeta, jsonLd } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { CountUp, Reveal, Tilt } from "@/components/fx";
import { Button, Chip, Container, Eyebrow, IconBadge, Section, SectionHeading } from "@/components/ui";
import { JoinCta, SpeakerCard } from "@/components/blocks";
import { Gallery } from "@/components/gallery";
import { Icon } from "@/components/icon";

export const dynamicParams = false;

export function generateStaticParams() {
  return EVENTS.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: PageProps<"/eventos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const ev = getEvent(slug);
  if (!ev) return {};
  const title = ev.kind === "edition" ? `${ev.name}: ${ev.codename}` : `${ev.series}: ${ev.title}`;
  return pageMeta({ title, description: ev.summary, path: `/eventos/${ev.slug}` });
}

function eventLd(ev: Edition | CommunityEvent) {
  const online = ev.kind !== "edition" && ev.mode.startsWith("Online");
  const venue = ev.kind === "edition" ? ev.venue : ev.venue;
  if (!ev.start) return null; // schema.org Event exige startDate
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: ev.kind === "edition" ? `${ev.name}: ${ev.codename}` : `${ev.series}: ${ev.title}`,
    description: ev.summary,
    startDate: ev.start,
    eventAttendanceMode: online ? "https://schema.org/OnlineEventAttendanceMode" : "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    image: [`${SITE.url}${ev.cover.src}`],
    location: online
      ? { "@type": "VirtualLocation", url: SITE.url }
      : { "@type": "Place", name: venue, address: { "@type": "PostalAddress", streetAddress: ev.kind === "edition" ? ev.address : venue, addressLocality: "Quito", addressCountry: "EC" } },
    organizer: { "@type": "Organization", name: SITE.fullName, url: SITE.url },
    ...(ev.kind === "edition" ? { performer: ev.speakers.map((s) => ({ "@type": "Person", name: s.name })) } : ev.speaker ? { performer: { "@type": "Person", name: ev.speaker } } : {}),
  };
}

export default async function EventPage({ params }: PageProps<"/eventos/[slug]">) {
  const { slug } = await params;
  const ev = getEvent(slug);
  if (!ev) notFound();
  const ld = eventLd(ev);
  return (
    <>
      {ld && <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(ld)} />}
      {ev.kind === "edition" ? <EditionView ed={ev} /> : <CommunityView ev={ev} />}
    </>
  );
}

/* ================= Meetup / evento en comunidad / laboratorio ================= */
const KIND_LABEL = { meetup: "Meetup virtual", collab: "En comunidad", lab: "Laboratorio", ctf: "CTF" } as const;

function CommunityView({ ev }: { ev: CommunityEvent }) {
  const meta: [string, string, string][] = [
    ...(ev.dateLabel ? ([["calendar", "Fecha", ev.dateLabel]] as [string, string, string][]) : []),
    ...(ev.timeLabel ? ([["clock", "Horario", ev.timeLabel]] as [string, string, string][]) : []),
    ["globe", "Modalidad", ev.mode],
    ...(ev.venue ? ([["pin", "Lugar", ev.venue]] as [string, string, string][]) : []),
    ...(ev.speaker ? ([["mic", "Invitado", ev.speaker]] as [string, string, string][]) : []),
  ];
  const hero = ev.poster ?? ev.cover;
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
              <span aria-current="page" className="text-muted">{ev.series}</span>
            </nav>
            <div className="flex flex-wrap gap-2">
              <Chip tone="brand">{KIND_LABEL[ev.kind]}</Chip>
              <Chip tone="ok">Archivado</Chip>
            </div>
            <p className="mt-6 font-mono text-sm uppercase tracking-[0.16em] text-brand-2">{ev.series}</p>
            <h1 className="font-display mt-3 text-4xl font-semibold leading-[1.02] text-fg md:text-6xl">{ev.title}</h1>
            <p className="mt-6 max-w-xl text-lg text-muted">{ev.summary}</p>
            <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
              {meta.map(([icon, k, v]) => (
                <div key={k} className="rounded-2xl border border-line bg-white/[0.03] p-4">
                  <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-dim"><Icon name={icon} size={14} /> {k}</p>
                  <p className="mt-2 font-semibold text-fg">{v}</p>
                </div>
              ))}
            </div>
          </div>
          <Tilt max={4}>
            <div className="card relative overflow-hidden p-2">
              <Image
                src={hero.src}
                alt={hero.alt}
                width={hero.w}
                height={hero.h}
                priority
                sizes="(max-width: 1024px) 100vw, 560px"
                className="h-auto w-full rounded-[14px]"
              />
            </div>
          </Tilt>
        </Container>
      </header>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <Reveal>
            <Eyebrow>De qué trató</Eyebrow>
            <h2 className="font-display mt-5 text-3xl font-semibold leading-[1.05] text-fg md:text-4xl">Lo que se vio</h2>
            {ev.highlights && (
              <div className="mt-6 flex flex-wrap gap-2">
                {ev.highlights.map((h) => <Chip key={h} tone="brand">{h}</Chip>)}
              </div>
            )}
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              {ev.body.map((p, i) => <p key={i}>{p}</p>)}
              {ev.partners && (
                <p className="flex flex-wrap items-center gap-2 pt-2 text-base">
                  <span className="text-dim">Con:</span> {ev.partners.map((p) => <Chip key={p}>{p}</Chip>)}
                </p>
              )}
            </div>
          </Reveal>
        </div>
      </Section>

      {ev.photos.length > 0 && (
        <Section className="border-y border-line bg-bg-2/50">
          <SectionHeading eyebrow={`${ev.photos.length} imágenes`} title="Galería" lead="Abre cualquier imagen en pantalla completa." />
          <Gallery photos={ev.photos} />
        </Section>
      )}

      <JoinCta eyebrow="Siguiente nodo" title="No te pierdas el próximo." lead="Los meetups y eventos se anuncian primero en el grupo de WhatsApp." />
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
          <div className={`grid items-center gap-10 ${ed.ctf.poster ? "lg:grid-cols-2" : "max-w-3xl"}`}>
            <Reveal>
              <Eyebrow>Capture The Flag</Eyebrow>
              <h2 className="font-display mt-5 text-4xl font-semibold text-fg md:text-5xl">{ed.ctf.title}</h2>
              <p className="mt-5 text-lg text-muted">{ed.ctf.desc}</p>
              {ed.ctf.prizes && (
                <p className="mt-6 flex items-start gap-3 text-fg"><Icon name="trophy" size={20} className="mt-0.5 shrink-0 text-amber" /> {ed.ctf.prizes}</p>
              )}
              <ol className="mt-8 space-y-3">
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
            {ed.ctf.poster && (
              <Reveal delay={100}>
                <div className="card overflow-hidden p-2">
                  <Image src={ed.ctf.poster.src} alt={ed.ctf.poster.alt} width={ed.ctf.poster.w} height={ed.ctf.poster.h} sizes="(max-width: 1024px) 100vw, 560px" className="h-auto w-full rounded-[14px]" />
                </div>
              </Reveal>
            )}
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
