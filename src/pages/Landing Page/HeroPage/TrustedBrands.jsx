import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import brandTwo from "../../../assets/growdex-trusted-brand-partner-one.png";
import brandOne from "../../../assets/growdex-trusted-brand-partner-two.jpg";
import brandThree from "../../../assets/growdex-trusted-brand-partner-three.png";
import leftPills from "../../../assets/growdex-trusted-pill-left.png";
import rightPills from "../../../assets/growdex-trusted-pill-right.png";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function TrustedBrands() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".js-trusted-content",
              start: "top 78%",
              once: true,
            },
            defaults: { ease: "power3.out" },
          })
          .from(".js-trusted-heading", { autoAlpha: 0, y: 26, duration: 0.7 })
          .from(
            ".js-trusted-copy",
            { autoAlpha: 0, y: 20, duration: 0.55 },
            "-=0.4",
          )
          .from(
            ".js-brand-item",
            { autoAlpha: 0, y: 34, scale: 0.94, duration: 0.65, stagger: 0.12 },
            "-=0.25",
          );

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
          .fromTo(
            ".js-pill-left",
            { y: 76, rotation: -7 },
            { y: -44, rotation: 2 },
            0,
          )
          .fromTo(
            ".js-pill-right",
            { y: 94, rotation: 7 },
            { y: -30, rotation: -2 },
            0,
          );
      });

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          ".js-trusted-heading, .js-trusted-copy, .js-brand-item, .js-pill-left, .js-pill-right",
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
      aria-labelledby="trusted-brands-heading"
      className="relative z-20 min-h-[540px] bg-white px-5 pb-28 pt-24 text-center sm:pt-28"
    >
      <div className="js-trusted-content relative z-10 mx-auto max-w-[1344px]">
        <h2
          id="trusted-brands-heading"
          className="js-trusted-heading font-gilroy-semibold text-[34px] leading-tight tracking-[-0.03em] text-[#4b4b4b] sm:text-[42px]"
        >
          Trusted by{" "}
          <span className="inline-block rounded-full bg-[#282300] px-5 py-1.5 text-[#ffe75d]">
            Ambitious Teams
          </span>
        </h2>
        <p className="js-trusted-copy mx-auto mt-5 max-w-[680px] text-base leading-7 text-[#505050] sm:text-lg">
          Growing businesses, agencies, and marketing teams use Growdex to
          simplify customer acquisition and move faster.
        </p>

        <div className="mx-auto mt-9 flex max-w-[920px] flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
          <div
            className="js-brand-item relative h-[112px] w-[220px] overflow-hidden"
            aria-label="Growdex trusted partner"
          >
            <img
              src={brandOne}
              alt="Growdex trusted partner"
              className="absolute left-1/2 top-1/2 w-[282px] max-w-none -translate-x-1/2 -translate-y-1/2"
              onLoad={() => ScrollTrigger.refresh()}
            />
          </div>
          <div
            className="js-brand-item relative h-[170px] w-[282px] max-w-none overflow-hidden"
            aria-label="Growdex trusted partner"
          >
            <img
              src={brandTwo}
              alt="Growdex trusted partner"
              className="absolute left-1/2 top-1/2 w-[385px] max-w-none -translate-x-1/2 -translate-y-1/2"
              onLoad={() => ScrollTrigger.refresh()}
            />
          </div>
          <div
            className="js-brand-item relative h-[112px] w-[310px] overflow-hidden"
            aria-label="Growdex trusted partner"
          >
            <img
              src={brandThree}
              alt="Growdex trusted partner"
              className="absolute left-1/2 top-1/2 w-[350px] max-w-none -translate-x-1/2 -translate-y-1/2"
              onLoad={() => ScrollTrigger.refresh()}
            />
          </div>
        </div>
      </div>

      <img
        src={leftPills}
        alt=""
        aria-hidden="true"
        className="js-pill-left pointer-events-none absolute -bottom-16 -left-24 z-20 w-[210px] sm:-left-16 sm:w-[250px]"
      />
      <img
        src={rightPills}
        alt=""
        aria-hidden="true"
        className="js-pill-right pointer-events-none absolute -bottom-16 -right-24 z-20 w-[200px] sm:-right-14 sm:w-[238px]"
      />
    </section>
  );
}
