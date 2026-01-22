import React from "react";
import ScreenPreview from "../../../assets/screen previews.png";

export default function DevicePreviewSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-amber-50/30">
      <div
        className="mx-auto max-w-6xl h-100 p-6 rounded-xl"
        style={{
          background:
            "linear-gradient(101.08deg, #332C00 28.2%, #998400 87.25%)",
        }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center p-4">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-medium text-[#FFE95C] leading-tight">
              Most ad tools show you numbers.{" "}
              <span className="font-bold">
                Growdex shows you what to do with them.
              </span>
            </h2>
            <p className="text-sm text-gray-200 pt-10 leading-relaxed max-w-md">
              We’re building Growdex to remove complexity, reduce wasted spend,
              and make growth clearer at every stage.
            </p>
            <button className="bg-black text-[#FFE95C] px-6 py-3 rounded-lg mt-6 text-xs font-semibold hover:bg-gray-800 transition-colors">
              Join the waitlist
            </button>
          </div>

          {/* Right side - Device mockup */}
          <div className="relative">
            <img
              src={ScreenPreview}
              alt="Growdex dashboard on desktop and mobile"
              className="w-[800px] h-auto absolute -right-26 z-50 -top-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
