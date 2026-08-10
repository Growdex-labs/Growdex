import { useRef } from "react";
import { Mail, MessageSquare } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// The label sits inside the field with its icon, so the box is styled on the
// wrapper and the control itself is bare.
function Field({ id, icon: Icon, label, children }) {
  return (
    <div className="rounded-[10px] border border-[#e8eaf0] bg-[#F7F8FA] px-4 py-3 transition-colors focus-within:border-[#FFE95C]">
      <label
        htmlFor={id}
        className="flex items-center gap-1.5 text-[10px] text-[#9aa0b0]"
      >
        <Icon className="h-3 w-3" aria-hidden="true" />
        {label}
      </label>
      {children}
    </div>
  );
}

export default function StillNeedHelp() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 78%",
              once: true,
            },
            defaults: { ease: "power3.out" },
          })
          .from(".js-help-cta > *", {
            autoAlpha: 0,
            y: 22,
            duration: 0.55,
            stagger: 0.12,
          })
          .from(
            ".js-help-form",
            { autoAlpha: 0, y: 28, duration: 0.65 },
            "-=0.3",
          );

      });

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".js-help-cta > *, .js-help-form", { clearProps: "all" });
      });

      return () => media.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="still-need-help"
      ref={sectionRef}
      className="relative bg-white pb-4 pt-8"
    >
      <div className="relative z-10 mx-auto max-w-[1100px] px-6 md:px-12">
        <div className="js-help-cta flex flex-col items-center text-center">
          <h2 className="font-gilroy-bold text-[clamp(22px,2.7vw,34px)] leading-[1.25] tracking-[-0.02em] text-[#4a4a4a]">
            Still Need{" "}
            <span className="ml-1 inline-block rounded-full bg-[#292300] px-[0.55em] py-[0.1em] text-[#FFE95C]">
              Help?
            </span>
          </h2>
          <p className="mt-4 max-w-[480px] text-[clamp(11px,1vw,14px)] leading-[1.6] text-[#6b6b6b]">
            Can&rsquo;t find what you&rsquo;re looking for? Our support team is
            here to help.
          </p>
        </div>

        <form
          className="js-help-form mx-auto mt-8 w-full max-w-[420px] space-y-4"
          onSubmit={(event) => event.preventDefault()}
        >
          <Field id="help-email" icon={Mail} label="Email">
            <input
              id="help-email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              className="mt-1 w-full border-0 bg-transparent p-0 text-[12px] text-[#3f3f3f] outline-none placeholder:text-[#b4b8c4]"
            />
          </Field>

          <Field id="help-message" icon={MessageSquare} label="Message">
            <textarea
              id="help-message"
              rows="4"
              placeholder="Tell us what you need a hand with."
              className="mt-1 w-full resize-none border-0 bg-transparent p-0 text-[12px] leading-[1.6] text-[#3f3f3f] outline-none placeholder:text-[#b4b8c4]"
            />
          </Field>

          <button
            type="submit"
            className="w-full rounded-[8px] bg-[#FFE95C] py-3 font-gilroy-semibold text-[12px] text-[#292300] transition-colors hover:bg-[#ffef8a]"
          >
            Contact Support
          </button>
        </form>
      </div>

    </section>
  );
}
