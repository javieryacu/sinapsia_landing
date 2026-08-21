"use client";

import React from "react";
import {
  Copy,
  Clock,
  UserCircleMinus,
  Plugs,
  WarningCircle,
  ClockCounterClockwise,
  ArrowRight,
  Warning,
} from "@phosphor-icons/react";

interface ProblemSectionProps {
  onOpenDiagnostic: () => void;
}

const PROBLEMS = [
  {
    code: "ERR_01",
    title: "Información duplicada.",
    desc: "Los mismos datos cargados en dos o tres lugares distintos, generando inconsistencias y retrabajo.",
    icon: Copy,
  },
  {
    code: "ERR_02",
    title: "Tareas manuales.",
    desc: "Horas del equipo desperdiciadas en copiar, pegar y transferir información de una pantalla a otra.",
    icon: Clock,
  },
  {
    code: "ERR_03",
    title: "Procesos que dependen de una persona.",
    desc: "Cuellos de botella operativos si alguien no está disponible para ejecutar una tarea clave.",
    icon: UserCircleMinus,
  },
  {
    code: "ERR_04",
    title: "Sistemas que no se comunican entre sí.",
    desc: "Islas de software aisladas que obligan a trabajar con puentes manuales y planillas auxiliares.",
    icon: Plugs,
  },
  {
    code: "ERR_05",
    title: "Datos que no están disponibles cuando se necesitan.",
    desc: "Reportes tardíos e informes desactualizados que impiden tomar decisiones estratégicas a tiempo.",
    icon: WarningCircle,
  },
  {
    code: "ERR_06",
    title: "Herramientas que quedaron atrás.",
    desc: "Sistemas heredados o interfaces lentas que frenan la productividad del negocio.",
    icon: ClockCounterClockwise,
  },
];

export default function ProblemSection({ onOpenDiagnostic }: ProblemSectionProps) {
  return (
    <section id="problema" className="py-24 sm:py-32 bg-[#f8f9fa] border-b border-gray-200 relative">
      <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 text-[11px] font-mono font-bold uppercase tracking-wider text-gray-700 rounded-sm">
            <span className="w-2 h-2 rounded-full bg-[#f4b400]" />
            <span>DIAGNÓSTICO OPERATIVO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#09090b] tracking-tight font-['Hanken_Grotesk',sans-serif]">
            ¿Tu empresa podría funcionar mejor?
          </h2>

          <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-2 max-w-2xl mx-auto">
            <p>
              Con el tiempo, las empresas incorporan sistemas, aplicaciones, planillas y herramientas
              que resuelven distintas necesidades.
            </p>
            <p className="font-bold text-[#09090b]">
              El problema aparece cuando todo eso empieza a crecer por separado.
            </p>
          </div>
        </div>

        {/* 6 Problem Matrix Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {PROBLEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.code}
                className="group relative bg-white p-7 sm:p-8 rounded-sm border border-gray-200 hover:border-[#09090b] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-[#f8f9fa] group-hover:bg-amber-50 rounded-sm text-[#09090b] group-hover:text-[#09090b] border border-gray-100 transition-colors">
                      <Icon weight="duotone" className="w-6 h-6 text-[#09090b]" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-gray-400 group-hover:text-[#f4b400] transition-colors">
                      // {item.code}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-[#09090b] mb-3 font-['Hanken_Grotesk',sans-serif]">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-gray-400 group-hover:text-[#09090b] transition-colors font-['Hanken_Grotesk',sans-serif]">
                  <span className="uppercase tracking-wider">Punto a optimizar</span>
                  <ArrowRight weight="bold" className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform text-[#f4b400]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Takeaway Statement Banner */}
        <div className="max-w-4xl mx-auto bg-[#09090b] rounded-sm p-8 sm:p-12 border border-gray-800 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          
          <div className="space-y-2 text-white">
            <p className="text-gray-400 text-sm sm:text-base font-medium">
              Muchas veces la tecnología ya existe.
            </p>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight font-['Hanken_Grotesk',sans-serif] leading-tight">
              Lo que falta es{" "}
              <span className="text-[#f4b400] underline decoration-[#f4b400] decoration-2 underline-offset-8">
                hacer que funcione mejor en conjunto.
              </span>
            </h3>
          </div>

          <button
            onClick={onOpenDiagnostic}
            className="shrink-0 inline-flex items-center gap-2.5 px-8 py-4 bg-[#f4b400] hover:bg-[#d9a000] text-black font-extrabold uppercase tracking-wider text-sm rounded-sm shadow-md transition transform hover:scale-105 cursor-pointer font-['Hanken_Grotesk',sans-serif]"
          >
            <span>Ver cómo resolverlo</span>
            <ArrowRight weight="bold" className="w-4 h-4 text-black" />
          </button>
        </div>

      </div>
    </section>
  );
}
