"use client";

import React from "react";
import { Wrench, Network, Zap, Code2, Check, ArrowRight } from "lucide-react";

interface PhilosophySectionProps {
  onOpenDiagnostic: () => void;
}

const PHILOSOPHY_PILLARS = [
  {
    icon: Wrench,
    title: "Mejorar lo existente",
    text: "A veces alcanza con optimizar una herramienta que ya utilizás y sacarle el máximo provecho.",
    tag: "Optimización",
  },
  {
    icon: Network,
    title: "Conectar herramientas",
    text: "Otras veces, conectar dos sistemas resuelve la fricción y evita la duplicación de datos.",
    tag: "Integración",
  },
  {
    icon: Zap,
    title: "Automatizar flujos",
    text: "En otros casos, automatizar una tarea repetitiva libera decenas de horas de tu equipo.",
    tag: "Automatización",
  },
  {
    icon: Code2,
    title: "Desarrollo a medida",
    text: "Y cuando realmente hace falta, desarrollamos una solución nueva que encaje exacto con tu negocio.",
    tag: "Desarrollo",
  },
];

export default function PhilosophySection({ onOpenDiagnostic }: PhilosophySectionProps) {
  return (
    <section id="criterio" className="py-20 sm:py-28 bg-slate-50/70 border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-800 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#E5A918]" />
            <span>Criterio y Pragmatismo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-['Outfit',sans-serif]">
            No todo problema necesita un sistema nuevo.
          </h2>

          <p className="text-lg sm:text-xl font-semibold text-slate-700">
            Y no toda empresa necesita inteligencia artificial.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {PHILOSOPHY_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl hover:border-[#E5A918] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/80 text-slate-950 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-slate-900" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-950 mb-2 font-['Outfit',sans-serif]">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{pillar.text}</p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-slate-800">
                  <Check className="w-4 h-4 text-[#E5A918]" />
                  <span>Solución ajustada</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Quote Banner */}
        <div className="max-w-4xl mx-auto text-center bg-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle golden background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E5A918]/15 blur-3xl pointer-events-none rounded-full" />

          <p className="text-xs sm:text-sm uppercase tracking-widest text-[#E5A918] font-bold mb-3">
            Nuestra Premisa Fundamental
          </p>

          <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-white font-['Outfit',sans-serif] mb-6 leading-snug">
            “La tecnología se adapta al problema.{" "}
            <span className="text-[#E5A918]">No al revés.</span>”
          </h3>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenDiagnostic}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#E5A918] hover:bg-[#d4990d] text-slate-950 font-extrabold text-sm rounded-xl shadow-md transition transform hover:scale-105 cursor-pointer"
            >
              <span>Pedir evaluación técnica</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/5493794552724?text=Hola%20Sinapsia!%20Quiero%20evaluar%20mis%20sistemas."
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-slate-300 hover:text-white font-semibold underline underline-offset-4 transition"
            >
              Consultar por WhatsApp (3794-552724)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
