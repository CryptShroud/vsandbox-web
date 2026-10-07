"use client";

import { useState } from "react";
import { Breadcrumb, SectionHeader, PixelCard, Tag } from "@/components/pixel";

const TRACKS = ["Web Hacking", "Blue Team / Defensa", "OSINT & Recon", "Hardware & RF", "Cripto & Privacidad", "Carrera & Comunidad"];

export default function Cfp() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <Breadcrumb trail={[["EVENTOS", "/eventos"], ["CALL FOR PAPERS", "/cfp"]]} />
      <SectionHeader kicker="TU CHARLA · 25 MIN + 5 Q&A" title="Call for Papers" />
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <PixelCard>
          <Tag>FECHAS CLAVE</Tag>
          <ul className="mt-3 space-y-2 text-lg">
            <li><span className="text-[#ff4d00]">→ Cierre CFP:</span> <span className="text-[#16130e]">19 oct 2026</span></li>
            <li><span className="text-[#ff4d00]">→ Respuestas:</span> <span className="text-[#16130e]">26 oct 2026</span></li>
            <li><span className="text-[#ff4d00]">→ Main event:</span> <span className="text-[#16130e]">8 nov 2026 · Casa de la Cultura, Quito</span></li>
          </ul>
        </PixelCard>
        <PixelCard>
          <Tag>QUÉ BUSCAMOS</Tag>
          <ul className="mt-3 space-y-2 text-lg text-[#16130e]">
            <li>→ Demos en vivo (romper cosas en directo = amor).</li>
            <li>→ Primeras charlas bienvenidas: hay mentoría de speakers.</li>
            <li>→ Nada de pitches de producto. Ven a compartir, chill.</li>
          </ul>
        </PixelCard>
      </div>
      <PixelCard>
        <p className="font-pixel text-[10px] text-[#ff4d00] mb-4">TRACKS</p>
        <div className="flex gap-2 flex-wrap mb-6">{TRACKS.map((t) => <Tag key={t}>{t.toUpperCase()}</Tag>)}</div>
        {sent ? (
          <div className="pixel-border-thin bg-[#f3efe8] p-6 text-center">
            <p className="font-pixel text-xs text-[#16a34a]">✓ PROPUESTA RECIBIDA</p>
            <p className="text-lg text-[#4a443b] mt-2">Revisamos cada propuesta a mano. Te escribimos antes del 26 oct.</p>
          </div>
        ) : (
          <form className="grid gap-4 md:grid-cols-2" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <input required placeholder="Tu nick *" className="bg-white border border-[#e7e0d4] rounded-xl p-3 text-lg text-[#16130e] outline-none focus:border-[#ff4d00]" />
            <input required type="email" placeholder="tu@email.com *" className="bg-white border border-[#e7e0d4] rounded-xl p-3 text-lg text-[#16130e] outline-none focus:border-[#ff4d00]" />
            <input required placeholder="Título de la charla *" className="md:col-span-2 bg-white border border-[#e7e0d4] rounded-xl p-3 text-lg text-[#16130e] outline-none focus:border-[#ff4d00]" />
            <textarea required rows={4} placeholder="Abstract: qué romperás en vivo y qué se llevará el público *" className="md:col-span-2 bg-white border border-[#e7e0d4] rounded-xl p-3 text-lg text-[#16130e] outline-none focus:border-[#ff4d00]" />
            <div className="md:col-span-2"><button className="pixel-btn w-full text-center" type="submit">▶ ENVIAR PROPUESTA</button></div>
          </form>
        )}
      </PixelCard>
    </div>
  );
}
