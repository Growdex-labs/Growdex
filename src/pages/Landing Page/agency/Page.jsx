import CoreServices from "../../../components/pages/agency/core-services/CoreServices";
import EngineSection from "../../../components/pages/agency/EngineSection";
import FirstSection from "../../../components/pages/agency/FirstSection";
import Footer from "../../../components/pages/agency/Footer";
import Header from "../../../components/pages/agency/Header";
import ProcessSection from "../../../components/pages/agency/our-processes/ProcessSection";
import TestimonialSection from "../../../components/pages/agency/testimonials/TestimonialSection";
import TextCarousel from "../../../components/pages/agency/TextCarousel";
import WhySection from "../../../components/pages/agency/WhySection";
import WhoWeWorkWithSection from "../../../components/pages/agency/work-with/WhoWeWorkWithSection";


export default function AgencyPage() {
  return (
    <div className="font-gilroy-medium max-w-6xl lg:max-w-[1440px] mx-auto
          bg-vector bg-center bg-contain relative min-h-screen text-[#333333]">
      <Header />
      <FirstSection />
      <br />
      <TextCarousel />
      <br />
      <CoreServices />
      <ProcessSection />
      <WhoWeWorkWithSection />
      <WhySection />
      <TestimonialSection />
      <EngineSection />
      {/* last section */}
      <Footer />
    </div>
  )
}
