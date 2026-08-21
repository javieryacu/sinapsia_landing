"use client";

import React from "react";
import {
  Gear,
  Lightning,
  TreeStructure,
  Brain,
  CodeBlock,
  ArrowRight,
} from "@phosphor-icons/react";

interface ServicesSectionProps {
  onOpenDiagnostic: () => void;
}

const SERVICES = [
  {
    title: "Optimización de sistemas",
    desc: "Mejoramos aplicaciones existentes, actualizamos componentes y extendemos la capacidad de sistemas que todavía son útiles para tu operación.",
    icon: Gear,
  },
  {
    title: "Automatización de procesos",
    desc: "Eliminamos tareas repetitivas y convertimos procesos manuales en flujos automáticos.",
    icon: Lightning,
  },
  {
    title: "Integración de sistemas",
    desc: "Conectamos las herramientas que utilizás para evitar duplicación de información y permitir que los datos fluyan entre ellas.",
    icon: TreeStructure,
  },
  {
    title: "Inteligencia artificial",
    desc: "Incorporamos IA donde pueda aportar una mejora concreta en productividad, atención, análisis o gestión.",
    icon: Brain,
  },
  {
    title: "Desarrollo de software",
    desc: "Cuando lo que necesitás no existe o los sistemas actuales no alcanzan, desarrollamos una solución a medida.",
    icon: CodeBlock,
  },
];

export default function ServicesSection({ onOpenDiagnostic }: ServicesSectionProps) {
  return (
    <section id="servicios" className="py-20 sm:py-28 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#09090b] tracking-tight font-['Hanken_Grotesk',sans-serif]">
            ¿Qué podemos hacer por tu empresa?
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv) => {
            const Icon = srv.icon;

            return (
              <div
                key={srv.title}
                className="group relative bg-[#f8f9fa] p-8 border border-gray-200 hover:border-[#09090b] rounded-sm transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-6 text-[#09090b]">
                    <Icon weight="light" className="w-10 h-10" />
                  </div>

                  <h3 className="text-xl font-bold text-[#09090b] mb-4 font-['Hanken_Grotesk',sans-serif]">
                    {srv.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200 mt-auto">
                  <button
                    onClick={onOpenDiagnostic}
                    className="w-full inline-flex items-center justify-between text-[#09090b] hover:text-[#f4b400] font-bold text-xs uppercase tracking-widest transition cursor-pointer"
                  >
                    <span>Consultar</span>
                    <ArrowRight weight="bold" className="w-4 h-4" />
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
