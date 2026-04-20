import TaxBenefits from "@/components/funnels/retiro/TaxBenefits";
import HeroSection from "@/components/ui/HeroSection";
import LeadForm from "@/components/shared/LeadForm";
import TrustBar from "@/components/shared/TrustBar";
import MinimalFooter from "@/components/shared/MinimalFooter";

export default function RetiroPage() {
  return (
    <main className="min-h-screen bg-stone-950">
      <HeroSection 
        eyebrow="Retiro · República Dominicana"
        title={<>Tu siguiente capítulo, escrito con <span className="text-emerald-500 font-medium">tranquilidad y dignidad.</span></>}
        subtitle="Un residencial diseñado para el envejecimiento activo: planta baja sin escaleras, comunidad segura y beneficios fiscales exclusivos para pensionados."
        ctaText="Conocer el proyecto"
        glowClass="bg-emerald-600"
        btnClass="bg-emerald-500 hover:bg-emerald-400 text-white"
      />
      <TrustBar />
      <TaxBenefits />
      <LeadForm btnClass="bg-emerald-500 hover:bg-emerald-400 text-white" funnelName="Retiro y Ley 171-07" />
      <MinimalFooter />
    </main>
  );
}
