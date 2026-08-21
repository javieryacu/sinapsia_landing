"use client";

import React, { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";

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
    <section id="faq" className="py-20 sm:py-28 bg-[#f8f9fa] border-b border-gray-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#09090b] tracking-tight font-['Hanken_Grotesk',sans-serif]">
            Preguntas frecuentes
          </h2>
        </div>

        {/* Accordion List */}
        <div className="border-t border-gray-200">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="border-b border-gray-200 bg-white"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-[#09090b] text-base sm:text-lg cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <span className="font-['Hanken_Grotesk',sans-serif]">{faq.question}</span>
                  <div className={`transition-transform duration-200 ${isOpen ? "rotate-180 text-[#f4b400]" : "text-gray-400"}`}>
                    <CaretDown weight="bold" className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-gray-600 text-base leading-relaxed bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
