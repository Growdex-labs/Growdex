import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import BookDemoForm from "../../components/BookDemoForm.jsx";

export default function BookDemoPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#171717] px-4 py-5 text-white sm:px-6 md:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,233,92,0.2)_1px,transparent_1px)] [background-size:28px_28px]"
      />
      <div className="pointer-events-none absolute -right-32 top-24 h-80 w-80 rounded-full bg-[#FFE95C]/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#d99af9]/15 blur-3xl" />

      <div className="relative mx-auto max-w-[1180px]">
        <header className="flex items-center justify-between rounded-[15px] border border-white/10 bg-black/20 px-4 py-3 backdrop-blur-sm sm:px-5">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-gilroy-semibold text-white transition-colors hover:text-[#FFE95C]"
          >
            <span className="grid size-7 place-items-center rounded-full bg-white text-[#171717]">
              <ArrowLeft size={14} strokeWidth={2.5} />
            </span>
            Growdex
          </Link>
          <a
            href="https://app.growdex.ai"
            className="rounded-[8px] bg-white px-4 py-2 text-xs font-gilroy-semibold text-[#171717] transition-colors hover:bg-[#FFE95C]"
          >
            Start for free
          </a>
        </header>

        <div className="grid items-center gap-10 py-12 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <section>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#FFE95C]/30 bg-[#FFE95C]/10 px-3 py-1.5 text-xs font-gilroy-semibold uppercase tracking-[0.14em] text-[#FFE95C]">
              <span className="size-1.5 rounded-full bg-[#FFE95C]" />
              Book a demo
            </p>
            <h1 className="mt-6 max-w-xl font-gilroy-bold text-4xl leading-[1.04] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Turn your campaign bottlenecks into a clearer next move.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-white/70">
              Tell us what is slowing your team down. We will show you the
              Growdex workflow that fits your campaigns, not a generic tour.
            </p>

            <ul className="mt-8 space-y-3 text-sm text-white/80">
              {[
                "See campaign creation and management in one workspace.",
                "Talk through your current advertising workflow.",
                "Leave with the next practical step for your team.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 size-4 shrink-0 text-[#FFE95C]"
                    strokeWidth={2.5}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-[20px] border border-white/[0.14] bg-[#222222]/95 p-6 shadow-2xl shadow-black/30 sm:p-8 md:p-10">
            <div className="flex items-start gap-3 border-b border-white/10 pb-6">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#FFE95C] text-[#171717]">
                <ArrowRight size={17} strokeWidth={2.5} />
              </span>
              <div>
                <h2 className="font-gilroy-bold text-2xl tracking-[-0.02em] text-white">
                  Request your demo
                </h2>
                <p className="mt-1 text-sm leading-5 text-white/60">
                  Share a few details and our team will follow up.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <BookDemoForm />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
