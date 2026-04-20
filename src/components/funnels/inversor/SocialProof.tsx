"use client";

import { motion } from "framer-motion";

const logos = ["Forbes", "Bloomberg", "Airbnb", "Booking.com", "Trivago"];

export default function SocialProof() {
  return (
    <section className="py-10 border-y border-stone-800/50 bg-stone-900/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <p className="text-center text-stone-500 text-sm uppercase tracking-widest mb-6">Modelo de negocio reconocido en</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, i) => (
            <motion.span 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-xl md:text-2xl font-bold text-stone-400"
            >
              {logo}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
