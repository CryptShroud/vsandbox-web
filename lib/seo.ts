import type { Metadata } from "next";
import { SITE } from "./site";

/* La imagen generada en app/opengraph-image.tsx; hay que repetirla porque un openGraph hijo reemplaza al del layout */
const OG_IMAGE = { url: "/opengraph-image", width: 1200, height: 630, alt: `${SITE.name}: la comunidad hacker de Quito` };

/** Metadata por página: título, descripción, canonical y Open Graph coherentes. */
export function pageMeta({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "es_EC",
      siteName: SITE.fullName,
      url: path,
      title: `${title} · ${SITE.name}`,
      description,
      images: [OG_IMAGE],
    },
    twitter: { card: "summary_large_image", title: `${title} · ${SITE.name}`, description, images: [OG_IMAGE.url] },
  };
}

/** Serializa JSON-LD escapando "<" para evitar inyección de HTML. */
export function jsonLd(data: unknown) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
