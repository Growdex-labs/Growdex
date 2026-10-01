import Dashboard2 from "../../../assets/growdex-dashboard-campaign-overview.webp";

import GoogleIcon from "../../../assets/devicon_google.png";
import InstagramIcon from "../../../assets/mingcute_instagram-fill.png";
import FacebookIcon from "../../../assets/logos_facebook.png";
import TwitterIcon from "../../../assets/prime_twitter (1).png";
import TikTokIcon from "../../../assets/Vector.png";
import { BellIcon, SparklesIcon } from "lucide-react";

export default function HeroSection() {
  const platforms = [
    { label: "Google Ads", icon: GoogleIcon, className: "left-40 -top-44" },
    {
      label: "Instagram Ads",
      icon: InstagramIcon,
      className: "left-20 -top-24",
    },
    {
      label: "Facebook Ads",
      icon: FacebookIcon,
      className: "right-56 -top-44",
    },
    { label: "Twitter Ads", icon: TwitterIcon, className: "right-38 -top-24" },
  ];

  const platformsMobile = [
    { label: "Google Ads", icon: GoogleIcon, className: "left-3 -top-14" },
    { label: "Facebook ads", icon: FacebookIcon, className: "right-3 -top-14" },
    { label: "Instagram", icon: InstagramIcon, className: "-right-2 top-0" },
    { label: "Tiktok ads", icon: TikTokIcon, className: "-left-2 top-0" },
  ];

  return (
    <section className="relative overflow-x-hidden overflow-y-hidden bg-white px-4 sm:px-6 pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20">
      {/* Grid background with diamonds */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="heroGrid"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path d="M48 0H0V48" fill="none" stroke="#EEF2F7" strokeWidth="1" />
          </pattern>

          {/* Diamonds: 1 diamond every 4 intersections (48px * 4 = 192px) */}
          <pattern
            id="heroDiamonds"
            width="192"
            height="192"
            patternUnits="userSpaceOnUse"
          >
            {/* Place diamond at a non-edge intersection to avoid clipping */}
            <polygon points="48,40 56,48 48,56 40,48" fill="#D7DEE8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#heroGrid)" opacity="0.55" />
        <rect
          width="100%"
          height="100%"
          fill="url(#heroDiamonds)"
          opacity="0.28"
        />
      </svg>

      {/* Faint curves - Left side */}
      <div className="absolute pointer-events-none w-[40%] sm:top-[16%] sm:-left-[7%] opacity-40 hidden md:block">
        <div className="h-full w-full rounded-full border border-yellow-300/30" />
      </div>
      <div className="absolute pointer-events-none w-[30%] sm:top-[24%] sm:-left-[3.5%] opacity-40 hidden md:block">
        <div className="h-full w-full rounded-full border border-yellow-300/30" />
      </div>
      <div className="absolute pointer-events-none w-[15%] sm:top-[32%] sm:left-[3%] hidden md:block">
        <div className="h-full w-full rounded-full border border-yellow-300/30" />
      </div>

      {/* Faint curves - Right side (mirrored) */}
      <div className="absolute pointer-events-none w-[40%] sm:top-[16%] sm:-right-[7%] opacity-40 hidden md:block">
        <div className="h-full w-full rounded-full border border-yellow-300/30" />
      </div>
      <div className="absolute pointer-events-none w-[30%] sm:top-[24%] sm:-right-[3.5%] opacity-40 hidden md:block">
        <div className="h-full w-full rounded-full border border-yellow-300/30" />
      </div>
      <div className="absolute pointer-events-none w-[15%] sm:top-[32%] sm:right-[3%] hidden md:block">
        <div className="h-full w-full rounded-full border border-yellow-300/30" />
      </div>

      {/* Subtle mobile arcs (screenshot style) */}
      <div className="pointer-events-none md:hidden absolute -bottom-24 -left-24 h-[320px] w-[320px] rounded-full border border-yellow-300/30" />
      <div className="pointer-events-none md:hidden absolute -bottom-28 -right-28 h-[360px] w-[360px] rounded-full border border-yellow-300/30" />

      {/* Bottom fade (desktop only) */}
      <div className="hidden md:block pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[32rem] bg-gradient-to-b from-white/0 from-0% via-white via-[60%] to-white to-100%" />

      <div className="relative z-10 text-center">
        <p className="mx-auto mb-4 w-fit rounded-full border border-[#AD9D37]/30 bg-yellow-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#6F6400]">
          Growdex is currently in beta
        </p>
        <h1 className="px-4 text-[32px] sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900">
          <span className="block font-semibold">All your ad platforms.</span>
          <span className="block font-extrabold">One unified dashboard.</span>
        </h1>

        <p className="mt-4 sm:mt-5 text-[13px] sm:text-base md:text-lg text-gray-600 max-w-[28rem] mx-auto px-4">
          Join the waitlist for early access to one place where you can plan,
          launch, manage, and optimize ads across platforms,
          Plan, launch, manage, and optimize ads across platforms from one
          place,
          <span className="font-semibold text-gray-900">
            {" "}
            powered by AI that brings clarity to your growth.
          </span>
        </p>

        <div className="mt-6 sm:mt-8 flex justify-center px-4">
          <a href="#waitlist-banner" className="inline-flex">
            <button className="bg-gray-800 text-[#FFE95C] px-10 py-3.5 rounded-lg text-sm font-semibold shadow-[0_14px_30px_rgba(0,0,0,0.18)] hover:bg-[#3F3F3F] transition-colors">
              Join the waitlist
            </button>
          </a>
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
            <a href="#waitlist-banner" className="inline-flex min-w-[154px] items-center justify-center gap-3 rounded-[9px] bg-[#101010] px-5 py-3 text-sm text-white shadow-[0_8px_20px_rgba(0,0,0,.13)] transition-transform duration-200 hover:-translate-y-1 active:scale-[.97]">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-white/85 text-black"><ArrowRight size={12} /></span>
              Join Waitlist
              Join waitlist
            </a>
            <a href="/book-demo" className="inline-flex min-w-[142px] items-center justify-center gap-2 rounded-[9px] border border-[#242000] px-5 py-3 text-sm text-[#171717] transition duration-200 hover:-translate-y-1 hover:bg-[#fff3aa] active:scale-[.97]">
              <Play size={13} fill="currentColor" /> Book a demo
            </a>
          </div>
        </div>

        {/* Dashboard / mockup */}
        <div className="relative mt-18 sm:mt-14">
          <div className="relative">
            <div className="mx-auto w-full max-w-[900px] overflow-hidden rounded-2xl shadow-2xl max-h-[260px] sm:max-h-[320px] md:max-h-none">
              <img
                src={Dashboard2}
                alt="Dashboard Preview"
                className="w-full"
              />
            </div>

            {/* Bottom overlays (desktop) */}
            <div className="hidden lg:block z-100 absolute left-12 top-66">
              <div
                className="flex items-center gap-3 rounded-xl backdrop-blur-sm shadow-md px-4 py-3"
                style={{
                  background:
                    "linear-gradient(256.23deg, #FFFFFF 46.69%, #FFE95C 190.21%, rgba(227, 199, 75, 0.5) 219.21%)",
                }}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-700 text-amber-100">
                  <BellIcon className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-semibold text-gray-900">
                    5 optimization opportunities located
                  </div>
                  <div className="flex items-center text-[11px] text-yellow-400/40 mt-1">
                    <SparklesIcon className="w-3 h-3 mr-1 " />
                    Optimize for campaign goal
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block z-100 absolute right-24 bottom-50">
              <div
                className="rounded-xl backdrop-blur-sm shadow-md px-4 py-3 text-left"
                style={{
                  background:
                    "linear-gradient(256.23deg, #FFFFFF 46.69%, #FFE95C 190.21%, rgba(227, 199, 75, 0.5) 219.21%)",
                }}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="text-xs font-semibold text-gray-900">
                    Scheduled Campaign
                  </div>
                  <span className="rounded-full bg-green-100 px-2 py-1 text-[10px] font-semibold text-green-700">
                    Scheduled
                  </span>
                </div>
                <div className="mt-2 text-[11px] text-[#AD9D37]">
                  Budget : ₦300,000 · 12-09-2025 by 8:00pm
                </div>
              </div>
            </div>

            {/* Floating platform pills (desktop) */}
            {platforms.map((p) => (
              <div
                key={p.label}
                className={`hidden md:flex absolute ${p.className} items-center gap-2 bg-gradient-to-r from-amber-200/40 to-white/70 backdrop-blur-sm rounded-full shadow-md px-3 py-2 text-xs text-gray-800 whitespace-nowrap`}
              >
                <img src={p.icon} alt="" className="w-4 h-4" />
                <span>{p.label}</span>
              </div>
            ))}

            {/* Floating platform pills (mobile) */}
            {platformsMobile.map((p) => (
              <div
                key={`m-${p.label}`}
                className={`md:hidden absolute ${p.className} flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm shadow-md px-3 py-1.5 text-[11px] font-semibold text-gray-900 whitespace-nowrap`}
              >
                <img src={p.icon} alt="" className="w-3.5 h-3.5" />
                <span>{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
