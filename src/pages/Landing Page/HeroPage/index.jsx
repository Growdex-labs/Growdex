import Hero from "./Hero.jsx";
import Nav from "./Nav.jsx";
import TrustedBrands from "./TrustedBrands.jsx";
import WhatGrowdexDoes from "./WhatGrowdexDoes.jsx";
import FeaturesRow from "./FeaturesRow.jsx";
import WhoItsForSection from "./WhoItsForSection.jsx";
import EverythingYouNeed from "./EverythingYouNeed.jsx";
import SeeGrowdexInAction from "./SeeGrowdexInAction.jsx";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions.jsx";
import FooterSection from "./FooterSection.jsx";

export default function LandingPage() {
  return (
    <div id="home" className="relative min-h-screen overflow-x-hidden bg-white font-sans">
      <Nav />
      <Hero />
      <TrustedBrands />
      <main className="mx-auto max-w-[1440px] px-6 md:px-12">
        <WhatGrowdexDoes />
        <FeaturesRow />
        <WhoItsForSection />
        <EverythingYouNeed />
        <SeeGrowdexInAction />
        <FrequentlyAskedQuestions />
        <FooterSection />
      </main>
    </div>
  );
}
