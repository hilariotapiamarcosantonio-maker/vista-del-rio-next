"use client";

import { motion } from "framer-motion";
import { Home, Move, Users, HeartPulse } from "lucide-react";

const features = [
  { icon: Home, title: "Nivel 01 Garantizado", desc: "Acceso directo desde el estacionamiento hasta tu puerta. Cero escaleras, cero depender de ascensores." },
  { icon: Move, title: "Cero Barreras", desc: "Sin escalones ni desniveles. Puertas amplias certificadas para accesibilidad universal y comodidad." },
  { icon: Users, title: "Comunidad Activa", desc: "Espacios comunes diseñados para la socialización natural: piscina, gazebo y áreas verdes de caminata." },
  { icon: HeartPulse, title: "Salud a Minutos", desc: "Ubicación estratégica a minutos de los mejores centros médicos y farmacias con servicio a domicilio." }
];

export default function RetirementFeatures() {
  return (
    <section className="py-24 bg-stone-950 text-stone-200" id="ergonomia">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="w-16 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Diseñado para tu <span className="text-emerald-500 font-medium">libertad de movimiento</span>
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto text-lg">
            Cada metro cuadrado de Vista del Río fue pensado para garantizar tu independencia, comodidad y seguridad cada día del año.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div 
                key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="flex gap-6 bg-stone-900/30 border border-stone-800 p-8 rounded-2xl"
              >
                <div className="shrink-0">
                  <div className="bg-emerald-900/20 w-16 h-16 rounded-2xl flex items-center justify-center border border-emerald-800/50">
                    <Icon className="text-emerald-500" size={28} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-stone-200 mb-2">{feat.title}</h3>
                  <p className="text-stone-400 leading-relaxed">{feat.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
