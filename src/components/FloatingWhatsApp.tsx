"use client";

import React from "react";
import { WhatsappLogo } from "@phosphor-icons/react";

export default function FloatingWhatsApp() {
  const whatsappNumber = "5493794552724";
  const defaultMessage = encodeURIComponent(
    "Hola Sinapsia! Me gustaría solicitar un diagnóstico inicial sin costo para mi empresa."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp al 3794552724"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
      >
        <WhatsappLogo weight="fill" className="w-8 h-8 text-white" />
      </a>
    </div>
  );
}
