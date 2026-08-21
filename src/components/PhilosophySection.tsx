"use client";

import React from "react";
import { Wrench, Plugs, Lightning, Code, ArrowRight } from "@phosphor-icons/react";

interface PhilosophySectionProps {
  onOpenDiagnostic: () => void;
}

const PHILOSOPHY_PILLARS = [
  {
    icon: Wrench,
    code: "NIVEL_01",
    label: "Optimización",
    text: "A veces alcanza con mejorar una herramienta que ya utilizás.",
  },
  {
    icon: Plugs,
    code: "NIVEL_02",
    label: "Integración",
    text: "Otras veces, conectar dos sistemas.",
  },
  {
    icon: Lightning,
    code: "NIVEL_03",
    label: "Automatización",
    text: "En otros casos, automatizar una tarea repetitiva.",
  },
  {
    icon: Code,
    code: "NIVEL_04",
    label: "Desarrollo",
    text: "Y cuando realmente hace falta, desarrollamos una solución nueva.",
  },
];

export default function PhilosophySection({ onOpenDiagnostic }: PhilosophySectionProps) {
  return (
    <section id="criterio" className="py-24 sm:py-32 bg-[#f8f9fa] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 text-[11px] font-mono font-bold uppercase tracking-wider text-gray-700 rounded-sm">
            <span className="w-2 h-2 rounded-full bg-[#f4b400]" />
            <span>CRITERIO Y PRAGMATISMO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#09090b] tracking-tight font-['Hanken_Grotesk',sans-serif]">
            No todo problema necesita un sistema nuevo.
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-gray-700 font-['Hanken_Grotesk',sans-serif]">
            Y no toda empresa necesita inteligencia artificial.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {PHILOSOPHY_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.code}
                className="bg-white p-8 rounded-sm border border-gray-200 hover:border-[#09090b] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-[#f8f9fa] rounded-sm text-[#09090b] border border-gray-100">
                      <Icon weight="duotone" className="w-6 h-6 text-[#09090b]" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-gray-400">
                      {pillar.code}
                    </span>
                  </div>

                  <div className="text-xs font-mono font-bold text-[#f4b400] uppercase tracking-wider mb-2">
                    {pillar.label}
                  </div>

                  <p className="text-[#09090b] font-bold text-base leading-relaxed font-['Hanken_Grotesk',sans-serif]">
                    {pillar.text}
                  </p>
                </div>

                <div className="mt-8 pt-3 border-t border-gray-100 text-[11px] text-gray-500 font-mono">
                  ANÁLISIS SEGÚN NECESIDAD
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Premise Statement */}
        <div className="max-w-4xl mx-auto text-center bg-[#09090b] text-white rounded-sm p-10 sm:p-14 border border-gray-800 shadow-2xl space-y-8 relative overflow-hidden">
          
          <div className="inline-block px-3 py-1 bg-white/10 text-[#f4b400] text-xs font-mono font-bold uppercase tracking-widest rounded-sm">
            PREMISA SINAPSIA
          </div>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-['Hanken_Grotesk',sans-serif] leading-tight max-w-2xl mx-auto">
            La tecnología se adapta al problema.{" "}
            <span className="text-[#f4b400]">No al revés.</span>
          </h3>

          <div className="pt-2 flex justify-center">
            <button
              onClick={onOpenDiagnostic}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#f4b400] hover:bg-[#d9a000] text-black font-extrabold uppercase tracking-wider text-sm rounded-sm transition transform hover:scale-105 cursor-pointer font-['Hanken_Grotesk',sans-serif]"
            >
              <span>Solicitar diagnóstico sin costo</span>
              <ArrowRight weight="bold" className="w-4 h-4 text-black" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
