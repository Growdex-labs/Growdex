import React from "react";
import ScreenPreview from "../../../assets/screen previews.png";

export default function DevicePreviewSection() {
  return (
    <section className="relative bg-amber-50/30 py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
              Most ad tools show you numbers.{" "}
              <span className="font-bold">
                Growdex shows you what to do with them.
              </span>
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed max-w-md">
              Get actionable insights on where to invest, what's
              underperforming, and how to optimize—all powered by AI that learns
              from your campaigns.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
              Learn more
            </button>
          </div>

          {/* Right side - Device mockup */}
          <div className="relative">
            <img
              src={ScreenPreview}
              alt="Growdex dashboard on desktop and mobile"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
