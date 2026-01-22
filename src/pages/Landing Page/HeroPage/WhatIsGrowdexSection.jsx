import React from "react";
import { Sparkles } from "lucide-react";

import OptimizeCampaignImg from "../../../assets/optimize-campaign2.png";
import CampaignBudgetImg from "../../../assets/campaign-budget.png";

export default function WhatIsGrowdexSection({
  campaignBudgetsImgSrc = CampaignBudgetImg,
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left group */}
          <div className="flex gap-6">
            <div
              className="relative flex-1 overflow-hidden rounded-2xl p-6 min-h-[320px]"
              style={{
                background:
                  "linear-gradient(256.23deg, #FFFFFF 46.69%, #FFE95C 190.21%, rgba(227, 199, 75, 0.5) 219.21%)",
              }}
            >
              <div className=" text-amber-400">
                <Sparkles className="h-4 w-4" />
              </div>

              <div className="pt-6">
                <div className="text-sm font-semibold text-gray-900">
                  What is Growdex?
                </div>
                <p className="mt-3 max-w-[260px] text-xs leading-relaxed text-gray-700">
                  Growdex is an AI-powered
                  <br />
                  growth platform that
                  <br />
                  unifies ad management
                  <br />
                  across platforms.
                </p>
              </div>

              <div className="w-[320px] absolute right-0 bottom-0 shrink-0">
                <img
                  src={OptimizeCampaignImg}
                  alt="Optimize your campaign"
                  className="h-full w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right group */}
          <div className="relative overflow-hidden rounded-2xl bg-[#332C00] p-6 min-h-[320px]">
            <div className="pt-6 flex flex-col sm:gap-20">
              <h2 className="text-sm font-semibold text-gray-100">
                Why Growdex?
              </h2>
              <p className="mt-3 max-w-[260px] text-xs leading-relaxed text-gray-400">
                From campaign creation
                <br />
                and budgeting to
                <br />
                performance tracking and
                <br />
                optimization, Growdex gives
                <br />
                you a single, simple
                <br />
                interface to understand and
                <br />
                improve your ads.
              </p>
            </div>

            <div className="absolute right-0 bottom-0 w-[320px] shrink-0">
              {campaignBudgetsImgSrc ? (
                <img
                  src={campaignBudgetsImgSrc}
                  alt="Set Campaign Budgets"
                  className="h-full w-full rounded-2xl object-cover"
                />
              ) : (
                <div className="aspect-[16/10] w-full rounded-2xl bg-gray-100" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
