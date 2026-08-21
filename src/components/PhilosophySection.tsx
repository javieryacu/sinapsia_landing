"use client";

import React from "react";

const PHILOSOPHY_POINTS = [
  "A veces alcanza con mejorar una herramienta que ya utilizás.",
  "Otras veces, conectar dos sistemas.",
  "En otros casos, automatizar una tarea repetitiva.",
  "Y cuando realmente hace falta, desarrollamos una solución nueva.",
];

export default function PhilosophySection() {
  return (
    <section id="criterio" className="py-20 sm:py-28 bg-[#f9fafb] border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight font-['Hanken_Grotesk',sans-serif] mb-4">
          No todo problema necesita un sistema nuevo.
        </h2>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl font-bold text-gray-700 font-['Hanken_Grotesk',sans-serif] mb-12">
          Y no toda empresa necesita inteligencia artificial.
        </p>

        {/* Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14 text-left">
          {PHILOSOPHY_POINTS.map((point) => (
            <div
              key={point}
              className="p-6 bg-white border border-gray-200 rounded-md shadow-xs flex items-start"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#f4b400] mt-2 mr-4 shrink-0" />
              <p className="text-base sm:text-lg font-semibold text-gray-900 font-['Hanken_Grotesk',sans-serif]">
                {point}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight Quote */}
        <div className="p-8 sm:p-10 bg-gray-950 text-white rounded-md max-w-2xl mx-auto shadow-md">
          <p className="text-2xl sm:text-3xl font-black font-['Hanken_Grotesk',sans-serif] leading-tight">
            La tecnología se adapta al problema.{" "}
            <span className="text-[#f4b400]">No al revés.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
