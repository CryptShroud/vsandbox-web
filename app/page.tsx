import Link from "next/link";
import Image from "next/image";
import { PixelButton, SectionHeader, PixelCard, Tag, Ticker, Sprite, PixelAvatar } from "@/components/pixel";
import { Countdown, ThreatLevel, Reveal, Tilt, HackConsole, XPBar } from "@/components/fx";
import { FogDivider } from "@/components/sf";
import { LogoMark } from "@/components/logo";
import { members, events, villages, sponsors, HQ, WHATSAPP_URL } from "@/lib/data";

export default function Home() {
  return (
    <div className="space-y-16 md:space-y-20">
      {/* HERO editorial */}
      <section className="grid lg:grid-cols-12 gap-8 items-center pt-4 md:pt-8">
        <div className="lg:col-span-6">
          <Reveal>
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <ThreatLevel level="COMUNIDAD ACTIVA · QUITO" />
              <Tag>EST. 2026</Tag>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-[2.9rem] leading-[0.95] sm:text-6xl md:text-7xl font-black tracking-tight text-[#16130e]">
              La comunidad <span className="text-fuego">hacker</span> de Quito
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 text-lg md:text-xl text-[#4a443b] max-w-xl leading-relaxed">
              CTFs, villages estilo DEF CON, meetups y una manada que rompe cosas de verdad.
              Una comunidad hacker en Quito, chill y de puertas abiertas.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-7 flex flex-wrap gap-3">
              <span className="cta-pulse rounded-full inline-flex">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-btn"
                  style={{ background: "#1fa855", borderColor: "#1fa855" }}
                >
                  ✆ Unirme al grupo
                </a>
              </span>
              <PixelButton href="/villages" ghost>Explorar villages</PixelButton>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-8 grid grid-cols-3 gap-6 max-w-md">
              {[
                ["2.4K", "MIEMBROS"],
                ["38", "CTFs"],
                ["06", "VILLAGES"],
              ].map(([v, l]) => (
                <div key={l}>
                  <p className="text-3xl font-black tracking-tight">{v}</p>
                  <p className="font-pixel text-[10px] text-[#8a8177] mt-1">{l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-6">
          <Reveal delay={200}>
            <Tilt max={5}>
              <div className="relative">
                <div className="rounded-[28px] overflow-hidden border border-[#e7e0d4] shadow-[0_32px_80px_rgba(22,19,14,0.18)] rotate-1">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/foto-principal.jpg"
                      alt="La manada completa de V-SandBox en Quito"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-[center_25%]"
                    />
                  </div>
                </div>
                <div className="absolute -top-4 -left-2 sm:left-6 rotate-[-6deg] bg-[#16130e] text-white font-pixel text-[10px] px-4 py-2 rounded-full shadow-xl">
                  ● LA MANADA · UIO
                </div>
                <div className="absolute -bottom-5 right-4 sm:right-8 rotate-[3deg] bg-white border border-[#e7e0d4] rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3">
                  <LogoMark size={24} />
                  <div>
                    <p className="font-black text-sm leading-none">Sandbox-Con</p>
                    <p className="font-pixel text-[9px] text-[#ff4d00] mt-1">08 NOV · QUITO</p>
                  </div>
                </div>
              </div>
            </Tilt>
          </Reveal>
        </div>
      </section>

      <Ticker items={["SANDBOX-CON — 08 NOV · CASA DE LA CULTURA · QUITO", "CFP ABIERTO HASTA 19 OCT", "NUEVO VILLAGE: HARDWARE HACKING", "TOP PLAYER: CRYPTSHROUD LVL 42", "MEETUP MENSUAL · 2º VIERNES · LA FLORESTA", "ÚNETE POR WHATSAPP — SIN FORMULARIOS"]} />

      {/* SEDE */}
      <section>
        <Reveal>
          <PixelCard className="grid md:grid-cols-3 gap-6 items-center !p-6 md:!p-10">
            <div className="md:col-span-2">
              <p className="font-pixel text-[11px] text-[#ff4d00]">BASE OPERATIVA — QUITO, EC</p>
              <h2 className="text-2xl md:text-4xl font-black tracking-tight mt-3">Hecha en Quito, abierta al mundo</h2>
              <p className="text-lg text-[#4a443b] mt-3">Meetups presenciales en La Floresta + stream global. Si estás en Quito, ven a tocar hardware real; si no, todo se transmite y queda grabado.</p>
              <div className="flex gap-2 flex-wrap mt-4"><Tag>{HQ.meetup.toUpperCase()}</Tag><Tag>{HQ.stream.toUpperCase()}</Tag></div>
            </div>
            <Tilt>
              <div className="bg-[#f3efe8] border border-[#e7e0d4] rounded-2xl p-6">
                <div className="flex items-center gap-2"><LogoMark size={20} /><p className="font-pixel text-[10px] text-[#ff4d00]">HQ</p></div>
                <p className="font-extrabold text-[#16130e] mt-2 text-lg">{HQ.street}</p>
                <p className="text-[#4a443b]">{HQ.city}</p>
                <Link href="/eventos" className="font-pixel text-[10px] text-[#ff4d00] mt-4 inline-block hover:underline">VER CALENDARIO →</Link>
              </div>
            </Tilt>
          </PixelCard>
        </Reveal>
      </section>

      <FogDivider />

      {/* BENTO: CTF + VILLAGES */}
      <section>
        <Reveal><SectionHeader kicker="EL HUB" title="Todo pasa aquí" right={<Link href="/villages" className="font-pixel text-[11px] text-[#ff4d00] hover:underline">VER VILLAGES →</Link>} /></Reveal>
        <div className="grid md:grid-cols-3 gap-4">
          <Reveal className="md:col-span-2">
            <div className="pixel-border !bg-[#16130e] !border-[#16130e] text-white p-6 md:p-10 relative overflow-hidden h-full">
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#ff4d00]/25 blur-[80px]" aria-hidden />
              <div className="absolute -bottom-24 -left-10 w-72 h-72 rounded-full bg-[#6c3df4]/25 blur-[80px]" aria-hidden />
              <div className="relative">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-pixel text-[10px] bg-[#ff4d00] text-white px-3 py-1.5 rounded-full">BOSS BATTLE</span>
                  <span className="font-pixel text-[10px] text-white/60">SANDBOX-CTF · 08 NOV 2026</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-black tracking-tight mt-4">Sandbox-Con<br />Main Event</h3>
                <p className="text-white/70 mt-3 max-w-md">Jeopardy 48h por equipos. 500€ en premios + swag + trofeo. La calabaza encantada te espera.</p>
                <div className="mt-6 max-w-md"><Countdown target="2026-11-08T09:00:00-05:00" /></div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <PixelButton href="/ctf">▶ IR A LA BATALLA</PixelButton>
                  <Link href="/ctf/ranking" className="font-pixel text-[11px] text-white/70 hover:text-white self-center">VER RANKING →</Link>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <PixelCard className="h-full flex flex-col">
              <span className="text-[#ff4d00]"><Sprite name="key" size={30} /></span>
              <h3 className="text-2xl font-black tracking-tight mt-3">6 villages abiertos</h3>
              <p className="text-[#4a443b] mt-2 flex-1">Lockpick, hardware hacking, recon, blue team, cripto y social engineering. Mesas, herramientas y gente que enseña con las manos.</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {villages.slice(0, 4).map((v) => <Tag key={v.slug}>{v.name.replace(" Village", "").toUpperCase()}</Tag>)}
              </div>
              <Link href="/villages" className="font-pixel text-[11px] text-[#ff4d00] mt-5 hover:underline">EXPLORAR →</Link>
            </PixelCard>
          </Reveal>
        </div>
      </section>

      {/* EVENTOS + RANKING + WHATSAPP */}
      <section className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <Reveal><SectionHeader kicker="CALENDARIO" title="Próximos eventos" right={<Link href="/eventos" className="font-pixel text-[11px] text-[#ff4d00] hover:underline">VER TODO →</Link>} /></Reveal>
          <div className="space-y-3">
            {events.slice(0, 3).map((e, i) => (
              <Reveal key={e.slug} delay={i * 80}>
                <Link href={`/eventos/${e.slug}`}>
                  <PixelCard className="!p-4 flex items-center gap-4">
                    <div className="bg-[#16130e] text-white rounded-xl px-3 py-2 text-center shrink-0 min-w-[64px]">
                      <p className="font-pixel text-[10px] text-[#ff9d00]">{e.date.slice(5)}</p>
                      <p className="font-pixel text-[8px] text-white/60">2026</p>
                    </div>
                    <div className="min-w-0">
                      <p className="font-extrabold text-[#16130e] truncate">{e.title}</p>
                      <div className="flex gap-2 mt-1 flex-wrap"><Tag>{e.mode}</Tag></div>
                    </div>
                  </PixelCard>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
        <div>
          <Reveal><SectionHeader kicker="TOP PLAYERS" title="Ranking" right={<Link href="/ctf/ranking" className="font-pixel text-[11px] text-[#ff4d00] hover:underline">TODO →</Link>} /></Reveal>
          <Reveal delay={100}>
            <div className="pixel-card divide-y divide-[#e7e0d4] overflow-hidden">
              {members.slice(0, 5).map((m, i) => (
                <div key={m.nick} className="flex items-center gap-3 p-3">
                  <span className="font-pixel text-[11px] text-[#ff4d00] w-7">0{i + 1}</span>
                  <PixelAvatar nick={m.nick} size={36} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold truncate">{m.nick}</p>
                    <div className="mt-1"><XPBar value={Math.min(100, m.xp / 100)} delay={i * 120} /></div>
                  </div>
                  <span className="font-pixel text-[9px] text-[#8a8177]">LV{m.level}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONSOLA */}
      <section className="grid md:grid-cols-5 gap-4 items-stretch">
        <Reveal className="md:col-span-3"><HackConsole /></Reveal>
        <Reveal delay={150} className="md:col-span-2">
          <div className="pixel-border !bg-[#16130e] !border-[#16130e] text-white p-6 md:p-8 h-full flex flex-col justify-center relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#ff4d00]/20 blur-[70px]" aria-hidden />
            <p className="font-pixel text-[11px] text-[#ff9d00] relative">CONSOLA INTERACTIVA</p>
            <h3 className="text-2xl md:text-3xl font-black tracking-tight mt-3 relative">Toca el botón.<br />Mira el ataque.</h3>
            <ul className="mt-4 space-y-2 text-white/70 relative">
              <li>→ Pentest simulado paso a paso, en vivo.</li>
              <li>→ Así se ve lo que rompemos en meetups y CTFs.</li>
              <li>→ En los eventos harás TÚ los comandos.</li>
            </ul>
            <div className="mt-6 relative"><PixelButton href="/unete">QUIERO MI BADGE →</PixelButton></div>
          </div>
        </Reveal>
      </section>

      {/* CFP */}
      <section>
        <Reveal>
          <div className="pixel-border p-8 md:p-10 text-center relative overflow-hidden !bg-[#f1ebff] !border-[#d9ccff]">
            <p className="font-pixel text-[11px] text-[#6c3df4] relative">CALL FOR PAPERS · CIERRE 19 OCT</p>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight mt-3 relative">¿Rompiste algo cool?<br />Enséñalo en el main event.</h2>
            <p className="text-lg text-[#4a443b] mt-3 relative">25 min + demos en vivo. Mentoría para primeras charlas.</p>
            <div className="mt-6 relative"><PixelButton href="/cfp">▶ PROPONER CHARLA</PixelButton></div>
          </div>
        </Reveal>
      </section>

      {/* SPONSORS */}
      <section>
        <Reveal><SectionHeader kicker="FUEL" title="Nos apoyan" right={<Link href="/patrocinadores" className="font-pixel text-[11px] text-[#ff4d00] hover:underline">SER SPONSOR →</Link>} /></Reveal>
        <Reveal delay={100}>
          <div className="flex flex-wrap gap-3">
            {sponsors.map((s) => (
              <div key={s.name} className="pixel-card !rounded-full px-5 py-2.5 flex items-center gap-2 hover:scale-105 transition-transform">
                <span className="font-extrabold text-sm">{s.name}</span>
                <Tag>{s.tier}</Tag>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CTA FINAL */}
      <section>
        <Reveal>
          <div className="bg-[#16130e] text-white rounded-[28px] p-8 md:p-14 text-center relative overflow-hidden">
            <div className="absolute -top-24 left-1/4 w-96 h-96 rounded-full bg-[#ff4d00]/20 blur-[100px]" aria-hidden />
            <div className="absolute -bottom-24 right-1/4 w-96 h-96 rounded-full bg-[#6c3df4]/20 blur-[100px]" aria-hidden />
            <p className="font-pixel text-[11px] text-[#ff9d00] relative">PLAYER 1 · TE ESTAMOS ESPERANDO</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-4 relative">Entra al grupo.<br />Captura tu primera flag.</h2>
            <div className="mt-8 relative flex flex-wrap justify-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-btn"
                style={{ background: "#1fa855", borderColor: "#1fa855" }}
              >
                ✆ UNIRME AL WHATSAPP
              </a>
              <Link href="/manifiesto" className="pixel-btn pixel-btn-ghostlight">Manifiesto</Link>            </div>
            <p className="font-pixel text-[10px] text-white/50 mt-6 relative">SIN FORMULARIOS · QUITO + MUNDO</p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
