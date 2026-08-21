import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f8f9fa",
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
    <html lang="es" className={`${hanken.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#f8f9fa] text-[#09090b] font-sans antialiased selection:bg-[#f4b400] selection:text-black">
        {children}
      </body>
    </html>
  );
}
