import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sitio 100 % estático: `next build` genera la carpeta `out/` que se sirve desde Cloudflare
  output: "export",
  // El optimizador de imágenes por defecto necesita un servidor; las imágenes ya se entregan optimizadas en public/
  images: { unoptimized: true },
};

export default nextConfig;
