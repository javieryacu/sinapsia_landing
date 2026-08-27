"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import {
  Building2,
  Mail,
  Phone,
  Search,
  X,
  Crown,
} from "lucide-react";

interface Contact {
  id: string;
  name: string;
  role: string | null;
  email: string | null;
  phone: string | null;
  isDecisionMaker: boolean;
  company: { id: string; name: string; industry: string | null };
}

interface Company {
  id: string;
  name: string;
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form state
  const [companyId, setCompanyId] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isDecisionMaker, setIsDecisionMaker] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [contRes, compRes] = await Promise.all([
        fetch("/api/contacts"),
        fetch("/api/companies"),
      ]);

      if (contRes.ok && compRes.ok) {
        const contData = await contRes.json();
        const compData = await compRes.json();
        setContacts(contData);
        setCompanies(compData);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleCreateContact = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyId) {
      alert("Seleccioná una empresa");
      return;
    }

    setSaving(true);
    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ companyId, name, role, email, phone, isDecisionMaker }),
      });

      if (res.ok) {
        setIsModalOpen(false);
        setName("");
        setRole("");
        setEmail("");
        setPhone("");
        setIsDecisionMaker(false);
        fetchData();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  const filtered = contacts.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.company.name.toLowerCase().includes(search.toLowerCase()) ||
    c.role?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex-1 flex flex-col min-w-0 font-['Hanken_Grotesk',sans-serif]">
      <Header
        title="Directorio de Contactos"
        subtitle="Personas clave y decisores en cuentas B2B"
        onNewAction={() => setIsModalOpen(true)}
        newActionLabel="Nuevo Contacto"
      />

      <div className="p-8 space-y-6">
        {/* Search */}
        <div className="relative max-w-md">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por nombre, empresa o cargo..."
            className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:border-[#f4b400] shadow-xs"
          />
        </div>

        {/* Contacts Table */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-xs overflow-hidden">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase font-bold text-gray-500">
                <th className="py-3.5 px-6">Contacto</th>
                <th className="py-3.5 px-6">Empresa</th>
                <th className="py-3.5 px-6">Cargo / Rol</th>
                <th className="py-3.5 px-6">Decisor</th>
                <th className="py-3.5 px-6">Email & Teléfono</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-gray-400 text-xs">
                    No se encontraron contactos
                  </td>
                </tr>
              ) : (
                filtered.map((contact) => (
                  <tr key={contact.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gray-100 text-gray-800 font-bold flex items-center justify-center text-xs shrink-0">
                          {contact.name[0]}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">{contact.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 font-semibold text-gray-800">
                      <div className="flex items-center gap-1.5">
                        <Building2 className="w-4 h-4 text-gray-400" />
                        <span>{contact.company.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-600">
                      {contact.role || "-"}
                    </td>
                    <td className="py-4 px-6">
                      {contact.isDecisionMaker ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                          <Crown className="w-3 h-3 text-[#f4b400]" />
                          <span>Decisor</span>
                        </span>
                      ) : (
                        <span className="text-xs text-gray-400">Operativo</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-xs text-gray-600 space-y-1">
                      {contact.email && (
                        <div className="flex items-center gap-1.5">
                          <Mail className="w-3 h-3 text-gray-400" />
                          <span>{contact.email}</span>
                        </div>
                      )}
                      {contact.phone && (
                        <div className="flex items-center gap-1.5">
                          <Phone className="w-3 h-3 text-gray-400" />
                          <span>{contact.phone}</span>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* New Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-gray-100">
            <div className="flex justify-between items-center mb-5 pb-3 border-b border-gray-100">
              <h3 className="font-black text-gray-900 text-lg">Nuevo Contacto</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-900 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateContact} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Empresa</label>
                <select
                  required
                  value={companyId}
                  onChange={(e) => setCompanyId(e.target.value)}
                  className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#f4b400]"
                >
                  <option value="">Seleccionar empresa...</option>
                  {companies.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Nombre Completo</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="ej. Dr. Juan Pérez"
                  className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#f4b400]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Cargo / Rol</label>
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="ej. Gerente de Operaciones, Director"
                  className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#f4b400]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@empresa.com"
                    className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#f4b400]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Teléfono / WhatsApp</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+54 9 11..."
                    className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#f4b400]"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="isDecisionMaker"
                  checked={isDecisionMaker}
                  onChange={(e) => setIsDecisionMaker(e.target.checked)}
                  className="w-4 h-4 rounded text-[#f4b400] focus:ring-[#f4b400] border-gray-300 cursor-pointer"
                />
                <label htmlFor="isDecisionMaker" className="text-xs font-bold text-gray-800 cursor-pointer">
                  ¿Es Tomador de Decisión (Decisor)?
                </label>
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
                  {saving ? "Guardando..." : "Guardar Contacto"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
