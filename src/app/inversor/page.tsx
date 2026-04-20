import RoiCalculator from "@/components/funnels/inversor/RoiCalculator";

export const metadata = {
  title: "Inversión Airbnb Caribe | Vista del Río",
  description: "Genera hasta un 18% de retorno anual en dólares invirtiendo en apartamentos vacacionales en el Caribe.",
};

export default function InversorPage() {
  return (
    <main className="min-h-screen bg-stone-950">
      {/* Aquí luego añadiremos el Hero Section del Inversor */}
      <div className="pt-24 pb-12 text-center">
        <h1 className="text-3xl text-stone-400 font-light">Embudo: <span className="text-yellow-600 font-medium">Inversionista Airbnb</span></h1>
      </div>
      
      <RoiCalculator />
    </main>
  );
}
