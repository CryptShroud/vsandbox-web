"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";

export type Photo = { src: string; cap: string; cat: string; w: number; h: number };

const CATS = ["TODAS", "ESCENARIO", "PONENTES", "CTF EN VIVO", "NETWORKING"] as const;

export default function Gallery({ photos }: { photos: Photo[] }) {
  const [filter, setFilter] = useState<string>("TODAS");
  const [idx, setIdx] = useState<number | null>(null);

  const list = useMemo(
    () => (filter === "TODAS" ? photos : photos.filter((p) => p.cat === filter)),
    [photos, filter]
  );

  const close = useCallback(() => setIdx(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setIdx((i) => (i === null ? i : (i + dir + list.length) % list.length)),
    [list.length]
  );

  useEffect(() => {
    if (idx === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [idx, close, step]);

  const count = (c: string) => (c === "TODAS" ? photos.length : photos.filter((p) => p.cat === c).length);

  return (
    <>
      {/* Filtros */}
      <div className="flex gap-2 flex-wrap mb-6">
        {CATS.map((c) => (
          <button
            key={c}
            onClick={() => { setFilter(c); setIdx(null); }}
            className={`pixel-tag !cursor-pointer transition ${
              filter === c ? "!bg-[#ff4d00] !text-black !border-[#ff4d00]" : "hover:border-[#ff4d00]"
            }`}
          >
            {c} · {count(c)}
          </button>
        ))}
      </div>

      {/* Masonry con fotos COMPLETAS */}
      <div key={filter} className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {list.map((p) => {
          const globalIdx = photos.indexOf(p);
          return (
            <figure
              key={p.src}
              onClick={() => {
                const gi = list.indexOf(p);
                setIdx(gi);
              }}
              className="pixel-card mb-4 break-inside-avoid !p-0 cursor-pointer group"
            >
              <div className="relative overflow-hidden rounded-t-2xl" style={{ aspectRatio: `${p.w}/${p.h}` }}>
                <Image
                  src={p.src}
                  alt={p.cap}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                <span className="absolute top-3 left-3 font-pixel text-[9px] text-[#ff4d00] bg-black/70 border border-[rgba(255,176,0,0.5)] rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition duration-300">
                  IMG_{String(globalIdx + 1).padStart(2, "0")}
                </span>
                <span className="absolute top-3 right-3 font-pixel text-[9px] text-black bg-[#ffb000] rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition duration-300">
                  ⤢ AMPLIAR
                </span>
                <div className="absolute bottom-0 inset-x-0 p-4 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-300">
                  <p className="font-pixel text-[9px] text-[#ff4d00]">{p.cat}</p>
                  <p className="text-sm font-bold text-white">{p.cap}</p>
                </div>
              </div>
              <figcaption className="px-4 py-3 text-[#4a443b] border-t border-[rgba(255,107,0,0.2)]">
                <span className="text-[#ff4d00] font-bold">&gt;</span> {p.cap}
              </figcaption>
            </figure>
          );
        })}
      </div>

      {/* Lightbox con filmstrip */}
      {idx !== null && list[idx] && (
        <div className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-black/95 p-4" onClick={close}>
          <button
            onClick={close}
            aria-label="Cerrar"
            className="absolute top-4 right-4 text-[#ff4d00] border border-[#ff4d00] rounded-xl w-10 h-10 text-lg transition hover:bg-[#ff4d00] hover:text-black z-10"
          >
            ✕
          </button>
          <button
            aria-label="Anterior"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            className="absolute left-2 sm:left-4 top-[38%] -translate-y-1/2 bg-black/60 border border-[rgba(255,107,0,0.5)] text-white text-xl px-3 py-2 rounded-xl transition hover:bg-[rgba(255,107,0,0.25)] z-10"
          >
            ‹
          </button>
          <button
            aria-label="Siguiente"
            onClick={(e) => { e.stopPropagation(); step(1); }}
            className="absolute right-2 sm:right-4 top-[38%] -translate-y-1/2 bg-black/60 border border-[rgba(255,107,0,0.5)] text-white text-xl px-3 py-2 rounded-xl transition hover:bg-[rgba(255,107,0,0.25)] z-10"
          >
            ›
          </button>
          <figure className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full h-[62vh] rounded-2xl overflow-hidden border border-[rgba(255,107,0,0.4)] glow-fuego">
              <Image
                key={list[idx].src}
                src={list[idx].src}
                alt={list[idx].cap}
                fill
                sizes="100vw"
                className="object-contain bg-black"
              />
            </div>
            <figcaption className="mt-3 text-center">
              <span className="pixel-tag">{list[idx].cat}</span>
              <p className="text-white font-bold mt-2">{list[idx].cap}</p>
              <p className="font-pixel text-[9px] text-[#4a443b] mt-1">{idx + 1}/{list.length}</p>
            </figcaption>
          </figure>
          <div className="mt-4 flex gap-2 max-w-5xl w-full overflow-x-auto no-scrollbar justify-start sm:justify-center" onClick={(e) => e.stopPropagation()}>
            {list.map((p, i) => (
              <button
                key={p.src}
                onClick={() => setIdx(i)}
                aria-label={p.cap}
                className={`relative shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition ${
                  i === idx ? "border-[#ff4d00]" : "border-transparent opacity-50 hover:opacity-90"
                }`}
              >
                <Image src={p.src} alt="" fill sizes="80px" className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
