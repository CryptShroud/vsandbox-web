import Link from "next/link";
import Image from "next/image";
import { Breadcrumb, SectionHeader, PixelCard, Tag, PixelButton } from "@/components/pixel";
import { events } from "@/lib/data";

export default function Eventos() {
  return (
    <div>
      <Breadcrumb trail={[["EVENTOS", "/eventos"]]} />
      <SectionHeader kicker="ARCHIVO" title="Eventos pasados" />
      <Link href="/eventos/edicion-01">
        <PixelCard className="mb-4 grid md:grid-cols-3 gap-5 items-center !p-5 pixel-border">
          <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[rgba(255,107,0,0.35)]">
            <Image
              src="/eventos/edicion-01/gallery/evento01-02.jpeg"
              alt="Operación en curso — V-SANDBOX 01 en CIESPAL"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="md:col-span-2">
            <div className="flex gap-2 flex-wrap"><Tag>EDICIÓN 01</Tag><Tag>ARCHIVADA</Tag><Tag>24 JUL 2026</Tag><Tag>CIESPAL</Tag></div>
            <h3 className="text-2xl font-bold text-[#16130e] mt-2">V-SANDBOX 01: Persistence & Privilege Escalation</h3>
            <p className="text-lg text-[#4a443b] mt-1">5 ponentes · CTF operativo ~2h · brutalismo del CIESPAL. Revive la misión: agenda, lineup y galería.</p>
            <span className="font-pixel text-[10px] text-[#ff4d00] mt-3 inline-block">VER RECAP COMPLETO {">"}</span>
          </div>
        </PixelCard>
      </Link>
      <Link href="/eventos/edicion-00">
        <PixelCard className="mb-6 grid md:grid-cols-3 gap-5 items-center !p-5">
          <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#1F2833]">
            <Image
              src="/eventos/edicion-00/gallery/1777301968016.jpeg"
              alt="Squad de CTF — V-SANDBOX 00 Initial Access"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="md:col-span-2">
            <div className="flex gap-2 flex-wrap"><Tag>EDICIÓN 00</Tag><Tag>ARCHIVADA</Tag><Tag>24 ABR 2026</Tag></div>
            <h3 className="text-2xl font-bold text-[#16130e] mt-2">V-SANDBOX 00: Initial Access</h3>
            <p className="text-lg text-[#4a443b] mt-1">100+ asistentes · 5 ponentes · ransomware en vivo · CTF & networking. Revive la noche: agenda, lineup y galería completa.</p>
            <span className="font-pixel text-[10px] text-[#ff4d00] mt-3 inline-block">VER RECAP COMPLETO {">"}</span>
          </div>
        </PixelCard>
      </Link>
      <SectionHeader kicker="CALENDARIO" title="Próximos" />
      <div className="mb-4"><PixelButton href="/eventos/edicion-00" ghost>▣ VER ARCHIVO: EDICIÓN 00</PixelButton></div>
      <Link href="/cfp">
        <PixelCard className="mb-4 flex flex-wrap items-center gap-3 pixel-border">
          <span className="font-pixel text-[10px] text-[#ff4d00] blink">● CFP ABIERTO</span>
          <p className="text-[#16130e] flex-1 min-w-52"><span className="font-bold">Sandbox-Con Main Event</span> busca speakers. Cierre 19 oct → propone tu charla.</p>
          <span className="font-pixel text-[9px] text-[#ff4d00]">APLICAR {">"}</span>
        </PixelCard>
      </Link>
      <div className="space-y-3">
        {events.map((e) => (
          <Link key={e.slug} href={`/eventos/${e.slug}`}>
            <PixelCard className="!p-4 flex flex-wrap items-center gap-3">
              <div className="bg-white border-2 border-[#ff4d00] px-3 py-2 text-center">
                <p className="font-pixel text-[9px] text-[#ff4d00]">{e.date.slice(5)}</p>
                <p className="font-pixel text-[8px] text-[#4a443b]">2026</p>
              </div>
              <div className="flex-1 min-w-52">
                <p className="font-pixel text-[10px] text-[#16130e]">{e.title.toUpperCase()}</p>
                <div className="flex gap-2 mt-1"><Tag>{e.mode}</Tag><Tag>{e.prize.toUpperCase()}</Tag></div>
              </div>
              <span className="font-pixel text-[9px] text-[#ff4d00]">RSVP{">"}</span>
            </PixelCard>
          </Link>
        ))}
      </div>
    </div>
  );
}
