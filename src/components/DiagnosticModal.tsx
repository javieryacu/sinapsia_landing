"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ArrowRight, MessageSquare, Send, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NEED_OPTIONS = [
  "Optimizar sistemas existentes",
  "Automatizar tareas repetitivas / procesos manuales",
  "Conectar e integrar herramientas que no se comunican",
  "Incorporar Inteligencia Artificial",
  "Desarrollar una solución o software a medida",
  "No estoy seguro, necesito un análisis general",
];

export default function DiagnosticModal({ isOpen, onClose }: DiagnosticModalProps) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleNeed = (need: string) => {
    setSelectedNeeds((prev) =>
      prev.includes(need) ? prev.filter((item) => item !== need) : [...prev, need]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger celebration confetti
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#E5A918", "#0F172A", "#F59E0B", "#10B981"],
    });

    const needsText =
      selectedNeeds.length > 0 ? selectedNeeds.join(", ") : "Revisión general de sistemas";

    const text = `Hola Sinapsia! Quiero solicitar un Diagnóstico Inicial Sin Costo.\n\n*Nombre:* ${name || "No especificado"}\n*Empresa:* ${company || "No especificada"}\n*Interés / Necesidad:* ${needsText}\n*Detalles adicionales:* ${details || "Sin detalles adicionales"}`;

    const whatsappUrl = `https://wa.me/5493794552724?text=${encodeURIComponent(text)}`;

    setSubmitted(true);

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header decoration */}
        <div className="h-2 bg-gradient-to-r from-slate-900 via-[#E5A918] to-slate-900" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
          {!submitted ? (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E5A918] mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Diagnóstico Inicial 100% Sin Costo</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-2">
                Descubrí cómo potenciar tus sistemas
              </h3>
              <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
                Completá los siguientes datos rápidos. Analizaremos tu situación para mostrarte
                dónde existe una oportunidad concreta de mejora, sin ningún compromiso.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                      Tu Nombre / Contacto *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: Martín Gómez"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#E5A918] focus:ring-2 focus:ring-[#E5A918]/20 text-slate-900 text-sm outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                      Empresa / Rubro
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: Distribuidora / Consultora"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#E5A918] focus:ring-2 focus:ring-[#E5A918]/20 text-slate-900 text-sm outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    ¿Qué área o desafío te interesa evaluar? (Podés marcar varias)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {NEED_OPTIONS.map((option) => {
                      const isChecked = selectedNeeds.includes(option);
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => toggleNeed(option)}
                          className={`flex items-start gap-2.5 p-2.5 text-left rounded-xl border text-xs font-medium transition ${
                            isChecked
                              ? "bg-amber-50/80 border-[#E5A918] text-slate-950 font-semibold shadow-xs"
                              : "bg-slate-50/70 border-slate-200/80 text-slate-700 hover:bg-slate-100/70"
                          }`}
                        >
                          <div
                            className={`w-4 h-4 mt-0.5 rounded flex items-center justify-center shrink-0 border ${
                              isChecked
                                ? "bg-[#E5A918] border-[#E5A918] text-slate-950"
                                : "border-slate-300 bg-white"
                            }`}
                          >
                            {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                          </div>
                          <span>{option}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Breve descripción de tus herramientas o dificultad actual (opcional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ej: Usamos Excel y un software contable pero no se comunican, perdemos tiempo cargando pedidos a mano..."
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#E5A918] focus:ring-2 focus:ring-[#E5A918]/20 text-slate-900 text-sm outline-none transition resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
                  <div className="text-xs text-slate-500 text-center sm:text-left">
                    🔒 Sin costo ni compromiso. Respuesta directa de nuestro equipo.
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#E5A918] hover:bg-[#d4990d] text-slate-950 font-extrabold text-sm rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  >
                    <span>Enviar y Conectar por WhatsApp</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-amber-100 text-[#E5A918] rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8 text-[#E5A918]" />
              </div>
              <h4 className="text-2xl font-extrabold text-slate-950">¡Solicitud recibida!</h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Te estamos redirigiendo a WhatsApp (<strong>3794 - 552724</strong>) para coordinar
                el diagnóstico con nuestro equipo técnico.
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm rounded-xl transition"
                >
                  Cerrar
                </button>
                <a
                  href={`https://wa.me/5493794552724?text=${encodeURIComponent(
                    `Hola Sinapsia! Soy ${name || "un cliente"}, solicito diagnóstico sin costo.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E5A918] text-slate-950 font-bold text-sm rounded-xl shadow transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Abrir WhatsApp Ahora</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
