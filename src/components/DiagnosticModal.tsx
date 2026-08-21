"use client";

import React, { useState } from "react";
import { X, CheckCircle, ArrowRight, WhatsappLogo } from "@phosphor-icons/react";
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

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#f4b400", "#09090b", "#ffffff"],
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div
        className="relative w-full max-w-2xl bg-white rounded-sm shadow-2xl border border-gray-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-[#09090b] hover:bg-gray-100 rounded-sm transition-colors"
        >
          <X weight="bold" className="w-5 h-5" />
        </button>

        <div className="p-8 sm:p-10 max-h-[85vh] overflow-y-auto">
          {!submitted ? (
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#09090b] tracking-tight mb-2 font-['Hanken_Grotesk',sans-serif]">
                Descubrí cómo potenciar tus sistemas
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-8">
                Completá los siguientes datos. Analizaremos tu situación para mostrarte
                dónde existe una oportunidad concreta de mejora, sin costo ni compromiso.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2 font-['Hanken_Grotesk',sans-serif]">
                      Tu Nombre / Contacto *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: Martín Gómez"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-[#09090b] focus:ring-1 focus:ring-[#09090b] text-[#09090b] text-sm outline-none transition bg-[#f8f9fa] focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2 font-['Hanken_Grotesk',sans-serif]">
                      Empresa / Rubro
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: Consultora / Distribuidora"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-[#09090b] focus:ring-1 focus:ring-[#09090b] text-[#09090b] text-sm outline-none transition bg-[#f8f9fa] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-3 font-['Hanken_Grotesk',sans-serif]">
                    ¿Qué área te interesa evaluar?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {NEED_OPTIONS.map((option) => {
                      const isChecked = selectedNeeds.includes(option);
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => toggleNeed(option)}
                          className={`flex items-start gap-3 p-3 text-left rounded-sm border text-sm font-medium transition ${
                            isChecked
                              ? "bg-[#09090b] border-[#09090b] text-white"
                              : "bg-[#f8f9fa] border-gray-200 text-gray-700 hover:border-gray-400"
                          }`}
                        >
                          <div
                            className={`w-4 h-4 mt-0.5 rounded-sm flex items-center justify-center shrink-0 border ${
                              isChecked
                                ? "bg-[#f4b400] border-[#f4b400] text-[#09090b]"
                                : "border-gray-300 bg-white"
                            }`}
                          >
                            {isChecked && <CheckCircle weight="fill" className="w-4 h-4" />}
                          </div>
                          <span>{option}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2 font-['Hanken_Grotesk',sans-serif]">
                    Detalles adicionales (opcional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ej: Usamos Excel y un sistema contable pero no se comunican..."
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-[#09090b] focus:ring-1 focus:ring-[#09090b] text-[#09090b] text-sm outline-none transition resize-none bg-[#f8f9fa] focus:bg-white"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#f4b400] hover:bg-[#d9a000] text-[#09090b] font-bold uppercase tracking-wider text-sm rounded-sm transition cursor-pointer font-['Hanken_Grotesk',sans-serif]"
                  >
                    <span>Enviar a WhatsApp</span>
                    <ArrowRight weight="bold" className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="py-12 text-center space-y-6">
              <div className="w-20 h-20 bg-[#f8f9fa] border border-gray-200 rounded-sm flex items-center justify-center mx-auto">
                <WhatsappLogo weight="regular" className="w-10 h-10 text-[#09090b]" />
              </div>
              <h4 className="text-3xl font-black text-[#09090b] font-['Hanken_Grotesk',sans-serif]">
                ¡Redirigiendo a WhatsApp!
              </h4>
              <p className="text-gray-600 text-base max-w-md mx-auto">
                Estamos abriendo tu WhatsApp para conectar directamente con nuestro equipo técnico.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
