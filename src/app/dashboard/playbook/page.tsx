"use client";

import React, { useState } from "react";
import { BookOpen, List, CaretRight, BookBookmark } from "@phosphor-icons/react";
import { manualData } from "@/app/playbook/data";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";

export default function DashboardPlaybookPage() {
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [activeSectionId, setActiveSectionId] = useState(manualData[0].sections[0].id);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const activeModule = manualData[activeModuleIndex];
  const activeSection = activeModule.sections.find((s) => s.id === activeSectionId) || activeModule.sections[0];

  const handleSelectSection = (modIndex: number, sectionId: string) => {
    setActiveModuleIndex(modIndex);
    setActiveSectionId(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex-1 flex flex-col min-w-0 font-['Hanken_Grotesk',sans-serif]">
      <Header
        title="Manual Comercial & Playbook"
        subtitle="Estrategia, guiones, etapas y metodología consultiva de SinapsIA"
      />

      {/* Main Container */}
      <div className="flex-1 flex flex-col md:flex-row min-w-0 bg-gray-50 overflow-hidden">
        {/* Mobile Toggle Button for Index */}
        <div className="md:hidden bg-white border-b border-gray-200 p-3 flex justify-between items-center px-4">
          <div className="flex items-center gap-2 text-xs font-bold text-gray-800">
            <BookBookmark weight="bold" className="text-[#f4b400] w-4 h-4" />
            <span className="truncate max-w-[240px]">{activeSection.title}</span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center gap-1.5 text-xs font-bold bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <List weight="bold" className="w-4 h-4" />
            <span>Índice</span>
          </button>
        </div>

        {/* Playbook Index Sub-Sidebar */}
        <aside
          className={`
            ${isMobileMenuOpen ? "block" : "hidden"} 
            md:block w-full md:w-72 lg:w-80 bg-white border-r border-gray-200 overflow-y-auto shrink-0 shadow-xs
          `}
        >
          <div className="p-4 sm:p-5 space-y-6">
            {manualData.map((mod, mIndex) => (
              <div key={mod.id}>
                <h3 className="font-extrabold text-gray-900 mb-2.5 flex items-center gap-2 text-xs uppercase tracking-wider">
                  <BookOpen weight="bold" className="text-[#f4b400] w-4 h-4 shrink-0" />
                  <span>{mod.title}</span>
                </h3>
                <ul className="space-y-1 border-l-2 border-gray-100 ml-2 pl-2.5">
                  {mod.sections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => handleSelectSection(mIndex, section.id)}
                        className={`w-full text-left py-1.5 px-2.5 rounded-lg text-xs transition-all flex items-center justify-between group cursor-pointer
                          ${activeSectionId === section.id 
                            ? "bg-[#f4b400]/15 text-[#09090b] font-extrabold" 
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium"
                          }
                        `}
                      >
                        <span className="truncate pr-2">{section.title}</span>
                        {activeSectionId === section.id && (
                          <CaretRight weight="bold" className="w-3.5 h-3.5 text-[#f4b400] shrink-0" />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        {/* Content Viewer Area */}
        <main className="flex-1 p-4 sm:p-8 lg:p-10 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.15 }}
                className="bg-white rounded-2xl shadow-xs border border-gray-200 p-6 sm:p-10"
              >
                {/* Module Context Header */}
                <div className="mb-6 pb-4 border-b border-gray-100">
                  <span className="text-[#f4b400] font-bold text-xs uppercase tracking-widest block">
                    {activeModule.title}
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-black text-[#09090b] tracking-tight mt-1.5">
                    {activeSection.title}
                  </h1>
                </div>

                {/* Render Section Content */}
                <div className="prose prose-gray max-w-none prose-p:leading-relaxed prose-li:leading-relaxed text-gray-800 text-sm sm:text-base">
                  {activeSection.content}
                </div>
                
                {/* Navigation Footer */}
                <div className="mt-12 pt-6 border-t border-gray-100 flex justify-between items-center text-xs sm:text-sm">
                  {activeSectionId !== manualData[0].sections[0].id ? (
                    <button 
                      onClick={() => {
                        const currIdx = activeModule.sections.findIndex(s => s.id === activeSectionId);
                        if (currIdx > 0) {
                          handleSelectSection(activeModuleIndex, activeModule.sections[currIdx - 1].id);
                        } else if (activeModuleIndex > 0) {
                          const prevMod = manualData[activeModuleIndex - 1];
                          handleSelectSection(activeModuleIndex - 1, prevMod.sections[prevMod.sections.length - 1].id);
                        }
                      }}
                      className="text-gray-600 hover:text-[#09090b] font-bold transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      &larr; Anterior
                    </button>
                  ) : <div />}

                  {!(activeModuleIndex === manualData.length - 1 && activeSectionId === activeModule.sections[activeModule.sections.length - 1].id) && (
                    <button 
                      onClick={() => {
                        const currIdx = activeModule.sections.findIndex(s => s.id === activeSectionId);
                        if (currIdx < activeModule.sections.length - 1) {
                          handleSelectSection(activeModuleIndex, activeModule.sections[currIdx + 1].id);
                        } else if (activeModuleIndex < manualData.length - 1) {
                          handleSelectSection(activeModuleIndex + 1, manualData[activeModuleIndex + 1].sections[0].id);
                        }
                      }}
                      className="text-[#09090b] hover:text-[#f4b400] font-bold transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      Siguiente &rarr;
                    </button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}
