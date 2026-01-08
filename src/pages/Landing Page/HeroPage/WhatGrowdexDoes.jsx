import React from "react";

export default function WhatGrowdexDoes() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(243,243,243,0.5)_25%,rgba(243,243,243,0.5)_26%,transparent_27%,transparent_74%,rgba(243,243,243,0.5)_75%,rgba(243,243,243,0.5)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(243,243,243,0.5)_25%,rgba(243,243,243,0.5)_26%,transparent_27%,transparent_74%,rgba(243,243,243,0.5)_75%,rgba(243,243,243,0.5)_76%,transparent_77%,transparent)] [background-size:90px_90px] pointer-events-none opacity-50" />

      <div className="relative mx-auto max-w-6xl px-6 py-14 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          {/* Left card */}
          <div className="w-full md:w-[320px]">
            <div className="rounded-2xl p-6">
              <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-800">
                What Growdex does
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-800">
                Marketing today is fragmented.
                <br />
                Multiple platforms. Multiple dashboards.
                <br />
                Confusing data.
              </p>
            </div>
          </div>

          {/* Right headline */}
          <div className="relative flex-1 text-center">
            {/* subtle curve line behind text */}
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 hidden w-[820px] -translate-x-1/2 -translate-y-1/2 md:block text-gray-200 opacity-60"
              viewBox="0 0 900 220"
              fill="none"
            >
              <path
                d="M20 170 C 140 40, 300 40, 420 120 S 700 220, 880 70"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>

            <h2 className="relative text-2xl md:text-4xl font-semibold leading-tight text-gray-900">
              Growdex brings everything together
              <br />
              <span className="text-gray-600">
                so you can focus on decisions, not tools.
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
