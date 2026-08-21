"use client";

import React from "react";
import { ArrowRight } from "@phosphor-icons/react";

interface CtaSectionProps {
  onOpenDiagnostic: () => void;
}

export default function CtaSection({ onOpenDiagnostic }: CtaSectionProps) {
  return (
    <section className="py-20 sm:py-28 bg-[#f9fafb]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight font-['Hanken_Grotesk',sans-serif] mb-6">
          Empezá por descubrir qué se puede mejorar.
        </h2>

        {/* Text */}
        <p className="text-gray-700 text-lg sm:text-xl mb-8 max-w-xl mx-auto">
          No necesitás saber qué sistema, automatización o tecnología necesitás.
        </p>

        {/* Highlighted text */}
        <div className="p-6 sm:p-8 bg-white border border-gray-200 rounded-md max-w-2xl mx-auto shadow-xs mb-8">
          <p className="text-xl sm:text-2xl font-black text-gray-950 font-['Hanken_Grotesk',sans-serif] leading-snug">
            Nosotros analizamos tu situación y te mostramos dónde existe una oportunidad concreta de mejora.
          </p>
        </div>

        <p className="text-gray-700 text-base sm:text-lg mb-8 font-medium">
          Solicitá un diagnóstico inicial sin costo y sin compromiso.
        </p>

        {/* Button */}
        <div className="flex justify-center">
          <button
            onClick={onOpenDiagnostic}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f4b400] hover:bg-[#e0a400] text-gray-950 font-bold text-base rounded-md shadow-sm hover:shadow transition cursor-pointer font-['Hanken_Grotesk',sans-serif]"
          >
            <span>Solicitar diagnóstico sin costo</span>
            <ArrowRight weight="bold" className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
