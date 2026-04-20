"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Briefcase, Plane } from "lucide-react";

const corporativoPros = [
  { title: "Ingresos predecibles mes a mes", desc: "Contratos de 12 a 24 meses. Sabes exactamente cuánto entra cada mes." },
  { title: "Inquilino paga sus servicios", desc: "Electricidad, agua y telefonía van a nombre del arrendatario. Cero costos operativos fijos." },
  { title: "Desgaste mínimo del activo", desc: "Un ejecutivo estable cuida el espacio como su hogar. Sin rotación semanal." },
  { title: "Cero gestión operativa diaria", desc: "No hay check-ins, check-outs, ni soporte turístico 24/7." }
];

const airbnbCons = [
  { title: "Ingresos variables e impredecibles", desc: "Dependen de la temporada y demanda fluctuante." },
  { title: "Propietario asume los servicios", desc: "Costos fijos altos (luz, agua, internet) que reducen el margen real." },
  { title: "Desgaste acelerado del activo", desc: "Rotación constante de huéspedes y limpieza intensiva." },
  { title: "Alta carga operativa", desc: "Requiere gestión activa o pagar un 20-30% a una administradora." }
];

export default function ComparativeMatrix() {
  return (
    <section className="py-24 bg-stone-950 text-stone-200" id="comparativa">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            ¿Por qué el modelo corporativo <span className="text-blue-500 font-medium">supera al vacacional?</span>
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto text-lg">
            El alquiler a largo plazo ofrece ventajas estructurales que los inversores serios valoran por encima de las rentas pico temporales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Columna Ganadora: Corporativo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-stone-900/60 border-2 border-blue-900/50 rounded-2xl p-8 relative overflow-hidden backdrop-blur-sm"
          >
            <div className="absolute top-0 right-0 p-24 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6">
              Recomendado
            </div>
            <h3 className="text-2xl font-medium mb-8 flex items-center gap-3 text-stone-100">
              <Briefcase className="text-blue-500" /> Alquiler Corporativo (Largo Plazo)
            </h3>
            <ul className="space-y-6 relative z-10">
              {corporativoPros.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="text-blue-500 w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <strong className="block text-stone-200 font-medium">{item.title}</strong>
                    <span className="text-stone-400 text-sm leading-relaxed">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Columna Inferior: Vacacional */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-stone-900/30 border border-stone-800 rounded-2xl p-8 backdrop-blur-sm opacity-80"
          >
            <h3 className="text-2xl font-light mb-8 flex items-center gap-3 text-stone-400 mt-10">
              <Plane className="text-stone-500" /> Alquiler Vacacional (Airbnb)
            </h3>
            <ul className="space-y-6">
              {airbnbCons.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <XCircle className="text-stone-600 w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <strong className="block text-stone-400 font-medium">{item.title}</strong>
                    <span className="text-stone-500 text-sm leading-relaxed">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
