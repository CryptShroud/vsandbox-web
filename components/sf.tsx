/* Silueta de Quito: Pichincha, Panecillo con la Virgen, Basílica, teleférico y sol retro pixelado */
const SUN_ROWS: [number, string][] = [
  [40, "#ffb000"],
  [64, "#ffb000"],
  [80, "#ffab00"],
  [88, "#ffa000"],
  [96, "#ff9500"],
  [96, "#ff8a00"],
  [88, "#ff7d00"],
  [80, "#ff7300"],
  [64, "#ff6b00"],
  [44, "#ff6300"],
];

export function QuitoSkyline({ className = "" }: { className?: string }) {
  const sunCx = 900;
  const sunTop = 36;
  return (
    <svg viewBox="0 0 1200 220" preserveAspectRatio="xMidYMax slice" className={`w-full h-auto block ${className}`} aria-hidden>
      <defs>
        <linearGradient id="uiofog" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b08d57" stopOpacity="0" />
          <stop offset="100%" stopColor="#b08d57" stopOpacity="0.28" />
        </linearGradient>
      </defs>
      {/* sol retro pixelado con ranuras */}
      <g>
        {SUN_ROWS.map(([w, c], i) => (
          <rect key={i} x={sunCx - w / 2} y={sunTop + i * 9} width={w} height={6} fill={c} opacity={0.95} />
        ))}
      </g>
      {/* cordillera del Pichincha */}
      <polygon
        points="0,220 0,150 120,108 260,160 400,98 560,170 720,118 900,168 1050,128 1200,162 1200,220"
        fill="#0a0605"
      />
      {/* teleférico: cable + cabina */}
      <g stroke="#2a1a08" strokeWidth="2">
        <line x1="30" y1="66" x2="390" y2="148" />
        <line x1="208" y1="107" x2="208" y2="118" />
      </g>
      <rect x="196" y="118" width="24" height="16" rx="3" fill="#140b00" stroke="#ff6b00" strokeWidth="2" />
      <rect x="200" y="122" width="16" height="5" fill="#ffb000" opacity="0.8" />
      {/* Panecillo + Virgen */}
      <ellipse cx="300" cy="228" rx="150" ry="72" fill="#05030a" />
      <g fill="#05030a">
        <rect x="296" y="128" width="8" height="14" />
        <polygon points="300,96 292,128 308,128" />
        <circle cx="300" cy="91" r="5" />
        <polygon points="294,104 272,92 290,116" />
        <polygon points="306,104 328,92 310,116" />
      </g>
      {/* Basílica: dos torres neogóticas */}
      <g>
        <rect x="620" y="104" width="26" height="116" fill="#05030a" />
        <polygon points="620,104 633,72 646,104" fill="#05030a" />
        <rect x="658" y="104" width="26" height="116" fill="#05030a" />
        <polygon points="658,104 671,72 684,104" fill="#05030a" />
        <rect x="631" y="60" width="4" height="14" fill="#05030a" />
        <rect x="669" y="60" width="4" height="14" fill="#05030a" />
        <rect x="627" y="130" width="5" height="18" fill="#ffb000" opacity="0.75" />
        <rect x="665" y="130" width="5" height="18" fill="#ffb000" opacity="0.75" />
        <rect x="627" y="160" width="5" height="18" fill="#ffb000" opacity="0.5" />
        <rect x="665" y="160" width="5" height="18" fill="#ffb000" opacity="0.5" />
      </g>
      {/* centro: bloques + cúpula + ventanas encendidas */}
      <g fill="#05030a">
        <rect x="760" y="150" width="34" height="70" />
        <rect x="800" y="130" width="26" height="90" />
        <rect x="832" y="160" width="48" height="60" />
        <circle cx="1050" cy="168" r="20" />
        <rect x="1047" y="130" width="6" height="22" />
        <rect x="150" y="160" width="40" height="60" />
        <rect x="196" y="140" width="24" height="80" />
      </g>
      <g fill="#ffb000" opacity="0.7">
        <rect x="766" y="160" width="5" height="7" />
        <rect x="778" y="174" width="5" height="7" />
        <rect x="806" y="142" width="5" height="7" />
        <rect x="840" y="170" width="5" height="7" />
        <rect x="856" y="184" width="5" height="7" />
        <rect x="202" y="152" width="5" height="7" />
      </g>
      {/* niebla del valle */}
      <rect x="0" y="150" width="1200" height="70" fill="url(#uiofog)" />
      <ellipse cx="420" cy="192" rx="200" ry="15" fill="#b08d57" opacity="0.13" />
      <ellipse cx="950" cy="205" rx="220" ry="17" fill="#b08d57" opacity="0.11" />
    </svg>
  );
}

/* Separador de niebla entre secciones */
export function FogDivider() {
  return (
    <div className="relative h-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-x-0 top-3 h-px bg-gradient-to-r from-transparent via-[rgba(255,107,0,0.5)] to-transparent" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-pixel text-[9px] text-[#ff6b00] bg-[#0d0a00] px-4">◆ ◆ ◆</div>
    </div>
  );
}
