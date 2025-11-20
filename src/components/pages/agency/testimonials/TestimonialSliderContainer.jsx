import { useState } from "react";
import { testimonials } from "../../../../data/testimonials";
import TestimonialCard from "./TestimonialCard";
import Tile from "./Tile";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

export default function TestimonialSliderContainer() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next");

  const next = () => {
    if (animating) return;
    setDirection("next");
    setAnimating(true);

    setTimeout(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
      setAnimating(false);
    }, 600);
  };

  const prev = () => {
    if (animating) return;
    setDirection("prev");
    setAnimating(true);

    setTimeout(() => {
      setIndex((prev) =>
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
      setAnimating(false);
    }, 600);
  };

  return (
    <div className="w-full h-auto flex flex-col gap-4 md:flex-row md:justify-between md:items-center relative">

      {/* LEFT STATIC PANEL */}
      <div className="flex flex-col gap-6">
        <div className="bg-[linear-gradient(to_right,#FFF8CE,#FFE95C00_30%)] p-10 rounded-2xl min-w-[200px]">
          <p className="tracking-wide text-sm text-[#8E8E8E] mb-2">TESTIMONIAL</p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-7xl tracking-tight">
            What <br /> Our Clients <br /> Say
          </h2>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex gap-6 text-3xl">
            <ArrowLeftCircle onClick={prev} size={28} className="cursor-pointer"/>
            <ArrowRightCircle onClick={next} size={28} className="cursor-pointer"/>
        </div>
      </div>

      {/* VERTICAL LINE */}
      <div className="w-full md:w-0 h-[1px] md:h-[375px] border border-gray-100 md:mx-4"/>

      {/* CENTER EXPANDED CARD (ANIMATED) */}
      <div className="relative flex-1 flex flex-col md:justify-center">
        <div
          className={`
            transition-all duration-700
            ${animating && direction === "next" ? "opacity-0 -translate-x-10" : ""}
            ${animating && direction === "prev" ? "opacity-0 translate-x-10" : ""}
            ${!animating ? "opacity-100 translate-x-0" : ""}
          `}
        >
          <TestimonialCard text={testimonials[index].text} />
          <div className="mt-6 flex gap-2 items-center">
            <div className="w-4 h-4 rounded-full bg-gray-300"></div>
            <p className="tracking-tight font-gilroy-light">{testimonials[index].person}</p>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden gap-6 justify-end text-3xl mt-1">
            <ArrowLeftCircle onClick={prev} size={28} className="cursor-pointer"/>
            <ArrowRightCircle onClick={next} size={28} className="cursor-pointer"/>
        </div>
      </div>

      {/* RIGHT TILE STACK */}
      <div className="hidden md:flex items-center gap-6">
        {testimonials.map((t, i) => (
          <Tile key={t.id} active={i === index} />
        ))}
      </div>
    </div>
  );
}
