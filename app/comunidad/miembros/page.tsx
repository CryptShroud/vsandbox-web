import { Breadcrumb, SectionHeader, PixelCard, Tag, PixelAvatar } from "@/components/pixel";
import { members } from "@/lib/data";

export default function Miembros() {
  return (
    <div>
      <Breadcrumb trail={[["COMUNIDAD", "/comunidad"], ["MIEMBROS", "/comunidad/miembros"]]} />
      <SectionHeader kicker="PLAYERS ONLINE" title="MIEMBROS" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {members.map((m) => (
          <PixelCard key={m.nick} className="text-center">
            <div className="flex justify-center"><PixelAvatar nick={m.nick} size={56} /></div>
            <p className="font-pixel text-[10px] text-[#16130e] mt-3">{m.nick}</p>
            <div className="mt-2"><Tag>{m.role}</Tag></div>
            <div className="hp-bar mt-2"><div className="hp-fill" style={{ width: `${Math.min(100, m.xp / 100)}%` }} /></div>
            <p className="font-pixel text-[9px] text-[#4a443b] mt-2">LVL {m.level} · {m.country} · {m.xp} XP</p>
          </PixelCard>
        ))}
      </div>
    </div>
  );
}
