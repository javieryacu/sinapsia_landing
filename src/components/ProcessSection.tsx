"use client";

import React from "react";

const STEPS = [
  {
    num: "01",
    name: "Relevamos",
    desc: "Analizamos tus procesos, sistemas, herramientas y necesidades actuales.",
  },
  {
    num: "02",
    name: "Detectamos",
    desc: "Encontramos oportunidades para optimizar, automatizar, integrar o incorporar inteligencia artificial.",
  },
  {
    num: "03",
    name: "Priorizamos",
    desc: "Definimos qué conviene resolver primero según impacto, inversión y complejidad.",
  },
  {
    num: "04",
    name: "Implementamos",
    desc: "Desarrollamos, integramos y ponemos en funcionamiento la solución.",
  },
  {
    num: "05",
    name: "Evolucionamos",
    desc: "Seguimos acompañando a tu empresa para mejorar, automatizar y resolver nuevas necesidades.",
  },
];

export default function ProcessSection() {
  return (
    <section id="metodologia" className="py-20 sm:py-28 bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title & Subtitle */}
        <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight font-['Hanken_Grotesk',sans-serif]">
            Primero entendemos tu empresa. Después definimos qué hacer.
          </h2>

          <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-2">
            <p>
              No empezamos vendiéndote un software, una automatización o inteligencia artificial.
            </p>
            <p className="font-semibold text-gray-900">
              Primero entendemos cómo funciona tu operación y dónde están los problemas.
            </p>
          </div>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="p-6 bg-[#f9fafb] border border-gray-200 rounded-md flex flex-col justify-between"
            >
              <div>
                <div className="text-2xl font-black text-[#f4b400] mb-3 font-['Hanken_Grotesk',sans-serif]">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-gray-950 mb-3 font-['Hanken_Grotesk',sans-serif]">
                  {step.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
