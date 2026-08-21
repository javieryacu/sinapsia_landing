import React from "react";
import { MessageCircle, Globe } from "lucide-react";

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
        <span className="text-slate-900 tracking-tight text-xl sm:text-2xl font-black font-['Outfit',sans-serif]">
          SINAPS
        </span>
        <span className="text-[#E5A918] tracking-tight text-xl sm:text-2xl font-black font-['Outfit',sans-serif]">
          IA
        </span>
      </div>
    );
  }

  if (variant === "header") {
    return (
      <div className={`flex flex-col items-start ${className}`}>
        <div className="flex items-baseline font-black tracking-tight leading-none">
          <span className="text-slate-900 text-2xl sm:text-3xl font-black font-['Outfit',sans-serif] tracking-wider">
            SINAPS
          </span>
          <span className="text-[#E5A918] text-2xl sm:text-3xl font-black font-['Outfit',sans-serif] tracking-wider">
            IA
          </span>
        </div>
        <div className="text-[9px] sm:text-[10px] font-bold text-slate-800 tracking-[0.18em] uppercase mt-1">
          SOFTWARE <span className="text-slate-300 mx-0.5">|</span> IA <span className="text-slate-300 mx-0.5">|</span> AUTOMATIZACIÓN
        </div>
      </div>
    );
  }

  // Full vehicular replica
  return (
    <div className={`flex flex-col items-start select-none ${className}`}>
      {/* Brand Name */}
      <div className="flex items-baseline leading-none">
        <span className="text-slate-950 text-3xl sm:text-5xl font-black font-['Outfit',sans-serif] tracking-wider">
          SINAPS
        </span>
        <span className="text-[#E5A918] text-3xl sm:text-5xl font-black font-['Outfit',sans-serif] tracking-wider">
          IA
        </span>
      </div>

      {/* Slogan */}
      <div className="text-[11px] sm:text-[14px] font-bold text-slate-900 tracking-[0.22em] uppercase mt-1.5 sm:mt-2">
        SOFTWARE <span className="text-slate-400 mx-1">|</span> IA <span className="text-slate-400 mx-1">|</span> AUTOMATIZACIÓN
      </div>

      {/* Golden divider line */}
      <div className="w-full h-[2px] sm:h-[3px] bg-[#E5A918] my-2 sm:my-3 rounded-full" />

      {/* Contact Line */}
      {(showContact || variant === "full" || variant === "footer") && (
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-900 text-xs sm:text-sm font-semibold tracking-wide">
          <a
            href="https://wa.me/5493794552724?text=Hola%20Sinapsia,%20quisiera%20solicitar%20un%20diagn%C3%B3stico%20sin%20costo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-[#E5A918] transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600/10" />
            <span>3794 - 552724</span>
          </a>
          <span className="text-slate-300">|</span>
          <a
            href="https://sinapsia.com.ar"
            className="inline-flex items-center gap-1.5 hover:text-[#E5A918] transition-colors"
          >
            <Globe className="w-4 h-4 text-slate-700" />
            <span>sinapsia.com.ar</span>
          </a>
        </div>
      )}
    </div>
  );
}
