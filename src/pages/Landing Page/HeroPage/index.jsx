// import React, { useState } from "react";
import Hero from "./Hero.jsx";
import Nav from "./Nav.jsx";
import WhatGrowdexDoes from "./WhatGrowdexDoes.jsx";
import FeaturesRow from "./FeaturesRow.jsx";
import FeaturesSection from "./FeaturesSection.jsx";
import WhoItsForSection from "./WhoItsForSection.jsx";
import OurProgressSection from "./OurProgressSection.jsx";
import DevicePreviewSection from "./DevicePreviewSection.jsx";
// import BottomLogos from "../HeroPage/BottomLogos";
// import IncreaseProductivity from "../HeroPage/IncreaseProductivity"
// import WhyWeUseAzonto from "../HeroPage/WhyWeUseAzonto";
// import SpinningAzonto from "../HeroPage/SpinningAzonto";
import DashboardLayer from "./DashboardLayer.jsx";
import OurUserKindWords from "./OurUserKindWords.jsx";
import MovingCards from "./MovingCards.jsx";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions.jsx";
// import WhyWeUseAzontoReverse from "../HeroPage/WhyWeUseAzontoReverse";
import Integrations from "./Integrations.jsx";
import { useState } from "react";
import Banner from "./Banner.jsx";
import Footer from "./FooterMinimal.jsx";
// import Property from "../../../Assets/Property 1=Hero 19 1.png";

const LandingPage = () => {
  const [isCompanyHovered, setIsCompanyHovered] = useState(false);

  return (
    <div
      id="home"
      className="font-sans max-w-6xl lg:max-w-[1440px] mx-auto relative min-h-screen overflow-x-hidden px-6 md:px-12"
    >
      {/* <Nav onCompanyHover={setIsCompanyHovered} /> */}
      {/* <DashboardLayer /> */}
      {/* <OurUserKindWords /> */}
      {/* <MovingCards /> */}
      {/* <Integrations /> */}
      {/* <Banner /> */}

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
    </div>
  );
};

export default LandingPage;
