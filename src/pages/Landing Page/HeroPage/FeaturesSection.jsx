import React from "react";
import Feature1 from "../../../assets/feature1.png";
import Feature2 from "../../../assets/feature2.png";
import Feature3 from "../../../assets/feature3.png";
import Feature4 from "../../../assets/feature4.png";
import Feature5 from "../../../assets/feature5.png";

export default function FeaturesSection() {
  const featureCardBg =
    "linear-gradient(252.96deg, #332C00 75.68%, #998400 102.22%)";

  return (
    <section className="relative bg-amber-50/30 py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="text-center mb-16 relative">
          {/* Oval rings around the heading */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[160px] pointer-events-none">
            <div className="absolute inset-0 rounded-full border-2 border-amber-200/40" />
            <div className="absolute inset-0 rounded-full border-2 border-amber-200/30 scale-110" />
            <div className="absolute inset-0 rounded-full border-2 border-amber-200/20 scale-125" />
          </div>

          <div className="relative z-10 inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-1.5 text-xs font-medium text-gray-700 mb-4">
            Our Features
          </div>
          <h2 className="relative z-10 mx-auto max-w-xl text-3xl font-semibold text-gray-900 leading-tight">
            Here's what <span className="font-bold">Growdex</span> <br /> gives
            you
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[240px] gap-4">
          {/* Feature 1 */}
          <div
            className="relative rounded-3xl border border-gray-100 p-3 overflow-hidden flex items-center"
            style={{ background: featureCardBg }}
          >
            <p className="relative z-10 text-sm md:text-base font-semibold text-white leading-snug mt-auto">
              AI-powered
              <br />
              performance insights
            </p>
            <img
              src={Feature1}
              alt="AI-powered performance insights"
              className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 w-[200px] md:w-[230px] max-w-[60%] object-contain"
            />
          </div>

          {/* Feature 2 (spans 2 columns) */}
          <div
            className="relative rounded-3xl border border-gray-100 p-3 overflow-hidden md:col-span-2 flex items-end"
            style={{ background: featureCardBg }}
          >
            <p className="relative z-10 text-sm md:text-base font-semibold text-white leading-snug max-w-[240px]">
              Built for individuals,
              <br />
              teams, and agencies
            </p>
            <img
              src={Feature2}
              alt="Built for individuals, teams, and agencies"
              className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 w-[420px] max-w-[72%] object-contain"
            />
          </div>

          {/* Feature 3 */}
          <div
            className="relative rounded-3xl border border-gray-100 p-3 overflow-hidden flex justify-end items-end"
            style={{ background: featureCardBg }}
          >
            <p className="text-sm  md:text-base font-bold text-white leading-snug ">
              Unified ad
              <br />
              management
              <br />
              across platforms
            </p>
            <img
              src={Feature3}
              alt="Unified ad management across platforms"
              className="pointer-events-none absolute left-0 top-40 -translate-y-1/2 h-[230px] w-auto max-w-[40%] object-contain"
            />
          </div>

          {/* Feature 4 */}
          <div
            className="relative rounded-3xl border border-gray-100 p-3 overflow-hidden"
            style={{ background: featureCardBg }}
          >
            <p className="text-sm md:text-base font-bold text-white leading-snug max-w-[240px]">
              Campaign-level
              <br />
              optimization suggestions
            </p>
            <img
              src={Feature4}
              alt="Campaign-level optimization suggestions"
              className="pointer-events-none absolute left-1/2 -bottom-10 -translate-x-[42%] h-[230px] w-auto max-w-[55%] object-contain"
            />
          </div>

          {/* Feature 5 */}
          <div
            className="relative rounded-3xl border border-gray-100 p-3 overflow-hidden"
            style={{ background: featureCardBg }}
          >
            <p className="text-sm md:text-base font-bold text-white leading-snug max-w-[240px]">
              Centralized analytics
              <br />
              and reporting
            </p>
            <img
              src={Feature5}
              alt="Centralized analytics and reporting"
              className="pointer-events-none absolute right-0 -bottom-8 h-[240px] w-auto max-w-[70%] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
