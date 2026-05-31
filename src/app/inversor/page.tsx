import RoiCalculator from "@/components/funnels/inversor/RoiCalculator";
import SocialProof from "@/components/funnels/inversor/SocialProof";
import Testimonials from "@/components/funnels/inversor/Testimonials";
import HeroSection from "@/components/ui/HeroSection";
import Gallery from "@/components/ui/Gallery";
import LeadForm from "@/components/shared/LeadForm";
import TrustBar from "@/components/shared/TrustBar";
import MinimalFooter from "@/components/shared/MinimalFooter";
import { IMAGES_VISTA_DEL_RIO } from "@/lib/constants";

export default function InversorPage() {
  const heroImage = IMAGES_VISTA_DEL_RIO.frente[0];

  return (
    <main className="min-h-screen bg-stone-950">
      <HeroSection 
        eyebrow="Inversión Inmobiliaria · República Dominicana"
        title={<>Haz que tu dinero trabaje en el Caribe — <br/><span className="text-yellow-500 font-medium">hasta 18% de retorno anual</span></>}
        subtitle="Apartamentos de lujo en destinos premium operados como alquiler vacacional. Ingreso pasivo real en dólares."
        ctaText="Calcular mi ROI"
        glowClass="bg-yellow-600"
        btnClass="bg-yellow-500 hover:bg-yellow-400 text-stone-950"
        imageSrc={heroImage.src}
        imageAlt={heroImage.alt}
      />
      <Gallery glowClass="bg-yellow-600/10" activeColorClass="bg-yellow-500 text-stone-950 font-medium" />
      <SocialProof />
      <TrustBar />
      <RoiCalculator />
      <Testimonials />
      <LeadForm btnClass="bg-yellow-500 hover:bg-yellow-400 text-stone-950" funnelName="Vacacional Airbnb" />
      <MinimalFooter />
    </main>
  );
}

