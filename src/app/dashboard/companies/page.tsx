"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import {
  Building2,
  MapPin,
  Globe,
  Phone,
  Users,
  Search,
  X,
  Briefcase,
} from "lucide-react";

interface Company {
  id: string;
  name: string;
  industry: string | null;
  size: string | null;
  location: string | null;
  website: string | null;
  phone: string | null;
  notes: string | null;
  isClient: boolean;
  contacts: Array<{ id: string; name: string; role: string | null }>;
  opportunities: Array<{ id: string; title: string; stage: string; estimatedValue: number | null }>;
}

export default function CompaniesPage() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form state
  const [name, setName] = useState("");
  const [industry, setIndustry] = useState("");
  const [size, setSize] = useState("");
  const [location, setLocation] = useState("");
  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const res = await fetch("/api/companies");
      if (res.ok) {
        const data = await res.json();
        setCompanies(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleCreateCompany = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch("/api/companies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, industry, size, location, website, phone, notes }),
      });

      if (res.ok) {
        setIsModalOpen(false);
        setName("");
        setIndustry("");
        setSize("");
        setLocation("");
        setWebsite("");
        setPhone("");
        setNotes("");
        fetchCompanies();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  const filtered = companies.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.industry?.toLowerCase().includes(search.toLowerCase()) ||
    c.location?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex-1 flex flex-col min-w-0 font-['Hanken_Grotesk',sans-serif]">
      <Header
        title="Directorio de Empresas"
        subtitle="Cuentas B2B gestionadas por SinapsIA"
        onNewAction={() => setIsModalOpen(true)}
        newActionLabel="Nueva Empresa"
      />

      <div className="p-8 space-y-6">
        {/* Search Bar */}
        <div className="relative max-w-md">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por nombre, industria o ubicación..."
            className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:border-[#f4b400] shadow-xs"
          />
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((company) => (
            <div
              key={company.id}
              className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs hover:border-[#f4b400] transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-extrabold text-gray-900 text-base leading-snug">
                      {company.name}
                    </h3>
                    {company.industry && (
                      <span className="inline-block mt-1 text-[11px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-semibold">
                        {company.industry}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <div className="p-2 bg-amber-50 rounded-lg text-[#f4b400]">
                      <Building2 className="w-4 h-4" />
                    </div>
                    {company.isClient ? (
                      <span className="text-[9px] bg-emerald-100 text-emerald-700 border border-emerald-300 px-1.5 py-0.5 rounded-full font-extrabold uppercase">
                        Cliente ✓
                      </span>
                    ) : (
                      <span className="text-[9px] bg-gray-100 text-gray-500 border border-gray-200 px-1.5 py-0.5 rounded-full font-bold uppercase">
                        Prospecto
                      </span>
                    )}
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-1.5 text-xs text-gray-600">
                  {company.location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span>{company.location}</span>
                    </div>
                  )}
                  {company.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span>{company.phone}</span>
                    </div>
                  )}
                  {company.website && (
                    <div className="flex items-center gap-2">
                      <Globe className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <a
                        href={company.website}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 hover:underline truncate"
                      >
                        {company.website.replace("https://", "")}
                      </a>
                    </div>
                  )}
                </div>

                {company.notes && (
                  <p className="text-xs text-gray-500 bg-gray-50 p-2.5 rounded-lg border border-gray-100 line-clamp-2">
                    {company.notes}
                  </p>
                )}
              </div>

              {/* Bottom Tags (Contacts & Deals count) */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-1.5 font-medium">
                  <Users className="w-3.5 h-3.5 text-gray-400" />
                  <span>{company.contacts.length} {company.contacts.length === 1 ? "contacto" : "contactos"}</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <Briefcase className="w-3.5 h-3.5 text-gray-400" />
                  <span>{company.opportunities.length} {company.opportunities.length === 1 ? "proyecto" : "proyectos"}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Company Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-gray-100">
            <div className="flex justify-between items-center mb-5 pb-3 border-b border-gray-100">
              <h3 className="font-black text-gray-900 text-lg">Nueva Empresa B2B</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-900 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateCompany} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Nombre de la Empresa</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="ej. Distribuidora Federal SRL"
                  className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#f4b400]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Industria / Rubro</label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#f4b400] bg-white cursor-pointer"
                  >
                    <option value="">Seleccionar rubro...</option>
                    <option value="Salud / Clínicas / Diagnóstico">Salud / Clínicas / Diagnóstico</option>
                    <option value="Logística / Distribución / Transporte">Logística / Distribución / Transporte</option>
                    <option value="Servicios Profesionales / Contable / Legal">Servicios Profesionales / Contable / Legal</option>
                    <option value="Comercio / Retail / E-commerce">Comercio / Retail / E-commerce</option>
                    <option value="Industria / Manufactura / Producción">Industria / Manufactura / Producción</option>
                    <option value="Inmobiliario / Construcción">Inmobiliario / Construcción</option>
                    <option value="Gastronomía / Hotelería">Gastronomía / Hotelería</option>
                    <option value="Educación / Instituciones">Educación / Instituciones</option>
                    <option value="Tecnología / SaaS">Tecnología / SaaS</option>
                    <option value="Agro / Campo">Agro / Campo</option>
                    <option value="Otro">Otro rubro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Tamaño</label>
                  <input
                    type="text"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    placeholder="ej. 20-50 empleados"
                    className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#f4b400]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-bold uppercase text-gray-700">Localidad / Ubicación</label>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      list="locations-list"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Seleccionar o escribir localidad..."
                      className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#f4b400] bg-white"
                    />
                    <datalist id="locations-list">
                      {Array.from(
                        new Set([
                          "Buenos Aires, CABA",
                          "Rosario, Santa Fe",
                          "Córdoba Capital",
                          "Mendoza Capital",
                          "Mar del Plata, Buenos Aires",
                          "La Plata, Buenos Aires",
                          "San Miguel de Tucumán",
                          "Salta Capital",
                          "Neuquén Capital",
                          "Santa Fe Capital",
                          "San Juan Capital",
                          "Posadas, Misiones",
                          "Resistencia, Chaco",
                          "Bahía Blanca, Buenos Aires",
                          ...companies
                            .map((c) => c.location)
                            .filter((loc): loc is string => !!loc && loc.trim().length > 0),
                        ])
                      ).map((loc) => (
                        <option key={loc} value={loc} />
                      ))}
                    </datalist>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-1">Escribí una nueva o elegí una de la lista</p>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Teléfono</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="ej. +54 11 ..."
                    className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#f4b400]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Sitio Web</label>
                <input
                  type="url"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="https://..."
                  className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#f4b400]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Notas / Contexto Operativo</label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Observaciones sobre sus sistemas o procesos..."
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
                  disabled={saving}
                  className="px-5 py-2 text-xs font-bold bg-[#f4b400] hover:bg-[#e0a400] text-[#09090b] rounded-lg shadow-sm cursor-pointer"
                >
                  {saving ? "Guardando..." : "Guardar Empresa"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
