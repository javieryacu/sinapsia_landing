"use client";

import React from "react";
import { ArrowRight, Check } from "@phosphor-icons/react";

interface VisionSectionProps {
  onOpenDiagnostic: () => void;
}

export default function VisionSection({ onOpenDiagnostic }: VisionSectionProps) {
  const formulaElements = ["Procesos", "Sistemas", "Datos", "Automatización", "IA"];

  return (
    <section id="vision" className="py-24 sm:py-32 bg-[#f8f9fa] border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Block 1: No reemplazamos tus sistemas. Los hacemos más inteligentes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 text-[11px] font-mono font-bold uppercase tracking-wider text-gray-700 rounded-sm">
              <span className="w-2 h-2 rounded-full bg-[#f4b400]" />
              <span>EVOLUCIÓN ESTRATÉGICA</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#09090b] tracking-tight font-['Hanken_Grotesk',sans-serif] leading-tight">
              No reemplazamos tus sistemas.{" "}
              <span className="text-[#f4b400]">Los hacemos más inteligentes.</span>
            </h2>
          </div>

          <div className="lg:col-span-6 bg-white p-8 sm:p-10 border border-gray-200 rounded-sm shadow-xs space-y-5">
            <p className="text-lg font-bold text-[#09090b] font-['Hanken_Grotesk',sans-serif]">
              Antes de recomendar un reemplazo, analizamos lo que ya tenés.
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              Muchas veces la mejor solución no es empezar de cero, sino aprovechar mejor la
              inversión tecnológica existente, mejorarla y conectarla con nuevas capacidades.
            </p>
            <p className="text-gray-800 text-sm font-semibold pt-2 border-t border-gray-100">
              Y cuando reemplazar o desarrollar algo nuevo realmente tiene sentido, también lo hacemos.
            </p>
          </div>
        </div>

        {/* Block 2: Una sola visión para toda tu tecnología */}
        <div className="bg-[#09090b] text-white border border-gray-800 rounded-sm p-10 sm:p-16 text-center shadow-2xl relative overflow-hidden">
          
          <div className="inline-block px-3 py-1 bg-white/10 text-[#f4b400] text-xs font-mono font-bold uppercase tracking-widest rounded-sm mb-6">
            INTEGRACIÓN HOLÍSTICA
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-['Hanken_Grotesk',sans-serif] mb-6">
            Una sola visión para toda tu tecnología.
          </h2>

          <p className="text-gray-300 text-base sm:text-lg mb-12 max-w-xl mx-auto">
            En lugar de resolver cada problema por separado, trabajamos sobre el conjunto:
          </p>

          {/* Connected Formula */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {formulaElements.map((el, i) => (
              <React.Fragment key={el}>
                <div className="bg-white/10 hover:bg-white/15 border border-white/20 text-white px-4 sm:px-5 py-3 rounded-sm text-xs sm:text-sm font-black tracking-wider uppercase font-['Hanken_Grotesk',sans-serif]">
                  {el}
                </div>
                {i < formulaElements.length - 1 && (
                  <span className="text-lg sm:text-xl text-[#f4b400] font-black px-0.5">+</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Conclusion lines */}
          <div className="max-w-2xl mx-auto space-y-3 text-gray-300 text-base leading-relaxed pt-8 border-t border-gray-800">
            <p className="text-gray-400">
              Porque una mejora aislada puede resolver un problema.
            </p>
            <p className="text-xl sm:text-2xl font-black text-white font-['Hanken_Grotesk',sans-serif]">
              Pero una tecnología bien conectada puede transformar la forma en que funciona una empresa.
            </p>
          </div>

          <div className="mt-10">
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
