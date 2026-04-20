"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TrendingUp, Building2, Palmtree } from "lucide-react";

const funnels = [
  {
    id: "inversor",
    title: "Alto Rendimiento",
    desc: "Maximiza tu capital con retornos de hasta 18% anual operando bajo el modelo vacacional Airbnb.",
    icon: TrendingUp,
    href: "/inversor",
    color: "text-yellow-500",
  },
  {
    id: "corporativo",
    title: "Ingresos Pasivos",
    desc: "Contratos a largo plazo (12+ meses) con ejecutivos internacionales. Cero fricción operativa.",
    icon: Building2,
    href: "/corporativo",
    color: "text-blue-500",
  },
  {
    id: "retiro",
    title: "Retiro y Calidad de Vida",
    desc: "Entorno accesible, seguro y con los beneficios fiscales de la Ley 171-07 para pensionados.",
    icon: Palmtree,
    href: "/retiro",
    color: "text-emerald-500",
  }
];

export default function GatewayHub() {
  return (
    <main className="min-h-screen bg-stone-950 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-yellow-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-stone-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="z-10 text-center mb-16 mt-8">
        <h1 className="text-4xl md:text-6xl font-light text-stone-200 mb-6 tracking-wide">
          VISTA <span className="text-yellow-600 font-medium">DEL RÍO</span>
        </h1>
        <p className="text-stone-400 max-w-xl mx-auto text-lg md:text-xl font-light">
          Un activo inmobiliario premium. Tres modelos de rentabilidad. Elige tu perfil de inversión.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl w-full z-10 mb-12">
        {funnels.map((funnel, i) => {
          const Icon = funnel.icon;
          return (
            <Link href={funnel.href} key={funnel.id} className="block h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="h-full bg-stone-900/40 backdrop-blur-md border border-stone-800 hover:border-stone-600 p-10 rounded-2xl transition-all cursor-pointer group flex flex-col"
              >
                <Icon className={`w-14 h-14 mb-8 ${funnel.color} group-hover:scale-110 transition-transform duration-300`} />
                <h2 className="text-2xl font-medium text-stone-200 mb-4">{funnel.title}</h2>
                <p className="text-stone-400 leading-relaxed font-light">{funnel.desc}</p>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
