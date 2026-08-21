"use client";

import React, { useState } from "react";
import { X, ArrowRight, WhatsappLogo } from "@phosphor-icons/react";
import confetti from "canvas-confetti";

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DiagnosticModal({ isOpen, onClose }: DiagnosticModalProps) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    confetti({
      particleCount: 60,
      spread: 50,
      origin: { y: 0.6 },
      colors: ["#f4b400", "#111827", "#ffffff"],
    });

    const text = `Hola Sinapsia! Quiero solicitar un Diagnóstico Inicial Sin Costo.\n\n*Nombre:* ${name || "No especificado"}\n*Empresa:* ${company || "No especificada"}\n*Mensaje:* ${details || "Sin detalles adicionales"}`;

    const whatsappUrl = `https://wa.me/5493794552724?text=${encodeURIComponent(text)}`;

    setSubmitted(true);

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div
        className="relative w-full max-w-lg bg-white rounded-md shadow-xl border border-gray-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-md transition"
          aria-label="Cerrar modal"
        >
          <X weight="bold" className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {!submitted ? (
            <div>
              <h3 className="text-2xl font-black text-gray-950 tracking-tight mb-2 font-['Hanken_Grotesk',sans-serif]">
                Solicitar diagnóstico sin costo
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Completá los datos y te responderemos para coordinar el diagnóstico inicial sin costo ni compromiso.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1.5 font-['Hanken_Grotesk',sans-serif]">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-md border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 text-gray-900 text-sm outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1.5 font-['Hanken_Grotesk',sans-serif]">
                    Empresa
                  </label>
                  <input
                    type="text"
                    placeholder="Nombre de tu empresa"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-md border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 text-gray-900 text-sm outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1.5 font-['Hanken_Grotesk',sans-serif]">
                    ¿En qué podemos ayudarte? (Opcional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Contanos brevemente qué herramientas o procesos utilizás..."
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-md border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 text-gray-900 text-sm outline-none transition resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#f4b400] hover:bg-[#e0a400] text-gray-950 font-bold text-sm rounded-md transition cursor-pointer font-['Hanken_Grotesk',sans-serif]"
                  >
                    <span>Enviar a WhatsApp (3794-552724)</span>
                    <ArrowRight weight="bold" className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <WhatsappLogo weight="fill" className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-950 font-['Hanken_Grotesk',sans-serif]">
                Redirigiendo a WhatsApp...
              </h4>
              <p className="text-gray-600 text-sm">
                En breves momentos se abrirá la conversación con nuestro equipo.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
