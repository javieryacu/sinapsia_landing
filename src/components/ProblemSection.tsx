"use client";

import React from "react";

const PROBLEMS = [
  "Información duplicada.",
  "Tareas manuales.",
  "Procesos que dependen de una persona.",
  "Sistemas que no se comunican entre sí.",
  "Datos que no están disponibles cuando se necesitan.",
  "Herramientas que quedaron atrás.",
];

export default function ProblemSection() {
  return (
    <section id="problema" className="py-20 sm:py-28 bg-[#f9fafb] border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center space-y-4 mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight font-['Hanken_Grotesk',sans-serif]">
            ¿Tu empresa podría funcionar mejor?
          </h2>

          <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-2 max-w-2xl mx-auto">
            <p>
              Con el tiempo, las empresas incorporan sistemas, aplicaciones, planillas y herramientas que resuelven distintas necesidades.
            </p>
            <p className="font-semibold text-gray-900">
              El problema aparece cuando todo eso empieza a crecer por separado.
            </p>
          </div>
        </div>

        {/* 6 Problem Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
          {PROBLEMS.map((problem) => (
            <div
              key={problem}
              className="p-5 sm:p-6 bg-white border border-gray-200 rounded-md shadow-xs flex items-center"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#f4b400] mr-4 shrink-0" />
              <span className="text-base sm:text-lg font-bold text-gray-900 font-['Hanken_Grotesk',sans-serif]">
                {problem}
              </span>
            </div>
          ))}
        </div>

        {/* Ending Highlight */}
        <div className="text-center space-y-3 pt-6 border-t border-gray-200 max-w-xl mx-auto">
          <p className="text-gray-600 text-base sm:text-lg">
            Muchas veces la tecnología ya existe.
          </p>
          <p className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight font-['Hanken_Grotesk',sans-serif]">
            Lo que falta es <span className="underline decoration-[#f4b400] decoration-4 underline-offset-4">hacer que funcione mejor en conjunto.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
