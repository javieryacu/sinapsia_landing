"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import {
  ArrowLeft,
  Building2,
  Users2,
  Layers,
  DollarSign,
  CheckCircle2,
  Clock,
  Plus,
  Trash2,
  ChevronRight,
  ChevronLeft,
  X,
  FileText,
  AlertCircle,
  Sparkles,
  Edit2,
  Check,
  Calendar,
} from "lucide-react";

type ProjectStatus =
  | "PENDIENTE_INICIO"
  | "EN_DESARROLLO"
  | "PRE_PRODUCCION"
  | "COMPLETADO"
  | "PAUSADO"
  | "CANCELADO";

type PhaseStatus =
  | "ANALISIS_PROFUNDO"
  | "DESARROLLO"
  | "QA_INTERNO"
  | "QA_CLIENTE"
  | "LISTO";

type PaymentStatus = "PENDIENTE" | "FACTURADO" | "COBRADO";

interface ProjectPhase {
  id: string;
  projectId: string;
  title: string;
  description?: string;
  order: number;
  status: PhaseStatus;
  isPostSale: boolean;
  cost?: number;
  startDate?: string;
  deliveryDate?: string;
  closedDate?: string;
}

interface Payment {
  id: string;
  projectId: string;
  concept: string;
  milestone: string;
  percentage?: number;
  amount: number;
  status: PaymentStatus;
  dueDate?: string;
  paidDate?: string;
  notes?: string;
}

interface ProjectDetail {
  id: string;
  title: string;
  description?: string;
  totalValue: number;
  status: ProjectStatus;
  startDate?: string;
  estimatedEndDate?: string;
  createdAt: string;
  company: { id: string; name: string; industry?: string; location?: string; contacts?: any[] };
  opportunity?: {
    id: string;
    title: string;
    stage: string;
    solutionType?: string;
    problemDescription?: string;
    summary?: string;
    activities?: Array<{ id: string; content: string; createdAt: string; type: string }>;
  };
  leadDeveloper?: { id: string; name: string; email: string; role: string };
  seller?: { id: string; name: string; email: string };
  phases: ProjectPhase[];
  payments: Payment[];
}

const PHASE_STEPS: Array<{ key: PhaseStatus; label: string; color: string; badge: string }> = [
  { key: "ANALISIS_PROFUNDO", label: "1. Análisis Profundo", color: "border-gray-200 bg-gray-50 text-gray-700", badge: "bg-gray-100 text-gray-800" },
  { key: "DESARROLLO",        label: "2. Desarrollo Ágil",   color: "border-blue-200 bg-blue-50 text-blue-800",   badge: "bg-blue-100 text-blue-800" },
  { key: "QA_INTERNO",        label: "3. QA SinapsIA",       color: "border-amber-200 bg-amber-50 text-amber-900",badge: "bg-amber-100 text-amber-900" },
  { key: "QA_CLIENTE",        label: "4. QA Cliente",        color: "border-purple-200 bg-purple-50 text-purple-900", badge: "bg-purple-100 text-purple-900" },
  { key: "LISTO",             label: "5. Listo ✓",           color: "border-emerald-300 bg-emerald-50 text-emerald-950", badge: "bg-emerald-600 text-white font-bold" },
];

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [project, setProject] = useState<ProjectDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"fases" | "cobros" | "diagnostico">("fases");

  // Add Phase Modal
  const [isPhaseModalOpen, setIsPhaseModalOpen] = useState(false);
  const [phaseTitle, setPhaseTitle] = useState("");
  const [phaseDesc, setPhaseDesc] = useState("");
  const [isPostSalePhase, setIsPostSalePhase] = useState(false);
  const [phaseCost, setPhaseCost] = useState("");
  const [addingPhase, setAddingPhase] = useState(false);

  // Add Payment Modal
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [payConcept, setPayConcept] = useState("");
  const [payAmount, setPayAmount] = useState("");
  const [payNotes, setPayNotes] = useState("");
  const [addingPayment, setAddingPayment] = useState(false);

  const fetchProject = async () => {
    try {
      const res = await fetch(`/api/projects/${id}`);
      if (res.ok) {
        const data = await res.json();
        setProject(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProject();
  }, [id]);

  const handleStatusChange = async (newStatus: ProjectStatus) => {
    if (!project) return;
    try {
      const res = await fetch(`/api/projects/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setProject({ ...project, status: newStatus });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handlePhaseStatusChange = async (phaseId: string, newStatus: PhaseStatus) => {
    try {
      const res = await fetch(`/api/projects/${id}/phases/${phaseId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        fetchProject();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeletePhase = async (phaseId: string) => {
    if (!confirm("¿Eliminar esta fase?")) return;
    try {
      const res = await fetch(`/api/projects/${id}/phases/${phaseId}`, {
        method: "DELETE",
      });
      if (res.ok) fetchProject();
    } catch (err) {
      console.error(err);
    }
  };

  const handleCreatePhase = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phaseTitle.trim()) return;

    setAddingPhase(true);
    try {
      const res = await fetch(`/api/projects/${id}/phases`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: phaseTitle.trim(),
          description: phaseDesc.trim() || null,
          isPostSale: isPostSalePhase,
          cost: phaseCost ? parseFloat(phaseCost) : null,
          createPayment: isPostSalePhase && !!phaseCost,
        }),
      });

      if (res.ok) {
        setIsPhaseModalOpen(false);
        setPhaseTitle("");
        setPhaseDesc("");
        setIsPostSalePhase(false);
        setPhaseCost("");
        fetchProject();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setAddingPhase(false);
    }
  };

  const handlePaymentStatusChange = async (paymentId: string, newStatus: PaymentStatus) => {
    try {
      const res = await fetch(`/api/projects/${id}/payments/${paymentId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) fetchProject();
    } catch (err) {
      console.error(err);
    }
  };

  const handleCreatePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!payConcept.trim() || !payAmount) return;

    setAddingPayment(true);
    try {
      const res = await fetch(`/api/projects/${id}/payments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          concept: payConcept.trim(),
          amount: parseFloat(payAmount),
          notes: payNotes.trim() || null,
        }),
      });

      if (res.ok) {
        setIsPaymentModalOpen(false);
        setPayConcept("");
        setPayAmount("");
        setPayNotes("");
        fetchProject();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setAddingPayment(false);
    }
  };

  if (loading || !project) {
    return (
      <div className="flex-1 flex flex-col min-w-0 font-['Hanken_Grotesk',sans-serif]">
        <Header title="Cargando Proyecto..." />
        <div className="p-12 text-center text-gray-400 text-sm animate-pulse">
          Obteniendo detalles del proyecto y fases ágiles...
        </div>
      </div>
    );
  }

  const devPhases = project.phases.filter((p) => !p.isPostSale);
  const postSalePhases = project.phases.filter((p) => p.isPostSale);

  const totalCollected = project.payments
    .filter((p) => p.status === "COBRADO")
    .reduce((sum, p) => sum + p.amount, 0);

  const totalPending = project.payments
    .filter((p) => p.status !== "COBRADO")
    .reduce((sum, p) => sum + p.amount, 0);

  const getNextPhaseStep = (current: PhaseStatus): PhaseStatus | null => {
    const order: PhaseStatus[] = ["ANALISIS_PROFUNDO", "DESARROLLO", "QA_INTERNO", "QA_CLIENTE", "LISTO"];
    const idx = order.indexOf(current);
    return idx !== -1 && idx < order.length - 1 ? order[idx + 1] : null;
  };

  const getPrevPhaseStep = (current: PhaseStatus): PhaseStatus | null => {
    const order: PhaseStatus[] = ["ANALISIS_PROFUNDO", "DESARROLLO", "QA_INTERNO", "QA_CLIENTE", "LISTO"];
    const idx = order.indexOf(current);
    return idx > 0 ? order[idx - 1] : null;
  };

  return (
    <div className="flex-1 flex flex-col min-w-0 font-['Hanken_Grotesk',sans-serif]">
      {/* Custom Topbar */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-8 py-4">
        <Link
          href="/dashboard/projects"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors mb-2"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Volver a Proyectos</span>
        </Link>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-gray-400" />
              <span className="text-xs font-extrabold text-[#f4b400] uppercase tracking-wider">
                {project.company.name}
              </span>
              <span className="text-gray-300">•</span>
              <span className="text-xs text-gray-500 font-semibold">
                Contrato: USD ${project.totalValue.toLocaleString()}
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-gray-900 mt-0.5">
              {project.title}
            </h1>
          </div>

          {/* Status selector */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl p-1.5">
              <span className="text-[11px] font-bold text-gray-500 pl-2">Estado Global:</span>
              <select
                value={project.status}
                onChange={(e) => handleStatusChange(e.target.value as ProjectStatus)}
                className={`text-xs font-extrabold px-3 py-1.5 rounded-lg border outline-none cursor-pointer bg-white ${
                  project.status === "PENDIENTE_INICIO"
                    ? "border-amber-300 text-amber-900"
                    : project.status === "EN_DESARROLLO"
                    ? "border-blue-300 text-blue-900"
                    : project.status === "PRE_PRODUCCION"
                    ? "border-purple-300 text-purple-900"
                    : project.status === "COMPLETADO"
                    ? "border-emerald-400 text-emerald-950"
                    : "border-gray-300 text-gray-700"
                }`}
              >
                <option value="PENDIENTE_INICIO">1. Inicio (Adelanto 30%)</option>
                <option value="EN_DESARROLLO">2. En Desarrollo Ágil</option>
                <option value="PRE_PRODUCCION">3. En Pre-Producción (Testing 40%)</option>
                <option value="COMPLETADO">4. Completado / Activo (Cierre 30%)</option>
                <option value="PAUSADO">Pausado</option>
                <option value="CANCELADO">Cancelado</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mt-6 border-b border-gray-100 text-xs font-bold">
          <button
            onClick={() => setActiveTab("fases")}
            className={`pb-3 flex items-center gap-2 border-b-2 transition-all cursor-pointer ${
              activeTab === "fases"
                ? "border-[#f4b400] text-gray-900 font-extrabold"
                : "border-transparent text-gray-400 hover:text-gray-700"
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Fases Ágiles ({devPhases.length + postSalePhases.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("cobros")}
            className={`pb-3 flex items-center gap-2 border-b-2 transition-all cursor-pointer ${
              activeTab === "cobros"
                ? "border-[#f4b400] text-gray-900 font-extrabold"
                : "border-transparent text-gray-400 hover:text-gray-700"
            }`}
          >
            <DollarSign className="w-4 h-4" />
            <span>Control de Cobros (30/40/30)</span>
          </button>

          <button
            onClick={() => setActiveTab("diagnostico")}
            className={`pb-3 flex items-center gap-2 border-b-2 transition-all cursor-pointer ${
              activeTab === "diagnostico"
                ? "border-[#f4b400] text-gray-900 font-extrabold"
                : "border-transparent text-gray-400 hover:text-gray-700"
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Diagnóstico & Contexto Comercial</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-4 sm:p-8 space-y-6">
        {/* TAB 1: FASES ÁGILES */}
        {activeTab === "fases" && (
          <div className="space-y-8">
            {/* Sprints / Phases Section */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-base font-black text-gray-900 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#f4b400]" />
                    <span>Fases de Desarrollo del Proyecto</span>
                  </h2>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Ciclo iterativo: Análisis → Desarrollo → QA SinapsIA → QA Cliente → Listo
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsPostSalePhase(false);
                    setIsPhaseModalOpen(true);
                  }}
                  className="bg-[#09090b] hover:bg-[#f4b400] text-white hover:text-black px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5 text-[#f4b400] group-hover:text-black" />
                  <span>Nueva Fase / Módulo</span>
                </button>
              </div>

              {devPhases.length === 0 ? (
                <div className="p-8 border border-dashed border-gray-300 rounded-2xl text-center text-xs text-gray-400">
                  No hay fases registradas. Agrega los módulos o sprints planificados.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {devPhases.map((phase) => {
                    const stepCfg = PHASE_STEPS.find((s) => s.key === phase.status) || PHASE_STEPS[0];
                    return (
                      <div
                        key={phase.id}
                        className="bg-white border border-gray-200 rounded-2xl p-4 shadow-xs space-y-3 flex flex-col justify-between"
                      >
                        <div className="space-y-2">
                          <div className="flex justify-between items-start gap-2">
                            <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-wider">
                              Fase #{phase.order}
                            </span>
                            <span className={`text-[10px] px-2 py-0.5 rounded font-extrabold ${stepCfg.badge}`}>
                              {stepCfg.label}
                            </span>
                          </div>

                          <h3 className="font-extrabold text-sm text-gray-900">{phase.title}</h3>
                          {phase.description && (
                            <p className="text-xs text-gray-600 leading-relaxed">{phase.description}</p>
                          )}
                        </div>

                        {/* Lifecycle buttons */}
                        <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                          <button
                            onClick={() => handleDeletePhase(phase.id)}
                            className="p-1 text-gray-300 hover:text-red-600 transition-colors"
                            title="Eliminar fase"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>

                          <div className="flex gap-1.5">
                            {getPrevPhaseStep(phase.status) && (
                              <button
                                onClick={() => handlePhaseStatusChange(phase.id, getPrevPhaseStep(phase.status)!)}
                                className="px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded text-xs font-bold flex items-center gap-1 cursor-pointer"
                              >
                                <ChevronLeft className="w-3 h-3" />
                                <span>Atrás</span>
                              </button>
                            )}

                            {getNextPhaseStep(phase.status) && (
                              <button
                                onClick={() => handlePhaseStatusChange(phase.id, getNextPhaseStep(phase.status)!)}
                                className="px-2.5 py-1 bg-[#09090b] hover:bg-[#f4b400] text-white hover:text-black rounded text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
                              >
                                <span>Avanzar</span>
                                <ChevronRight className="w-3 h-3" />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Post-Sale & Evolution Section */}
            <div className="bg-amber-50/40 border border-amber-200/80 rounded-2xl p-5 space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <h3 className="text-sm font-black text-amber-950">
                      Evolución Continua & Features Post-Venta
                    </h3>
                  </div>
                  <p className="text-xs text-amber-800/80 mt-0.5">
                    Nuevas necesidades solicitadas una vez entregado el proyecto principal (Cobro 100% contra entrega).
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsPostSalePhase(true);
                    setIsPhaseModalOpen(true);
                  }}
                  className="bg-amber-800 hover:bg-amber-900 text-white px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5 text-amber-300" />
                  <span>Nuevo Feature Extra</span>
                </button>
              </div>

              {postSalePhases.length === 0 ? (
                <div className="p-6 border border-dashed border-amber-300/80 rounded-xl text-center text-xs text-amber-900/60">
                  Sin features post-venta solicitados aún.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {postSalePhases.map((phase) => (
                    <div
                      key={phase.id}
                      className="bg-white border border-amber-200 rounded-xl p-3.5 space-y-2 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex justify-between items-center text-[10px] font-bold">
                          <span className="text-amber-800">Feature Extra</span>
                          {phase.cost && (
                            <span className="text-emerald-700 font-extrabold bg-emerald-50 px-1.5 py-0.5 rounded">
                              USD ${phase.cost.toLocaleString()}
                            </span>
                          )}
                        </div>
                        <h4 className="font-bold text-xs text-gray-900 mt-1">{phase.title}</h4>
                        {phase.description && <p className="text-[11px] text-gray-600 mt-1">{phase.description}</p>}
                      </div>

                      <div className="pt-2 border-t border-gray-100 flex justify-between items-center">
                        <span className="text-[10px] font-bold text-gray-400 uppercase">{phase.status}</span>
                        <div className="flex gap-1">
                          {getNextPhaseStep(phase.status) && (
                            <button
                              onClick={() => handlePhaseStatusChange(phase.id, getNextPhaseStep(phase.status)!)}
                              className="px-2 py-0.5 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded text-[10px] font-bold"
                            >
                              Avanzar
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: CONTROL DE COBROS (30/40/30) */}
        {activeTab === "cobros" && (
          <div className="space-y-6">
            {/* Financial summary banner */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-xs">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                  Total Presupuestado
                </span>
                <span className="text-xl font-black text-gray-900 mt-1 block">
                  USD ${project.totalValue.toLocaleString()}
                </span>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl">
                <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">
                  Cobrado Real (Efectivo)
                </span>
                <span className="text-xl font-black text-emerald-950 mt-1 block">
                  USD ${totalCollected.toLocaleString()}
                </span>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl">
                <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block">
                  Saldo Pendiente por Cobrar
                </span>
                <span className="text-xl font-black text-amber-950 mt-1 block">
                  USD ${totalPending.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Payments Table / Cards */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xs space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-sm font-black text-gray-900">
                    Hitos de Facturación y Cobranza
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Estructura 30% Adelanto / 40% Pre-producción / 30% Cierre y features adicionales.
                  </p>
                </div>
                <button
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="bg-[#09090b] hover:bg-[#f4b400] text-white hover:text-black px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5 text-[#f4b400] group-hover:text-black" />
                  <span>Agregar Hito</span>
                </button>
              </div>

              <div className="space-y-3">
                {project.payments.map((pay) => (
                  <div
                    key={pay.id}
                    className="p-4 bg-gray-50 border border-gray-200 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-gray-900">{pay.concept}</span>
                        {pay.percentage && (
                          <span className="bg-gray-200 text-gray-700 px-1.5 py-0.5 rounded text-[10px] font-extrabold">
                            {pay.percentage}%
                          </span>
                        )}
                      </div>
                      {pay.notes && <p className="text-gray-500 text-[11px] mt-0.5">{pay.notes}</p>}
                    </div>

                    <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                      <span className="text-base font-black text-gray-900">
                        USD ${pay.amount.toLocaleString()}
                      </span>

                      {/* Status toggle buttons */}
                      <div className="flex gap-1">
                        {(["PENDIENTE", "FACTURADO", "COBRADO"] as PaymentStatus[]).map((st) => (
                          <button
                            key={st}
                            onClick={() => handlePaymentStatusChange(pay.id, st)}
                            className={`px-2.5 py-1 rounded-lg text-[10px] font-extrabold transition-colors cursor-pointer ${
                              pay.status === st
                                ? st === "COBRADO"
                                  ? "bg-emerald-600 text-white"
                                  : st === "FACTURADO"
                                  ? "bg-blue-600 text-white"
                                  : "bg-amber-600 text-white"
                                : "bg-white text-gray-500 hover:bg-gray-200 border border-gray-200"
                            }`}
                          >
                            {st}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: DIAGNÓSTICO & CONTEXTO COMERCIAL */}
        {activeTab === "diagnostico" && (
          <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-6 text-xs">
            {project.opportunity?.problemDescription && (
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl space-y-1.5">
                <span className="text-[10px] font-extrabold text-amber-900 uppercase tracking-wider block">
                  ★ Problema Central Detectado en la Venta:
                </span>
                <p className="text-xs text-amber-950 font-medium leading-relaxed">
                  "{project.opportunity.problemDescription}"
                </p>
              </div>
            )}

            {project.opportunity?.solutionType && (
              <div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                  Solución Clasificada
                </span>
                <span className="inline-block bg-gray-100 border border-gray-300 text-gray-800 px-3 py-1 rounded-lg font-bold">
                  {project.opportunity.solutionType}
                </span>
              </div>
            )}

            {project.description && (
              <div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                  Alcance / Descripción Técnica
                </span>
                <p className="text-gray-700 bg-gray-50 p-4 rounded-xl border border-gray-200 leading-relaxed whitespace-pre-wrap">
                  {project.description}
                </p>
              </div>
            )}

            {project.opportunity?.activities && project.opportunity.activities.length > 0 && (
              <div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-2">
                  Minutas de Reuniones Previas & Diagnóstico
                </span>
                <div className="space-y-2">
                  {project.opportunity.activities.map((act) => (
                    <div key={act.id} className="p-3 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
                      <div className="flex justify-between items-center text-[10px] text-gray-400 font-bold">
                        <span className="uppercase text-gray-700 font-extrabold">{act.type}</span>
                        <span>{new Date(act.createdAt).toLocaleDateString()}</span>
                      </div>
                      <p className="text-gray-700">{act.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Modal: New Phase */}
      {isPhaseModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 font-['Hanken_Grotesk',sans-serif]">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-gray-100 p-5 space-y-4 text-xs">
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <h3 className="font-extrabold text-sm text-gray-900">
                {isPostSalePhase ? "Nuevo Feature Post-Venta" : "Nueva Fase de Desarrollo"}
              </h3>
              <button onClick={() => setIsPhaseModalOpen(false)} className="p-1 text-gray-400 hover:text-gray-800">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreatePhase} className="space-y-3">
              <div>
                <label className="block font-bold text-gray-700 mb-1">Título del Módulo o Feature *</label>
                <input
                  type="text"
                  required
                  value={phaseTitle}
                  onChange={(e) => setPhaseTitle(e.target.value)}
                  placeholder="Ej: Módulo de Facturación Electrónica"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-[#f4b400]"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Descripción / Entregables</label>
                <textarea
                  rows={2}
                  value={phaseDesc}
                  onChange={(e) => setPhaseDesc(e.target.value)}
                  placeholder="Qué incluye esta fase..."
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-[#f4b400]"
                />
              </div>

              {isPostSalePhase && (
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Costo Adicional (USD)</label>
                  <input
                    type="number"
                    value={phaseCost}
                    onChange={(e) => setPhaseCost(e.target.value)}
                    placeholder="Ej: 500"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-[#f4b400]"
                  />
                  <span className="text-[10px] text-gray-400 mt-0.5 block">
                    Se creará un hito de cobro al 100% contra entrega.
                  </span>
                </div>
              )}

              <div className="pt-3 border-t border-gray-100 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsPhaseModalOpen(false)}
                  className="px-4 py-2 text-gray-600 font-bold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={addingPhase}
                  className="bg-[#09090b] hover:bg-[#f4b400] text-white hover:text-black font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer"
                >
                  {addingPhase ? "Guardando..." : "Guardar Fase"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: New Payment */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 font-['Hanken_Grotesk',sans-serif]">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-gray-100 p-5 space-y-4 text-xs">
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <h3 className="font-extrabold text-sm text-gray-900">Agregar Hito de Cobro</h3>
              <button onClick={() => setIsPaymentModalOpen(false)} className="p-1 text-gray-400 hover:text-gray-800">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreatePayment} className="space-y-3">
              <div>
                <label className="block font-bold text-gray-700 mb-1">Concepto *</label>
                <input
                  type="text"
                  required
                  value={payConcept}
                  onChange={(e) => setPayConcept(e.target.value)}
                  placeholder="Ej: Mantenimiento Mes 1 / Feature Extra"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-[#f4b400]"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Monto (USD) *</label>
                <input
                  type="number"
                  required
                  value={payAmount}
                  onChange={(e) => setPayAmount(e.target.value)}
                  placeholder="Ej: 800"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-[#f4b400]"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Observaciones</label>
                <input
                  type="text"
                  value={payNotes}
                  onChange={(e) => setPayNotes(e.target.value)}
                  placeholder="Notas adicionales..."
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-[#f4b400]"
                />
              </div>

              <div className="pt-3 border-t border-gray-100 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsPaymentModalOpen(false)}
                  className="px-4 py-2 text-gray-600 font-bold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={addingPayment}
                  className="bg-[#09090b] hover:bg-[#f4b400] text-white hover:text-black font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer"
                >
                  {addingPayment ? "Guardando..." : "Guardar Hito"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
