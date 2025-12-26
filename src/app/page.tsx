import Hero from "@/components/Hero";
import TreatmentSelector from "@/components/TreatmentSelector";
import RaisingTheBar from "@/components/RaisingTheBar";
import ExpandingTreatments from "@/components/ExpandingTreatments";
import WhyChooseBold from "@/components/WhyChooseBold";
import NetworkMap from "@/components/NetworkMap";
import BackedByDermatologists from "@/components/BackedByDermatologists";
import RealResults from "@/components/RealResults";
import TreatmentVideos from "@/components/TreatmentVideos";
import RealEducation from "@/components/RealEducation";
import ConsultationForm from "@/components/ConsultationForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <TreatmentSelector />
      <RaisingTheBar />
      <ExpandingTreatments />
      <WhyChooseBold />
      <NetworkMap />
      <BackedByDermatologists />
      <RealResults />
      <TreatmentVideos />
      <RealEducation />
      <ConsultationForm />
      <Footer />
    </div>
  );
}
