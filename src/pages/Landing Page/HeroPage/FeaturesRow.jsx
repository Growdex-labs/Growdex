import React from "react";

const features = [
  {
    text: "Connect all your",
    highlight: "marketing channels",
  },
  {
    text: "Create and manage campaigns",
    highlight: "in one place",
  },
  {
    text: "Track performance",
    highlight: "across channels",
  },
  {
    text: "Optimize results with",
    highlight: "AI-driven recommendations",
  },
];

export default function FeaturesRow() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              {/* Circle Placeholder */}
              <div className="h-12 w-12 shrink-0 rounded-full bg-gray-200" />

              <p className="text-sm font-semibold text-gray-900 leading-snug pt-1">
                {feature.text}{" "}
                <span className="text-yellow-600">{feature.highlight}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
