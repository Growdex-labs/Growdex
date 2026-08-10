import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Nav from "../Landing Page/HeroPage/Nav.jsx";
import FooterSection from "../Landing Page/HeroPage/FooterSection.jsx";
import DarkCloudTransition from "./DarkCloudTransition.jsx";
import featuredArt from "../../assets/growdex-help-featured-sunburst.png";
import slateLarge from "../../assets/growdex-article-cloud-slate-large.png";
import slateSmall from "../../assets/growdex-article-cloud-slate-small.png";
import whiteLeft from "../../assets/growdex-article-cloud-white-left.png";
import whiteRight from "../../assets/growdex-article-cloud-white-right.png";
import { findArticle, articles, articlePath } from "./articleData.js";
import { HELP_HUB_PATH } from "./helpData.js";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Block({ block }) {
  if (block.type === "h2") {
    return (
      <h2 className="js-article-block mt-10 font-gilroy-bold text-[clamp(14px,1.3vw,18px)] leading-snug text-[#2f2f2f]">
        {block.text}
      </h2>
    );
  }
  if (block.type === "h3") {
    return (
      <h3 className="js-article-block mt-7 font-gilroy-semibold text-[clamp(11px,1vw,13.5px)] text-[#2f2f2f]">
        {block.text}
      </h3>
    );
  }
  if (block.type === "ul") {
    return (
      <ul className="js-article-block mt-3 space-y-1.5 pl-5">
        {block.items.map((item) => (
          <li
            key={item}
            className="list-disc text-[clamp(10px,0.92vw,13px)] leading-[1.7] text-[#5a5a5a] marker:text-[#b4b4b4]"
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }
  return (
    <p className="js-article-block mt-3 text-[clamp(10px,0.92vw,13px)] leading-[1.75] text-[#5a5a5a]">
      {block.text}
    </p>
  );
}

export default function ArticlePage() {
  const { slug } = useParams();
  const article = findArticle(slug);
  const rootRef = useRef(null);

  const related = articles.filter((item) => item.slug !== slug).slice(0, 4);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power3.out" }, delay: 0.1 })
          .from(".js-article-card > div:first-child > *", {
            autoAlpha: 0,
            y: 22,
            duration: 0.6,
            stagger: 0.1,
          });

        // Body blocks reveal as they come into view; batching keeps a long
        // article from creating one ScrollTrigger per paragraph firing alone.
        ScrollTrigger.batch(".js-article-block", {
          start: "top 88%",
          once: true,
          onEnter: (batch) =>
            gsap.from(batch, {
              autoAlpha: 0,
              y: 18,
              duration: 0.5,
              stagger: 0.08,
              ease: "power3.out",
            }),
        });

        gsap.from(".js-article-related", {
          autoAlpha: 0,
          y: 24,
          duration: 0.55,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".js-article-related-grid",
            start: "top 85%",
            once: true,
          },
        });

        const drift = [
          [".js-article-slate-left", 26, -30],
          [".js-article-slate-right", 36, -38],
        ];
        drift.forEach(([target, from, to]) => {
          gsap.fromTo(
            target,
            { y: from },
            {
              y: to,
              ease: "none",
              scrollTrigger: {
                trigger: ".js-article-hero",
                start: "top top",
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
          ".js-article-card > div:first-child > *, .js-article-block, .js-article-related, .js-article-slate-left, .js-article-slate-right",
          { clearProps: "all" },
        );
      });

      return () => media.revert();
    },
    { scope: rootRef },
  );

  if (!article) {
    return (
      <div className="relative min-h-screen overflow-x-hidden bg-white font-sans">
        <Nav />
        <div className="mx-auto max-w-[1100px] px-6 pb-24 pt-40 text-center md:px-12">
          <h1 className="font-gilroy-bold text-[clamp(22px,2.6vw,32px)] text-[#3f3f3f]">
            We couldn&rsquo;t find that article
          </h1>
          <Link
            to={HELP_HUB_PATH}
            className="mt-6 inline-flex items-center gap-2 rounded-[8px] border border-[#dcdcdc] px-4 py-2 text-[13px] text-[#3f3f3f]"
          >
            Back to the Help Center
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={rootRef}
      className="relative min-h-screen overflow-x-hidden bg-white font-sans"
    >
      <Nav />

      {/* Slate band behind the nav, the same construction the topic page uses
          for its black band — a fixed height rather than a section that grows
          with its content. */}
      <div className="js-article-hero absolute inset-x-0 top-0 h-[300px] overflow-hidden bg-[#9B9DB8] md:h-[450px]">
        <img
          src={slateLarge}
          alt=""
          aria-hidden="true"
          className="js-article-slate-left pointer-events-none absolute left-6 top-[42%] z-0 w-[clamp(200px,18vw,60px)]"
        />
        <img
          src={slateSmall}
          alt=""
          aria-hidden="true"
          className="js-article-slate-right pointer-events-none absolute right-[10%] top-[6%] z-0 w-[clamp(80px,11vw,150px)]"
        />
        <img
          src={whiteLeft}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-8 left-0 z-10 w-[clamp(140px,22vw,340px)]"
        />
        <img
          src={whiteRight}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-8 right-0 z-10 w-[clamp(120px,18vw,290px)]"
        />
      </div>

      {/* White sheet rising out of the band, same as the topic page. */}
      <div className="relative">
        <div className="js-article-card mx-auto mt-[104px] max-w-[1000px] overflow-hidden rounded-t-[24px] bg-white md:mt-[144px]">
          <div className="mx-auto max-w-[1000px] pt-10 text-center md:pt-14">
            <p className="text-[14px] font-semibold uppercase tracking-[0.14em] text-[#9a9a9a]">
              Featured
            </p>
            <h1 className="mt-2 font-gilroy-bold text-[clamp(20px,2.1vw,32px)] leading-[1.2] tracking-[-0.01em] text-[#2f2f2f]">
              {article.title}
            </h1>
            <p className="mx-auto mt-3 max-w-[620px] text-[clamp(12
            px,0.92vw,18px)] leading-[1.6] text-[#5f5f5f]">
              {article.subtitle}
            </p>
          </div>

          {/* Outside the text wrapper so it runs to the sheet's edges, with
              just a 1px sliver either side. */}
          <div className="mt-8 px-px">
            <img
              src={featuredArt}
              alt=""
              aria-hidden="true"
              // object-cover so the shorter box crops the artwork instead of
              // squashing it — an <img> defaults to object-fill.
              className="h-[340px] w-full rounded-[10px] object-cover object-center p-2"
            />
          </div>

          {/* Body */}
          <div className="mx-auto max-w-[620px] px-6 pt-10 md:pt-14">
            <h2 className="js-article-block font-gilroy-bold text-[clamp(14px,1.35vw,19px)] leading-snug text-[#2f2f2f]">
              {article.title}
            </h2>
            <p className="js-article-block mt-3 text-[clamp(10px,0.92vw,13px)] leading-[1.75] text-[#5a5a5a]">
              {article.subtitle}
            </p>
            {article.body.map((block, index) => (
              <Block key={`${block.type}-${index}`} block={block} />
            ))}
          </div>
        </div>
      </div>

      {/* More from category */}
      <section className="bg-white pb-14 pt-16 md:pt-20">
        <div className="mx-auto max-w-[1100px] px-6 md:px-12">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-gilroy-bold text-[clamp(15px,1.6vw,21px)] tracking-[-0.01em] text-[#3f3f3f]">
              More from Category
            </h2>
            <Link
              to={HELP_HUB_PATH}
              className="inline-flex shrink-0 items-center gap-2 rounded-[8px] border border-[#dcdcdc] bg-white px-4 py-2 font-gilroy-medium text-[clamp(10px,0.9vw,12px)] text-[#3f3f3f] transition-colors hover:border-[#928322]"
            >
              View All Articles
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="js-article-related-grid mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <Link
                key={item.slug}
                to={articlePath(item.slug)}
                className="js-article-related group block"
              >
                <span
                  className="block aspect-[16/11] w-full rounded-[10px] bg-[#E7E8EB] transition-transform duration-300 group-hover:-translate-y-1"
                  aria-hidden="true"
                />
                <span className="mt-3 block font-gilroy-semibold text-[clamp(10px,0.9vw,12.5px)] leading-snug text-[#2f2f2f]">
                  {item.title}
                </span>
                <span className="mt-1 inline-flex items-center gap-0.5 text-[clamp(9px,0.8vw,11px)] text-[#8a8a8a] transition-colors group-hover:text-[#928322]">
                  Read article
                  <ChevronRight className="h-2.5 w-2.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <DarkCloudTransition />

      <main className="mx-auto max-w-[1440px] px-6 md:px-12">
        <FooterSection
          ctaLayout="split"
          title="Ready to Grow"
          highlight="Smarter?"
          copy="Start creating, launching, managing, and optimizing your advertising campaigns with Growdex."
          copyStrong=""
          primaryLabel="Start for free"
          secondaryLabel="Upgrade to Pro"
        />
      </main>
    </div>
  );
}
