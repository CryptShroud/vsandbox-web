import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb, SectionHeader, PixelCard, Tag, PixelButton } from "@/components/pixel";
import { Reveal, CountUp, Tilt } from "@/components/fx";
import { FogDivider } from "@/components/sf";
import { WHATSAPP_URL } from "@/lib/data";
import Gallery from "../edicion-00/gallery";

export const metadata: Metadata = {
  title: "V-SANDBOX 01 // Persistence & Privilege Escalation — Recap",
  description:
    "Recap de V-SANDBOX 01: Persistence & Privilege Escalation — 24 de Julio 2026, Edificio CIESPAL, Quito, EC. 5 ponentes, CTF en vivo y ~2h de hacking.",
};

const FEATURES: [string, string][] = [
  ["Expertos en Ciberseguridad", "Charlas de pentesters, investigadores y hackers activos en el campo — gente que rompe cosas de verdad, no en papel."],
  ["Conocimiento Práctico", "Demos en vivo, técnicas reales y herramientas que puedes aplicar desde el primer día. Sin teoría vacía, solo lo que funciona."],
  ["Networking", "Conecta con personas que comparten tu mentalidad. En V-SANDBOX el networking no es opcional — es parte del juego."],
  ["Entorno Único", "Un espacio diseñado para hackers, con el ambiente correcto. El brutalismo del CIESPAL fue el escenario perfecto."],
  ["Nueva Comunidad", "Una comunidad construida desde abajo, por quienes ya están en la trinchera. Cada edición suma más operadores."],
  ["CTF Competitivo", "Pon a prueba tus habilidades en retos reales de ciberseguridad. Flags, puntos y adrenalina — el tipo de competencia que vale la pena."],
];

const AGENDA: [string, string, string][] = [
  ["16:00", "system_boot :: Apertura de puertas & registro on-site", "Check-in, networking inicial y entrega de credenciales."],
  ["16:20", "keynote :: Estado del arte del hacking en Ecuador", "Charla inaugural de la comunidad V-SANDBOX."],
  ["16:45", "talk_block_A :: Ofensiva (Red Team & Hardware)", "AD attacks · glitching de microcontroladores."],
  ["17:40", "ctf_kickoff :: Lanzamiento del reto Capture The Flag", "Escuadras compiten en tiempo real."],
  ["18:15", "talk_block_B :: Defensa & DevSecOps", "Threat hunting · pipelines seguros."],
  ["19:10", "ctf_scoreboard :: Cierre y premiación de equipos", "Top operadores y entrega de reconocimientos."],
  ["19:30", "networking :: Drinks & comunidad", "Conexiones, mentoría y cierre del nodo."],
  ["20:00", "shutdown :: Fin del bloque operativo", "system halt -- see you next deploy."],
];

const SPEAKERS = [
  { name: "Jaime Ramirez", role: "Cybersecurity Researcher", img: "/eventos/edicion-01/speakers/jaime-ramirez.jpeg", desc: "Hacking Mobile 101: Introducción al Pentesting Mobile. iOS, Android y Frida — la superficie de ataque del futuro." },
  { name: "Esteban Jimenez", role: "HackTheBox Guru · #1 Ecuador", img: "/eventos/edicion-01/speakers/esteban-jimenez.jpg", desc: "De HTB a la trinchera: cómo escalar en la plataforma y qué aprendió en el camino. Red Team en Telefónica." },
  { name: "Galo Candela", role: "Lead Analyst · AppSec @ NTT DATA", img: "/eventos/edicion-01/speakers/galo-candela.png", desc: "El Eslabón Olvidado: De SNMP a DC. Threat modeling y la cadena de ataque que nadie mira." },
  { name: "Felipe Grados", role: "Founder V-SANDBOX · CEO Vultaethel", img: "/eventos/edicion-01/speakers/felipe-grados.png", desc: "Privilege Escalation — del acceso inicial a root. El fundador de la comunidad cerrando la operación." },
  { name: "Dario Portero", role: "Abogado · Ciberderecho", img: "/eventos/edicion-01/speakers/dario-portero.png", desc: "Ley de Ciberseguridad 2026: qué cambia para los operadores y por qué el marco legal importa en la trinchera." },
];

const PHOTOS: { src: string; cap: string; cat: string; w: number; h: number }[] = [
  { src: "/eventos/edicion-01/gallery/evento01-01.jpeg", cap: "El nodo prendido — comunidad en acción", cat: "ESCENARIO", w: 1000, h: 1000 },
  { src: "/eventos/edicion-01/gallery/evento01-02.jpeg", cap: "Operación en curso — CIESPAL, Quito", cat: "CTF EN VIVO", w: 1358, h: 905 },
  { src: "/eventos/edicion-01/gallery/evento01-03.jpeg", cap: "Operadores en la arena", cat: "CTF EN VIVO", w: 1204, h: 1600 },
  { src: "/eventos/edicion-01/gallery/evento01-04.jpeg", cap: "Cierre del bloque operativo", cat: "NETWORKING", w: 1280, h: 960 },
  { src: "/eventos/edicion-01/gallery/DSC07164-2.jpg", cap: "Operador en plena faena — laptop de batalla", cat: "CTF EN VIVO", w: 1600, h: 1067 },
  { src: "/eventos/edicion-01/gallery/DSC07199.jpg", cap: "Ponencia frente al main stage", cat: "PONENTES", w: 1600, h: 1067 },
  { src: "/eventos/edicion-01/gallery/DSC07259-2.jpg", cap: "Palabra de ponente — Q&A con la comunidad", cat: "PONENTES", w: 1600, h: 1067 },
  { src: "/eventos/edicion-01/gallery/DSC07302.jpg", cap: "Mesas de trabajo durante la operación", cat: "CTF EN VIVO", w: 1600, h: 1067 },
  { src: "/eventos/edicion-01/gallery/DSC07479-HDR.jpg", cap: "Audiencia atenta en el CIESPAL", cat: "ESCENARIO", w: 1600, h: 1067 },
  { src: "/eventos/edicion-01/gallery/DSC07501.jpg", cap: "Keynote: aprende, practica, protege", cat: "PONENTES", w: 1600, h: 1067 },
  { src: "/eventos/edicion-01/gallery/DSC07858-2.jpg", cap: "Sonrisas de la casa — speaker en modo chill", cat: "PONENTES", w: 1600, h: 1067 },
  { src: "/eventos/edicion-01/gallery/DSC07908.jpg", cap: "Foto oficial — la manada completa", cat: "NETWORKING", w: 1600, h: 1067 },
  { src: "/eventos/edicion-01/gallery/DSC07916-2.jpg", cap: "IEEE UIDE presente en la operación", cat: "NETWORKING", w: 1600, h: 1067 },
];

const ANCHORS: [string, string][] = [
  ["RECAP", "#recap"],
  ["POR QUÉ", "#features"],
  ["AGENDA", "#agenda"],
  ["PONENTES", "#ponentes"],
  ["GALERÍA", "#galeria"],
];

export default function Edicion01() {
  return (
    <div>
      <Breadcrumb trail={[["EVENTOS", "/eventos"], ["EDICIÓN 01", "/eventos/edicion-01"]]} />
      <SectionHeader
        kicker="ARCHIVO · EDICIÓN 01 · 24 JUL 2026"
        title="Privilege Escalation"
        right={<PixelButton href="/eventos" ghost>← PRÓXIMOS</PixelButton>}
      />

      <Reveal>
        <div className="flex gap-2 flex-wrap mb-6">
          <Tag>EDICIÓN 01</Tag>
          <Tag>ARCHIVADA</Tag>
          <Tag>CIESPAL · QUITO</Tag>
          {ANCHORS.map(([label, href]) => (
            <a key={href} href={href} className="pixel-tag hover:bg-[#ff4d00] hover:text-black transition">#{label}</a>
          ))}
        </div>
      </Reveal>

      {/* HERO */}
      <Reveal>
        <div className="pixel-border glow-fuego relative overflow-hidden">
          <div
            className="absolute inset-0 animate-gradient"
            style={{ background: "linear-gradient(120deg, rgba(168,85,247,0.14), rgba(255,107,0,0.14), rgba(168,85,247,0.14))", backgroundSize: "200% 200%" }}
            aria-hidden
          />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center p-6 md:p-10">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-none">
                <span className="text-fuego">V-SANDBOX 01</span>
              </h1>
              <p className="text-sm font-bold tracking-[0.25em] text-[#16130e] mt-3">PERSISTENCE & PRIVILEGE ESCALATION · CIESPAL</p>
              <p className="text-lg text-[#4a443b] mt-4 max-w-xl">
                El evento donde la comunidad rompió el siguiente nivel: de acceso inicial a{" "}
                <span className="text-[#ff4d00] font-bold">root y persistencia</span>. De hackers para hackers.
              </p>
              <div className="mt-5 grid sm:grid-cols-2 gap-3 max-w-xl">
                <div className="pixel-border-thin bg-[#f3efe8] rounded-xl p-4">
                  <p className="font-pixel text-[9px] text-[#ff4d00] mb-1">{"// FECHA"}</p>
                  <p className="font-bold text-[#16130e]">Viernes, 24 de Julio 2026</p>
                  <p className="text-[#4a443b]">4:00 PM – 8:00 PM</p>
                </div>
                <div className="pixel-border-thin bg-[#f3efe8] rounded-xl p-4">
                  <p className="font-pixel text-[9px] text-[#ff4d00] mb-1">{"// LUGAR"}</p>
                  <p className="font-bold text-[#16130e]">Edificio CIESPAL</p>
                  <p className="text-[#4a443b]">Av. Diego de Almagro N32-133 · Quito</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#galeria" className="pixel-btn">▣ VER GALERÍA</a>
                <PixelButton href="/eventos" ghost>PRÓXIMOS EVENTOS</PixelButton>
              </div>
            </div>
            {/* Foto operativa COMPLETA con foil */}
            <div className="relative flex justify-center py-4">
              <span aria-hidden className="ghost-num font-pixel absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[11rem] md:text-[15rem] leading-none pointer-events-none">
                01
              </span>
              <div className="absolute w-72 h-72 rounded-full bg-[#ff6b00]/20 blur-[90px] pointer-events-none" aria-hidden />
              <div className="absolute w-72 h-72 -bottom-6 rounded-full bg-[#a855f7]/20 blur-[90px] pointer-events-none" aria-hidden />
              <Tilt max={9} className="relative w-full max-w-xl">
                <div className="animate-float-y">
                  <div className="holo glow-fuego relative rounded-2xl overflow-hidden border border-[rgba(255,176,0,0.5)] bg-black">
                    <div className="relative w-full" style={{ aspectRatio: "1358/905" }}>
                      <Image
                        src="/eventos/edicion-01/gallery/evento01-02.jpeg"
                        alt="V-SANDBOX 01: Persistence & Privilege Escalation — 24 JUL, CIESPAL, Quito EC (foto completa)"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 640px"
                        className="object-contain"
                      />
                    </div>
                    <div className="absolute top-4 -right-1 rotate-12 border-2 border-[#39ff14] text-[#39ff14] font-pixel text-[9px] px-3 py-1 rounded bg-black/60 z-10">
                      ARCHIVADA ✓
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4 pt-10">
                      <p className="font-pixel text-[9px] text-[#ffb000]">{"// OPERACIÓN_CTF"}</p>
                      <p className="text-sm text-white/90">Clearance: TOP-SECRET · Role: Escalador de Privilegios</p>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
          </div>
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-3 px-6 md:px-10 pb-6 md:pb-10">
            <div className="pixel-card p-4 text-center">
              <p className="text-2xl md:text-3xl font-bold text-[#ff4d00]"><CountUp to={5} format="int" /></p>
              <p className="font-pixel text-[8px] text-[#4a443b] mt-1">PONENTES</p>
            </div>
            <div className="pixel-card p-4 text-center">
              <p className="text-2xl md:text-3xl font-bold text-[#ff4d00]"><CountUp to={1} format="int" /></p>
              <p className="font-pixel text-[8px] text-[#4a443b] mt-1">CTF EN VIVO</p>
            </div>
            <div className="pixel-card p-4 text-center">
              <p className="text-2xl md:text-3xl font-bold text-[#ff4d00]">~2h</p>
              <p className="font-pixel text-[8px] text-[#4a443b] mt-1">OPERACIÓN CTF</p>
            </div>
            <div className="pixel-card p-4 text-center">
              <p className="text-2xl md:text-3xl font-bold text-[#ff4d00]"><CountUp to={4} format="int" /></p>
              <p className="font-pixel text-[8px] text-[#4a443b] mt-1">FASES DE LA MISIÓN</p>
            </div>
          </div>
        </div>
      </Reveal>

      <FogDivider />

      {/* RECAP */}
      <section id="recap" className="scroll-mt-24">
        <Reveal><SectionHeader kicker="RECAP" title="El brutalismo se llenó de operadores" /></Reveal>
        <Reveal delay={100}>
          <PixelCard className="!p-6 md:!p-8 space-y-4">
            <p className="text-xl text-[#16130e] leading-relaxed">
              La <strong>segunda edición</strong> de V-SANDBOX llegó al mítico <strong>Edificio CIESPAL</strong> — “La Casa
              de Tarzán” — y la comunidad respondió. Un viernes por la tarde, el brutalismo quiteño se llenó de operadores
              listos para <span className="text-[#ff4d00]">romper el siguiente nivel</span>.
            </p>
            <p className="text-lg text-[#4a443b] leading-relaxed">
              Cinco ponentes: desde <strong className="text-[#16130e]">hacking móvil</strong> (iOS/Android + Frida) hasta{" "}
              <strong className="text-[#16130e]">el eslabón olvidado de SNMP a DC</strong>, la trayectoria de un{" "}
              <strong className="text-[#16130e]">Guru de HackTheBox #1 del Ecuador</strong>, la{" "}
              <strong className="text-[#16130e]">ley de ciberseguridad</strong> que regula el campo, y el fundador cerrando
              con Privilege Escalation.
            </p>
            <p className="text-lg text-[#4a443b] leading-relaxed">
              En paralelo, la <strong className="text-[#16130e]">OPERACIÓN CTF</strong> desplegó su infraestructura: objetivo
              corporativo con exposición web, secretos mal guardados, el abuso del “Demonio Guardián” (MySQL/UDF) y la misión
              final de asegurar persistencia. ~2 horas de hacking en vivo peleando por suscripciones a Proving Grounds y pases al RED LAB.
            </p>
            <p className="font-term text-2xl text-[#ff4d00]">
              &gt; Access granted. Position secured. La comunidad sigue operando — siguiente nodo en MeetUps.
            </p>
          </PixelCard>
        </Reveal>
      </section>

      {/* FEATURES */}
      <section id="features" className="scroll-mt-24 mt-12">
        <Reveal><SectionHeader kicker="CARACTERÍSTICAS" title="Por qué asistir" /></Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(([t, d], i) => (
            <Reveal key={t} delay={(i % 3) * 100}>
              <PixelCard className="h-full">
                <Tag>MODULE_0{i + 1}</Tag>
                <h3 className="text-lg font-bold text-[#16130e] mt-3">{t}</h3>
                <p className="text-[#4a443b] mt-1">{d}</p>
              </PixelCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* AGENDA */}
      <section id="agenda" className="scroll-mt-24 mt-12">
        <Reveal><SectionHeader kicker="AGENDA · VIE 24 JUL · 4:00 PM – 8:00 PM · CIESPAL" title="La operación paso a paso" /></Reveal>
        <div className="space-y-3">
          {AGENDA.map(([time, title, desc], i) => (
            <Reveal key={title} delay={Math.min(i, 4) * 60}>
              <PixelCard className="!p-4 flex gap-4 items-start">
                <div className="shrink-0 text-center">
                  <p className="font-pixel text-[10px] text-[#4a443b]">{String(i).padStart(2, "0")}</p>
                  <p className={`font-pixel text-[10px] mt-1 ${i === 3 ? "text-[#ff4d00]" : "text-[#ff4d00]"}`}>{time}</p>
                </div>
                <div className="border-l border-[rgba(255,107,0,0.25)] pl-4 min-w-0">
                  <h3 className="font-bold text-[#16130e] mt-0.5 font-mono text-[15px]">{title} {i === 3 && <Tag>PLATO FUERTE</Tag>}</h3>
                  <p className="text-[#4a443b] mt-1">{desc}</p>
                </div>
              </PixelCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PONENTES */}
      <section id="ponentes" className="scroll-mt-24 mt-12">
        <Reveal><SectionHeader kicker="LINEUP EDICIÓN 01" title="Ponentes" /></Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SPEAKERS.map((sp, idx) => (
            <Reveal key={sp.name} delay={(idx % 3) * 100}>
              <PixelCard className="overflow-hidden !p-0 h-full">
                <div className="relative aspect-[4/5] overflow-hidden group">
                  <Image
                    src={sp.img}
                    alt={sp.name}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                  <div className="absolute top-3 left-3"><Tag>SPEAKER_0{idx + 1}</Tag></div>
                  <div className="absolute bottom-0 inset-x-0 p-4">
                    <h3 className="text-lg font-bold text-white leading-tight">{sp.name}</h3>
                    <p className="font-pixel text-[9px] text-[#ff4d00]">{sp.role.toUpperCase()}</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-[#4a443b]">{sp.desc}</p>
                </div>
              </PixelCard>
            </Reveal>
          ))}
          <Reveal delay={200}>
            <PixelCard className="h-full flex flex-col justify-center text-center pixel-border">
              <p className="font-pixel text-[10px] text-[#ff4d00]">TU TURNO</p>
              <p className="text-xl font-bold text-[#16130e] mt-2">¿Subes al escenario en la 02?</p>
              <p className="text-[#4a443b] mt-1">El CFP abre pronto. Propón tu charla con demo en vivo.</p>
              <div className="mt-4"><PixelButton href="/cfp" ghost>IR AL CFP</PixelButton></div>
            </PixelCard>
          </Reveal>
        </div>
      </section>

      {/* GALERÍA */}
      <section id="galeria" className="scroll-mt-24 mt-12">
        <Reveal><SectionHeader kicker="IMAGE_DUMP · 13 CAPTURAS · FILTRA Y AMPLÍA" title="Galería" /></Reveal>
        <Gallery photos={PHOTOS} />
      </section>

      {/* NEXT */}
      <Reveal>
        <section className="pixel-border glow-fuego p-8 mt-12 text-center">
          <p className="font-pixel text-[10px] text-[#ff4d00]">{"// NEXT_DEPLOY"}</p>
          <h3 className="text-2xl md:text-3xl font-bold mt-2">La operación <span className="text-fuego">no se detiene</span>.</h3>
          <p className="text-lg text-[#4a443b] mt-2 max-w-xl mx-auto">Entre ediciones, la comunidad opera en el grupo de WhatsApp y meetups. Asegura tu acceso al siguiente nodo.</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="pixel-btn" style={{ background: "linear-gradient(180deg, #2fe07a, #25D366)", boxShadow: "0 4px 16px rgba(37,211,102,0.4)" }}>✆ UNIRME AL GRUPO</a>
            <PixelButton href="/eventos" ghost>▣ VER PRÓXIMOS</PixelButton>
          </div>
          <p className="font-term text-xl text-[#4a443b] mt-4">V-SANDBOX 01 — Persistence & Privilege Escalation · 24 Jul 2026 · CIESPAL, Quito.</p>
        </section>
      </Reveal>
    </div>
  );
}
