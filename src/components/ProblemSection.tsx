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
} from "@phosphor-icons/react";

interface ProblemSectionProps {
  onOpenDiagnostic: () => void;
}

const PROBLEMS = [
  {
    title: "Información duplicada.",
    desc: "Datos cargados en distintos lugares, generando inconsistencias y retrabajo.",
    icon: Copy,
  },
  {
    title: "Tareas manuales.",
    desc: "Horas del equipo desperdiciadas en copiar, pegar y transferir información.",
    icon: Clock,
  },
  {
    title: "Procesos que dependen de una persona.",
    desc: "Cuellos de botella operativos si alguien no está disponible.",
    icon: UserCircleMinus,
  },
  {
    title: "Sistemas que no se comunican entre sí.",
    desc: "Islas de software aisladas que obligan a trabajar con puentes manuales.",
    icon: Plugs,
  },
  {
    title: "Datos que no están disponibles cuando se necesitan.",
    desc: "Reportes tardíos e informes desactualizados.",
    icon: WarningCircle,
  },
  {
    title: "Herramientas que quedaron atrás.",
    desc: "Sistemas heredados o interfaces lentas que frenan la productividad.",
    icon: ClockCounterClockwise,
  },
];

export default function ProblemSection({ onOpenDiagnostic }: ProblemSectionProps) {
  return (
    <section id="problema" className="py-20 sm:py-28 bg-[#f8f9fa] border-b border-gray-200 relative">
      <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#09090b] tracking-tight font-['Hanken_Grotesk',sans-serif]">
            ¿Tu empresa podría funcionar mejor?
          </h2>

          <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-2">
            <p>
              Con el tiempo, las empresas incorporan sistemas, aplicaciones, planillas y herramientas
              que resuelven distintas necesidades.
            </p>
            <p className="font-bold text-[#09090b]">
              El problema aparece cuando todo eso empieza a crecer por separado.
            </p>
          </div>
        </div>

        {/* 6 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {PROBLEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative bg-white p-6 sm:p-7 rounded-sm border border-gray-200 hover:border-[#09090b] transition-all duration-300 flex flex-col"
              >
                <div className="mb-4 text-[#09090b]">
                  <Icon weight="regular" className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#09090b] mb-2 font-['Hanken_Grotesk',sans-serif]">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Takeaway Statement Banner */}
        <div className="max-w-4xl mx-auto bg-[#09090b] rounded-sm p-8 sm:p-10 border border-gray-800 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-white">
            <p className="text-gray-400 text-sm sm:text-base font-medium">
              Muchas veces la tecnología ya existe.
            </p>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight font-['Hanken_Grotesk',sans-serif]">
              Lo que falta es{" "}
              <span className="text-[#f4b400]">
                hacer que funcione mejor en conjunto.
              </span>
            </h3>
          </div>

          <button
            onClick={onOpenDiagnostic}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-[#f4b400] hover:bg-[#d9a000] text-black font-bold uppercase tracking-wider text-sm rounded-sm transition cursor-pointer font-['Hanken_Grotesk',sans-serif]"
          >
            <span>Ver cómo resolverlo</span>
            <ArrowRight weight="bold" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
