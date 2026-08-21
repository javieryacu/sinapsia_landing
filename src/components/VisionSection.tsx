"use client";

import React from "react";
import { ArrowRight } from "@phosphor-icons/react";

interface VisionSectionProps {
  onOpenDiagnostic: () => void;
}

export default function VisionSection({ onOpenDiagnostic }: VisionSectionProps) {
  const formulaElements = ["Procesos", "Sistemas", "Datos", "Automatización", "IA"];

  return (
    <section id="vision" className="py-20 sm:py-28 bg-[#f8f9fa] border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Block 1: No reemplazamos tus sistemas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#09090b] tracking-tight font-['Hanken_Grotesk',sans-serif] mb-6">
              No reemplazamos tus sistemas.<br/>
              <span className="text-gray-400">Los hacemos más inteligentes.</span>
            </h2>
          </div>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed font-medium">
            <p className="text-[#09090b] font-bold">
              Antes de recomendar un reemplazo, analizamos lo que ya tenés.
            </p>
            <p>
              Muchas veces la mejor solución no es empezar de cero, sino aprovechar mejor la inversión tecnológica existente, mejorarla y conectarla con nuevas capacidades.
            </p>
            <p>
              Y cuando reemplazar o desarrollar algo nuevo realmente tiene sentido, también lo hacemos.
            </p>
          </div>
        </div>

        {/* Block 2: Una sola visión para toda tu tecnología */}
        <div className="bg-white border border-gray-200 rounded-sm p-10 sm:p-16 text-center shadow-sm">
          <h2 className="text-3xl sm:text-4xl font-black text-[#09090b] tracking-tight font-['Hanken_Grotesk',sans-serif] mb-6">
            Una sola visión para toda tu tecnología.
          </h2>

          <p className="text-gray-700 text-lg mb-12">
            En lugar de resolver cada problema por separado, trabajamos sobre el conjunto:
          </p>

          {/* Connected Formula */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
            {formulaElements.map((el, i) => (
              <React.Fragment key={el}>
                <div className="bg-[#09090b] text-white px-5 py-3 rounded-sm text-sm sm:text-base font-bold tracking-wider uppercase font-['Hanken_Grotesk',sans-serif]">
                  {el}
                </div>
                {i < formulaElements.length - 1 && (
                  <span className="text-xl text-gray-400 font-black">+</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="max-w-2xl mx-auto space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              Porque una mejora aislada puede resolver un problema.
            </p>
            <p className="text-xl font-bold text-[#09090b]">
              Pero una tecnología bien conectada puede transformar la forma en que funciona una empresa.
            </p>
          </div>

          <div className="mt-12">
            <button
              onClick={onOpenDiagnostic}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#f4b400] hover:bg-[#d9a000] text-black font-bold uppercase tracking-wider text-sm rounded-sm transition cursor-pointer font-['Hanken_Grotesk',sans-serif]"
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
