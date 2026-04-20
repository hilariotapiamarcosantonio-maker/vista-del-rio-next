"use client";

import { useState } from "react";
import { Send, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function LeadForm({ btnClass, funnelName }: { btnClass: string, funnelName: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ nombre: "", correo: "", whatsapp: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, funnel: funnelName }),
      });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-24 bg-stone-950 relative overflow-hidden" id="contacto">
      {/* Brillos sutiles de fondo para aspecto Premium */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-stone-700 to-transparent"></div>
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-stone-800/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl md:text-5xl font-light text-stone-200 mb-4">Solicita tu <span className="font-medium">Dossier de Inversión</span></h2>
          <p className="text-stone-400 mb-10 text-lg md:text-xl font-light max-w-2xl mx-auto">Déjanos tus datos para recibir la proyección detallada y agendar tu sesión estratégica para el modelo {funnelName}.</p>
        </motion.div>
        
        {status === "success" ? (
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-stone-900/80 border border-emerald-500/30 text-emerald-400 p-10 rounded-2xl backdrop-blur-md shadow-2xl">
            <ShieldCheck className="w-16 h-16 mx-auto mb-4 text-emerald-500" />
            <h3 className="text-2xl font-medium mb-2 text-stone-100">¡Solicitud recibida con éxito!</h3>
            <p className="text-emerald-500/80 text-lg">Nuestro equipo de asesores se comunicará contigo en breve.</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.01 }}
            className="relative p-[1px] rounded-3xl bg-gradient-to-b from-stone-700 to-transparent shadow-2xl shadow-black/60"
          >
            <form 
              onSubmit={handleSubmit} 
              className="bg-stone-950/90 backdrop-blur-2xl p-8 md:p-10 rounded-[23px] text-left space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-stone-400 mb-2 tracking-wide uppercase">Nombre completo</label>
                <input required type="text" name="nombre" value={formData.nombre} onChange={handleChange} className="w-full bg-black/20 border border-stone-700/60 rounded-xl px-5 py-4 text-stone-200 focus:outline-none focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/20 transition-all placeholder:text-stone-600" placeholder="Ej. Carlos Mendez" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-stone-400 mb-2 tracking-wide uppercase">Correo electrónico</label>
                  <input required type="email" name="correo" value={formData.correo} onChange={handleChange} className="w-full bg-black/20 border border-stone-700/60 rounded-xl px-5 py-4 text-stone-200 focus:outline-none focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/20 transition-all placeholder:text-stone-600" placeholder="correo@empresa.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-400 mb-2 tracking-wide uppercase">WhatsApp</label>
                  <input required type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className="w-full bg-black/20 border border-stone-700/60 rounded-xl px-5 py-4 text-stone-200 focus:outline-none focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/20 transition-all placeholder:text-stone-600" placeholder="+1 (809) 000-0000" />
                </div>
              </div>
              {status === "error" && <p className="text-red-400 text-sm text-center">Hubo un error al enviar tus datos. Inténtalo de nuevo.</p>}
              
              <div className="pt-4">
                <button type="submit" disabled={status === "loading"} className={`w-full flex items-center justify-center gap-3 py-5 rounded-xl text-lg font-medium transition-all shadow-lg hover:shadow-xl ${btnClass} disabled:opacity-70 group`}>
                  {status === "loading" ? "Procesando de forma segura..." : "Quiero mi Dossier Confidencial"} 
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <p className="text-center text-xs text-stone-500 font-light mt-4">🔒 Tus datos son privados y están cifrados de extremo a extremo.</p>
            </form>
          </motion.div>
        )}
      </div>
    </section>
  );
}
