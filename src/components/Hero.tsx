"use client";

import React from "react";
import { ArrowRight, Lightning } from "@phosphor-icons/react";

interface HeroProps {
  onOpenDiagnostic: () => void;
}

export default function Hero({ onOpenDiagnostic }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden bg-[#f8f9fa] border-b border-gray-200">
      {/* Background subtle grid & gradient glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#09090b] tracking-tight leading-[1.1] font-['Hanken_Grotesk',sans-serif] mb-6">
          Mejoramos, automatizamos y hacemos más inteligentes tus sistemas.
        </h1>

        {/* Main Descriptions */}
        <div className="space-y-4 text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto font-medium">
          <p>
            Analizamos cómo funciona tu empresa, detectamos dónde la tecnología puede ayudarte a
            trabajar mejor y nos encargamos de implementar la solución adecuada.
          </p>
          <p className="text-sm sm:text-base text-gray-600">
            Optimizamos sistemas existentes, conectamos herramientas, automatizamos procesos,
            incorporamos inteligencia artificial y desarrollamos nuevas soluciones cuando
            realmente hace falta.
          </p>
        </div>

        {/* Call to Actions */}
        <div className="pt-8 flex flex-col items-center justify-center">
          <button
            onClick={onOpenDiagnostic}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#f4b400] hover:bg-[#d9a000] text-black font-bold text-sm sm:text-base uppercase tracking-wider rounded-sm shadow-sm transition-all transform hover:-translate-y-0.5 cursor-pointer font-['Hanken_Grotesk',sans-serif]"
          >
            <Lightning weight="fill" className="w-5 h-5" />
            <span>Solicitar diagnóstico sin costo</span>
            <ArrowRight weight="bold" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
