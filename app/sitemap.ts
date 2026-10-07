import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { EVENTS } from "@/lib/events";

const STATIC: [string, number][] = [
  ["", 1],
  ["/eventos", 0.9],
  ["/cfp", 0.9],
  ["/ctf", 0.8],
  ["/villages", 0.8],
  ["/patrocinadores", 0.8],
  ["/unete", 0.8],
  ["/comunidad", 0.7],
  ["/comunidad/rangos", 0.5],
  ["/comunidad/miembros", 0.6],
  ["/comunidad/hall-of-fame", 0.6],
  ["/ctf/reglas", 0.5],
  ["/ctf/ranking", 0.5],
  ["/ctf/equipos", 0.5],
  ["/ctf/archivo", 0.5],
  ["/manifiesto", 0.6],
  ["/proyectos", 0.5],
  ["/faq", 0.6],
  ["/contacto", 0.6],
  ["/codigo-conducta", 0.4],
  ["/privacidad", 0.2],
  ["/terminos", 0.2],
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...STATIC.map(([path, priority]) => ({ url: `${SITE.url}${path || "/"}`, priority })),
    ...EVENTS.map((e) => ({ url: `${SITE.url}/eventos/${e.slug}`, priority: e.kind === "main" ? 0.9 : 0.7 })),
  ];
}
