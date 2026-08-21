"use client";

import React from "react";
import { ArrowRight, Lightning, CheckCircle } from "@phosphor-icons/react";

interface CtaSectionProps {
  onOpenDiagnostic: () => void;
}

export default function CtaSection({ onOpenDiagnostic }: CtaSectionProps) {
  return (
    <section className="py-24 sm:py-36 bg-[#f8f9fa] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-gray-200 text-[11px] font-mono font-bold uppercase tracking-wider text-gray-700 rounded-sm mb-8 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#f4b400]" />
          <span>INICIAR DIAGNÓSTICO</span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#09090b] font-['Hanken_Grotesk',sans-serif] leading-tight mb-6">
          Empezá por descubrir qué se puede mejorar.
        </h2>

        <p className="text-gray-600 text-lg sm:text-xl mb-10 max-w-xl mx-auto font-medium">
          No necesitás saber qué sistema, automatización o tecnología necesitás.
        </p>

        {/* Highlight Quote Box */}
        <div className="bg-white border-2 border-[#09090b] p-8 sm:p-12 mb-10 rounded-sm shadow-xl relative">
          <p className="text-[#09090b] font-black text-2xl sm:text-3xl lg:text-4xl font-['Hanken_Grotesk',sans-serif] leading-tight">
            “Nosotros analizamos tu situación y te mostramos dónde existe una oportunidad concreta de mejora.”
          </p>
        </div>

        <p className="text-gray-700 font-semibold text-base sm:text-lg mb-8">
          Solicitá un diagnóstico inicial sin costo y sin compromiso.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenDiagnostic}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#f4b400] hover:bg-[#d9a000] text-black font-black text-base uppercase tracking-wider rounded-sm shadow-md transition transform hover:-translate-y-0.5 cursor-pointer font-['Hanken_Grotesk',sans-serif]"
          >
            <Lightning weight="fill" className="w-5 h-5 text-black" />
            <span>Solicitar diagnóstico sin costo</span>
            <ArrowRight weight="bold" className="w-5 h-5 text-black" />
          </button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500 font-mono">
          <span className="flex items-center gap-1.5">
            <CheckCircle weight="fill" className="w-4 h-4 text-[#f4b400]" /> 100% SIN COSTO
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle weight="fill" className="w-4 h-4 text-[#f4b400]" /> SIN COMPROMISO
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle weight="fill" className="w-4 h-4 text-[#f4b400]" /> RESPUESTA DIRECTA
          </span>
        </div>

      </div>
    </section>
  );
}
