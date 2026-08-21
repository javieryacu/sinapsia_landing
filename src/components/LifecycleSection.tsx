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

export default function LifecycleSection() {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#09090b] tracking-tight font-['Hanken_Grotesk',sans-serif]">
            De un problema concreto a una mejora permanente.
          </h2>

          <div className="text-gray-700 text-lg leading-relaxed space-y-4 max-w-2xl mx-auto">
            <p>Nuestro trabajo no termina cuando una solución entra en producción.</p>
            <p>A medida que la empresa cambia, aparecen nuevas oportunidades.</p>
            <p className="font-bold text-[#09090b]">
              Por eso podemos acompañarte de forma continua con:
            </p>
          </div>
        </div>

        {/* Services List Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-16 max-w-2xl mx-auto">
          {CONTINUOUS_SERVICES.map((item) => (
            <div key={item} className="flex items-center gap-3 py-3 border-b border-gray-100">
              <Check weight="bold" className="w-5 h-5 text-[#f4b400]" />
              <span className="text-[#09090b] font-bold text-lg font-['Hanken_Grotesk',sans-serif]">{item}</span>
            </div>
          ))}
        </div>

        {/* Closing Tagline */}
        <div className="text-center p-8 bg-[#f8f9fa] border border-gray-200 rounded-sm">
          <p className="text-2xl font-black text-[#09090b] font-['Hanken_Grotesk',sans-serif]">
            Tu tecnología evoluciona junto con tu empresa.
          </p>
        </div>
      </div>
    </section>
  );
}
