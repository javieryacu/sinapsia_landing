"use client";

import React from "react";
import { ArrowRight } from "@phosphor-icons/react";

interface CtaSectionProps {
  onOpenDiagnostic: () => void;
}

export default function CtaSection({ onOpenDiagnostic }: CtaSectionProps) {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#09090b] font-['Hanken_Grotesk',sans-serif] leading-tight mb-8">
          Empezá por descubrir qué se puede mejorar.
        </h2>

        <p className="text-gray-600 text-lg sm:text-xl mb-12">
          No necesitás saber qué sistema, automatización o tecnología necesitás.
        </p>

        <div className="bg-[#f8f9fa] border border-gray-200 p-8 sm:p-12 mb-12 rounded-sm shadow-sm">
          <p className="text-[#09090b] font-black text-2xl sm:text-3xl font-['Hanken_Grotesk',sans-serif] leading-tight">
            Nosotros analizamos tu situación y te mostramos dónde existe una oportunidad concreta de mejora.
          </p>
        </div>

        <p className="text-gray-700 font-medium text-lg mb-8">
          Solicitá un diagnóstico inicial sin costo y sin compromiso.
        </p>

        <div className="flex justify-center">
          <button
            onClick={onOpenDiagnostic}
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#09090b] hover:bg-gray-800 text-white font-bold text-sm sm:text-base uppercase tracking-wider rounded-sm shadow-md transition transform hover:-translate-y-0.5 cursor-pointer font-['Hanken_Grotesk',sans-serif]"
          >
            <span>Solicitar diagnóstico sin costo</span>
            <ArrowRight weight="bold" className="w-5 h-5 text-[#f4b400]" />
          </button>
        </div>

      </div>
    </section>
  );
}
