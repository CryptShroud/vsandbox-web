# V-SandBox Community · web

Sitio de la comunidad de ciberseguridad **V-SandBox** (Quito, Ecuador). Next.js 16 (App Router) + React 19 + Tailwind CSS v4, 100 % estático.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de producción
npm run lint
```

## Dónde editar el contenido

| Qué | Archivo |
| --- | --- |
| Email, WhatsApp, dirección, menú y aliados | `lib/site.ts` |
| Ediciones, meetups, eventos con aliados, ponentes, agenda y galerías | `lib/events.ts` |
| Villages, paquetes de sponsor, FAQ, reglas y código de conducta | `lib/content.ts` |

Las páginas de eventos (`/eventos/[slug]`) se generan desde `lib/events.ts`: para añadir una edición agrega un objeto a `EDITIONS`; para un meetup, evento con aliados o laboratorio, a `MEETUPS`, `COLLABS` o `LABS`. Las imágenes van en `public/eventos/<slug>/` (`FOTOSEVENTOS/` guarda las fotos originales sin optimizar).

## Estructura

- `app/`: rutas, metadata, `sitemap.ts`, `robots.ts` y `opengraph-image.tsx` (imagen social generada).
- `components/ui.tsx`: botones, tarjetas, cabeceras de página y secciones.
- `components/blocks.tsx`: bloques reutilizables (aliados, ponentes, ediciones, CTA).
- `components/fx.tsx`: piezas interactivas (reveal, countdown, consola, easter egg).
- `app/globals.css`: tokens de diseño (colores y fuentes) y clases base.
