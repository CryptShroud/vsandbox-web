import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { Card, PageHeader, Section } from "@/components/ui";

export const metadata = pageMeta({
  title: "Privacidad",
  description: "Cómo trata V-SandBox tus datos: sin cuentas, sin cookies de seguimiento y sin vender nada.",
  path: "/privacidad",
});

export default function Privacidad() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacidad" crumbs={[{ label: "Privacidad", href: "/privacidad" }]} />
      <Section>
        <Card className="mx-auto max-w-3xl space-y-6 p-8 text-muted md:p-12 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-fg">
          <h2>Esta web</h2>
          <p>No tiene cuentas de usuario ni usa cookies de seguimiento o publicidad. No recopilamos datos personales al navegarla.</p>
          <h2>Cuando nos escribes</h2>
          <p>Si nos envías un correo (por ejemplo, una propuesta al Call for Papers), usamos tus datos solo para responderte y organizar el evento. Nunca los vendemos ni los compartimos con terceros con fines comerciales.</p>
          <h2>Fotos de los eventos</h2>
          <p>En nuestros eventos tomamos fotos que publicamos en esta web y en redes. Si apareces en una y prefieres que la retiremos, escríbenos y lo hacemos.</p>
          <h2>Tus derechos</h2>
          <p>Puedes pedir acceso, corrección o borrado de tus datos escribiendo a <a href={`mailto:${SITE.email}`} className="text-brand-2 underline underline-offset-4">{SITE.email}</a>.</p>
        </Card>
      </Section>
    </>
  );
}
