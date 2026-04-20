"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  ctaText: string;
  glowClass: string;
  btnClass: string;
}

export default function HeroSection({ eyebrow, title, subtitle, ctaText, glowClass, btnClass }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden flex items-center justify-center text-center">
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] blur-[120px] rounded-full pointer-events-none opacity-20 ${glowClass}`}></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-stone-400 uppercase tracking-widest text-xs md:text-sm font-semibold mb-6">
          {eyebrow}
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-light text-stone-100 mb-6 leading-tight">
          {title}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto font-light mb-10">
          {subtitle}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <a href="#contacto" className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg text-stone-950 font-medium transition-transform hover:scale-105 ${btnClass}`}>
            {ctaText} <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
