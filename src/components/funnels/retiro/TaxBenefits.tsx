"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendingDown, Car, Package } from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    percent: "50%",
    title: "Exención en ganancia de capital",
    desc: "Disfruta de una exención del 50% sobre el impuesto a la ganancia de capital generado por bienes inmuebles. Menos impuestos, más retorno en tu retiro."
  },
  {
    icon: Car,
    percent: "0%",
    title: "Importación de vehículo sin aranceles",
    desc: "Trae tu automóvil desde tu país de origen libre de impuestos de importación y aranceles aduaneros. Un privilegio exclusivo."
  },
  {
    icon: Package,
    percent: "Total",
    title: "Mudanza libre de impuestos",
    desc: "Ingresa tus muebles, equipos del hogar y enseres personales sin pagar aranceles de aduana. Llega con todo lo tuyo, sin costos ocultos."
  }
];

export default function TaxBenefits() {
  return (
    <section className="py-24 bg-stone-950 text-stone-200" id="incentivos">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-900/30 text-emerald-400 border border-emerald-800/50 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <ShieldCheck size={18} />
            Ley 171-07 · Pensionados en RD
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Tu retiro también puede ser <span className="text-emerald-500 font-medium">fiscalmente inteligente</span>
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto text-lg">
            Un paquete de incentivos sin paralelo en el Caribe diseñado exclusivamente para atraer pensionados y rentistas extranjeros.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-stone-900/40 border border-stone-800 hover:border-emerald-900/50 p-8 rounded-2xl relative overflow-hidden group transition-colors"
              >
                <div className="absolute top-[-5%] right-[-5%] w-32 h-32 bg-emerald-600/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-emerald-600/20 transition-all"></div>
                
                <div className="flex justify-between items-start mb-8">
                  <div className="bg-stone-950 p-3 rounded-xl border border-stone-800">
                    <Icon className="w-8 h-8 text-emerald-500" />
                  </div>
                  <span className="text-3xl font-light text-stone-300">{item.percent}</span>
                </div>
                
                <h3 className="text-xl font-medium text-stone-200 mb-4">{item.title}</h3>
                <p className="text-stone-400 leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
