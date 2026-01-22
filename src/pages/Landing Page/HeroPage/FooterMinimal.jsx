import React from "react";

import logo from "../../../assets/Frame 1686560934.png";

export default function FooterMinimal() {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <img
              src={logo}
              alt="Growdex"
              className="h-10 w-10 object-contain grayscale opacity-70"
              draggable={false}
            />
            <div className="leading-tight">
              <div className="text-xs font-medium text-gray-500">
                Contact us
              </div>
              <a
                href="mailto:info@growdex.ai"
                className="text-2xl font-semibold tracking-tight text-gray-400 hover:text-gray-500"
              >
                info@growdex.ai
              </a>
            </div>
          </div>

          <div className="text-left text-xs text-gray-600 md:text-left font-semibold space-y-1">
            <div>©2025 Growdex labs limited</div>
            <div>
              Built with <span className="text-red-500">♥</span> for MSMEs,
              founders, and modern marketers.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
