import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Search } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Nav from "../Landing Page/HeroPage/Nav.jsx";
import FooterSection from "../Landing Page/HeroPage/FooterSection.jsx";
import DarkCloudTransition from "./DarkCloudTransition.jsx";
import featuredArt from "../../assets/New Design/growdex-blog-featured-sunburst.png";
import slateLarge from "../../assets/New Design/growdex-article-cloud-slate-large.png";
import slateSmall from "../../assets/New Design/growdex-article-cloud-slate-small.png";
import whiteLeft from "../../assets/New Design/growdex-article-cloud-white-left.png";
import whiteRight from "../../assets/New Design/growdex-article-cloud-white-right.png";
import { articles, articlePath } from "./articleData.js";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ARTICLES_PER_PAGE = 9;
const POPULAR_ARTICLES = Array.from({ length: 45 }, (_, index) => ({
  ...articles[index % Math.min(3, articles.length)],
  instanceId: index,
}));

export default function BlogPage() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const rootRef = useRef(null);

  const term = query.trim().toLowerCase();
  const featured = articles[articles.length - 1];
  const filteredArticles = POPULAR_ARTICLES.filter(
    (item) => !term || item.title.toLowerCase().includes(term),
  );
  const pageCount = Math.max(1, Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE));
  const visibleArticles = filteredArticles.slice(
    page * ARTICLES_PER_PAGE,
    (page + 1) * ARTICLES_PER_PAGE,
  );

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power3.out" }, delay: 0.12 })
          .from(".js-blog-head > *", {
            autoAlpha: 0,
            y: 22,
            duration: 0.6,
            stagger: 0.1,
          })
          .from(
            ".js-blog-featured",
            { autoAlpha: 0, y: 30, duration: 0.75 },
            "-=0.3",
          );

        gsap.from(".js-blog-card", {
          autoAlpha: 0,
          y: 24,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".js-blog-grid",
            start: "top 85%",
            once: true,
          },
        });

        const drift = [
          [".js-blog-slate-left", 24, -28],
          [".js-blog-slate-right", 34, -36],
        ];
        drift.forEach(([target, from, to]) => {
          gsap.fromTo(
            target,
            { y: from },
            {
              y: to,
              ease: "none",
              scrollTrigger: {
                trigger: ".js-blog-hero",
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
          ".js-blog-head > *, .js-blog-featured, .js-blog-card, .js-blog-slate-left, .js-blog-slate-right",
          { clearProps: "all" },
        );
      });

      return () => media.revert();
    },
    { scope: rootRef },
  );

  return (
    <div
      ref={rootRef}
      className="relative min-h-screen overflow-x-hidden bg-white font-sans"
    >
      <Nav />

      {/* Light band carrying the heading and search, with the article page's
          clouds — slate ones floating, white ones handing off to the body. */}
      <section className="js-blog-hero relative overflow-hidden bg-[#E9EAEE] pb-28 pt-28 md:pb-32">
        <img
          src={slateLarge}
          alt=""
          aria-hidden="true"
          className="js-blog-slate-left pointer-events-none absolute left-[3%] top-[6%] z-0 w-[clamp(200px,18vw,60px)]"
        />
        <img
          src={slateSmall}
          alt=""
          aria-hidden="true"
          className="js-blog-slate-right pointer-events-none absolute right-[6%] top-[8%] z-0 w-[clamp(80px,11vw,150px)]"
        />

        <div className="relative z-10 mx-auto max-w-[1100px] px-6 md:px-12 mt-20">
          {/* Same header split as the topic page: title block left, search right. */}
          <div className="js-blog-head grid items-center gap-8 lg:grid-cols-[1fr_0.85fr]">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8a8f9c]">
                Blogs
              </p>
              <h1 className="mt-1.5 font-gilroy-bold text-[clamp(24px,2.9vw,38px)] leading-[1.15] tracking-[-0.02em] text-[#2f2f2f]">
                Breaking Down Marketing
              </h1>
              <p className="mt-3 max-w-[460px] text-[clamp(10px,0.9vw,12.5px)] leading-[1.6] text-[#6b6b6b]">
                Search our guides, tutorials, and FAQs to find answers and get
                the most out of Growdex.
              </p>
            </div>

            <form
              role="search"
              onSubmit={(event) => event.preventDefault()}
              className="lg:pl-10"
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
                  onChange={(event) => {
                    setQuery(event.target.value);
                    setPage(0);
                  }}
                  placeholder="Search for articles..."
                  className="w-full rounded-full border border-[#dfe1e7] bg-white py-3 pl-10 pr-4 text-[12px] text-[#3f3f3f] outline-none placeholder:text-[#9aa0b0] focus:border-[#FFE95C] focus:ring-1 focus:ring-[#FFE95C]"
                />
              </label>
            </form>
          </div>
        </div>

        <img
          src={whiteLeft}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-30 left-0 z-10 w-[clamp(140px,22vw,340px)]"
        />
        <img
          src={whiteRight}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-30 right-0 z-10 w-[clamp(120px,18vw,290px)]"
        />
      </section>

      <section className="bg-white pb-16 -pt-20 md:pb-24">
        <div className="mx-auto max-w-[1100px] px-6 md:px-12">
          {/* Featured: artwork flush to the card's left edge, copy on the right. */}
          <article className="js-blog-featured relative z-20 -mt-14 grid overflow-hidden rounded-[14px] bg-[#F8F9FB] shadow-[0_12px_32px_rgba(46,48,58,0.06)] md:-mt-20 md:grid-cols-[0.95fr_1fr]">
            <img
              src={featuredArt}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
            />
            <div className="flex flex-col justify-center p-7 md:p-12">
              <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#9a9a9a]">
                Featured
              </p>
              <h2 className="mt-3 font-gilroy-bold text-[clamp(17px,1.9vw,25px)] leading-[1.2] tracking-[-0.01em] text-[#2f2f2f]">
                {featured.title}
              </h2>
              <p className="mt-3 max-w-[360px] text-[clamp(11px,0.95vw,13.5px)] leading-[1.6] text-[#5f5f5f]">
                {featured.subtitle}
              </p>
              <Link
                to={articlePath(featured.slug)}
                className="group mt-5 inline-flex items-center gap-0.5 text-[clamp(10px,0.85vw,11.5px)] text-[#3f3f3f] transition-colors hover:text-[#928322]"
              >
                Read article
                <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </article>

          <div className="js-blog-grid mt-14 md:mt-16">
            <h2 className="font-gilroy-bold text-[clamp(15px,1.6vw,21px)] tracking-[-0.01em] text-[#3f3f3f]">
              Popular Articles
            </h2>

            {visibleArticles.length ? (
              <>
                <div className="mt-6 grid gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
                  {visibleArticles.map((item) => (
                    <Link
                      key={item.instanceId}
                      to={articlePath(item.slug)}
                      className="js-blog-card group block"
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

                <nav
                  className="mt-14 flex justify-center gap-2"
                  aria-label="Popular articles pages"
                >
                  {Array.from({ length: pageCount }, (_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setPage(index)}
                      aria-label={`Go to page ${index + 1}`}
                      aria-current={page === index ? "page" : undefined}
                      className={`h-2.5 w-2.5 rounded-full border transition-colors ${
                        page === index
                          ? "border-[#D7BF00] bg-[#FFE624]"
                          : "border-[#d8d8d8] bg-white hover:border-[#b7b7b7]"
                      }`}
                    />
                  ))}
                </nav>
              </>
            ) : (
              <p className="mt-8 text-[13px] text-[#7b7b7b]">
                Nothing matched &ldquo;{query.trim()}&rdquo;.
              </p>
            )}
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
