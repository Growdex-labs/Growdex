import { useRef } from "react";
import { ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import audienceBuilder from "../../../assets/growdex-audience-targeting-builder.png";
import campaignDashboard from "../../../assets/growdex-dashboard-campaign-overview.webp";
import recommendationsPanel from "../../../assets/growdex-ai-recommendations-panel.png";
import sideAccent from "../../../assets/growdex-workflow-pill-accent.png";
import cloudStepsLeft from "../../../assets/growdex-workflow-cloud-steps-left.png";
import cloudStepsRight from "../../../assets/growdex-workflow-cloud-steps-right.png";
import performanceTab from "../../../assets/growdex-workflow-tab-performance.png";
import manualTab from "../../../assets/growdex-workflow-tab-manual.png";
import optimizeTab from "../../../assets/growdex-workflow-tab-optimize.png";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Each folder's body takes the colour of its own tab, so the active tab reads
// as part of the card and the other two sit behind it.
const OLIVE = "#928322";
const YELLOW = "#ffe95c";
const BLACK = "#333333";

const workflows = [
  {
    eyebrow: "Build Campaigns",
    highlight: "Your Way",
    intro: "AI when you need it. Manual control when you don't.",
    body: "Whether you want to generate a campaign in seconds or fine-tune every detail yourself, Growdex adapts to your workflow.",
    image: audienceBuilder,
    imageAlt: "Growdex audience targeting builder",
    // The PNG carries its own rounded card, shadow and transparent margin, so
    // the offset is pulled left to land its visible edge on the card padding.
    imageClass: "left-[2.5%] w-[108%]",
    cardBg: OLIVE,
    cardTitle: "Manual Campaign Builder",
    cardTitleColor: "#ffffff",
    cardCopy:
      "Prefer hands-on control? Build campaigns exactly the way you want using a streamlined interface designed for marketers.",
    cardCopyColor: "rgba(255,248,201,.78)",
    tab: "Manual Campaign",
    activeTab: "manual",
    tabTextColor: YELLOW,
    highlightColor: "#302900",
  },
  {
    eyebrow: "Manage Everything",
    highlight: "From One Dashboard",
    intro: "Stop switching between advertising platforms.",
    body: "Track performance, manage campaigns, monitor results, and make changes without leaving Growdex.",
    image: campaignDashboard,
    // Rendered at the dashboard's own 1:1 CSS size so the UI stays legible and
    // crops off the right edge, matching the design.
    imageClass:
      "left-[6.2%] w-[122%] rounded-tl-[10px] shadow-[0_-10px_34px_rgba(28,24,0,.22)]",
    imageAlt: "Growdex campaign performance dashboard",
    cardBg: YELLOW,
    cardGlow:
      "radial-gradient(ellipse 48% 68% at 104% -8%, #fff6ae 0 100%, rgba(255,246,174,0) 100%)",
    cardTitle: "Campaign Management",
    cardTitleColor: "#292300",
    cardCopy: "Monitor how all your ads are performing ",
    cardCopyStrong: "without switching platforms",
    cardCopyColor: "rgba(41,35,0,.88)",
    cardChevron: true,
    tab: "Performance Analytics",
    activeTab: "performance",
    tabTextColor: "#292300",
    highlightColor: "#302900",
  },
  {
    eyebrow: "With Confidence",
    highlight: "Optimize",
    highlightFirst: true,
    intro: "Better campaigns don't stop after launch.",
    body: "Growdex helps you identify opportunities, monitor performance, and make smarter decisions with built-in recommendations and actionable insights.",
    image: recommendationsPanel,
    imageAlt: "Growdex AI campaign recommendations",
    // Pushed right so the panel runs off the card edge like the other two,
    // which also opens up the left gutter for the purple glow.
    imageClass: "left-[15%] w-[90%] rounded-t-[12px]",
    cardBg: BLACK,
    cardGlow:
      "radial-gradient(72% 60% at -4% 104%, rgba(210,134,243,.95) 0%, rgba(166,88,214,.5) 40%, rgba(51,51,51,0) 74%)",
    // This folder is all product shot — no headline over the panel.
    tab: "Optimize Campaign",
    activeTab: "optimize",
    tabTextColor: "#d792f5",
    highlightColor: "#d792f5",
  },
];

// How much of the tab stays visible above the card, as a % of the card width.
// The tabs themselves render taller than this (11.37%), so the card rides over
// their bottom edge and swallows the rounded corners where they meet.
const TAB_VISIBLE = 9;

// The tabs stack with a shallow offset so each one shows only a sliver of the
// tab behind it. Widths differ because the source PNGs have different aspect
// ratios; these values make all three render at the same height.
const tabs = [
  {
    id: "manual",
    image: manualTab,
    position: "left-0",
    width: "w-[34%]",
    widthPercent: 34,
  },
  {
    id: "performance",
    image: performanceTab,
    position: "left-[7%]",
    width: "w-[38.2%]",
    widthPercent: 38.2,
  },
  {
    id: "optimize",
    image: optimizeTab,
    position: "left-[18%]",
    width: "w-[34%]",
    widthPercent: 34,
  },
];

function FolderCard({ workflow }) {
  const activeIndex = tabs.findIndex((tab) => tab.id === workflow.activeTab);
  const activeTab = tabs[activeIndex];

  return (
    <div
      className="js-workflow-folder relative"
      style={{ paddingTop: `${TAB_VISIBLE}%` }}
    >
      {tabs.map((tab, index) => (
        <img
          key={tab.id}
          src={tab.image}
          alt=""
          aria-hidden="true"
          className={`absolute top-0 h-auto ${tab.position} ${tab.width}`}
          // The active tab sits in front; the rest fan out behind it, nearest
          // first, so every tab still shows a sliver of colour.
          style={{ zIndex: 30 - Math.abs(index - activeIndex) }}
        />
      ))}
      <div
        // Sized to the visible strip rather than the whole tab, so the label
        // stays centred in what you can actually see.
        className={`absolute top-0 z-[35] flex items-center ${activeTab.position} ${activeTab.width}`}
        style={{ aspectRatio: `${activeTab.widthPercent} / ${TAB_VISIBLE}` }}
        aria-hidden="true"
      >
        <span
          className="whitespace-nowrap pl-[18%] font-gilroy-semibold text-[clamp(9px,1.02vw,15px)]"
          style={{ color: workflow.tabTextColor }}
        >
          {workflow.tab}
        </span>
      </div>

      <div
        className="relative z-40 overflow-hidden rounded-[20px] rounded-tl-none shadow-[0_26px_55px_rgba(44,38,0,.16)]"
        style={{ backgroundColor: workflow.cardBg }}
      >
        {workflow.cardGlow ? (
          <div
            className="pointer-events-none absolute inset-0 z-0"
            style={{ backgroundImage: workflow.cardGlow }}
            aria-hidden="true"
          />
        ) : null}

        {workflow.cardTitle ? (
          <div className="relative z-10 flex items-start justify-between gap-5 px-[6.8%] pt-[5.5%]">
            <div className="min-w-0 flex-1">
              <h3
                className="font-gilroy-bold text-[clamp(17px,2.15vw,32px)] leading-[1.14] tracking-[-0.01em]"
                style={{ color: workflow.cardTitleColor }}
              >
                {workflow.cardTitle}
              </h3>
              <p
                className="mt-2 font-gilroy-regular text-[clamp(10px,1.05vw,15px)] leading-[1.55] sm:mt-3"
                style={{ color: workflow.cardCopyColor }}
              >
                {workflow.cardCopy}
                {workflow.cardCopyStrong ? (
                  <strong className="font-gilroy-bold">
                    {workflow.cardCopyStrong}
                  </strong>
                ) : null}
              </p>
            </div>
            {workflow.cardChevron ? (
              <ChevronRight
                className="mt-[6%] h-[clamp(16px,1.8vw,26px)] w-[clamp(16px,1.8vw,26px)] shrink-0"
                strokeWidth={2.5}
                style={{ color: workflow.cardTitleColor }}
                aria-hidden="true"
              />
            ) : null}
          </div>
        ) : null}

        <div
          className={`relative z-10 aspect-[100/56] overflow-hidden ${workflow.cardTitle ? "mt-[4.5%]" : "mt-[7%]"}`}
        >
          <img
            src={workflow.image}
            alt={workflow.imageAlt}
            className={`js-workflow-image absolute top-0 block h-auto max-w-none ${workflow.imageClass}`}
            onLoad={() => ScrollTrigger.refresh()}
          />
        </div>
      </div>
    </div>
  );
}

export default function FeaturesRow() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const rows = gsap.utils.toArray(".js-workflow-row");
        rows.forEach((row) => {
          const copy = row.querySelector(".js-workflow-copy");
          const folder = row.querySelector(".js-workflow-folder");
          const image = row.querySelector(".js-workflow-image");
          // The parallax runs on a separate wrapper: sharing one element with
          // the entrance tween leaves both fighting over the same transform,
          // which strands the card at its start offset.
          const parallax = row.querySelector(".js-workflow-parallax");

          gsap
            .timeline({
              scrollTrigger: {
                trigger: row,
                start: "top 76%",
                once: true,
              },
              defaults: { ease: "power3.out" },
            })
            .from(copy.children, {
              autoAlpha: 0,
              x: -34,
              duration: 0.65,
              stagger: 0.1,
            })
            .from(
              folder,
              { autoAlpha: 0, x: 58, y: 20, scale: 0.97, duration: 0.85 },
              "-=0.52",
            )
            .from(image, { scale: 1.045, duration: 1.05 }, "-=0.7");

          gsap.fromTo(
            parallax,
            { y: 28 },
            {
              y: -24,
              ease: "none",
              scrollTrigger: {
                trigger: row,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.1,
                invalidateOnRefresh: true,
              },
            },
          );
        });

        gsap.fromTo(
          ".js-workflow-side-accent",
          { x: -35, y: 25, rotation: -6 },
          {
            x: 18,
            y: -35,
            rotation: 3,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "35% bottom",
              end: "85% top",
              scrub: 1,
            },
          },
        );
      });

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          ".js-workflow-copy > *, .js-workflow-parallax, .js-workflow-folder, .js-workflow-image, .js-workflow-side-accent",
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
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-white pb-64 pt-12 md:pb-72 lg:pt-20"
    >
      <div className="relative z-10 mx-auto max-w-[1344px] px-6 md:px-12">
        <div className="space-y-24 md:space-y-32 lg:space-y-40">
          {workflows.map((workflow) => (
            <article
              key={workflow.tab}
              className="js-workflow-row grid items-center gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24"
            >
              <div className="js-workflow-copy max-w-[430px] lg:pl-8">
                <h2 className="font-gilroy-semibold text-[36px] leading-[1.08] tracking-[-0.03em] text-[#535353] sm:text-[43px]">
                  {workflow.highlightFirst ? (
                    <>
                      <span
                        className="mb-1 inline-block -rotate-2 rounded-full px-5 py-1 text-white"
                        style={{ backgroundColor: workflow.highlightColor }}
                      >
                        {workflow.highlight}
                      </span>
                      <span className="block">{workflow.eyebrow}</span>
                    </>
                  ) : (
                    <>
                      <span className="block">{workflow.eyebrow}</span>
                      <span
                        className={`mt-1 inline-block -rotate-2 rounded-full py-1 text-white ${workflow.activeTab === "performance" ? "whitespace-nowrap px-4 text-[clamp(25px,2.65vw,40px)]" : "px-5"}`}
                        style={{ backgroundColor: workflow.highlightColor }}
                      >
                        {workflow.highlight}
                      </span>
                    </>
                  )}
                </h2>
                <div className="mt-14 max-w-[390px] text-[16px] leading-7 text-[#515151]">
                  <p>{workflow.intro}</p>
                  <p className="mt-4">{workflow.body}</p>
                </div>
              </div>
              <div className="js-workflow-parallax">
                <FolderCard workflow={workflow} />
              </div>
            </article>
          ))}
        </div>
      </div>

      <img
        src={sideAccent}
        alt=""
        aria-hidden="true"
        className="js-workflow-side-accent pointer-events-none absolute left-[-24px] top-[59%] z-0 w-[175px] opacity-75 sm:left-[200px] sm:w-[210px]"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-20 bg-[#fff8c9]"
        aria-hidden="true"
      />
      <img
        src={cloudStepsLeft}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 z-[1] w-[46%] max-w-[590px]"
      />
      <img
        src={cloudStepsRight}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 z-[1] w-[43%] max-w-[538px]"
      />
    </section>
  );
}
