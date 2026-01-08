import Dashboard1 from "../../../assets/Dashboard Overview (2).png";
import Dashboard from "../../../assets/Frame.png";
import Rectangle from "../../../assets/rectangle.png";
import Dashboard2 from "../../../assets/dashboard-preview.png";

import GoogleIcon from "../../../assets/devicon_google.png";
import InstagramIcon from "../../../assets/mingcute_instagram-fill.png";
import FacebookIcon from "../../../assets/logos_facebook.png";
import TwitterIcon from "../../../assets/prime_twitter.png";
import { BellIcon, SparkleIcon, SparklesIcon } from "lucide-react";

export default function HeroSection() {
  const platforms = [
    { label: "Google Ads", icon: GoogleIcon, className: "-left-6 -top-44" },
    {
      label: "Instagram Ads",
      icon: InstagramIcon,
      className: "-left-24 -top-24",
    },
    {
      label: "Facebook Ads",
      icon: FacebookIcon,
      className: "-right-10 -top-44",
    },
    { label: "Twitter Ads", icon: TwitterIcon, className: "-right-24 -top-24" },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-6 pt-20 pb-20">
      {/* Dotted background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_#f3f3f3_1px,_transparent_1px)] [background-size:40px_40px] pointer-events-none" />

      {/* Faint curves - Left side */}
      <div className="absolute pointer-events-none w-[40%] top-[16%] -left-[7%] opacity-40">
        <img src={Rectangle} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute pointer-events-none w-[30%] top-[24%] -left-[3.5%] opacity-40">
        <img src={Rectangle} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute pointer-events-none w-[15%] top-[32%] left-[3%] ">
        <img src={Rectangle} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Faint curves - Right side (mirrored) */}
      <div className="absolute pointer-events-none w-[40%] top-[16%] -right-[7%] opacity-40">
        <img
          src={Rectangle}
          alt=""
          className="w-full h-full object-cover scale-x-[-1]"
        />
      </div>
      <div className="absolute pointer-events-none w-[30%] top-[24%] -right-[3.5%] opacity-40">
        <img
          src={Rectangle}
          alt=""
          className="w-full h-full object-cover scale-x-[-1]"
        />
      </div>
      <div className="absolute pointer-events-none w-[15%] top-[32%] right-[3%] ">
        <img
          src={Rectangle}
          alt=""
          className="w-full h-full object-cover scale-x-[-1]"
        />
      </div>

      {/* Bottom white fade (transparent -> white) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-48 bg-gradient-to-b from-white/0 to-white" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          All your ad platforms.
          <br />
          <span className="font-extrabold">One unified dashboard.</span>
        </h1>

        <p className="mt-5 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Plan, launch, manage, and optimize ads across platforms from one
          place, powered by AI that brings clarity to your growth.
        </p>

        <div className="mt-8 flex justify-center">
          <a href="#waitlist-banner" className="inline-flex">
            <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium">
              Join the waitlist
            </button>
          </a>
        </div>

        {/* Dashboard / mockup */}
        <div className="relative mt-14 mx-auto max-w-5xl">
          <div className="relative">
            <img
              src={Dashboard2}
              alt="Dashboard Preview"
              className="w-full rounded-2xl shadow-2xl"
            />

            {/* Bottom overlays (desktop) */}
            <div className="hidden md:block absolute -left-20 bottom-24">
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

            <div className="hidden md:block absolute -right-30 bottom-3">
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
          </div>
        </div>
      </div>
    </section>
  );
}
