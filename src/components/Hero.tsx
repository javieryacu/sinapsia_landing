"use client";

import React from "react";
import { ArrowRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";

interface HeroProps {
  onOpenDiagnostic: () => void;
}

export default function Hero({ onOpenDiagnostic }: HeroProps) {
  return (
    <section className="relative pt-28 pb-16 sm:pt-34 sm:pb-24 bg-[#e8ebef] border-b border-gray-300 overflow-hidden">
      
      {/* Background: Satin Metallic Automotive Finish with Clean Horizontal Architecture Lines */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        
        {/* Soft Automotive Grayish Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#edf0f4] via-[#e4e7eb] to-[#dbe0e6]" />
        
        {/* Center Specular Ambient Light (Keeps center bright & legible) */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-white/50 blur-[90px] rounded-full" />

        {/* Embedded High-Precision Horizontal Tech Architecture */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Precision Micro Grid */}
            <pattern id="precisionGrid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#09090b" strokeWidth="0.5" strokeOpacity="0.035" />
              <circle cx="48" cy="0" r="0.7" fill="#f4b400" fillOpacity="0.2" />
            </pattern>

            {/* Glowing Horizontal Bus Gradients */}
            <linearGradient id="hBusFull" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f4b400" stopOpacity="0" />
              <stop offset="15%" stopColor="#f4b400" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#e5a918" stopOpacity="0.95" />
              <stop offset="85%" stopColor="#f4b400" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#f4b400" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="hBusLeft" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f4b400" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#f4b400" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#f4b400" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="hBusRight" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#f4b400" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#f4b400" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#f4b400" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Grid Layer */}
          <rect width="1920" height="1080" fill="url(#precisionGrid)" />

          {/* Clean Horizontal Stepped Engineering Lines */}
          <g>
            {/* Top Horizon Line */}
            <line x1="80" y1="110" x2="1840" y2="110" stroke="url(#hBusFull)" strokeWidth="1.2" />
            <line x1="240" y1="114" x2="560" y2="114" stroke="#f4b400" strokeWidth="0.75" strokeOpacity="0.4" />
            <line x1="1360" y1="114" x2="1680" y2="114" stroke="#f4b400" strokeWidth="0.75" strokeOpacity="0.4" />
            <circle cx="240" cy="110" r="2.5" fill="#f4b400" />
            <circle cx="960" cy="110" r="2.5" fill="#f4b400" />
            <circle cx="1680" cy="110" r="2.5" fill="#f4b400" />

            {/* Left Side Horizontal Bus Lines (Cleanly terminates before center text) */}
            <path d="M 0 260 L 300 260 L 350 310 L 460 310" fill="none" stroke="url(#hBusLeft)" strokeWidth="1.3" />
            <circle cx="300" cy="260" r="2.5" fill="#f4b400" />
            <circle cx="460" cy="310" r="3" fill="#f4b400" />
            <line x1="60" y1="256" x2="260" y2="256" stroke="#f4b400" strokeWidth="0.75" strokeOpacity="0.3" strokeDasharray="4 6" />

            <path d="M 0 440 L 240 440 L 290 390 L 410 390" fill="none" stroke="url(#hBusLeft)" strokeWidth="1.2" strokeDasharray="6 4" />
            <circle cx="240" cy="440" r="2.5" fill="#f4b400" />
            <circle cx="410" cy="390" r="2.5" fill="#f4b400" />

            <path d="M 0 620 L 270 620 L 330 680 L 440 680" fill="none" stroke="url(#hBusLeft)" strokeWidth="1.3" />
            <circle cx="270" cy="620" r="2.5" fill="#f4b400" />
            <circle cx="440" cy="680" r="3" fill="#f4b400" />

            {/* Right Side Horizontal Bus Lines (Cleanly terminates before center text) */}
            <path d="M 1920 260 L 1620 260 L 1570 310 L 1460 310" fill="none" stroke="url(#hBusRight)" strokeWidth="1.3" />
            <circle cx="1620" cy="260" r="2.5" fill="#f4b400" />
            <circle cx="1460" cy="310" r="3" fill="#f4b400" />
            <line x1="1860" y1="256" x2="1660" y2="256" stroke="#f4b400" strokeWidth="0.75" strokeOpacity="0.3" strokeDasharray="4 6" />

            <path d="M 1920 440 L 1680 440 L 1630 390 L 1510 390" fill="none" stroke="url(#hBusRight)" strokeWidth="1.2" strokeDasharray="6 4" />
            <circle cx="1680" cy="440" r="2.5" fill="#f4b400" />
            <circle cx="1510" cy="390" r="2.5" fill="#f4b400" />

            <path d="M 1920 620 L 1650 620 L 1590 680 L 1480 680" fill="none" stroke="url(#hBusRight)" strokeWidth="1.3" />
            <circle cx="1650" cy="620" r="2.5" fill="#f4b400" />
            <circle cx="1480" cy="680" r="3" fill="#f4b400" />

            {/* Bottom Horizon Divider */}
            <line x1="100" y1="960" x2="1820" y2="960" stroke="url(#hBusFull)" strokeWidth="1.6" />
            <line x1="100" y1="965" x2="420" y2="965" stroke="#f4b400" strokeWidth="0.8" strokeOpacity="0.45" />
            <line x1="1500" y1="965" x2="1820" y2="965" stroke="#f4b400" strokeWidth="0.8" strokeOpacity="0.45" />
            <circle cx="420" cy="960" r="2.5" fill="#f4b400" />
            <circle cx="1500" cy="960" r="2.5" fill="#f4b400" />

            {/* Precision Corner Framing Marks */}
            <path d="M 40 40 L 70 40 M 40 40 L 40 70" stroke="#f4b400" strokeWidth="1.4" strokeOpacity="0.75" />
            <path d="M 1880 40 L 1850 40 M 1880 40 L 1880 70" stroke="#f4b400" strokeWidth="1.4" strokeOpacity="0.75" />
            <path d="M 40 1040 L 70 1040 M 40 1040 L 40 1010" stroke="#f4b400" strokeWidth="1.4" strokeOpacity="0.75" />
            <path d="M 1880 1040 L 1850 1040 M 1880 1040 L 1880 1010" stroke="#f4b400" strokeWidth="1.4" strokeOpacity="0.75" />
          </g>
        </svg>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Brand Slogan */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/95 border border-gray-300 shadow-2xs text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider mb-6"
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
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#09090b] tracking-tight leading-[1.15] mb-6 font-['Hanken_Grotesk',sans-serif]"
        >
          Creamos la solución tecnológica que tu empresa necesita.
        </motion.h1>

        {/* Sequence Content with Exact Copy & Balanced Spacing */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4 text-[#111827] text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-8 text-center"
        >
          <p className="font-semibold text-[#09090b]">
            Analizamos cómo funciona tu empresa, detectamos dónde la tecnología puede ayudarte a trabajar mejor y nos encargamos de implementar la solución adecuada.
          </p>

          {/* Integrated Statement */}
          <div className="py-1">
            <h2 className="text-xl sm:text-2xl font-black text-[#09090b] tracking-tight font-['Hanken_Grotesk',sans-serif]">
              A veces, eso significa hacer <span className="relative inline-block text-[#09090b] underline decoration-[#f4b400] decoration-4 underline-offset-4">más inteligentes tus sistemas</span> sin reemplazarlos.
            </h2>
          </div>

          <p className="text-[#111827] font-semibold">
            Otras veces, significa desarrollar algo completamente nuevo.
          </p>

          <p className="text-[#272f3d] text-xs sm:text-sm">
            Muchas veces la mejor solución no es empezar de cero, sino aprovechar mejor la inversión tecnológica existente, mejorarla y conectarla con nuevas capacidades.
          </p>

          <p className="text-[#272f3d] text-xs sm:text-sm">
            Optimizamos sistemas existentes, conectamos herramientas, automatizamos procesos, incorporamos inteligencia artificial y desarrollamos nuevas soluciones cuando realmente hace falta.
          </p>
        </motion.div>

        {/* Dynamic CTA Button with Shimmer & Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex justify-center"
        >
          <button
            onClick={onOpenDiagnostic}
            className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#f4b400] hover:bg-[#e0a400] text-[#09090b] font-extrabold text-sm sm:text-base rounded-md shadow-md amber-glow-btn transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer font-['Hanken_Grotesk',sans-serif]"
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
