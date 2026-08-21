"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

const FAQS = [
  {
    question: "¿Qué incluye el diagnóstico?",
    answer:
      "Un relevamiento inicial de tus procesos, sistemas y principales dificultades para identificar oportunidades concretas de mejora.",
  },
  {
    question: "¿Tiene algún costo?",
    answer:
      "No. El diagnóstico inicial es sin costo y no implica ningún compromiso de contratación.",
  },
  {
    question: "¿Necesito cambiar mis sistemas actuales?",
    answer:
      "No necesariamente. Primero analizamos lo que ya utilizás y evaluamos si conviene mejorarlo, integrarlo, automatizarlo o reemplazarlo.",
  },
  {
    question: "¿La solución siempre incluye inteligencia artificial?",
    answer:
      "No. La IA es una herramienta más dentro de las alternativas disponibles. La utilizamos cuando realmente aporta valor.",
  },
  {
    question: "¿Pueden trabajar sobre sistemas desarrollados por terceros?",
    answer:
      "Sí. Analizamos el ecosistema tecnológico existente y evaluamos las posibilidades de integración, mejora o evolución.",
  },
  {
    question: "¿Qué pasa después del diagnóstico?",
    answer:
      "Presentamos las oportunidades detectadas, las priorizamos y, cuando corresponde, elaboramos una propuesta concreta de implementación.",
  },
  {
    question: "¿Pueden seguir trabajando después de implementar la solución?",
    answer:
      "Sí. Podemos acompañar la evolución tecnológica de tu empresa con soporte, mantenimiento, mejoras, automatizaciones, integraciones y nuevos desarrollos.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-slate-50/80 border-t border-slate-200 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-800 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#E5A918]" />
            <span>Resolvé tus dudas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-['Outfit',sans-serif]">
            Preguntas frecuentes
          </h2>

          <p className="text-slate-600 text-base">
            Todo lo que necesitás saber sobre cómo trabajamos y cómo iniciamos el proceso.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.question}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? "border-[#E5A918] shadow-md" : "border-slate-200 shadow-xs hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-slate-950 text-base sm:text-lg cursor-pointer"
                >
                  <span className="font-['Outfit',sans-serif]">{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#E5A918] text-slate-950" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 p-6 bg-white rounded-2xl border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-900">¿Tenés otra consulta específica?</h4>
            <p className="text-xs text-slate-600">Escribinos por WhatsApp y te asesoramos de inmediato.</p>
          </div>
          <a
            href="https://wa.me/5493794552724?text=Hola%20Sinapsia!%20Tengo%20una%20consulta%20adicional."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs transition"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Consultar al 3794 - 552724</span>
          </a>
        </div>
      </div>
    </section>
  );
}
