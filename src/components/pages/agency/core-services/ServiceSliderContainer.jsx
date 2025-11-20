import { useState, useEffect } from "react";
import { agencyServices } from "../../../../data/services";
import ServiceSlider from "./ServiceSlider";
import useSwipe from "../../../hooks/useSwipe";

const DURATION = 3000;

export default function ServiceSliderContainer() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [auto, setAuto] = useState(true);
  const [direction, setDirection] = useState(null);

  const next = () => {
    setDirection("left");        // content slides left (new slide comes from right)
    setIndex((prev) => (prev + 1) % agencyServices.length);
  }

  const prev = () => {
    setDirection("right");       // content slides right (new slide comes from left)
    setIndex((prev) =>
      prev === 0 ? agencyServices.length - 1 : prev - 1
    );
  };

  const swipeHandlers = useSwipe(
    () => { setAuto(false); next(); },
    () => { setAuto(false); prev(); }
  );

  useEffect(() => {
    if (!auto) return; // pause when dragging

    setAnimate(true);
    const timer = setTimeout(next, DURATION);

    return () => clearTimeout(timer);
  }, [index, auto]);

  const goTo = (i) => {
    if (i > index) setDirection("left");
    if (i < index) setDirection("right");

    setIndex(i);
    setAuto(false);
    setAnimate(false);
    setTimeout(() => setAnimate(true), 20);
  };

  return (
    <div className="w-full space-y-12 overflow-hidden">
      {/* ------------------- TOP NAV BAR ------------------- */}
      <div className="flex items-center gap-6 overflow-x-auto">

        {agencyServices.map((service, i) => {
          const active = i === index;

          return (
            <div
              key={service.id}
              className="relative w-full cursor-pointer select-none"
              onClick={() => goTo(i)}
            >
              {active ? (
                <div className="flex items-start gap-2 overflow-x-auto">
                    <div className="relative w-full md:w-64">
                        {/* badge */}
                        <div className="absolute -top-6 md:-top-12 left-0 w-4 h-4 md:w-10 md:h-10 bg-yellow-300 rounded-full flex items-center justify-center max-sm:text-xs font-normal md:font-bold text-black shadow-md z-10">
                            {i + 1}
                        </div>
                        {/* progress bar for active slide */}
                        <div className="relative w-24 md:w-52 lg:w-64 h-6 bg-yellow-400 rounded-full overflow-hidden">
                            <div
                                className={`h-full bg-yellow-300 ${
                                animate ? "animate-progress" : "w-0"
                                }`}
                            />
                        </div>
                    </div>
                    <span className="max-sm:hidden text-gray-300 whitespace-nowrap">
                      {service.title}
                    </span>
                </div>
              ) : (
                <div className="w-8 md:w-28 lg:w-32 h-6 bg-gray-300 rounded-full opacity-60" />
              )}
            </div>
          );
        })}
      </div>

      {/* ------------------- SLIDE CONTENT ------------------- */}
      {/* --- TOUCH/DRAG AREA --- */}
      <div
        {...swipeHandlers}
        className="relative overflow-hidden touch-pan-y w-full"   // prevents scroll conflict
      >
        <div
          key={index} // forces animation on slide change
          className={`
            transition-transform duration-700 ease-[cubic-bezier(.4,0,.2,1)]
            delay-100
            ${direction === "left" ? "translate-x-0" : ""}
            ${direction === "right" ? "translate-x-0" : ""}
          `}
          style={{
            transform:
              direction === "left"
                ? "translateX(0)"            // sliding in normally from left
                : direction === "right"
                ? "translateX(0)"            // sliding in normally from right
                : "none",
            animation: direction
              ? direction === "left"
                ? "fadeInFromRight 0.7s ease forwards"
                : "fadeInFromLeft 0.7s ease forwards"
              : "none",
          }}
        >
          <ServiceSlider {...agencyServices[index]} />
        </div>
      </div>
    </div>
  );
}
