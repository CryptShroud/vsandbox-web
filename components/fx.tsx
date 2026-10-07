"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";

/* Terminal viva: escribe comandos en bucle */
export function Typewriter({ lines, speed = 45 }: { lines: string[]; speed?: number }) {
  const [text, setText] = useState("");
  const spanRef = useRef<HTMLSpanElement | null>(null);
  // Mantiene el cursor siempre visible: la línea nunca se parte, hace scroll
  useEffect(() => {
    const parent = spanRef.current?.parentElement;
    if (parent) parent.scrollLeft = parent.scrollWidth;
  }, [text]);
  useEffect(() => {
    let li = 0, ci = 0, del = false, timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const line = lines[li];
      if (!del) {
        ci++;
        setText(line.slice(0, ci));
        if (ci >= line.length) { del = true; timer = setTimeout(tick, 1600); return; }
        timer = setTimeout(tick, speed);
      } else {
        ci -= 4;
        if (ci <= 0) { ci = 0; del = false; li = (li + 1) % lines.length; }
        setText(lines[li].slice(0, Math.max(0, ci)));
        timer = setTimeout(tick, 18);
      }
    };
    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, [lines, speed]);
  return (
    <span ref={spanRef} className="whitespace-nowrap">root@vsandbox:~$ {text}<span className="blink text-[#ff6b00]">▊</span></span>
  );
}

/* Cuenta regresiva al main event (montaje diferido: evita mismatch de hidratación) */
export function Countdown({ target }: { target: string }) {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
  const [live, setLive] = useState(false);
  useEffect(() => {
    const calc = () => {
      const diff = Math.max(0, new Date(target).getTime() - Date.now());
      return {
        d: Math.floor(diff / 86400000),
        h: Math.floor(diff / 3600000) % 24,
        m: Math.floor(diff / 60000) % 60,
        s: Math.floor(diff / 1000) % 60,
      };
    };
    const boot = setTimeout(() => {
      setT(calc());
      setLive(true);
    }, 60);
    const id = setInterval(() => {
      setT(calc());
      setLive(true);
    }, 1000);
    return () => { clearTimeout(boot); clearInterval(id); };
  }, [target]);
  const cells: [number, string][] = [[t.d, "DÍAS"], [t.h, "HRS"], [t.m, "MIN"], [t.s, "SEG"]];
  return (
    <div className={`flex gap-2 sm:gap-3 justify-center transition-opacity duration-500 ${live ? "opacity-100" : "opacity-40"}`}>
      {cells.map(([v, l]) => (
        <div key={l} className="bg-white/95 backdrop-blur border border-[#e7e0d4] rounded-2xl px-3 sm:px-4 py-3 flex-1 min-w-0 max-w-[96px] shadow-[0_12px_32px_rgba(22,19,14,0.14)]">
          <p className="text-2xl sm:text-3xl font-black tabular-nums text-[#16130e]">{String(v).padStart(2, "0")}</p>
          <p className="font-pixel text-[9px] text-[#ff4d00] mt-1">{l}</p>
        </div>
      ))}
    </div>
  );
}

/* Nivel de amenaza estilo DEF CON */
export function ThreatLevel({ level = "NARANJA · ELEVADO" }: { level?: string }) {
  return (
    <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur border border-[#e7e0d4] rounded-full px-4 py-2 shadow-[0_8px_24px_rgba(22,19,14,0.12)] whitespace-nowrap max-w-full">
      <span className="relative flex h-2.5 w-2.5 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff4d00] opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff4d00]" />
      </span>
      <span className="font-pixel text-[10px] sm:text-[11px] text-[#16130e]"><span className="hidden sm:inline">THREAT LEVEL: </span>{level}</span>
    </div>
  );
}

/* Badge de hacker estilo DEF CON, con nick en vivo */
export function HackerBadge({ nick, role }: { nick: string; role: string }) {
  const display = (nick || "PLAYER_1").toUpperCase().slice(0, 14);
  return (
    <div className="relative mx-auto w-full max-w-sm rounded-2xl overflow-hidden border border-[rgba(255,176,0,0.5)] bg-gradient-to-br from-[#241505] via-[#140b00] to-[#0d0a00] shadow-[0_0_40px_rgba(255,107,0,0.25)]">
      <div className="h-2 bg-gradient-to-r from-[#ff6b00] via-[#ffb000] to-[#ff6b00]" />
      <div className="p-5">
        <div className="flex items-center justify-between">
          <p className="font-pixel text-[9px] text-[#ffb000]">★ V-SANDBOX ★</p>
          <p className="font-pixel text-[8px] text-[#b08d57]">UIO · 2026</p>
        </div>
        <div className="mt-4 flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-[#ff6b00] flex items-center justify-center text-3xl font-bold text-black">
            {display.replace(/^0X/, "").charAt(0) || "?"}
          </div>
          <div>
            <p className="text-2xl font-bold text-[#ffe8c2] tracking-tight">{display}</p>
            <p className="font-pixel text-[9px] text-[#ff6b00]">{role.toUpperCase()}</p>
          </div>
        </div>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <div className="hp-bar w-36"><div className="hp-fill w-[12%]" /></div>
            <p className="font-pixel text-[8px] text-[#b08d57] mt-1">LVL 1 · 0 XP</p>
          </div>
          <div className="font-mono text-[10px] leading-none text-[#ffb000] tracking-widest">
            ▓▓░▓<br />░▓▓▓<br />▓░▓░
          </div>
        </div>
        <div className="mt-3 flex justify-between font-pixel text-[8px] text-[#b08d57]">
          <span>LA FLORESTA · UIO</span><span className="blink text-[#ff6b00]">● ACTIVO</span>
        </div>
      </div>
    </div>
  );
}

/* ---------- scroll reveal ---------- */
export function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setSeen(true);
      return;
    }
    // Safety: never leave content hidden if the observer misfires
    const fallback = setTimeout(() => setSeen(true), 1500);
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setSeen(true); clearTimeout(fallback); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => { clearTimeout(fallback); obs.disconnect(); };
  }, [threshold]);
  return { ref, seen };
}

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const { ref, seen } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${seen ? "reveal-visible" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ---------- animated counter ---------- */
const FORMATS: Record<string, (n: number) => string> = {
  int: (n) => `${Math.round(n)}`,
  k: (n) => `${(n / 1000).toFixed(1)}K`,
  plus: (n) => `${Math.round(n)}+`,
};

export function CountUp({ to, format = "int", duration = 1400 }: { to: number; format?: keyof typeof FORMATS; duration?: number }) {
  const { ref, seen } = useInView<HTMLSpanElement>();
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!seen) return;
    let raf = 0;
    const t0 = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, Math.max(0, (t - t0) / duration));
      setVal(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [seen, to, duration]);
  return <span ref={ref} className="tabular-nums">{FORMATS[format](val)}</span>;
}

/* ---------- 3D tilt on hover ---------- */
export function Tilt({ children, max = 7, className = "" }: { children: ReactNode; max?: number; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const rx = ((e.clientY - r.top) / r.height - 0.5) * -2 * max;
    const ry = ((e.clientX - r.left) / r.width - 0.5) * 2 * max;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={reset} className={`transition-transform duration-200 ease-out will-change-transform ${className}`}>
      {children}
    </div>
  );
}

/* ---------- animated XP bar ---------- */
export function XPBar({ value, delay = 0 }: { value: number; delay?: number }) {
  const { ref, seen } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className="hp-bar">
      <div className="hp-fill transition-all duration-1000 ease-out" style={{ width: seen ? `${value}%` : "0%", transitionDelay: `${delay}ms` }} />
    </div>
  );
}

/* ---------- pixel rain canvas ---------- */
export function PixelRain({ density = 70 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let w = 0, h = 0, raf = 0;
    const colors = ["#ff6b00", "#ffb000", "#ff2e2e", "#ffe8c2"];
    type P = { x: number; y: number; s: number; v: number; c: string; a: number; tw: number };
    let parts: P[] = [];
    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = canvas.width = Math.max(1, Math.floor(r.width));
      h = canvas.height = Math.max(1, Math.floor(r.height));
      parts = Array.from({ length: density }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        s: 2 + Math.floor(Math.random() * 4),
        v: 0.2 + Math.random() * 0.9,
        c: colors[Math.floor(Math.random() * colors.length)],
        a: 0.15 + Math.random() * 0.5,
        tw: Math.random() * Math.PI * 2,
      }));
    };
    resize();
    window.addEventListener("resize", resize);
    const loop = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.y -= p.v;
        p.tw += 0.05;
        if (p.y < -8) { p.y = h + 8; p.x = Math.random() * w; }
        ctx.globalAlpha = p.a * (0.6 + 0.4 * Math.sin(p.tw));
        ctx.fillStyle = p.c;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.c;
        ctx.beginPath();
        ctx.arc(Math.floor(p.x), Math.floor(p.y), p.s / 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, [density]);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden />;
}

/* ---------- parallax suave al hacer scroll ---------- */
export function Parallax({ children, speed = 0.12, className = "" }: { children: ReactNode; speed?: number; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (ref.current) ref.current.style.transform = `translateY(${window.scrollY * speed}px)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, [speed]);
  return <div ref={ref} className={`will-change-transform ${className}`}>{children}</div>;
}

/* ---------- consola de hackeo simulada ---------- */
const HACK_LINES = [
  "$ vsb-scan --target panecillo.vsandbox.ec --full",
  "[+] resolviendo panecillo.vsandbox.ec ... 10.13.37.7",
  "[+] 3 puertos abiertos: 22/tcp 80/tcp 443/tcp",
  "[+] fingerprint: nginx 1.24 + panel /admin-legacy",
  "[*] fuzzing rutas ... /admin-legacy/backup.zip [200]",
  "[+] descargando backup.zip (1.2 MB) ... listo",
  "[*] crackeando zip con sandbox-mini-es ... 4s",
  "[+] password: f0g_c1ty_2026",
  "[*] escalando: cron root ejecuta clean.sh escribible ...",
  "[+] shell root obtenida. leyendo flag ...",
];

export function HackConsole() {
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);
  const boxRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!running) return;
    if (count >= HACK_LINES.length) {
      const t = setTimeout(() => { setDone(true); setRunning(false); }, 400);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setCount(count + 1), count === 0 ? 300 : 420 + Math.random() * 380);
    return () => clearTimeout(t);
  }, [running, count]);
  useEffect(() => {
    const el = boxRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [count]);
  const start = () => { setCount(0); setDone(false); setRunning(true); };
  return (
    <div className="bg-black/70 border border-[rgba(255,107,0,0.4)] rounded-2xl overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[rgba(255,107,0,0.25)]">
        <span className="w-3 h-3 rounded-full bg-[#ff2e2e]" />
        <span className="w-3 h-3 rounded-full bg-[#ffb000]" />
        <span className="w-3 h-3 rounded-full bg-[#39ff14]" />
        <span className="ml-2 font-pixel text-[9px] text-[#b08d57]">vsb-attack-sim v1.3</span>
        <span className="ml-auto font-pixel text-[9px] text-[#ffb000]">{Math.round((count / HACK_LINES.length) * 100)}%</span>
      </div>
      <div ref={boxRef} className="h-64 overflow-y-auto px-4 py-3 font-mono text-sm md:text-base leading-relaxed">
        {count === 0 && !done && <p className="text-[#b08d57]">Pulsa EJECUTAR para lanzar el ataque simulado contra el lab de entrenamiento…</p>}
        {HACK_LINES.slice(0, count).map((l, i) => (
          <p key={i} className={l.startsWith("[+]") ? "text-[#39ff14]" : l.startsWith("[*]") ? "text-[#ffb000]" : "text-[#ffe8c2]"}>
            {l}
          </p>
        ))}
        {done && (
          <p className="mt-2 inline-block bg-[rgba(255,107,0,0.2)] border border-[#ff6b00] rounded-lg px-3 py-1 text-[#ffb000] font-bold animate-float-y">
            ★ FLAG: VSB{"{sandbox_pwned_en_vivo}"} · +100 XP
          </p>
        )}
        {running && <p className="blink text-[#ff6b00]">▊</p>}
      </div>
      <div className="px-4 py-3 border-t border-[rgba(255,107,0,0.25)] flex gap-3">
        {!running && !done && <button onClick={start} className="pixel-btn flex-1 text-center">▶ EJECUTAR ATAQUE SIMULADO</button>}
        {running && <button disabled className="pixel-btn flex-1 text-center opacity-60 cursor-wait">… ATACANDO …</button>}
        {done && <button onClick={start} className="pixel-btn flex-1 text-center">↻ REINTENTAR</button>}
      </div>
    </div>
  );
}

/* ---------- konami easter egg ---------- */
const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

export function KonamiEgg() {
  const [open, setOpen] = useState(false);
  const posRef = useRef(0);
  const confetti = useMemo(
    () => Array.from({ length: 60 }, (_, i) => ({
      left: (i * 97) % 100,
      delay: ((i * 37) % 20) / 10,
      dur: 2.4 + ((i * 53) % 20) / 10,
      c: ["#ff6b00", "#ffb000", "#ff2e2e", "#39ff14", "#ffe8c2"][i % 5],
      s: 6 + ((i * 29) % 8),
    })),
    []
  );
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      const p = posRef.current;
      const next = k === KONAMI[p] ? p + 1 : k === KONAMI[0] ? 1 : 0;
      posRef.current = next;
      if (next === KONAMI.length) { setOpen(true); posRef.current = 0; }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-6" onClick={() => setOpen(false)}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        {confetti.map((c, i) => (
          <span key={i} className="absolute top-0" style={{ left: `${c.left}%`, width: c.s, height: c.s, background: c.c, animation: `confetti-fall ${c.dur}s linear ${c.delay}s infinite` }} />
        ))}
      </div>
      <div className="relative pixel-border bg-[#140b00] p-8 md:p-12 text-center max-w-md">
        <p className="font-pixel text-[10px] text-[#39ff14]">CÓDIGO KONAMI ACEPTADO</p>
        <p className="text-4xl font-bold text-[#ffb000] mt-3">+1000 XP</p>
        <p className="text-lg text-[#b08d57] mt-2">Eres de los nuestros. Esta flag solo la tienen los curiosos que tocan teclas.</p>
        <p className="font-mono text-[#39ff14] mt-3">VSB{"{konami_kid_sf}"}</p>
        <button className="pixel-btn mt-6" onClick={() => setOpen(false)}>SEGUIR JUGANDO</button>
      </div>
    </div>
  );
}
