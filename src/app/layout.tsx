import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "SINAPSIA | Software · IA · Automatización",
  description:
    "Mejoramos, automatizamos y hacemos más inteligentes tus sistemas. Optimizamos procesos, conectamos herramientas e integramos IA.",
  keywords: [
    "Sinapsia",
    "Software",
    "Inteligencia Artificial",
    "Automatización de procesos",
    "Integración de sistemas",
    "Optimización de software",
    "Desarrollo de software",
    "Argentina",
  ],
  authors: [{ name: "Sinapsia" }],
  openGraph: {
    title: "SINAPSIA | Software · IA · Automatización",
    description:
      "Mejoramos, automatizamos y hacemos más inteligentes tus sistemas. Diagnóstico inicial sin costo.",
    url: "https://sinapsia.com.ar",
    siteName: "SINAPSIA",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SINAPSIA | Software · IA · Automatización",
    description:
      "Mejoramos, automatizamos y hacemos más inteligentes tus sistemas.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-amber-100 selection:text-amber-950">
        {children}
      </body>
    </html>
  );
}
