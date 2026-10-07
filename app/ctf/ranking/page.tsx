import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { Button, PageHeader, Section } from "@/components/ui";
import { Reveal } from "@/components/fx";
import { Icon } from "@/components/icon";

export const metadata = pageMeta({
  title: "Scoreboard",
  description: "Clasificación en vivo de los CTFs de V-SandBox. Se activa cuando arranca cada competencia.",
  path: "/ctf/ranking",
});

const PODIUM = [
  { place: "2", h: "h-28", tone: "from-white/20" },
  { place: "1", h: "h-40", tone: "from-amber/40" },
  { place: "3", h: "h-20", tone: "from-brand/30" },
];

export default function Ranking() {
  return (
    <>
      <PageHeader
        eyebrow="Scoreboard"
        title="Scoreboard"
        lead="La clasificación se activa cuando arranca un CTF y se actualiza en tiempo real durante la competencia."
        crumbs={[{ label: "CTF", href: "/ctf" }, { label: "Scoreboard", href: "/ctf/ranking" }]}
      />
      <Section>
        <Reveal>
          <div className="card noise relative overflow-hidden bg-surface p-8 text-center md:p-14">
            <div className="absolute inset-0 bg-dots opacity-30" aria-hidden />
            <div className="relative mx-auto flex max-w-md items-end justify-center gap-3" aria-hidden>
              {PODIUM.map((p) => (
                <div key={p.place} className="flex-1">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-dashed border-line-strong text-dim">
                    <Icon name="users" size={20} />
                  </div>
                  <div className={`${p.h} flex items-start justify-center rounded-t-xl border border-b-0 border-line bg-gradient-to-b ${p.tone} to-transparent pt-3 font-display text-3xl font-semibold text-fg`}>
                    {p.place}
                  </div>
                </div>
              ))}
            </div>
            <div className="relative mt-10">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-amber">Sin competencia activa</p>
              <h2 className="font-display mt-3 text-3xl font-semibold text-fg md:text-4xl">El podio está vacío. Por ahora.</h2>
              <p className="mx-auto mt-3 max-w-lg text-muted">El próximo CTF aún no tiene fecha. Cuando se anuncie, el scoreboard se activa aquí mismo.</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href={SITE.whatsapp} variant="wa">Enterarme primero</Button>
                <Button href="/ctf/archivo" variant="secondary">Ver CTFs anteriores</Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
