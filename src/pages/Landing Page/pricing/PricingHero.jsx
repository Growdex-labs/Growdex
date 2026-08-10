import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import cloudKhaki from "../../../assets/growdex-about-cloud-khaki.png";
import whiteCloudLeft from "../../../assets/growdex-hero-cloud-steps-left.png";
import whiteCloudRight from "../../../assets/growdex-hero-cloud-steps-right.png";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function PricingHero() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".js-pricing-heading > *", {
          autoAlpha: 0,
          y: 22,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.15,
        });

        gsap.fromTo(
          ".js-pricing-cloud",
          { y: 16 },
          {
            y: -20,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          },
        );
      });

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".js-pricing-heading > *, .js-pricing-cloud", {
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
      className="relative overflow-hidden bg-[#FFF8CE] pb-20 pt-28 md:pb-24"
    >
      <img
        src={cloudKhaki}
        alt=""
        aria-hidden="true"
        className="js-pricing-cloud pointer-events-none absolute left-[3%] top-[16%] z-0 w-[clamp(70px,8vw,135px)]"
      />

      <div className="relative z-10 mx-auto max-w-[1344px] px-4 md:px-8">
        <h1 className="js-pricing-heading text-center font-gilroy-bold text-[clamp(24px,3vw,40px)] leading-[1.25] tracking-[-0.02em] text-[#4a4a4a]">
          <span className="block">Simple, Transparent</span>
          {/* Same pill treatment as the About hero, filled for this page. */}
          <span className="mt-3 inline-block -rotate-2 rounded-full border-2 border-[#3f3f3f] bg-[#FFE95C] px-[0.6em] py-[0.1em] text-[#3f3f3f]">
            Pricing
          </span>
        </h1>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-5 bg-white"
        aria-hidden="true"
      />
      <img
        src={whiteCloudLeft}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 z-[5] w-[32%] max-w-[300px] sm:w-[22%]"
      />
      <img
        src={whiteCloudRight}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 z-[5] w-[30%] max-w-[285px] sm:w-[21%]"
      />
    </section>
  );
}
