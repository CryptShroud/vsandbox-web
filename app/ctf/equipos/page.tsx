import { Breadcrumb, SectionHeader, PixelCard, Tag, PixelAvatar } from "@/components/pixel";

const TEAMS = [["CalabazasRoot", 4, 3200], ["NmapY Queso", 3, 2850], ["404NotFound", 4, 2600], ["SudoSquad", 2, 2100], ["PixelPwny", 3, 1900], ["BufferBanda", 4, 1750]];

export default function Equipos() {
  return (
    <div>
      <Breadcrumb trail={[["CTF", "/ctf"], ["EQUIPOS", "/ctf/equipos"]]} />
      <SectionHeader kicker="PARTIES" title="EQUIPOS" />
      <div className="grid md:grid-cols-3 gap-4">
        {TEAMS.map(([name, n, xp]) => (
          <PixelCard key={name as string} className="text-center">
            <div className="flex justify-center"><PixelAvatar nick={name as string} size={52} /></div>
            <p className="font-pixel text-[11px] text-[#16130e] mt-3">{(name as string).toUpperCase()}</p>
            <div className="flex gap-2 justify-center mt-2"><Tag>{n} PLAYERS</Tag><Tag>{xp} XP</Tag></div>
          </PixelCard>
        ))}
      </div>
    </div>
  );
}
