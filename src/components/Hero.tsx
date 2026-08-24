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
      
      {/* Background: Pearlescent Automotive Bodywork with Rich Synaptic AI Neural Network */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        
        {/* Automotive Grayish Satin Base Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#edf0f4] via-[#e4e7eb] to-[#dbe0e6]" />
        
        {/* Soft Ambient Synaptic Light Accents */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-white/45 blur-[90px] rounded-full" />
        <div className="absolute top-1/3 left-10 w-[380px] h-[380px] bg-[#f4b400]/12 blur-[100px] rounded-full animate-float-slow" />
        <div className="absolute top-1/3 right-10 w-[380px] h-[380px] bg-[#f4b400]/12 blur-[100px] rounded-full animate-float-reverse" />

        {/* Embedded High-Definition Vector Neural & Automation Network */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Fine Precision Grid */}
            <pattern id="precisionGrid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#09090b" strokeWidth="0.5" strokeOpacity="0.04" />
              <circle cx="48" cy="0" r="0.75" fill="#f4b400" fillOpacity="0.25" />
            </pattern>

            {/* Glowing Amber Synapse Gradients */}
            <linearGradient id="amberGlowH" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f4b400" stopOpacity="0" />
              <stop offset="20%" stopColor="#f4b400" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#e5a918" stopOpacity="1" />
              <stop offset="80%" stopColor="#f4b400" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#f4b400" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="amberSynapseLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f4b400" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#f4b400" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#d99b00" stopOpacity="0.35" />
            </linearGradient>

            <linearGradient id="amberSynapseRight" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f4b400" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#f4b400" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#d99b00" stopOpacity="0.35" />
            </linearGradient>

            <linearGradient id="techYellowVertical" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f4b400" stopOpacity="0" />
              <stop offset="30%" stopColor="#f4b400" stopOpacity="0.5" />
              <stop offset="70%" stopColor="#f4b400" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#f4b400" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Grid Layer */}
          <rect width="1920" height="1080" fill="url(#precisionGrid)" />

          {/* Left Wing: Synaptic AI Neural Cluster */}
          <g opacity="0.92">
            <path d="M 60 220 Q 200 280 280 420 T 420 540" fill="none" stroke="url(#amberSynapseLeft)" strokeWidth="1.6" />
            <path d="M 120 580 Q 240 500 280 420 T 360 260" fill="none" stroke="url(#amberSynapseLeft)" strokeWidth="1.2" strokeDasharray="8 6" />
            <path d="M 280 420 L 490 380 L 580 480" fill="none" stroke="#f4b400" strokeOpacity="0.45" strokeWidth="1.3" />
            <path d="M 280 420 Q 320 620 440 700" fill="none" stroke="#f4b400" strokeOpacity="0.5" strokeWidth="1.4" />
            <path d="M 180 340 L 280 420 L 220 560" fill="none" stroke="#09090b" strokeOpacity="0.1" strokeWidth="1" />

            <line x1="80" y1="180" x2="180" y2="340" stroke="#f4b400" strokeOpacity="0.4" strokeWidth="1" />
            <line x1="420" y1="540" x2="520" y2="660" stroke="#f4b400" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="490" y1="380" x2="620" y2="340" stroke="#f4b400" strokeOpacity="0.45" strokeWidth="1" />

            {/* Synaptic Core Left */}
            <circle cx="280" cy="420" r="14" fill="#f4b400" fillOpacity="0.25" />
            <circle cx="280" cy="420" r="6" fill="#f4b400" />
            <circle cx="280" cy="420" r="2.5" fill="#ffffff" />

            {/* Satellite Nodes */}
            <circle cx="180" cy="340" r="4.5" fill="#f4b400" />
            <circle cx="180" cy="340" r="1.5" fill="#ffffff" />
            <circle cx="420" cy="540" r="5" fill="#f4b400" />
            <circle cx="420" cy="540" r="2" fill="#ffffff" />
            <circle cx="360" cy="260" r="4" fill="#f4b400" />
            <circle cx="490" cy="380" r="4.5" fill="#f4b400" />
            <circle cx="580" cy="480" r="3.5" fill="#f4b400" />
            <circle cx="440" cy="700" r="4" fill="#f4b400" />
            <circle cx="220" cy="560" r="3" fill="#09090b" fillOpacity="0.3" />
            <circle cx="120" cy="580" r="3.5" fill="#f4b400" fillOpacity="0.8" />
            <circle cx="60" cy="220" r="3" fill="#f4b400" fillOpacity="0.8" />
            <circle cx="620" cy="340" r="3.5" fill="#f4b400" />
          </g>

          {/* Right Wing: Synaptic AI Neural Cluster */}
          <g opacity="0.92">
            <path d="M 1860 240 Q 1720 300 1640 460 T 1500 580" fill="none" stroke="url(#amberSynapseRight)" strokeWidth="1.6" />
            <path d="M 1800 620 Q 1680 520 1640 460 T 1560 280" fill="none" stroke="url(#amberSynapseRight)" strokeWidth="1.2" strokeDasharray="8 6" />
            <path d="M 1640 460 L 1430 420 L 1340 520" fill="none" stroke="#f4b400" strokeOpacity="0.45" strokeWidth="1.3" />
            <path d="M 1640 460 Q 1600 660 1480 740" fill="none" stroke="#f4b400" strokeOpacity="0.5" strokeWidth="1.4" />
            <path d="M 1740 380 L 1640 460 L 1700 600" fill="none" stroke="#09090b" strokeOpacity="0.1" strokeWidth="1" />

            <line x1="1840" y1="200" x2="1740" y2="380" stroke="#f4b400" strokeOpacity="0.4" strokeWidth="1" />
            <line x1="1500" y1="580" x2="1400" y2="700" stroke="#f4b400" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="1430" y1="420" x2="1300" y2="380" stroke="#f4b400" strokeOpacity="0.45" strokeWidth="1" />

            {/* Synaptic Core Right */}
            <circle cx="1640" cy="460" r="14" fill="#f4b400" fillOpacity="0.25" />
            <circle cx="1640" cy="460" r="6" fill="#f4b400" />
            <circle cx="1640" cy="460" r="2.5" fill="#ffffff" />

            {/* Satellite Nodes */}
            <circle cx="1740" cy="380" r="4.5" fill="#f4b400" />
            <circle cx="1740" cy="380" r="1.5" fill="#ffffff" />
            <circle cx="1500" cy="580" r="5" fill="#f4b400" />
            <circle cx="1500" cy="580" r="2" fill="#ffffff" />
            <circle cx="1560" cy="280" r="4" fill="#f4b400" />
            <circle cx="1430" cy="420" r="4.5" fill="#f4b400" />
            <circle cx="1340" cy="520" r="3.5" fill="#f4b400" />
            <circle cx="1480" cy="740" r="4" fill="#f4b400" />
            <circle cx="1700" cy="600" r="3" fill="#09090b" fillOpacity="0.3" />
            <circle cx="1800" cy="620" r="3.5" fill="#f4b400" fillOpacity="0.8" />
            <circle cx="1860" cy="240" r="3" fill="#f4b400" fillOpacity="0.8" />
            <circle cx="1300" cy="380" r="3.5" fill="#f4b400" />
          </g>

          {/* Horizontal Precision Horizon Lines & Telemetry */}
          <g>
            {/* Top Horizon Line */}
            <line x1="80" y1="130" x2="1840" y2="130" stroke="url(#amberGlowH)" strokeWidth="1.4" />
            <circle cx="280" cy="130" r="3" fill="#f4b400" />
            <circle cx="620" cy="130" r="2" fill="#f4b400" />
            <circle cx="960" cy="130" r="3" fill="#f4b400" />
            <circle cx="1300" cy="130" r="2" fill="#f4b400" />
            <circle cx="1640" cy="130" r="3" fill="#f4b400" />

            {/* Upper Circuit Bridge */}
            <path d="M 680 130 L 730 170 L 1210 170 L 1260 130" fill="none" stroke="url(#amberGlowH)" strokeWidth="1" strokeDasharray="6 4" />
            <circle cx="730" cy="170" r="2" fill="#f4b400" />
            <circle cx="1210" cy="170" r="2" fill="#f4b400" />

            {/* Bottom Horizon Line */}
            <line x1="120" y1="960" x2="1800" y2="960" stroke="url(#amberGlowH)" strokeWidth="1.8" />
            <line x1="120" y1="965" x2="480" y2="965" stroke="#f4b400" strokeWidth="1" strokeOpacity="0.5" />
            <line x1="1440" y1="965" x2="1800" y2="965" stroke="#f4b400" strokeWidth="1" strokeOpacity="0.5" />

            {/* Vertical Telemetry Coordinates */}
            <line x1="120" y1="190" x2="120" y2="900" stroke="#f4b400" strokeOpacity="0.25" strokeWidth="0.8" strokeDasharray="4 8" />
            <line x1="1800" y1="190" x2="1800" y2="900" stroke="#f4b400" strokeOpacity="0.25" strokeWidth="0.8" strokeDasharray="4 8" />

            {/* Corner Framing Precision Marks */}
            <path d="M 50 50 L 80 50 M 50 50 L 50 80" stroke="#f4b400" strokeWidth="1.4" strokeOpacity="0.8" />
            <path d="M 1870 50 L 1840 50 M 1870 50 L 1870 80" stroke="#f4b400" strokeWidth="1.4" strokeOpacity="0.8" />
            <path d="M 50 1030 L 80 1030 M 50 1030 L 50 1000" stroke="#f4b400" strokeWidth="1.4" strokeOpacity="0.8" />
            <path d="M 1870 1030 L 1840 1030 M 1870 1030 L 1870 1000" stroke="#f4b400" strokeWidth="1.4" strokeOpacity="0.8" />
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
          Creamos la solución tecnológica que tu empresa necesita.
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
              A veces, eso significa hacer <span className="relative inline-block text-[#09090b] underline decoration-[#f4b400] decoration-4 underline-offset-4">más inteligentes tus sistemas</span> sin reemplazarlos.
            </h2>
          </div>

          <p className="text-[#111827] text-base sm:text-lg font-semibold">
            Otras veces, significa desarrollar algo completamente nuevo.
          </p>

          <p className="text-[#272f3d] text-sm sm:text-base">
            Muchas veces la mejor solución no es empezar de cero, sino aprovechar mejor la inversión tecnológica existente, mejorarla y conectarla con nuevas capacidades.
          </p>

          <p className="text-[#272f3d] text-sm sm:text-base">
            Optimizamos sistemas existentes, conectamos herramientas, automatizamos procesos, incorporamos inteligencia artificial y desarrollamos nuevas soluciones cuando realmente hace falta.
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
