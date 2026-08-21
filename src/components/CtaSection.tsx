"use client";

import React from "react";
import { ArrowRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";

interface CtaSectionProps {
  onOpenDiagnostic: () => void;
}

export default function CtaSection({ onOpenDiagnostic }: CtaSectionProps) {
  return (
    <section className="py-20 sm:py-28 bg-[#f9fafb] relative overflow-hidden">
      {/* Soft background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#f4b400]/6 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight font-['Hanken_Grotesk',sans-serif] mb-6">
          Empezá por descubrir qué se puede mejorar.
        </h2>

        {/* Text */}
        <p className="text-gray-700 text-lg sm:text-xl mb-8 max-w-xl mx-auto">
          No necesitás saber qué sistema, automatización o tecnología necesitás.
        </p>

        {/* Highlighted text card with hover elevation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 bg-white border border-gray-200 hover:border-gray-300 rounded-md max-w-2xl mx-auto shadow-xs hover:shadow-md transition-all duration-300 mb-8"
        >
          <p className="text-xl sm:text-2xl font-black text-gray-950 font-['Hanken_Grotesk',sans-serif] leading-snug">
            Nosotros analizamos tu situación y te mostramos dónde existe una oportunidad concreta de mejora.
          </p>
        </motion.div>

        <p className="text-gray-700 text-base sm:text-lg mb-8 font-medium">
          Solicitá un diagnóstico inicial sin costo y sin compromiso.
        </p>

        {/* Dynamic CTA Button */}
        <div className="flex justify-center">
          <button
            onClick={onOpenDiagnostic}
            className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f4b400] hover:bg-[#e0a400] text-gray-950 font-extrabold text-base rounded-md shadow-md amber-glow-btn transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer font-['Hanken_Grotesk',sans-serif]"
          >
            {/* Shimmer light bar */}
            <span className="absolute top-0 left-0 w-1/2 h-full bg-white/30 skew-x-12 animate-shimmer pointer-events-none" />
            
            <span className="relative z-10">Solicitar diagnóstico sin costo</span>
            <ArrowRight weight="bold" className="w-5 h-5 relative z-10 group-hover:translate-x-1.5 transition-transform duration-200" />
          </button>
        </div>

      </div>
    </section>
  );
}
