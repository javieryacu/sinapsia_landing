"use client";

import React from "react";
import { Wrench, Plugs, Lightning, Code, ArrowRight } from "@phosphor-icons/react";

interface PhilosophySectionProps {
  onOpenDiagnostic: () => void;
}

const PHILOSOPHY_PILLARS = [
  {
    icon: Wrench,
    text: "A veces alcanza con mejorar una herramienta que ya utilizás.",
  },
  {
    icon: Plugs,
    text: "Otras veces, conectar dos sistemas.",
  },
  {
    icon: Lightning,
    text: "En otros casos, automatizar una tarea repetitiva.",
  },
  {
    icon: Code,
    text: "Y cuando realmente hace falta, desarrollamos una solución nueva.",
  },
];

export default function PhilosophySection({ onOpenDiagnostic }: PhilosophySectionProps) {
  return (
    <section id="criterio" className="py-20 sm:py-28 bg-[#f8f9fa] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#09090b] tracking-tight font-['Hanken_Grotesk',sans-serif]">
            No todo problema necesita un sistema nuevo.
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-gray-700 font-['Hanken_Grotesk',sans-serif]">
            Y no toda empresa necesita inteligencia artificial.
          </p>
        </div>

        {/* 4 Pillars List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200 rounded-sm overflow-hidden mb-16">
          {PHILOSOPHY_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="bg-white p-8 flex flex-col items-start gap-4">
                <div className="p-3 bg-[#f8f9fa] rounded-sm text-[#09090b] border border-gray-100">
                  <Icon weight="regular" className="w-6 h-6" />
                </div>
                <p className="text-gray-800 font-medium text-base leading-relaxed">
                  {pillar.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlight Quote */}
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-[#09090b] font-['Hanken_Grotesk',sans-serif] leading-tight">
            La tecnología se adapta al problema.<br/>
            <span className="text-[#f4b400]">No al revés.</span>
          </h3>

          <div className="flex justify-center">
            <button
              onClick={onOpenDiagnostic}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#09090b] text-white hover:bg-gray-800 font-bold uppercase tracking-wider text-sm rounded-sm transition cursor-pointer font-['Hanken_Grotesk',sans-serif]"
            >
              <span>Solicitar diagnóstico</span>
              <ArrowRight weight="bold" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
