import { useRef } from "react";
import { BadgeCheck, CircleCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import cloudLeft from "../../../assets/New Design/growdex-pricing-cloud-left.png";
import cloudRight from "../../../assets/New Design/growdex-pricing-cloud-right.png";
import blackLeft from "../../../assets/New Design/growdex-faq-showcase-black-left.png";
import blackRight from "../../../assets/New Design/growdex-faq-showcase-black-right.png";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// `true` renders a tick, `null` renders a dash, anything else prints as-is.
const rows = [
  ["Active Campaigns", "3", "Unlimited"],
  ["Draft Campaigns", "Unlimited", "Unlimited"],
  ["AI Campaign Builder", true, true],
  ["Manual Campaign Builder", true, true],
  ["Publish to Meta", true, true],
  ["Publish to TikTok", true, true],
  ["AI Chat", "10/month", "Unlimited"],
  ["AI Campaign Generation", "5/month", "Unlimited"],
  ["AI Copy Generation", "10/month", "Unlimited"],
  ["AI Recommendations", "Basic", "Advanced"],
  ["AI Creative Variations", null, true],
  ["AI Audience Recommendations", null, true],
  ["AI Optimization Suggestions", null, true],
  ["Analytics", "Basic", "Advanced"],
  ["Performance Insights", null, true],
  ["Campaign Templates", null, true],
  ["Campaign Duplication", null, true],
  ["Workspace", "1", "1"],
  ["Support", "Community", "Priority"],
];

function Cell({ value }) {
  if (value === true) {
    return (
      <CircleCheck
        className="h-[15px] w-[15px] text-[#2eb872]"
        strokeWidth={1.8}
        aria-label="Included"
      />
    );
  }
  if (value === null) {
    return (
      <span className="text-[#b4b4b4]" aria-label="Not included">
        –
      </span>
    );
  }
  return <span>{value}</span>;
}

export default function ComparePlans() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 78%",
              once: true,
            },
            defaults: { ease: "power3.out" },
          })
          .from(".js-compare-card", { autoAlpha: 0, y: 34, duration: 0.75 })
          .from(
            ".js-compare-row",
            { autoAlpha: 0, y: 10, duration: 0.4, stagger: 0.025 },
            "-=0.45",
          );

        const drift = [
          [".js-compare-cloud-left", 34, -26],
          [".js-compare-cloud-right", 44, -32],
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
          ".js-compare-card, .js-compare-row, .js-compare-cloud-left, .js-compare-cloud-right",
          { clearProps: "all" },
        );
      });

      return () => media.revert();
    },
    { scope: sectionRef },
  );

  return (
    // z-20 keeps the card above the footer (z-10) so the part hanging past the
    // section's bottom edge stays visible against the dark background.
    // Must stay `relative`: as `absolute` the section leaves the flow and
    // shrink-wraps, which collapses the page width and drops it beside the
    // footer. z-20 is what keeps the overhanging card above the footer.
    <section
      ref={sectionRef}
      className="relative z-20 bg-white pt-12 md:pt-20"
    >
      <img
        src={cloudLeft}
        alt=""
        aria-hidden="true"
        className="js-compare-cloud-left pointer-events-none absolute bottom-[clamp(20px,13vw,60px)] left-0 z-0 w-[clamp(110px,15vw,250px)]"
      />
      <img
        src={cloudRight}
        alt=""
        aria-hidden="true"
        className="js-compare-cloud-right pointer-events-none absolute bottom-[clamp(10px,11vw,10px)] right-0 z-0 w-[clamp(120px,16vw,270px)]"
      />
      <img
        src={blackLeft}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-12 left-0 z-[5] w-[30%] max-w-[360px]"
      />
      <img
        src={blackRight}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-12 right-0 z-[5] w-[28%] max-w-[340px]"
      />

      <div className="relative z-10 mx-auto max-w-[1000px] px-6 md:px-12">
        {/* Negative bottom margin lets the card hang past the section and over
            the footer, which is the overflow the design calls for. */}
        <div className="js-compare-card -mb-[clamp(100px,6vw,210px)] rounded-[26px] border-[3px] border-[#171717] bg-white p-3 shadow-[0_20px_50px_rgba(20,20,20,.16)] md:p-4">
          <div className="rounded-[14px] bg-[#0d0d0d] px-6 py-4">
            <h2 className="font-gilroy-bold text-[clamp(15px,1.5vw,20px)] text-[#FFE95C]">
              Compare Plans
            </h2>
          </div>

          <div className="overflow-x-auto px-2 pb-4 pt-6 md:px-4">
            <table className="w-full min-w-[520px] border-collapse text-left">
              <thead>
                <tr className="font-gilroy-bold text-[clamp(11px,1.05vw,14px)] text-[#1f1f1f]">
                  <th className="w-[42%] pb-4 pr-4 font-gilroy-bold">
                    Feature
                  </th>
                  <th className="w-[29%] border-l border-[#e8e8e8] pb-4 pl-6 pr-4 font-gilroy-bold">
                    Free
                  </th>
                  <th className="w-[29%] border-l border-[#e8e8e8] pb-4 pl-6 font-gilroy-bold">
                    <span className="flex items-center gap-1.5">
                      <BadgeCheck
                        className="h-[15px] w-[15px] text-[#c07ef0]"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                      Pro
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="text-[clamp(10px,0.95vw,12.5px)] text-[#4a4a4a]">
                {rows.map(([feature, free, pro]) => (
                  <tr key={feature} className="js-compare-row align-middle">
                    <td className="py-[5px] pr-4">{feature}</td>
                    <td className="border-l border-[#e8e8e8] py-[5px] pl-6 pr-4">
                      <Cell value={free} />
                    </td>
                    <td className="border-l border-[#e8e8e8] py-[5px] pl-6">
                      <Cell value={pro} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
