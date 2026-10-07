import { Breadcrumb, SectionHeader, PixelCard, Tag, Sprite, PixelButton } from "@/components/pixel";
import { FogDivider } from "@/components/sf";
import { villages } from "@/lib/data";

export default function Villages() {
  return (
    <div>
      <Breadcrumb trail={[["VILLAGES", "/villages"]]} />
      <SectionHeader kicker="DEF CON STYLE · UIO EDITION" title="Villages" right={<PixelButton href="/unete">▶ CONSEGUIR BADGE</PixelButton>} />
      <PixelCard className="mb-6">
        <p className="text-xl text-[#16130e]">Los villages son zonas temáticas abiertas durante nuestros eventos: mesas, herramientas y gente que te enseña con las manos. Sin charlas aburridas — <span className="text-[#ff4d00]">puro hacer</span>.</p>
        <div className="flex gap-2 flex-wrap mt-3"><Tag>ENTRADA LIBRE</Tag><Tag>6 VILLAGES</Tag><Tag>LA FLORESTA · UIO</Tag></div>
      </PixelCard>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {villages.map((v) => (
          <PixelCard key={v.slug} className="flex flex-col">
            <div className="flex items-center justify-between">
              <span className="text-[#ff4d00]"><Sprite name={v.icon} size={30} /></span>
              <Tag>{v.level}</Tag>
            </div>
            <h3 className="text-xl font-bold text-[#16130e] mt-3">{v.name}</h3>
            <p className="text-[#4a443b] mt-1 flex-1">{v.desc}</p>
            <ul className="mt-3 space-y-1">
              {v.activities.map((a) => (
                <li key={a} className="text-[#16130e]">→ {a}</li>
              ))}
            </ul>
          </PixelCard>
        ))}
      </div>
      <FogDivider />
      <PixelCard className="text-center">
        <p className="font-pixel text-[10px] text-[#ff4d00]">¿QUIERES MONTAR UN VILLAGE?</p>
        <p className="text-lg text-[#4a443b] mt-2">Propón tu zona (mínimo 2 voluntarios + 1 mesa). Te damos espacio, corriente y café.</p>
        <div className="mt-4"><PixelButton href="/contacto">▶ PROPONER VILLAGE</PixelButton></div>
      </PixelCard>
    </div>
  );
}
