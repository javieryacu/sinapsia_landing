"use client";

import React from "react";
import { ArrowRight } from "@phosphor-icons/react";

interface HeroProps {
  onOpenDiagnostic: () => void;
}

export default function Hero({ onOpenDiagnostic }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Brand Slogan */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-xs sm:text-sm font-bold text-gray-800 uppercase tracking-wider mb-8">
          <span>Software</span>
          <span className="text-gray-300">·</span>
          <span>IA</span>
          <span className="text-gray-300">·</span>
          <span>Automatización</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-950 tracking-tight leading-[1.12] mb-8 font-['Hanken_Grotesk',sans-serif]">
          Mejoramos, automatizamos y hacemos más inteligentes tus sistemas.
        </h1>

        {/* Copy Paragraphs */}
        <div className="space-y-4 text-gray-700 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
          <p className="font-medium text-gray-900">
            Analizamos cómo funciona tu empresa, detectamos dónde la tecnología puede ayudarte a trabajar mejor y nos encargamos de implementar la solución adecuada.
          </p>
          <p className="text-gray-600 text-sm sm:text-base">
            Optimizamos sistemas existentes, conectamos herramientas, automatizamos procesos, incorporamos inteligencia artificial y desarrollamos nuevas soluciones cuando realmente hace falta.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button
            onClick={onOpenDiagnostic}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f4b400] hover:bg-[#e0a400] text-gray-950 font-bold text-base rounded-md shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
          >
            <span>Solicitar diagnóstico sin costo</span>
            <ArrowRight weight="bold" className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
