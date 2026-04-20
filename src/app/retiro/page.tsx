import TaxBenefits from "@/components/funnels/retiro/TaxBenefits";

export const metadata = {
  title: "Retiro Caribe y Ley 171-07 | Vista del Río",
  description: "Tranquilidad, accesibilidad y salud. Descubre un retiro activo en la República Dominicana con incentivos fiscales para pensionados.",
};

export default function RetiroPage() {
  return (
    <main className="min-h-screen bg-stone-950">
      <div className="pt-24 pb-12 text-center">
        <h1 className="text-3xl text-stone-400 font-light">Embudo: <span className="text-emerald-500 font-medium">Retiro & Calidad de Vida</span></h1>
      </div>
      
      <TaxBenefits />
    </main>
  );
}
