import Hero from "./Hero.jsx";
import Nav from "./Nav.jsx";
import WhatGrowdexDoes from "./WhatGrowdexDoes.jsx";
import FeaturesRow from "./FeaturesRow.jsx";
import FeaturesSection from "./FeaturesSection.jsx";
import WhoItsForSection from "./WhoItsForSection.jsx";
import OurProgressSection from "./OurProgressSection.jsx";
import DevicePreviewSection from "./DevicePreviewSection.jsx";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions.jsx";
import Banner from "./Banner.jsx";
import Footer from "./FooterMinimal.jsx";
import FooterSection from "./FooterSection.jsx";

const LandingPage = () => {
  return (
    <div
      id="home"
      className="font-sans max-w-6xl lg:max-w-[1440px] mx-auto relative min-h-screen overflow-x-hidden px-6 md:px-12"
    >
      <Nav />
      <Hero />
      <WhatGrowdexDoes />
      <FeaturesRow />
      <FeaturesSection />
      <WhoItsForSection />
      <div className="hidden md:block">
        <OurProgressSection />
      </div>
      <DevicePreviewSection />
      <FrequentlyAskedQuestions />
      <Banner />
      <Footer />
      <TrustedBrands />
      <main className="mx-auto max-w-[1440px] px-6 md:px-12">
        <WhatGrowdexDoes />
        <FeaturesRow />
        <WhoItsForSection />
        <EverythingYouNeed />
        <SeeGrowdexInAction />
        <FrequentlyAskedQuestions />
        <Banner />
        <FooterSection />
      </main>
    </div>
  );
};

export default LandingPage;
