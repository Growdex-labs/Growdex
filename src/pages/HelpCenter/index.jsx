import { useState } from "react";
import Nav from "../Landing Page/HeroPage/Nav.jsx";
import FooterSection from "../Landing Page/HeroPage/FooterSection.jsx";
import { plansFaq } from "../Landing Page/HeroPage/footerFaq.js";
import HelpCenterHero from "./HelpCenterHero.jsx";
import HelpResources from "./HelpResources.jsx";
import StillNeedHelp from "./StillNeedHelp.jsx";
import DarkCloudTransition from "./DarkCloudTransition.jsx";

export default function HelpCenter() {
  // The hero owns the input; the resources list filters off it.
  const [query, setQuery] = useState("");

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white font-sans">
      <Nav />
      <HelpCenterHero query={query} onQueryChange={setQuery} />
      <HelpResources query={query} />
      <StillNeedHelp />
      <DarkCloudTransition />
      <main className="mx-auto max-w-[1440px] px-6 md:px-12">
        <FooterSection
          title="Still Have"
          highlight="Questions?"
          copy="Browse the guides above or reach out directly. "
          copyStrong="Our team replies fast."
          faq={plansFaq}
        />
      </main>
    </div>
  );
}
