import React from "react";
import JoinWaitlist from "../../../components/JoinWaitlist";
import BookDemoForm from "../../../components/BookDemoForm";

function Banner() {
  return (
    <div id="waitlist-banner" className="relative px-4 md:px-0 min-h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      {/* Watermark background text */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_#f3f3f3_1px,_transparent_1px)] [background-size:40px_40px] z-0">
        <div className="absolute inset-0 text-gray-300 text-[2rem] opacity-20 font-bold leading-[3rem] select-none pointer-events-none whitespace-nowrap">
          <div className="w-full h-full flex flex-wrap items-center justify-center gap-10">
            {Array.from({ length: 100 }).map((_, i) => (
              <span key={i}>Growdex</span>
            ))}
          </div>
        </div>
      </div>

      {/* Foreground card */}
      <div className="z-10 grid max-w-5xl gap-6 text-white lg:grid-cols-[0.9fr_1.1fr]">
      <div className="bg-black px-8 py-12 rounded-[2rem] w-full text-center shadow-lg">
  <h1 className="text-4xl md:text-3xl font-extrabold mb-4">
    {/* Large screen */}
    <span className="hidden sm:inline">
      Save Time and Effort <br /> with <span className="text-white">Growdex</span>
    </span>
    {/* Mobile */}
    <span className="inline sm:hidden">
      Save Time and Effort with <span className="text-white">Growdex</span>
    </span>
  </h1>

  <p className="text-gray-300 text-base md:text-xs mb-6">
    {/* Large screen */}
    <span className="hidden sm:inline">
      Run Smarter Ads Everywhere with Growdex. Use one AI-powered dashboard to launch and <br />
      manage campaigns across all major ad platforms, faster, easier, and in one click.
    </span>
    {/* Mobile */}
    <span className="inline sm:hidden">
      Run Smarter Ads Everywhere with Growdex. Use one AI-powered dashboard to launch and manage
      campaigns across all major ad platforms, faster, easier, and in one click.
    </span>
  </p>

  <div className="relative max-w-md mx-auto mt-6 w-full">
    <div className="">
      <JoinWaitlist placeholder="Your email" />
    </div>
  </div>
</div>

      <section id="book-demo" className="rounded-[2rem] bg-zinc-950 px-7 py-8 shadow-lg sm:px-9 sm:py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow-200">Talk to the team</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">See Growdex in your marketing workflow.</h2>
        <p className="mt-3 max-w-lg text-sm leading-6 text-zinc-300">Tell us where your campaigns are getting stuck. We will show you the relevant workflow, not a generic tour.</p>
        <div className="mt-6">
          <BookDemoForm />
        </div>
      </section>
      </div>

    </div>
  );
}

export default Banner;
