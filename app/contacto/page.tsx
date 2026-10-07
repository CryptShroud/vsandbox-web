import { Breadcrumb, SectionHeader, PixelCard, Tag } from "@/components/pixel";
import { Reveal } from "@/components/fx";
import { WHATSAPP_URL } from "@/lib/data";

export default function Contacto() {
  return (
    <div>
      <Breadcrumb trail={[["CONTACTO", "/contacto"]]} />
      <SectionHeader kicker="SEND MESSAGE" title="Contacto" />
      <Reveal>
        <PixelCard className="mb-4 text-center pixel-border">
          <p className="font-pixel text-[10px] text-[#16a34a]">● RESPUESTA MÁS RÁPIDA</p>
          <h2 className="text-2xl font-bold mt-2">Escríbenos al WhatsApp</h2>
          <p className="text-lg text-[#4a443b] mt-1">Dudas, alianzas, prensa o reportes: el grupo es el canal oficial.</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-btn mt-5"
            style={{ background: "linear-gradient(180deg, #2fe07a, #25D366)", boxShadow: "0 4px 16px rgba(37,211,102,0.4)" }}
          >
            ✆ ABRIR WHATSAPP
          </a>
        </PixelCard>
      </Reveal>
      <Reveal delay={120}>
        <PixelCard>
          <p className="font-pixel text-[10px] text-[#16130e]">CANALES DIRECTOS</p>
          <ul className="mt-4 space-y-2 text-xl">
            <li><span className="text-[#ff4d00]">◆ Email:</span> <span className="text-[#16130e]">hola@vsandbox.gg</span></li>
            <li><span className="text-[#ff4d00]">◆ Prensa:</span> <span className="text-[#16130e]">prensa@vsandbox.gg</span></li>
            <li><span className="text-[#ff4d00]">◆ Reporte CoC:</span> <span className="text-[#16130e]">seguro@vsandbox.gg</span></li>
          </ul>
          <div className="mt-4"><Tag>EMAIL ~48H · WHATSAPP ~MINUTOS</Tag></div>
        </PixelCard>
      </Reveal>
    </div>
  );
}
