"use client";

import React, { useState } from "react";
import { MagnifyingGlass, Target, ListNumbers, RocketLaunch, ChartLineUp, ArrowRight, Check } from "@phosphor-icons/react";

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
    <section id="metodologia" className="py-24 sm:py-32 bg-white border-b border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f8f9fa] border border-gray-200 text-[11px] font-mono font-bold uppercase tracking-wider text-gray-700 rounded-sm">
            <span className="w-2 h-2 rounded-full bg-[#f4b400]" />
            <span>METODOLOGÍA DE INGENIERÍA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#09090b] tracking-tight font-['Hanken_Grotesk',sans-serif]">
            Primero entendemos tu empresa. Después definimos qué hacer.
          </h2>

          <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-2 max-w-2xl mx-auto">
            <p>
              No empezamos vendiéndote un software, una automatización o inteligencia artificial.
            </p>
            <p className="font-bold text-[#09090b]">
              Primero entendemos cómo funciona tu operación y dónde están los problemas.
            </p>
          </div>
        </div>

        {/* 5-Step Connected Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-4 mb-16">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isCurrent = activeStep === idx;

            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`group relative p-7 rounded-sm border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isCurrent
                    ? "bg-[#09090b] text-white border-[#09090b] shadow-xl scale-[1.02] ring-2 ring-[#f4b400]"
                    : "bg-[#f8f9fa] hover:bg-white text-[#09090b] border-gray-200 hover:border-gray-400"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`text-3xl font-black font-['Hanken_Grotesk',sans-serif] tracking-tight ${
                        isCurrent ? "text-[#f4b400]" : "text-gray-400 group-hover:text-[#09090b]"
                      }`}
                    >
                      {step.num}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-sm flex items-center justify-center border ${
                        isCurrent
                          ? "bg-[#f4b400] text-[#09090b] border-[#f4b400]"
                          : "bg-white text-gray-700 border-gray-200"
                      }`}
                    >
                      <Icon weight="bold" className="w-5 h-5" />
                    </div>
                  </div>

                  <h3
                    className={`text-base font-black uppercase tracking-wider mb-3 font-['Hanken_Grotesk',sans-serif] ${
                      isCurrent ? "text-white" : "text-[#09090b]"
                    }`}
                  >
                    — {step.name}
                  </h3>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isCurrent ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {step.desc}
                  </p>
                </div>

                <div
                  className={`mt-6 pt-3 border-t text-[10px] font-mono uppercase tracking-wider ${
                    isCurrent ? "border-gray-800 text-[#f4b400]" : "border-gray-200 text-gray-400"
                  }`}
                >
                  FASE {step.num} / 05
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Action Trigger */}
        <div className="max-w-3xl mx-auto p-6 bg-[#f8f9fa] border border-gray-200 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="text-xs font-mono font-bold text-gray-500 uppercase">Paso 01 Listo para iniciar</div>
            <div className="text-base font-bold text-[#09090b] font-['Hanken_Grotesk',sans-serif]">
              Relevamiento de procesos sin costo y sin compromiso
            </div>
          </div>

          <button
            onClick={onOpenDiagnostic}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#09090b] hover:bg-gray-800 text-white font-bold text-xs uppercase tracking-wider rounded-sm transition cursor-pointer font-['Hanken_Grotesk',sans-serif]"
          >
            <span>Iniciar Relevamiento</span>
            <ArrowRight weight="bold" className="w-4 h-4 text-[#f4b400]" />
          </button>
        </div>

      </div>
    </section>
  );
}
