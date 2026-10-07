"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";

/* ---------- scroll reveal ---------- */
function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Red de seguridad: nunca dejar contenido oculto si el observer falla
    const fallback = setTimeout(() => setSeen(true), 2000);
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          clearTimeout(fallback);
          obs.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => {
      clearTimeout(fallback);
      obs.disconnect();
    };
  }, [threshold]);
  return { ref, seen };
}

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const { ref, seen } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${seen ? "is-visible" : ""} ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}

/* ---------- contador animado ---------- */
export function CountUp({ to, suffix = "", duration = 1400 }: { to: number; suffix?: string; duration?: number }) {
  const { ref, seen } = useInView<HTMLSpanElement>();
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!seen) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = requestAnimationFrame(() => setVal(to));
      return () => cancelAnimationFrame(id);
    }
    let raf = 0;
    const t0 = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      setVal(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [seen, to, duration]);
  return (
    <span ref={ref} className="tabular-nums">
      {/* El valor final siempre está en el HTML para lectores de pantalla y buscadores */}
      <span className="sr-only">{to}{suffix}</span>
      <span aria-hidden>{Math.round(val)}{suffix}</span>
    </span>
  );
}

/* ---------- inclinación 3D (solo con puntero fino y sin reduced-motion) ---------- */
export function Tilt({ children, max = 6, className = "" }: { children: ReactNode; max?: number; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const rx = ((e.clientY - r.top) / r.height - 0.5) * -2 * max;
    const ry = ((e.clientX - r.left) / r.width - 0.5) * 2 * max;
    el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };
  return (
    <div ref={ref} onPointerMove={onMove} onPointerLeave={reset} className={`transition-transform duration-300 ease-out will-change-transform ${className}`}>
      {children}
    </div>
  );
}

/* ---------- brillo que sigue al cursor en elementos .spotlight ---------- */
export function SpotlightTracker() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest?.(".spotlight") as HTMLElement | null;
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return null;
}

/* ---------- consola de ataque simulado ---------- */
const HACK_LINES = [
  "$ vsb-scan --target lab.vsandbox.local --full",
  "[+] resolviendo lab.vsandbox.local → 10.13.37.7",
  "[+] puertos abiertos: 22/tcp 80/tcp 3306/tcp",
  "[+] fingerprint: nginx 1.24 · panel /admin-legacy",
  "[*] fuzzing de rutas … /admin-legacy/backup.zip [200]",
  "[+] backup.zip descargado (1.2 MB)",
  "[*] crackeando zip con rockyou-mini … 4s",
  "[+] credenciales: dbadmin / s4ndb0x_2026",
  "[*] MySQL UDF → ejecución de comandos como root …",
  "[+] shell root obtenida. leyendo flag …",
];

export function HackConsole() {
  const [running, setRunning] = useState(false);
  const [count, setCount] = useState(0);
  const done = !running && count >= HACK_LINES.length;
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!running) return;
    const t = setTimeout(
      () => {
        if (count >= HACK_LINES.length) setRunning(false);
        else setCount((c) => c + 1);
      },
      count >= HACK_LINES.length ? 400 : count === 0 ? 250 : 380 + Math.random() * 360
    );
    return () => clearTimeout(t);
  }, [running, count]);

  useEffect(() => {
    const el = boxRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [count]);

  const start = () => {
    setCount(0);
    setRunning(true);
  };
  const pct = Math.round((count / HACK_LINES.length) * 100);

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-[#05050a] shadow-[0_40px_120px_-40px_rgba(255,77,0,0.35)]">
      <div className="flex items-center gap-2 border-b border-line bg-white/[0.03] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-dim">operador@vsandbox: ~/labs</span>
        <span className="ml-auto font-mono text-xs tabular-nums text-amber">{pct}%</span>
      </div>
      <div className="h-[3px] bg-white/5">
        <div className="h-full bg-gradient-to-r from-brand to-amber transition-[width] duration-300" style={{ width: `${pct}%` }} />
      </div>
      <div ref={boxRef} className="h-72 overflow-y-auto px-5 py-4 font-mono text-[13px] leading-relaxed sm:text-sm" aria-live="polite">
        {count === 0 && !running && (
          <p className="text-dim">
            # Ataque simulado contra un laboratorio de entrenamiento.
            <br /># Pulsa «Ejecutar» para ver la cadena completa.
          </p>
        )}
        {HACK_LINES.slice(0, count).map((l, i) => (
          <p key={i} className={l.startsWith("[+]") ? "text-[#4ade80]" : l.startsWith("[*]") ? "text-amber" : "text-fg"}>
            {l}
          </p>
        ))}
        {done && (
          <p className="mt-3 inline-block rounded-lg border border-brand/50 bg-brand/10 px-3 py-1.5 font-semibold text-[#ffb27a]">
            ★ FLAG: VSB{"{sandbox_pwned_en_vivo}"}
          </p>
        )}
        {running && <span className="blink text-brand">▋</span>}
      </div>
      <div className="border-t border-line p-3">
        <button onClick={start} disabled={running} className="btn btn-primary btn-sm w-full disabled:cursor-wait disabled:opacity-60">
          {running ? "Atacando…" : done ? "↻ Repetir ataque" : "▶ Ejecutar ataque simulado"}
        </button>
      </div>
    </div>
  );
}

/* ---------- easter egg: código Konami ---------- */
const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

export function KonamiEgg() {
  const [open, setOpen] = useState(false);
  const posRef = useRef(0);
  const confetti = useMemo(
    () =>
      Array.from({ length: 60 }, (_, i) => ({
        left: (i * 97) % 100,
        delay: ((i * 37) % 20) / 10,
        dur: 2.4 + ((i * 53) % 20) / 10,
        c: ["#ff4d00", "#ffb020", "#8b5cf6", "#22d3ee", "#f4f4f6"][i % 5],
        s: 6 + ((i * 29) % 8),
      })),
    []
  );
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      const p = posRef.current;
      const next = k === KONAMI[p] ? p + 1 : k === KONAMI[0] ? 1 : 0;
      posRef.current = next;
      if (next === KONAMI.length) {
        setOpen(true);
        posRef.current = 0;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  if (!open) return null;
  return (
    <div role="dialog" aria-modal="true" aria-label="Easter egg" className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-6 backdrop-blur-sm" onClick={() => setOpen(false)}>
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {confetti.map((c, i) => (
          <span key={i} className="absolute top-0" style={{ left: `${c.left}%`, width: c.s, height: c.s, background: c.c, animation: `confetti-fall ${c.dur}s linear ${c.delay}s infinite` }} />
        ))}
      </div>
      <div className="card beam relative max-w-md bg-surface p-10 text-center" onClick={(e) => e.stopPropagation()}>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#4ade80]">Código Konami aceptado</p>
        <p className="font-display mt-4 text-5xl font-semibold text-gradient">+1000 XP</p>
        <p className="mt-4 text-muted">Eres de los nuestros: esta flag solo la encuentran los curiosos que tocan teclas.</p>
        <p className="mt-4 font-mono text-[#4ade80]">VSB{"{konami_kid_uio}"}</p>
        <button className="btn btn-primary mt-8" onClick={() => setOpen(false)} autoFocus>
          Seguir hackeando
        </button>
      </div>
    </div>
  );
}
