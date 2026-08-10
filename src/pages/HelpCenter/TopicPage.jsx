import { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, ChevronRight, Search } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Nav from "../Landing Page/HeroPage/Nav.jsx";
import FooterSection from "../Landing Page/HeroPage/FooterSection.jsx";
import { plansFaq } from "../Landing Page/HeroPage/footerFaq.js";
import DarkCloudTransition from "./DarkCloudTransition.jsx";
import featuredArt from "../../assets/New Design/growdex-help-featured-sunburst.png";
import { findTopic, HELP_HUB_PATH } from "./helpData.js";
import { articles as popularArticles, articlePath } from "./articleData.js";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Eight tiles per the design; the list repeats until real articles exist.
const articleGrid = [...popularArticles, ...popularArticles];

export default function TopicPage() {
  const { slug } = useParams();
  const topic = findTopic(slug);
  const [query, setQuery] = useState("");
  const sectionRef = useRef(null);

  const term = query.trim().toLowerCase();
  const visibleArticles = articleGrid.filter(
    (item) => !term || item.title.toLowerCase().includes(term),
  );

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power3.out" }, delay: 0.1 })
          .from(".js-topic-head > *", {
            autoAlpha: 0,
            y: 20,
            duration: 0.55,
            stagger: 0.1,
          })
          .from(
            ".js-topic-featured",
            { autoAlpha: 0, y: 28, duration: 0.7 },
            "-=0.25",
          );

        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".js-topic-articles",
              start: "top 82%",
              once: true,
            },
            defaults: { ease: "power3.out" },
          })
          .from(".js-topic-articles-head", {
            autoAlpha: 0,
            y: 18,
            duration: 0.5,
          })
          .from(
            ".js-topic-article",
            {
              autoAlpha: 0,
              y: 22,
              duration: 0.45,
              stagger: { amount: 0.5, grid: [2, 4], from: "start" },
            },
            "-=0.25",
          );
      });

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          ".js-topic-head > *, .js-topic-featured, .js-topic-articles-head, .js-topic-article",
          { clearProps: "all" },
        );
      });

      return () => media.revert();
    },
    { scope: sectionRef },
  );

  if (!topic) {
    return (
      <div className="relative min-h-screen overflow-x-hidden bg-white font-sans">
        <Nav />
        <div className="mx-auto max-w-[1100px] px-6 pb-24 pt-40 text-center md:px-12">
          <h1 className="font-gilroy-bold text-[clamp(22px,2.6vw,32px)] text-[#3f3f3f]">
            We couldn&rsquo;t find that topic
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
      ref={sectionRef}
      className="relative min-h-screen overflow-x-hidden bg-white font-sans"
    >
      <Nav />

      {/* Black band behind the nav only — the white sheet's rounded top rises
          out of it, and the page is plain white from there down. */}
      <div
        className="absolute inset-x-0 top-0 h-[148px] bg-[#171717] md:h-[172px]"
        aria-hidden="true"
      />

      <div className="relative px-4 md:px-8">
        <div className="mx-auto mt-[104px] max-w-[1344px] overflow-hidden rounded-t-[24px] bg-white md:mt-[124px]">
          <section className="pt-12 md:pt-16">
            <div className="mx-auto max-w-[1100px] px-6 md:px-12">
          <div className="js-topic-head grid items-center gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="flex items-center gap-5">
              <span
                className={`flex h-[74px] w-[74px] shrink-0 items-center justify-center rounded-[16px] ${topic.tile}`}
              >
                <img
                  src={topic.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-8 w-8 object-contain"
                />
              </span>
              <div className="min-w-0">
                <nav aria-label="Breadcrumb">
                  <ol className="flex flex-wrap items-center gap-1.5 text-[10px] text-[#9a9a9a]">
                    <li>
                      <Link to="/" className="hover:text-[#3f3f3f]">
                        Home
                      </Link>
                    </li>
                    <li aria-hidden="true">›</li>
                    <li>
                      <Link to={HELP_HUB_PATH} className="hover:text-[#3f3f3f]">
                        Help Center
                      </Link>
                    </li>
                    <li aria-hidden="true">›</li>
                    <li className="text-[#3f3f3f]" aria-current="page">
                      {topic.title}
                    </li>
                  </ol>
                </nav>
                <h1 className="mt-1.5 font-gilroy-bold text-[clamp(21px,2.5vw,32px)] leading-[1.15] tracking-[-0.02em] text-[#2f2f2f]">
                  {topic.title}
                </h1>
              </div>
            </div>

            <div className="lg:pl-10">
              <p className="text-[clamp(10px,0.9vw,12.5px)] leading-[1.6] text-[#6b6b6b]">
                Search our guides, tutorials, and FAQs to find answers and get
                the most out of Growdex.
              </p>
              <form
                className="mt-3"
                role="search"
                onSubmit={(event) => event.preventDefault()}
              >
                <label className="relative block">
                  <span className="sr-only">Search for articles</span>
                  <Search
                    className="pointer-events-none absolute left-4 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#9aa0b0]"
                    aria-hidden="true"
                  />
                  <input
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search for articles..."
                    className="w-full rounded-[8px] border border-[#e4e4e4] bg-white py-2.5 pl-10 pr-4 text-[12px] text-[#3f3f3f] outline-none placeholder:text-[#9aa0b0] focus:border-[#FFE95C] focus:ring-1 focus:ring-[#FFE95C]"
                  />
                </label>
              </form>
            </div>
          </div>

          {/* Featured article */}
          <article className="js-topic-featured mt-10 grid overflow-hidden rounded-[14px] border border-[#ececec] bg-[#F8F9FB] md:grid-cols-2">
            <img
              src={featuredArt}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
            />
            <div className="flex flex-col justify-center p-7 md:p-10">
              <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#9a9a9a]">
                Featured
              </p>
              <h2 className="mt-3 font-gilroy-bold text-[clamp(17px,1.9vw,24px)] leading-[1.2] tracking-[-0.01em] text-[#2f2f2f]">
                {topic.featured.title}
              </h2>
              <p className="mt-3 max-w-[360px] text-[clamp(11px,0.95vw,13.5px)] leading-[1.6] text-[#5f5f5f]">
                {topic.featured.body}
              </p>
              <a
                href="#still-need-help"
                className="group mt-5 inline-flex items-center gap-0.5 text-[clamp(10px,0.85vw,11.5px)] text-[#3f3f3f] transition-colors hover:text-[#928322]"
              >
                Read article
                <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </article>

          {/* Article grid */}
          <div className="js-topic-articles mt-14 md:mt-16">
            <h2 className="js-topic-articles-head font-gilroy-bold text-[clamp(16px,1.7vw,22px)] tracking-[-0.01em] text-[#3f3f3f]">
              Articles
            </h2>

            {visibleArticles.length ? (
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {visibleArticles.map((item, index) => (
                  <Link
                    key={`${item.slug}-${index}`}
                    to={articlePath(item.slug)}
                    className="js-topic-article group block"
                  >
                    <span
                      className="block aspect-[16/11] w-full rounded-[8px] bg-[#E7E8EB] transition-transform duration-300 group-hover:-translate-y-1"
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
            ) : (
              <p className="mt-8 text-[13px] text-[#7b7b7b]">
                Nothing in this topic matched &ldquo;{query.trim()}&rdquo;.
              </p>
            )}

            <div className="mt-12 flex justify-center">
              <Link
                to={HELP_HUB_PATH}
                className="inline-flex items-center gap-2 rounded-[8px] border border-[#dcdcdc] bg-white px-5 py-2.5 font-gilroy-medium text-[clamp(10px,0.9vw,12px)] text-[#3f3f3f] transition-colors hover:border-[#928322]"
              >
                View All Articles
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* No support form on a topic page — the articles hand straight off to
          the footer. Outside the inset sheet so it reaches the viewport edges. */}
      <DarkCloudTransition />

      <main className="mx-auto max-w-[1440px] px-6 md:px-12">
        <FooterSection
          title="Still Have"
          highlight="Questions?"
          copy="Browse the guides above or reach out directly. "
          copyStrong="Our team replies fast."
          faq={plansFaq}
        />
      </main>
    </div>
  );
}
