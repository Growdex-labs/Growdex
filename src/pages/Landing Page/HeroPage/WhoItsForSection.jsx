import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import wif1 from "../../../assets/wif1.png";
import wif2 from "../../../assets/wif2.png";
import wif3 from "../../../assets/wif3.png";
import wif4 from "../../../assets/wif4.png";
import wif5 from "../../../assets/wif5.png";

const audiences = [
  { title: "Founders and operators", image: wif1 },
  { title: "Marketing teams", image: wif2 },
  { title: "Performance marketers", image: wif3 },
  { title: "Agencies", image: wif4 },
  { title: "Brands and creators\nrunning paid ads", image: wif5 },
];

const CARD_WIDTH = 350;
const GAP = 24;
const STEP = CARD_WIDTH + GAP;

export default function WhoItsForSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () =>
    setActiveIndex((i) => Math.min(i + 1, audiences.length - 1));

  const prev = () => setActiveIndex((i) => Math.max(i - 1, 0));

  return (
    <section className="bg-[#F9FAFB] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-[1.2fr_2fr] gap-16 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-10">
            <span className="inline-flex items-center rounded-full border border-gray-300 px-4 py-1 text-xs text-[#AD9D37] font-semibold">
              Who’s it for?
            </span>

            <p className="text-lg w-[30%] font-semibold text-gray-700">
              {audiences[activeIndex].title}
            </p>

            {/* Progress bars */}
            <div className="flex gap-2 max-w-xs">
              {audiences.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-[3px] flex-1 rounded-full transition-colors ${
                    i === activeIndex ? "bg-yellow-400" : "bg-gray-200"
                  }`}
                />
              ))}
            </div>

            <h2 className="text-4xl font-semibold bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent leading-tight">
              If you run ads,
              <br />
              Growdex is built for you.
            </h2>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            {/* Navigation arrows */}
            <div className="absolute -top-10 right-0 flex gap-2">
              <button
                onClick={prev}
                disabled={activeIndex === 0}
                className="p-2 rounded-full border bg-white text-gray-600 disabled:opacity-40"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                disabled={activeIndex === audiences.length - 1}
                className="p-2 rounded-full border bg-white text-gray-600 disabled:opacity-40"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Carousel */}
            <div className="overflow-hidden max-w-[700px] border-none bg-transparent">
              <div
                className="flex ml-2 gap-6 transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${activeIndex * STEP}px)`,
                }}
              >
                {audiences.map((audience, index) => (
                  <div
                    key={audience.title}
                    className="flex-shrink-0 w-[350px] h-[350px]"
                  >
                    <div
                      className={`h-[350px] rounded-3xl px-2 py-6 flex flex-col justify-between transition-all ${
                        index === activeIndex
                          ? "shadow-sm border border-gray-100"
                          : "opacity-70"
                      }`}
                      style={{
                        background:
                          "linear-gradient(256.23deg, #FFFFFF 46.69%, #FFE95C 190.21%, rgba(227, 199, 75, 0.5) 219.21%)",
                      }}
                    >
                      <div className="flex items-center justify-center flex-1">
                        <img
                          src={audience.image}
                          alt={audience.title}
                          className="max-h-[180px] max-w-full object-contain"
                          draggable="false"
                        />
                      </div>

                      <p className="text-sm font-semibold text-gray-900 whitespace-pre-line text-center">
                        {audience.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
