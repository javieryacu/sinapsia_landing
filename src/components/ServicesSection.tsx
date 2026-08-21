"use client";

import React from "react";
import {
  Gauge,
  Zap,
  Network,
  Bot,
  Code2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface ServicesSectionProps {
  onOpenDiagnostic: () => void;
}

const SERVICES = [
  {
    id: "optimizacion",
    title: "Optimización de sistemas",
    desc: "Mejoramos aplicaciones existentes, actualizamos componentes y extendemos la capacidad de sistemas que todavía son útiles para tu operación.",
    icon: Gauge,
    bullets: [
      "Refactorización y modernización de código",
      "Mejora de velocidad y rendimiento",
      "Actualización de bases de datos e infraestructura",
      "Extensión de funcionalidades clave",
    ],
  },
  {
    id: "automatizacion",
    title: "Automatización de procesos",
    desc: "Eliminamos tareas repetitivas y convertimos procesos manuales en flujos automáticos.",
    icon: Zap,
    bullets: [
      "Flujos de facturación y cobranza automática",
      "Sincronización de inventario y pedidos",
      "Alertas y notificaciones automáticas",
      "Procesamiento y validación de documentos",
    ],
  },
  {
    id: "integracion",
    title: "Integración de sistemas",
    desc: "Conectamos las herramientas que utilizás para evitar duplicación de información y permitir que los datos fluyan entre ellas.",
    icon: Network,
    bullets: [
      "Conexión de ERP con CRM, e-commerce y bancos",
      "Integración de APIs y webhooks seguros",
      "Eliminación de la doble carga de datos",
      "Mapeo de datos en tiempo real",
    ],
  },
  {
    id: "ia",
    title: "Inteligencia artificial",
    desc: "Incorporamos IA donde pueda aportar una mejora concreta en productividad, atención, análisis o gestión.",
    icon: Bot,
    bullets: [
      "Asistentes inteligentes para atención y soporte",
      "Extracción automática de datos no estructurados",
      "Análisis predictivo de ventas y demanda",
      "Resúmenes y clasificación inteligente",
    ],
    highlight: true,
  },
  {
    id: "desarrollo",
    title: "Desarrollo de software",
    desc: "Cuando lo que necesitás no existe o los sistemas actuales no alcanzan, desarrollamos una solución a medida.",
    icon: Code2,
    bullets: [
      "Plataformas web y aplicaciones empresariales",
      "Portales de clientes y proveedores",
      "Sistemas de gestión interna específicos",
      "Arquitectura escalable y moderna",
    ],
  },
];

export default function ServicesSection({ onOpenDiagnostic }: ServicesSectionProps) {
  return (
    <section id="servicios" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-800 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#E5A918]" />
            <span>Capacidades y Servicios</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-['Outfit',sans-serif]">
            ¿Qué podemos hacer por tu empresa?
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Soluciones tecnológicas diseñadas para resolver problemas concretos de tu operación.
          </p>
        </div>

        {/* 5 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((srv, idx) => {
            const Icon = srv.icon;
            const isWide = idx === 3 || idx === 4;

            return (
              <div
                key={srv.id}
                className={`group relative bg-white p-7 sm:p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                  srv.highlight
                    ? "border-[#E5A918] shadow-lg ring-2 ring-[#E5A918]/20"
                    : "border-slate-200/90 shadow-xs hover:shadow-xl hover:border-slate-300"
                } ${isWide ? "lg:col-span-1 md:col-span-1" : ""}`}
              >
                {srv.highlight && (
                  <div className="absolute -top-3.5 right-6 px-3 py-1 bg-[#E5A918] text-slate-950 text-[11px] font-black uppercase tracking-wider rounded-full shadow-xs flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Alto Impacto</span>
                  </div>
                )}

                <div>
                  <div className="w-13 h-13 rounded-2xl bg-slate-100 group-hover:bg-amber-100 text-slate-950 flex items-center justify-center mb-6 transition-colors border border-slate-200/60">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 mb-3 font-['Outfit',sans-serif]">
                    {srv.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {srv.desc}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2 mb-6">
                    {srv.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E5A918] shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={onOpenDiagnostic}
                    className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-[#E5A918] group-hover:bg-[#E5A918] text-slate-900 group-hover:text-slate-950 font-bold text-xs transition cursor-pointer"
                  >
                    <span>Consultar por este servicio</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
