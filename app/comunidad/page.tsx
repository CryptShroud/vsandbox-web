import Link from "next/link";
import { Breadcrumb, SectionHeader, PixelCard, Sprite } from "@/components/pixel";

const HUB = [
  ["REGLAS DE LA COMUNIDAD", "Cómo convivir sin starear al party.", "/comunidad", "shield"],
  ["RANGOS Y XP", "De NOOB a LEGEND: cómo subir de nivel.", "/comunidad/rangos", "flag"],
  ["MIEMBROS", "Conoce a los players activos.", "/comunidad/miembros", "ghost"],
  ["HALL OF FAME", "Leyendas del mes y contribuidores top.", "/comunidad/hall-of-fame", "potion"],
] as const;

export default function Comunidad() {
  return (
    <div>
      <Breadcrumb trail={[["COMUNIDAD", "/comunidad"]]} />
      <SectionHeader kicker="TOWN SQUARE" title="LA COMUNIDAD" />
      <PixelCard className="mb-6">
        <p className="font-pixel text-[10px] text-[#ff4d00]">REGLAS RÁPIDAS</p>
        <ul className="mt-2 space-y-1 text-xl text-[#16130e]">
          <li>→ Solo labs autorizados. Nada de “probar en la empresa del vecino”.</li>
          <li>→ Preséntate en #bienvenidas y pide rol según tu ruta.</li>
          <li>→ Spoilers de flags activas con etiqueta por 7 días.</li>
        </ul>
        <p className="text-lg text-[#4a443b] mt-2">Todo se coordina en el grupo de WhatsApp: bienvenidas, ayuda, CTFs y offtopic-café.</p>
      </PixelCard>
      <div className="grid md:grid-cols-2 gap-4">
        {HUB.filter(([, , h]) => h !== "/comunidad").map(([t, d, href, icon]) => (
          <Link key={href} href={href}><PixelCard className="flex items-center gap-3"><Sprite name={icon} size={26} className="text-[#ff4d00]" /><div><p className="font-pixel text-[11px] text-[#16130e]">{t}</p><p className="text-lg text-[#4a443b]">{d}</p></div></PixelCard></Link>
        ))}
      </div>
    </div>
  );
}
