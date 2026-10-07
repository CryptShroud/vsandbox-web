import Image from "next/image";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { EDITIONS } from "@/lib/events";
import { Chip, PageHeader, Section } from "@/components/ui";
import { Reveal } from "@/components/fx";
import { Icon } from "@/components/icon";

export const metadata = pageMeta({
  title: "Archivo de CTFs",
  description: "Los CTFs presenciales de las ediciones de V-SandBox: misiones, fases y premios.",
  path: "/ctf/archivo",
});

export default function Archivo() {
  const ctfs = EDITIONS.filter((e) => e.ctf);
  return (
    <>
      <PageHeader
        eyebrow="History"
        title="Archivo de CTFs"
        lead="Cada edición de V-SandBox tuvo su propio CTF presencial. Este es el registro de las operaciones."
        crumbs={[{ label: "CTF", href: "/ctf" }, { label: "Archivo", href: "/ctf/archivo" }]}
      />
      <Section>
        <div className="space-y-6">
          {ctfs.map((ed, i) => (
            <Reveal key={ed.slug} delay={i * 80}>
              <Link href={`/eventos/${ed.slug}#ctf`} className="card card-hover spotlight group grid overflow-hidden md:grid-cols-[320px_1fr]">
                <div className="relative min-h-52">
                  <Image src={ed.cover.src} alt={ed.cover.alt} fill sizes="(max-width: 768px) 100vw, 320px" className="object-cover" />
                </div>
                <div className="p-7 md:p-9">
                  <div className="flex flex-wrap gap-2">
                    <Chip tone="brand">Edición {ed.number}</Chip>
                    <Chip>{ed.dateLabel.replace(/^\w+ /, "")}</Chip>
                  </div>
                  <h2 className="font-display mt-4 text-3xl font-semibold text-fg">{ed.ctf!.title}</h2>
                  <p className="mt-2 text-muted">{ed.ctf!.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {ed.ctf!.phases.map((p, j) => (
                      <span key={p} className="inline-flex items-center gap-2 text-sm text-muted">
                        <span className="font-mono text-xs text-brand-2">0{j + 1}</span> {p}
                        {j < ed.ctf!.phases.length - 1 && <Icon name="chevron-right" size={14} className="text-dim" />}
                      </span>
                    ))}
                  </div>
                  {ed.ctf!.prizes && <p className="mt-5 flex items-center gap-2 text-sm text-fg"><Icon name="trophy" size={16} className="text-amber" /> {ed.ctf!.prizes}</p>}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
