import React from "react";
import ScreenPreview from "../../../assets/screen previews.png";

export default function DevicePreviewSection() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-14 md:py-20">
      <div className="w-full">
        <div
          className="relative overflow-visible rounded-2xl sm:rounded-3xl px-6 pt-7 pb-0 sm:p-8 md:px-12 md:pt-12 md:pb-12"
          style={{
            background:
              "linear-gradient(135deg, #0D0B00 0%, #2B2600 38%, #6A5B00 100%)",
          }}
        >
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            {/* Left side - Text content */}
            <div className="max-w-xl">
              <h2 className="text-xl leading-[1.12] sm:text-3xl md:text-5xl md:leading-[1.08] font-semibold text-[#FFE95C]">
                <span className="md:hidden">
                  Most ad tools show you numbers.{" "}
                  <span className="font-extrabold">
                    Growdex shows you
                    <br />
                    what to do with them.
                  </span>
                </span>
                <span className="hidden md:inline">
                  Most ad tools show you numbers.{" "}
                  <span className="font-extrabold">
                    Growdex shows you what to do with them.
                  </span>
                </span>
              </h2>

              <p className="mt-5 text-[13px] sm:text-sm text-white/75 leading-relaxed max-w-md">
                We’re building Growdex to remove complexity, reduce wasted
                spend, and make growth clearer at every stage.
              </p>

              <a href="#waitlist-banner" className="inline-flex mt-7">
                <button className="!bg-black !text-[#FFE95C] px-6 py-3 rounded-xl text-sm font-semibold shadow-[0_14px_30px_rgba(0,0,0,0.18)] hover:bg-black/90 transition-colors">
                  Join the waitlist
                </button>
              </a>
            </div>

            {/* Right side - Device mockup */}
            <div className="relative flex justify-center md:block md:min-h-[420px] lg:min-h-[460px]">
              <div className="relative mx-auto w-full max-w-[560px] md:max-w-none">
                <img
                  src={ScreenPreview}
                  alt="Growdex dashboard on desktop and mobile"
                  className="pointer-events-none select-none w-[108%] max-w-none mx-auto -mb-3 h-auto object-contain md:absolute md:-right-[64px] md:top-26 md:bottom-auto md:w-[850px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
