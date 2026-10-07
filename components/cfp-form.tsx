"use client";

import { useEffect, useState } from "react";
import { SITE, mailto } from "@/lib/site";
import { Icon } from "./icon";
import { TRACKS } from "@/lib/content";

const LEVELS = ["Introductorio", "Intermedio", "Avanzado"];

const field =
  "w-full rounded-xl border border-line bg-black/30 px-4 py-3 text-fg placeholder:text-dim outline-none transition-colors focus:border-brand focus:bg-black/50";

export function CfpForm({ deadline, deadlineLabel }: { deadline: string; deadlineLabel: string }) {
  const [closed, setClosed] = useState(false);
  const [sentBody, setSentBody] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setClosed(Date.now() > new Date(deadline).getTime()), 0);
    return () => clearTimeout(id);
  }, [deadline]);

  if (closed) {
    return (
      <div className="rounded-2xl border border-line bg-white/[0.03] p-8 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-amber">CFP cerrado</p>
        <p className="mt-3 text-muted">El Call for Papers cerró el {deadlineLabel}. Escríbenos a {SITE.email} si quieres hablar en un próximo meetup.</p>
      </div>
    );
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const get = (k: string) => String(d.get(k) ?? "").trim();
    const body = [
      `Nombre / nick: ${get("name")}`,
      `Email: ${get("email")}`,
      `Track: ${get("track")}`,
      `Nivel: ${get("level")}`,
      `¿Primera charla?: ${d.get("first") ? "Sí, me interesa la mentoría" : "No"}`,
      "",
      `Título: ${get("title")}`,
      "",
      "Abstract:",
      get("abstract"),
      "",
      `Sobre mí: ${get("bio") || "-"}`,
    ].join("\n");
    setSentBody(body);
    window.location.href = mailto(`[CFP Sandbox-Con] ${get("title")}`, body);
  };

  if (sentBody) {
    return (
      <div className="rounded-2xl border border-ok/30 bg-ok/[0.06] p-6 md:p-8">
        <p className="flex items-center gap-2 font-semibold text-fg"><Icon name="mail" size={20} className="text-ok" /> Abrimos tu cliente de correo con la propuesta</p>
        <p className="mt-2 text-muted">
          Solo falta que pulses <strong className="text-fg">Enviar</strong> en tu correo. Si no se abrió, copia la propuesta y envíala a{" "}
          <a href={`mailto:${SITE.email}`} className="text-brand-2 underline underline-offset-4">{SITE.email}</a>.
        </p>
        <pre className="mt-5 max-h-60 overflow-auto whitespace-pre-wrap rounded-xl border border-line bg-black/40 p-4 font-mono text-xs text-muted">{sentBody}</pre>
        <div className="mt-5 flex flex-wrap gap-3">
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(sentBody);
                setCopied(true);
              } catch {
                setCopied(false);
              }
            }}
          >
            {copied ? "✓ Copiado" : "Copiar propuesta"}
          </button>
          <button type="button" className="btn btn-ghost btn-sm" onClick={() => setSentBody(null)}>Editar</button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 md:grid-cols-2">
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-fg">Nombre o nick *</span>
        <input name="name" required autoComplete="name" className={field} placeholder="0xNaranja" />
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-fg">Email *</span>
        <input name="email" type="email" required autoComplete="email" className={field} placeholder="tu@email.com" />
      </label>
      <label className="block md:col-span-2">
        <span className="mb-2 block text-sm font-medium text-fg">Título de la charla *</span>
        <input name="title" required maxLength={120} className={field} placeholder="De SNMP a Domain Admin en 20 minutos" />
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-fg">Track *</span>
        <select name="track" required className={field} defaultValue="">
          <option value="" disabled>Elige un track</option>
          {TRACKS.map((t) => <option key={t}>{t}</option>)}
        </select>
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-fg">Nivel *</span>
        <select name="level" required className={field} defaultValue="">
          <option value="" disabled>Elige un nivel</option>
          {LEVELS.map((t) => <option key={t}>{t}</option>)}
        </select>
      </label>
      <label className="block md:col-span-2">
        <span className="mb-2 block text-sm font-medium text-fg">Abstract *</span>
        <textarea name="abstract" required rows={5} minLength={80} className={field} placeholder="Qué vas a mostrar, qué demo harás en vivo y qué se llevará el público (mínimo 80 caracteres)." />
      </label>
      <label className="block md:col-span-2">
        <span className="mb-2 block text-sm font-medium text-fg">Sobre ti</span>
        <textarea name="bio" rows={2} className={field} placeholder="Una o dos líneas: a qué te dedicas y dónde te encontramos (LinkedIn, GitHub…)." />
      </label>
      <label className="flex items-center gap-3 md:col-span-2">
        <input name="first" type="checkbox" className="h-5 w-5 accent-[#ff4d00]" />
        <span className="text-muted">Es mi primera charla y me interesa la mentoría.</span>
      </label>
      <div className="flex flex-col gap-3 md:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-dim">Se abrirá tu cliente de correo con la propuesta lista para enviar a {SITE.email}.</p>
        <button type="submit" className="btn btn-primary btn-lg">Preparar propuesta <Icon name="arrow-right" size={16} /></button>
      </div>
    </form>
  );
}
