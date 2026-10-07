import Link from "next/link";
import { Breadcrumb, SectionHeader, PixelCard, Tag } from "@/components/pixel";
import { Reveal } from "@/components/fx";
import { LogoMark } from "@/components/logo";
import { WHATSAPP_URL } from "@/lib/data";

const STEPS = [
  ["01", "Elige tu nick", "Piensa tu alias hacker. Sin exámenes ni elitismo: todos empiezan en LVL 1."],
  ["02", "Entra al WhatsApp", "Toca el botón verde, únete al grupo y preséntate con tu nick + qué quieres aprender."],
  ["03", "Captura tu 1ª flag", "Participa en el próximo CTF o village y presume tu hazaña. Subes a LVL 2."],
];

const NEXT = [
  ["/villages", "VILLAGES", "Lockpick, hardware, OSINT… toca todo con tus manos."],
  ["/eventos", "EVENTOS", "Meetups en Quito + stream. Lleva laptop y ganas."],
  ["/ctf", "CTF", "Sandbox-Con 08 NOV. Arma tu equipo en el grupo."],
] as const;

export default function Unete() {
  return (
    <div>
      <Breadcrumb trail={[["ÚNETE", "/unete"]]} />
      <SectionHeader kicker="EMPIEZA AQUÍ" title="Únete en 30 segundos" />

      <Reveal>
        <div className="pixel-border glow-fuego relative overflow-hidden mb-10">
          <div
            className="absolute inset-0 animate-gradient"
            style={{ background: "linear-gradient(120deg, rgba(255,77,0,0.10), rgba(108,61,244,0.10), rgba(255,77,0,0.10))", backgroundSize: "200% 200%" }}
            aria-hidden
          />
          <div className="relative p-8 md:p-14 text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="animate-float-y"><LogoMark size={36} /></span>
              <p className="font-pixel text-[11px] text-[#16a34a]">● TODO PASA EN EL GRUPO</p>
              <span className="animate-float-y" style={{ animationDelay: "1.4s" }}><LogoMark size={36} /></span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mt-5">
              Sin formularios.<br />
              <span className="text-fuego">Un toque y estás dentro.</span>
            </h2>
            <p className="text-lg text-[#4a443b] mt-4 max-w-xl mx-auto">
              Eventos, CTFs, villages, ayuda y memes: toda la comunidad vive en WhatsApp.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-btn cta-pulse mt-8 !text-sm"
              style={{ background: "#1fa855", borderColor: "#1fa855" }}
            >
              ✆ UNIRME AL WHATSAPP
            </a>
            <p className="font-pixel text-[10px] text-[#8a8177] mt-4">GRUPO PRINCIPAL · QUITO + MUNDO</p>
          </div>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-4 mb-12">
        {STEPS.map(([k, t, d], i) => (
          <Reveal key={k} delay={i * 100}>
            <PixelCard className="h-full">
              <div className="flex items-center justify-between">
                <span className="text-4xl font-black text-[#e7e0d4]">{k}</span>
                <Tag>PASO {k}</Tag>
              </div>
              <h3 className="text-xl font-extrabold mt-3">{t}</h3>
              <p className="text-[#4a443b] mt-1">{d}</p>
            </PixelCard>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <SectionHeader kicker="DESPUÉS DEL GRUPO" title="Tus primeras quests" />
      </Reveal>
      <div className="grid md:grid-cols-3 gap-4">
        {NEXT.map(([href, title, desc], i) => (
          <Reveal key={href} delay={i * 100}>
            <Link href={href}>
              <PixelCard className="text-center h-full">
                <div className="flex justify-center"><LogoMark size={30} /></div>
                <p className="font-pixel text-[11px] mt-4"><span className="text-fuego">{title}</span></p>
                <p className="text-[#4a443b] mt-2">{desc}</p>
              </PixelCard>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
