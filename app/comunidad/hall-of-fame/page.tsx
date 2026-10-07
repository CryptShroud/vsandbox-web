import { pageMeta } from "@/lib/seo";
import { allSpeakers } from "@/lib/events";
import { Button, PageHeader, Section } from "@/components/ui";
import { SpeakerCard } from "@/components/blocks";
import { Reveal } from "@/components/fx";

export const metadata = pageMeta({
  title: "Hall of Fame",
  description: "Todas las personas que han subido al escenario de V-SandBox: investigadores, red teamers, especialistas AppSec y más.",
  path: "/comunidad/hall-of-fame",
});

export default function HallOfFame() {
  const speakers = allSpeakers();
  return (
    <>
      <PageHeader
        eyebrow="Legends"
        title="Hall of Fame"
        lead={`${speakers.length} personas han compartido su conocimiento en el escenario de V-SandBox. Este muro es para ellas.`}
        crumbs={[{ label: "Comunidad", href: "/comunidad" }, { label: "Hall of Fame", href: "/comunidad/hall-of-fame" }]}
        actions={<Button href="/cfp" icon="arrow-right">Quiero estar en este muro</Button>}
      />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((sp, i) => (
            <Reveal key={sp.name} delay={(i % 3) * 80}>
              <SpeakerCard sp={sp} editions={sp.editions} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
