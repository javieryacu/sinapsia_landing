"use client";

import React from "react";
import {
  Copy,
  UserX,
  Network,
  Clock,
  Archive,
  AlertCircle,
  Sparkles,
  ArrowRight,
  HandMetal,
  Layers,
} from "lucide-react";

interface ProblemSectionProps {
  onOpenDiagnostic: () => void;
}

const PROBLEMS = [
  {
    title: "Información duplicada",
    desc: "Los mismos datos cargados en dos o tres lugares distintos, generando inconsistencias y retrabajo.",
    icon: Copy,
    tag: "Inconsistencia",
  },
  {
    title: "Tareas manuales",
    desc: "Horas del equipo desperdiciadas en copiar, pegar y transferir información de una pantalla a otra.",
    icon: Clock,
    tag: "Pérdida de tiempo",
  },
  {
    title: "Procesos que dependen de una persona",
    desc: "Cuellos de botella operativos si alguien no está disponible para ejecutar una tarea clave.",
    icon: UserX,
    tag: "Riesgo operativo",
  },
  {
    title: "Sistemas que no se comunican entre sí",
    desc: "Islas de software aisladas que obligan a trabajar con puentes manuales y planillas auxiliares.",
    icon: Network,
    tag: "Aislamiento",
  },
  {
    title: "Datos que no están disponibles cuando se necesitan",
    desc: "Reportes tardíos e informes desactualizados que impiden tomar decisiones estratégicas a tiempo.",
    icon: AlertCircle,
    tag: "Falta de visibilidad",
  },
  {
    title: "Herramientas que quedaron atrás",
    desc: "Sistemas heredados o interfaces lentas que frenan la productividad del negocio.",
    icon: Archive,
    tag: "Obsolescencia",
  },
];

export default function ProblemSection({ onOpenDiagnostic }: ProblemSectionProps) {
  return (
    <section id="problema" className="py-20 sm:py-28 bg-slate-50/70 border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-800 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#E5A918]" />
            <span>Diagnóstico de Situación</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-['Outfit',sans-serif]">
            ¿Tu empresa podría funcionar mejor?
          </h2>

          <div className="text-slate-600 text-base sm:text-lg leading-relaxed space-y-2">
            <p>
              Con el tiempo, las empresas incorporan sistemas, aplicaciones, planillas y herramientas
              que resuelven distintas necesidades.
            </p>
            <p className="font-semibold text-slate-800">
              El problema aparece cuando todo eso empieza a crecer por separado.
            </p>
          </div>
        </div>

        {/* 6 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {PROBLEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl hover:border-[#E5A918]/60 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-100 group-hover:bg-amber-100/70 text-slate-800 group-hover:text-slate-950 flex items-center justify-center transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 bg-slate-100/70 group-hover:bg-amber-50 group-hover:text-amber-900 px-2.5 py-1 rounded-md border border-slate-200/60 transition-colors">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-950 mb-2 font-['Outfit',sans-serif]">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>

                {/* Subtle bottom indicator */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 group-hover:text-slate-700 font-medium transition-colors">
                  <span>Solución aplicable con Sinapsia</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Takeaway Statement Banner */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border-2 border-slate-900 shadow-xl relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <p className="text-slate-600 text-sm sm:text-base font-medium">
              Muchas veces la tecnología ya existe.
            </p>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight font-['Outfit',sans-serif]">
              Lo que falta es{" "}
              <span className="underline decoration-[#E5A918] decoration-4 underline-offset-4">
                hacer que funcione mejor en conjunto.
              </span>
            </h3>
          </div>

          <button
            onClick={onOpenDiagnostic}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-[#E5A918] hover:bg-[#d4990d] text-slate-950 font-extrabold text-sm rounded-xl shadow-md transition transform hover:scale-105 cursor-pointer"
          >
            <span>Ver cómo resolverlo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
