"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  ctaText: string;
  glowClass: string;
  btnClass: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function HeroSection({ 
  eyebrow, 
  title, 
  subtitle, 
  ctaText, 
  glowClass, 
  btnClass,
  imageSrc,
  imageAlt
}: HeroProps) {
  const containerVariants: Variants = {
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
        ease: "easeOut" as const
      }
    },
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden flex items-center justify-center">
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] blur-[120px] rounded-full pointer-events-none opacity-20 ${glowClass}`}></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className={`grid gap-12 items-center ${imageSrc ? 'grid-cols-1 lg:grid-cols-12 text-center lg:text-left' : 'grid-cols-1 text-center max-w-4xl mx-auto'}`}>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`${imageSrc ? 'lg:col-span-7 flex flex-col items-center lg:items-start' : 'w-full flex flex-col items-center'}`}
          >
            <motion.p variants={itemVariants} className="text-stone-400 uppercase tracking-widest text-xs md:text-sm font-semibold mb-6">
              {eyebrow}
            </motion.p>
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-light text-stone-100 mb-6 leading-tight">
              {title}
            </motion.h1>
            <motion.p variants={itemVariants} className={`text-base md:text-lg text-stone-400 font-light mb-10 ${imageSrc ? 'max-w-xl' : 'max-w-2xl mx-auto'}`}>
              {subtitle}
            </motion.p>
            <motion.div variants={itemVariants}>
              <a href="#contacto" className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg text-stone-950 font-medium transition-transform hover:scale-105 ${btnClass}`}>
                {ctaText} <ArrowRight size={18} />
              </a>
            </motion.div>
          </motion.div>

          {imageSrc && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="lg:col-span-5 relative w-full aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden border border-stone-800 shadow-2xl bg-stone-900/50 backdrop-blur-md group"
            >
              <Image 
                src={imageSrc} 
                alt={imageAlt || "Vista del Río"} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent pointer-events-none"></div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

