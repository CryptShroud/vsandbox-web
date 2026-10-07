import { Breadcrumb, SectionHeader, PixelCard } from "@/components/pixel";

export default function Privacidad() {
  return (
    <div>
      <Breadcrumb trail={[["PRIVACIDAD", "/privacidad"]]} />
      <SectionHeader kicker="LEGAL" title="PRIVACIDAD" />
      <PixelCard>
        <div className="space-y-3 text-xl text-[#16130e]">
          <p>→ Recopilamos nick, email y progreso para operar la comunidad. Nada más.</p>
          <p>→ Nunca vendemos datos. Los writeups que publiques siguen siendo tuyos (licencia CC-BY).</p>
          <p>→ Puedes pedir borrado total escribiendo a seguro@vsandbox.gg.</p>
          <p>→ Usamos cookies mínimas (preferencia ES/EN). Sin trackers de terceros en este boceto.</p>
        </div>
      </PixelCard>
    </div>
  );
}
