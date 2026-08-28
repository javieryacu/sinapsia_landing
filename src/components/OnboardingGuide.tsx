"use client";

import { useState } from "react";
import {
  HelpCircle,
  X,
  Target,
  ArrowRight,
  Stethoscope,
  Kanban,
  Building2,
  Users,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  Compass,
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
        <span className="hidden sm:inline">Guía & Método Comercial</span>
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
                    Guía Rápida para el Equipo SinapsIA
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Metodología de ventas consultivas, etapas y buenas prácticas
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
                2. Las 7 Etapas del Pipeline
              </button>
              <button
                onClick={() => setActiveTab("terminos")}
                className={`py-3 px-4 text-xs font-bold border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === "terminos"
                    ? "border-[#f4b400] text-[#09090b]"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
              >
                3. Glosario & Regla de Oro
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 overflow-y-auto space-y-4 text-sm text-gray-700 leading-relaxed">
              {activeTab === "flujo" && (
                <div className="space-y-4">
                  <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-1">
                    <strong className="block font-bold text-sm">Objetivo Principal:</strong>
                    No vendemos software por catálogo. Detectamos problemas en la operación de las empresas y diseñamos la solución tecnológica adecuada.
                  </div>

                  <div className="space-y-3">
                    <div className="flex gap-3 items-start">
                      <div className="w-6 h-6 rounded-full bg-[#09090b] text-[#f4b400] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        1
                      </div>
                      <div>
                        <strong className="text-gray-900 block font-bold text-sm">Creá la Empresa y Contacto</strong>
                        <p className="text-xs text-gray-600 mt-0.5">
                          En el menú lateral andá a <strong>Empresas</strong> o <strong>Contactos</strong>. Anotá quién es el tomador de decisiones (*Decisor*).
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start">
                      <div className="w-6 h-6 rounded-full bg-[#09090b] text-[#f4b400] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        2
                      </div>
                      <div>
                        <strong className="text-gray-900 block font-bold text-sm">Abrí una Oportunidad en el Pipeline</strong>
                        <p className="text-xs text-gray-600 mt-0.5">
                          Andá al <strong>Pipeline Comercial</strong> → "Nueva Oportunidad". <strong>Lo más importante: completá el campo "¿Cuál es el problema del cliente?"</strong>. La metodología SinapsIA empieza siempre por el problema, no por la tecnología.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start">
                      <div className="w-6 h-6 rounded-full bg-[#09090b] text-[#f4b400] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        3
                      </div>
                      <div>
                        <strong className="text-gray-900 block font-bold text-sm">Registrá cada Interacción (Follow-up)</strong>
                        <p className="text-xs text-gray-600 mt-0.5">
                          Hacé clic en la tarjeta del prospecto para abrir el panel lateral y anotar los puntos tratados en llamadas o reuniones.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start">
                      <div className="w-6 h-6 rounded-full bg-[#09090b] text-[#f4b400] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        4
                      </div>
                      <div>
                        <strong className="text-gray-900 block font-bold text-sm">Avanzá las Etapas con las Flechas</strong>
                        <p className="text-xs text-gray-600 mt-0.5">
                          Usá las flechas ← → de la tarjeta para mover la oportunidad entre columnas. Al llegar a <strong>Ganado</strong>, la empresa se marca automáticamente como Cliente.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start">
                      <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        5
                      </div>
                      <div>
                        <strong className="text-gray-900 block font-bold text-sm">No termines en Ganado — seguí evolucionando</strong>
                        <p className="text-xs text-gray-600 mt-0.5">
                          Movelo a <strong>En Ejecución</strong> mientras implementás, y luego a <strong>Cliente Activo</strong> para gestionar la relación continua y detectar nuevas oportunidades.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "etapas" && (
                <div className="space-y-2.5">
                  <p className="text-xs text-gray-500 font-medium">El objetivo en cada etapa es avanzar al siguiente escalón. La relación no termina en Ganado.</p>
                  <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg text-xs">
                    <strong className="text-gray-900 font-bold block mb-0.5">1. Prospección:</strong>
                    Empresa identificada con problemas tecnológicos potenciales. Aún no hemos hecho contacto. <em>Objetivo: iniciar una conversación.</em>
                  </div>
                  <div className="p-3 bg-blue-50/60 border border-blue-200 rounded-lg text-xs">
                    <strong className="text-blue-900 font-bold block mb-0.5">2. Conversación:</strong>
                    Primer contacto realizado (cálido o frío). Estamos escuchando a la empresa. <em>Objetivo: descubrir si hay un problema relevante.</em>
                  </div>
                  <div className="p-3 bg-indigo-50/60 border border-indigo-200 rounded-lg text-xs">
                    <strong className="text-indigo-900 font-bold block mb-0.5">3. Calificación:</strong>
                    Validamos que el problema tiene impacto real y que hay voluntad de resolverlo. <em>Objetivo: conseguir el diagnóstico.</em>
                  </div>
                  <div className="p-3 bg-[#f4b400]/10 border border-[#f4b400]/40 rounded-lg text-xs">
                    <strong className="text-gray-900 font-bold block mb-0.5">★ 4. Diagnóstico (Puerta de Entrada):</strong>
                    Relevamiento sin costo: entendemos cómo opera la empresa, qué sistemas usa y qué oportunidades existen. <em>Objetivo: identificar oportunidades concretas.</em>
                  </div>
                  <div className="p-3 bg-purple-50/60 border border-purple-200 rounded-lg text-xs">
                    <strong className="text-purple-900 font-bold block mb-0.5">5. Propuesta:</strong>
                    Enviamos solución técnica con alcance y presupuesto, basada en el diagnóstico. <em>Objetivo: convertir la oportunidad en proyecto.</em>
                  </div>
                  <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-lg text-xs">
                    <strong className="text-emerald-900 font-bold block mb-0.5">6. Ganado ✓:</strong>
                    El cliente aceptó. Pasa a ser cliente oficial de SinapsIA. <em>La empresa queda marcada automáticamente como "Cliente".</em>
                  </div>
                  <div className="p-3 bg-teal-50 border border-teal-300 rounded-lg text-xs">
                    <strong className="text-teal-900 font-bold block mb-0.5">7. En Ejecución:</strong>
                    Implementación en curso — el equipo está entregando la solución. <em>Objetivo: generar resultado y confianza.</em>
                  </div>
                  <div className="p-3 bg-sky-50 border border-sky-300 rounded-lg text-xs">
                    <strong className="text-sky-900 font-bold block mb-0.5">8. Cliente Activo (Recurrente):</strong>
                    Proyecto terminado, relación continua. SinapsIA sigue identificando nuevas oportunidades. <em>Objetivo: evolución constante.</em>
                  </div>
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs">
                    <strong className="text-red-900 font-bold block mb-0.5">9. Perdido:</strong>
                    No había presupuesto, no era viable técnicamente o se postergó. Puede reactivarse a futuro.
                  </div>
                </div>
              )}

              {activeTab === "terminos" && (
                <div className="space-y-4">
                  <div className="bg-[#09090b] text-white p-4 rounded-xl text-center">
                    <span className="text-[#f4b400] font-bold text-xs uppercase block mb-1">Principio Rector</span>
                    <p className="text-sm font-semibold">
                      "Aprovechamos los sistemas que ya tenés. Desarrollamos los que te faltan."
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                      <strong className="text-gray-900 block font-bold mb-1">Decisor:</strong>
                      Persona con autoridad para autorizar presupuestos y cambios (Dueño, Director, Gerente General).
                    </div>
                    <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                      <strong className="text-gray-900 block font-bold mb-1">Pipeline Value:</strong>
                      Suma total en dólares de todas las oportunidades abiertas en negociación.
                    </div>
                    <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                      <strong className="text-gray-900 block font-bold mb-1">Win Rate (%):</strong>
                      Porcentaje de propuestas ganadas sobre el total de cierres (Ganados vs Perdidos).
                    </div>
                    <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                      <strong className="text-gray-900 block font-bold mb-1">Manual Interno:</strong>
                      Podés consultar en cualquier momento la pestaña **"Manual / Playbook"** para leer los guiones y preguntas clave.
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
