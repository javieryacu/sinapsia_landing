"use client";

import React from "react";

export default function VisionSection() {
  const elements = ["Procesos", "Sistemas", "Datos", "Automatización", "IA"];

  return (
    <section id="vision" className="py-20 sm:py-28 bg-[#f9fafb] border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Una sola visión para toda tu tecnología */}
        <div className="p-8 sm:p-12 bg-white border border-gray-200 rounded-md text-center shadow-xs">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight font-['Hanken_Grotesk',sans-serif] mb-6">
            Una sola visión para toda tu tecnología.
          </h2>

          <p className="text-gray-700 text-base sm:text-lg mb-8">
            En lugar de resolver cada problema por separado, trabajamos sobre el conjunto:
          </p>

          {/* Connected Formula */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
            {elements.map((el, i) => (
              <React.Fragment key={el}>
                <span className="px-4 py-2 bg-gray-900 text-white rounded-md font-bold text-sm sm:text-base font-['Hanken_Grotesk',sans-serif]">
                  {el}
                </span>
                {i < elements.length - 1 && (
                  <span className="text-lg font-black text-[#f4b400]">+</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="max-w-2xl mx-auto space-y-2 text-gray-700 text-base sm:text-lg leading-relaxed pt-6 border-t border-gray-100">
            <p>
              Porque una mejora aislada puede resolver un problema.
            </p>
            <p className="font-bold text-gray-950">
              Pero una tecnología bien conectada puede transformar la forma en que funciona una empresa.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
