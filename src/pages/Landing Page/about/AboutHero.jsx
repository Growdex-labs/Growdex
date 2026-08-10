import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import heroPortrait from "../../../assets/New Design/growdex-about-hero-portrait.webp";
import cloudKhaki from "../../../assets/New Design/growdex-about-cloud-khaki.png";
import whiteCloudLeft from "../../../assets/New Design/growdex-hero-cloud-steps-left.png";
import whiteCloudRight from "../../../assets/New Design/growdex-hero-cloud-steps-right.png";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AboutHero() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power3.out" }, delay: 0.15 })
          .from(".js-about-copy > *", {
            autoAlpha: 0,
            y: 26,
            duration: 0.65,
            stagger: 0.12,
          })
          // The portrait's tilt lives on an inner element so this entrance
          // never fights the resting rotation.
          .from(
            ".js-about-portrait",
            { autoAlpha: 0, x: 46, scale: 0.94, duration: 0.85 },
            "-=0.5",
          );

        gsap.fromTo(
          ".js-about-cloud",
          { y: 18 },
          {
            y: -24,
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
        gsap.set(".js-about-copy > *, .js-about-portrait, .js-about-cloud", {
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
      // Capped near 68vh rather than running full-height, with short bottom
      // padding so the white clouds ride up over the portrait's lower corner.
      className="relative flex min-h-[68vh] flex-col justify-center overflow-hidden bg-[#FFE95C] pb-12 pt-28"
    >
      <img
        src={cloudKhaki}
        alt=""
        aria-hidden="true"
        className="js-about-cloud pointer-events-none absolute bottom-[18%] left-[2%] z-0 w-[clamp(90px,12vw,200px)]"
      />

      <div className="relative z-10 mx-auto max-w-[1344px] px-4 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div className="js-about-copy max-w-[560px]">
            <h1 className="font-gilroy-bold text-[clamp(30px,3.6vw,46px)] leading-[1.25] tracking-[-0.02em] text-[#3f3f3f]">
              Making Digital{" "}
              <span className="whitespace-nowrap">
                Advertising{" "}
                <span className="ml-1 inline-block -rotate-2 rounded-full border-2 border-[#3f3f3f] px-[0.45em] py-[0.08em]">
                  Simpler
                </span>
              </span>
            </h1>

            <p className="mt-8 text-[clamp(12px,1vw,15px)] leading-[1.7] text-[#3f3f3f]">
              Digital advertising is one of the most effective ways to grow a
              business—but it has also become increasingly complex.
            </p>
            <p className="mt-5 text-[clamp(12px,1vw,15px)] leading-[1.7] text-[#3f3f3f]">
              Managing campaigns across multiple platforms, switching between
              dashboards, and keeping up with constant changes takes time away
              from what matters most: growing your business.{" "}
              <strong className="font-gilroy-bold">
                That&rsquo;s why we built Growdex.
              </strong>
            </p>
            <p className="mt-5 text-[clamp(12px,1vw,15px)] leading-[1.7] text-[#3f3f3f]">
              Our platform brings campaign creation, management, optimization,
              and reporting into one place, helping businesses launch faster,
              work smarter, and achieve better results.
            </p>
          </div>

          {/* The frame and its tilt are baked into the artwork; the hover lift
              rides on the wrapper so it composes with the entrance tween. */}
          {/* Capped against viewport height as well as width — the portrait is
              what drives the section's height, so a pixel-only cap would push
              the hero past the 68vh target on tall screens. */}
          <div className="js-about-portrait group absolute right-0 top-[calc(100%+3rem)] w-full max-w-[540px] lg:relative lg:top-20 lg:max-w-[min(520px,44vh)]">
            <img
              src={heroPortrait}
              alt="A small business owner checking her campaigns on her phone"
              className="w-full drop-shadow-[0_18px_40px_rgba(90,74,0,.18)] transition-transform duration-500 ease-out will-change-transform group-hover:-translate-y-2 group-hover:rotate-1 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>

      {/* Same white cloud transition the home page hero uses. */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-5 bg-white"
        aria-hidden="true"
      />
      <img
        src={whiteCloudLeft}
        alt=""
        aria-hidden="true"
        // Behind the content: this one sits under the body copy, so keeping it
        // in front would clip the text. The right cloud stays above so the
        // portrait can tuck into it.
        className="pointer-events-none absolute bottom-0 left-0 z-[5] w-[40%] max-w-[420px] sm:w-[30%]"
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
