/* Configuración global del sitio: cambia aquí y se actualiza en todas las páginas. */

export const SITE = {
  name: "V-SandBox",
  fullName: "V-SandBox Community",
  url: "https://community.vultaethel.com",
  tagline: "La comunidad hacker de Quito",
  description:
    "Comunidad de ciberseguridad en Quito, Ecuador. Conferencias, CTFs, villages y meetups de hackers para hackers.",
  email: "community@vultaethel.com",
  whatsapp: "https://chat.whatsapp.com/JQUY0vBwG44GGVkwZEonA5",
  city: "Quito, Ecuador",
  hq: {
    street: "La Floresta, Valladolid N24-120",
    city: "Quito, Ecuador",
    postalCode: "170519",
  },
  meetup: "Segundo viernes de cada mes · 18:30 (GMT-5)",
  organizer: { name: "Vultaethel", url: "https://vultaethel.com" },
  founded: 2026,
} as const;

/** Enlace mailto con asunto (y cuerpo opcional) ya codificados. */
export function mailto(subject: string, body?: string) {
  const params = new URLSearchParams({ subject });
  if (body) params.set("body", body);
  // URLSearchParams codifica espacios como "+", que los clientes de correo no decodifican
  return `mailto:${SITE.email}?${params.toString().replace(/\+/g, "%20")}`;
}

export const NAV: { label: string; href: string }[] = [
  { label: "Eventos", href: "/eventos" },
  { label: "CTF", href: "/ctf" },
  { label: "Villages", href: "/villages" },
  { label: "Comunidad", href: "/comunidad" },
  { label: "Sponsors", href: "/patrocinadores" },
];

export type Partner = { name: string; role: string; url?: string };

/* Organizaciones que han estado presentes en ediciones pasadas (visibles en el material de los eventos). */
export const PARTNERS: Partner[] = [
  { name: "Vultaethel", role: "Organizador", url: "https://vultaethel.com" },
  { name: "OffSec", role: "Sponsor · Edición 01", url: "https://www.offsec.com" },
  { name: "IEEE ComSoc", role: "Aliado académico" },
  { name: "IEEE Computer Society UIDE", role: "Rama estudiantil" },
  { name: "GDG Quito", role: "Build with AI" },
  { name: "AWS Community", role: "Community Day" },
  { name: "Cibermind EPN", role: "Aliado EPN" },
  { name: "CIESPAL", role: "Sede · Edición 01" },
];
