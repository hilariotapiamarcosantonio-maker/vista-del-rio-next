"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { IMAGES_VISTA_DEL_RIO } from "@/lib/constants";

type Category = "frente" | "sociales" | "habitaciones";

interface GalleryProps {
  glowClass?: string;
  activeColorClass?: string;
}

const categories: { key: Category; label: string }[] = [
  { key: "frente", label: "Fachada" },
  { key: "sociales", label: "Áreas Sociales" },
  { key: "habitaciones", label: "Habitaciones" }
];

export default function Gallery({ 
  glowClass = "bg-yellow-600/10", 
  activeColorClass = "bg-yellow-500 text-stone-950 font-medium"
}: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState<Category>("frente");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const activeImages = IMAGES_VISTA_DEL_RIO[activeCategory];

  // Lock scroll when lightbox is active
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [lightboxIndex]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, activeImages]);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : activeImages.length - 1));
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev < activeImages.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-24 bg-stone-950 text-stone-200 relative overflow-hidden" id="galeria">
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] blur-[150px] rounded-full pointer-events-none opacity-20 ${glowClass}`}></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-light mb-4">
            Galería del <span className="font-medium text-stone-100">Proyecto</span>
          </h2>
          <p className="text-stone-400 max-w-xl mx-auto text-sm md:text-base font-light">
            Recorre cada espacio de Vista del Río, desde su fachada imponente hasta sus acogedoras zonas de descanso.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-stone-900/50 p-1.5 rounded-xl border border-stone-800 backdrop-blur-sm relative">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => {
                    setActiveCategory(cat.key);
                    setLightboxIndex(null);
                  }}
                  className={`relative px-5 py-2.5 rounded-lg text-sm transition-colors duration-300 z-10 ${
                    isActive ? "" : "text-stone-400 hover:text-stone-200"
                  }`}
                >
                  {cat.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBackground"
                      className={`absolute inset-0 rounded-lg -z-10 ${activeColorClass}`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Image Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {activeImages.map((image, idx) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4 }}
                onClick={() => setLightboxIndex(idx)}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-stone-850 bg-stone-900 cursor-pointer shadow-md group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-stone-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-start justify-between gap-4">
                    <p className="text-stone-200 text-sm font-light leading-relaxed">
                      {image.alt}
                    </p>
                    <div className="shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20 text-white backdrop-blur-sm">
                      <Maximize2 size={14} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-stone-950/95 backdrop-blur-md p-4"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-stone-900/80 border border-stone-800 text-stone-300 hover:text-white transition-all hover:bg-stone-800 hover:scale-105"
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>

            {/* Main Lightbox Content */}
            <div className="relative w-full max-w-5xl aspect-video md:aspect-[16/10] lg:aspect-[16/9] flex items-center justify-center">
              
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-4 md:-left-16 z-10 p-3 rounded-full bg-stone-900/60 border border-stone-800 text-stone-300 hover:text-white transition-all hover:bg-stone-800/80 hover:scale-105"
                aria-label="Anterior"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Active Image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-stone-850 shadow-2xl bg-stone-900">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={lightboxIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={activeImages[lightboxIndex].src}
                      alt={activeImages[lightboxIndex].alt}
                      fill
                      sizes="100vw"
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-4 md:-right-16 z-10 p-3 rounded-full bg-stone-900/60 border border-stone-800 text-stone-300 hover:text-white transition-all hover:bg-stone-800/80 hover:scale-105"
                aria-label="Siguiente"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Description Text & Counter */}
            <div className="mt-6 text-center max-w-2xl px-4">
              <p className="text-stone-300 text-base font-light mb-2">
                {activeImages[lightboxIndex].alt}
              </p>
              <span className="text-xs tracking-widest text-stone-500 font-mono">
                {lightboxIndex + 1} de {activeImages.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
