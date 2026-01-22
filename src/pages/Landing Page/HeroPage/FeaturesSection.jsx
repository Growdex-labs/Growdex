import React from "react";
import Feature1 from "../../../assets/feature1.png";
import Feature2 from "../../../assets/feature2.png";
import Feature3 from "../../../assets/feature3.png";
import Feature4 from "../../../assets/feature4.png";
import Feature5 from "../../../assets/feature5.png";

export default function FeaturesSection() {
  return (
    <section className="relative bg-gradient-to-b from-amber-50/30 to-white py-20 overflow-hidden">
      {/* Floating decorative squares */}
      <div className="absolute top-20 left-[35%] w-8 h-8 bg-gray-200/40 rounded-lg" />
      <div className="absolute top-10 left-[35%] w-6 h-6 bg-gray-200/30 rounded-md -rotate-6" />
      <div className="absolute top-32 left-[34%] w-4 h-4 bg-gray-200/20 rounded" />
      <div className="absolute top-16 right-[35%] w-10 h-10 bg-gray-200/30 rounded-lg -rotate-12" />
      <div className="absolute top-8 right-[34%] w-5 h-5 bg-gray-200/25 rounded-md rotate-45" />

      {/* Radial gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-radial from-amber-100/40 via-amber-50/20 to-transparent rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
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
          <h2 className="relative z-10 w-1/2 mx-auto text-3xl font-semibold text-gray-900 leading-tight">
            Here's what <span className="font-bold">Growdex</span> <br /> gives
            you
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[220px] gap-2">
          {/* Feature 1 - Tall left */}
          <div
            className="md:row-span-1 rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden"
            style={{
              background:
                "linear-gradient(256.23deg, #FFFFFF 46.69%, #FFE95C 190.21%, rgba(227, 199, 75, 0.5) 219.21%)",
            }}
          >
            <img
              src={Feature1}
              alt="AI-powered performance"
              className="absolute inset-0 m-auto w-[85%] h-[85%] object-contain -bottom-10 -right-50"
            />
            <p className="relative text-sm font-semibold text-gray-800">
              AI-powered
              <br />
              performance insights
            </p>
          </div>

          {/* Feature 2 - Wide top right */}
          <div
            className="md:col-span-2 rounded-3xl flex items-center relative overflow-hidden"
            style={{
              background:
                "linear-gradient(256.23deg, #FFFFFF 46.69%, #FFE95C 190.21%, rgba(227, 199, 75, 0.5) 219.21%)",
            }}
          >
            <p className="text-sm font-semibold text-gray-800 max-w-[200px] pl-4 mt-auto mb-2">
              Built for individuals,
              <br />
              teams, and agencies
            </p>
            <img
              src={Feature2}
              alt="Teams and agencies"
              className="absolute -right-4 top-1/2 -translate-y-1/2 w-[75%] h-[85%] object-contain"
            />
          </div>

          {/* Feature 3 - Tall bottom left */}
          <div
            className="md:row-span-1 rounded-3xl bg-amber-50 p-2 flex flex-col justify-end relative overflow-hidden"
            style={{
              background:
                "linear-gradient(256.23deg, #FFFFFF 46.69%, #FFE95C 190.21%, rgba(227, 199, 75, 0.5) 219.21%)",
            }}
          >
            <img
              src={Feature5}
              alt="Unified ad management"
              className="absolute inset-0 -right-35 -bottom-18 m-auto w-[75%] h-[75%] object-contain"
            />
            <p className="relative text-sm font-semibold text-gray-800">
              Unified ad
              <br />
              management
              <br />
              across platforms
            </p>
          </div>

          {/* Feature 4 - Middle bottom */}
          <div
            className="rounded-3xl p-2 flex flex-col justify-end relative overflow-hidden"
            style={{
              background:
                "linear-gradient(256.23deg, #FFFFFF 46.69%, #FFE95C 190.21%, rgba(227, 199, 75, 0.5) 219.21%)",
            }}
          >
            <img
              src={Feature3}
              alt="Optimization suggestions"
              className="absolute -right-12 -bottom-1 w-[65%] h-[65%] object-contain"
            />
            <p className="relative text-sm font-semibold text-gray-800">
              Campaign-level
              <br />
              optimization suggestions
            </p>
          </div>

          {/* Feature 5 - Bottom right */}
          <div
            className="rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden"
            style={{
              background:
                "linear-gradient(256.23deg, #FFFFFF 46.69%, #FFE95C 190.21%, rgba(227, 199, 75, 0.5) 219.21%)",
            }}
          >
            <img
              src={Feature4}
              alt="Analytics and reporting"
              className="absolute inset-0 -right-40 -bottom-18 m-auto w-[75%] h-[75%] object-contain"
            />
            <p className="relative text-sm font-semibold text-gray-800">
              Centralized analytics
              <br />
              and reporting
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
