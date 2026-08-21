"use client";

import React from "react";
import {
  Gear,
  Lightning,
  TreeStructure,
  Brain,
  CodeBlock,
  ArrowRight,
  CheckCircle,
} from "@phosphor-icons/react";

interface ServicesSectionProps {
  onOpenDiagnostic: () => void;
}

const SERVICES = [
  {
    code: "SRV_01",
    title: "Optimización de sistemas",
    desc: "Mejoramos aplicaciones existentes, actualizamos componentes y extendemos la capacidad de sistemas que todavía son útiles para tu operación.",
    icon: Gear,
    tag: "Rendimiento & Código",
  },
  {
    code: "SRV_02",
    title: "Automatización de procesos",
    desc: "Eliminamos tareas repetitivas y convertimos procesos manuales en flujos automáticos.",
    icon: Lightning,
    tag: "Flujos 24/7",
  },
  {
    code: "SRV_03",
    title: "Integración de sistemas",
    desc: "Conectamos las herramientas que utilizás para evitar duplicación de información y permitir que los datos fluyan entre ellas.",
    icon: TreeStructure,
    tag: "Sincronización Total",
  },
  {
    code: "SRV_04",
    title: "Inteligencia artificial",
    desc: "Incorporamos IA donde pueda aportar una mejora concreta en productividad, atención, análisis o gestión.",
    icon: Brain,
    tag: "Capacidad Inteligente",
    featured: true,
  },
  {
    code: "SRV_05",
    title: "Desarrollo de software",
    desc: "Cuando lo que necesitás no existe o los sistemas actuales no alcanzan, desarrollamos una solución a medida.",
    icon: CodeBlock,
    tag: "Soluciones a Medida",
  },
];

export default function ServicesSection({ onOpenDiagnostic }: ServicesSectionProps) {
  return (
    <section id="servicios" className="py-24 sm:py-32 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f8f9fa] border border-gray-200 text-[11px] font-mono font-bold uppercase tracking-wider text-gray-700 rounded-sm">
            <span className="w-2 h-2 rounded-full bg-[#f4b400]" />
            <span>SOLUCIONES Y CAPACIDADES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#09090b] tracking-tight font-['Hanken_Grotesk',sans-serif]">
            ¿Qué podemos hacer por tu empresa?
          </h2>
        </div>

        {/* 5 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv) => {
            const Icon = srv.icon;

            return (
              <div
                key={srv.code}
                className={`group relative bg-[#f8f9fa] p-8 sm:p-9 border rounded-sm transition-all duration-300 flex flex-col justify-between ${
                  srv.featured
                    ? "border-[#f4b400] shadow-md ring-1 ring-[#f4b400]/40 bg-amber-50/20"
                    : "border-gray-200 hover:border-[#09090b] hover:shadow-xl hover:bg-white"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-3.5 bg-white rounded-sm text-[#09090b] border border-gray-200 shadow-xs group-hover:bg-[#09090b] group-hover:text-white transition-colors">
                      <Icon weight="duotone" className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-gray-400">
                      // {srv.code}
                    </span>
                  </div>

                  <div className="text-[11px] font-mono font-bold text-[#f4b400] uppercase tracking-wider mb-2">
                    {srv.tag}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-[#09090b] mb-4 font-['Hanken_Grotesk',sans-serif]">
                    {srv.title}
                  </h3>

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-200/80 mt-auto">
                  <button
                    onClick={onOpenDiagnostic}
                    className="w-full inline-flex items-center justify-between text-[#09090b] hover:text-[#f4b400] font-bold text-xs uppercase tracking-widest transition cursor-pointer font-['Hanken_Grotesk',sans-serif]"
                  >
                    <span>Solicitar evaluación</span>
                    <ArrowRight weight="bold" className="w-4 h-4 text-[#f4b400]" />
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
