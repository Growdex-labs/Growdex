import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import campaignPlatform from "../../../assets/New Design/growdex-unified-campaign-platform.png";
import cornerPills from "../../../assets/New Design/growdex-hero-three-pill-left.png";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function WhatGrowdexDoes() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 72%",
              once: true,
            },
            defaults: { ease: "power3.out" },
          })
          .from(".js-platform-heading", { autoAlpha: 0, y: 30, duration: 0.75 })
          .from(".js-platform-copy", { autoAlpha: 0, y: 24, duration: 0.65, stagger: 0.13 }, "-=0.4")
          .from(".js-platform-card", { autoAlpha: 0, x: 64, scale: 0.965, duration: 0.95 }, "-=0.72")
          .from(".js-platform-art", { autoAlpha: 0, y: 34, rotation: 2, duration: 0.8 }, "-=0.58")
          .from(".js-platform-pills", { autoAlpha: 0, x: 45, y: 24, rotation: 8, duration: 0.7 }, "-=0.72");

        gsap
          .timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.1,
              invalidateOnRefresh: true,
            },
            defaults: { ease: "none" },
          })
          .fromTo(".js-platform-art", { y: 24, rotation: 1.5 }, { y: -26, rotation: -1.5 }, 0)
          .fromTo(".js-platform-pills", { y: 35, rotation: 6 }, { y: -20, rotation: -3 }, 0);

        gsap.to(".js-platform-pulse", {
          scale: 1.035,
          duration: 1.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          transformOrigin: "50% 52%",
        });
      });

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          ".js-platform-heading, .js-platform-copy, .js-platform-card, .js-platform-art, .js-platform-pulse, .js-platform-pills",
          { clearProps: "all" },
        );
      });

      return () => media.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="who-we-are"
      aria-labelledby="platform-heading"
      className="relative bg-white py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto grid max-w-[1344px] items-center gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
        <div className="relative z-10 lg:pl-8">
          <h2
            id="platform-heading"
            className="js-platform-heading font-gilroy-semibold text-[42px] leading-[1.08] tracking-[-0.035em] text-[#515151] sm:text-[52px]"
          >
            <span className="block">Every Campaign.</span>
            <span className="mt-2 inline-block -rotate-2 rounded-full bg-[#dcc53c] px-4 py-1 text-white">
              One Platform
            </span>
          </h2>

          <div className="mt-14 max-w-[430px] text-[17px] leading-7 text-[#535353] sm:mt-16">
            <p className="js-platform-copy">
              Modern advertising is fragmented.<br />
              Different platforms. Different workflows.<br />
              Different reporting.
            </p>
            <p className="js-platform-copy mt-8 font-gilroy-semibold">
              Growdex brings everything together, so your team can build,
              launch, and optimize campaigns from one place.
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[670px] pb-9 sm:pr-7">
          <img
            src={cornerPills}
            alt=""
            aria-hidden="true"
            className="js-platform-pills pointer-events-none absolute -bottom-12 -right-16 z-0 w-[190px] opacity-70 sm:-right-10 sm:w-[235px]"
          />
          <div className="js-platform-card relative z-10 aspect-[1.15/1] overflow-hidden rounded-[15px] bg-[#332C00] shadow-[0_26px_60px_rgba(51,44,0,.15)]">
            <div className="js-platform-art h-full w-full p-5 sm:p-7">
              <img
                src={campaignPlatform}
                alt="Unified Growdex campaign management platform"
                className="js-platform-pulse h-full w-full object-contain will-change-transform"
                onLoad={() => ScrollTrigger.refresh()}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
