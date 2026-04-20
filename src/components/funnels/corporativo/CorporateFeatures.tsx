"use client";

import { motion } from "framer-motion";
import { Refrigerator, Wind, ShieldCheck, Wifi } from "lucide-react";

const features = [
  { icon: Refrigerator, title: "Línea Blanca Premium", desc: "Nevera side-by-side, estufa de empotrar, torre de lavado y lavavajillas integrados." },
  { icon: Wind, title: "Climatización Total", desc: "A/C en habitaciones y sala, garantizando el estándar exigido por ejecutivos internacionales." },
  { icon: ShieldCheck, title: "Terminaciones de Lujo", desc: "Pisos de porcelanato, cocina con tope de cuarzo y puerta blindada de seguridad." },
  { icon: Wifi, title: "Atractivos Corporativos", desc: "Preinstalación de fibra óptica (1 Gbps) y parqueo techado designado." }
];

export default function CorporateFeatures() {
  return (
    <section className="py-24 bg-stone-950 text-stone-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Un activo completamente <span className="text-blue-500 font-medium">listo para rentar</span>
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto text-lg">
            Olvídate de amueblar o preparar la unidad. Se entrega equipada con los estándares requeridos por el perfil corporativo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div 
                key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="bg-stone-900/40 border border-stone-800 p-8 rounded-2xl hover:border-blue-900/50 transition-colors group"
              >
                <div className="bg-stone-950 w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-stone-800 group-hover:scale-110 transition-transform">
                  <Icon className="text-blue-500" size={24} />
                </div>
                <h3 className="text-xl font-medium text-stone-200 mb-3">{feat.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{feat.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
