import CorporateFeatures from "@/components/funnels/corporativo/CorporateFeatures";
import ComparativeMatrix from "@/components/funnels/corporativo/ComparativeMatrix";
import HeroSection from "@/components/ui/HeroSection";
import Gallery from "@/components/ui/Gallery";
import LeadForm from "@/components/shared/LeadForm";
import TrustBar from "@/components/shared/TrustBar";
import MinimalFooter from "@/components/shared/MinimalFooter";
import { IMAGES_VISTA_DEL_RIO } from "@/lib/constants";

export default function CorporativoPage() {
  const heroImage = IMAGES_VISTA_DEL_RIO.frente[1];

  return (
    <main className="min-h-screen bg-stone-950">
      <HeroSection 
        eyebrow="Modelo de Inversión · Alquiler Corporativo"
        title={<>Ingresos Estables y <span className="text-blue-500 font-medium">Cero Fricción Operativa</span></>}
        subtitle="Un activo inmobiliario listo para rentar a ejecutivos desde el día uno. Contratos de 12+ meses, ingresos predecibles y mantenimiento casi nulo."
        ctaText="Ver modelo de negocio"
        glowClass="bg-blue-600"
        btnClass="bg-blue-500 hover:bg-blue-400 text-white"
        imageSrc={heroImage.src}
        imageAlt={heroImage.alt}
      />
      <Gallery glowClass="bg-blue-600/10" activeColorClass="bg-blue-500 text-white font-medium" />
      <CorporateFeatures />
      <TrustBar />
      <ComparativeMatrix />
      <LeadForm btnClass="bg-blue-500 hover:bg-blue-400 text-white" funnelName="Corporativo a Largo Plazo" />
      <MinimalFooter />
    </main>
  );
}

