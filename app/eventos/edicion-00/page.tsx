import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb, SectionHeader, PixelCard, Tag, PixelButton } from "@/components/pixel";
import { Reveal, CountUp, Tilt } from "@/components/fx";
import { FogDivider } from "@/components/sf";
import Gallery from "./gallery";

export const metadata: Metadata = {
  title: "V-SANDBOX 00 // Initial Access — Recap",
  description:
    "Recap de V-SANDBOX 00: Initial Access — 24 de Abril 2026, Quito, EC. 100+ asistentes, 5 ponentes, ransomware en vivo y CTF.",
};

const FEATURES: [string, string][] = [
  ["Expertos en Ciberseguridad", "Charlas de pentesters, investigadores y hackers activos en el campo — gente que rompe cosas de verdad, no en papel."],
  ["Conocimiento Práctico", "Demos en vivo, técnicas reales y herramientas que puedes aplicar desde el primer día. Sin teoría vacía, solo lo que funciona."],
  ["Networking", "Conecta con personas que comparten tu mentalidad. En V-SANDBOX el networking no es opcional — es parte del juego."],
  ["Entorno Único", "Un espacio diseñado para hackers, con el ambiente correcto. Nada de conferencias acartonadas — aquí somos nosotros, chill y en comunidad."],
  ["Nueva Comunidad", "Sé parte del primer movimiento de ciberseguridad real en Ecuador. Una comunidad construida desde abajo, por quienes ya están en la trinchera."],
  ["CTF Competitivo", "Pon a prueba tus habilidades en retos reales de ciberseguridad. Flags, puntos y adrenalina — el tipo de competencia que vale la pena."],
];

const AGENDA: [string, string, string][] = [
  ["5:00 – 5:15", "Apertura Oficial", "Apertura oficial de V-SANDBOX 00: Initial Access. Presentación del evento, la comunidad y lo que está por venir en la noche."],
  ["5:15 – 6:30", "Bloque de Ponentes", "Charlas técnicas a cargo de nuestros ponentes. Hacking, defensa, vulnerabilidades y casos reales de la industria de ciberseguridad."],
  ["6:30 – 6:50", "Demostración de Ransomware en Vivo", "Ejecución real de ransomware sobre hardware físico en un entorno controlado: cifrado, propagación y persistencia sin filtros."],
  ["6:50 – 8:15", "CTF & Networking", "El plato fuerte de la noche. Capture The Flag en vivo y networking con la comunidad. Demuestra tus habilidades y rompe los retos."],
  ["8:15 – 8:30", "Cierre Oficial", "Cierre oficial de la Edición 00. Entrega de reconocimientos, palabras finales y despedida de la comunidad."],
];

const SPEAKERS = [
  { name: "Daniel Troya", role: "Ponente", img: "/eventos/edicion-00/speakers/daniel-troya.png", desc: "Estudiante de Ciencias Computacionales con enfoque en investigación científica aplicada a la ciberseguridad. Curioso por naturaleza, metódico por necesidad." },
  { name: "Nakleh Said Zeidan", role: "Ponente · AppSec", img: "/eventos/edicion-00/speakers/said.png", desc: "Especialista en AppSec, ha documentado 10 CVEs y reportado múltiples vulnerabilidades críticas en entornos reales." },
  { name: "Jacob Pérez", role: "Ponente", img: "/eventos/edicion-00/speakers/jacob-peres.png", desc: "Evaluación de la seguridad de una red inalámbrica con el objetivo de identificar vulnerabilidades que podrían ser explotadas por atacantes." },
  { name: "Esteban Cárdenas", role: "Ponente", img: "/eventos/edicion-00/speakers/esteban-cardenas.png", desc: "El ethical hacking como consecuencia de la necesidad de proteger los datos personales: sin marcos de protección de datos, no existiría un incentivo real para evaluar vulnerabilidades." },
  { name: "Felipe Grados", role: "Founder V-SANDBOX · CEO Vultaethel", img: "/eventos/edicion-00/speakers/felipe-grados.png", desc: "Live Ransomware en Hardware Real. CEO de Vultaethel y fundador de la comunidad V-SANDBOX." },
];

const PHOTOS: { src: string; cap: string; cat: string; w: number; h: number }[] = [
  { src: "/eventos/edicion-00/gallery/1777301966688.jpeg", cap: "Sala llena durante la apertura del evento", cat: "ESCENARIO", w: 1000, h: 1000 },
  { src: "/eventos/edicion-00/gallery/1777301965191.jpeg", cap: "Audiencia atenta durante las charlas técnicas", cat: "ESCENARIO", w: 1000, h: 1000 },
  { src: "/eventos/edicion-00/gallery/1777304704921.jpeg", cap: "Charla: «Auditando Plugins de WordPress para tu Primer CVE»", cat: "PONENTES", w: 1600, h: 1066 },
  { src: "/eventos/edicion-00/gallery/1777305682979.jpeg", cap: "Charla: «¿Cuánto tardaría romper la criptografía actual?»", cat: "PONENTES", w: 1000, h: 1000 },
  { src: "/eventos/edicion-00/gallery/1777305247462.jpeg", cap: "Ponente en escenario", cat: "PONENTES", w: 1000, h: 1000 },
  { src: "/eventos/edicion-00/gallery/1777305683293.jpeg", cap: "Ponente presentando — De hackers para hackers", cat: "PONENTES", w: 1000, h: 1000 },
  { src: "/eventos/edicion-00/gallery/1777306249722.jpeg", cap: "Energía en el escenario durante las ponencias", cat: "ESCENARIO", w: 1000, h: 1000 },
  { src: "/eventos/edicion-00/gallery/1777306249763.jpeg", cap: "Q&A e interacción con la comunidad", cat: "ESCENARIO", w: 1000, h: 1000 },
  { src: "/eventos/edicion-00/gallery/1777301967171.jpeg", cap: "CTF en vivo — mesas de operadores", cat: "CTF EN VIVO", w: 1000, h: 1000 },
  { src: "/eventos/edicion-00/gallery/1777304705484.jpeg", cap: "Equipos compitiendo en el CTF", cat: "CTF EN VIVO", w: 1600, h: 1066 },
  { src: "/eventos/edicion-00/gallery/1777301968016.jpeg", cap: "Squad de CTF listo para romper retos (con WiFi Pineapple en mesa)", cat: "CTF EN VIVO", w: 1000, h: 1000 },
  { src: "/eventos/edicion-00/gallery/1777301967730.jpeg", cap: "Networking & coffee break", cat: "NETWORKING", w: 1000, h: 1000 },
];

const ANCHORS: [string, string][] = [
  ["RECAP", "#recap"],
  ["POR QUÉ", "#features"],
  ["AGENDA", "#agenda"],
  ["PONENTES", "#ponentes"],
  ["GALERÍA", "#galeria"],
];

const STATS: [number, string, string][] = [
  [100, "+", "ASISTENTES"],
  [5, "", "PONENTES"],
  [1, "", "CTF EN VIVO"],
];

export default function Edicion00() {
  return (
    <div>
      <Breadcrumb trail={[["EVENTOS", "/eventos"], ["EDICIÓN 00", "/eventos/edicion-00"]]} />
      <SectionHeader
        kicker="ARCHIVO · EDICIÓN 00 · 24 ABR 2026"
        title="Initial Access"
        right={<PixelButton href="/eventos" ghost>← PRÓXIMOS</PixelButton>}
      />

      <Reveal>
        <div className="flex gap-2 flex-wrap mb-6">
          <Tag>EDICIÓN 00</Tag>
          <Tag>ARCHIVADA</Tag>
          <Tag>QUITO, EC</Tag>
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
            style={{ background: "linear-gradient(120deg, rgba(255,107,0,0.14), rgba(168,85,247,0.14), rgba(255,107,0,0.14))", backgroundSize: "200% 200%" }}
            aria-hidden
          />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center p-6 md:p-10">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-none">
                <span className="text-fuego">V-SANDBOX 00</span>
              </h1>
              <p className="text-sm font-bold tracking-[0.25em] text-[#16130e] mt-3">INITIAL ACCESS · QUITO, ECUADOR</p>
              <p className="text-lg text-[#4a443b] mt-4 max-w-xl">
                El único evento de ciberseguridad en Ecuador donde venimos a{" "}
                <span className="text-[#ff4d00] font-bold">romper hierro</span>. De hackers para hackers.
              </p>
              <div className="mt-5 grid sm:grid-cols-2 gap-3 max-w-xl">
                <div className="pixel-border-thin bg-[#f3efe8] rounded-xl p-4">
                  <p className="font-pixel text-[9px] text-[#ff4d00] mb-1">{"// FECHA"}</p>
                  <p className="font-bold text-[#16130e]">Viernes, 24 de Abril 2026</p>
                  <p className="text-[#4a443b]">5:00 PM – 8:30 PM</p>
                </div>
                <div className="pixel-border-thin bg-[#f3efe8] rounded-xl p-4">
                  <p className="font-pixel text-[9px] text-[#ff4d00] mb-1">{"// LUGAR"}</p>
                  <p className="font-bold text-[#16130e]">Quito, Ecuador</p>
                  <p className="text-[#4a443b]">Main Stage / Workshops</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#galeria" className="pixel-btn">▣ VER GALERÍA</a>
                <PixelButton href="/eventos" ghost>PRÓXIMOS EVENTOS</PixelButton>
              </div>
            </div>
            {/* Foto protagonista COMPLETA con foil holográfico */}
            <div className="relative flex justify-center py-4">
              <span aria-hidden className="ghost-num font-pixel absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[11rem] md:text-[15rem] leading-none pointer-events-none">
                00
              </span>
              <div className="absolute w-72 h-72 rounded-full bg-[#a855f7]/20 blur-[90px] pointer-events-none" aria-hidden />
              <div className="absolute w-72 h-72 -bottom-6 rounded-full bg-[#ff6b00]/20 blur-[90px] pointer-events-none" aria-hidden />
              <Tilt max={9} className="relative w-full max-w-xl">
                <div className="animate-float-y">
                  <div className="holo glow-fuego relative rounded-2xl overflow-hidden border border-[rgba(255,176,0,0.5)] bg-black">
                    <div className="relative w-full aspect-square">
                      <Image
                        src="/eventos/edicion-00/gallery/1777301968016.jpeg"
                        alt="Squad de V-SANDBOX 00 listo para romper retos — Edición 00, Quito EC (foto completa)"
                        fill
                        priority
                        sizes="(max-width: 1024px) 90vw, 560px"
                        className="object-cover"
                      />
                    </div>
                    {/* sello */}
                    <div className="absolute top-4 -right-1 rotate-12 border-2 border-[#39ff14] text-[#39ff14] font-pixel text-[9px] px-3 py-1 rounded bg-black/60 z-10">
                      100+ HACKERS ✓
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4 pt-10">
                      <p className="font-pixel text-[9px] text-[#ffb000]">{"// SQUAD_CTF"}</p>
                      <p className="text-sm text-white/90">Listos para romper retos · Edición 00</p>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
          </div>
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-3 px-6 md:px-10 pb-6 md:pb-10">
            {STATS.map(([v, suffix, label]) => (
              <div key={label} className="pixel-card p-4 text-center">
                <p className="text-2xl md:text-3xl font-bold text-[#ff4d00]">
                  <CountUp to={v} format="int" />{suffix}
                </p>
                <p className="font-pixel text-[8px] text-[#4a443b] mt-1">{label}</p>
              </div>
            ))}
            <div className="pixel-card p-4 text-center">
              <p className="text-2xl md:text-3xl font-bold text-[#ff4d00]">3h30</p>
              <p className="font-pixel text-[8px] text-[#4a443b] mt-1">DE HIERRO ROTO</p>
            </div>
          </div>
        </div>
      </Reveal>

      <FogDivider />

      {/* RECAP */}
      <section id="recap" className="scroll-mt-24">
        <Reveal><SectionHeader kicker="RECAP" title="Cómo estuvo la noche" /></Reveal>
        <Reveal delay={100}>
          <PixelCard className="!p-6 md:!p-8 space-y-4">
            <p className="text-xl text-[#16130e] leading-relaxed">
              La <strong>primera edición</strong> de V-SANDBOX marcó el inicio de un movimiento. Un viernes por la noche
              en Quito reunimos a más de un centenar de hackers, estudiantes, pentesters e investigadores en un mismo
              espacio: sin teoría vacía, solo gente que <span className="text-[#ff4d00]">rompe cosas de verdad</span>.
            </p>
            <p className="text-lg text-[#4a443b] leading-relaxed">
              Charlas técnicas de primer nivel —desde auditar plugins de WordPress para conseguir tu primer CVE hasta
              cuánto tardaría realmente romper la criptografía actual—, una{" "}
              <strong className="text-[#16130e]">demostración de ransomware en vivo sobre hardware físico</strong>,
              y cierre con CTF competitivo y networking hasta el final de la noche.
            </p>
            <p className="font-term text-2xl text-[#ff4d00]">
              &gt; Esto fue solo el Initial Access. La comunidad de hacking técnico más grande del país apenas está empezando.
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
        <Reveal><SectionHeader kicker="AGENDA · VIE 24 ABR · 5:00 PM – 8:30 PM" title="La noche paso a paso" /></Reveal>
        <div className="space-y-3">
          {AGENDA.map(([time, title, desc], i) => (
            <Reveal key={title} delay={i * 60}>
              <PixelCard className="!p-4 flex gap-4 items-start">
                <div className="shrink-0 text-center">
                  <p className="font-pixel text-[10px] text-[#4a443b]">{String(i).padStart(2, "0")}</p>
                  <p className={`font-pixel text-[10px] mt-1 ${i === 3 ? "text-[#ff4d00]" : "text-[#ff4d00]"}`}>{time.split(" – ")[0]}</p>
                </div>
                <div className="border-l border-[rgba(255,107,0,0.25)] pl-4 min-w-0">
                  <p className="font-pixel text-[8px] text-[#4a443b]">{time.toUpperCase()}</p>
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
        <Reveal><SectionHeader kicker="LINEUP EDICIÓN 00" title="Ponentes" /></Reveal>
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
        <Reveal><SectionHeader kicker="IMAGE_DUMP · 12 CAPTURAS · FILTRA Y AMPLÍA" title="Galería" /></Reveal>
        <Gallery photos={PHOTOS} />
      </section>

      {/* NEXT */}
      <Reveal>
        <section className="pixel-border glow-fuego p-8 mt-12 text-center">
          <p className="font-pixel text-[10px] text-[#ff4d00]">{"// NEXT_DEPLOY"}</p>
          <h3 className="text-2xl md:text-3xl font-bold mt-2">Esto fue solo el <span className="text-fuego">comienzo</span>.</h3>
          <p className="text-lg text-[#4a443b] mt-2 max-w-xl mx-auto">La segunda edición ya se archivó: V-SANDBOX 01 rompió el siguiente nivel en el CIESPAL. Revive la operación o prepárate para el siguiente nodo.</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <PixelButton href="/eventos/edicion-01">▣ VER EDICIÓN 01</PixelButton>
            <PixelButton href="/eventos" ghost>PRÓXIMOS EVENTOS</PixelButton>
          </div>
          <p className="font-term text-xl text-[#4a443b] mt-4">V-SANDBOX 00 — Initial Access · 24 Abr 2026 · Quito, EC · De hackers para hackers.</p>
        </section>
      </Reveal>
    </div>
  );
}
