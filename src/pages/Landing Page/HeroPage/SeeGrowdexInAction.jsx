import { useRef, useState } from "react";
import { Play } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import cloudTuck from "../../../assets/New Design/growdex-demo-cloud-tuck.png";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Drop the demo file into assets and point this at it — the player wires
// itself up. Until then the frame renders as a still placeholder.
const demoVideo = null;

export default function SeeGrowdexInAction() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => {
    if (!videoRef.current) return;
    videoRef.current.play();
    setIsPlaying(true);
  };

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
          .from(".js-demo-copy > *", {
            autoAlpha: 0,
            x: -28,
            duration: 0.6,
            stagger: 0.12,
          })
          .from(
            ".js-demo-player",
            { autoAlpha: 0, x: 44, scale: 0.96, duration: 0.8 },
            "-=0.45",
          );

        gsap.from(".js-demo-cloud", {
          autoAlpha: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        });

        // Transform-only drift so it never collides with the fade above.
        gsap.fromTo(
          ".js-demo-cloud",
          { x: 24, y: 16 },
          {
            x: -14,
            y: -20,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.1,
              invalidateOnRefresh: true,
            },
          },
        );
      });

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".js-demo-copy > *, .js-demo-player, .js-demo-cloud", {
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
      className="relative left-1/2 w-screen -translate-x-1/2 bg-white py-16 md:py-24"
    >
      {/* Tucks up under the right-hand white cloud of the section above, with
          its lower half spilling onto the white. */}
      <img
        src={cloudTuck}
        alt=""
        aria-hidden="true"
        className="js-demo-cloud pointer-events-none absolute right-[4%] top-[-12px] z-0 w-[clamp(100px,12.5vw,190px)]"
      />

      <div className="relative z-10 mx-auto grid max-w-[1150px] items-center gap-10 px-6 md:px-12 lg:grid-cols-[0.85fr_1.7fr] lg:gap-14">
        <div className="js-demo-copy">
          <h2 className="font-gilroy-bold text-[clamp(23px,2.6vw,34px)] leading-[1.28] tracking-[-0.02em] text-[#3f3f3f]">
            <span className="block">See Growdex</span>
            <span className="mt-2 inline-flex items-baseline gap-3">
              in
              <span className="inline-block -rotate-2 rounded-full bg-[#FFE95C] px-[0.55em] py-[0.16em] text-[#292300]">
                Action
              </span>
            </span>
          </h2>
          <p className="mt-7 max-w-[330px] text-[clamp(14px,1.15vw,17px)] leading-[1.65] text-[#515151]">
            Every part of Growdex is built to reduce friction. Spend less time
            configuring campaigns. Spend more time creating, testing, and
            growing.
          </p>
          <button
            type="button"
            onClick={play}
            disabled={!demoVideo}
            className="mt-10 inline-flex items-center gap-2 rounded-[6px] border border-[#d9d9d9] bg-white px-4 py-2 font-gilroy-medium text-[13px] text-[#3f3f3f] transition-colors hover:border-[#928322] disabled:cursor-not-allowed disabled:opacity-60"
          >
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#FFE95C]">
              <Play
                className="h-2 w-2 fill-[#292300] text-[#292300]"
                strokeWidth={0}
              />
            </span>
            Watch Demo
          </button>
        </div>

        <div className="js-demo-player relative aspect-[595/388] w-full overflow-hidden rounded-[12px] bg-[#3d3d3d]">
          {demoVideo ? (
            <video
              ref={videoRef}
              src={demoVideo}
              className="h-full w-full object-cover"
              playsInline
              preload="metadata"
              controls={isPlaying}
              onPause={() => setIsPlaying(false)}
            />
          ) : null}

          {!isPlaying ? (
            <button
              type="button"
              onClick={play}
              disabled={!demoVideo}
              aria-label="Play the Growdex demo"
              className="absolute left-[4%] top-[6%] flex h-[clamp(24px,2.6vw,34px)] w-[clamp(24px,2.6vw,34px)] items-center justify-center rounded-full bg-white/25 backdrop-blur-sm transition-colors hover:bg-white/40 disabled:cursor-not-allowed"
            >
              <Play
                className="h-1/3 w-1/3 translate-x-[1px] fill-[#1f1f1f] text-[#1f1f1f]"
                strokeWidth={0}
              />
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
