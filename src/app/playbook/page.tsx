"use client";

import React, { useState } from "react";
import { BookOpen, List, CaretRight, BookBookmark } from "@phosphor-icons/react";
import { manualData } from "./data";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function PlaybookPage() {
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
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row font-['Hanken_Grotesk',sans-serif]">
      
      {/* Mobile Header / Hamburger */}
      <div className="md:hidden bg-[#09090b] text-white p-4 flex justify-between items-center sticky top-0 z-50">
        <div className="font-bold flex items-center gap-2">
          <BookBookmark weight="bold" className="text-[#f4b400] w-5 h-5" />
          <span>Manual Comercial SinapsIA</span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-1">
          <List weight="bold" className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`
        ${isMobileMenuOpen ? "block" : "hidden"} 
        md:block w-full md:w-80 lg:w-96 bg-white border-r border-gray-200 h-[calc(100vh-60px)] md:h-screen sticky top-0 md:top-0 overflow-y-auto shrink-0 z-40 shadow-sm
      `}>
        <div className="p-6">
          <Link href="/" className="hidden md:flex items-center gap-2 font-black text-xl tracking-tight mb-8 text-[#09090b] hover:opacity-80 transition-opacity">
            SINAPS<span className="text-[#f4b400]">IA</span>
            <span className="text-xs font-normal bg-gray-100 text-gray-500 px-2 py-0.5 rounded ml-2">Manual</span>
          </Link>
          
          <div className="space-y-8">
            {manualData.map((mod, mIndex) => (
              <div key={mod.id}>
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                  <BookOpen weight="bold" className="text-[#f4b400] w-4 h-4" />
                  {mod.title}
                </h3>
                <ul className="space-y-1 border-l-2 border-gray-100 ml-2 pl-3">
                  {mod.sections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => handleSelectSection(mIndex, section.id)}
                        className={`w-full text-left py-2 px-3 rounded-md text-sm transition-colors flex items-center justify-between group
                          ${activeSectionId === section.id 
                            ? "bg-[#f4b400]/10 text-[#09090b] font-bold" 
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                          }
                        `}
                      >
                        <span className="truncate pr-2">{section.title}</span>
                        {activeSectionId === section.id && (
                          <CaretRight weight="bold" className="w-4 h-4 text-[#f4b400] shrink-0" />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-12 lg:p-16 max-w-4xl bg-gray-50 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12"
          >
            {/* Module Context Header */}
            <div className="mb-8 pb-6 border-b border-gray-100">
              <span className="text-[#f4b400] font-bold text-xs uppercase tracking-widest">{activeModule.title}</span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#09090b] tracking-tight mt-2">{activeSection.title}</h1>
            </div>

            {/* Render Section Content */}
            <div className="prose prose-gray max-w-none prose-p:leading-relaxed prose-li:leading-relaxed text-gray-800 text-[15px] sm:text-base">
              {activeSection.content}
            </div>
            
            {/* Navigation Footer */}
            <div className="mt-16 pt-6 border-t border-gray-100 flex justify-between items-center text-sm">
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
                  className="text-gray-500 hover:text-[#09090b] font-semibold transition-colors flex items-center gap-1"
                >
                  &larr; Anterior
                </button>
              ) : <div></div>}

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
                  className="text-[#09090b] hover:text-[#f4b400] font-semibold transition-colors flex items-center gap-1"
                >
                  Siguiente &rarr;
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

    </div>
  );
}
