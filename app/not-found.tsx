import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pixel-border bg-white p-12 text-center">
      <p className="font-pixel text-4xl text-[#ff2e2e] crt-glow">GAME OVER</p>
      <p className="font-pixel text-[11px] text-[#16130e] mt-4">ERROR 404 — ESTA MAZMORRA NO EXISTE</p>
      <p className="text-xl text-[#4a443b] mt-4">La flag que buscas está en otro castillo.</p>
      <div className="mt-8 flex justify-center gap-4 flex-wrap">
        <Link href="/" className="pixel-btn">↻ RESPAWN EN HOME</Link>
        <Link href="/villages" className="pixel-btn pixel-btn-ghost">IR A VILLAGES</Link>
      </div>
      <p className="font-pixel text-[9px] text-[#4a443b] mt-6 blink">— INSERT COIN —</p>
    </div>
  );
}
