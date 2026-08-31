"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";
import {
  ChevronRight,
  ChevronLeft,
  Building2,
  X,
  Send,
  AlertCircle,
  Cpu,
  FolderGit2,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  Plus,
} from "lucide-react";

type StageKey =
  | "PROSPECTO"
  | "CONTACTO"
  | "CONVERSACION"
  | "DIAGNOSTICO"
  | "PROPUESTA"
  | "GANADO"
  | "PERDIDO";

type SolutionType =
  | "OPTIMIZAR"
  | "AUTOMATIZAR"
  | "INTEGRAR"
  | "INTELIGENCIA_ARTIFICIAL"
  | "DESARROLLAR"
  | "COMBINADO"
  | "";

interface Opportunity {
  id: string;
  title: string;
  stage: StageKey;
  priority: "BAJA" | "MEDIA" | "ALTA";
  estimatedValue: number | null;
  summary: string | null;
  problemDescription: string | null;
  solutionType: SolutionType | null;
  company: { id: string; name: string; industry?: string; location?: string };
  contact?: { id: string; name: string; role?: string; email?: string; phone?: string; isDecisionMaker?: boolean };
  activities?: Array<{ id: string; content: string; createdAt: string; type: string }>;
  project?: { id: string; status: string; totalValue: number } | null;
}

interface Company {
  id: string;
  name: string;
}

const STAGES: Array<{ key: StageKey; label: string; color: string; badgeColor: string; desc: string; group: "active" | "closed" }> = [
  { key: "PROSPECTO",   label: "1. Prospecto",       color: "border-neutral-300 bg-neutral-50/70",   badgeColor: "bg-neutral-200 text-neutral-800", desc: "Empresas identificadas, pendiente de contacto",  group: "active" },
  { key: "CONTACTO",    label: "2. Contacto",        color: "border-blue-300 bg-blue-50/40",         badgeColor: "bg-blue-100 text-blue-800",       desc: "Primer mensaje (WhatsApp) o visita inicial",       group: "active" },
  { key: "CONVERSACION",label: "3. Conversación",    color: "border-indigo-300 bg-indigo-50/40",     badgeColor: "bg-indigo-100 text-indigo-800",   desc: "Escuchando dolores e indagando procesos",          group: "active" },
  { key: "DIAGNOSTICO", label: "4. Diagnóstico ★",   color: "border-[#f4b400] bg-[#f4b400]/10",      badgeColor: "bg-[#f4b400] text-black font-extrabold", desc: "Relevamiento formal de procesos y sistemas", group: "active" },
  { key: "PROPUESTA",   label: "5. Propuesta",       color: "border-purple-300 bg-purple-50/40",     badgeColor: "bg-purple-100 text-purple-800",   desc: "Solución y presupuesto (30/40/30) enviado",       group: "active" },
  { key: "GANADO",      label: "6. Ganado ✓",        color: "border-emerald-500 bg-emerald-50/50",   badgeColor: "bg-emerald-600 text-white font-bold", desc: "Propuesta aceptada → Iniciar Proyecto & Cobros", group: "closed" },
  { key: "PERDIDO",     label: "Perdido",            color: "border-red-300 bg-red-50/30",           badgeColor: "bg-red-100 text-red-700",         desc: "No viable o postergado para el futuro",            group: "closed" },
];

const SOLUTION_LABELS: Record<string, string> = {
  OPTIMIZAR:              "Optimizar sistema existente",
  AUTOMATIZAR:            "Automatizar proceso manual",
  INTEGRAR:               "Integrar sistemas / herramientas",
  INTELIGENCIA_ARTIFICIAL:"Incorporar Inteligencia Artificial",
  DESARROLLAR:            "Desarrollar solución nueva",
  COMBINADO:              "Combinación de soluciones",
};

const SOLUTION_COLORS: Record<string, string> = {
  OPTIMIZAR:              "bg-blue-50 text-blue-700 border-blue-200",
  AUTOMATIZAR:            "bg-purple-50 text-purple-700 border-purple-200",
  INTEGRAR:               "bg-indigo-50 text-indigo-700 border-indigo-200",
  INTELIGENCIA_ARTIFICIAL:"bg-[#f4b400]/15 text-amber-900 border-amber-300 font-bold",
  DESARROLLAR:            "bg-emerald-50 text-emerald-700 border-emerald-200",
  COMBINADO:              "bg-gray-100 text-gray-700 border-gray-300",
};

export default function PipelinePage() {
  const router = useRouter();
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [selectedOpp, setSelectedOpp] = useState<Opportunity | null>(null);

  // New Opportunity Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newCompanyId, setNewCompanyId] = useState("");
  const [newCompanyName, setNewCompanyName] = useState("");
  const [newStage, setNewStage] = useState<StageKey>("PROSPECTO");
  const [newPriority, setNewPriority] = useState<"BAJA" | "MEDIA" | "ALTA">("MEDIA");
  const [newValue, setNewValue] = useState("");
  const [newProblem, setNewProblem] = useState("");
  const [newSolutionType, setNewSolutionType] = useState<SolutionType>("");
  const [newSummary, setNewSummary] = useState("");
  const [creating, setCreating] = useState(false);

  // Quick Project Initiation Modal State
  const [projectModalOpp, setProjectModalOpp] = useState<Opportunity | null>(null);
  const [projectTitle, setProjectTitle] = useState("");
  const [projectValue, setProjectValue] = useState("");
  const [creatingProject, setCreatingProject] = useState(false);

  // Activity Drawer State
  const [newActivityContent, setNewActivityContent] = useState("");
  const [newActivityType, setNewActivityType] = useState("NOTE");
  const [addingActivity, setAddingActivity] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchOpportunities = async () => {
    try {
      const res = await fetch("/api/opportunities");
      if (res.ok) {
        const data = await res.json();
        setOpportunities(data);
      }
    } catch (error) {
      console.error("Error fetching opportunities:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCompanies = async () => {
    try {
      const res = await fetch("/api/companies");
      if (res.ok) {
        const data = await res.json();
        setCompanies(data);
      }
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  };

  useEffect(() => {
    fetchOpportunities();
    fetchCompanies();
  }, []);

  const handleStageChange = async (id: string, newStage: StageKey) => {
    const previousOpps = [...opportunities];
    setOpportunities(
      opportunities.map((opp) =>
        opp.id === id ? { ...opp, stage: newStage } : opp
      )
    );

    try {
      const res = await fetch(`/api/opportunities/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ stage: newStage }),
      });
      if (!res.ok) {
        setOpportunities(previousOpps);
      } else {
        const updated = await res.json();
        // If moved to GANADO and doesn't have project, open project modal
        if (newStage === "GANADO" && !updated.project) {
          openProjectModal(updated);
        }
        fetchOpportunities();
      }
    } catch {
      setOpportunities(previousOpps);
    }
  };

  const handleCreateOpportunity = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreating(true);

    try {
      let finalCompanyId = newCompanyId;

      if (!finalCompanyId && newCompanyName.trim()) {
        const compRes = await fetch("/api/companies", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: newCompanyName.trim() }),
        });
        if (compRes.ok) {
          const compData = await compRes.json();
          finalCompanyId = compData.id;
        }
      }

      if (!finalCompanyId) {
        alert("Selecciona o escribe el nombre de una empresa");
        setCreating(false);
        return;
      }

      const res = await fetch("/api/opportunities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: newTitle,
          companyId: finalCompanyId,
          stage: newStage,
          priority: newPriority,
          estimatedValue: newValue ? parseFloat(newValue) : null,
          problemDescription: newProblem || null,
          solutionType: newSolutionType || null,
          summary: newSummary || null,
        }),
      });

      if (res.ok) {
        setIsModalOpen(false);
        setNewTitle("");
        setNewCompanyId("");
        setNewCompanyName("");
        setNewStage("PROSPECTO");
        setNewPriority("MEDIA");
        setNewValue("");
        setNewProblem("");
        setNewSolutionType("");
        setNewSummary("");
        fetchOpportunities();
        fetchCompanies();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setCreating(false);
    }
  };

  const openProjectModal = (opp: Opportunity) => {
    setProjectModalOpp(opp);
    setProjectTitle(opp.title || `Proyecto: ${opp.company.name}`);
    setProjectValue(opp.estimatedValue ? opp.estimatedValue.toString() : "");
  };

  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectModalOpp) return;
    setCreatingProject(true);

    try {
      const val = parseFloat(projectValue) || projectModalOpp.estimatedValue || 0;
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: projectTitle,
          companyId: projectModalOpp.company.id,
          opportunityId: projectModalOpp.id,
          totalValue: val,
          description: projectModalOpp.problemDescription || projectModalOpp.summary || null,
          createStandardPayments: true,
          initialPhases: [
            { title: "Fase 1: Análisis profundo y arquitectura", order: 1 },
            { title: "Fase 2: Desarrollo MVP y módulos iniciales", order: 2 },
          ],
        }),
      });

      if (res.ok) {
        const newProject = await res.json();
        setProjectModalOpp(null);
        fetchOpportunities();
        router.push(`/dashboard/projects/${newProject.id}`);
      } else {
        alert("Hubo un error al iniciar el proyecto");
      }
    } catch (error) {
      console.error("Error creating project:", error);
    } finally {
      setCreatingProject(false);
    }
  };

  const handleAddActivity = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedOpp || !newActivityContent.trim()) return;

    setAddingActivity(true);
    try {
      const res = await fetch("/api/activities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          opportunityId: selectedOpp.id,
          content: newActivityContent,
          type: newActivityType,
        }),
      });

      if (res.ok) {
        setNewActivityContent("");
        const actRes = await fetch(`/api/activities?opportunityId=${selectedOpp.id}`);
        if (actRes.ok) {
          const actData = await actRes.json();
          setSelectedOpp({ ...selectedOpp, activities: actData });
        }
        fetchOpportunities();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setAddingActivity(false);
    }
  };

  const getStageOpps = (key: StageKey) =>
    opportunities.filter((opp) => {
      if (opp.stage === key) return true;
      // Map legacy stages to clean new stages
      if (key === "PROSPECTO" && opp.stage === ("PROSPECCION" as any)) return true;
      if (key === "CONVERSACION" && opp.stage === ("CALIFICACION" as any)) return true;
      if (key === "GANADO" && (opp.stage === ("EJECUCION" as any) || opp.stage === ("RECURRENTE" as any))) return true;
      return false;
    });

  const getNextStage = (current: StageKey): StageKey | null => {
    const order: StageKey[] = ["PROSPECTO", "CONTACTO", "CONVERSACION", "DIAGNOSTICO", "PROPUESTA", "GANADO"];
    const idx = order.indexOf(current);
    return idx !== -1 && idx < order.length - 1 ? order[idx + 1] : null;
  };

  const getPrevStage = (current: StageKey): StageKey | null => {
    const order: StageKey[] = ["PROSPECTO", "CONTACTO", "CONVERSACION", "DIAGNOSTICO", "PROPUESTA", "GANADO"];
    const idx = order.indexOf(current);
    return idx > 0 ? order[idx - 1] : null;
  };

  return (
    <div className="flex-1 flex flex-col min-w-0 font-['Hanken_Grotesk',sans-serif]">
      <Header
        title="Pipeline Comercial"
        subtitle="Embudo de ventas consultivas (Visitas & WhatsApp) — Desde el contacto hasta el cierre de proyecto"
      />

      <div className="p-4 sm:p-8 space-y-6">
        {/* Action Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-gray-200 shadow-xs">
          <div>
            <h2 className="text-base sm:text-lg font-black text-[#09090b]">
              Embudo Comercial de SinapsIA
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Identificamos el problema, realizamos el diagnóstico sin costo, cotizamos (30/40/30) y transferimos a desarrollo.
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto bg-[#09090b] hover:bg-[#f4b400] text-white hover:text-[#09090b] px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
          >
            <Plus className="w-4 h-4 text-[#f4b400] group-hover:text-black" />
            <span>Nueva Oportunidad</span>
          </button>
        </div>

        {/* Pipeline Board */}
        {loading ? (
          <div className="p-12 text-center text-gray-400 text-sm animate-pulse">
            Cargando oportunidades del pipeline...
          </div>
        ) : (
          <div className="space-y-6">
            {/* Active Funnel: 5 stages */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#f4b400]" />
                <h3 className="text-xs font-black uppercase tracking-wider text-gray-700">
                  Embudo Activo de Ventas
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {STAGES.filter((s) => s.group === "active").map((stage) => {
                  const opps = getStageOpps(stage.key);
                  return (
                    <div
                      key={stage.key}
                      className={`flex flex-col rounded-2xl border-2 ${stage.color} p-3 min-h-[380px]`}
                    >
                      {/* Column Header */}
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-extrabold text-xs text-gray-900">
                          {stage.label}
                        </span>
                        <span className={`text-[11px] px-2 py-0.5 rounded-full font-extrabold ${stage.badgeColor}`}>
                          {opps.length}
                        </span>
                      </div>
                      <p className="text-[10px] text-gray-500 mb-3 leading-tight">
                        {stage.desc}
                      </p>

                      {/* Cards Container */}
                      <div className="flex-1 space-y-2.5 overflow-y-auto">
                        {opps.length === 0 ? (
                          <div className="h-24 border border-dashed border-gray-300 rounded-xl flex items-center justify-center text-[11px] text-gray-400 text-center px-2">
                            Sin prospectos en esta etapa
                          </div>
                        ) : (
                          opps.map((opp) => (
                            <div
                              key={opp.id}
                              onClick={() => setSelectedOpp(opp)}
                              className="bg-white p-3 rounded-xl border border-gray-200 hover:border-gray-400 hover:shadow-md transition-all cursor-pointer text-left space-y-2"
                            >
                              <div className="flex justify-between items-start gap-1">
                                <span className="text-xs font-black text-gray-900 line-clamp-1 leading-snug">
                                  {opp.title}
                                </span>
                                <span
                                  className={`text-[9px] px-1.5 py-0.5 rounded font-extrabold shrink-0 ${
                                    opp.priority === "ALTA"
                                      ? "bg-red-100 text-red-700"
                                      : opp.priority === "MEDIA"
                                      ? "bg-amber-100 text-amber-800"
                                      : "bg-gray-100 text-gray-600"
                                  }`}
                                >
                                  {opp.priority}
                                </span>
                              </div>

                              <div className="flex items-center gap-1 text-[11px] text-gray-600 font-semibold truncate">
                                <Building2 className="w-3 h-3 text-gray-400 shrink-0" />
                                <span className="truncate">{opp.company.name}</span>
                              </div>

                              {opp.solutionType && (
                                <span
                                  className={`inline-block text-[9px] px-2 py-0.5 rounded-md border font-bold truncate max-w-full ${
                                    SOLUTION_COLORS[opp.solutionType] || "bg-gray-100 text-gray-700"
                                  }`}
                                >
                                  {SOLUTION_LABELS[opp.solutionType] || opp.solutionType}
                                </span>
                              )}

                              {opp.problemDescription && (
                                <p className="text-[10px] text-gray-500 bg-amber-50/70 border border-amber-200/60 rounded-md p-1.5 line-clamp-2 italic">
                                  "{opp.problemDescription}"
                                </p>
                              )}

                              <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
                                <span className="font-extrabold text-gray-900">
                                  {opp.estimatedValue ? `USD $${opp.estimatedValue.toLocaleString()}` : "A cotizar"}
                                </span>

                                <div className="flex gap-1" onClick={(e) => e.stopPropagation()}>
                                  {getPrevStage(opp.stage) && (
                                    <button
                                      title="Retroceder etapa"
                                      onClick={() => handleStageChange(opp.id, getPrevStage(opp.stage)!)}
                                      className="p-1 text-gray-400 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded cursor-pointer"
                                    >
                                      <ChevronLeft className="w-3.5 h-3.5" />
                                    </button>
                                  )}
                                  {getNextStage(opp.stage) && (
                                    <button
                                      title="Avanzar etapa"
                                      onClick={() => handleStageChange(opp.id, getNextStage(opp.stage)!)}
                                      className="p-1 text-gray-700 hover:text-[#09090b] bg-[#f4b400]/20 hover:bg-[#f4b400] rounded font-bold cursor-pointer"
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

            {/* Closed / Handover Columns: GANADO & PERDIDO */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <h3 className="text-xs font-black uppercase tracking-wider text-gray-700">
                  Cierres & Traspaso a Proyectos
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* GANADO */}
                {STAGES.filter((s) => s.key === "GANADO").map((stage) => {
                  const opps = getStageOpps("GANADO");
                  return (
                    <div
                      key={stage.key}
                      className={`flex flex-col rounded-2xl border-2 ${stage.color} p-4 min-h-[220px]`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span className="font-extrabold text-sm text-emerald-950">
                            {stage.label}
                          </span>
                        </div>
                        <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${stage.badgeColor}`}>
                          {opps.length} proyectos
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mb-4">{stage.desc}</p>

                      <div className="space-y-3">
                        {opps.length === 0 ? (
                          <div className="p-6 border border-dashed border-emerald-300 rounded-xl text-center text-xs text-emerald-800">
                            Aún no hay propuestas cerradas. Al pasar una propuesta a Ganado, se creará el proyecto ágil.
                          </div>
                        ) : (
                          opps.map((opp) => (
                            <div
                              key={opp.id}
                              className="bg-white p-3.5 rounded-xl border border-emerald-200 shadow-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
                            >
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="font-bold text-sm text-gray-900">{opp.title}</span>
                                  <span className="text-xs text-emerald-700 font-extrabold bg-emerald-50 px-2 py-0.5 rounded">
                                    {opp.company.name}
                                  </span>
                                </div>
                                <p className="text-xs text-gray-500 mt-0.5 font-medium">
                                  Valor estimado: USD ${opp.estimatedValue?.toLocaleString() || "0"}
                                </p>
                              </div>

                              <div className="flex items-center gap-2 w-full sm:w-auto">
                                {opp.project ? (
                                  <Link
                                    href={`/dashboard/projects/${opp.project.id}`}
                                    className="w-full sm:w-auto bg-[#09090b] hover:bg-[#f4b400] text-white hover:text-black px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                                  >
                                    <FolderGit2 className="w-3.5 h-3.5 text-[#f4b400] group-hover:text-black" />
                                    <span>Ver Proyecto & Cobros</span>
                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                  </Link>
                                ) : (
                                  <button
                                    onClick={() => openProjectModal(opp)}
                                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-xs cursor-pointer"
                                  >
                                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                                    <span>Iniciar Proyecto</span>
                                  </button>
                                )}
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  );
                })}

                {/* PERDIDO */}
                {STAGES.filter((s) => s.key === "PERDIDO").map((stage) => {
                  const opps = getStageOpps("PERDIDO");
                  return (
                    <div
                      key={stage.key}
                      className={`flex flex-col rounded-2xl border-2 ${stage.color} p-4 min-h-[220px]`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 text-red-500" />
                          <span className="font-extrabold text-sm text-red-950">
                            {stage.label}
                          </span>
                        </div>
                        <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${stage.badgeColor}`}>
                          {opps.length}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mb-4">{stage.desc}</p>

                      <div className="space-y-2 max-h-[160px] overflow-y-auto">
                        {opps.length === 0 ? (
                          <div className="p-6 border border-dashed border-red-200 rounded-xl text-center text-xs text-gray-400">
                            Sin oportunidades perdidas
                          </div>
                        ) : (
                          opps.map((opp) => (
                            <div
                              key={opp.id}
                              onClick={() => setSelectedOpp(opp)}
                              className="bg-white p-2.5 rounded-lg border border-red-100 flex justify-between items-center text-xs cursor-pointer hover:border-red-300"
                            >
                              <span className="font-bold text-gray-800 truncate">{opp.title} ({opp.company.name})</span>
                              <span className="text-[10px] text-red-600 font-semibold shrink-0">Reactivar</span>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal: New Opportunity */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 font-['Hanken_Grotesk',sans-serif]">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] shadow-2xl border border-gray-100 flex flex-col overflow-hidden">
            <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h3 className="text-base sm:text-lg font-black text-gray-900">
                Nueva Oportunidad Comercial
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 text-gray-400 hover:text-gray-900 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateOpportunity} className="p-5 overflow-y-auto space-y-4 text-xs">
              {/* Problem Description - Priority Field */}
              <div className="p-3 bg-amber-50 border border-amber-300 rounded-xl space-y-1.5">
                <label className="block font-bold text-amber-950 text-xs">
                  ★ ¿Cuál es el problema o dolor del cliente? (Fundamental)
                </label>
                <textarea
                  rows={2}
                  value={newProblem}
                  onChange={(e) => setNewProblem(e.target.value)}
                  placeholder="Ej: Llevan los pedidos y cobranzas en Excel, hay errores manuales y dependen 100% de una persona..."
                  className="w-full px-3 py-2 bg-white border border-amber-300 rounded-lg text-xs focus:ring-2 focus:ring-[#f4b400] outline-none"
                />
              </div>

              {/* Title */}
              <div>
                <label className="block font-bold text-gray-700 mb-1">Título de la Oportunidad *</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Ej: Automatización de Pedidos y Turnos"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:ring-2 focus:ring-[#f4b400] outline-none"
                />
              </div>

              {/* Company selection */}
              <div>
                <label className="block font-bold text-gray-700 mb-1">Empresa *</label>
                {companies.length > 0 ? (
                  <div className="space-y-2">
                    <select
                      value={newCompanyId}
                      onChange={(e) => setNewCompanyId(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:ring-2 focus:ring-[#f4b400] outline-none bg-white"
                    >
                      <option value="">-- Seleccionar empresa existente --</option>
                      {companies.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                    <div className="text-center text-[10px] text-gray-400 font-bold">O CREAR NUEVA</div>
                    <input
                      type="text"
                      value={newCompanyName}
                      onChange={(e) => {
                        setNewCompanyName(e.target.value);
                        setNewCompanyId("");
                      }}
                      placeholder="Escribir nombre de empresa nueva..."
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:ring-2 focus:ring-[#f4b400] outline-none"
                    />
                  </div>
                ) : (
                  <input
                    type="text"
                    required
                    value={newCompanyName}
                    onChange={(e) => setNewCompanyName(e.target.value)}
                    placeholder="Nombre de la empresa"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:ring-2 focus:ring-[#f4b400] outline-none"
                  />
                )}
              </div>

              {/* Solution Type */}
              <div>
                <label className="block font-bold text-gray-700 mb-1">Tipo de Solución SinapsIA</label>
                <select
                  value={newSolutionType}
                  onChange={(e) => setNewSolutionType(e.target.value as SolutionType)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:ring-2 focus:ring-[#f4b400] outline-none bg-white"
                >
                  <option value="">-- Seleccionar tipo de solución --</option>
                  <option value="OPTIMIZAR">Optimizar — Mejorar sistema existente</option>
                  <option value="AUTOMATIZAR">Automatizar — Eliminar trabajo manual</option>
                  <option value="INTEGRAR">Integrar — Conectar sistemas desconectados</option>
                  <option value="INTELIGENCIA_ARTIFICIAL">Inteligencia Artificial — Análisis / Atención / LLMs</option>
                  <option value="DESARROLLAR">Desarrollar — Crear software a medida</option>
                  <option value="COMBINADO">Combinado — Múltiples soluciones</option>
                </select>
              </div>

              {/* Stage & Priority & Value */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Etapa Inicial</label>
                  <select
                    value={newStage}
                    onChange={(e) => setNewStage(e.target.value as StageKey)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:ring-2 focus:ring-[#f4b400] outline-none bg-white"
                  >
                    <option value="PROSPECTO">1. Prospecto</option>
                    <option value="CONTACTO">2. Contacto</option>
                    <option value="CONVERSACION">3. Conversación</option>
                    <option value="DIAGNOSTICO">4. Diagnóstico ★</option>
                    <option value="PROPUESTA">5. Propuesta</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">Prioridad</label>
                  <select
                    value={newPriority}
                    onChange={(e) => setNewPriority(e.target.value as any)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:ring-2 focus:ring-[#f4b400] outline-none bg-white"
                  >
                    <option value="BAJA">Baja</option>
                    <option value="MEDIA">Media</option>
                    <option value="ALTA">Alta (Urgente)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">Valor Est. (USD)</label>
                  <input
                    type="number"
                    value={newValue}
                    onChange={(e) => setNewValue(e.target.value)}
                    placeholder="Ej: 3500"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:ring-2 focus:ring-[#f4b400] outline-none"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-bold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={creating}
                  className="bg-[#09090b] hover:bg-[#f4b400] text-white hover:text-[#09090b] font-bold px-5 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  {creating ? "Creando..." : "Crear Oportunidad"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Quick Start Project when Opportunity is Won */}
      {projectModalOpp && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 font-['Hanken_Grotesk',sans-serif]">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-gray-100 overflow-hidden">
            <div className="p-5 border-b border-gray-100 bg-emerald-50/70 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-600" />
                <h3 className="text-base font-black text-emerald-950">
                  ¡Propuesta Ganada! Iniciar Proyecto
                </h3>
              </div>
              <button onClick={() => setProjectModalOpp(null)} className="p-1 text-gray-400 hover:text-gray-800">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateProject} className="p-5 space-y-4 text-xs">
              <p className="text-gray-600">
                Se creará el proyecto ágil para <strong>{projectModalOpp.company.name}</strong> y se generará automáticamente el esquema de cobros en 3 hitos (30% Adelanto / 40% Pre-producción / 30% Cierre).
              </p>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Nombre del Proyecto</label>
                <input
                  type="text"
                  required
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-[#f4b400]"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Valor Total del Proyecto (USD)</label>
                <input
                  type="number"
                  required
                  value={projectValue}
                  onChange={(e) => setProjectValue(e.target.value)}
                  placeholder="Ej: 4500"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-[#f4b400]"
                />
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 space-y-1">
                <span className="font-bold text-gray-800 block text-[11px]">Hitos de Cobro que se generarán:</span>
                <ul className="text-[11px] text-gray-600 space-y-1 list-disc list-inside">
                  <li><strong>30% Adelanto:</strong> USD ${( (parseFloat(projectValue)||0) * 0.3 ).toFixed(0)} (al iniciar)</li>
                  <li><strong>40% Pre-Producción:</strong> USD ${( (parseFloat(projectValue)||0) * 0.4 ).toFixed(0)} (al entregar para pruebas)</li>
                  <li><strong>30% Validación Final:</strong> USD ${( (parseFloat(projectValue)||0) * 0.3 ).toFixed(0)} (post-correcciones)</li>
                </ul>
              </div>

              <div className="pt-3 border-t border-gray-100 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setProjectModalOpp(null)}
                  className="px-4 py-2 text-gray-600 font-bold"
                >
                  Omitir por ahora
                </button>
                <button
                  type="submit"
                  disabled={creatingProject}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-xl transition-colors shadow-xs"
                >
                  {creatingProject ? "Creando..." : "Crear Proyecto & Cobros"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Drawer: Opportunity Details & Follow-up */}
      {selectedOpp && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex justify-end font-['Hanken_Grotesk',sans-serif]">
          <div className="bg-white w-full max-w-lg h-full shadow-2xl border-l border-gray-200 flex flex-col overflow-hidden animate-in slide-in-from-right duration-200">
            {/* Drawer Header */}
            <div className="p-5 border-b border-gray-100 flex justify-between items-start bg-gray-50">
              <div>
                <span className="text-[10px] font-black text-[#f4b400] uppercase tracking-wider block">
                  {selectedOpp.company.name}
                </span>
                <h3 className="text-base sm:text-lg font-black text-gray-900 mt-0.5">
                  {selectedOpp.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedOpp(null)}
                className="p-1.5 text-gray-400 hover:text-gray-900 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Body */}
            <div className="p-5 flex-1 overflow-y-auto space-y-5 text-xs">
              {/* Problem Field */}
              {selectedOpp.problemDescription && (
                <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl space-y-1">
                  <span className="text-[10px] font-bold text-amber-900 uppercase block tracking-wider">
                    ★ Problema del cliente:
                  </span>
                  <p className="text-xs text-amber-950 leading-relaxed font-medium">
                    {selectedOpp.problemDescription}
                  </p>
                </div>
              )}

              {/* Solution Type Badge */}
              {selectedOpp.solutionType && (
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                    Tipo de Solución Planteada
                  </span>
                  <span
                    className={`inline-block px-3 py-1 rounded-lg border font-bold text-xs ${
                      SOLUTION_COLORS[selectedOpp.solutionType] || "bg-gray-100"
                    }`}
                  >
                    {SOLUTION_LABELS[selectedOpp.solutionType] || selectedOpp.solutionType}
                  </span>
                </div>
              )}

              {/* Summary / Notes */}
              {selectedOpp.summary && (
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                    Resumen / Diagnóstico Adicional
                  </span>
                  <p className="text-gray-700 bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs leading-relaxed">
                    {selectedOpp.summary}
                  </p>
                </div>
              )}

              {/* Activities and Follow-ups */}
              <div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-2">
                  Historial de Interacciones & Seguimiento
                </span>

                <form onSubmit={handleAddActivity} className="space-y-2 mb-4">
                  <div className="flex gap-2">
                    <select
                      value={newActivityType}
                      onChange={(e) => setNewActivityType(e.target.value)}
                      className="px-2.5 py-1.5 border border-gray-200 rounded-lg text-xs bg-white font-bold"
                    >
                      <option value="NOTE">Nota</option>
                      <option value="CALL">Llamada</option>
                      <option value="MEETING">Reunión</option>
                      <option value="EMAIL">Email / WhatsApp</option>
                    </select>
                  </div>
                  <div className="flex gap-2">
                    <textarea
                      rows={2}
                      value={newActivityContent}
                      onChange={(e) => setNewActivityContent(e.target.value)}
                      placeholder="Registrar lo tratado en la llamada o reunión..."
                      className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-[#f4b400]"
                    />
                    <button
                      type="submit"
                      disabled={addingActivity || !newActivityContent.trim()}
                      className="bg-[#09090b] hover:bg-[#f4b400] text-white hover:text-[#09090b] px-3.5 rounded-lg font-bold flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>

                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {selectedOpp.activities && selectedOpp.activities.length > 0 ? (
                    selectedOpp.activities.map((act) => (
                      <div key={act.id} className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs space-y-1">
                        <div className="flex justify-between items-center text-[10px] text-gray-400 font-bold">
                          <span className="uppercase text-gray-700 font-extrabold">{act.type}</span>
                          <span>{new Date(act.createdAt).toLocaleDateString()}</span>
                        </div>
                        <p className="text-gray-700 whitespace-pre-wrap">{act.content}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-gray-400 py-4 text-xs italic">
                      Sin interacciones registradas aún.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
