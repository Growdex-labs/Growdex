import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import FaqItem from "./FaqItem";
import FaqImage from "../../../assets/faq.png";
import showcaseBackdrop from "../../../assets/New Design/growdex-faq-showcase-backdrop.png";
import showcaseShapeLeft from "../../../assets/New Design/growdex-faq-showcase-shape-left.png";
import showcaseShapeRight from "../../../assets/New Design/growdex-faq-showcase-shape-right.png";
import showcaseBlackLeft from "../../../assets/New Design/growdex-faq-showcase-black-left.png";
import showcaseBlackRight from "../../../assets/New Design/growdex-faq-showcase-black-right.png";
import showcaseLaptop from "../../../assets/New Design/growdex-faq-laptop-campaign.webp";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const faqList = [
  {
    question: "What platforms does Growdex support?",
    answer:
      "At launch, Growdex supports Meta and TikTok. More platforms will be added over time.",
  },
  {
    question: "Is Growdex for agencies or businesses?",
    answer:
      "Both. Growdex is built for individuals, businesses, teams, and agencies managing one or multiple ad accounts.",
  },
  {
    question: "Do I need technical knowledge to use Growdex?",
    answer:
      "No. Growdex is designed to be intuitive and easy to use, even if you're not a technical expert.",
  },
  {
    question: "How does the AI optimization work?",
    answer:
      "Growdex analyzes campaign performance data and provides actionable recommendations—showing what's working, what's not, and where to optimize.",
  },
  {
    question: "Will Growdex run ads automatically for me?",
    answer:
      "You stay in control. Growdex provides recommendations and automation options, but execution is always your decision.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Yes. We use enterprise-grade security and encryption to protect all your data.",
  },
  {
    question: "When will Growdex be available?",
    answer:
      "We're currently in beta. Join the waitlist to get early access at launch.",
  },
  {
    question: "How much will Growdex cost?",
    answer:
      "Pricing will be announced closer to launch, with flexible plans for all business sizes.",
  },
];

export default function FrequentlyAskedQuestions() {
  const [openIndexes, setOpenIndexes] = useState([0]);
  const sectionRef = useRef(null);

  const handleToggle = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              once: true,
            },
            defaults: { ease: "power3.out" },
          })
          .from(".js-faq-heading", { autoAlpha: 0, y: 24, duration: 0.6 })
          .from(".js-faq-copy", { autoAlpha: 0, y: 18, duration: 0.5 }, "-=0.35")
          .from(
            ".js-faq-panel",
            { autoAlpha: 0, y: 30, duration: 0.7 },
            "-=0.3",
          )
          .from(
            ".js-faq-mark",
            { autoAlpha: 0, scale: 0.85, rotate: -8, duration: 0.7 },
            "-=0.45",
          )
          .from(
            ".js-faq-item",
            { autoAlpha: 0, y: 18, duration: 0.45, stagger: 0.08 },
            "-=0.5",
          );

        // Each layer travels at its own rate across the showcase's scroll
        // range, so the shapes appear to stack while the laptop rises past
        // them. Transform-only — nothing else animates these elements.
        const layers = [
          [".js-faq-shape-back", 70, -25],
          [".js-faq-shape-left", 130, -60],
          [".js-faq-shape-right", 165, -80],
          // The black pair is deliberately absent: moving it would open a gap
          // at the boundary with the dark section below.
          // Travel is clamped so that at the very top of its range the
          // laptop's base is still well inside the black floor.
          [".js-faq-laptop", 140, -20],
        ];
        layers.forEach(([target, from, to]) => {
          gsap.fromTo(
            target,
            { y: from },
            {
              y: to,
              ease: "none",
              scrollTrigger: {
                trigger: ".js-faq-showcase",
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
                invalidateOnRefresh: true,
              },
            },
          );
        });
      });

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          ".js-faq-heading, .js-faq-copy, .js-faq-panel, .js-faq-mark, .js-faq-item, .js-faq-shape-back, .js-faq-shape-left, .js-faq-shape-right, .js-faq-laptop",
          { clearProps: "all" },
        );
      });

      return () => media.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="faqs"
      ref={sectionRef}
      // No overflow clipping and no bottom padding: the laptop deliberately
      // hangs past the bottom edge, and the footer starts flush against the
      // black clouds. The footer paints over the overhang.
      className="relative left-1/2 w-screen -translate-x-1/2 bg-white pt-16 md:pt-24"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <h2 className="js-faq-heading text-center font-gilroy-bold text-[clamp(24px,3vw,38px)] leading-[1.2] tracking-[-0.02em] text-[#3f3f3f]">
          Frequently Asked Questions
        </h2>
        <p className="js-faq-copy mx-auto mt-4 max-w-[600px] text-center text-[clamp(13px,1.15vw,17px)] leading-[1.6] text-[#515151]">
          Growing businesses, agencies, and marketing teams use Growdex to
          simplify customer acquisition and move faster.
        </p>

        <div className="js-faq-panel mt-10 rounded-[24px] bg-[#FFF8CE] px-5 py-8 md:mt-14 md:px-10 md:py-10">
          <div className="grid items-center gap-8 md:grid-cols-[260px_1fr] md:gap-12">
            <img
              src={FaqImage}
              alt=""
              aria-hidden="true"
              draggable={false}
              className="js-faq-mark mx-auto w-[160px] max-w-full md:w-[220px]"
            />
            <div className="space-y-2.5">
              {faqList.map((item, index) => (
                <FaqItem
                  key={item.question}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndexes.includes(index)}
                  onClick={() => handleToggle(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Full-bleed showcase. Layers are centred with left/width rather than a
          translate, leaving the transform free for the parallax. The showcase
          ends exactly where the footer begins: the laptop hangs past that edge
          and the footer's own background covers it, so it reads as rising out
          of the next section. The height tracks viewport width because the
          laptop is sized in the same units. */}
      <div className="js-faq-showcase relative mt-10 h-[max(260px,38vw)] md:mt-14">
        {/* Clips the yellow layers so they stay inside the white band. */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={showcaseBackdrop}
            alt=""
            aria-hidden="true"
            className="js-faq-shape-back pointer-events-none absolute -bottom-0.5m- left-0 z-0 w-full"
          />
          <img
            src={showcaseShapeLeft}
            alt=""
            aria-hidden="true"
            className="js-faq-shape-left pointer-events-none absolute bottom-[5%] left-0 z-10 w-[24%]"
          />
          <img
            src={showcaseShapeRight}
            alt=""
            aria-hidden="true"
            className="js-faq-shape-right pointer-events-none absolute bottom-[5%] right-0 z-10 w-[22%]"
          />
        </div>

        {/* Outside the clip so its base can hang into the footer. */}
        <img
          src={showcaseLaptop}
          alt="Growdex campaign builder open on a laptop"
          // The artwork carries ~19% transparent padding top and bottom, so
          // the offset is set from its real content box: the base always sits
          // below the section edge, even at the top of the parallax range.
          className="js-faq-laptop absolute bottom-[-36%] left-[4%] z-20 w-[92%] md:left-[9%] md:w-[85%]"
        />

        {/* The clouds sit straight on the boundary — their flat bottoms meet
            the footer's black, so the two read as one shape. */}
        <img
          src={showcaseBlackLeft}
          alt=""
          aria-hidden="true"
          className="js-faq-black-left pointer-events-none absolute -bottom-10 left-0 z-30 w-[38%] max-w-[440px]"
        />
        <img
          src={showcaseBlackRight}
          alt=""
          aria-hidden="true"
          className="js-faq-black-right pointer-events-none absolute -bottom-10 right-0 z-30 w-[35%] max-w-[400px]"
        />
      </div>
    </section>
  );
}
