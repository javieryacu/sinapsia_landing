import React from "react";
import { ChatCircle, Globe } from "@phosphor-icons/react";

interface LogoProps {
  variant?: "full" | "header" | "footer" | "compact";
  className?: string;
  showContact?: boolean;
}

export default function Logo({
  variant = "header",
  className = "",
  showContact = false,
}: LogoProps) {
  if (variant === "compact") {
    return (
      <div className={`inline-flex items-baseline font-extrabold tracking-tight ${className}`}>
        <span className="text-[#09090b] tracking-tight text-xl sm:text-2xl font-black font-['Hanken_Grotesk',sans-serif]">
          SINAPS
        </span>
        <span className="text-[#f4b400] tracking-tight text-xl sm:text-2xl font-black font-['Hanken_Grotesk',sans-serif]">
          IA
        </span>
      </div>
    );
  }

  if (variant === "header") {
    return (
      <div className={`flex flex-col items-start ${className}`}>
        <div className="flex items-baseline font-black tracking-tight leading-none">
          <span className="text-[#09090b] text-2xl sm:text-3xl font-black font-['Hanken_Grotesk',sans-serif] tracking-wider">
            SINAPS
          </span>
          <span className="text-[#f4b400] text-2xl sm:text-3xl font-black font-['Hanken_Grotesk',sans-serif] tracking-wider">
            IA
          </span>
        </div>
        <div className="text-[10px] sm:text-[11px] font-bold text-[#09090b] tracking-[0.18em] uppercase mt-1">
          SOFTWARE <span className="text-gray-300 mx-0.5">|</span> IA <span className="text-gray-300 mx-0.5">|</span> AUTOMATIZACIÓN
        </div>
      </div>
    );
  }

  // Full vehicular replica
  return (
    <div className={`flex flex-col items-start select-none ${className}`}>
      {/* Brand Name */}
      <div className="flex items-baseline leading-none">
        <span className="text-[#09090b] text-3xl sm:text-5xl font-black font-['Hanken_Grotesk',sans-serif] tracking-wider">
          SINAPS
        </span>
        <span className="text-[#f4b400] text-3xl sm:text-5xl font-black font-['Hanken_Grotesk',sans-serif] tracking-wider">
          IA
        </span>
      </div>

      {/* Slogan */}
      <div className="text-[11px] sm:text-[14px] font-bold text-[#09090b] tracking-[0.22em] uppercase mt-1.5 sm:mt-2">
        SOFTWARE <span className="text-gray-400 mx-1">|</span> IA <span className="text-gray-400 mx-1">|</span> AUTOMATIZACIÓN
      </div>

      {/* Golden divider line */}
      <div className="w-full h-[2px] sm:h-[3px] bg-[#f4b400] my-2 sm:my-3 rounded-none" />

      {/* Contact Line */}
      {(showContact || variant === "full" || variant === "footer") && (
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[#09090b] text-xs sm:text-sm font-semibold tracking-wide">
          <a
            href="https://wa.me/5493794552724?text=Hola%20Sinapsia,%20quisiera%20solicitar%20un%20diagn%C3%B3stico%20sin%20costo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-[#f4b400] transition-colors"
          >
            <ChatCircle weight="bold" className="w-4 h-4 text-emerald-600" />
            <span>3794 - 552724</span>
          </a>
          <span className="text-gray-300">|</span>
          <a
            href="https://sinapsia.com.ar"
            className="inline-flex items-center gap-1.5 hover:text-[#f4b400] transition-colors"
          >
            <Globe weight="bold" className="w-4 h-4 text-[#09090b]" />
            <span>sinapsia.com.ar</span>
          </a>
        </div>
      )}
    </div>
  );
}
