import Image from "next/image";

/* Marca oficial: cubo naranja */
export function LogoMark({ size = 30, className = "" }: { size?: number; className?: string }) {
  return (
    <Image
      src="/logo/logotipo.png"
      alt="V-SandBox"
      width={size}
      height={size}
      className={`shrink-0 drop-shadow-[0_0_10px_rgba(255,107,0,0.55)] ${className}`}
      priority={false}
    />
  );
}

/* Marca versión tinta: cubo con wireframe negro, para fondos claros */
export function LogoMarkInk({ size = 28, className = "" }: { size?: number; className?: string }) {
  const height = Math.round(size * (324 / 285));
  return (
    <Image
      src="/logo/logomarca-ink.png"
      alt="V-SandBox"
      width={size}
      height={height}
      className={`shrink-0 ${className}`}
      priority={false}
    />
  );
}

/* Lockup oficial: cubo + V-SandBox community (ancho:alto ≈ 3:1) */
export function LogoFull({ height = 34, className = "" }: { height?: number; className?: string }) {
  const width = Math.round(height * (865 / 289));
  return (
    <Image
      src="/logo/logocompleto.png"
      alt="V-SandBox community"
      width={width}
      height={height}
      className={`shrink-0 ${className}`}
      priority={false}
    />
  );
}

/* Lockup versión tinta: para fondos claros (header) */
export function LogoInk({ height = 34, className = "" }: { height?: number; className?: string }) {
  const width = Math.round(height * (865 / 289));
  return (
    <Image
      src="/logo/logofondoblanco.png"
      alt="V-SandBox community"
      width={width}
      height={height}
      className={`shrink-0 ${className}`}
      priority={false}
    />
  );
}
