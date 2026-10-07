import { Breadcrumb, SectionHeader, PixelCard } from "@/components/pixel";

const RULES = ["Equipos de 1-4. Sin compartir flags entre equipos.", "Sin DoS al infra del CTF. Atacar la plataforma = descalificación.", "Sin fuerza bruta masiva contra servicios compartidos.", "Writeups públicos solo después del cierre.", "Diviértete y ayuda en #ctf-ayuda. El rage-quit está permitido, el rage-chat no."];

export default function CtfReglas() {
  return (
    <div>
      <Breadcrumb trail={[["CTF", "/ctf"], ["REGLAS", "/ctf/reglas"]]} />
      <SectionHeader kicker="FAIR PLAY" title="REGLAS DEL CTF" />
      <PixelCard><ol className="space-y-3">{RULES.map((r, i) => <li key={i} className="text-xl text-[#16130e]"><span className="font-pixel text-[10px] text-[#ff4d00]">[{i + 1}] </span>{r}</li>)}</ol></PixelCard>
    </div>
  );
}
