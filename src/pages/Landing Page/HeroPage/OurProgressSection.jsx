import React from "react";
import { Coins, TrendingUp, Users } from "lucide-react";

import arrow1 from "../../../assets/arrow 1.png";
import arrow2 from "../../../assets/arrow 2.png";
import arrow3 from "../../../assets/arrow 3.png";
import arrow4 from "../../../assets/arrow 4.png";
import arrow5 from "../../../assets/arrow 5.png";
import arrow6 from "../../../assets/arrow 6.png";

const stats = [
  {
    icon: Coins,
    text: "Built using real campaign\ndata from live clients",
    position: "top-12 left-1/2 -translate-x-1/2",
  },
  {
    icon: Users,
    text: "Community of performance\nmarketers and agencies ready\nto adapt",
    position: "top-[44%] left-6",
  },
  {
    kind: "avatars",
    text: "1,000+ businesses\non the waitlist",
    position: "top-[44%] right-6",
  },
];

export default function OurProgressSection() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Soft top-to-bottom wash (keeps the section light, like Figma) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "linear-gradient(177.63deg, rgba(255, 233, 92, 0.65) 11.93%, rgba(255, 255, 255, 0) 78.21%)",
        }}
      />

      {/* Extra white fade at the bottom to prevent the section reading 'dark' */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-white via-white/80 to-transparent" />

      {/* Soft center glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-amber-200/25 via-amber-100/10 to-transparent blur-2xl" />

      {/* Faint big arrows (absolute) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] brightness-125 saturate-50">
        <img
          src={arrow1}
          alt=""
          className="absolute left-[8%] top-[12%] h-[420px] w-auto select-none"
          draggable={false}
        />
        <img
          src={arrow2}
          alt=""
          className="absolute left-[26%] top-[34%] h-[520px] w-auto select-none"
          draggable={false}
        />
        <img
          src={arrow3}
          alt=""
          className="absolute left-1/2 top-[22%] h-[340px] w-auto -translate-x-1/2 select-none"
          draggable={false}
        />
        <img
          src={arrow4}
          alt=""
          className="absolute right-[28%] top-[34%] h-[300px] w-auto select-none"
          draggable={false}
        />
        <img
          src={arrow5}
          alt=""
          className="absolute right-[8%] top-[12%] h-[260px] w-auto select-none"
          draggable={false}
        />
        <img
          src={arrow6}
          alt=""
          className="absolute right-[18%] top-[22%] h-[320px] w-auto select-none"
          draggable={false}
        />
      </div>

      {/* Arc rings */}
      <div className="pointer-events-none absolute left-1/2 top-[62%] h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-200/40 opacity-35" />
      <div className="pointer-events-none absolute left-1/2 top-[62%] h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-200/30 opacity-35" />
      <div className="pointer-events-none absolute left-1/2 top-[62%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-200/20 opacity-35" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="relative mx-auto flex min-h-[420px] max-w-5xl items-center justify-center">
          {/* Center pill */}
          <div className="rounded-full border border-amber-200/60 bg-amber-50/60 px-10 py-5 text-2xl font-medium text-gray-900 shadow-sm backdrop-blur-[88.1px]">
            Our Progress
          </div>

          {/* Floating stat pills */}
          {stats.map((stat) => (
            <div
              key={stat.text}
              className={`absolute ${stat.position} hidden md:flex items-center gap-3 rounded-full border border-amber-200/50 bg-white/85 px-5 py-3 shadow-sm backdrop-blur-[88.1px]`}
            >
              {stat.kind === "avatars" ? (
                <div className="flex -space-x-2">
                  <div className="h-9 w-9 rounded-full bg-gray-300 border-2 border-white" />
                  <div className="h-9 w-9 rounded-full bg-gray-300 border-2 border-white" />
                  <div className="h-9 w-9 rounded-full bg-gray-300 border-2 border-white" />
                </div>
              ) : (
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100">
                  <stat.icon className="h-4 w-4 text-amber-700" />
                </div>
              )}
              <p className="text-xs font-semibold text-gray-900 leading-snug whitespace-pre-line">
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
