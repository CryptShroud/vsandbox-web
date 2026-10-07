"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import type { Photo } from "@/lib/events";
import { Icon } from "./icon";

const ALL = "Todas";

export function Gallery({ photos }: { photos: Photo[] }) {
  const cats = useMemo(() => [ALL, ...new Set(photos.map((p) => p.cat))], [photos]);
  const [filter, setFilter] = useState(ALL);
  const [idx, setIdx] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const touchX = useRef<number | null>(null);

  const list = useMemo(() => (filter === ALL ? photos : photos.filter((p) => p.cat === filter)), [photos, filter]);

  const close = useCallback(() => {
    setIdx(null);
    triggerRef.current?.focus();
  }, []);
  const step = useCallback((dir: 1 | -1) => setIdx((i) => (i === null ? i : (i + dir + list.length) % list.length)), [list.length]);

  const isOpen = idx !== null;
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close, step]);

  const current = idx !== null ? list[idx] : null;

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filtrar fotos">
        {cats.map((c) => {
          const n = c === ALL ? photos.length : photos.filter((p) => p.cat === c).length;
          const active = filter === c;
          return (
            <button
              key={c}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(c)}
              className={`chip cursor-pointer transition-colors ${active ? "chip-brand" : "hover:border-line-strong hover:text-fg"}`}
            >
              {c} <span className="opacity-60">{n}</span>
            </button>
          );
        })}
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {list.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={(e) => {
              triggerRef.current = e.currentTarget;
              setIdx(i);
            }}
            className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-line bg-surface text-left"
            aria-label={`Ampliar: ${p.cap}`}
          >
            <span className="relative block" style={{ aspectRatio: `${p.w}/${p.h}` }}>
              <Image
                src={p.src}
                alt={p.cap}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                className="object-cover transition duration-700 group-hover:scale-[1.04]"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                <Icon name="expand" size={16} />
              </span>
              <span className="absolute inset-x-0 bottom-0 p-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand-2">{p.cat}</span>
                <span className="mt-1 block text-sm font-medium text-white">{p.cap}</span>
              </span>
            </span>
          </button>
        ))}
      </div>

      {current && idx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Foto ${idx + 1} de ${list.length}: ${current.cap}`}
          className="fixed inset-0 z-[80] flex flex-col bg-black/95 backdrop-blur-sm"
          onClick={close}
        >
          <div className="flex items-center justify-between p-4" onClick={(e) => e.stopPropagation()}>
            <p className="font-mono text-xs tabular-nums text-dim">
              {String(idx + 1).padStart(2, "0")} / {String(list.length).padStart(2, "0")}
            </p>
            <button ref={closeRef} type="button" onClick={close} aria-label="Cerrar" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-white hover:bg-white/10">
              <Icon name="x" size={20} />
            </button>
          </div>

          <div
            className="relative flex-1"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
              touchX.current = null;
            }}
          >
            <Image key={current.src} src={current.src} alt={current.cap} fill sizes="100vw" className="object-contain px-2 sm:px-20" />
            <button type="button" aria-label="Anterior" onClick={() => step(-1)} className="absolute left-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-line-strong bg-black/50 text-white hover:bg-white/10 sm:inline-flex">
              <Icon name="chevron-left" size={22} />
            </button>
            <button type="button" aria-label="Siguiente" onClick={() => step(1)} className="absolute right-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-line-strong bg-black/50 text-white hover:bg-white/10 sm:inline-flex">
              <Icon name="chevron-right" size={22} />
            </button>
          </div>

          <div className="p-4 text-center" onClick={(e) => e.stopPropagation()}>
            <p className="font-medium text-white">{current.cap}</p>
            <div className="no-scrollbar mx-auto mt-4 flex max-w-4xl gap-2 overflow-x-auto pb-1 sm:justify-center">
              {list.map((p, i) => (
                <button
                  key={p.src}
                  type="button"
                  onClick={() => setIdx(i)}
                  aria-label={`Ver foto ${i + 1}`}
                  aria-current={i === idx}
                  className={`relative h-12 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition ${i === idx ? "border-brand" : "border-transparent opacity-40 hover:opacity-80"}`}
                >
                  <Image src={p.src} alt="" fill sizes="64px" className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
