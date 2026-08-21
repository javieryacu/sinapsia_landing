"use client";

import React, { useState } from "react";
import { WhatsappLogo, X } from "@phosphor-icons/react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappNumber = "5493794552724";
  const defaultMessage = encodeURIComponent(
    "Hola Sinapsia! Me gustaría solicitar un diagnóstico inicial sin costo para mi empresa."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto select-none">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="relative bg-white text-[#09090b] px-4 py-3 rounded-sm shadow-md border border-gray-200 text-xs font-medium flex items-center gap-3 max-w-[240px] animate-bounce-short">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-gray-400 hover:text-gray-800 p-0.5 transition-colors"
          >
            <X weight="bold" className="w-4 h-4" />
          </button>
          <div>
            <div className="font-bold text-[#09090b] uppercase tracking-wider text-[10px] mb-1 font-['Hanken_Grotesk',sans-serif]">
              Soporte Directo
            </div>
            <p className="text-xs text-gray-600">
              Consultá con nuestro equipo técnico ahora.
            </p>
          </div>
          {/* Arrow */}
          <div className="absolute -bottom-1.5 right-7 w-3 h-3 bg-white border-b border-r border-gray-200 rotate-45" />
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp al 3794552724"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1ebd5a] text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        <WhatsappLogo weight="fill" className="w-8 h-8 text-white" />
      </a>
    </div>
  );
}
