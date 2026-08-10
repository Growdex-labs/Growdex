import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
// The white frame, tilt and drop shadow are baked into this artwork, so it
// needs no CSS frame of its own — adding one double-framed it.
import teamPhoto from "../../../assets/New Design/growdex-about-mission-vision.webp";
import manualIcon from "../../../assets/New Design/growdex-about-manual-icon.png";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const statements = [
  {
    heading: "Mission",
    body: "To simplify digital advertising and help businesses acquire more customers with confidence.",
  },
  {
    heading: "Vision",
    body: "To become the platform businesses trust to create, launch, manage, and optimize their advertising campaigns.",
  },
];

export default function MissionVision() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 74%",
              once: true,
            },
            defaults: { ease: "power3.out" },
          })
          // The tilt and the pills' resting offsets live on inner elements, so
          // these entrance tweens never collide with them.
          .from(".js-mv-photo", {
            autoAlpha: 0,
            x: -40,
            scale: 0.95,
            duration: 0.8,
          })
          .from(
            ".js-mv-pill",
            { autoAlpha: 0, scale: 0.8, duration: 0.5, stagger: 0.12 },
            "-=0.4",
          )
          .from(
            ".js-mv-statement",
            { autoAlpha: 0, y: 26, duration: 0.6, stagger: 0.15 },
            "-=0.55",
          );
      });

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".js-mv-photo, .js-mv-pill, .js-mv-statement", {
          clearProps: "all",
        });
      });

      return () => media.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1100px] px-6 md:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.72fr] lg:gap-20">
          <div className="js-mv-photo group relative mx-auto w-full max-w-[460px] lg:mx-0">
            {/* Hover rides on this inner wrapper so it composes with the
                entrance tween on the parent. */}
            <div className="transition-transform duration-500 ease-out will-change-transform group-hover:-translate-y-1.5 group-hover:scale-[1.02]">
              <img
                src={teamPhoto}
                alt="A marketing team reviewing campaign results together"
                className="w-full"
              />
            </div>

            <span className="js-mv-pill pointer-events-none absolute left-[-14%] top-[11%] -rotate-3 rounded-full bg-gradient-to-r from-[#e3b6fb] to-[#c07ef0] px-[0.7em] py-[0.22em] font-gilroy-bold text-[clamp(14px,1.6vw,22px)] leading-tight text-white shadow-[0_8px_20px_rgba(150,90,200,.28)] transition-transform duration-500 ease-out group-hover:-translate-x-2">
              intelligent
            </span>
            <span className="js-mv-pill pointer-events-none absolute left-[66%] top-[64%] -rotate-2 whitespace-nowrap rounded-full bg-[#8b8c94] px-[0.7em] py-[0.22em] font-gilroy-bold text-[clamp(14px,1.6vw,22px)] leading-tight text-white shadow-[0_8px_20px_rgba(60,60,70,.24)] transition-transform duration-500 ease-out group-hover:translate-x-2">
              campaigns
            </span>
          </div>

          <div className="space-y-10 md:space-y-12">
            {statements.map((item) => (
              <div key={item.heading} className="js-mv-statement">
                <div className="flex items-center gap-3">
                  <img
                    src={manualIcon}
                    alt=""
                    aria-hidden="true"
                    className="h-[clamp(28px,2.6vw,38px)] w-auto"
                  />
                  <h2 className="font-gilroy-semibold text-[clamp(17px,1.9vw,24px)] tracking-[-0.01em] text-[#3f3f3f]">
                    {item.heading}
                  </h2>
                </div>
                <p className="mt-4 text-[clamp(12px,1vw,14px)] leading-[1.75] text-[#515151]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
