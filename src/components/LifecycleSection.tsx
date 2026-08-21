"use client";

import React from "react";

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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight font-['Hanken_Grotesk',sans-serif] mb-6">
          De un problema concreto a una mejora permanente.
        </h2>

        {/* Intro */}
        <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-2 max-w-2xl mx-auto mb-10">
          <p>Nuestro trabajo no termina cuando una solución entra en producción.</p>
          <p>A medida que la empresa cambia, aparecen nuevas oportunidades.</p>
          <p className="font-semibold text-gray-900">
            Por eso podemos acompañarte de forma continua con:
          </p>
        </div>

        {/* List of 7 services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto mb-12 text-left">
          {CONTINUOUS_SERVICES.map((item) => (
            <div
              key={item}
              className="p-4 bg-[#f9fafb] border border-gray-200 rounded-md flex items-center"
            >
              <div className="w-2 h-2 rounded-full bg-[#f4b400] mr-3 shrink-0" />
              <span className="font-bold text-gray-900 text-base font-['Hanken_Grotesk',sans-serif]">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Closing Tagline */}
        <p className="text-xl sm:text-2xl font-black text-gray-950 font-['Hanken_Grotesk',sans-serif]">
          Tu tecnología evoluciona junto con tu empresa.
        </p>

      </div>
    </section>
  );
}
