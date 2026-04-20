import RoiCalculator from "@/components/funnels/inversor/RoiCalculator";
import HeroSection from "@/components/ui/HeroSection";
import LeadForm from "@/components/shared/LeadForm";
import TrustBar from "@/components/shared/TrustBar";
import MinimalFooter from "@/components/shared/MinimalFooter";

export default function InversorPage() {
  return (
    <main className="min-h-screen bg-stone-950">
      <HeroSection 
        eyebrow="Inversión Inmobiliaria · República Dominicana"
        title={<>Haz que tu dinero trabaje en el Caribe — <br/><span className="text-yellow-500 font-medium">hasta 18% de retorno anual</span></>}
        subtitle="Apartamentos de lujo en destinos premium operados como alquiler vacacional. Ingreso pasivo real en dólares."
        ctaText="Calcular mi ROI"
        glowClass="bg-yellow-600"
        btnClass="bg-yellow-500 hover:bg-yellow-400 text-stone-950"
      />
      <TrustBar />
      <RoiCalculator />
      <LeadForm btnClass="bg-yellow-500 hover:bg-yellow-400 text-stone-950" funnelName="Vacacional Airbnb" />
      <MinimalFooter />
    </main>
  );
}
