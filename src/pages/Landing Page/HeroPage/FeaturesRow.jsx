import React from "react";
import icon1 from "../../../assets/1.png";
import icon2 from "../../../assets/2.png";
import icon3 from "../../../assets/3.png";
import icon4 from "../../../assets/4.png";

const features = [
  {
    text: "Connect all your",
    highlight: "marketing channels",
    icon: icon1,
  },
  {
    text: "Create and manage campaigns",
    highlight: "in one place",
    icon: icon2,
  },
  {
    text: "Track performance",
    highlight: "across channels",
    icon: icon3,
  },
  {
    text: "Optimize results with",
    highlight: "AI-driven recommendations",
    icon: icon4,
  },
];

export default function FeaturesRow() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              {/* Circle with Icon */}
              <div className="h-12 w-12 shrink-0 flex items-center justify-center">
                <img
                  src={feature.icon}
                  alt={`Feature ${index + 1}`}
                  className="w-12 h-12 object-contain"
                />
              </div>

              <p className="text-sm font-semibold text-gray-900 leading-snug pt-1">
                {feature.text}{" "}
                <span className="text-[#AD9D37]">{feature.highlight}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
