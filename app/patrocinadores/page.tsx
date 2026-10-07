import { Breadcrumb, SectionHeader, PixelCard, Tag, PixelButton } from "@/components/pixel";
import { sponsors } from "@/lib/data";

const TIERS = [
  ["BRONCE", "$250", ["Logo en web + stickers", "Mención en stream", "2 pases meetup"]],
  ["PLATA", "$800", ["Todo lo bronce", "Stand en villages", "Post dedicado + 5 pases"]],
  ["ORO", "$2.5K", ["Todo lo plata", "Keynote slot + logo en badge", "Acceso a bolsa de talento"]],
];

export default function Patrocinadores() {
  return (
    <div>
      <Breadcrumb trail={[["PATROCINADORES", "/patrocinadores"]]} />
      <SectionHeader kicker="FUEL THE COMMUNITY" title="Patrocinadores" right={<PixelButton href="/contacto">▶ SER SPONSOR</PixelButton>} />
      <PixelCard className="mb-6 text-center">
        <p className="text-xl text-[#16130e]">El 100% va a la comunidad: salas en SF, hardware para villages, premios de CTF y café. Somos non-profit de barrio con ambición DEF CON.</p>
      </PixelCard>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {TIERS.map(([name, price, perks]) => (
          <PixelCard key={name as string} className={name === "ORO" ? "pixel-border" : ""}>
            <Tag>{name as string}</Tag>
            <p className="text-3xl font-bold text-[#ff4d00] mt-2">{price}</p>
            <ul className="mt-3 space-y-1">
              {(perks as string[]).map((p) => <li key={p} className="text-[#16130e]">→ {p}</li>)}
            </ul>
          </PixelCard>
        ))}
      </div>
      <SectionHeader kicker="WALL OF LOVE" title="Ya apoyan" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {sponsors.map((s) => (
          <PixelCard key={s.name} className="text-center !p-4">
            <p className="font-bold text-[#16130e]">{s.name}</p>
            <div className="mt-2"><Tag>{s.tier}</Tag></div>
          </PixelCard>
        ))}
      </div>
    </div>
  );
}
