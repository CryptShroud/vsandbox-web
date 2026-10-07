import { Breadcrumb, SectionHeader, PixelCard, Tag, PixelAvatar } from "@/components/pixel";
import { members } from "@/lib/data";

export default function HallOfFame() {
  const legends = members.slice(0, 3);
  return (
    <div>
      <Breadcrumb trail={[["COMUNIDAD", "/comunidad"], ["HALL OF FAME", "/comunidad/hall-of-fame"]]} />
      <SectionHeader kicker="LEGENDS" title="HALL OF FAME" />
      <div className="grid md:grid-cols-3 gap-4">
        {legends.map((m, i) => (
          <PixelCard key={m.nick} className="text-center pixel-border">
            <p className="font-pixel text-[10px] text-[#ff4d00]">{["◆ LEYENDA DE ORO", "◆ LEYENDA DE PLATA", "◆ LEYENDA DE BRONCE"][i]}</p>
            <div className="flex justify-center mt-3"><PixelAvatar nick={m.nick} size={72} /></div>
            <p className="font-pixel text-xs text-[#16130e] mt-3">{m.nick}</p>
            <div className="mt-2"><Tag>{m.xp} XP · LVL {m.level}</Tag></div>
            <p className="text-lg text-[#4a443b] mt-2">Por mentoría incansable y writeups legendarios en la season 03.</p>
          </PixelCard>
        ))}
      </div>
    </div>
  );
}
