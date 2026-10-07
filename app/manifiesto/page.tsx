import { Breadcrumb, SectionHeader, PixelCard, Tag, Sprite, PixelAvatar } from "@/components/pixel";
import { members } from "@/lib/data";

const VALUES = [
  ["APRENDE EN PÚBLICO", "Comparte writeups, pregunta sin miedo. Aquí nadie nace root."],
  ["HACKEA ÉTICO", "Solo labs y objetivos autorizados. El daño real = ban permanente."],
  ["LEVANTA A OTROS", "Mentorea, revisa CVs, comparte botín. La comunidad sube junta."],
  ["CURIOSIDAD RADICAL", "Rompe, entiende, documenta. El 'por qué' vale más que la flag."],
];

export default function Manifiesto() {
  return (
    <div>
      <Breadcrumb trail={[["MANIFIESTO", "/manifiesto"]]} />
      <SectionHeader kicker="LORE" title="MANIFIESTO" />
      <PixelCard className="mb-6">
        <p className="font-pixel text-[11px] text-[#ff4d00] leading-loose">
          SOMOS UNA COMUNIDAD DE HACKERS EN QUITO QUE CREE QUE LA SEGURIDAD SE APRENDE JUGANDO: CON LABS, CTFs Y BUENA GENTE.
        </p>
        <p className="text-xl text-[#4a443b] mt-4">Misión: que cualquier persona hispanohablante pase de “me hackearon” a “yo encuentro el bug” con rutas gratuitas, mentores y batallas semanales.</p>
      </PixelCard>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {VALUES.map(([t, d]) => (
          <PixelCard key={t}>
            <div className="flex items-center gap-2 text-[#ff4d00]"><Sprite name="shield" size={20} /><span className="font-pixel text-[10px] text-[#16130e]">{t}</span></div>
            <p className="text-lg text-[#4a443b] mt-2">{d}</p>
          </PixelCard>
        ))}
      </div>
      <SectionHeader kicker="NPCs" title="STAFF DE LA COMUNIDAD" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {members.slice(0, 8).map((m) => (
          <PixelCard key={m.nick} className="text-center">
            <div className="flex justify-center"><PixelAvatar nick={m.nick} size={56} /></div>
            <p className="font-pixel text-[10px] text-[#16130e] mt-3">{m.nick}</p>
            <div className="mt-2"><Tag>{m.role}</Tag></div>
            <p className="font-pixel text-[9px] text-[#4a443b] mt-2">LVL {m.level} · {m.country}</p>
          </PixelCard>
        ))}
      </div>
    </div>
  );
}
