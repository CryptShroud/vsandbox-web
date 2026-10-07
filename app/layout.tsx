import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import { jsonLd } from "@/lib/seo";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { KonamiEgg, SpotlightTracker } from "@/components/fx";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name}: comunidad de ciberseguridad en Quito`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.fullName,
  keywords: ["ciberseguridad", "hacking", "CTF", "Quito", "Ecuador", "comunidad", "pentesting", "conferencia", "V-SandBox"],
  openGraph: {
    type: "website",
    locale: "es_EC",
    siteName: SITE.fullName,
    title: `${SITE.name}: comunidad de ciberseguridad en Quito`,
    description: SITE.description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${SITE.name}: la comunidad hacker de Quito` }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export const viewport: Viewport = {
  themeColor: "#07070a",
  colorScheme: "dark",
};

const ORG_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.fullName,
  url: SITE.url,
  logo: `${SITE.url}/logo/logotipo.png`,
  email: SITE.email,
  description: SITE.description,
  foundingDate: String(SITE.founded),
  address: { "@type": "PostalAddress", streetAddress: SITE.hq.street, addressLocality: "Quito", postalCode: SITE.hq.postalCode, addressCountry: "EC" },
  parentOrganization: { "@type": "Organization", name: SITE.organizer.name, url: SITE.organizer.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-EC" className={`${inter.variable} ${grotesk.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        {/* Marca que JS está activo antes del primer pintado: las animaciones de entrada solo ocultan contenido si JS corre */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(ORG_LD)} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <SiteHeader />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <KonamiEgg />
        <SpotlightTracker />
      </body>
    </html>
  );
}
