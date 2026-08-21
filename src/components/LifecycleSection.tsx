"use client";

import React from "react";
import {
  LifeBuoy,
  Zap,
  Network,
  Wrench,
  PlusCircle,
  Bot,
  Code2,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

interface LifecycleSectionProps {
  onOpenDiagnostic: () => void;
}

const CONTINUOUS_SERVICES = [
  { label: "Soporte y mantenimiento", icon: LifeBuoy, desc: "Monitoreo preventivo y respuesta rápida." },
  { label: "Nuevas automatizaciones", icon: Zap, desc: "Agregado continuo de flujos desatendidos." },
  { label: "Integraciones", icon: Network, desc: "Nuevos conectores y sincronización de herramientas." },
  { label: "Mejoras de sistemas", icon: Wrench, desc: "Optimización de velocidad y usabilidad." },
  { label: "Nuevas funcionalidades", icon: PlusCircle, desc: "Módulos adaptados al crecimiento del negocio." },
  { label: "Incorporación de IA", icon: Bot, desc: "Nuevos modelos y agentes automatizados." },
  { label: "Nuevos desarrollos", icon: Code2, desc: "Software a medida para nuevas líneas de negocio." },
];

export default function LifecycleSection({ onOpenDiagnostic }: LifecycleSectionProps) {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-800 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#E5A918]" />
            <span>Acompañamiento Continuo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-['Outfit',sans-serif]">
            De un problema concreto a una mejora permanente.
          </h2>

          <div className="text-slate-600 text-base sm:text-lg leading-relaxed space-y-2">
            <p>Nuestro trabajo no termina cuando una solución entra en producción.</p>
            <p>A medida que la empresa cambia, aparecen nuevas oportunidades.</p>
            <p className="font-semibold text-slate-900">
              Por eso podemos acompañarte de forma continua con:
            </p>
          </div>
        </div>

        {/* Continuous Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-14">
          {CONTINUOUS_SERVICES.map((item, idx) => {
            const Icon = item.icon;
            const isLast = idx === CONTINUOUS_SERVICES.length - 1;

            return (
              <div
                key={item.label}
                className={`p-6 rounded-2xl border border-slate-200/90 bg-slate-50/70 hover:bg-white hover:border-[#E5A918] hover:shadow-lg transition-all duration-200 flex flex-col justify-between ${
                  isLast ? "sm:col-span-2 lg:col-span-2 bg-amber-50/40 border-amber-200/80" : ""
                }`}
              >
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-950 shrink-0 shadow-xs">
                    <Icon className="w-5 h-5 text-[#E5A918]" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-950 font-['Outfit',sans-serif]">
                    {item.label}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 font-medium">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Closing Tagline */}
        <div className="text-center bg-slate-100/80 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto border border-slate-200">
          <p className="text-xl sm:text-2xl font-black text-slate-950 font-['Outfit',sans-serif]">
            “Tu tecnología evoluciona junto con tu empresa.”
          </p>
        </div>
      </div>
    </section>
  );
}
