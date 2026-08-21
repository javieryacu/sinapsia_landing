"use client";

import React from "react";
import { Check } from "@phosphor-icons/react";

const CONTINUOUS_SERVICES = [
  "Soporte y mantenimiento",
  "Nuevas automatizaciones",
  "Integraciones",
  "Mejoras de sistemas",
  "Nuevas funcionalidades",
  "Incorporación de IA",
  "Nuevos desarrollos",
];

interface LifecycleSectionProps {
  onOpenDiagnostic?: () => void;
}

export default function LifecycleSection({ onOpenDiagnostic }: LifecycleSectionProps) {
  return (
    <section className="py-24 sm:py-32 bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-5 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f8f9fa] border border-gray-200 text-[11px] font-mono font-bold uppercase tracking-wider text-gray-700 rounded-sm">
            <span className="w-2 h-2 rounded-full bg-[#f4b400]" />
            <span>ACOMPAÑAMIENTO CONTINUO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#09090b] tracking-tight font-['Hanken_Grotesk',sans-serif]">
            De un problema concreto a una mejora permanente.
          </h2>

          <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-2 max-w-2xl mx-auto">
            <p>Nuestro trabajo no termina cuando una solución entra en producción.</p>
            <p>A medida que la empresa cambia, aparecen nuevas oportunidades.</p>
            <p className="font-bold text-[#09090b]">
              Por eso podemos acompañarte de forma continua con:
            </p>
          </div>
        </div>

        {/* Services List Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16 max-w-2xl mx-auto">
          {CONTINUOUS_SERVICES.map((item, idx) => (
            <div
              key={item}
              className="flex items-center gap-3.5 p-4 bg-[#f8f9fa] border border-gray-200 rounded-sm hover:border-[#09090b] transition-colors"
            >
              <div className="w-6 h-6 rounded-sm bg-white border border-gray-200 flex items-center justify-center shrink-0">
                <Check weight="bold" className="w-3.5 h-3.5 text-[#f4b400]" />
              </div>
              <span className="text-[#09090b] font-bold text-base font-['Hanken_Grotesk',sans-serif]">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Closing Tagline */}
        <div className="text-center p-8 sm:p-10 bg-[#09090b] text-white border border-gray-800 rounded-sm shadow-lg">
          <p className="text-2xl sm:text-3xl font-black font-['Hanken_Grotesk',sans-serif] tracking-tight text-white">
            “Tu tecnología evoluciona junto con tu empresa.”
          </p>
        </div>

      </div>
    </section>
  );
}
