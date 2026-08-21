"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  MessageCircle,
  Sparkles,
  Cpu,
  RefreshCw,
  Layers,
  Database,
  CheckCircle,
  Zap,
  ArrowUpRight,
  ShieldCheck,
  Bot,
} from "lucide-react";
import Logo from "./Logo";

interface HeroProps {
  onOpenDiagnostic: () => void;
}

export default function Hero({ onOpenDiagnostic }: HeroProps) {
  const [activeNode, setActiveNode] = useState<number>(0);

  const interactiveNodes = [
    {
      title: "Sistemas Existentes",
      subtitle: "ERP, CRM, Planillas, Web",
      icon: Database,
      badge: "Entrada de Datos",
      status: "Conectado",
      color: "border-slate-300 text-slate-800 bg-slate-50",
      description: "Aprovechamos lo que ya usás sin forzar cambios innecesarios.",
    },
    {
      title: "Flujos Automatizados",
      subtitle: "Eliminación de tareas repetitivas",
      icon: Zap,
      badge: "Automatización",
      status: "Activo 24/7",
      color: "border-[#E5A918] text-[#E5A918] bg-amber-50/50",
      description: "Sincronización instantánea entre herramientas sin intervención humana.",
    },
    {
      title: "Inteligencia Artificial",
      subtitle: "Análisis, Gestión y Asistencia",
      icon: Bot,
      badge: "Capacidad Inteligente",
      status: "Operativo",
      color: "border-amber-400 text-amber-600 bg-amber-50",
      description: "Modelos y lógica predictiva aplicados donde realmente generan impacto.",
    },
    {
      title: "Operación Inteligente",
      subtitle: "Información centralizada y ágil",
      icon: ShieldCheck,
      badge: "Resultado",
      status: "Optimizado",
      color: "border-emerald-400 text-emerald-700 bg-emerald-50",
      description: "Tu empresa funcionando con precisión, velocidad y una visión unificada.",
    },
  ];

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-white">
      {/* Background subtle grid & gradient glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-100/40 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Top Brand Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 border border-slate-200 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#E5A918] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-black tracking-widest text-slate-800 uppercase font-['Outfit',sans-serif]">
                SOFTWARE · IA · AUTOMATIZACIÓN
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black text-slate-950 tracking-tight leading-[1.12] font-['Outfit',sans-serif]">
              Mejoramos, automatizamos y hacemos{" "}
              <span className="relative inline-block text-slate-950">
                más inteligentes
                <span className="absolute bottom-1 left-0 right-0 h-2.5 bg-[#E5A918]/30 -z-10 rounded-xs" />
              </span>{" "}
              tus sistemas.
            </h1>

            {/* Main Descriptions */}
            <div className="space-y-3.5 text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              <p className="font-medium text-slate-800">
                Analizamos cómo funciona tu empresa, detectamos dónde la tecnología puede ayudarte a
                trabajar mejor y nos encargamos de implementar la solución adecuada.
              </p>
              <p className="text-slate-600 text-sm sm:text-base">
                Optimizamos sistemas existentes, conectamos herramientas, automatizamos procesos,
                incorporamos inteligencia artificial y desarrollamos nuevas soluciones cuando
                realmente hace falta.
              </p>
            </div>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenDiagnostic}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#E5A918] hover:bg-[#d4990d] text-slate-950 font-black text-sm sm:text-base rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Solicitar diagnóstico sin costo</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="https://wa.me/5493794552724?text=Hola%20Sinapsia!%20Quisiera%20solicitar%20un%20diagn%C3%B3stico%20sin%20costo%20para%20mi%20empresa."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 hover:border-slate-300 font-bold text-sm sm:text-base rounded-xl shadow-xs transition-all"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>3794 - 552724</span>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-600 font-medium border-t border-slate-100">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Sin costo inicial</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Sin compromiso de contratación</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Enfoque pragmático a medida</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Synapse Architecture Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-white rounded-3xl p-6 sm:p-7 shadow-xl border border-slate-200/90 overflow-hidden">
              {/* Top bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-[11px] font-bold text-slate-600 ml-2 font-mono">
                    sinapsia_ecosystem.core
                  </span>
                </div>
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 bg-amber-100 text-amber-900 rounded-md">
                  Arquitectura Sinapsia
                </span>
              </div>

              {/* Central flow illustration */}
              <div className="py-5 space-y-3">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Ecosistema Conectado:
                </p>

                <div className="space-y-2.5">
                  {interactiveNodes.map((node, index) => {
                    const IconComponent = node.icon;
                    const isActive = activeNode === index;

                    return (
                      <div
                        key={node.title}
                        onClick={() => setActiveNode(index)}
                        className={`p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                          isActive
                            ? "bg-amber-50/70 border-[#E5A918] shadow-md ring-1 ring-[#E5A918]/30 scale-[1.02]"
                            : "bg-slate-50/60 border-slate-200 hover:bg-slate-100/80 hover:border-slate-300"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                                isActive ? "bg-[#E5A918] text-slate-950" : "bg-white text-slate-700 border border-slate-200"
                              }`}
                            >
                              <IconComponent className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                                {node.title}
                                {isActive && (
                                  <span className="text-[10px] font-black px-1.5 py-0.2 bg-[#E5A918] text-slate-950 rounded">
                                    VER DETALLE
                                  </span>
                                )}
                              </div>
                              <div className="text-xs text-slate-500">{node.subtitle}</div>
                            </div>
                          </div>

                          <span className="text-[11px] font-mono font-bold text-slate-600 bg-white px-2 py-1 rounded-md border border-slate-200">
                            {node.status}
                          </span>
                        </div>

                        {isActive && (
                          <div className="mt-3 pt-2.5 border-t border-amber-200/60 text-xs text-slate-700 font-medium animate-in fade-in duration-150">
                            {node.description}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Card Summary */}
              <div className="mt-2 p-3 bg-slate-900 rounded-2xl text-white flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-bold font-['Outfit',sans-serif]">
                    ¿Listo para potenciar tu operación?
                  </span>
                </div>
                <button
                  onClick={onOpenDiagnostic}
                  className="text-xs font-black text-[#E5A918] hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Iniciar ahora</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
