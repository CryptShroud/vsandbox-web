import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { Button, Card, CheckList, IconBadge, PageHeader, Section } from "@/components/ui";
import { Reveal } from "@/components/fx";

export const metadata = pageMeta({
  title: "Equipos del CTF",
  description: "Cómo armar o encontrar equipo para el CTF de V-SandBox: de 1 a 4 personas, todos los niveles.",
  path: "/ctf/equipos",
});

const ROLES = [
  { icon: "code", title: "Web", desc: "Inyecciones, auth rota, SSRF y lógica de negocio." },
  { icon: "terminal", title: "Pwn & Reversing", desc: "Binarios, memoria y escalada de privilegios." },
  { icon: "radar", title: "OSINT & Forense", desc: "Rastros, metadatos, capturas y logs." },
  { icon: "lock", title: "Crypto", desc: "Cifrados débiles, hashes y matemáticas." },
];

export default function Equipos() {
  return (
    <>
      <PageHeader
        eyebrow="Party up"
        title="Arma tu equipo"
        lead="Equipos de 1 a 4 personas. Un buen equipo mezcla perfiles: alguien fuerte en web, alguien que no le teme a un binario y alguien con ojo para los detalles."
        crumbs={[{ label: "CTF", href: "/ctf" }, { label: "Equipos", href: "/ctf/equipos" }]}
        actions={<Button href={SITE.whatsapp} variant="wa" size="lg">Buscar equipo en el grupo</Button>}
      />
      <Section>
        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {ROLES.map((r, i) => (
              <Reveal key={r.title} delay={i * 70}>
                <Card hover className="h-full p-7">
                  <IconBadge name={r.icon} />
                  <h2 className="font-display mt-5 text-xl font-semibold text-fg">{r.title}</h2>
                  <p className="mt-2 text-muted">{r.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <Card className="h-full p-8">
              <h2 className="font-display text-2xl font-semibold text-fg">Cómo inscribirte</h2>
              <CheckList
                className="mt-6"
                items={[
                  "Elige un nombre de equipo (sí, los chistes malos suman puntos de estilo).",
                  "Publica en el grupo de WhatsApp el nombre y quiénes lo forman.",
                  "¿Vas solo? Dilo en el grupo y te conectamos con otros jugadores.",
                  "Lee las reglas antes del día del CTF.",
                ]}
              />
              <div className="mt-8"><Button href="/ctf/reglas" variant="secondary" icon="arrow-right">Reglas del CTF</Button></div>
            </Card>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
