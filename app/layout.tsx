import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import { Navbar, Footer } from "@/components/layout";
import { KonamiEgg } from "@/components/fx";

const display = Archivo({ weight: ["500", "700", "800", "900"], subsets: ["latin"], variable: "--font-display" });
const plexmono = IBM_Plex_Mono({ weight: ["400", "500", "600", "700"], subsets: ["latin"], variable: "--font-plexmono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://community.vultaethel.com"),
  title: {
    default: "V-SandBox — Comunidad de Ciberseguridad en Quito",
    template: "%s · V-SandBox",
  },
  description: "Comunidad hacker de Quito, Ecuador: CTFs, villages, eventos y comunidad.",
  icons: { icon: "/logo/logotipo.png", apple: "/logo/logotipo.png" },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_EC",
    siteName: "V-SandBox",
    title: "V-SandBox — Comunidad de Ciberseguridad en Quito",
    description: "Aprende, compite y comparte: CTFs, villages estilo DEF CON y meetups en Quito.",
    images: [{ url: "/og-v-sandbox.png", width: 865, height: 289, alt: "V-SandBox community" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "V-SandBox — Comunidad de Ciberseguridad en Quito",
    description: "Aprende, compite y comparte: CTFs, villages estilo DEF CON y meetups en Quito.",
    images: ["/og-v-sandbox.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${plexmono.variable}`}>
      <body className="min-h-screen flex flex-col grid-bg font-sans">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1 w-full mx-auto max-w-6xl px-4 py-8">{children}</main>
          <Footer />
          <KonamiEgg />
        </LanguageProvider>
      </body>
    </html>
  );
}
