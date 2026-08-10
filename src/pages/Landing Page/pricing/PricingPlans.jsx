import { useRef, useState } from "react";
import { BadgeCheck, ChevronDown, CircleCheck, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// The tab is a trapezoid: square on the left, slanting out to the right so the
// body below can overlap its lower edge and read as one folder.
const TAB_CLIP = "polygon(0 0, 90% 0, 100% 100%, 0 100%)";
const BADGE_CLIP = "polygon(13% 0, 100% 0, 100% 100%, 0 100%)";

const plans = [
  {
    id: "free",
    name: "Start for Free",
    tabBg: "#4E5673",
    bodyBg: "#E7E9EF",
    blurb:
      "Experience the complete Growdex workflow and launch your first campaigns.",
    price: "$0/month",
    tone: {
      heading: "text-[#2f3545]",
      body: "text-[#4a5163]",
      muted: "text-[#7b8296]",
      rule: "bg-[#c9cdd9]",
      icon: "text-[#4E5673]",
      fade: "linear-gradient(to bottom, rgba(231,233,239,0), #E7E9EF)",
    },
    cta: {
      label: "Start for Free",
      className: "bg-[#202020] text-white hover:bg-[#3a3a3a]",
    },
    groups: [
      {
        title: "Campaigns",
        items: [
          "Up to **3 active campaigns**",
          "Unlimited draft campaigns",
          "AI Campaign Builder",
          "Manual Campaign Builder",
          "Publish to Meta & TikTok",
        ],
      },
      {
        title: "AI",
        items: [
          "10 AI Chat messages/month",
          "5 AI Campaign generations/month",
          "10 AI copy generations/month",
          "Basic AI recommendations",
        ],
      },
      {
        title: "Analytics",
        items: ["Basic campaign analytics", "Basic reporting"],
      },
      { title: "Workspace", items: ["1 Workspace"] },
    ],
  },
  {
    id: "pro",
    name: "Upgrade to Pro",
    featured: true,
    badge: "Most Popular Plan",
    tabBg: "#202020",
    bodyBg: "#202020",
    blurb: "For businesses, marketers, freelancers & growing teams",
    price: "$45/month",
    tone: {
      heading: "text-white",
      body: "text-[#d4d4d4]",
      muted: "text-[#8f8f8f]",
      rule: "bg-white/15",
      icon: "text-white",
      fade: "linear-gradient(to bottom, rgba(32,32,32,0), #202020)",
    },
    cta: {
      label: "Upgrade to Pro",
      icon: Sparkles,
      className: "bg-[#FFE95C] text-[#292300] hover:bg-[#ffef8a]",
    },
    lead: "Everything in Free",
    groups: [
      {
        title: "Campaigns",
        items: [
          "Unlimited active campaigns",
          "Unlimited drafts",
          "Campaign duplication",
          "Campaign templates",
        ],
      },
      {
        title: "AI",
        items: [
          "Unlimited AI Chat",
          "Unlimited AI Campaign generation",
          "Unlimited AI copy generation",
          "AI audience recommendations",
          "AI creative variations",
          "AI optimization suggestions",
        ],
      },
      {
        title: "Analytics",
        items: [
          "Advanced analytics",
          "Performance insights",
          "AI Recommendations Dashboard",
        ],
      },
    ],
  },
];

// Renders **bold** segments so a single list entry can emphasise part of itself.
function RichText({ value }) {
  return value.split(/(\*\*[^*]+\*\*)/g).map((chunk, index) =>
    chunk.startsWith("**") && chunk.endsWith("**") ? (
      <strong key={index} className="font-gilroy-bold">
        {chunk.slice(2, -2)}
      </strong>
    ) : (
      <span key={index}>{chunk}</span>
    ),
  );
}

function PlanCard({ plan }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="js-plan relative w-full max-w-[420px]">
      {/* Tab row */}
      <div className="relative">
        {plan.badge ? (
          <div
            className="absolute right-0 top-[34%] z-0 flex w-[46%] items-center justify-center gap-1.5 bg-[#3a3a3a] py-[0.5em] pl-[8%] pr-2 text-[11px] text-white"
            style={{ clipPath: BADGE_CLIP }}
          >
            <BadgeCheck className="h-3 w-3 shrink-0 text-[#FFE95C]" />
            <span className="whitespace-nowrap">{plan.badge}</span>
          </div>
        ) : null}

        <div
          className="relative z-10 flex w-[68%] items-center gap-2 rounded-tl-[10px] px-5 pb-4 pt-3"
          style={{ backgroundColor: plan.tabBg, clipPath: TAB_CLIP }}
        >
          {plan.featured ? (
            <CircleCheck className="h-4 w-4 shrink-0 text-[#FFE95C]" />
          ) : null}
          <span className="whitespace-nowrap font-gilroy-bold text-[clamp(14px,1.3vw,18px)] text-[#FFE95C]">
            {plan.name}
          </span>
        </div>
      </div>

      {/* Body overlaps the tab's lower edge so the two read as one shape. */}
      <div
        className="relative z-20 -mt-2 rounded-[14px] rounded-tl-none px-6 pb-6 pt-6 shadow-[0_18px_45px_rgba(40,45,70,.13)]"
        style={{ backgroundColor: plan.bodyBg }}
      >
        <div className="flex items-start justify-between gap-4">
          <p
            className={`max-w-[58%] text-[clamp(11px,0.95vw,13px)] leading-[1.5] ${plan.tone.body}`}
          >
            {plan.blurb}
          </p>
          <p
            className={`shrink-0 font-gilroy-bold text-[clamp(18px,1.9vw,26px)] ${plan.tone.heading}`}
          >
            {plan.price}
          </p>
        </div>

        <div className={`mt-5 h-px w-full ${plan.tone.rule}`} />

        <div className="relative">
          <div
            className={`overflow-hidden transition-all duration-500 ease-out ${
              expanded ? "max-h-[1400px]" : "max-h-[380px]"
            }`}
          >
            {plan.lead ? (
              <div className="mt-6 flex items-center gap-3">
                <CircleCheck
                  className={`h-4 w-4 shrink-0 ${plan.tone.icon}`}
                  strokeWidth={1.8}
                />
                <span
                  className={`font-gilroy-semibold text-[clamp(11px,1vw,13px)] ${plan.tone.heading}`}
                >
                  {plan.lead}
                </span>
              </div>
            ) : null}

            {plan.groups.map((group) => (
              <div key={group.title} className="mt-6">
                <div className="flex items-center gap-3">
                  <CircleCheck
                    className={`h-4 w-4 shrink-0 ${plan.tone.icon}`}
                    strokeWidth={1.8}
                  />
                  <h3
                    className={`font-gilroy-semibold text-[clamp(11px,1vw,13px)] ${plan.tone.heading}`}
                  >
                    {group.title}
                  </h3>
                </div>
                <ul className="mt-3 space-y-2.5 pl-7">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-3 text-[clamp(10px,0.9vw,12.5px)] leading-[1.4] ${plan.tone.body}`}
                    >
                      <span
                        aria-hidden="true"
                        className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${plan.tone.rule}`}
                      />
                      <span>
                        <RichText value={item} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {!expanded ? (
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
              style={{ backgroundImage: plan.tone.fade }}
              aria-hidden="true"
            />
          ) : null}
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            className={`inline-flex items-center gap-1 text-[clamp(10px,0.9vw,12px)] transition-colors hover:opacity-80 ${plan.tone.muted}`}
          >
            {expanded ? "See fewer features" : "See more features"}
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            />
          </button>

          <a
            href="#waitlist-banner"
            className={`inline-flex shrink-0 items-center gap-2 rounded-[8px] px-5 py-2.5 font-gilroy-semibold text-[clamp(11px,1vw,13px)] transition-colors ${plan.cta.className}`}
          >
            {plan.cta.icon ? <plan.cta.icon className="h-3.5 w-3.5" /> : null}
            {plan.cta.label}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function PricingPlans() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 76%",
              once: true,
            },
            defaults: { ease: "power3.out" },
          })
          .from(".js-plans-intro", { autoAlpha: 0, y: 20, duration: 0.55 })
          .from(
            ".js-plan",
            { autoAlpha: 0, y: 34, duration: 0.7, stagger: 0.14 },
            "-=0.3",
          );
      });

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".js-plans-intro, .js-plan", { clearProps: "all" });
      });

      return () => media.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="bg-white pb-20 pt-12 md:pb-28">
      <div className="mx-auto max-w-[1100px] px-6 md:px-12">
        <p className="js-plans-intro mx-auto max-w-[520px] text-center text-[clamp(12px,1.05vw,15px)] leading-[1.65] text-[#515151]">
          Start for free and{" "}
          <strong className="font-gilroy-bold text-[#3f3f3f]">upgrade</strong>{" "}
          when you&rsquo;re ready to unlock more advanced tools for your growing
          business.
        </p>

        <div className="mt-12 flex flex-col items-center gap-10 md:mt-16 lg:flex-row lg:items-start lg:justify-center lg:gap-12">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
