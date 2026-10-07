import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { EDITIONS, SANDBOX_CON, allSpeakers, COMMUNITY_STATS } from "@/lib/events";
import { BeforeAfter, Countdown, CountUp, HackConsole, Reveal, Tilt } from "@/components/fx";
import { Button, Card, Chip, Container, Eyebrow, IconBadge, Section, SectionHeading, StatBlock } from "@/components/ui";
import { EditionCard, JoinCta, PartnersStrip } from "@/components/blocks";
import { Icon } from "@/components/icon";
import { LogoMark } from "@/components/logo";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const PILLARS = [
  { icon: "mic", title: "Conferencias", desc: "Ediciones con charlas técnicas, demos en vivo y ponentes que trabajan en la trinchera.", href: "/eventos" },
  { icon: "flag", title: "CTF", desc: "Competencias Capture The Flag por equipos, con infraestructura propia y premios reales.", href: "/ctf" },
  { icon: "key", title: "Villages", desc: "Zonas prácticas de lockpicking, hardware, OSINT y blue team. Se aprende con las manos.", href: "/villages" },
  { icon: "users", title: "Comunidad", desc: "Mentoría, ofertas de trabajo, writeups y gente con la que romper cosas todo el año.", href: "/comunidad" },
];

export default function Home() {
  const speakers = allSpeakers();
  const heroStats = [
    { to: COMMUNITY_STATS.editions, suffix: "", label: "Ediciones" },
    { to: COMMUNITY_STATS.peakAttendance, suffix: "+", label: "Hackers en una noche" },
    { to: COMMUNITY_STATS.speakers, suffix: "", label: "Ponentes" },
    { to: COMMUNITY_STATS.ctfs, suffix: "", label: "CTFs en vivo" },
  ];

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="noise relative -mt-[72px] overflow-hidden pt-[72px]">
        <div className="absolute inset-0 bg-grid" aria-hidden />
        <div className="orb -top-48 left-[10%] h-[520px] w-[520px] bg-brand/25" aria-hidden />
        <div className="orb top-20 right-[-10%] h-[480px] w-[480px] bg-violet/20" aria-hidden />

        <Container className="relative grid items-center gap-14 pb-20 pt-16 md:pb-28 md:pt-24 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="enter">
              <Link
                href={`/eventos/${SANDBOX_CON.slug}`}
                className="group inline-flex items-center gap-3 rounded-full border border-line bg-white/[0.04] py-1.5 pl-1.5 pr-4 text-sm text-muted backdrop-blur transition-colors hover:border-brand/40 hover:text-fg"
              >
                <span className="rounded-full bg-brand px-2.5 py-0.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-white">Próximo</span>
                <BeforeAfter
                  date={SANDBOX_CON.cfp.deadline}
                  before={<span>Sandbox-Con 2026 · CFP abierto hasta el 19 de octubre</span>}
                  after={<span>Sandbox-Con 2026 · 08 de noviembre · Quito</span>}
                />
                <Icon name="arrow-right" size={14} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="enter" style={{ animationDelay: "80ms" }}>
              <h1 className="font-display mt-8 text-[3.2rem] font-semibold leading-[0.95] text-fg sm:text-7xl lg:text-[5.6rem]">
                La comunidad <span className="text-gradient">hacker</span> de Quito.
              </h1>
            </div>
            <div className="enter" style={{ animationDelay: "160ms" }}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
                Conferencias, CTFs, villages y meetups de ciberseguridad. De hackers para hackers: abierta, gratuita y hecha en Ecuador.
              </p>
            </div>
            <div className="enter" style={{ animationDelay: "240ms" }}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button href={SITE.whatsapp} variant="wa" size="lg">Unirme a la comunidad</Button>
                <Button href={`/eventos/${SANDBOX_CON.slug}`} variant="secondary" size="lg" icon="arrow-right">Ver Sandbox-Con</Button>
              </div>
            </div>
            <div className="enter" style={{ animationDelay: "320ms" }}>
              <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-8 border-t border-line pt-8 sm:grid-cols-4">
                {heroStats.map((s) => (
                  <div key={s.label}>
                    <dd className="font-display text-4xl font-semibold text-fg">
                      <CountUp to={s.to} suffix={s.suffix} />
                    </dd>
                    <dt className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-dim">{s.label}</dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="enter" style={{ animationDelay: "200ms" }}>
              <Tilt max={4}>
                <div className="relative">
                  <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-brand/30 via-transparent to-violet/30 blur-2xl" aria-hidden />
                  <div className="card relative overflow-hidden p-2">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[14px] sm:aspect-[4/4.2]">
                      <Image
                        src="/foto-principal.jpg"
                        alt="La comunidad V-SandBox reunida en la Edición 01, en el CIESPAL"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 480px"
                        className="object-cover object-[45%_35%]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-2">Edición 01 · CIESPAL</p>
                          <p className="font-display mt-1 text-lg font-semibold text-white">La comunidad completa</p>
                        </div>
                        <LogoMark size={40} />
                      </div>
                    </div>
                  </div>

                  <div className="float-y absolute -left-4 top-8 hidden rounded-2xl border border-line bg-bg/90 px-4 py-3 shadow-2xl backdrop-blur sm:block">
                    <p className="font-mono text-[11px] text-[#4ade80]">root@vsandbox:~# id</p>
                    <p className="font-mono text-[11px] text-muted">uid=0(root) gid=0(root)</p>
                  </div>
                  <div className="absolute -bottom-5 right-4 flex items-center gap-3 rounded-2xl border border-line bg-bg/90 px-4 py-3 shadow-2xl backdrop-blur sm:right-8">
                    <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-ok text-ok" />
                    <p className="text-sm">
                      <span className="font-semibold text-fg">08 NOV</span> <span className="text-muted">· Sandbox-Con</span>
                    </p>
                  </div>
                </div>
              </Tilt>
            </div>
          </div>
        </Container>
      </section>

      <PartnersStrip />

      {/* ---------- MAIN EVENT ---------- */}
      <Section>
        <Reveal>
          <div className="card beam noise relative overflow-hidden bg-surface">
            <div className="absolute inset-0 bg-dots opacity-40" aria-hidden />
            <div className="orb -right-20 -top-20 h-96 w-96 bg-brand/25" aria-hidden />
            <div className="relative grid gap-12 p-6 sm:p-10 md:p-14 lg:grid-cols-2">
              <div>
                <div className="flex flex-wrap gap-2">
                  <Chip tone="brand">Main event</Chip>
                  <Chip>{SANDBOX_CON.dateLabel}</Chip>
                </div>
                <h2 className="font-display mt-6 text-4xl font-semibold leading-[1] text-fg md:text-6xl">
                  Sandbox-Con <span className="text-metal">2026</span>
                </h2>
                <p className="mt-5 max-w-lg text-lg text-muted">{SANDBOX_CON.summary}</p>
                <ul className="mt-8 space-y-3 text-muted">
                  <li className="flex items-center gap-3"><Icon name="calendar" size={18} className="text-brand-2" /> {SANDBOX_CON.dateLabel} · 09:00</li>
                  <li className="flex items-center gap-3"><Icon name="pin" size={18} className="text-brand-2" /> {SANDBOX_CON.venue}, {SANDBOX_CON.address}</li>
                  <li className="flex items-center gap-3"><Icon name="ticket" size={18} className="text-brand-2" /> Registro y novedades en el grupo de la comunidad</li>
                </ul>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Button href={`/eventos/${SANDBOX_CON.slug}`} icon="arrow-right">Ver el evento</Button>
                  <Button href="/cfp" variant="secondary">Proponer una charla</Button>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-8">
                <div>
                  <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-dim">Faltan</p>
                  <Countdown target={SANDBOX_CON.start} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {SANDBOX_CON.formats.map((f) => (
                    <div key={f.title} className="rounded-2xl border border-line bg-black/30 p-4">
                      <Icon name={f.icon} size={20} className="text-brand-2" />
                      <p className="mt-3 font-semibold text-fg">{f.title}</p>
                      <p className="mt-1 text-sm text-dim">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ---------- PILARES ---------- */}
      <Section className="!pt-0">
        <SectionHeading eyebrow="Qué hacemos" title={<>Todo lo que pasa en <span className="text-gradient whitespace-nowrap">V-SandBox</span></>} lead="Una comunidad que se encuentra en persona, compite en serio y comparte lo que aprende." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <Link href={p.href} className="card card-hover spotlight group flex h-full flex-col p-7">
                <IconBadge name={p.icon} />
                <h3 className="font-display mt-6 text-2xl font-semibold text-fg">{p.title}</h3>
                <p className="mt-3 flex-1 text-muted">{p.desc}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-2">
                  Explorar <Icon name="arrow-right" size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- EDICIONES ---------- */}
      <Section className="border-t border-line bg-bg-2/50">
        <SectionHeading
          eyebrow="Archivo"
          title="Ediciones pasadas"
          lead="Cada edición es una fase de la cadena de ataque. Revive las agendas, los ponentes y las galerías."
          action={<Button href="/eventos" variant="secondary" icon="arrow-right">Todos los eventos</Button>}
        />
        <div className="grid gap-6 md:grid-cols-2">
          {EDITIONS.map((ed, i) => (
            <Reveal key={ed.slug} delay={i * 100} className="h-full">
              <EditionCard ed={ed} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- PONENTES ---------- */}
      <Section>
        <SectionHeading
          eyebrow="Lineup"
          title="Quiénes han subido al escenario"
          lead="Investigadores, red teamers, especialistas AppSec y abogados de ciberderecho. Gente que hace, no que recita."
          action={<Button href="/comunidad/hall-of-fame" variant="secondary" icon="arrow-right">Ver ponentes</Button>}
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {speakers.map((sp, i) => (
            <Reveal key={sp.name} delay={(i % 5) * 60}>
              <figure className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-surface">
                <Image src={sp.img} alt={`Retrato de ${sp.name}`} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 240px" className="object-cover object-top grayscale-[40%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4">
                  <p className="font-semibold leading-tight text-white">{sp.name}</p>
                  <p className="mt-1 line-clamp-2 text-xs text-white/60">{sp.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
          <Reveal delay={240}>
            <Link href="/cfp" className="group flex aspect-[4/5] flex-col items-center justify-center rounded-2xl border border-dashed border-brand/40 bg-brand/[0.06] p-4 text-center transition-colors hover:bg-brand/10">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white transition-transform group-hover:scale-110">
                <Icon name="mic" size={22} />
              </span>
              <p className="font-display mt-4 text-lg font-semibold text-fg">Tu charla aquí</p>
              <p className="mt-1 text-xs text-muted">Call for Papers</p>
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* ---------- CONSOLA ---------- */}
      <Section className="border-y border-line bg-bg-2/50">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Hands-on</Eyebrow>
            <h2 className="font-display mt-5 text-4xl font-semibold leading-[1.02] text-fg md:text-5xl">
              No venimos a ver slides.<br />
              <span className="text-gradient">Venimos a romper hierro.</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg text-muted">
              Así se ve una cadena de ataque completa en un laboratorio de entrenamiento: reconocimiento, fuzzing, credenciales y escalada a root. En los CTFs y villages, los comandos los escribes tú.
            </p>
            <div className="mt-8 grid max-w-md grid-cols-3 gap-6">
              <StatBlock value="Recon" label="Fase 01" className="[&_p:first-child]:text-2xl" />
              <StatBlock value="Exploit" label="Fase 02" className="[&_p:first-child]:text-2xl" />
              <StatBlock value="Root" label="Fase 03" className="[&_p:first-child]:text-2xl" />
            </div>
            <div className="mt-10"><Button href="/ctf" icon="arrow-right">Ir al CTF</Button></div>
          </Reveal>
          <Reveal delay={120}>
            <HackConsole />
          </Reveal>
        </div>
      </Section>

      {/* ---------- SPONSORS ---------- */}
      <Section>
        <Reveal>
          <div className="grid gap-10 overflow-hidden rounded-[32px] border border-line bg-gradient-to-br from-surface to-bg p-8 sm:p-12 lg:grid-cols-[1.2fr_1fr] lg:p-16">
            <div>
              <Eyebrow>Para empresas</Eyebrow>
              <h2 className="font-display mt-5 text-4xl font-semibold leading-[1.02] text-fg md:text-5xl">
                Pon tu marca frente al talento de ciberseguridad de Ecuador.
              </h2>
              <p className="mt-6 max-w-xl text-lg text-muted">
                Estudiantes, pentesters, analistas SOC y líderes técnicos en un mismo lugar. Patrocina una edición, un village o el CTF, y conecta con la comunidad que va a proteger tu industria.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="/patrocinadores" icon="arrow-right">Ver paquetes</Button>
                <Button href="/contacto" variant="secondary">Hablemos</Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 self-center">
              {[
                ["100+", "Asistentes en la Edición 00"],
                [String(COMMUNITY_STATS.speakers), "Ponentes técnicos"],
                ["3", "Paquetes de patrocinio"],
                ["100%", "Reinvertido en la comunidad"],
              ].map(([v, l]) => (
                <Card key={l} className="p-6">
                  <p className="font-display text-3xl font-semibold text-fg">{v}</p>
                  <p className="mt-2 text-sm text-dim">{l}</p>
                </Card>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      <JoinCta />
    </>
  );
}
