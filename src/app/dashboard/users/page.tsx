"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import {
  UserPlus,
  ShieldCheck,
  Briefcase,
  Code,
  Users,
  Search,
  X,
  Trash2,
  Lock,
  Mail,
  User,
} from "lucide-react";

type RoleKey = "ADMIN" | "CONSULTANT" | "SALES" | "DEVELOPER";

interface TeamUser {
  id: string;
  name: string;
  email: string;
  role: RoleKey;
  createdAt: string;
  _count: {
    opportunities: number;
    activities: number;
  };
}

const ROLE_CONFIG: Record<RoleKey, { label: string; color: string; icon: React.ElementType }> = {
  ADMIN: { label: "Administrador", color: "bg-red-50 text-red-700 border-red-200", icon: ShieldCheck },
  CONSULTANT: { label: "Consultor Comercial", color: "bg-amber-50 text-amber-800 border-amber-200", icon: Briefcase },
  SALES: { label: "Ejecutivo de Ventas", color: "bg-blue-50 text-blue-700 border-blue-200", icon: Users },
  DEVELOPER: { label: "Técnico / Desarrollador", color: "bg-purple-50 text-purple-700 border-purple-200", icon: Code },
};

export default function UsersPage() {
  const [users, setUsers] = useState<TeamUser[]>([]);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<RoleKey>("CONSULTANT");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch("/api/users");
      if (res.ok) {
        const data = await res.json();
        setUsers(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Error al crear usuario");
      }

      setIsModalOpen(false);
      setName("");
      setEmail("");
      setPassword("");
      setRole("CONSULTANT");
      fetchUsers();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error al crear usuario");
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteUser = async (userId: string, userName: string) => {
    if (!confirm(`¿Estás seguro de que querés eliminar al usuario ${userName}?`)) return;

    try {
      const res = await fetch(`/api/users/${userId}`, { method: "DELETE" });
      if (res.ok) {
        fetchUsers();
      } else {
        const data = await res.json();
        alert(data.error || "No se pudo eliminar el usuario");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex-1 flex flex-col min-w-0 font-['Hanken_Grotesk',sans-serif]">
      <Header
        title="Gestión de Usuarios & Equipo"
        subtitle="Miembros del equipo comercial, consultores y administradores"
        onNewAction={() => setIsModalOpen(true)}
        newActionLabel="Nuevo Usuario"
      />

      <div className="p-8 space-y-6">
        {/* Search */}
        <div className="relative max-w-md">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar usuario por nombre o email..."
            className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:border-[#f4b400] shadow-xs"
          />
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-xs overflow-hidden">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase font-bold text-gray-500">
                <th className="py-3.5 px-6">Miembro</th>
                <th className="py-3.5 px-6">Correo Electrónico</th>
                <th className="py-3.5 px-6">Rol en SinapsIA</th>
                <th className="py-3.5 px-6">Oportunidades Asignadas</th>
                <th className="py-3.5 px-6 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-gray-400 text-xs">
                    No se encontraron usuarios
                  </td>
                </tr>
              ) : (
                filtered.map((user) => {
                  const roleConfig = ROLE_CONFIG[user.role] || ROLE_CONFIG.CONSULTANT;
                  const Icon = roleConfig.icon;

                  return (
                    <tr key={user.id} className="hover:bg-gray-50/80 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-[#09090b] text-[#f4b400] font-black flex items-center justify-center text-xs shrink-0">
                            {user.name[0]}
                          </div>
                          <div>
                            <div className="font-bold text-gray-900">{user.name}</div>
                            <div className="text-[11px] text-gray-400">
                              Alta: {new Date(user.createdAt).toLocaleDateString("es-AR")}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 font-medium text-gray-700">
                        {user.email}
                      </td>
                      <td className="py-4 px-6">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${roleConfig.color}`}>
                          <Icon className="w-3.5 h-3.5" />
                          <span>{roleConfig.label}</span>
                        </span>
                      </td>
                      <td className="py-4 px-6 text-gray-600 font-semibold text-xs">
                        {user._count.opportunities} {user._count.opportunities === 1 ? "oportunidad" : "oportunidades"}
                      </td>
                      <td className="py-4 px-6 text-right">
                        <button
                          onClick={() => handleDeleteUser(user.id, user.name)}
                          title="Eliminar usuario"
                          className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* New User Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-gray-100">
            <div className="flex justify-between items-center mb-5 pb-3 border-b border-gray-100">
              <h3 className="font-black text-gray-900 text-lg">Nuevo Usuario del Equipo</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-900 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-xs font-medium">
                {error}
              </div>
            )}

            <form onSubmit={handleCreateUser} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Nombre Completo</label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="ej. Agustín Gómez"
                    className="w-full text-sm border border-gray-300 rounded-lg pl-9 pr-3 py-2 outline-none focus:border-[#f4b400]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Correo Electrónico (Login)</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="agustin@sinapsia.com.ar"
                    className="w-full text-sm border border-gray-300 rounded-lg pl-9 pr-3 py-2 outline-none focus:border-[#f4b400]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Contraseña Inicial</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full text-sm border border-gray-300 rounded-lg pl-9 pr-3 py-2 outline-none focus:border-[#f4b400]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Rol / Permisos</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value as RoleKey)}
                  className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#f4b400]"
                >
                  <option value="CONSULTANT">Consultor Comercial (Relevamiento y Diagnóstico)</option>
                  <option value="SALES">Ejecutivo de Ventas (Prospección y Contacto)</option>
                  <option value="DEVELOPER">Técnico / Desarrollador</option>
                  <option value="ADMIN">Administrador (Acceso total)</option>
                </select>
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
                  {saving ? "Creando..." : "Crear Usuario"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
