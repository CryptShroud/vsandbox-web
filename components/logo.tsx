import Image from "next/image";

/* Cubo de la marca */
export function LogoMark({ size = 32, className = "" }: { size?: number; className?: string }) {
  return <Image src="/logo/logotipo.png" alt="" width={size} height={size} className={`shrink-0 ${className}`} aria-hidden />;
}

/* Lockup completo (cubo + V-SandBox community), para fondos oscuros */
export function LogoFull({ height = 34, className = "", priority = false }: { height?: number; className?: string; priority?: boolean }) {
  const width = Math.round(height * (865 / 289));
  return (
    <Image
      src="/logo/logocompleto.png"
      alt="V-SandBox community"
      width={width}
      height={height}
      priority={priority}
      className={`shrink-0 ${className}`}
    />
  );
}
