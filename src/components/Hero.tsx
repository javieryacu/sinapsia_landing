"use client";

import React from "react";
import { ArrowRight } from "@phosphor-icons/react";

interface HeroProps {
  onOpenDiagnostic: () => void;
}

export default function Hero({ onOpenDiagnostic }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 bg-white border-b border-gray-100">
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

        {/* Sequence Content */}
        <div className="space-y-6 text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mb-10 text-center">
          <p className="font-semibold text-gray-950">
            Analizamos cómo funciona tu empresa, detectamos dónde la tecnología puede ayudarte a trabajar mejor y nos encargamos de implementar la solución adecuada.
          </p>

          {/* Integrated Statement */}
          <div className="py-2">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight font-['Hanken_Grotesk',sans-serif]">
              No reemplazamos tus sistemas. <span className="underline decoration-[#f4b400] decoration-4 underline-offset-4">Los hacemos más inteligentes.</span>
            </h2>
          </div>

          <p className="text-gray-700 text-base sm:text-lg">
            Antes de recomendar un reemplazo, analizamos lo que ya tenés.
          </p>

          <p className="text-gray-600 text-sm sm:text-base">
            Muchas veces la mejor solución no es empezar de cero, sino aprovechar mejor la inversión tecnológica existente, mejorarla y conectarla con nuevas capacidades.
          </p>

          <p className="text-gray-600 text-sm sm:text-base">
            Optimizamos sistemas existentes, conectamos herramientas, automatizamos procesos, incorporamos inteligencia artificial y desarrollamos nuevas soluciones cuando realmente hace falta.
          </p>

          <p className="text-gray-800 text-sm sm:text-base font-medium">
            Y cuando reemplazar o desarrollar algo nuevo realmente tiene sentido, también lo hacemos.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center pt-2">
          <button
            onClick={onOpenDiagnostic}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f4b400] hover:bg-[#e0a400] text-gray-950 font-bold text-base rounded-md shadow-sm hover:shadow transition-all duration-200 cursor-pointer font-['Hanken_Grotesk',sans-serif]"
          >
            <span>Solicitar diagnóstico sin costo</span>
            <ArrowRight weight="bold" className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
