import { pageMeta } from "@/lib/seo";
import { PATH } from "@/lib/content";
import { Button, PageHeader, Section } from "@/components/ui";
import { Reveal } from "@/components/fx";

export const metadata = pageMeta({
  title: "Ruta del hacker",
  description: "Cómo crecer dentro de V-SandBox: de asistente a jugador CTF, voluntario, ponente, líder de village y core team.",
  path: "/comunidad/rangos",
});

export default function Rangos() {
  return (
    <>
      <PageHeader
        eyebrow="Level up"
        title="Ruta del hacker"
        lead="Nadie empieza como experto. Así es como la gente crece dentro de V-SandBox, paso a paso y a su propio ritmo."
        crumbs={[{ label: "Comunidad", href: "/comunidad" }, { label: "Ruta del hacker", href: "/comunidad/rangos" }]}
      />
      <Section>
        <ol className="relative mx-auto max-w-3xl space-y-4 before:absolute before:bottom-6 before:left-[31px] before:top-6 before:w-px before:bg-gradient-to-b before:from-brand before:via-amber before:to-violet">
          {PATH.map((p, i) => (
            <Reveal key={p.step} delay={i * 60}>
              <li className="card spotlight relative flex gap-6 p-6">
                <span className="relative z-10 flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-xl border border-brand/40 bg-bg font-mono text-sm text-brand-2">{p.step}</span>
                <div>
                  <h2 className="font-display text-2xl font-semibold text-fg">{p.title}</h2>
                  <p className="mt-1 text-muted">{p.desc}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Button href="/unete" icon="arrow-right">Dar el primer paso</Button>
          <Button href="/contacto" variant="secondary">Quiero ser voluntario</Button>
        </div>
      </Section>
    </>
  );
}
