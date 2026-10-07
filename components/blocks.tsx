import Image from "next/image";
import Link from "next/link";
import { PARTNERS, SITE } from "@/lib/site";
import type { CommunityEvent, Edition, Speaker } from "@/lib/events";
import { Icon } from "./icon";
import { Button, Chip, Container, Eyebrow } from "./ui";
import { Reveal } from "./fx";
import { LogoMark } from "./logo";

/* Franja con las organizaciones que han estado en las ediciones */
export function PartnersStrip({ title = "Han sido parte de V-SandBox" }: { title?: string }) {
  const row = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];
  return (
    <section aria-label={title} className="border-y border-line bg-bg-2/60 py-10">
      <Container>
        <p className="mb-8 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-dim">{title}</p>
      </Container>
      <div className="marquee">
        <ul className="marquee-track gap-4 pr-4">
          {row.map((p, i) => (
            <li key={`${p.name}-${i}`} aria-hidden={i >= PARTNERS.length} className="flex h-16 min-w-[240px] items-center gap-3 rounded-2xl border border-line bg-white/[0.02] px-6">
              <span className="font-display text-xl font-semibold tracking-tight text-fg/90">{p.name}</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-dim">{p.role}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function SpeakerCard({ sp, editions }: { sp: Speaker; editions?: string[] }) {
  return (
    <article className="card card-hover spotlight group overflow-hidden">
      <div className="relative aspect-[4/5] overflow-hidden rounded-t-[19px] bg-surface">
        <Image
          src={sp.img}
          alt={`Retrato de ${sp.name}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
          className="object-cover object-top grayscale-[35%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent" />
        {editions && (
          <div className="absolute left-3 top-3 flex gap-1.5">
            {editions.map((e) => (
              <span key={e} className="chip chip-brand !h-6 bg-black/60 backdrop-blur">ED. {e}</span>
            ))}
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="font-display text-xl font-semibold text-white">{sp.name}</h3>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-brand-2">{sp.role}</p>
        </div>
      </div>
      <p className="p-5 pt-4 text-sm leading-relaxed text-muted">{sp.bio}</p>
    </article>
  );
}

export function EditionCard({ ed, priority = false }: { ed: Edition; priority?: boolean }) {
  return (
    <Link href={`/eventos/${ed.slug}`} className="card card-hover spotlight group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden rounded-t-[19px]">
        <Image
          src={ed.cover.src}
          alt={ed.cover.alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
        <span className="font-display absolute -bottom-6 right-4 text-[9rem] font-bold leading-none text-white/10" aria-hidden>
          {ed.number}
        </span>
        <div className="absolute left-4 top-4 flex gap-2">
          <Chip className="bg-black/60 backdrop-blur">Edición {ed.number}</Chip>
          <Chip tone="ok" className="bg-black/60 backdrop-blur">Archivada</Chip>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <p className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs uppercase tracking-[0.12em] text-dim">
          <span className="inline-flex items-center gap-1.5"><Icon name="calendar" size={14} /> {ed.dateLabel.replace(/^\w+ /, "")}</span>
          <span className="inline-flex items-center gap-1.5"><Icon name="pin" size={14} /> {ed.venue}</span>
        </p>
        <h3 className="font-display mt-3 text-2xl font-semibold text-fg md:text-3xl">
          {ed.name}: <span className="text-muted">{ed.codename}</span>
        </h3>
        <p className="mt-3 flex-1 text-muted">{ed.summary}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-2">
          Ver recap completo <Icon name="arrow-right" size={16} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

const KIND_LABEL: Record<CommunityEvent["kind"], string> = { meetup: "Meetup virtual", collab: "En comunidad", lab: "Laboratorio", ctf: "CTF" };

/* Tarjeta de meetup, evento con aliados o laboratorio */
export function CommunityEventCard({ ev, priority = false }: { ev: CommunityEvent; priority?: boolean }) {
  // Los afiches se muestran enteros (su proporción real); las fotos, recortadas a 16:10
  const isPoster = !!ev.poster && ev.cover.src === ev.poster.src;
  return (
    <Link href={`/eventos/${ev.slug}`} className="card card-hover spotlight group flex h-full flex-col overflow-hidden">
      <div
        className="relative overflow-hidden rounded-t-[19px] bg-surface"
        style={{ aspectRatio: isPoster ? `${ev.cover.w}/${ev.cover.h}` : "16/10" }}
      >
        <Image
          src={ev.cover.src}
          alt={ev.cover.alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap gap-2">
          <Chip tone={ev.kind === "meetup" ? "brand" : "default"}>{KIND_LABEL[ev.kind]}</Chip>
        </div>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-brand-2">{ev.series}</p>
        <h3 className="font-display mt-2 text-xl font-semibold leading-snug text-fg">{ev.title}</h3>
        <p className="mt-2 flex-1 text-sm text-muted">{ev.summary}</p>
        <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-[0.1em] text-dim">
          {ev.dateLabel && <span className="inline-flex items-center gap-1.5"><Icon name="calendar" size={13} /> {ev.dateLabel.replace(/^\p{L}+ (?=\d)/u, "")}</span>}
          <span className="inline-flex items-center gap-1.5"><Icon name={ev.mode.startsWith("Online") ? "globe" : "pin"} size={13} /> {ev.mode}</span>
        </p>
      </div>
    </Link>
  );
}

/* CTA final reutilizable */
export function JoinCta({
  eyebrow = "Player 1, te estamos esperando",
  title = "Entra al grupo. Captura tu primera flag.",
  lead = "Toda la comunidad vive en WhatsApp: eventos, CTFs, ayuda, ofertas y memes. Sin formularios, sin filtros.",
}: {
  eyebrow?: string;
  title?: string;
  lead?: string;
}) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="noise relative overflow-hidden rounded-[32px] border border-line bg-gradient-to-br from-[#1a0c05] via-bg to-[#0f0a1f] px-6 py-16 text-center md:px-16 md:py-24">
            <div className="absolute inset-0 bg-grid opacity-70" aria-hidden />
            <div className="orb -top-32 left-1/4 h-80 w-80 bg-brand/30" aria-hidden />
            <div className="orb -bottom-32 right-1/4 h-80 w-80 bg-violet/25" aria-hidden />
            <div className="relative mx-auto max-w-2xl">
              <LogoMark size={64} className="mx-auto float-y" />
              <Eyebrow className="mt-6 justify-center">{eyebrow}</Eyebrow>
              <h2 className="font-display mt-5 text-4xl font-semibold leading-[1.02] text-fg md:text-6xl">{title}</h2>
              <p className="mt-6 text-lg text-muted">{lead}</p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <Button href={SITE.whatsapp} variant="wa" size="lg">Unirme al WhatsApp</Button>
                <Button href="/manifiesto" variant="secondary" size="lg" icon="arrow-right">Leer el manifiesto</Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
