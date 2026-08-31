"use client";

import { useState } from "react";
import {
  X,
  Sparkles,
  ChevronRight,
  Compass,
  FolderGit2,
  CheckCircle2,
  Layers,
  DollarSign,
} from "lucide-react";
import Link from "next/link";

export function OnboardingGuide() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"flujo" | "etapas" | "terminos">("flujo");

  return (
    <>
      {/* Trigger Button (Fixed floating button on bottom right for mobile and desktop) */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 z-40 bg-[#09090b] hover:bg-[#f4b400] text-white hover:text-[#09090b] p-3 sm:px-4 sm:py-2.5 rounded-full sm:rounded-xl shadow-2xl border border-neutral-700 flex items-center gap-2 font-bold text-xs transition-all transform hover:scale-105 cursor-pointer font-['Hanken_Grotesk',sans-serif]"
      >
        <Compass className="w-5 h-5 text-[#f4b400] sm:w-4 sm:h-4 group-hover:text-[#09090b]" />
        <span className="hidden sm:inline">Guía & Proceso SinapsIA</span>
      </button>

      {/* Modal Guide */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 font-['Hanken_Grotesk',sans-serif]">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] shadow-2xl border border-gray-100 flex flex-col overflow-hidden">
            {/* Header */}
            <div className="p-5 border-b border-gray-100 flex justify-between items-start bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#f4b400]/20 rounded-xl text-[#09090b]">
                  <Sparkles className="w-5 h-5 text-[#f4b400]" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-gray-900 leading-tight">
                    Guía Operativa & Comercial SinapsIA
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Proceso de ventas consultivas, desarrollo ágil por fases y cobranzas 30/40/30
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-gray-400 hover:text-gray-900 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Tabs */}
            <div className="flex border-b border-gray-200 px-5 bg-white shrink-0 overflow-x-auto">
              <button
                onClick={() => setActiveTab("flujo")}
                className={`py-3 px-4 text-xs font-bold border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === "flujo"
                    ? "border-[#f4b400] text-[#09090b]"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
              >
                1. ¿Cómo empezar? (Paso a Paso)
              </button>
              <button
                onClick={() => setActiveTab("etapas")}
                className={`py-3 px-4 text-xs font-bold border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === "etapas"
                    ? "border-[#f4b400] text-[#09090b]"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
              >
                2. Embudo (7 Etapas) & Proyectos
              </button>
              <button
                onClick={() => setActiveTab("terminos")}
                className={`py-3 px-4 text-xs font-bold border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === "terminos"
                    ? "border-[#f4b400] text-[#09090b]"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
              >
                3. Cobros (30/40/30) & Reglas
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 overflow-y-auto space-y-4 text-sm text-gray-700 leading-relaxed">
              {activeTab === "flujo" && (
                <div className="space-y-4">
                  <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-1">
                    <strong className="block font-bold text-sm">Principio Fundamental:</strong>
                    Nunca empezamos por la tecnología, empezamos por el dolor o cuello de botella de la empresa.
                  </div>

                  <div className="space-y-3">
                    <div className="flex gap-3 items-start">
                      <div className="w-6 h-6 rounded-full bg-[#09090b] text-[#f4b400] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        1
                      </div>
                      <div>
                        <strong className="text-gray-900 block font-bold text-sm">Identificá y cargá la Empresa</strong>
                        <p className="text-xs text-gray-600 mt-0.5">
                          En el menú lateral andá a <strong>Empresas</strong> o <strong>Contactos</strong>. Anotá rubro, localidad y quién toma decisiones.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start">
                      <div className="w-6 h-6 rounded-full bg-[#09090b] text-[#f4b400] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        2
                      </div>
                      <div>
                        <strong className="text-gray-900 block font-bold text-sm">Abrí la Oportunidad en el Pipeline</strong>
                        <p className="text-xs text-gray-600 mt-0.5">
                          Andá a <strong>Pipeline Comercial</strong> → "Nueva Oportunidad". Describí claramente el problema operativo y el tipo de solución preliminar.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start">
                      <div className="w-6 h-6 rounded-full bg-[#09090b] text-[#f4b400] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        3
                      </div>
                      <div>
                        <strong className="text-gray-900 block font-bold text-sm">Hacé el Diagnóstico y Presentá Propuesta (30/40/30)</strong>
                        <p className="text-xs text-gray-600 mt-0.5">
                          Relevá cómo operan y enviá la propuesta comercial con esquema de cobros en 3 hitos (30% adelanto, 40% pre-producción, 30% validación final).
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start">
                      <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        4
                      </div>
                      <div>
                        <strong className="text-gray-900 block font-bold text-sm">Cierre → Traspaso a Proyectos & Cobros</strong>
                        <p className="text-xs text-gray-600 mt-0.5">
                          Al mover la oportunidad a <strong>Ganado</strong>, el sistema te permite iniciar el proyecto ágil en <strong>Proyectos & Cobros</strong>, donde gestionarás los sprints, el QA del cliente y los pagos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "etapas" && (
                <div className="space-y-2.5">
                  <p className="text-xs text-gray-500 font-medium">El embudo de ventas conduce al cierre; luego el desarrollo opera por sprints ágiles:</p>

                  <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg text-xs">
                    <strong className="text-gray-900 font-bold block mb-0.5">1. Prospecto:</strong>
                    Empresa identificada con problemas potenciales. Aún sin contacto.
                  </div>
                  <div className="p-3 bg-blue-50/60 border border-blue-200 rounded-lg text-xs">
                    <strong className="text-blue-900 font-bold block mb-0.5">2. Contacto:</strong>
                    Primer acercamiento realizado (visita presencial o mensaje de WhatsApp).
                  </div>
                  <div className="p-3 bg-indigo-50/60 border border-indigo-200 rounded-lg text-xs">
                    <strong className="text-indigo-900 font-bold block mb-0.5">3. Conversación:</strong>
                    Escuchando a la empresa para validar si existe un problema con impacto real.
                  </div>
                  <div className="p-3 bg-[#f4b400]/10 border border-[#f4b400]/40 rounded-lg text-xs">
                    <strong className="text-gray-900 font-bold block mb-0.5">★ 4. Diagnóstico (Puerta de Entrada):</strong>
                    Relevamiento sin costo de sus sistemas y procesos para detectar oportunidades.
                  </div>
                  <div className="p-3 bg-purple-50/60 border border-purple-200 rounded-lg text-xs">
                    <strong className="text-purple-900 font-bold block mb-0.5">5. Propuesta:</strong>
                    Enviamos la solución técnica y cotización estructurada en 30/40/30.
                  </div>
                  <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-lg text-xs">
                    <strong className="text-emerald-900 font-bold block mb-0.5">6. Ganado ✓:</strong>
                    El cliente aceptó → Gatilla la creación del Proyecto en <em>Proyectos & Cobros</em>.
                  </div>
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs">
                    <strong className="text-red-900 font-bold block mb-0.5">7. Perdido:</strong>
                    Sin presupuesto o postergado.
                  </div>
                </div>
              )}

              {activeTab === "terminos" && (
                <div className="space-y-4">
                  <div className="bg-[#09090b] text-white p-4 rounded-xl text-center">
                    <span className="text-[#f4b400] font-bold text-xs uppercase block mb-1">Estructura Estándar de Cobros</span>
                    <p className="text-sm font-semibold">
                      30% Adelanto (Inicio) → 40% Pre-Producción (Testing) → 30% Cierre (Aprobación)
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                      <strong className="text-gray-900 block font-bold mb-1">Fases Ágiles:</strong>
                      Cada sprint pasa por: <em>Análisis Profundo → Desarrollo → QA SinapsIA → QA Cliente → Listo</em>.
                    </div>
                    <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                      <strong className="text-gray-900 block font-bold mb-1">QA del Cliente:</strong>
                      Desarrollo iterativo asistido por IA donde el cliente valida avances continuos.
                    </div>
                    <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                      <strong className="text-gray-900 block font-bold mb-1">Features Post-Venta:</strong>
                      Nuevos pedidos después del cierre se cargan en <em>Evolución</em> y se cobran al 100% contra entrega.
                    </div>
                    <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                      <strong className="text-gray-900 block font-bold mb-1">Proyectos Paralelos:</strong>
                      Si surge una necesidad grande en un cliente existente, se abre un nuevo proyecto independiente.
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Action */}
            <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-between items-center text-xs">
              <Link
                href="/dashboard/playbook"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-[#09090b] font-bold flex items-center gap-1"
              >
                <span>Ver Playbook Comercial Completo</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-[#09090b] hover:bg-[#f4b400] text-white hover:text-[#09090b] font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
