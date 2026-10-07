import { Breadcrumb, SectionHeader, PixelAvatar, Tag } from "@/components/pixel";
import { members } from "@/lib/data";

export default function Ranking() {
  return (
    <div>
      <Breadcrumb trail={[["CTF", "/ctf"], ["RANKING", "/ctf/ranking"]]} />
      <SectionHeader kicker="SEASON 04" title="LEADERBOARD GLOBAL" />
      <div className="pixel-card divide-y-2 divide-[#e7e0d4]">
        {[...members].sort((a, b) => b.xp - a.xp).map((m, i) => (
          <div key={m.nick} className="flex items-center gap-3 p-3">
            <span className={`font-pixel text-xs w-10 ${i < 3 ? "text-[#ff4d00]" : "text-[#4a443b]"}`}>{["1ST", "2ND", "3RD"][i] ?? `#${i + 1}`}</span>
            <PixelAvatar nick={m.nick} size={40} />
            <div className="flex-1 min-w-0">
              <p className="font-pixel text-[10px] text-[#16130e] truncate">{m.nick}</p>
              <div className="hp-bar mt-1"><div className="hp-fill" style={{ width: `${Math.min(100, m.xp / 100)}%` }} /></div>
            </div>
            <Tag>{m.xp} XP</Tag>
          </div>
        ))}
      </div>
    </div>
  );
}
