"use client";

import React from "react";
import { Layers, ShieldCheck, Zap, Bot, Database, Cpu, ArrowRight } from "lucide-react";

interface VisionSectionProps {
  onOpenDiagnostic: () => void;
}

export default function VisionSection({ onOpenDiagnostic }: VisionSectionProps) {
  const formulaElements = [
    { label: "Procesos", desc: "Flujos operativos claros" },
    { label: "Sistemas", desc: "Herramientas existentes" },
    { label: "Datos", desc: "Información en tiempo real" },
    { label: "Automatización", desc: "Cero tareas manuales" },
    { label: "IA", desc: "Decisiones inteligentes" },
  ];

  return (
    <section id="vision" className="py-20 sm:py-28 bg-slate-50/80 border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Block 1: No reemplazamos tus sistemas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-800 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#E5A918]" />
              <span>Optimización Inteligente</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-['Outfit',sans-serif]">
              No reemplazamos tus sistemas.{" "}
              <span className="text-[#E5A918]">Los hacemos más inteligentes.</span>
            </h2>

            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p className="font-medium text-slate-900">
                Antes de recomendar un reemplazo, analizamos lo que ya tenés.
              </p>
              <p>
                Muchas veces la mejor solución no es empezar de cero, sino aprovechar mejor la
                inversión tecnológica existente, mejorarla y conectarla con nuevas capacidades.
              </p>
              <p className="text-slate-800 font-semibold">
                Y cuando reemplazar o desarrollar algo nuevo realmente tiene sentido, también lo hacemos.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-6">
              <h3 className="text-xl font-extrabold text-slate-950 font-['Outfit',sans-serif]">
                ¿Cómo abordamos tu tecnología actual?
              </h3>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-950 flex items-center justify-center font-bold text-sm shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Reutilización de Inversión</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Protegemos lo que ya funciona y adaptamos componentes para no tirar código ni datos a la basura.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#E5A918] text-slate-950 flex items-center justify-center font-black text-sm shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Puentes de Conexión & IA</h4>
                    <p className="text-xs text-slate-700 mt-0.5">
                      Conectamos bases de datos y agregamos capas inteligentes para automatizar flujos sin rehacer todo el sistema.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-950 flex items-center justify-center font-bold text-sm shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Evolución Progresiva</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Crecimiento ordenado en fases con entregas continuas y resultados visibles desde el primer sprint.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Block 2: Una sola visión para toda tu tecnología */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-800 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#E5A918]" />
            <span>Visión Holística</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-['Outfit',sans-serif] mb-4">
            Una sola visión para toda tu tecnología.
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mb-8">
            En lugar de resolver cada problema por separado, trabajamos sobre el conjunto:
          </p>

          {/* Connected Formula */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 my-8">
            {formulaElements.map((el, i) => (
              <React.Fragment key={el.label}>
                <div className="bg-slate-950 text-white px-4 py-3 rounded-2xl border border-slate-800 shadow-md">
                  <div className="text-sm sm:text-base font-black font-['Outfit',sans-serif]">
                    {el.label}
                  </div>
                  <div className="text-[10px] text-slate-400 font-medium">{el.desc}</div>
                </div>
                {i < formulaElements.length - 1 && (
                  <span className="text-2xl sm:text-3xl font-black text-[#E5A918] px-1">+</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Conclusion Text */}
          <div className="max-w-2xl mx-auto space-y-2 mt-8 pt-8 border-t border-slate-100 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p className="font-medium text-slate-600">
              Porque una mejora aislada puede resolver un problema.
            </p>
            <p className="font-extrabold text-slate-950 text-lg sm:text-xl">
              Pero una tecnología bien conectada puede transformar la forma en que funciona una empresa.
            </p>
          </div>

          <div className="mt-8">
            <button
              onClick={onOpenDiagnostic}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#E5A918] hover:bg-[#d4990d] text-slate-950 font-black text-sm rounded-xl shadow-md transition transform hover:scale-105 cursor-pointer"
            >
              <span>Conectar mis sistemas con Sinapsia</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
