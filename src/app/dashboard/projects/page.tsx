"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import {
  FolderGit2,
  Building2,
  Users2,
  DollarSign,
  CheckCircle2,
  Clock,
  Plus,
  X,
  Sparkles,
  ArrowRight,
  TrendingUp,
  AlertCircle,
  Layers,
  Search,
} from "lucide-react";

interface ProjectPhase {
  id: string;
  title: string;
  status: "ANALISIS_PROFUNDO" | "DESARROLLO" | "QA_INTERNO" | "QA_CLIENTE" | "LISTO";
  isPostSale: boolean;
  cost?: number;
}

interface Payment {
  id: string;
  concept: string;
  amount: number;
  status: "PENDIENTE" | "FACTURADO" | "COBRADO";
  milestone: string;
}

interface Project {
  id: string;
  title: string;
  description?: string;
  totalValue: number;
  status: "PENDIENTE_INICIO" | "EN_DESARROLLO" | "PRE_PRODUCCION" | "COMPLETADO" | "PAUSADO" | "CANCELADO";
  createdAt: string;
  company: { id: string; name: string; industry?: string; location?: string };
  opportunity?: { id: string; title: string; solutionType?: string };
  leadDeveloper?: { id: string; name: string; email: string };
  seller?: { id: string; name: string; email: string };
  phases: ProjectPhase[];
  payments: Payment[];
}

interface Company {
  id: string;
  name: string;
}

interface User {
  id: string;
  name: string;
  role: string;
}

const STATUS_LABELS: Record<string, { label: string; color: string; badge: string }> = {
  PENDIENTE_INICIO: {
    label: "Pendiente de Inicio (Adelanto 30%)",
    color: "border-amber-300 bg-amber-50/50 text-amber-900",
    badge: "bg-amber-100 text-amber-800 border-amber-200",
  },
  EN_DESARROLLO: {
    label: "En Desarrollo Ágil",
    color: "border-blue-300 bg-blue-50/50 text-blue-900",
    badge: "bg-blue-100 text-blue-800 border-blue-200",
  },
  PRE_PRODUCCION: {
    label: "En Pre-Producción (Testing Cliente 40%)",
    color: "border-purple-300 bg-purple-50/50 text-purple-900",
    badge: "bg-purple-100 text-purple-800 border-purple-200",
  },
  COMPLETADO: {
    label: "Completado / Activo (Cierre 30%)",
    color: "border-emerald-300 bg-emerald-50/50 text-emerald-900",
    badge: "bg-emerald-100 text-emerald-800 border-emerald-200",
  },
  PAUSADO: {
    label: "Pausado",
    color: "border-gray-300 bg-gray-50 text-gray-700",
    badge: "bg-gray-100 text-gray-700 border-gray-200",
  },
  CANCELADO: {
    label: "Cancelado",
    color: "border-red-300 bg-red-50 text-red-700",
    badge: "bg-red-100 text-red-700 border-red-200",
  },
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState<string>("ALL");
  const [searchTerm, setSearchTerm] = useState("");

  // Modal new project
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newCompanyId, setNewCompanyId] = useState("");
  const [newTotalValue, setNewTotalValue] = useState("");
  const [newLeadDevId, setNewLeadDevId] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [creating, setCreating] = useState(false);

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/projects");
      if (res.ok) {
        const data = await res.json();
        setProjects(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchDependencies = async () => {
    try {
      const [compRes, usersRes] = await Promise.all([
        fetch("/api/companies"),
        fetch("/api/users"),
      ]);
      if (compRes.ok) setCompanies(await compRes.json());
      if (usersRes.ok) setUsers(await usersRes.json());
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProjects();
    fetchDependencies();
  }, []);

  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newCompanyId) return;

    setCreating(true);
    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: newTitle.trim(),
          companyId: newCompanyId,
          totalValue: parseFloat(newTotalValue) || 0,
          leadDeveloperId: newLeadDevId || null,
          description: newDescription || null,
          createStandardPayments: true,
          initialPhases: [
            { title: "Fase 1: Análisis profundo y arquitectura", order: 1 },
            { title: "Fase 2: Desarrollo MVP y módulos iniciales", order: 2 },
          ],
        }),
      });

      if (res.ok) {
        setIsModalOpen(false);
        setNewTitle("");
        setNewCompanyId("");
        setNewTotalValue("");
        setNewLeadDevId("");
        setNewDescription("");
        fetchProjects();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setCreating(false);
    }
  };

  // KPIs
  const totalValueSum = projects.reduce((acc, p) => acc + (p.totalValue || 0), 0);
  const activeProjectsCount = projects.filter((p) =>
    ["PENDIENTE_INICIO", "EN_DESARROLLO", "PRE_PRODUCCION"].includes(p.status)
  ).length;

  let totalCollected = 0;
  let totalPending = 0;

  projects.forEach((p) => {
    p.payments.forEach((pay) => {
      if (pay.status === "COBRADO") totalCollected += pay.amount;
      else totalPending += pay.amount;
    });
  });

  const filteredProjects = projects.filter((p) => {
    const matchesTab = selectedTab === "ALL" || p.status === selectedTab;
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.company.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="flex-1 flex flex-col min-w-0 font-['Hanken_Grotesk',sans-serif]">
      <Header
        title="Proyectos & Cobros"
        subtitle="Gestión de desarrollo ágil por fases, entregas y control de facturación (30/40/30)"
      />

      <div className="p-4 sm:p-8 space-y-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-blue-700 rounded-xl">
              <FolderGit2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-gray-500 font-bold block uppercase tracking-wider">
                Proyectos Activos
              </span>
              <span className="text-2xl font-black text-gray-900">
                {activeProjectsCount}
              </span>
              <span className="text-[10px] text-gray-400 block mt-0.5">
                {projects.length} en total
              </span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex items-center gap-4">
            <div className="p-3 bg-indigo-50 text-indigo-700 rounded-xl">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-gray-500 font-bold block uppercase tracking-wider">
                Cartera Total
              </span>
              <span className="text-2xl font-black text-gray-900">
                USD ${totalValueSum.toLocaleString()}
              </span>
              <span className="text-[10px] text-gray-400 block mt-0.5">
                Presupuesto contratado
              </span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex items-center gap-4">
            <div className="p-3 bg-emerald-50 text-emerald-700 rounded-xl">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-gray-500 font-bold block uppercase tracking-wider">
                Cobrado Real
              </span>
              <span className="text-2xl font-black text-emerald-700">
                USD ${totalCollected.toLocaleString()}
              </span>
              <span className="text-[10px] text-emerald-600 font-bold block mt-0.5">
                {totalValueSum > 0 ? `${Math.round((totalCollected / totalValueSum) * 100)}% del total` : "0%"}
              </span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex items-center gap-4">
            <div className="p-3 bg-amber-50 text-amber-700 rounded-xl">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-gray-500 font-bold block uppercase tracking-wider">
                Pendiente por Cobrar
              </span>
              <span className="text-2xl font-black text-amber-900">
                USD ${totalPending.toLocaleString()}
              </span>
              <span className="text-[10px] text-amber-700 font-bold block mt-0.5">
                Hitos 30% / 40% / 30%
              </span>
            </div>
          </div>
        </div>

        {/* Action Header & Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 bg-white p-4 rounded-2xl border border-gray-200 shadow-xs">
          {/* Search bar */}
          <div className="relative flex-1 max-w-sm">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar proyecto o empresa..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-[#f4b400]"
            />
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
            {[
              { key: "ALL", label: "Todos" },
              { key: "PENDIENTE_INICIO", label: "Inicio (30%)" },
              { key: "EN_DESARROLLO", label: "En Desarrollo" },
              { key: "PRE_PRODUCCION", label: "Pre-Prod (40%)" },
              { key: "COMPLETADO", label: "Completados" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setSelectedTab(tab.key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedTab === tab.key
                    ? "bg-[#09090b] text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#09090b] hover:bg-[#f4b400] text-white hover:text-black px-4 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs shrink-0"
          >
            <Plus className="w-4 h-4 text-[#f4b400] group-hover:text-black" />
            <span>Nuevo Proyecto</span>
          </button>
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="p-12 text-center text-gray-400 text-sm animate-pulse">
            Cargando proyectos y estado de cobros...
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="bg-white p-12 rounded-2xl border border-dashed border-gray-300 text-center space-y-3">
            <div className="p-3 bg-gray-100 rounded-full w-12 h-12 mx-auto flex items-center justify-center text-gray-500">
              <FolderGit2 className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-sm text-gray-900">
              No hay proyectos en esta vista
            </h3>
            <p className="text-xs text-gray-500 max-w-sm mx-auto">
              Cuando una oportunidad comercial se cierra en "Ganado", se crea automáticamente aquí su proyecto de desarrollo con esquema de cobros 30/40/30.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#09090b] text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#f4b400] hover:text-black transition-colors cursor-pointer"
            >
              Crear primer proyecto manual
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((proj) => {
              const statusCfg = STATUS_LABELS[proj.status] || STATUS_LABELS.PENDIENTE_INICIO;

              // Calculate phase progress
              const totalPhases = proj.phases.length;
              const readyPhases = proj.phases.filter((p) => p.status === "LISTO").length;
              const progressPct = totalPhases > 0 ? Math.round((readyPhases / totalPhases) * 100) : 0;

              // Calculate payments
              const paidAmount = proj.payments
                .filter((p) => p.status === "COBRADO")
                .reduce((sum, p) => sum + p.amount, 0);

              return (
                <div
                  key={proj.id}
                  className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xs hover:shadow-md hover:border-gray-400 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    {/* Header: Company & Status Badge */}
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <div className="flex items-center gap-1.5 text-xs text-gray-500 font-bold mb-0.5">
                          <Building2 className="w-3.5 h-3.5 text-gray-400" />
                          <span>{proj.company.name}</span>
                        </div>
                        <h3 className="text-base font-extrabold text-gray-900 leading-snug">
                          {proj.title}
                        </h3>
                      </div>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-md border font-extrabold shrink-0 ${statusCfg.badge}`}
                      >
                        {statusCfg.label.split("(")[0]}
                      </span>
                    </div>

                    {proj.description && (
                      <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                        {proj.description}
                      </p>
                    )}

                    {/* Developer / Seller badges */}
                    <div className="flex flex-wrap gap-2 text-[11px]">
                      {proj.leadDeveloper ? (
                        <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-medium flex items-center gap-1">
                          <Users2 className="w-3 h-3 text-gray-400" />
                          Dev: <strong>{proj.leadDeveloper.name}</strong>
                        </span>
                      ) : (
                        <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-medium text-[10px]">
                          Sin desarrollador asignado
                        </span>
                      )}
                    </div>

                    {/* Phases Progress Bar */}
                    <div className="p-3 bg-gray-50 border border-gray-100 rounded-xl space-y-1.5">
                      <div className="flex justify-between text-[11px] font-bold text-gray-700">
                        <span className="flex items-center gap-1">
                          <Layers className="w-3.5 h-3.5 text-gray-400" />
                          Fases Ágiles ({readyPhases}/{totalPhases})
                        </span>
                        <span>{progressPct}% listas</span>
                      </div>
                      <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-[#09090b] h-full rounded-full transition-all"
                          style={{ width: `${progressPct}%` }}
                        />
                      </div>
                    </div>

                    {/* Payments Mini Breakdown */}
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between items-center text-gray-500 font-medium">
                        <span>Cobrado / Total:</span>
                        <span className="font-bold text-gray-900">
                          USD ${paidAmount.toLocaleString()} / ${proj.totalValue.toLocaleString()}
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-1 pt-1">
                        {proj.payments.slice(0, 3).map((pay, i) => (
                          <div
                            key={pay.id || i}
                            className={`p-1 text-[9px] rounded font-bold text-center border truncate ${
                              pay.status === "COBRADO"
                                ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                                : pay.status === "FACTURADO"
                                ? "bg-blue-50 text-blue-800 border-blue-200"
                                : "bg-gray-100 text-gray-500 border-gray-200"
                            }`}
                          >
                            {pay.milestone === "ADELANTO_30"
                              ? "30% Adelanto"
                              : pay.milestone === "PRE_PRODUCCION_40"
                              ? "40% Pre-prod"
                              : pay.milestone === "CIERRE_30"
                              ? "30% Cierre"
                              : pay.concept}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Link */}
                  <Link
                    href={`/dashboard/projects/${proj.id}`}
                    className="w-full bg-gray-50 hover:bg-[#09090b] text-gray-800 hover:text-white py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all border border-gray-200 hover:border-black"
                  >
                    <span>Gestionar Fases & Cobros</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Modal: New Project */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 font-['Hanken_Grotesk',sans-serif]">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] shadow-2xl border border-gray-100 flex flex-col overflow-hidden">
            <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h3 className="text-base sm:text-lg font-black text-gray-900">
                Nuevo Proyecto Tecnológico
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 text-gray-400 hover:text-gray-900 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateProject} className="p-5 overflow-y-auto space-y-4 text-xs">
              <div>
                <label className="block font-bold text-gray-700 mb-1">Nombre del Proyecto *</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Ej: Sistema Integral de Gestión y Turnos"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-[#f4b400]"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Empresa Cliente *</label>
                <select
                  required
                  value={newCompanyId}
                  onChange={(e) => setNewCompanyId(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-[#f4b400] bg-white font-medium"
                >
                  <option value="">-- Seleccionar empresa --</option>
                  {companies.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Presupuesto Total (USD)</label>
                  <input
                    type="number"
                    value={newTotalValue}
                    onChange={(e) => setNewTotalValue(e.target.value)}
                    placeholder="Ej: 4500"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-[#f4b400]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">Responsable Técnico (Lead Dev)</label>
                  <select
                    value={newLeadDevId}
                    onChange={(e) => setNewLeadDevId(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-[#f4b400] bg-white"
                  >
                    <option value="">-- Asignar después --</option>
                    {users.map((u) => (
                      <option key={u.id} value={u.id}>
                        {u.name} ({u.role})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Descripción / Alcance Inicial</label>
                <textarea
                  rows={2}
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  placeholder="Detalles sobre lo acordado con el cliente..."
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-[#f4b400]"
                />
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 space-y-1">
                <span className="font-bold text-gray-800 block text-[11px]">
                  Automatización comercial incluida:
                </span>
                <p className="text-[11px] text-gray-500">
                  Se generarán automáticamente los 3 hitos de cobro de SinapsIA (30% Adelanto, 40% Entrega Pre-producción, 30% Cierre) y las dos fases iniciales del sprint ágil.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-gray-600 font-bold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={creating}
                  className="bg-[#09090b] hover:bg-[#f4b400] text-white hover:text-black font-bold px-5 py-2 rounded-xl transition-colors cursor-pointer"
                >
                  {creating ? "Creando..." : "Crear Proyecto"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
