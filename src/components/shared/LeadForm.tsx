"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function LeadForm({ btnClass, funnelName }: { btnClass: string, funnelName: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    whatsapp: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, funnel: funnelName }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="py-24 bg-stone-950 border-t border-stone-900" id="contacto">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-light text-stone-200 mb-4">Solicita tu <span className="font-medium">Dossier de Inversión</span></h2>
        <p className="text-stone-400 mb-10 text-lg">Déjanos tus datos para recibir la proyección detallada y agendar tu sesión estratégica para el modelo {funnelName}.</p>
        
        {status === "success" ? (
          <div className="bg-emerald-900/20 border border-emerald-800 text-emerald-400 p-8 rounded-2xl animate-in fade-in zoom-in duration-500">
            <h3 className="text-xl font-medium mb-2">¡Solicitud recibida con éxito!</h3>
            <p className="text-emerald-500/80">Nuestro equipo de asesores se comunicará contigo en breve para enviarte el dossier.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 text-left bg-stone-900/50 p-8 rounded-2xl border border-stone-800 backdrop-blur-sm">
            <div>
              <label className="block text-sm font-medium text-stone-400 mb-2">Nombre completo</label>
              <input required type="text" name="nombre" value={formData.nombre} onChange={handleChange} className="w-full bg-stone-950 border border-stone-800 rounded-lg px-4 py-3 text-stone-200 focus:outline-none focus:border-stone-500 transition-colors" placeholder="Ej. Carlos Mendez" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-stone-400 mb-2">Correo electrónico</label>
                <input required type="email" name="correo" value={formData.correo} onChange={handleChange} className="w-full bg-stone-950 border border-stone-800 rounded-lg px-4 py-3 text-stone-200 focus:outline-none focus:border-stone-500 transition-colors" placeholder="correo@empresa.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-400 mb-2">WhatsApp</label>
                <input required type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className="w-full bg-stone-950 border border-stone-800 rounded-lg px-4 py-3 text-stone-200 focus:outline-none focus:border-stone-500 transition-colors" placeholder="+1 (809) 000-0000" />
              </div>
            </div>
            {status === "error" && <p className="text-red-400 text-sm text-center">Hubo un error al enviar tus datos. Inténtalo de nuevo.</p>}
            <button type="submit" disabled={status === "loading"} className={`w-full flex items-center justify-center gap-2 py-4 rounded-lg font-medium transition-all ${btnClass} disabled:opacity-70`}>
              {status === "loading" ? "Procesando de forma segura..." : "Quiero mi Dossier"} <Send size={18} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
