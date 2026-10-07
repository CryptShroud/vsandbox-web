import Link from "next/link";
import { Breadcrumb, SectionHeader, PixelCard, Tag, PixelButton, Sprite } from "@/components/pixel";
import { Countdown, Reveal } from "@/components/fx";

export default function Ctf() {
  return (
    <div>
      <Breadcrumb trail={[["CTF", "/ctf"]]} />
      <SectionHeader kicker="BOSS BATTLE" title="SANDBOX-CTF #04" right={<PixelButton href="/unete">▶ REGISTRAR EQUIPO</PixelButton>} />
      <Reveal>
        <div className="pixel-border !bg-[#16130e] !border-[#16130e] text-white text-center mb-6 p-8 md:p-10 relative overflow-hidden">
          <div className="absolute -top-20 left-1/3 w-80 h-80 rounded-full bg-[#ff4d00]/20 blur-[90px]" aria-hidden />
          <p className="font-pixel text-[11px] text-[#ff9d00] relative">LA CALABAZA ENCANTADA · JEOPARDY 48H · 08 NOV 2026</p>
          <div className="mt-5 max-w-md mx-auto relative"><Countdown target="2026-11-08T09:00:00-05:00" /></div>
          <div className="flex gap-2 justify-center mt-5 flex-wrap relative"><Tag>WEB</Tag><Tag>PWN</Tag><Tag>FORENSE</Tag><Tag>OSINT</Tag><Tag>CRYPTO</Tag></div>
          <p className="text-lg text-white/70 mt-4 relative">Premio: 500€ + swag + trofeo. Equipos de 1-4 players.</p>
        </div>
      </Reveal>
      <div className="grid md:grid-cols-4 gap-4">
        {[["REGLAS", "Formato, scope y juego limpio.", "/ctf/reglas", "shield"], ["RANKING", "Leaderboard global en vivo.", "/ctf/ranking", "flag"], ["EQUIPOS", "12 equipos inscritos. ¡Une el tuyo!", "/ctf/equipos", "ghost"], ["ARCHIVO", "CTFs pasados y ganadores.", "/ctf/archivo", "book"]].map(([t, d, href, icon]) => (
          <Link key={href} href={href}><PixelCard className="text-center"><Sprite name={icon} size={26} className="text-[#ff4d00]" /><p className="font-pixel text-[11px] text-[#16130e] mt-2">{t}</p><p className="text-lg text-[#4a443b] mt-1">{d}</p></PixelCard></Link>
        ))}
      </div>
    </div>
  );
}
