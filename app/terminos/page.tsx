import { Breadcrumb, SectionHeader, PixelCard } from "@/components/pixel";

export default function Terminos() {
  return (
    <div>
      <Breadcrumb trail={[["TÉRMINOS", "/terminos"]]} />
      <SectionHeader kicker="LEGAL" title="TÉRMINOS" />
      <PixelCard>
        <div className="space-y-3 text-xl text-[#16130e]">
          <p>→ Contenido educativo. Úsalo solo en entornos autorizados; tú eres responsable de tus comandos.</p>
          <p>→ Cuentas: un nick por persona; no compartas accesos a labs de pago.</p>
          <p>→ Podemos moderar o expulsar ante violaciones del código de conducta.</p>
          <p>→ Este es un boceto visual: textos legales finales requieren revisión profesional.</p>
        </div>
      </PixelCard>
    </div>
  );
}
