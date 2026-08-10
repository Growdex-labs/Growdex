import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import cloudLeft from "../../assets/New Design/growdex-pricing-cloud-left.png";
import cloudRight from "../../assets/New Design/growdex-pricing-cloud-right.png";
import blackLeft from "../../assets/New Design/growdex-faq-showcase-black-left.png";
import blackRight from "../../assets/New Design/growdex-faq-showcase-black-right.png";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Self-contained full-bleed band that hands a white section off to the dark
// footer. Full-bleed so it still reaches the viewport edges when dropped inside
// an inset container.
export default function DarkCloudTransition() {
  const bandRef = useRef(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        // Only the pale pair drifts — moving the black would open a gap at the
        // seam with the footer.
        const drift = [
          [".js-transition-pale-left", 30, -24],
          [".js-transition-pale-right", 40, -30],
        ];
        drift.forEach(([target, from, to]) => {
          gsap.fromTo(
            target,
            { y: from },
            {
              y: to,
              ease: "none",
              scrollTrigger: {
                trigger: bandRef.current,
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
        gsap.set(".js-transition-pale-left, .js-transition-pale-right", {
          clearProps: "all",
        });
      });

      return () => media.revert();
    },
    { scope: bandRef },
  );

  return (
    <div
      ref={bandRef}
      aria-hidden="true"
      className="relative left-1/2 h-[clamp(150px,18vw,280px)] w-screen -translate-x-1/2 overflow-hidden bg-white"
    >
      <img
        src={cloudLeft}
        alt=""
        className="js-transition-pale-left pointer-events-none absolute bottom-[clamp(10px,9vw,50px)] left-0 z-0 w-[clamp(110px,15vw,250px)]"
      />
      <img
        src={cloudRight}
        alt=""
        className="js-transition-pale-right pointer-events-none absolute bottom-[clamp(10px,8vw,30px)] right-0 z-0 w-[clamp(120px,16vw,270px)]"
      />
      <img
        src={blackLeft}
        alt=""
        className="pointer-events-none absolute -bottom-12 left-0 z-[5] w-[30%] max-w-[360px]"
      />
      <img
        src={blackRight}
        alt=""
        className="pointer-events-none absolute -bottom-12 right-0 z-[5] w-[28%] max-w-[340px]"
      />
    </div>
  );
}
