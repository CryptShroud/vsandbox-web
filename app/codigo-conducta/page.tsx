import { Breadcrumb, SectionHeader, PixelCard } from "@/components/pixel";

export default function Codigo() {
  const rules = [
    "Solo ataca objetivos autorizados: labs, CTFs y programas bug-bounty con scope claro.",
    "Cero tolerancia a acoso, doxing o discriminación. Primera ofensa grave = ban.",
    "Comparte conocimiento, no malware. Nada de ransomware, stealers ni RATs.",
    "Respeta spoilers: usa etiquetas spoiler en flags activas durante 7 días.",
    "Da crédito: cita writeups y herramientas que uses.",
    "Si ves algo turbio, repórtalo a seguro@vsandbox.gg. Proteger la comunidad es quest de todos.",
  ];
  return (
    <div>
      <Breadcrumb trail={[["CÓDIGO DE CONDUCTA", "/codigo-conducta"]]} />
      <SectionHeader kicker="SERVER RULES v1.0" title="CÓDIGO DE CONDUCTA" />
      <PixelCard>
        <ol className="space-y-3">
          {rules.map((r, i) => (
            <li key={i} className="text-xl text-[#16130e]"><span className="font-pixel text-[10px] text-[#ff4d00]">[{i + 1}] </span>{r}</li>
          ))}
        </ol>
      </PixelCard>
    </div>
  );
}
