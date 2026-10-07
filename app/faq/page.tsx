import { pageMeta, jsonLd } from "@/lib/seo";
import { FAQS } from "@/lib/content";
import { Button, PageHeader, Section } from "@/components/ui";
import { Icon } from "@/components/icon";

export const metadata = pageMeta({
  title: "Preguntas frecuentes",
  description: "Todo lo que necesitas saber antes de unirte a V-SandBox: costos, nivel, qué llevar, charlas, patrocinio y legalidad.",
  path: "/faq",
});

const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export default function Faq() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(FAQ_LD)} />
      <PageHeader
        eyebrow="Help desk"
        title="Preguntas frecuentes"
        lead="Si tu duda no está aquí, pregúntala en el grupo. Alguien te responderá en minutos."
        crumbs={[{ label: "FAQ", href: "/faq" }]}
      />
      <Section>
        <div className="mx-auto max-w-3xl divide-y divide-line overflow-hidden rounded-3xl border border-line bg-white/[0.02]">
          {FAQS.map(([q, a], i) => (
            <details key={q} className="group" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 text-left font-display text-lg font-semibold text-fg transition-colors hover:bg-white/[0.03] md:p-7 md:text-xl [&::-webkit-details-marker]:hidden">
                {q}
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-transform group-open:rotate-180 group-open:border-brand/40 group-open:text-brand-2">
                  <Icon name="chevron-down" size={18} />
                </span>
              </summary>
              <p className="px-6 pb-7 text-muted md:px-7">{a}</p>
            </details>
          ))}
        </div>
        <div className="mt-10 flex justify-center gap-3">
          <Button href="/contacto" variant="secondary" icon="arrow-right">Otra pregunta</Button>
        </div>
      </Section>
    </>
  );
}
