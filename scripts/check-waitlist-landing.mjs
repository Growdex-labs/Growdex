import { readFile } from "node:fs/promises";

const landingPath = "src/pages/Landing Page/HeroPage/index.jsx";
const heroPath = "src/pages/Landing Page/HeroPage/Hero.jsx";
const bannerPath = "src/pages/Landing Page/HeroPage/Banner.jsx";
const footerPath = "src/pages/Landing Page/HeroPage/FooterSection.jsx";

const [landing, hero, banner, footer] = await Promise.all(
  [landingPath, heroPath, bannerPath, footerPath].map((path) =>
    readFile(path, "utf8"),
  ),
);

const checks = [
  [landing.includes("<Banner />"), "the landing page renders the waitlist banner"],
  [hero.includes('href="#waitlist-banner"'), "the hero links to the waitlist form"],
  [hero.includes("Join the waitlist"), "the hero uses a waitlist-focused CTA"],
  [banner.includes('id="waitlist-banner"'), "the waitlist anchor exists"],
  [banner.includes("<JoinWaitlist"), "the waitlist form is rendered"],
  [footer.includes('primaryLabel = "Join the waitlist"'), "the footer CTA invites visitors to the waitlist"],
  [footer.includes('primaryHref = "#waitlist-banner"'), "the footer CTA links to the waitlist form"],
  [!hero.includes("https://app.growdex.ai") && !footer.includes("https://app.growdex.ai"), "landing CTAs do not direct visitors to the app"],
];

const failures = checks.filter(([passed]) => !passed).map(([, message]) => message);

if (failures.length) {
  throw new Error(`Waitlist landing-page check failed:\n- ${failures.join("\n- ")}`);
}

console.log("Waitlist landing-page checks passed.");
