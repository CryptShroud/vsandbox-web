import Link from "next/link";
import type { ReactNode } from "react";

export function PixelButton({ href, children, ghost = false }: { href: string; children: ReactNode; ghost?: boolean }) {
  return (
    <Link href={href} className={`pixel-btn ${ghost ? "pixel-btn-ghost" : ""}`}>
      {children}
    </Link>
  );
}

export function SectionHeader({ kicker, title, right }: { kicker: string; title: string; right?: ReactNode }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
      <div className="max-w-2xl">
        <p className="font-pixel text-[11px] text-[#ff4d00] mb-3 flex items-center gap-2">
          <span className="inline-block w-8 h-[2px] bg-[#ff4d00]" />
          {kicker}
        </p>
        <h2 className="text-3xl md:text-[2.75rem] font-black tracking-tight leading-[1.05] text-[#16130e]">{title}</h2>
      </div>
      {right}
    </div>
  );
}

export function PixelCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`pixel-card p-6 ${className}`}>{children}</div>;
}

export function Tag({ children }: { children: ReactNode }) {
  return <span className="pixel-tag">{children}</span>;
}

export function Breadcrumb({ trail }: { trail: [string, string][] }) {
  return (
    <nav className="font-pixel text-[11px] text-[#8a8177] mb-8 flex flex-wrap gap-2 items-center">
      <Link href="/" className="hover:text-[#ff4d00]">HOME</Link>
      {trail.map(([label, href]) => (
        <span key={label} className="flex gap-2 items-center">
          <span className="text-[#e7e0d4]">/</span>
          <Link href={href} className="hover:text-[#ff4d00]">{label}</Link>
        </span>
      ))}
    </nav>
  );
}

const AVATAR_BG: [string, string][] = [
  ["#ffe3d3", "#c2410c"],
  ["#fef0c7", "#92400e"],
  ["#ffe4e6", "#9f1239"],
  ["#dcfce7", "#166534"],
  ["#cffafe", "#0e7490"],
  ["#ede9fe", "#5b21b6"],
];

function avatarTone(nick: string): [string, string] {
  let h = 0;
  for (const c of nick) h = (h * 31 + c.charCodeAt(0)) % 997;
  return AVATAR_BG[h % AVATAR_BG.length];
}

export function PixelAvatar({ nick, size = 48 }: { nick: string; size?: number }) {
  const [bg, fg] = avatarTone(nick);
  const initial = nick.replace(/^0x/, "").charAt(0).toUpperCase();
  return (
    <div
      className="flex items-center justify-center font-extrabold shrink-0 rounded-full"
      style={{
        width: size,
        height: size,
        background: bg,
        color: fg,
        border: `2px solid ${fg}22`,
        fontSize: size * 0.38,
      }}
      aria-hidden
    >
      {initial}
    </div>
  );
}

/* Iconografía lineal minimalista */
const SPRITES: Record<string, ReactNode> = {
  shield: (<><path d="M12 2l8 3v6c0 5-3.4 8.6-8 11-4.6-2.4-8-6-8-11V5l8-3z" /><path d="M9.5 12l2 2 3.5-4" /></>),
  skull: (<><circle cx="12" cy="10" r="6" /><circle cx="10" cy="10" r="0.5" /><circle cx="14" cy="10" r="0.5" /><path d="M10 16v3M14 16v3M9 19h6" /></>),
  flag: (<><path d="M5 21V4" /><path d="M5 4h12l-2.5 4L17 12H5" /></>),
  terminal: (<><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 9l3 3-3 3M12 15h5" /></>),
  potion: (<><path d="M9 3h6M10 3v6l-5.2 9.4A2 2 0 0 0 6.5 21h11a2 2 0 0 0 1.7-2.6L14 9V3" /><path d="M7.5 15h9" /></>),
  key: (<><circle cx="8" cy="8" r="4.5" /><path d="M11.5 11.5L20 20M16 16l2.5 2.5M13.5 13.5L16 16" /></>),
  ghost: (<><path d="M6 20v-8a6 6 0 0 1 12 0v8l-2.5-2-2.5 2-2.5-2L8 20l-2-2z" /><circle cx="10" cy="11" r="0.5" /><circle cx="14" cy="11" r="0.5" /></>),
  book: (<><path d="M4 19V5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zm0 0a2 2 0 0 0 2 2h13" /></>),
  swor: (<><path d="M14.5 4.5l5 5M4 20l2-4 4 4-4 2-2-2zM6 15l8-8" /></>),
};

export function Sprite({ name, size = 20, className = "" }: { name: keyof typeof SPRITES | string; size?: number; className?: string }) {
  const icon = SPRITES[name] ?? SPRITES.terminal;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`inline-block shrink-0 ${className}`}
      aria-hidden
    >
      {icon}
    </svg>
  );
}

export function Ticker({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden bg-[#16130e] text-[#faf9f7] py-3 rounded-2xl">
      <div className="marquee-track font-pixel text-[11px]">
        {row.map((t, i) => (
          <span key={i} className="whitespace-nowrap flex items-center gap-12">
            <span className="text-[#ff4d00]">●</span> {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="pixel-card p-6 text-center">
      <p className="text-4xl font-black tracking-tight text-[#16130e]">{value}</p>
      <p className="font-pixel text-[10px] text-[#8a8177] mt-2">{label}</p>
    </div>
  );
}
