import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import iconCollage from "../../../assets/New Design/growdex-audience-icon-collage.webp";
import founderPhoto from "../../../assets/New Design/growdex-audience-founder.webp";
import smallBusinessPhoto from "../../../assets/New Design/growdex-audience-small-business.webp";
import teamPhoto from "../../../assets/New Design/growdex-audience-team-agency.webp";
import shadowWide from "../../../assets/New Design/growdex-audience-shadow-wide.png";
import shadowNarrow from "../../../assets/New Design/growdex-audience-shadow-narrow.png";
import cloudLeft from "../../../assets/New Design/growdex-audience-cloud-left.png";
import cloudRight from "../../../assets/New Design/growdex-audience-cloud-right.png";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const audiences = [
  {
    id: "founders",
    label: "Founders",
    caption: "Launch campaigns without the learning curve.",
    image: founderPhoto,
    alt: "Founder standing with arms folded",
  },
  {
    id: "small-business",
    label: "Small Businesses",
    caption: "Reach more customers with less complexity.",
    image: smallBusinessPhoto,
    alt: "Shop owner handing a parcel to a courier",
  },
  {
    id: "teams",
    label: "Teams and Agencies",
    caption: "Manage multiple brands with greater efficiency.",
    image: teamPhoto,
    alt: "Marketing team reviewing campaign results on a laptop",
  },
];

// One slot per depth: 0 is the card in front, 2 is the one furthest back. The
// offsets are percentages of the card's own size, so the fan holds its shape at
// every viewport width.
const slots = [
  { x: 36, y: 0, rotate: 1, scale: 1, zIndex: 30 },
  { x: 0, y: 4, rotate: -4, scale: 0.94, zIndex: 20 },
  { x: -38, y: 7, rotate: -8, scale: 0.88, zIndex: 10 },
];

export default function WhoItsForSection() {
  // Starts on the last card so the fan reads Founders → Small Business →
  // Teams from the back of the stack forward.
  const [activeIndex, setActiveIndex] = useState(audiences.length - 1);

  // Stepping the active index *down* pulls the card sitting directly behind
  // the front one forward, so the stack always flows left to right.
  const showNext = () =>
    setActiveIndex(
      (current) => (current - 1 + audiences.length) % audiences.length,
    );
  const showPrevious = () =>
    setActiveIndex((current) => (current + 1) % audiences.length);

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
          .from(".js-audience-heading", {
            autoAlpha: 0,
            y: 26,
            duration: 0.6,
          })
          .from(
            ".js-audience-copy",
            { autoAlpha: 0, y: 20, duration: 0.55 },
            "-=0.35",
          )
          .from(
            ".js-audience-collage",
            { autoAlpha: 0, y: 34, scale: 0.94, duration: 0.7 },
            "-=0.3",
          )
          // The cards' own transform belongs to the slot layout, so the
          // entrance runs on the inner element to keep the two from fighting.
          .from(
            ".js-audience-card",
            {
              autoAlpha: 0,
              y: 64,
              scale: 0.9,
              duration: 0.7,
              stagger: 0.12,
              clearProps: "transform",
            },
            "-=0.45",
          )
          .from(
            ".js-audience-shadow",
            { autoAlpha: 0, scaleX: 0.65, duration: 0.6, stagger: 0.08 },
            "-=0.5",
          )
          // Arrows fade only — they are centred with a CSS translate that a
          // GSAP transform would trample.
          .from(
            ".js-audience-arrow",
            { autoAlpha: 0, duration: 0.45, stagger: 0.1 },
            "-=0.4",
          );

        gsap.from(".js-audience-cloud", {
          autoAlpha: 0,
          duration: 1,
          stagger: 0.18,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        });

        // Clouds drift on scroll. This only touches transforms, while the
        // fade above only touches opacity, so the two never overlap.
        const drift = [
          [".js-audience-cloud-left", { x: -34, y: 26 }, { x: 14, y: -30 }],
          [".js-audience-cloud-right", { x: 30, y: 28 }, { x: -16, y: -24 }],
        ];
        drift.forEach(([target, from, to]) => {
          gsap.fromTo(target, from, {
            ...to,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.1,
              invalidateOnRefresh: true,
            },
          });
        });
      });

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          ".js-audience-heading, .js-audience-copy, .js-audience-collage, .js-audience-card, .js-audience-shadow, .js-audience-arrow, .js-audience-cloud",
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
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#FFF8CE] py-16 md:py-24"
    >
      {/* The left cloud runs off the edge of the page; the right one tucks in
          beside the next-audience button. */}
      <img
        src={cloudLeft}
        alt=""
        aria-hidden="true"
        className="js-audience-cloud js-audience-cloud-left pointer-events-none absolute left-0 top-[16%] z-0 w-[clamp(120px,17vw,265px)]"
      />
      <img
        src={cloudRight}
        alt=""
        aria-hidden="true"
        className="js-audience-cloud js-audience-cloud-right pointer-events-none absolute right-[3%] top-[60%] z-0 w-[clamp(95px,14vw,215px)]"
      />

      <div className="relative z-10 mx-auto max-w-[1344px] px-6 md:px-12">
        <h2 className="js-audience-heading text-center font-gilroy-semibold text-[clamp(24px,3.1vw,40px)] leading-[1.2] tracking-[-0.02em] text-[#535353]">
          Built for Modern{" "}
          <span className="ml-1 inline-block rounded-full bg-[#302900] px-[0.55em] py-[0.14em] font-gilroy-bold text-white">
            Marketing Teams
          </span>
        </h2>
        <p className="js-audience-copy mx-auto mt-5 max-w-[600px] text-center text-[clamp(13px,1.15vw,17px)] leading-[1.6] text-[#515151]">
          Growing businesses, agencies, and marketing teams use Growdex to
          simplify customer acquisition and move faster.
        </p>

        <div className="relative mx-auto mt-2 aspect-[706/599] w-full max-w-[820px] md:mt-4">
          {/* Only the top band of the collage shows — the cards cover the cut. */}
          <div
            className="js-audience-collage pointer-events-none absolute inset-x-0 top-0 h-[34%] overflow-hidden"
            aria-hidden="true"
          >
            <img
              src={iconCollage}
              alt=""
              className="absolute left-1/2 top-0 w-[95%] -translate-x-1/2"
            />
          </div>

          {/* The two shadows sit side by side and overlap in the middle,
              reading as a flattened figure-8 under the fan. */}
          <img
            src={shadowNarrow}
            alt=""
            aria-hidden="true"
            className="js-audience-shadow absolute -bottom-[1%] left-[2%] w-[38%]"
          />
          <img
            src={shadowWide}
            alt=""
            aria-hidden="true"
            className="js-audience-shadow absolute -bottom-[2%] left-[28%] w-[66%]"
          />

          {audiences.map((audience, index) => {
            const depth =
              (activeIndex - index + audiences.length) % audiences.length;
            const slot = slots[depth];
            const isActive = depth === 0;

            return (
              // The wrapper owns the slot transform so the entrance animation
              // on the button inside never collides with it.
              <div
                key={audience.id}
                className="absolute left-[25%] top-[24%] w-1/2 transition-transform duration-500 ease-out"
                style={{
                  zIndex: slot.zIndex,
                  transform: `translate(${slot.x}%, ${slot.y}%) rotate(${slot.rotate}deg) scale(${slot.scale})`,
                }}
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show ${audience.label}`}
                  aria-current={isActive}
                  tabIndex={isActive ? -1 : 0}
                  className={`js-audience-card block w-full rounded-[10px] bg-white p-[4.2%] text-left shadow-[0_18px_40px_rgba(80,68,0,.13)] transition-shadow duration-300 ${
                    isActive
                      ? "cursor-default"
                      : "cursor-pointer hover:shadow-[0_24px_52px_rgba(80,68,0,.22)]"
                  }`}
                >
                  <div className="relative">
                    <img
                      src={audience.image}
                      alt={audience.alt}
                      // Anchored to the top so the tall portrait keeps its
                      // subject's face inside the square-ish crop.
                      className="aspect-[320/335] w-full rounded-[6px] object-cover object-top"
                    />
                    <span className="absolute bottom-[-4%] left-0 rounded-full bg-[#FFE95C] px-[0.7em] py-[0.28em] font-gilroy-bold text-[clamp(13px,1.6vw,22px)] leading-tight text-[#292300]">
                      {audience.label}
                    </span>
                  </div>
                  <p className="mt-[7%] font-gilroy-regular text-[clamp(9px,0.95vw,13px)] leading-[1.45] text-[#4a4a4a]">
                    {audience.caption}
                  </p>
                </button>
              </div>
            );
          })}

          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous audience"
            className="js-audience-arrow absolute left-0 top-1/2 z-40 flex h-[clamp(32px,4.4vw,48px)] w-[clamp(32px,4.4vw,48px)] -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#3f3f3f] shadow-[0_6px_18px_rgba(80,68,0,.18)] transition-colors hover:bg-[#FFE95C]"
          >
            <ChevronLeft className="h-1/2 w-1/2" strokeWidth={2.5} />
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="Next audience"
            className="js-audience-arrow absolute right-0 top-1/2 z-40 flex h-[clamp(32px,4.4vw,48px)] w-[clamp(32px,4.4vw,48px)] -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#3f3f3f] shadow-[0_6px_18px_rgba(80,68,0,.18)] transition-colors hover:bg-[#FFE95C]"
          >
            <ChevronRight className="h-1/2 w-1/2" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
