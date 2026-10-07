import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { Card, PageHeader, Section } from "@/components/ui";

export const metadata = pageMeta({
  title: "Términos",
  description: "Términos de uso del sitio y de las actividades de V-SandBox.",
  path: "/terminos",
});

export default function Terminos() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Términos de uso" crumbs={[{ label: "Términos", href: "/terminos" }]} />
      <Section>
        <Card className="mx-auto max-w-3xl space-y-6 p-8 text-muted md:p-12 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-fg">
          <h2>Contenido educativo</h2>
          <p>Todo lo que compartimos (charlas, retos, writeups y demos) tiene fines educativos. Úsalo solo en entornos propios o con autorización explícita: eres responsable de tus acciones.</p>
          <h2>Participación</h2>
          <p>Participar en el grupo, los meetups, las ediciones o los CTFs implica aceptar el <Link href="/codigo-conducta" className="text-brand-2 underline underline-offset-4">código de conducta</Link>. La organización puede moderar o expulsar a quien lo incumpla.</p>
          <h2>Marcas</h2>
          <p>Los nombres y logos de terceros mencionados pertenecen a sus respectivos dueños y se usan solo para identificar a las organizaciones que han participado en nuestros eventos.</p>
        </Card>
      </Section>
    </>
  );
}
