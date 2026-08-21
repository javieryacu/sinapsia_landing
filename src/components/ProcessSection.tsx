"use client";

import React, { useState } from "react";
import { Search, Compass, ListOrdered, Rocket, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

interface ProcessSectionProps {
  onOpenDiagnostic: () => void;
}

const STEPS = [
  {
    num: "01",
    name: "Relevamos",
    desc: "Analizamos tus procesos, sistemas, herramientas y necesidades actuales.",
    icon: Search,
    detail: "Mapeamos cómo se mueve la información en tu día a día para identificar cuellos de botella reales.",
  },
  {
    num: "02",
    name: "Detectamos",
    desc: "Encontramos oportunidades para optimizar, automatizar, integrar o incorporar inteligencia artificial.",
    icon: Compass,
    detail: "Evaluamos qué herramientas existentes se pueden potenciar y dónde la automatización ahorra horas clave.",
  },
  {
    num: "03",
    name: "Priorizamos",
    desc: "Definimos qué conviene resolver primero según impacto, inversión y complejidad.",
    icon: ListOrdered,
    detail: "Establecemos un plan por etapas claras para que veas resultados y retorno de inversión lo antes posible.",
  },
  {
    num: "04",
    name: "Implementamos",
    desc: "Desarrollamos, integramos y ponemos en funcionamiento la solución.",
    icon: Rocket,
    detail: "Configuramos, programamos, conectamos y probamos todo en producción sin interrumpir tu trabajo.",
  },
  {
    num: "05",
    name: "Evolucionamos",
    desc: "Seguimos acompañando a tu empresa para mejorar, automatizar y resolver nuevas necesidades.",
    icon: TrendingUp,
    detail: "Tu negocio crece y tu tecnología se adapta de forma continua con soporte y nuevas mejoras.",
  },
];

export default function ProcessSection({ onOpenDiagnostic }: ProcessSectionProps) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="metodologia" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-800 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#E5A918]" />
            <span>Nuestra Metodología</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-['Outfit',sans-serif]">
            Primero entendemos tu empresa. Después definimos qué hacer.
          </h2>

          <div className="text-slate-600 text-base sm:text-lg leading-relaxed space-y-2">
            <p>
              No empezamos vendiéndote un software, una automatización o inteligencia artificial.
            </p>
            <p className="font-semibold text-slate-900">
              Primero entendemos cómo funciona tu operación y dónde están los problemas.
            </p>
          </div>
        </div>

        {/* Steps Grid / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-5 mb-14">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isCurrent = activeStep === idx;

            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isCurrent
                    ? "bg-slate-950 text-white border-slate-950 shadow-2xl scale-[1.03] ring-4 ring-[#E5A918]/30"
                    : "bg-slate-50/70 hover:bg-white text-slate-900 border-slate-200 shadow-xs hover:shadow-lg hover:border-slate-300"
                }`}
              >
                {/* Step Number Badge */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-2xl font-black font-['Outfit',sans-serif] ${
                        isCurrent ? "text-[#E5A918]" : "text-slate-400"
                      }`}
                    >
                      {step.num}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isCurrent ? "bg-[#E5A918] text-slate-950" : "bg-white text-slate-700 border border-slate-200"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3
                    className={`text-lg font-bold mb-2 font-['Outfit',sans-serif] ${
                      isCurrent ? "text-white" : "text-slate-950"
                    }`}
                  >
                    {step.name}
                  </h3>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isCurrent ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {step.desc}
                  </p>
                </div>

                <div
                  className={`mt-4 pt-3 border-t text-[11px] font-semibold ${
                    isCurrent
                      ? "border-slate-800 text-[#E5A918]"
                      : "border-slate-200/80 text-slate-400"
                  }`}
                >
                  Paso {step.num} de 05
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Detail Card for selected step */}
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#E5A918] text-slate-950 flex items-center justify-center font-black text-lg shrink-0">
              {STEPS[activeStep].num}
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Enfoque del Paso {STEPS[activeStep].num}
              </div>
              <div className="text-base font-bold text-slate-900">
                {STEPS[activeStep].detail}
              </div>
            </div>
          </div>

          <button
            onClick={onOpenDiagnostic}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition cursor-pointer"
          >
            <span>Iniciar Relevamiento</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E5A918]" />
          </button>
        </div>
      </div>
    </section>
  );
}
