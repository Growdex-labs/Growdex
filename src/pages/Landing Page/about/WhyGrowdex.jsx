import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import stickyNote from "../../../assets/growdex-about-why-note.webp";
import paleCloud from "../../../assets/growdex-demo-cloud-tuck.png";
// Same yellow and black shapes the home page FAQ uses for its dark transition.
import yellowLeft from "../../../assets/growdex-faq-showcase-shape-left.png";
import yellowRight from "../../../assets/growdex-faq-showcase-shape-right.png";
import blackLeft from "../../../assets/growdex-faq-showcase-black-left.png";
import blackRight from "../../../assets/growdex-faq-showcase-black-right.png";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const reasons = [
  "Create campaigns faster",
  "Manage multi-platform campaigns from one platform",
  "Optimize performance with confidence",
  "Spend less time managing ads and more time growing your business",
];

export default function WhyGrowdex() {
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
          .from(".js-why-heading", { autoAlpha: 0, y: 24, duration: 0.6 })
          .from(
            ".js-why-note",
            { autoAlpha: 0, x: -46, rotate: -8, duration: 0.85 },
            "-=0.35",
          )
          .from(
            ".js-why-row",
            { autoAlpha: 0, x: 34, duration: 0.55, stagger: 0.11 },
            "-=0.6",
          );

        // The black pair stays put — it seals the join with the dark footer.
        const drift = [
          [".js-why-cloud-pale", 26, -24],
          [".js-why-yellow-left", 46, -30],
          [".js-why-yellow-right", 60, -38],
        ];
        drift.forEach(([target, from, to]) => {
          gsap.fromTo(
            target,
            { y: from },
            {
              y: to,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
                invalidateOnRefresh: true,
              },
            },
          );
        });
      });

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          ".js-why-heading, .js-why-note, .js-why-row, .js-why-cloud-pale, .js-why-yellow-left, .js-why-yellow-right",
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
      className="relative overflow-hidden bg-white pb-[clamp(150px,19vw,300px)] pt-16 md:pt-24"
    >
      <img
        src={paleCloud}
        alt=""
        aria-hidden="true"
        className="js-why-cloud-pale pointer-events-none absolute right-[3%] top-[14%] z-0 w-[clamp(90px,12vw,180px)]"
      />

      <div className="relative z-10 mx-auto max-w-[1100px] px-6 md:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div className="js-why-note order-2 mx-auto w-full max-w-[400px] lg:order-1 lg:mx-0">
            <img
              src={stickyNote}
              alt=""
              aria-hidden="true"
              className="w-full"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="js-why-heading text-center font-gilroy-bold text-[clamp(24px,2.9vw,36px)] leading-[1.2] tracking-[-0.02em] text-[#4a4a4a] lg:text-left">
              Why{" "}
              <span className="ml-1 inline-block -rotate-2 rounded-full bg-gradient-to-r from-[#d3c247] to-[#a89729] px-[0.5em] py-[0.1em] text-white">
                Growdex?
              </span>
            </h2>

            <ul className="mt-8 space-y-3 md:mt-10">
              {reasons.map((reason, index) => (
                <li
                  key={reason}
                  className="js-why-row flex items-center gap-4 rounded-[10px] border border-[#eae3bd] bg-white px-5 py-4 shadow-[0_6px_18px_rgba(120,105,0,.05)]"
                >
                  <span
                    aria-hidden="true"
                    className="shrink-0 bg-gradient-to-b from-[#e6d55c] to-[#9c8b1f] bg-clip-text font-gilroy-bold text-[clamp(26px,3vw,38px)] italic leading-none text-transparent drop-shadow-[0_2px_1px_rgba(120,105,0,.35)]"
                  >
                    {index + 1}
                  </span>
                  <span className="text-[clamp(13px,1.15vw,16px)] leading-[1.45] text-[#3f3f3f]">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Dark transition into the footer, built from the home page's shapes. */}
      <img
        src={yellowLeft}
        alt=""
        aria-hidden="true"
        className="js-why-yellow-left pointer-events-none absolute bottom-[2%] left-0 z-0 w-[26%] max-w-[330px]"
      />
      <img
        src={yellowRight}
        alt=""
        aria-hidden="true"
        className="js-why-yellow-right pointer-events-none absolute -bottom-[6%] right-0 z-0 w-[28%] max-w-[350px]"
      />
      <img
        src={blackLeft}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 left-0 z-[5] w-[33%] max-w-[400px]"
      />
      <img
        src={blackRight}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 right-0 z-[5] w-[31%] max-w-[380px]"
      />
    </section>
  );
}
