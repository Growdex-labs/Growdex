import { readFile } from "node:fs/promises";

const landingPath = "src/pages/Landing Page/HeroPage/index.jsx";
const heroPath = "src/pages/Landing Page/HeroPage/Hero.jsx";
const bannerPath = "src/pages/Landing Page/HeroPage/Banner.jsx";

const [landing, hero, banner] = await Promise.all(
  [landingPath, heroPath, bannerPath].map((path) => readFile(path, "utf8")),
);

const checks = [
  [landing.includes("<Banner />"), "the landing page renders the waitlist banner"],
  [hero.includes('href="#waitlist-banner"'), "the hero links to the waitlist form"],
  [hero.includes("Join the waitlist"), "the hero uses a waitlist-focused CTA"],
  [banner.includes('id="waitlist-banner"'), "the waitlist anchor exists"],
  [banner.includes("<JoinWaitlist"), "the waitlist form is rendered"],
];

const failures = checks.filter(([passed]) => !passed).map(([, message]) => message);

if (failures.length) {
  throw new Error(`Waitlist landing-page check failed:\n- ${failures.join("\n- ")}`);
}

console.log("Waitlist landing-page checks passed.");
