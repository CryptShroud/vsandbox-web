import { Breadcrumb, SectionHeader, PixelCard, Tag } from "@/components/pixel";

const RANKS = [
  ["LVL 1", "NOOB", "0 XP", "Entrar al WhatsApp y presentarte."],
  ["LVL 5", "SCRIPT KID", "500 XP", "Completar 2 labs fáciles."],
  ["LVL 10", "HUNTER", "1500 XP", "Publicar 1 writeup + top 50% en un CTF."],
  ["LVL 20", "ELITE", "4000 XP", "Ganar un CTF o mentorear 3 noobs."],
  ["LVL 30", "MENTOR", "6500 XP", "Dar un taller o mantener un proyecto."],
  ["LVL 40", "LEGEND", "9000 XP", "Hall of fame. Tu sprite queda en el mural."],
];

export default function Rangos() {
  return (
    <div>
      <Breadcrumb trail={[["COMUNIDAD", "/comunidad"], ["RANGOS", "/comunidad/rangos"]]} />
      <SectionHeader kicker="LEVEL UP SYSTEM" title="RANGOS Y XP" />
      <PixelCard className="mb-4">
        <p className="font-pixel text-[10px] text-[#ff4d00]">CÓMO GANAR XP</p>
        <div className="flex gap-2 flex-wrap mt-2"><Tag>LAB +20-120</Tag><Tag>WRITEUP +50</Tag><Tag>AYUDA +10</Tag><Tag>CTF TOP +200</Tag><Tag>TALLER +300</Tag></div>
      </PixelCard>
      <div className="space-y-3">
        {RANKS.map(([lvl, name, xp, req]) => (
          <PixelCard key={name} className="!p-4 flex flex-wrap items-center gap-3">
            <span className="font-pixel text-[10px] text-[#ff4d00] w-16">{lvl}</span>
            <p className="font-pixel text-[11px] text-[#16130e] flex-1">{name}</p>
            <Tag>{xp}</Tag>
            <p className="w-full text-lg text-[#4a443b]">→ {req}</p>
          </PixelCard>
        ))}
      </div>
    </div>
  );
}
