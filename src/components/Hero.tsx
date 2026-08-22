"use client";

import React from "react";
import { ArrowRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";

interface HeroProps {
  onOpenDiagnostic: () => void;
}

export default function Hero({ onOpenDiagnostic }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 bg-[#e8ebef] border-b border-gray-300 overflow-hidden">
      
      {/* Background: Direct Vector Graphics with Pearlescent Automotive Bodywork & Yellow Technical Lines */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        
        {/* Slightly Darker Automotive Grayish Diffuse Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#edf0f4] via-[#e4e7eb] to-[#dbe0e6]" />
        
        {/* Soft Specular Light Center Accent */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-white/40 blur-[90px] rounded-full" />

        {/* Embedded Vector Lines for Absolute Fidelity & Crispness */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Fine Gray Dot Grid */}
            <pattern id="carDoorGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="0.85" fill="#09090b" fillOpacity="0.06" />
            </pattern>

            {/* Glowing Yellow Line Gradient */}
            <linearGradient id="techYellowLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f4b400" stopOpacity="0" />
              <stop offset="25%" stopColor="#f4b400" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#e5a918" stopOpacity="1" />
              <stop offset="75%" stopColor="#f4b400" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#f4b400" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="techYellowVertical" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f4b400" stopOpacity="0" />
              <stop offset="30%" stopColor="#f4b400" stopOpacity="0.6" />
              <stop offset="70%" stopColor="#f4b400" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#f4b400" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Grid Layer */}
          <rect width="1920" height="1080" fill="url(#carDoorGrid)" />

          {/* Delicate Technical Lines (Yellow Accent) */}
          <g>
            {/* Top Horizon Line */}
            <line x1="100" y1="140" x2="1820" y2="140" stroke="url(#techYellowLine)" strokeWidth="1.3" />
            <circle cx="280" cy="140" r="3" fill="#f4b400" />
            <circle cx="960" cy="140" r="2.5" fill="#f4b400" />
            <circle cx="1640" cy="140" r="3" fill="#f4b400" />

            {/* Circuit Trace Left Side */}
            <path
              d="M 150 320 L 300 320 L 360 380 L 480 380"
              fill="none"
              stroke="url(#techYellowLine)"
              strokeWidth="1.3"
            />
            <circle cx="300" cy="320" r="3" fill="#f4b400" />
            <circle cx="360" cy="380" r="2.5" fill="#09090b" fillOpacity="0.3" />
            <circle cx="480" cy="380" r="3.5" fill="#f4b400" />

            {/* Circuit Trace Right Side */}
            <path
              d="M 1440 600 L 1580 600 L 1640 660 L 1780 660"
              fill="none"
              stroke="url(#techYellowLine)"
              strokeWidth="1.3"
            />
            <circle cx="1440" cy="600" r="3.5" fill="#f4b400" />
            <circle cx="1580" cy="600" r="2.5" fill="#09090b" fillOpacity="0.3" />
            <circle cx="1640" cy="660" r="3" fill="#f4b400" />

            {/* Bottom Horizon Line (Inspired by the car door graphic yellow separator) */}
            <line x1="180" y1="960" x2="1740" y2="960" stroke="url(#techYellowLine)" strokeWidth="1.8" />
            <line x1="180" y1="965" x2="520" y2="965" stroke="#f4b400" strokeWidth="1" strokeOpacity="0.5" />
            <line x1="1400" y1="965" x2="1740" y2="965" stroke="#f4b400" strokeWidth="1" strokeOpacity="0.5" />

            {/* Subtle Vertical Coordinate Lines */}
            <line x1="160" y1="200" x2="160" y2="880" stroke="url(#techYellowVertical)" strokeWidth="0.85" strokeDasharray="6 6" />
            <line x1="1760" y1="200" x2="1760" y2="880" stroke="url(#techYellowVertical)" strokeWidth="0.85" strokeDasharray="6 6" />

            {/* Corner Precision Marks */}
            <path d="M 60 60 L 85 60 M 60 60 L 60 85" stroke="#f4b400" strokeWidth="1.3" strokeOpacity="0.75" />
            <path d="M 1860 60 L 1835 60 M 1860 60 L 1860 85" stroke="#f4b400" strokeWidth="1.3" strokeOpacity="0.75" />
            <path d="M 60 1020 L 85 1020 M 60 1020 L 60 995" stroke="#f4b400" strokeWidth="1.3" strokeOpacity="0.75" />
            <path d="M 1860 1020 L 1835 1020 M 1860 1020 L 1860 995" stroke="#f4b400" strokeWidth="1.3" strokeOpacity="0.75" />
          </g>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Brand Slogan */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-gray-300 shadow-xs text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#f4b400] animate-pulse" />
          <span>Software</span>
          <span className="text-gray-400">·</span>
          <span>IA</span>
          <span className="text-gray-400">·</span>
          <span>Automatización</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#09090b] tracking-tight leading-[1.12] mb-8 font-['Hanken_Grotesk',sans-serif]"
        >
          Mejoramos, automatizamos y hacemos más inteligentes tus sistemas.
        </motion.h1>

        {/* Sequence Content with Exact Copy & Enhanced Automotive Contrast */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-6 text-[#111827] text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mb-10 text-center"
        >
          <p className="font-semibold text-[#09090b]">
            Analizamos cómo funciona tu empresa, detectamos dónde la tecnología puede ayudarte a trabajar mejor y nos encargamos de implementar la solución adecuada.
          </p>

          {/* Integrated Statement */}
          <div className="py-2">
            <h2 className="text-2xl sm:text-3xl font-black text-[#09090b] tracking-tight font-['Hanken_Grotesk',sans-serif]">
              No reemplazamos tus sistemas. <span className="relative inline-block text-[#09090b] underline decoration-[#f4b400] decoration-4 underline-offset-4">Los hacemos más inteligentes.</span>
            </h2>
          </div>

          <p className="text-[#111827] text-base sm:text-lg">
            Antes de recomendar un reemplazo, analizamos lo que ya tenés.
          </p>

          <p className="text-[#272f3d] text-sm sm:text-base">
            Muchas veces la mejor solución no es empezar de cero, sino aprovechar mejor la inversión tecnológica existente, mejorarla y conectarla con nuevas capacidades.
          </p>

          <p className="text-[#272f3d] text-sm sm:text-base">
            Optimizamos sistemas existentes, conectamos herramientas, automatizamos procesos, incorporamos inteligencia artificial y desarrollamos nuevas soluciones cuando realmente hace falta.
          </p>

          <p className="text-[#09090b] text-sm sm:text-base font-semibold">
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
            className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f4b400] hover:bg-[#e0a400] text-[#09090b] font-extrabold text-base rounded-md shadow-md amber-glow-btn transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer font-['Hanken_Grotesk',sans-serif]"
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
