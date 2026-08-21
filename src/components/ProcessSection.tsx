"use client";

import React, { useState } from "react";
import { MagnifyingGlass, Target, ListNumbers, RocketLaunch, ChartLineUp } from "@phosphor-icons/react";

interface ProcessSectionProps {
  onOpenDiagnostic: () => void;
}

const STEPS = [
  {
    num: "01",
    name: "Relevamos",
    desc: "Analizamos tus procesos, sistemas, herramientas y necesidades actuales.",
    icon: MagnifyingGlass,
  },
  {
    num: "02",
    name: "Detectamos",
    desc: "Encontramos oportunidades para optimizar, automatizar, integrar o incorporar inteligencia artificial.",
    icon: Target,
  },
  {
    num: "03",
    name: "Priorizamos",
    desc: "Definimos qué conviene resolver primero según impacto, inversión y complejidad.",
    icon: ListNumbers,
  },
  {
    num: "04",
    name: "Implementamos",
    desc: "Desarrollamos, integramos y ponemos en funcionamiento la solución.",
    icon: RocketLaunch,
  },
  {
    num: "05",
    name: "Evolucionamos",
    desc: "Seguimos acompañando a tu empresa para mejorar, automatizar y resolver nuevas necesidades.",
    icon: ChartLineUp,
  },
];

export default function ProcessSection({ onOpenDiagnostic }: ProcessSectionProps) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="metodologia" className="py-20 sm:py-28 bg-white border-b border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#09090b] tracking-tight font-['Hanken_Grotesk',sans-serif]">
            Primero entendemos tu empresa. Después definimos qué hacer.
          </h2>

          <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-2">
            <p>
              No empezamos vendiéndote un software, una automatización o inteligencia artificial.
            </p>
            <p className="font-bold text-[#09090b]">
              Primero entendemos cómo funciona tu operación y dónde están los problemas.
            </p>
          </div>
        </div>

        {/* Steps Grid / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border border-gray-200 rounded-sm overflow-hidden bg-[#f8f9fa]">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isCurrent = activeStep === idx;

            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`p-6 border-r last:border-r-0 border-gray-200 transition-all duration-300 cursor-pointer flex flex-col ${
                  isCurrent
                    ? "bg-[#09090b] text-white"
                    : "bg-transparent hover:bg-white text-[#09090b]"
                }`}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-2xl font-black font-['Hanken_Grotesk',sans-serif] ${
                        isCurrent ? "text-[#f4b400]" : "text-gray-400"
                      }`}
                    >
                      {step.num}
                    </span>
                    <Icon 
                      weight={isCurrent ? "fill" : "regular"} 
                      className={`w-6 h-6 ${isCurrent ? "text-[#f4b400]" : "text-gray-400"}`} 
                    />
                  </div>

                  <h3
                    className={`text-lg font-bold mb-3 uppercase tracking-wider text-sm font-['Hanken_Grotesk',sans-serif]`}
                  >
                    — {step.name}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed flex-grow ${
                      isCurrent ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
