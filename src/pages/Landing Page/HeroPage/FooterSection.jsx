import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import FaqItem from "./FaqItem.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import cloudLeftLarge from "../../../assets/growdex-footer-cloud-left-large.png";
import cloudLeftSmall from "../../../assets/growdex-footer-cloud-left-small.png";
import cloudRight from "../../../assets/growdex-footer-cloud-right.png";
import helpMark from "../../../assets/growdex-footer-help-mark.png";
import logoMark from "../../../assets/growdex-footer-logo-mark.png";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Matches the black the FAQ showcase bleeds into, so the two sections join
// with no visible seam.
export const FOOTER_BLACK = "#171717";

const linkColumns = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/#pricing" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Help Center", href: "/help-center" },
      { label: "FAQ", href: "/#faqs" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/#home" },
      { label: "Agency", href: "/agency" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/#privacy" },
      { label: "Terms of Service", href: "/#terms" },
      { label: "Cookie Policy", href: "/#cookies" },
    ],
  },
];

export default function FooterSection({
  title = "Ready to Launch",
  highlight = "Smarter Campaigns?",
  copy = "Bring your campaign creation, management, and optimization into one platform. Spend less time managing tools. ",
  copyStrong = "Spend more time growing your business.",
  primaryLabel = "Start for free",
  primaryHref = "#waitlist-banner",
  secondaryLabel = "Book a demo",
  secondaryHref = "#waitlist-banner",
  // Optional FAQ block rendered above the CTA: [{ question, answer }].
  faq = null,
  faqTitle = "Frequently Asked Questions",
  faqCopy = "Growing businesses, agencies, and marketing teams use Growdex to simplify customer acquisition and move faster.",
  // Headroom for pages whose preceding section deliberately hangs over this
  // one — it pushes everything below the overlap rather than just the CTA.
  topOverlap = "",
  // "center" stacks everything; "split" puts the heading left and the copy
  // plus buttons right, as the article page does.
  ctaLayout = "center",
}) {
  const sectionRef = useRef(null);
  const [openFaq, setOpenFaq] = useState([0]);
  const split = ctaLayout === "split";

  const toggleFaq = (index) =>
    setOpenFaq((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".js-footer-cta",
              start: "top 78%",
              once: true,
            },
            defaults: { ease: "power3.out" },
          })
          .from(".js-footer-cta > *", {
            autoAlpha: 0,
            y: 26,
            duration: 0.6,
            stagger: 0.12,
          });

        gsap.from(".js-footer-card", {
          autoAlpha: 0,
          y: 34,
          duration: 0.7,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".js-footer-card",
            start: "top 88%",
            once: true,
          },
        });
      });

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".js-footer-cta > *, .js-footer-card", { clearProps: "all" });
      });

      return () => media.revert();
    },
    { scope: sectionRef },
  );

  return (
    <footer
      ref={sectionRef}
      // z-10 puts the footer above the FAQ section so its background covers
      // the laptop overhanging from above.
      className="relative left-1/2 z-10 w-screen -translate-x-1/2 overflow-hidden"
      style={{ backgroundColor: FOOTER_BLACK }}
    >
      {/* Clouds are near-black on black — they only read as a faint shift in
          tone, which is what the design calls for. */}
      <img
        src={cloudLeftLarge}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-[16%] w-[clamp(150px,20vw,370px)]"
      />
      <img
        src={cloudRight}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-[22%] w-[clamp(130px,17vw,318px)]"
      />
      <img
        src={cloudLeftSmall}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-[62%] w-[clamp(90px,11vw,206px)]"
      />

      {/* Padding and max-width mirror Nav.jsx so the footer cards line up with
          the navbar's edges exactly. */}
      <div className="relative z-10 px-4 md:px-8">
        <div className={`mx-auto max-w-[1344px] ${topOverlap}`}>
          {faq ? (
            <div className="js-footer-faq pt-20 md:pt-28">
              <h2 className="text-center font-gilroy-bold text-[clamp(24px,3vw,38px)] leading-[1.2] tracking-[-0.02em] text-[#FFE95C]">
                {faqTitle}
              </h2>
              <p className="mx-auto mt-4 max-w-[600px] text-center text-[clamp(13px,1.15vw,17px)] leading-[1.6] text-[#b5b5b5]">
                {faqCopy}
              </p>
              <div className="mx-auto mt-10 max-w-[820px] space-y-3 md:mt-12">
                {faq.map((item, index) => (
                  <FaqItem
                    key={item.question}
                    question={item.question}
                    answer={item.answer}
                    tone="dark"
                    isOpen={openFaq.includes(index)}
                    onClick={() => toggleFaq(index)}
                  />
                ))}
              </div>
            </div>
          ) : null}

          <div
            className={`js-footer-cta pb-16 md:pb-24 ${faq ? "pt-24 md:pt-32" : "pt-20 md:pt-28"} ${
              split
                ? "grid items-center gap-8 md:grid-cols-[auto_auto] md:justify-center md:gap-14"
                : "flex flex-col items-center text-center"
            }`}
          >
            <div className={split ? "" : "contents"}>
            <h2 className={`font-gilroy-bold leading-[1.18] tracking-[-0.02em] text-white ${split ? "text-[clamp(20px,2.4vw,32px)]" : "text-[clamp(26px,3.4vw,44px)]"}`}>
              {title}
            </h2>
            <span className={`mt-3 inline-block rounded-full bg-[#FFE95C] px-[0.5em] py-[0.1em] font-gilroy-bold leading-[1.3] tracking-[-0.02em] text-[#292300] ${split ? "text-[clamp(20px,2.4vw,32px)]" : "text-[clamp(26px,3.4vw,44px)]"}`}>
              {highlight}
            </span>
            </div>
            <div className={split ? "" : "contents"}>
            <p className={`text-[#b5b5b5] ${split ? "max-w-[420px] text-[clamp(11px,1vw,14px)] leading-[1.65]" : "mt-8 max-w-[600px] text-[clamp(13px,1.15vw,17px)] leading-[1.7]"}`}>
              {copy}
              {copyStrong ? (
                <strong className="font-gilroy-bold text-white">
                  {copyStrong}
                </strong>
              ) : null}
            </p>
            <div className={`flex flex-wrap items-center gap-4 ${split ? "mt-6 justify-start" : "mt-10 justify-center"}`}>
              <a
                href={primaryHref}
                className="inline-flex items-center gap-3 rounded-[8px] bg-white px-6 py-3 font-gilroy-medium text-[15px] text-[#1f1f1f] transition-colors hover:bg-[#FFE95C]"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1f1f1f]">
                  <ArrowRight
                    className="h-3 w-3 text-white"
                    strokeWidth={2.5}
                  />
                </span>
                {primaryLabel}
              </a>
              <a
                href={secondaryHref}
                className="inline-flex items-center rounded-[8px] border border-[#FFE95C] px-6 py-3 font-gilroy-medium text-[15px] text-[#FFE95C] transition-colors hover:bg-[#FFE95C] hover:text-[#292300]"
              >
                {secondaryLabel}
              </a>
            </div>
            </div>
          </div>

          <div className="grid gap-5 pb-16 md:pb-20 lg:grid-cols-[1fr_320px]">
            <div className="js-footer-card relative overflow-hidden rounded-[20px] border border-white/[0.06] bg-[#1c1c1c] px-6 py-8 md:px-10 md:py-10">
              {/* Sized in container-query units so the mark and wordmark scale
                  together and span the card's full width at any breakpoint. */}
              <div className="@container w-full">
                <div className="flex w-full items-center gap-[2.2cqw] opacity-[0.07]">
                  <img
                    src={logoMark}
                    alt=""
                    aria-hidden="true"
                    className="h-[21cqw] w-auto invert"
                  />
                  <span className="font-gilroy-bold text-[19.3cqw] leading-none tracking-[-0.03em] text-white">
                    Growdex
                  </span>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-4 md:mt-10">
                {linkColumns.map((column) => (
                  <div key={column.heading}>
                    <h3 className="font-gilroy-semibold text-[13px] text-white">
                      {column.heading}
                    </h3>
                    <ul className="mt-4 space-y-2.5">
                      {column.links.map((link) => (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            className="text-[13px] text-[#9a9a9a] transition-colors hover:text-[#FFE95C]"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t border-white/[0.07] pt-5 md:mt-12">
                <div className="flex flex-col gap-3 text-[12px] text-[#9a9a9a] md:flex-row md:items-center md:justify-between">
                  <p>
                    <strong className="font-gilroy-semibold text-white">
                      Start a Conversation
                    </strong>{" "}
                    Follow us on LinkedIn, X (Twitter), Facebook, Instagram, and
                    Youtube.
                  </p>
                  <p className="shrink-0">
                    © {new Date().getFullYear()} Growdex Technology Solutions
                    Limited. All rights reserved.
                  </p>
                </div>
              </div>
            </div>

            <div className="js-footer-card flex flex-col items-center rounded-[20px] border border-white/[0.06] bg-[#1c1c1c] px-6 py-8 text-center md:px-8">
              <h3 className="font-gilroy-semibold text-[13px] text-white">
                Need Help?
              </h3>
              <div className="mt-5 h-px w-full bg-white/[0.07]" />
              <img
                src={helpMark}
                alt=""
                aria-hidden="true"
                className="mt-6 w-[clamp(56px,6vw,88px)]"
              />
              <p className="mt-6 text-[12px] leading-[1.6] text-[#9a9a9a]">
                Have questions about Growdex? Our team is here to help with
                product inquiries, pricing, onboarding, technical support, and
                partnerships.
              </p>
              <a
                href="mailto:hello@growdex.com"
                className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-[8px] bg-[#111111] px-5 py-3 font-gilroy-medium text-[13px] text-white transition-colors hover:bg-[#FFE95C] hover:text-[#292300]"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white">
                  <ArrowRight
                    className="h-3 w-3 text-[#1f1f1f]"
                    strokeWidth={2.5}
                  />
                </span>
                Send us a query
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
