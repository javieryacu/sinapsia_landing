"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Lightning,
  Cpu,
  ArrowsClockwise,
  CheckCircle,
  Database,
  ChartBar,
  ShieldCheck,
} from "@phosphor-icons/react";

interface HeroProps {
  onOpenDiagnostic: () => void;
}

export default function Hero({ onOpenDiagnostic }: HeroProps) {
  const [activeMetric, setActiveMetric] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden bg-[#f8f9fa] border-b border-gray-200">
      {/* Precision Industrial Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70 pointer-events-none" />
      
      {/* Ambient subtle light glow in SinapsIA yellow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#f4b400]/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Subtle corner crosshairs for engineering aesthetics */}
      <div className="hidden lg:block absolute top-28 left-8 text-gray-300 font-mono text-xs select-none">
        + SYS_READY
      </div>
      <div className="hidden lg:block absolute top-28 right-8 text-gray-300 font-mono text-xs select-none">
        + LATENCY: 0ms
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Authoritative Copy & Direct Action */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Technical Header Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-sm bg-white border border-gray-200/90 shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f4b400] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#f4b400]" />
              </span>
              <span className="text-[11px] sm:text-xs font-black tracking-widest text-[#09090b] uppercase font-['Hanken_Grotesk',sans-serif]">
                SOFTWARE · IA · AUTOMATIZACIÓN
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-[#09090b] tracking-tight leading-[1.12] font-['Hanken_Grotesk',sans-serif]">
              Mejoramos, automatizamos y hacemos{" "}
              <span className="relative inline-block text-[#09090b]">
                más inteligentes
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-[#f4b400]/40 -z-10 rounded-xs" />
              </span>{" "}
              tus sistemas.
            </h1>

            {/* Main Descriptions (Exact Copy) */}
            <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed max-w-2xl border-l-2 border-gray-300 pl-4">
              <p className="font-semibold text-[#09090b]">
                Analizamos cómo funciona tu empresa, detectamos dónde la tecnología puede ayudarte a
                trabajar mejor y nos encargamos de implementar la solución adecuada.
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                Optimizamos sistemas existentes, conectamos herramientas, automatizamos procesos,
                incorporamos inteligencia artificial y desarrollamos nuevas soluciones cuando
                realmente hace falta.
              </p>
            </div>

            {/* Call to Action & Guarantees */}
            <div className="pt-2 space-y-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onOpenDiagnostic}
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f4b400] hover:bg-[#d9a000] text-black font-extrabold text-sm sm:text-base uppercase tracking-wider rounded-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer font-['Hanken_Grotesk',sans-serif]"
                >
                  <Lightning weight="fill" className="w-5 h-5 text-black group-hover:scale-110 transition-transform" />
                  <span>Solicitar diagnóstico sin costo</span>
                  <ArrowRight weight="bold" className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Trust Indicators */}
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
            </div>
          </div>

          {/* Right Column: Industrial Intelligence Visual Console (Aesthetic & Eye-Catching) */}
          <div className="lg:col-span-5">
            <div className="relative bg-white rounded-sm border border-gray-300/90 shadow-xl overflow-hidden">
              
              {/* Console Top Bar */}
              <div className="bg-[#09090b] px-4 py-3 text-white flex items-center justify-between border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#f4b400]" />
                  <span className="text-[11px] font-mono font-bold tracking-wider text-gray-300">
                    SINAPSIA_ENGINE // LIVE
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-gray-400">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Console Body: Technical Schematic Display */}
              <div className="p-6 bg-[#f8f9fa] space-y-5">
                
                {/* Circuit Flow Animation */}
                <div className="p-4 bg-white rounded-sm border border-gray-200 shadow-xs space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono font-semibold text-gray-500 border-b border-gray-100 pb-2">
                    <span>SYSTEM_PIPELINE</span>
                    <span className="text-[#f4b400] font-bold">OPTIMIZED</span>
                  </div>

                  {/* Flow Blocks */}
                  <div className="space-y-2.5">
                    {/* Node 1 */}
                    <div className="flex items-center justify-between p-2.5 bg-[#f8f9fa] rounded-sm border border-gray-200">
                      <div className="flex items-center gap-2.5">
                        <Database weight="duotone" className="w-4 h-4 text-[#09090b]" />
                        <span className="text-xs font-bold font-['Hanken_Grotesk',sans-serif] text-[#09090b]">
                          Herramientas & Sistemas
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-gray-200 text-gray-800 rounded-sm">
                        RELEVADO
                      </span>
                    </div>

                    {/* Node 2 */}
                    <div className="flex items-center justify-between p-2.5 bg-amber-50/60 rounded-sm border border-[#f4b400]/40">
                      <div className="flex items-center gap-2.5">
                        <ArrowsClockwise weight="bold" className="w-4 h-4 text-[#f4b400] animate-spin" style={{ animationDuration: "6s" }} />
                        <span className="text-xs font-bold font-['Hanken_Grotesk',sans-serif] text-[#09090b]">
                          Flujos Automatizados
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-[#f4b400] text-black rounded-sm">
                        ACTIVO
                      </span>
                    </div>

                    {/* Node 3 */}
                    <div className="flex items-center justify-between p-2.5 bg-[#f8f9fa] rounded-sm border border-gray-200">
                      <div className="flex items-center gap-2.5">
                        <Cpu weight="duotone" className="w-4 h-4 text-[#09090b]" />
                        <span className="text-xs font-bold font-['Hanken_Grotesk',sans-serif] text-[#09090b]">
                          Inteligencia Artificial
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-gray-200 text-gray-800 rounded-sm">
                        INTEGRADO
                      </span>
                    </div>
                  </div>
                </div>

                {/* Live Performance Telemetry Strip */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-3 bg-white border border-gray-200 rounded-sm">
                    <div className="text-[10px] font-mono uppercase text-gray-500">Eficiencia</div>
                    <div className="text-base font-black text-[#09090b] font-['Hanken_Grotesk',sans-serif] mt-0.5">
                      +100%
                    </div>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-sm">
                    <div className="text-[10px] font-mono uppercase text-gray-500">Manual</div>
                    <div className="text-base font-black text-[#f4b400] font-['Hanken_Grotesk',sans-serif] mt-0.5">
                      0 hrs
                    </div>
                  </div>
                  <div className="p-3 bg-white border border-gray-200 rounded-sm">
                    <div className="text-[10px] font-mono uppercase text-gray-500">Control</div>
                    <div className="text-base font-black text-emerald-600 font-['Hanken_Grotesk',sans-serif] mt-0.5">
                      Total
                    </div>
                  </div>
                </div>

                {/* Bottom Action Hint */}
                <div className="pt-1 text-center">
                  <button
                    onClick={onOpenDiagnostic}
                    className="w-full py-2.5 px-4 bg-[#09090b] hover:bg-gray-800 text-white font-bold text-xs uppercase tracking-wider rounded-sm transition flex items-center justify-center gap-2 cursor-pointer font-['Hanken_Grotesk',sans-serif]"
                  >
                    <span>Comenzar diagnóstico de tu empresa</span>
                    <ArrowRight weight="bold" className="w-3.5 h-3.5 text-[#f4b400]" />
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
