"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Database,
  Lightning,
  Brain,
  CheckCircle,
  ArrowsClockwise,
  ShieldCheck,
  Cpu,
  Sparkle,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";

interface HeroProps {
  onOpenDiagnostic: () => void;
}

export default function Hero({ onOpenDiagnostic }: HeroProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const ecosystemLayers = [
    {
      title: "Sistemas Existentes",
      subtitle: "Herramientas que tu empresa ya utiliza",
      icon: Database,
      tag: "Entrada",
      status: "Relevado",
      desc: "Aprovechamos lo que ya funciona sin forzar cambios innecesarios.",
    },
    {
      title: "Automatización & IA",
      subtitle: "Flujos desatendidos y modelos inteligentes",
      icon: Brain,
      tag: "Motor SinapsIA",
      status: "Activo 24/7",
      desc: "Conexión de herramientas y eliminación de procesos manuales.",
    },
    {
      title: "Operación Inteligente",
      subtitle: "Visión unificada y datos en tiempo real",
      icon: ShieldCheck,
      tag: "Resultado",
      status: "Optimizado",
      desc: "Tu empresa funcionando mejor, más rápido y en conjunto.",
    },
  ];

  return (
    <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-28 bg-[#fbfbfc] border-b border-gray-200/80 overflow-hidden">
      {/* Background Neural Grid & Subtle Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#f4b400]/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-gray-200/40 blur-[100px] rounded-full" />
        
        {/* Subtle geometric dot grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(#09090b 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Authoritative Copy & Sequence */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Slogan Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-xs text-xs font-bold text-gray-900 uppercase tracking-wider"
            >
              <span className="w-2 h-2 rounded-full bg-[#f4b400] animate-pulse" />
              <span>Software</span>
              <span className="text-gray-300">·</span>
              <span>IA</span>
              <span className="text-gray-300">·</span>
              <span>Automatización</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-[50px] font-black text-gray-950 tracking-tight leading-[1.12] font-['Hanken_Grotesk',sans-serif]"
            >
              Mejoramos, automatizamos y hacemos{" "}
              <span className="relative inline-block text-gray-950">
                más inteligentes
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-[#f4b400]/40 -z-10 rounded-xs" />
              </span>{" "}
              tus sistemas.
            </motion.h1>

            {/* Exact Copy Sequence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed"
            >
              <p className="font-semibold text-gray-950">
                Analizamos cómo funciona tu empresa, detectamos dónde la tecnología puede ayudarte a trabajar mejor y nos encargamos de implementar la solución adecuada.
              </p>

              {/* Integrated Statement Highlight Box */}
              <div className="p-4 sm:p-5 bg-white border-l-4 border-[#f4b400] border-y border-r border-gray-200/80 rounded-r-md shadow-xs space-y-1">
                <h2 className="text-xl sm:text-2xl font-black text-gray-950 tracking-tight font-['Hanken_Grotesk',sans-serif]">
                  No reemplazamos tus sistemas. Los hacemos más inteligentes.
                </h2>
                <p className="text-sm sm:text-base text-gray-600 font-medium">
                  Antes de recomendar un reemplazo, analizamos lo que ya tenés.
                </p>
              </div>

              <p className="text-gray-600 text-sm sm:text-base">
                Muchas veces la mejor solución no es empezar de cero, sino aprovechar mejor la inversión tecnológica existente, mejorarla y conectarla con nuevas capacidades.
              </p>

              <p className="text-gray-600 text-sm sm:text-base">
                Optimizamos sistemas existentes, conectamos herramientas, automatizamos procesos, incorporamos inteligencia artificial y desarrollamos nuevas soluciones cuando realmente hace falta.
              </p>

              <p className="text-gray-900 text-sm sm:text-base font-semibold">
                Y cuando reemplazar o desarrollar algo nuevo realmente tiene sentido, también lo hacemos.
              </p>
            </motion.div>

            {/* CTA Button & Trust Badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-2 space-y-3"
            >
              <button
                onClick={onOpenDiagnostic}
                className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f4b400] hover:bg-[#e0a400] text-gray-950 font-extrabold text-base rounded-md shadow-md amber-glow-btn transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer font-['Hanken_Grotesk',sans-serif]"
              >
                <span className="absolute top-0 left-0 w-1/2 h-full bg-white/30 skew-x-12 animate-shimmer pointer-events-none" />
                <span className="relative z-10">Solicitar diagnóstico sin costo</span>
                <ArrowRight weight="bold" className="w-5 h-5 relative z-10 group-hover:translate-x-1.5 transition-transform duration-200" />
              </button>

              <div className="flex flex-wrap items-center gap-5 text-xs text-gray-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle weight="fill" className="w-4 h-4 text-[#f4b400]" />
                  Relevamiento inicial sin costo
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle weight="fill" className="w-4 h-4 text-[#f4b400]" />
                  Sin compromiso de contratación
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Interactive Dynamic Visual Hub */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-5"
          >
            <div className="relative bg-white rounded-lg border border-gray-200 shadow-xl overflow-hidden">
              
              {/* Header Bar */}
              <div className="bg-gray-950 px-5 py-3.5 text-white flex items-center justify-between border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#f4b400] animate-pulse" />
                  <span className="text-xs font-bold tracking-wider font-['Hanken_Grotesk',sans-serif] uppercase">
                    Ecosistema SinapsIA
                  </span>
                </div>
                <span className="text-[11px] font-mono font-semibold px-2 py-0.5 bg-gray-800 text-gray-300 rounded">
                  EN OPERACIÓN
                </span>
              </div>

              {/* Central Flow Cards */}
              <div className="p-6 bg-[#f9fafb] space-y-4">
                
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider font-['Hanken_Grotesk',sans-serif]">
                  Cómo conectamos tu tecnología:
                </div>

                <div className="space-y-3">
                  {ecosystemLayers.map((layer, index) => {
                    const IconComponent = layer.icon;
                    const isActive = activeTab === index;

                    return (
                      <div
                        key={layer.title}
                        onClick={() => setActiveTab(index)}
                        className={`p-4 rounded-md border transition-all duration-200 cursor-pointer ${
                          isActive
                            ? "bg-white border-[#f4b400] shadow-md ring-2 ring-[#f4b400]/20 scale-[1.02]"
                            : "bg-white/80 border-gray-200 hover:border-gray-300 hover:bg-white"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-9 h-9 rounded-md flex items-center justify-center shrink-0 ${
                                isActive
                                  ? "bg-[#f4b400] text-gray-950"
                                  : "bg-gray-100 text-gray-700"
                              }`}
                            >
                              <IconComponent weight="duotone" className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-gray-950 font-['Hanken_Grotesk',sans-serif]">
                                {layer.title}
                              </div>
                              <div className="text-xs text-gray-500">{layer.subtitle}</div>
                            </div>
                          </div>

                          <span className="text-[10px] font-bold uppercase px-2 py-0.5 bg-gray-100 text-gray-700 rounded border border-gray-200">
                            {layer.status}
                          </span>
                        </div>

                        {isActive && (
                          <div className="mt-3 pt-2.5 border-t border-amber-100 text-xs text-gray-700 font-medium animate-in fade-in duration-150">
                            {layer.desc}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Interactive Trigger Banner */}
                <div className="pt-2">
                  <button
                    onClick={onOpenDiagnostic}
                    className="w-full p-3 bg-gray-950 hover:bg-gray-900 text-white rounded-md text-xs font-bold uppercase tracking-wider flex items-center justify-between transition cursor-pointer font-['Hanken_Grotesk',sans-serif]"
                  >
                    <span>Comenzar diagnóstico de tu empresa</span>
                    <ArrowRight weight="bold" className="w-4 h-4 text-[#f4b400]" />
                  </button>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
