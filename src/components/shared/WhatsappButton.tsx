"use client";

import { MessageCircle } from "lucide-react";
import { APARTMENT_DATA } from "@/lib/constants";
import { motion } from "framer-motion";

export default function WhatsappButton() {
  const message = encodeURIComponent("Hola, solicito información personalizada sobre el proyecto Vista del Río.");
  const url = `https://wa.me/${APARTMENT_DATA.contact.whatsapp}?text=${message}`;

  return (
    <motion.a 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-emerald-500 text-white p-4 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:bg-emerald-400 hover:scale-110 transition-all flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} />
    </motion.a>
  );
}
