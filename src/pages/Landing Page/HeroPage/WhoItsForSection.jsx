import React, { useState } from "react";
import {
  ChevronsLeft,
  ChevronsRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

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
  { title: "Brands and creators running paid ads", image: wif5 },
];

const DESKTOP_CARD_WIDTH = 350;
const DESKTOP_GAP = 24;
const DESKTOP_STEP = DESKTOP_CARD_WIDTH + DESKTOP_GAP;

export default function WhoItsForSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToIndex = (i) =>
    setActiveIndex(Math.max(0, Math.min(i, audiences.length - 1)));

  return (
    <section className="py-12 sm:py-16 md:py-24 overflow-x-hidden">
      <div className="grid md:grid-cols-[1.2fr_2fr] gap-8 md:gap-16 items-center px-4 md:px-0 max-w-full">
        {/* LEFT */}
        <div className="space-y-6 md:space-y-10 min-w-0">
          <span className="inline-flex rounded-full border px-4 py-1 text-xs font-semibold text-[#AD9D37]">
            Who’s it for?
          </span>

          {/* MOBILE TITLE */}
          <div className="md:hidden flex items-center gap-2 min-w-0">
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <span className="h-4 w-1 bg-yellow-400 rounded-full shrink-0" />
              <p className="text-lg font-semibold truncate">
                {audiences[activeIndex].title}
              </p>
            </div>

            <div className="flex shrink-0">
              <button
                onClick={() => goToIndex(activeIndex - 1)}
                disabled={activeIndex === 0}
                className="p-1 text-yellow-500 disabled:opacity-30"
              >
                <ChevronsLeft size={18} />
              </button>
              <button
                onClick={() => goToIndex(activeIndex + 1)}
                disabled={activeIndex === audiences.length - 1}
                className="p-1 text-yellow-500 disabled:opacity-30"
              >
                <ChevronsRight size={18} />
              </button>
            </div>
          </div>

          {/* DESKTOP TITLE */}
          <div className="hidden md:flex items-center gap-2">
            <span className="h-4 w-1 bg-yellow-400 rounded-full" />
            <p className="text-lg font-semibold text-gray-700">
              {audiences[activeIndex].title}
            </p>
          </div>

          {/* PROGRESS BAR — FIXED */}
          <div className="flex gap-2 w-full overflow-hidden">
            {audiences.map((_, i) => (
              <button
                key={i}
                onClick={() => goToIndex(i)}
                className={`h-[3px] flex-1 rounded-full ${
                  i === activeIndex ? "bg-yellow-400" : "bg-gray-200"
                }`}
              />
            ))}
          </div>

          <h2 className="text-xl sm:text-4xl font-semibold">
            If you run ads,
            <br />
            Growdex is built for you.
          </h2>
        </div>

        {/* RIGHT */}
        <div className="relative min-w-0">
          {/* MOBILE CAROUSEL */}
          <div className="md:hidden overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {audiences.map((a) => (
                <div key={a.title} className="w-full shrink-0 px-4">
                  <div className="w-full rounded-3xl bg-[#FFF9D8]">
                    <div className="flex justify-center p-6">
                      <img
                        src={a.image}
                        alt={a.title}
                        className="max-h-[220px] object-contain"
                      />
                    </div>
                    <p className="pb-6 text-center font-semibold px-4">
                      {a.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DESKTOP CAROUSEL */}
          <div className="hidden md:block overflow-hidden max-w-[700px]">
            <div
              className="flex gap-6 transition-transform duration-500"
              style={{
                transform: `translateX(-${activeIndex * DESKTOP_STEP}px)`,
              }}
            >
              {audiences.map((a, i) => (
                <div key={a.title} className="w-[350px] h-[350px] shrink-0">
                  <div
                    className={`h-full rounded-3xl p-6 flex flex-col ${
                      i === activeIndex ? "" : "opacity-70"
                    }`}
                    style={{
                      background:
                        "linear-gradient(256deg, #FFFFFF 46%, #FFE95C 180%)",
                    }}
                  >
                    <div className="flex-1 flex items-center justify-center">
                      <img
                        src={a.image}
                        alt={a.title}
                        className="max-h-[200px]"
                      />
                    </div>
                    <p className="text-center font-semibold">{a.title}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute -top-10 right-0 hidden md:flex gap-2">
              <button onClick={() => goToIndex(activeIndex - 1)}>
                <ChevronLeft />
              </button>
              <button onClick={() => goToIndex(activeIndex + 1)}>
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
