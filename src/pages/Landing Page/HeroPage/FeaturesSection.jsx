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
    <section id="features" className="relative py-12 sm:py-16 md:py-20">
      <div
        className="
          pointer-events-none
          absolute
          left-[400px]
          bottom-[140px]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#ffd43a]
          opacity-[0.85]
          blur-[160px]
        "
      />
      <div className="w-full">
        {/* Heading */}
        <div className="mb-10 sm:mb-12 md:mb-16 relative">
          <div className="relative mx-auto w-full max-w-[520px] px-4">
            {/* Floating squares */}
            <div className="pointer-events-none z-20 absolute -left-1 top-6 h-10 w-10 rounded-lg bg-[#FFE95C] shadow-[0_10px_22px_rgba(255,233,92,0.25)]" />
            <div className="pointer-events-none absolute z-20 -right-1 top-10 h-9 w-9 rounded-lg bg-[#FFE95C]/35" />
            <div className="pointer-events-none absolute Z-20 left-1 -bottom-2 h-5 w-5 rounded bg-white shadow-sm" />

            {/* Rings + pill (rings auto-fit to pill height) */}
            <div className="relative">
              {/* Capsule rings */}
              <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute inset-0 rounded-[999px] border border-amber-200/55" />
                <div className="absolute -inset-[10px] rounded-[999px] border border-amber-200/35" />
                <div className="absolute -inset-[22px] rounded-[999px] border border-amber-200/25" />
                <div className="absolute -inset-[36px] rounded-[999px] border border-amber-200/18" />
              </div>

              {/* Pill backdrop with content */}
              <div
                className="relative mx-auto flex flex-col items-center justify-center rounded-[999px] backdrop-blur-[2px] px-6 py-6 sm:py-10"
                style={{
                  background:
                    "linear-gradient(256.23deg, #FFFFFF 46.69%, rgba(255, 233, 92, 0.25) 219.23%)",
                }}
              >
                <div className="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-1.5 text-xs font-medium text-gray-700">
                  Our Features
                </div>
                <h2 className="mt-4 text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
                  Here's what <span className="font-bold">Growdex</span> gives
                  you
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[200px] lg:auto-rows-[240px]">
          {/* Feature 1 */}
          <div
            className="relative rounded-3xl border border-gray-100 p-6 md:p-3 overflow-hidden flex items-end min-h-[220px] md:min-h-0"
            style={{ background: featureCardBg }}
          >
            <p className="relative z-10 text-base md:text-base font-semibold text-white leading-snug mb-2">
              AI-powered
              <br />
              performance insights
            </p>
            <img
              src={Feature1}
              alt="AI-powered performance insights"
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-[180px] md:w-[230px] max-w-[55%] object-contain"
            />
          </div>

          {/* Feature 2 (spans 2 columns) */}
          <div
            className="relative rounded-3xl border border-gray-100 p-6 md:p-3 overflow-hidden md:col-span-2 flex items-end min-h-[220px] md:min-h-0"
            style={{ background: featureCardBg }}
          >
            <p className="relative z-10 text-base md:text-base font-semibold text-white leading-snug max-w-[240px] mb-2">
              Built for individuals,
              <br />
              teams, and agencies
            </p>
            <img
              src={Feature2}
              alt="Built for individuals, teams, and agencies"
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-[280px] md:w-[420px] max-w-[60%] md:max-w-[72%] object-contain"
            />
          </div>

          {/* Feature 3 */}
          <div
            className="relative rounded-3xl border border-gray-100 p-6 md:p-3 overflow-hidden flex justify-start items-end min-h-[220px] md:min-h-0 md:justify-end"
            style={{ background: featureCardBg }}
          >
            <p className="text-base md:text-base font-bold text-white leading-snug mb-2">
              Unified ad
              <br />
              management
              <br />
              across platforms
            </p>
            <img
              src={Feature3}
              alt="Unified ad management across platforms"
              className="pointer-events-none absolute right-0 md:left-0 md:right-auto top-1/2 md:top-40 -translate-y-1/2 h-[180px] md:h-[230px] w-auto max-w-[45%] md:max-w-[40%] object-contain"
            />
          </div>

          {/* Feature 4 */}
          <div
            className="relative rounded-3xl border border-gray-100 p-6 md:p-3 overflow-hidden min-h-[220px] md:min-h-0 flex items-start"
            style={{ background: featureCardBg }}
          >
            <p className="text-base md:text-base font-bold text-white leading-snug max-w-[240px] pt-2">
              Campaign-level
              <br />
              optimization suggestions
            </p>
            <img
              src={Feature4}
              alt="Campaign-level optimization suggestions"
              className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 md:-translate-x-[42%] md:-bottom-10 h-[160px] md:h-[230px] w-auto max-w-[60%] md:max-w-[55%] object-contain"
            />
          </div>

          {/* Feature 5 */}
          <div
            className="relative rounded-3xl border border-gray-100 p-6 md:p-3 overflow-hidden min-h-[220px] md:min-h-0 flex items-start"
            style={{ background: featureCardBg }}
          >
            <p className="text-base md:text-base font-bold text-white leading-snug max-w-[240px] pt-2">
              Centralized analytics
              <br />
              and reporting
            </p>
            <img
              src={Feature5}
              alt="Centralized analytics and reporting"
              className="pointer-events-none absolute right-0 bottom-0 md:-bottom-8 h-[180px] md:h-[240px] w-auto max-w-[65%] md:max-w-[70%] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
