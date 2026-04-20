import ComparativeMatrix from "@/components/funnels/corporativo/ComparativeMatrix";

export const metadata = {
  title: "Inversión Alquiler Corporativo | Vista del Río",
  description: "Ingresos pasivos estables en USD, cero fricción operativa y desgaste mínimo arrendando a ejecutivos.",
};

export default function CorporativoPage() {
  return (
    <main className="min-h-screen bg-stone-950">
      <div className="pt-24 pb-12 text-center">
        <h1 className="text-3xl text-stone-400 font-light">Embudo: <span className="text-blue-500 font-medium">Ejecutivos & Largo Plazo</span></h1>
      </div>
      
      <ComparativeMatrix />
    </main>
  );
}
