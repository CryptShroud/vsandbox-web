import type { MetadataRoute } from "next";
import { events } from "@/lib/data";

const BASE = "https://community.vultaethel.com";

const STATIC = [
  "",
  "/manifiesto",
  "/unete",
  "/faq",
  "/contacto",
  "/codigo-conducta",
  "/privacidad",
  "/terminos",
  "/ctf",
  "/ctf/reglas",
  "/ctf/ranking",
  "/ctf/equipos",
  "/ctf/archivo",
  "/eventos",
  "/eventos/edicion-00",
  "/eventos/edicion-01",
  "/comunidad",
  "/comunidad/rangos",
  "/comunidad/miembros",
  "/comunidad/hall-of-fame",
  "/proyectos",
  "/villages",
  "/cfp",
  "/patrocinadores",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const urls: MetadataRoute.Sitemap = STATIC.map((p) => ({
    url: `${BASE}${p || "/"}`,
    lastModified: now,
  }));
  for (const e of events) urls.push({ url: `${BASE}/eventos/${e.slug}`, lastModified: now });
  return urls;
}
