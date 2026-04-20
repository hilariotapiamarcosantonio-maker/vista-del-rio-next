"use client";

import { Shield, Award, Clock, CheckCircle } from "lucide-react";

export default function TrustBar() {
  return (
    <section className="py-12 border-y border-stone-800/50 bg-stone-950/50 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-stone-800/50">
          <div className="flex flex-col items-center justify-center p-4">
            <Shield className="w-8 h-8 text-stone-500 mb-3" />
            <strong className="text-stone-300 font-medium block mb-1">Seguridad Jurídica</strong>
            <span className="text-stone-500 text-sm">Proceso notarial 100% transparente</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4">
            <Award className="w-8 h-8 text-yellow-600 mb-3" />
            <strong className="text-stone-300 font-medium block mb-1">Activo Premium</strong>
            <span className="text-stone-500 text-sm">Terminaciones de alta gama</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4">
            <Clock className="w-8 h-8 text-blue-500 mb-3" />
            <strong className="text-stone-300 font-medium block mb-1">Entrega Inmediata</strong>
            <span className="text-stone-500 text-sm">Listo para generar renta</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4">
            <CheckCircle className="w-8 h-8 text-emerald-500 mb-3" />
            <strong className="text-stone-300 font-medium block mb-1">Gestión Delegada</strong>
            <span className="text-stone-500 text-sm">Cero dolores de cabeza</span>
          </div>
        </div>
      </div>
    </section>
  );
}
