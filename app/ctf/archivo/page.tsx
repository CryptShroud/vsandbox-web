import { Breadcrumb, SectionHeader, PixelCard, Tag } from "@/components/pixel";

const PAST = [["SANDBOX-CTF #03", "SudoSquad", "120 equipos"], ["SANDBOX-CTF #02", "404NotFound", "86 equipos"], ["SANDBOX-CTF #01", "CalabazasRoot", "54 equipos"]];

export default function Archivo() {
  return (
    <div>
      <Breadcrumb trail={[["CTF", "/ctf"], ["ARCHIVO", "/ctf/archivo"]]} />
      <SectionHeader kicker="HISTORY" title="CTFs PASADOS" />
      <div className="space-y-3">
        {PAST.map(([t, w, n]) => (
          <PixelCard key={t} className="!p-4 flex flex-wrap items-center gap-3">
            <p className="font-pixel text-[10px] text-[#16130e] flex-1">{t}</p>
            <Tag>GANADOR: {w.toUpperCase()}</Tag><Tag>{n.toUpperCase()}</Tag>
          </PixelCard>
        ))}
      </div>
    </div>
  );
}
