import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sinapsia.com.ar"),
  title: "SinapsIA | Software, IA y Automatización para Empresas",
  description:
    "Mejoramos, automatizamos y hacemos más inteligentes tus sistemas. Optimización de software existente, automatización de procesos, integración e inteligencia artificial. Diagnóstico inicial sin costo.",
  keywords: [
    "SinapsIA",
    "software para empresas",
    "automatización de procesos",
    "integración de sistemas",
    "modernización de sistemas",
    "optimización de sistemas",
    "inteligencia artificial para empresas",
    "desarrollo de software a medida",
    "consultoría tecnológica",
    "transformación de procesos",
    "Argentina",
    "Latinoamérica",
  ],
  authors: [{ name: "SinapsIA", url: "https://sinapsia.com.ar" }],
  creator: "SinapsIA",
  publisher: "SinapsIA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://sinapsia.com.ar",
  },
  openGraph: {
    title: "SinapsIA | Software, IA y Automatización para Empresas",
    description:
      "Mejoramos, automatizamos y hacemos más inteligentes tus sistemas. Analizamos tu operación y te mostramos oportunidades concretas de mejora.",
    url: "https://sinapsia.com.ar",
    siteName: "SinapsIA",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SinapsIA | Software, IA y Automatización para Empresas",
    description:
      "Mejoramos, automatizamos y hacemos más inteligentes tus sistemas. Diagnóstico inicial sin costo.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://sinapsia.com.ar/#organization",
      "name": "SinapsIA",
      "legalName": "SinapsIA",
      "url": "https://sinapsia.com.ar",
      "logo": "https://sinapsia.com.ar/logo.png",
      "slogan": "Software · IA · Automatización",
      "description": "Empresa de tecnología especializada en optimización de sistemas existentes, automatización de procesos, integración de herramientas, inteligencia artificial y desarrollo de software a medida para empresas.",
      "telephone": "+54-9-3794-552724",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Corrientes",
        "addressRegion": "Corrientes",
        "addressCountry": "AR"
      },
      "areaServed": [
        {
          "@type": "Country",
          "name": "Argentina"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Latinoamérica"
        }
      ],
      "knowsAbout": [
        "Optimización de sistemas",
        "Automatización de procesos",
        "Integración de sistemas",
        "Inteligencia Artificial para empresas",
        "Desarrollo de software a medida"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios Tecnológicos SinapsIA",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Optimización de sistemas",
              "description": "Mejora de aplicaciones existentes, actualización de componentes y extensión de la capacidad de sistemas empresariales."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Automatización de procesos",
              "description": "Eliminación de tareas repetitivas y conversión de procesos manuales en flujos automáticos continuos."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Integración de sistemas",
              "description": "Conexión de herramientas y aplicaciones para evitar duplicación de información y asegurar el flujo ágil de datos."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Inteligencia artificial",
              "description": "Incorporación de IA donde pueda aportar mejoras concretas en productividad, atención, análisis o gestión."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Desarrollo de software",
              "description": "Desarrollo de soluciones de software a medida cuando los sistemas actuales no existen o no alcanzan."
            }
          },
          {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "itemOffered": {
              "@type": "Service",
              "name": "Diagnóstico inicial sin costo",
              "description": "Relevamiento inicial de procesos, sistemas y dificultades para identificar oportunidades concretas de mejora sin compromiso."
            }
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://sinapsia.com.ar/#website",
      "url": "https://sinapsia.com.ar",
      "name": "SinapsIA",
      "description": "Mejoramos, automatizamos y hacemos más inteligentes tus sistemas.",
      "publisher": {
        "@id": "https://sinapsia.com.ar/#organization"
      },
      "inLanguage": "es-AR"
    },
    {
      "@type": "FAQPage",
      "@id": "https://sinapsia.com.ar/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Qué incluye el diagnóstico?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Un relevamiento inicial de tus procesos, sistemas y principales dificultades para identificar oportunidades concretas de mejora."
          }
        },
        {
          "@type": "Question",
          "name": "¿Tiene algún costo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. El diagnóstico inicial es sin costo y no implica ningún compromiso de contratación."
          }
        },
        {
          "@type": "Question",
          "name": "¿Necesito cambiar mis sistemas actuales?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No necesariamente. Primero analizamos lo que ya utilizás y evaluamos si conviene mejorarlo, integrarlo, automatizarlo o reemplazarlo."
          }
        },
        {
          "@type": "Question",
          "name": "¿La solución siempre incluye inteligencia artificial?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. La IA es una herramienta más dentro de las alternativas disponibles. La utilizamos cuando realmente aporta valor."
          }
        },
        {
          "@type": "Question",
          "name": "¿Pueden trabajar sobre sistemas desarrollados por terceros?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. Analizamos el ecosistema tecnológico existente y evaluamos las posibilidades de integración, mejora o evolución."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué pasa después del diagnóstico?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Presentamos las oportunidades detectadas, las priorizamos y, cuando corresponde, elaboramos una propuesta concreta de implementación."
          }
        },
        {
          "@type": "Question",
          "name": "¿Pueden seguir trabajando después de implementar la solución?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. Podemos acompañar la evolución tecnológica de tu empresa con soporte, mantenimiento, mejoras, automatizaciones, integraciones y nuevos desarrollos."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${hanken.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-950 font-sans antialiased selection:bg-amber-100 selection:text-amber-950">
        {children}
      </body>
    </html>
  );
}
