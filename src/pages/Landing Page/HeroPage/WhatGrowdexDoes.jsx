import React, { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

import OptimizeCampaignImg from "../../../assets/optimize-campaign2.png";
import CampaignBudgetImg from "../../../assets/campaign-budget.png";

export default function WhatGrowdexDoes() {
  const slides = useMemo(
    () => [
      {
        key: "what",
        title: "What is Growdex?",
        body: "Growdex is an AI-powered growth platform that unifies ad management across platforms.",
        variant: "light",
      },
      {
        key: "why",
        title: "Why Growdex?",
        body: "From campaign creation and budgeting to performance tracking and optimization, Growdex gives you a single, simple interface to understand and improve your ads.",
        variant: "dark",
      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const goPrev = () =>
    setActiveIndex((i) => (i - 1 + slides.length) % slides.length);
  const goNext = () => setActiveIndex((i) => (i + 1) % slides.length);

  const renderMobileCard = (slide) => {
    if (slide.variant === "light") {
      return (
        <div className="relative overflow-hidden rounded-2xl bg-[#FFF9D8] p-6 min-h-[220px]">
          <div className="pt-2">
            <div className="text-sm font-semibold text-gray-900">
              {slide.title}
            </div>
            <p className="mt-3 max-w-[240px] text-xs leading-relaxed text-gray-700">
              {slide.body}
            </p>
          </div>

          <div className="absolute right-[-46px] bottom-[-10px] w-[230px]">
            <img
              src={OptimizeCampaignImg}
              alt="Optimize your campaign"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      );
    }

    return (
      <div className="relative overflow-hidden rounded-2xl bg-[#332C00] p-6 min-h-[220px]">
        <div className="pt-2">
          <div className="text-sm font-semibold text-gray-100">
            {slide.title}
          </div>
          <p className="mt-3 max-w-[240px] text-xs leading-relaxed text-gray-300">
            {slide.body}
          </p>
        </div>

        <div className="absolute right-[-46px] bottom-[-10px] w-[240px]">
          <img
            src={CampaignBudgetImg}
            alt="Set Campaign Budgets"
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    );
  };

  return (
    <section id="who-we-are" className="relative overflow-hidden bg-white">
      {/* Grid background with sparse diamonds (matches Hero) */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="wgdGrid"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path d="M48 0H0V48" fill="none" stroke="#EEF2F7" strokeWidth="1" />
          </pattern>

          {/* Diamonds: 1 diamond every 4 intersections (48px * 4 = 192px) */}
          <pattern
            id="wgdDiamonds"
            width="192"
            height="192"
            patternUnits="userSpaceOnUse"
          >
            <polygon points="48,40 56,48 48,56 40,48" fill="#D7DEE8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wgdGrid)" opacity="0.55" />
        <rect
          width="100%"
          height="100%"
          fill="url(#wgdDiamonds)"
          opacity="0.28"
        />
      </svg>

      <div className="relative w-full py-10 sm:py-12 md:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-[560px] md:max-w-none">
          <div className="px-0 md:px-0">
            <div className="flex flex-col md:flex-row sm:items-center">
              <div className="flex-1">
                <div className="inline-flex items-center rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-[#AD9D37]">
                  What Growdex does
                </div>

                <p className="hidden sm:block mt-4 text-sm leading-relaxed text-gray-700 max-w-[26rem]">
                  Marketing today is fragmented. Multiple platforms. Multiple
                  dashboards. Confusing data.
                </p>
              </div>
              <h2 className="mt-5 flex-1 text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-600">
                Growdex brings everything together so you can focus on
                decisions, not tools.
              </h2>
              <p className="sm:hidden mt-4 text-sm leading-relaxed text-gray-700 max-w-[26rem]">
                Marketing today is fragmented. Multiple platforms. Multiple
                dashboards. Confusing data.
              </p>
            </div>

            {/* Controls row (mobile) */}
            <div className="mt-6 flex items-center justify-between md:hidden">
              <div className="flex items-center gap-2">
                <div
                  className={`h-1 w-12 rounded-full transition-colors duration-300 ${
                    activeIndex === 0 ? "bg-[#FFE95C]" : "bg-gray-200"
                  }`}
                />
                <div
                  className={`h-1 w-16 rounded-full transition-colors duration-300 ${
                    activeIndex === 1 ? "bg-[#FFE95C]" : "bg-gray-200"
                  }`}
                />
              </div>

              <div className="flex items-center gap-2 text-gray-700">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile carousel cards */}
          <div className="mt-6 md:hidden">
            <div className="overflow-hidden">
              <div
                className="flex will-change-transform transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {slides.map((slide) => (
                  <div key={slide.key} className="w-full flex-shrink-0">
                    {renderMobileCard(slide)}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop layout (keep both cards) */}
          <div className="hidden md:block mt-10">
            <div className="grid gap-6 md:grid-cols-2">
              <div
                className="relative overflow-hidden rounded-2xl p-6 min-h-[320px]"
                style={{
                  background:
                    "linear-gradient(256.23deg, #FFFFFF 46.69%, #FFE95C 190.21%, rgba(227, 199, 75, 0.5) 219.21%)",
                }}
              >
                <div className="text-amber-400">
                  <Sparkles className="h-4 w-4" />
                </div>

                <div className="pt-4">
                  <div className="text-base font-semibold text-gray-900">
                    What is Growdex?
                  </div>
                  <p className="mt-3 max-w-[260px] text-sm leading-relaxed text-gray-700">
                    Growdex is an AI-powered growth platform that unifies ad
                    management across platforms.
                  </p>
                </div>

                <div className="w-[280px] absolute right-0 bottom-0 shrink-0">
                  <img
                    src={OptimizeCampaignImg}
                    alt="Optimize your campaign"
                    className="h-full w-full rounded-2xl object-cover"
                  />
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl bg-[#332C00] p-6 min-h-[320px]">
                <div className="pt-4 flex flex-col gap-20">
                  <h2 className="text-base font-semibold text-gray-100">
                    Why Growdex?
                  </h2>
                  <p className="max-w-[260px] text-sm leading-relaxed text-gray-400">
                    From campaign creation and budgeting to performance tracking
                    and optimization, Growdex gives you a single, simple
                    interface to understand and improve your ads.
                  </p>
                </div>

                <div className="absolute right-0 bottom-0 w-[280px] shrink-0">
                  <img
                    src={CampaignBudgetImg}
                    alt="Set Campaign Budgets"
                    className="h-full w-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
