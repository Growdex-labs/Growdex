import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Play } from "lucide-react";
import dashboard from "../../../assets/growdex-dashboard-campaign-overview.webp";
import leftSteps from "../../../assets/growdex-hero-cloud-steps-left.png";
import rightSteps from "../../../assets/growdex-hero-cloud-steps-right.png";
import leftPills from "../../../assets/growdex-hero-three-pill-left.png";
import rightPills from "../../../assets/growdex-hero-three-pill-right.png";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .from(".js-hero-decor-left", { autoAlpha: 0, x: -70, rotation: -8, duration: 0.9 }, 0)
          .from(".js-hero-decor-right", { autoAlpha: 0, x: 70, rotation: 8, duration: 0.9 }, 0.08)
          .from(".js-hero-line", {
            autoAlpha: 0,
            y: 32,
            duration: 0.75,
            stagger: 0.09,
          })
          .from(".js-hero-support", { autoAlpha: 0, y: 22, duration: 0.55 }, "-=0.42")
          .from(".js-hero-actions", { autoAlpha: 0, y: 18, duration: 0.5 }, "-=0.34")
          .from(
            ".js-hero-dashboard-shell",
            { autoAlpha: 0, y: 74, scale: 0.975, duration: 1.05 },
            "-=0.3",
          );

        gsap
          .timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1,
              invalidateOnRefresh: true,
            },
            defaults: { ease: "none" },
          })
          .to(".js-hero-copy", { y: 48 }, 0)
          .to(".js-hero-dashboard", { y: 165, scale: 0.985 }, 0)
          .to(".js-hero-decor", { y: 52 }, 0)
          .to(".js-hero-decor-left", { x: 28, rotation: 2 }, 0)
          .to(".js-hero-decor-right", { x: -24, rotation: -2 }, 0);

        gsap.to(".js-hero-pill-float-left", {
          y: -12,
          rotation: 2.5,
          duration: 3.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        gsap.to(".js-hero-pill-float-right", {
          y: 11,
          rotation: -2,
          duration: 3.7,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          ".js-hero-line, .js-hero-support, .js-hero-actions, .js-hero-dashboard-shell, .js-hero-copy, .js-hero-dashboard, .js-hero-decor, .js-hero-pill-float-left, .js-hero-pill-float-right",
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
      className="hero-stage relative overflow-hidden bg-[#ffe75d] px-4 pb-0 pt-32 text-[#484848] md:pt-40"
    >
      <div className="js-hero-decor js-hero-decor-left pointer-events-none absolute left-[2%] top-[18%] z-[2] hidden w-[clamp(170px,16vw,260px)] lg:block" aria-hidden="true">
        <img src={leftPills} alt="" className="js-hero-pill-float-left block w-full" />
      </div>
      <div className="js-hero-decor js-hero-decor-right pointer-events-none absolute right-[3%] top-[25%] z-[2] hidden w-[clamp(125px,11vw,180px)] lg:block" aria-hidden="true">
        <img src={rightPills} alt="" className="js-hero-pill-float-right block w-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] text-center">
        <div className="js-hero-copy">
          <h1 className="mx-auto max-w-[1344px] font-gilroy-semibold text-[40px] leading-[1.12] tracking-[-0.04em] sm:text-[44px] md:text-[clamp(38px,4.2vw,61px)]">
            <span className="js-hero-line md:whitespace-nowrap">
              Create,{" "}
              <span className="mx-1 inline-block -rotate-2 rounded-full bg-[#211d02] px-5 py-1 text-white transition-transform duration-300 hover:-rotate-1 hover:scale-[1.025]">
                launch
              </span>
              , manage, and
            </span>
            <span className="js-hero-line block md:whitespace-nowrap">
              optimize Meta and TikTok{" "}
              <span className="inline-block rounded-full border border-[#595959] bg-[#8b8c94] px-4 py-0.5 text-white">
                campaigns
              </span>
            </span>
            <span className="js-hero-line block md:whitespace-nowrap">
              from one{" "}
              <span className="inline-block rounded-full border border-[#725188] bg-[#d99af9] px-4 py-0.5 text-white">
                intelligent
              </span>{" "}
              platform
            </span>
          </h1>

          <p className="js-hero-support mx-auto mt-9 max-w-[760px] text-[14px] leading-7 text-[#393939] sm:text-base">
            The all-in-one platform for creating, launching, managing, and
            optimizing high-performing ad campaigns, helping you save time, make
            smarter decisions, and drive better marketing results.
          </p>

          <div className="js-hero-actions mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="https://app.growdex.ai" className="inline-flex min-w-[154px] items-center justify-center gap-3 rounded-[9px] bg-[#101010] px-5 py-3 text-sm text-white shadow-[0_8px_20px_rgba(0,0,0,.13)] transition-transform duration-200 hover:-translate-y-1 active:scale-[.97]">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-white/85 text-black"><ArrowRight size={12} /></span>
              Start for free
            </a>
            <a href="/book-demo" className="inline-flex min-w-[142px] items-center justify-center gap-2 rounded-[9px] border border-[#242000] px-5 py-3 text-sm text-[#171717] transition duration-200 hover:-translate-y-1 hover:bg-[#fff3aa] active:scale-[.97]">
              <Play size={13} fill="currentColor" /> Book a demo
            </a>
          </div>
        </div>

        <div className="js-hero-dashboard-shell relative z-10 mx-auto mt-14 w-full max-w-[1344px] md:mt-16">
          <div className="js-hero-dashboard overflow-hidden rounded-t-[14px] bg-white shadow-[0_28px_70px_rgba(83,64,0,.28)]">
            <img
              src={dashboard}
              alt="Growdex campaign analytics dashboard"
              className="block h-auto w-full"
              onLoad={() => ScrollTrigger.refresh()}
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-5 bg-white" aria-hidden="true" />
      <img src={leftSteps} alt="" aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 z-30 w-[40%] max-w-[420px] sm:w-[30%]" />
      <img src={rightSteps} alt="" aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 z-30 w-[38%] max-w-[390px] sm:w-[28%]" />
    </section>
  );
}
