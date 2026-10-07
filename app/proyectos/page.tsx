import { Breadcrumb, SectionHeader, PixelCard, Tag } from "@/components/pixel";

const PROJECTS = [
  ["sandbox-labs", "TS", "Generador de labs efímeros con Docker. 120★"],
  ["pixel-cheats", "MD", "Cheatsheets colaborativas. 89★"],
  ["flag-tracker", "PY", "Bot para trackear flags y XP del grupo. 64★"],
  ["osint-kit-es", "PY", "Scripts OSINT en español. 41★"],
];

export default function Proyectos() {
  return (
    <div>
      <Breadcrumb trail={[["PROYECTOS", "/proyectos"]]} />
      <SectionHeader kicker="OPEN SOURCE" title="PROYECTOS" />
      <PixelCard className="mb-4"><p className="text-xl text-[#16130e]">→ Todos aceptan PRs con etiqueta <span className="text-[#ff4d00]">good-first-quest</span>. Pide rol @dev en el grupo y te asignamos mentor.</p></PixelCard>
      <div className="grid md:grid-cols-2 gap-4">
        {PROJECTS.map(([n, lang, d]) => (
          <PixelCard key={n}>
            <div className="flex items-center justify-between"><p className="font-pixel text-[11px] text-[#16130e]">{n.toUpperCase()}</p><Tag>{lang}</Tag></div>
            <p className="text-lg text-[#4a443b] mt-2">{d}</p>
            <p className="font-pixel text-[9px] text-[#ff4d00] mt-3 cursor-pointer">★ VER EN GITHUB{">"}</p>
          </PixelCard>
        ))}
      </div>
    </div>
  );
}
