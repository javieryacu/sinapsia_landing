"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import {
  ChevronRight,
  ChevronLeft,
  Building2,
  X,
  Send,
} from "lucide-react";

type StageKey =
  | "PROSPECCION"
  | "CONVERSACION"
  | "CALIFICACION"
  | "DIAGNOSTICO"
  | "PROPUESTA"
  | "GANADO"
  | "PERDIDO";

interface Opportunity {
  id: string;
  title: string;
  stage: StageKey;
  priority: "BAJA" | "MEDIA" | "ALTA";
  estimatedValue: number | null;
  summary: string | null;
  company: { id: string; name: string; industry?: string };
  contact?: { id: string; name: string; role?: string; email?: string; phone?: string; isDecisionMaker?: boolean };
  activities?: Array<{ id: string; content: string; createdAt: string; type: string }>;
}

interface Company {
  id: string;
  name: string;
}

const STAGES: Array<{ key: StageKey; label: string; color: string; desc: string }> = [
  { key: "PROSPECCION", label: "Prospección", color: "border-neutral-400 bg-neutral-50", desc: "Empresas identificadas para contactar" },
  { key: "CONVERSACION", label: "Conversación", color: "border-blue-400 bg-blue-50/50", desc: "Contacto inicial o charla abierta" },
  { key: "CALIFICACION", label: "Calificación", color: "border-indigo-400 bg-indigo-50/50", desc: "Validando si hay problema relevante" },
  { key: "DIAGNOSTICO", label: "Diagnóstico", color: "border-[#f4b400] bg-[#f4b400]/10", desc: "Relevamiento de las 3 dimensiones" },
  { key: "PROPUESTA", label: "Propuesta", color: "border-purple-400 bg-purple-50/50", desc: "Propuesta de solución y presupuesto" },
  { key: "GANADO", label: "Ganado", color: "border-emerald-500 bg-emerald-50/50", desc: "Proyecto aceptado para ejecución" },
  { key: "PERDIDO", label: "Perdido", color: "border-red-400 bg-red-50/30", desc: "No viable o postergado" },
];

export default function PipelinePage() {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [selectedOpp, setSelectedOpp] = useState<Opportunity | null>(null);

  // New Opportunity Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newCompanyId, setNewCompanyId] = useState("");
  const [newCompanyName, setNewCompanyName] = useState("");
  const [newStage, setNewStage] = useState<StageKey>("PROSPECCION");
  const [newPriority, setNewPriority] = useState<"BAJA" | "MEDIA" | "ALTA">("MEDIA");
  const [newValue, setNewValue] = useState("");
  const [newSummary, setNewSummary] = useState("");
  const [creating, setCreating] = useState(false);

  // New Activity Note state
  const [noteContent, setNoteContent] = useState("");
  const [noteLoading, setNoteLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [oppRes, compRes] = await Promise.all([
        fetch("/api/opportunities"),
        fetch("/api/companies"),
      ]);

      if (oppRes.ok && compRes.ok) {
        const oppData = await oppRes.json();
        const compData = await compRes.json();
        setOpportunities(oppData);
        setCompanies(compData);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleMoveStage = async (oppId: string, currentStage: StageKey, direction: "prev" | "next") => {
    const stageKeys = STAGES.map((s) => s.key);
    const currentIndex = stageKeys.indexOf(currentStage);
    const newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;

    if (newIndex < 0 || newIndex >= stageKeys.length) return;

    const targetStage = stageKeys[newIndex];

    // Optimistic UI update
    setOpportunities((prev) =>
      prev.map((o) => (o.id === oppId ? { ...o, stage: targetStage } : o))
    );

    if (selectedOpp?.id === oppId) {
      setSelectedOpp((prev) => (prev ? { ...prev, stage: targetStage } : null));
    }

    try {
      await fetch(`/api/opportunities/${oppId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ stage: targetStage }),
      });
    } catch (err) {
      console.error("Error moving stage:", err);
      fetchData();
    }
  };

  const handleCreateOpportunity = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreating(true);

    try {
      let targetCompanyId = newCompanyId;

      if (!targetCompanyId && newCompanyName) {
        const compRes = await fetch("/api/companies", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: newCompanyName }),
        });
        const compData = await compRes.json();
        targetCompanyId = compData.id;
      }

      if (!targetCompanyId) {
        alert("Seleccioná o escribí una empresa");
        setCreating(false);
        return;
      }

      const res = await fetch("/api/opportunities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: newTitle,
          companyId: targetCompanyId,
          stage: newStage,
          priority: newPriority,
          estimatedValue: newValue ? parseFloat(newValue) : null,
          summary: newSummary,
        }),
      });

      if (res.ok) {
        setIsModalOpen(false);
        setNewTitle("");
        setNewCompanyId("");
        setNewCompanyName("");
        setNewValue("");
        setNewSummary("");
        fetchData();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setCreating(false);
    }
  };

  const handleAddNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedOpp || !noteContent.trim()) return;

    setNoteLoading(true);
    try {
      const res = await fetch("/api/activities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          opportunityId: selectedOpp.id,
          type: "NOTE",
          content: noteContent,
        }),
      });

      if (res.ok) {
        const newAct = await res.json();
        const updatedActivities = [newAct, ...(selectedOpp.activities || [])];
        setSelectedOpp({ ...selectedOpp, activities: updatedActivities });
        setOpportunities((prev) =>
          prev.map((o) =>
            o.id === selectedOpp.id ? { ...o, activities: updatedActivities } : o
          )
        );
        setNoteContent("");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setNoteLoading(false);
    }
  };

  const formatMoney = (val: number | null) => {
    if (!val) return "-";
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="flex-1 flex flex-col min-w-0 font-['Hanken_Grotesk',sans-serif]">
      <Header
        title="Pipeline Comercial"
        subtitle="Embudo de ventas consultivo SinapsIA"
        onNewAction={() => setIsModalOpen(true)}
        newActionLabel="Nueva Oportunidad"
      />

      {/* Kanban Board Container */}
      <div className="flex-1 p-6 overflow-x-auto">
        <div className="flex gap-4 min-w-[1400px] h-full items-start">
          {STAGES.map((stage, sIndex) => {
            const stageOpps = opportunities.filter((o) => o.stage === stage.key);
            const stageTotalValue = stageOpps.reduce((acc, curr) => acc + (curr.estimatedValue || 0), 0);

            return (
              <div
                key={stage.key}
                className="w-72 shrink-0 bg-white rounded-xl border border-gray-200 shadow-xs flex flex-col max-h-[calc(100vh-140px)]"
              >
                {/* Column Header */}
                <div className={`p-3.5 border-b border-t-4 rounded-t-xl ${stage.color}`}>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-900 text-sm">{stage.label}</span>
                    <span className="text-xs bg-white/80 border border-gray-200 px-2 py-0.5 rounded-full font-bold text-gray-700">
                      {stageOpps.length}
                    </span>
                  </div>
                  <div className="mt-1 flex items-center justify-between text-[11px] text-gray-600 font-medium">
                    <span>{formatMoney(stageTotalValue)}</span>
                    <span className="text-[10px] text-gray-400 truncate max-w-[120px]">{stage.desc}</span>
                  </div>
                </div>

                {/* Cards List */}
                <div className="p-3 space-y-3 overflow-y-auto flex-1 bg-gray-50/50">
                  {stageOpps.length === 0 ? (
                    <div className="py-8 text-center text-xs text-gray-400">
                      Sin prospectos
                    </div>
                  ) : (
                    stageOpps.map((opp) => (
                      <div
                        key={opp.id}
                        onClick={() => setSelectedOpp(opp)}
                        className="bg-white p-3.5 rounded-lg border border-gray-200 hover:border-[#f4b400] hover:shadow-md transition-all cursor-pointer space-y-2 group"
                      >
                        {/* Company & Priority */}
                        <div className="flex items-start justify-between gap-1">
                          <span className="text-xs font-bold text-gray-900 group-hover:text-[#09090b] flex items-center gap-1.5 line-clamp-1">
                            <Building2 className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                            {opp.company.name}
                          </span>
                          <span
                            className={`text-[9px] px-1.5 py-0.5 rounded font-extrabold uppercase shrink-0 ${
                              opp.priority === "ALTA"
                                ? "bg-red-50 text-red-600 border border-red-200"
                                : opp.priority === "MEDIA"
                                ? "bg-amber-50 text-amber-600 border border-amber-200"
                                : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {opp.priority}
                          </span>
                        </div>

                        {/* Title */}
                        <p className="text-xs text-gray-700 font-medium line-clamp-2">
                          {opp.title}
                        </p>

                        {/* Value & Stage Move Controls */}
                        <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
                          <span className="font-bold text-gray-900">
                            {formatMoney(opp.estimatedValue)}
                          </span>

                          <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                            {sIndex > 0 && (
                              <button
                                onClick={() => handleMoveStage(opp.id, stage.key, "prev")}
                                title="Mover a etapa anterior"
                                className="p-1 hover:bg-gray-100 text-gray-400 hover:text-gray-900 rounded cursor-pointer"
                              >
                                <ChevronLeft className="w-3.5 h-3.5" />
                              </button>
                            )}
                            {sIndex < STAGES.length - 1 && (
                              <button
                                onClick={() => handleMoveStage(opp.id, stage.key, "next")}
                                title="Avanzar etapa"
                                className="p-1 hover:bg-[#f4b400]/20 text-gray-400 hover:text-[#09090b] rounded font-bold cursor-pointer"
                              >
                                <ChevronRight className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Slide-over Detail Drawer */}
      {selectedOpp && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex justify-end">
          <div className="w-full max-w-lg bg-white h-full shadow-2xl flex flex-col">
            {/* Drawer Header */}
            <div className="p-6 border-b border-gray-200 flex justify-between items-start bg-gray-50">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase text-[#f4b400]">
                    {STAGES.find((s) => s.key === selectedOpp.stage)?.label || selectedOpp.stage}
                  </span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs font-bold text-gray-500">
                    Prioridad {selectedOpp.priority}
                  </span>
                </div>
                <h2 className="text-xl font-black text-gray-900">{selectedOpp.title}</h2>
                <div className="flex items-center gap-2 mt-1 text-sm text-gray-600 font-medium">
                  <Building2 className="w-4 h-4 text-gray-400" />
                  <span>{selectedOpp.company.name}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedOpp(null)}
                className="p-2 text-gray-400 hover:text-gray-900 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Body */}
            <div className="flex-1 p-6 overflow-y-auto space-y-6">
              {/* Value & Details */}
              <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div>
                  <span className="text-xs text-gray-500 uppercase font-bold">Valor Estimado</span>
                  <p className="text-lg font-black text-gray-900 mt-0.5">
                    {formatMoney(selectedOpp.estimatedValue)}
                  </p>
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase font-bold">Contacto Clave</span>
                  <p className="text-sm font-bold text-gray-800 mt-0.5">
                    {selectedOpp.contact?.name || "Sin asignar"}
                  </p>
                  {selectedOpp.contact?.role && (
                    <span className="text-xs text-gray-500">{selectedOpp.contact.role}</span>
                  )}
                </div>
              </div>

              {/* Summary / Notes */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  Diagnóstico Preliminar / Resumen
                </h4>
                <p className="text-sm text-gray-700 bg-white border border-gray-200 p-4 rounded-xl leading-relaxed">
                  {selectedOpp.summary || "Sin notas preliminares cargadas."}
                </p>
              </div>

              {/* Activity Timeline */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Historial de Interacciones & Follow-ups
                </h4>

                {/* Add Note Form */}
                <form onSubmit={handleAddNote} className="flex gap-2">
                  <input
                    type="text"
                    value={noteContent}
                    onChange={(e) => setNoteContent(e.target.value)}
                    placeholder="Registrar llamada, reunión o nota..."
                    className="flex-1 text-xs bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-[#f4b400]"
                  />
                  <button
                    type="submit"
                    disabled={noteLoading || !noteContent.trim()}
                    className="bg-[#09090b] text-white px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 hover:bg-[#f4b400] hover:text-[#09090b] transition-all disabled:opacity-50 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Guardar</span>
                  </button>
                </form>

                {/* Activity List */}
                <div className="space-y-2">
                  {selectedOpp.activities && selectedOpp.activities.length > 0 ? (
                    selectedOpp.activities.map((act) => (
                      <div
                        key={act.id}
                        className="p-3 bg-gray-50 border border-gray-100 rounded-lg text-xs space-y-1"
                      >
                        <p className="text-gray-800 leading-normal">{act.content}</p>
                        <span className="text-[10px] text-gray-400">
                          {new Date(act.createdAt).toLocaleString("es-AR", {
                            dateStyle: "short",
                            timeStyle: "short",
                          })}
                        </span>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-gray-400 italic">No hay notas registradas todavía.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* New Opportunity Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-gray-100">
            <div className="flex justify-between items-center mb-5 pb-3 border-b border-gray-100">
              <h3 className="font-black text-gray-900 text-lg">Nueva Oportunidad Comercial</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-900 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateOpportunity} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                  Título de la Oportunidad
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="ej. Automatización de facturación y turnos"
                  className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#f4b400]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                  Empresa
                </label>
                {companies.length > 0 ? (
                  <select
                    value={newCompanyId}
                    onChange={(e) => setNewCompanyId(e.target.value)}
                    className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#f4b400] mb-2"
                  >
                    <option value="">Seleccionar empresa existente...</option>
                    {companies.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                ) : null}
                <input
                  type="text"
                  value={newCompanyName}
                  onChange={(e) => {
                    setNewCompanyName(e.target.value);
                    if (e.target.value) setNewCompanyId("");
                  }}
                  placeholder="O escribir nombre de nueva empresa..."
                  className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#f4b400]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                    Etapa Inicial
                  </label>
                  <select
                    value={newStage}
                    onChange={(e) => setNewStage(e.target.value as StageKey)}
                    className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#f4b400]"
                  >
                    {STAGES.map((s) => (
                      <option key={s.key} value={s.key}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                    Prioridad
                  </label>
                  <select
                    value={newPriority}
                    onChange={(e) => setNewPriority(e.target.value as "BAJA" | "MEDIA" | "ALTA")}
                    className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#f4b400]"
                  >
                    <option value="BAJA">Baja</option>
                    <option value="MEDIA">Media</option>
                    <option value="ALTA">Alta</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                  Valor Estimado (USD)
                </label>
                <input
                  type="number"
                  value={newValue}
                  onChange={(e) => setNewValue(e.target.value)}
                  placeholder="ej. 3500"
                  className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#f4b400]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                  Problema Preliminar / Contexto
                </label>
                <textarea
                  rows={3}
                  value={newSummary}
                  onChange={(e) => setNewSummary(e.target.value)}
                  placeholder="¿Qué problema o proceso manual detectamos inicialmente?"
                  className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#f4b400]"
                />
              </div>

              <div className="pt-3 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-xs font-bold text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={creating}
                  className="px-5 py-2 text-xs font-bold bg-[#f4b400] hover:bg-[#e0a400] text-[#09090b] rounded-lg shadow-sm cursor-pointer"
                >
                  {creating ? "Guardando..." : "Crear Oportunidad"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
