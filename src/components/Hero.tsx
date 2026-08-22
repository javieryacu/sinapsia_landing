"use client";

import React from "react";
import { ArrowRight, Sparkle } from "@phosphor-icons/react";
import { motion } from "framer-motion";

interface HeroProps {
  onOpenDiagnostic: () => void;
}

export default function Hero({ onOpenDiagnostic }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 bg-white border-b border-gray-100 overflow-hidden">
      {/* Subtle Background Synaptic & Circuit Overlay */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Soft radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#f4b400]/8 blur-[120px] rounded-full" />

        {/* High-tech Synaptic SVG Network (Subtle) */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.22] text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="hero-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.5" />
              <circle cx="48" cy="0" r="1.5" fill="#f4b400" fillOpacity="0.6" />
            </pattern>
            <linearGradient id="line-glow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f4b400" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#111827" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#f4b400" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          <rect width="100%" height="100%" fill="url(#hero-grid)" />

          {/* Subtle neural connecting lines & nodes */}
          <g className="animate-float-slow">
            <path
              d="M 100 200 Q 350 120 600 250 T 1100 180"
              fill="none"
              stroke="url(#line-glow)"
              strokeWidth="1.5"
              strokeDasharray="6 6"
            />
            <circle cx="350" cy="120" r="4" fill="#f4b400" className="animate-ping" style={{ animationDuration: "4s" }} />
            <circle cx="600" cy="250" r="3" fill="#111827" />
            <circle cx="1100" cy="180" r="4" fill="#f4b400" />
          </g>

          <g className="animate-float-reverse">
            <path
              d="M 200 450 Q 500 380 800 480 T 1300 400"
              fill="none"
              stroke="url(#line-glow)"
              strokeWidth="1.5"
              strokeDasharray="8 8"
            />
            <circle cx="500" cy="380" r="3.5" fill="#f4b400" />
            <circle cx="800" cy="480" r="4" fill="#111827" />
          </g>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Brand Slogan with motion */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-gray-200 shadow-xs text-xs sm:text-sm font-bold text-gray-800 uppercase tracking-wider mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#f4b400] animate-pulse" />
          <span>Software</span>
          <span className="text-gray-300">·</span>
          <span>IA</span>
          <span className="text-gray-300">·</span>
          <span>Automatización</span>
        </motion.div>

        {/* Main Title with motion */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-950 tracking-tight leading-[1.12] mb-8 font-['Hanken_Grotesk',sans-serif]"
        >
          Mejoramos, automatizamos y hacemos más inteligentes tus sistemas.
        </motion.h1>

        {/* Sequence Content with motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-6 text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mb-10 text-center"
        >
          <p className="font-semibold text-gray-950">
            Analizamos cómo funciona tu empresa, detectamos dónde la tecnología puede ayudarte a trabajar mejor y nos encargamos de implementar la solución adecuada.
          </p>

          {/* Integrated Statement with highlight bar */}
          <div className="py-2">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight font-['Hanken_Grotesk',sans-serif]">
              No reemplazamos tus sistemas. <span className="relative inline-block text-gray-950 underline decoration-[#f4b400] decoration-4 underline-offset-4">Los hacemos más inteligentes.</span>
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
        </motion.div>

        {/* Dynamic CTA Button with Shimmer & Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center pt-2"
        >
          <button
            onClick={onOpenDiagnostic}
            className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f4b400] hover:bg-[#e0a400] text-gray-950 font-extrabold text-base rounded-md shadow-md amber-glow-btn transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer font-['Hanken_Grotesk',sans-serif]"
          >
            {/* Shimmer light bar */}
            <span className="absolute top-0 left-0 w-1/2 h-full bg-white/30 skew-x-12 animate-shimmer pointer-events-none" />
            
            <span className="relative z-10">Solicitar diagnóstico sin costo</span>
            <ArrowRight weight="bold" className="w-5 h-5 relative z-10 group-hover:translate-x-1.5 transition-transform duration-200" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
