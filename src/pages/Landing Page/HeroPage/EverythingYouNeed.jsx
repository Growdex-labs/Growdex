import { useRef } from "react";
import { Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import aiBuilderIcon from "../../../assets/New Design/growdex-feature-icon-ai-builder.png";
import manualBuilderIcon from "../../../assets/New Design/growdex-feature-icon-manual-builder.png";
import dashboardIcon from "../../../assets/New Design/growdex-feature-icon-dashboard.png";
import metaIcon from "../../../assets/New Design/growdex-feature-icon-meta.png";
import tiktokIcon from "../../../assets/New Design/growdex-feature-icon-tiktok.png";
import analyticsIcon from "../../../assets/New Design/growdex-feature-icon-analytics.png";
import recommendationsIcon from "../../../assets/New Design/growdex-feature-icon-recommendations.png";
import reportingIcon from "../../../assets/New Design/growdex-feature-icon-reporting.png";
import cloudLeft from "../../../assets/New Design/growdex-feature-cloud-left.png";
import cloudRight from "../../../assets/New Design/growdex-feature-cloud-right.png";
import whiteCloudLeft from "../../../assets/New Design/growdex-hero-cloud-steps-left.png";
import whiteCloudRight from "../../../assets/New Design/growdex-hero-cloud-steps-right.png";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const features = [
  { label: "AI Campaign Builder", icon: aiBuilderIcon },
  { label: "Manual Campaign Builder", icon: manualBuilderIcon },
  { label: "Unified Dashboard", icon: dashboardIcon },
  { label: "Meta Integration", icon: metaIcon },
  { label: "TikTok Integration", icon: tiktokIcon },
  { label: "Campaign Analytics", icon: analyticsIcon },
  { label: "Performance Recommendations", icon: recommendationsIcon },
  // No icon was supplied for this one — placeholder until the artwork lands.
  { label: "Team Collaboration", icon: null },
  { label: "Centralized Reporting", icon: reportingIcon },
];

export default function EverythingYouNeed() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              once: true,
            },
            defaults: { ease: "power3.out" },
          })
          .from(".js-need-heading", { autoAlpha: 0, y: 24, duration: 0.6 })
          .from(
            ".js-need-card",
            {
              autoAlpha: 0,
              y: 26,
              scale: 0.95,
              duration: 0.55,
              // Ripples across the grid rather than firing row by row.
              stagger: { amount: 0.55, grid: [3, 3], from: "start" },
            },
            "-=0.3",
          );

        gsap.from(".js-need-cloud", {
          autoAlpha: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            once: true,
          },
        });

        // Transform-only drift, so it never overlaps the opacity fade above.
        const drift = [
          [".js-need-cloud-left", { x: -26, y: 24 }, { x: 16, y: -26 }],
          [".js-need-cloud-right", { x: 28, y: 22 }, { x: -12, y: -28 }],
        ];
        drift.forEach(([target, from, to]) => {
          gsap.fromTo(target, from, {
            ...to,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.1,
              invalidateOnRefresh: true,
            },
          });
        });
      });

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".js-need-heading, .js-need-card, .js-need-cloud", {
          clearProps: "all",
        });
      });

      return () => media.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#FFF8CE] py-16 md:py-24"
    >
      <img
        src={cloudRight}
        alt=""
        aria-hidden="true"
        className="js-need-cloud js-need-cloud-right pointer-events-none absolute right-0 top-[26%] z-0 w-[clamp(105px,15vw,225px)]"
      />
      <img
        src={cloudLeft}
        alt=""
        aria-hidden="true"
        // Sits above the white cloud band at the bottom, which would otherwise
        // swallow it.
        className="js-need-cloud js-need-cloud-left pointer-events-none absolute bottom-[38%] left-[3%] z-0 w-[clamp(88px,12vw,185px)]"
      />

      <div className="relative z-10 mx-auto max-w-[1344px] px-6 md:px-12">
        <h2 className="js-need-heading text-center font-gilroy-semibold text-[clamp(24px,3.1vw,40px)] leading-[1.2] tracking-[-0.02em] text-[#535353]">
          Everything You Need{" "}
          <span className="ml-1 inline-block -rotate-3 rounded-full bg-[#928322] px-[0.5em] py-[0.12em] font-gilroy-bold text-white">
            To Grow
          </span>
        </h2>

        <ul className="mx-auto mt-10 grid max-w-[840px] grid-cols-1 gap-3 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
          {features.map((feature) => (
            <li
              key={feature.label}
              className="js-need-card flex items-center gap-3 rounded-[10px] border border-[#e9e1b4] bg-white px-3 py-[11px]"
            >
              {feature.icon ? (
                <img
                  src={feature.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-[46px] w-[46px] shrink-0"
                />
              ) : (
                <span
                  aria-hidden="true"
                  className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[10px] border border-[#1f1f1f] bg-[#e6f7ef]"
                >
                  <Users className="h-6 w-6 text-[#1f7a5a]" strokeWidth={1.8} />
                </span>
              )}
              <span className="font-gilroy-regular text-[15px] leading-[1.25] text-[#3f3f3f]">
                {feature.label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Same white cloud treatment as the hero, carrying the yellow into the
          white section below. */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-5 bg-white"
        aria-hidden="true"
      />
      <img
        src={whiteCloudLeft}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 z-30 w-[40%] max-w-[420px] sm:w-[30%]"
      />
      <img
        src={whiteCloudRight}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 z-30 w-[38%] max-w-[390px] sm:w-[28%]"
      />
    </section>
  );
}
