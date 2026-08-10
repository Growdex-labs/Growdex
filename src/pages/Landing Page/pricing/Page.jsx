import Nav from "../HeroPage/Nav.jsx";
import PricingHero from "./PricingHero.jsx";
import PricingPlans from "./PricingPlans.jsx";
import ComparePlans from "./ComparePlans.jsx";
import FooterSection from "../HeroPage/FooterSection.jsx";
import { plansFaq } from "../HeroPage/footerFaq.js";


export default function PricingPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white font-sans">
      <Nav />
      <PricingHero />
      <PricingPlans />
      {/* No wrapper: a bottom margin here would cancel the card's overlap of
          the footer. Spacing lives inside the section's own top padding. */}
      <ComparePlans />
      <main className="mx-auto max-w-[1440px] px-6 md:px-12">
        <FooterSection
          title="Ready to Launch"
          highlight="Smarter Campaigns?"
          copy="Bring your campaign creation, management, and optimization into one platform. Spend less time managing tools. "
          copyStrong="Spend more time growing your business."
          // Pushes everything below the comparison card hanging over the top.
          topOverlap="pt-16 md:pt-24"
          faq={plansFaq}
        />
      </main>
    </div>
  );
}
