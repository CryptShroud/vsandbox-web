import { Breadcrumb, SectionHeader, PixelCard } from "@/components/pixel";

const FAQS = [
  ["¿Necesito saber programar?", "No. Empezamos desde cero en los meetups: Linux, redes y Python básico. Si sabes instalar un juego, puedes empezar."],
  ["¿Es gratis?", "Sí. Meetups, villages, CTFs y el grupo de WhatsApp son gratis. Algunos talleres avanzados pueden tener costo simbólico para premios."],
  ["¿Qué necesito en mi PC?", "Cualquier PC con 8GB RAM, VirtualBox o Docker, y ganas. Todo el software que usamos es open-source."],
  ["¿Cómo subo de rango?", "Ganando XP: rompiendo labs en meetups, ayudando en WhatsApp (+10), ganando CTFs (+200)."],
  ["¿Puedo proponer un taller o charla?", "Claro. Escríbenos en /contacto con tu tema y nivel. Los miembros activos tienen prioridad de agenda."],
  ["¿Ayudan a conseguir empleo?", "Sí: ofertas que comparten los miembros, revisiones de CV y simulacros de entrevista en el grupo."],
  ["¿Las actividades son legales?", "100%. Solo atacamos labs propios y objetivos con autorización. Enseñar hacking malicioso = expulsión."],
];

export default function Faq() {
  return (
    <div>
      <Breadcrumb trail={[["FAQ", "/faq"]]} />
      <SectionHeader kicker="HELP DESK" title="PREGUNTAS FRECUENTES" />
      <div className="space-y-3">
        {FAQS.map(([q, a]) => (
          <PixelCard key={q}>
            <p className="font-pixel text-[10px] text-[#ff4d00]">? {q.toUpperCase()}</p>
            <p className="text-xl text-[#16130e] mt-2">→ {a}</p>
          </PixelCard>
        ))}
      </div>
    </div>
  );
}
