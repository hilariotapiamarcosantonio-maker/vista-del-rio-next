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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden flex items-center justify-center text-center">
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] blur-[120px] rounded-full pointer-events-none opacity-20 ${glowClass}`}></div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 relative z-10 max-w-5xl"
      >
        <motion.p variants={itemVariants} className="text-stone-400 uppercase tracking-widest text-xs md:text-sm font-semibold mb-6">
          {eyebrow}
        </motion.p>
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-light text-stone-100 mb-6 leading-tight">
          {title}
        </motion.h1>
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto font-light mb-10">
          {subtitle}
        </motion.p>
        <motion.div variants={itemVariants}>
          <a href="#contacto" className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg text-stone-950 font-medium transition-transform hover:scale-105 ${btnClass}`}>
            {ctaText} <ArrowRight size={18} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
