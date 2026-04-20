"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Invertí $90,000 hace 18 meses y ya recuperé el 24% de mi capital. El equipo gestiona todo, yo solo reviso los depósitos mensuales.",
    author: "Carlos R.",
    role: "Empresario · Medellín",
    initials: "CR"
  },
  {
    text: "Llevaba años buscando una alternativa a los CDTs. Con su modelo de alquiler vacacional genero el triple de rendimiento y todo en dólares.",
    author: "María V.",
    role: "Consultora · Bogotá",
    initials: "MV"
  },
  {
    text: "El proceso fue rápido y transparente. Desde que firmé hasta que empecé a recibir ingresos pasaron menos de 60 días. Increíble equipo.",
    author: "Javier P.",
    role: "Ingeniero · Ciudad de México",
    initials: "JP"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-stone-950 text-stone-200" id="testimonios">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="w-16 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Lo que dicen nuestros <span className="text-yellow-600 font-medium">inversionistas</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-stone-900/40 border border-stone-800 p-8 rounded-2xl relative"
            >
              <div className="flex gap-1 text-yellow-500 mb-6">
                {[...Array(5)].map((_, index) => <Star key={index} size={16} fill="currentColor" />)}
              </div>
              <p className="text-stone-400 leading-relaxed font-light mb-8 italic">"{t.text}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center text-stone-400 font-medium">
                  {t.initials}
                </div>
                <div>
                  <strong className="block text-stone-200">{t.author}</strong>
                  <span className="text-stone-500 text-sm">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
