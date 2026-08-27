"use client";

import { Plus } from "lucide-react";

interface HeaderProps {
  title: string;
  subtitle?: string;
  onNewAction?: () => void;
  newActionLabel?: string;
}

export function Header({
  title,
  subtitle,
  onNewAction,
  newActionLabel,
}: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-4 sm:px-8 py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sticky top-0 z-20 font-['Hanken_Grotesk',sans-serif]">
      <div>
        <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">{title}</h1>
        {subtitle && <p className="text-xs text-gray-500 mt-0.5 leading-tight">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-3 shrink-0">
        {onNewAction && newActionLabel && (
          <button
            onClick={onNewAction}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#f4b400] hover:bg-[#e0a400] text-[#09090b] font-bold text-xs sm:text-sm px-3.5 py-2 rounded-lg shadow-sm transition-all transform active:scale-95 cursor-pointer"
          >
            <Plus className="w-4 h-4 stroke-[3]" />
            <span>{newActionLabel}</span>
          </button>
        )}
      </div>
    </header>
  );
}
