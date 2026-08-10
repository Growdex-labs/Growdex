import Nav from "../HeroPage/Nav.jsx";
import AboutHero from "./AboutHero.jsx";
import MissionVision from "./MissionVision.jsx";
import WhyGrowdex from "./WhyGrowdex.jsx";
import FooterSection from "../HeroPage/FooterSection.jsx";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white font-sans">
      <Nav />
      <AboutHero />
      <MissionVision />
      <WhyGrowdex />
      <main className="mx-auto max-w-[1440px] px-6 md:px-12">
        <FooterSection
          title="Helping Businesses"
          highlight="Grow"
          copy="Whether you're a startup, a growing business, a marketing team, or an agency, Growdex gives you the tools to run better campaigns and achieve better results. "
          copyStrong="Smarter advertising starts with Growdex."
        />
      </main>
    </div>
  );
}
