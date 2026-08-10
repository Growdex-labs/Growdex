import { useRef } from "react";
import { Search } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import cloudKhaki from "../../assets/New Design/growdex-about-cloud-khaki.png";
import whiteCloudLeft from "../../assets/New Design/growdex-hero-cloud-steps-left.png";
import whiteCloudRight from "../../assets/New Design/growdex-hero-cloud-steps-right.png";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HelpCenterHero({ query, onQueryChange }) {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".js-help-hero > *", {
          autoAlpha: 0,
          y: 22,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.15,
        });

        gsap.fromTo(
          ".js-help-cloud",
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
        gsap.set(".js-help-hero > *, .js-help-cloud", { clearProps: "all" });
      });

      return () => media.revert();
    },
    { scope: sectionRef },
  );

  return (
    // Same compact band as the pricing hero, in the slate tone that ties it to
    // the pricing comparison card.
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#E9EAEE] pb-24 pt-28 md:pb-28"
    >
      <img
        src={cloudKhaki}
        alt=""
        aria-hidden="true"
        className="js-help-cloud pointer-events-none absolute left-[2%] top-[26%] z-0 w-[clamp(70px,9vw,150px)]"
      />

      <div className="relative z-10 mx-auto max-w-[1344px] px-4 md:px-8">
        <div className="js-help-hero flex flex-col items-center text-center">
          <h1 className="font-gilroy-bold text-[clamp(24px,3vw,40px)] leading-[1.25] tracking-[-0.02em] text-[#4a4a4a]">
            How can we{" "}
            <span className="ml-1 inline-block -rotate-2 rounded-full bg-[#FFE95C] px-[0.55em] py-[0.1em] text-[#3f3f3f]">
              help?
            </span>
          </h1>

          <p className="mt-5 max-w-[520px] text-[clamp(12px,1.05vw,15px)] leading-[1.65] text-[#5b6070]">
            Search our guides, tutorials, and FAQs to find answers and get the
            most out of Growdex.
          </p>

          <form
            className="mt-7 w-full max-w-[420px]"
            role="search"
            onSubmit={(event) => event.preventDefault()}
          >
            <label className="relative block">
              <span className="sr-only">Search for articles</span>
              <Search
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9aa0b0]"
                aria-hidden="true"
              />
              <input
                type="search"
                value={query}
                onChange={(event) => onQueryChange(event.target.value)}
                placeholder="Search for articles..."
                className="w-full rounded-full bg-white py-3 pl-11 pr-5 text-[13px] text-[#3f3f3f] shadow-[0_6px_18px_rgba(60,65,85,.08)] outline-none placeholder:text-[#9aa0b0] focus:ring-2 focus:ring-[#FFE95C]"
              />
            </label>
          </form>
        </div>
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
