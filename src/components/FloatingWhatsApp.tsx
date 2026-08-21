"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappNumber = "5493794552724";
  const defaultMessage = encodeURIComponent(
    "Hola Sinapsia! Me gustaría solicitar un diagnóstico inicial sin costo para mi empresa."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-auto select-none">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="relative bg-white text-slate-900 px-4 py-2.5 rounded-2xl shadow-xl border border-slate-200 text-xs font-semibold flex items-center gap-2 max-w-[240px] animate-bounce-short">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-slate-600 p-0.5 rounded-full"
            aria-label="Cerrar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div>
            <div className="flex items-center gap-1.5 font-bold text-slate-950">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
              <span>¿Tenés dudas?</span>
            </div>
            <p className="text-[11px] text-slate-600 font-normal mt-0.5">
              Hablá directo con nuestro equipo: <span className="font-semibold text-slate-900">3794-552724</span>
            </p>
          </div>
          {/* Arrow */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-b border-r border-slate-200 rotate-45" />
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp al 3794552724"
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-600 border-2 border-white"></span>
        </span>
        <MessageCircle className="w-7 h-7 text-white fill-white/10" />
      </a>
    </div>
  );
}
