import { useRef } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { topics, topicPath } from "./helpData.js";
import { articles as popularArticles, articlePath } from "./articleData.js";

gsap.registerPlugin(useGSAP, ScrollTrigger);



export default function HelpResources({ query = "" }) {
  const sectionRef = useRef(null);
  const term = query.trim().toLowerCase();

  const matches = (text) => !term || text.toLowerCase().includes(term);
  const visibleTopics = topics.filter(
    (topic) => matches(topic.title) || matches(topic.body),
  );
  const visibleArticles = popularArticles.filter((a) => matches(a.title));
  const noResults = !visibleTopics.length && !visibleArticles.length;

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
          .from(".js-help-topics-head", {
            autoAlpha: 0,
            y: 18,
            duration: 0.5,
          })
          .from(
            ".js-help-topic",
            {
              autoAlpha: 0,
              y: 24,
              duration: 0.5,
              stagger: { amount: 0.45, grid: [2, 3], from: "start" },
            },
            "-=0.25",
          );

        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".js-help-articles",
              start: "top 82%",
              once: true,
            },
            defaults: { ease: "power3.out" },
          })
          .from(".js-help-articles-head", {
            autoAlpha: 0,
            y: 18,
            duration: 0.5,
          })
          .from(
            ".js-help-article",
            { autoAlpha: 0, y: 24, duration: 0.5, stagger: 0.1 },
            "-=0.25",
          );
      });

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          ".js-help-topics-head, .js-help-topic, .js-help-articles-head, .js-help-article",
          { clearProps: "all" },
        );
      });

      return () => media.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="bg-white pb-16 pt-14 md:pb-24">
      <div className="mx-auto max-w-[1100px] px-6 md:px-12">
        <h2 className="js-help-topics-head font-gilroy-bold text-[clamp(16px,1.7vw,22px)] tracking-[-0.01em] text-[#3f3f3f]">
          Popular Topics
        </h2>

        {visibleTopics.length ? (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visibleTopics.map((topic) => (
              <Link
                key={topic.slug}
                to={topicPath(topic.slug)}
                className="js-help-topic group flex gap-4 rounded-[12px] border border-[#eaeaea] bg-white p-4 transition-shadow duration-300 hover:shadow-[0_12px_30px_rgba(60,60,60,.09)]"
              >
                <span
                  className={`flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-[12px] ${topic.tile}`}
                >
                  <img
                    src={topic.icon}
                    alt=""
                    aria-hidden="true"
                    className="h-6 w-6 object-contain"
                  />
                </span>
                <span className="min-w-0">
                  <span className="block font-gilroy-semibold text-[clamp(12px,1.05vw,14px)] text-[#2f2f2f]">
                    {topic.title}
                  </span>
                  <span className="mt-1.5 block text-[clamp(10px,0.9vw,12px)] leading-[1.5] text-[#7b7b7b]">
                    {topic.body}
                  </span>
                  <span className="mt-3 inline-flex items-center gap-0.5 text-[clamp(10px,0.85vw,11.5px)] text-[#3f3f3f] transition-colors group-hover:text-[#928322]">
                    Browse Articles
                    <ChevronRight className="h-3 w-3" />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        ) : null}

        <div className="js-help-articles mt-16 md:mt-20">
          <div className="js-help-articles-head flex items-center justify-between gap-4">
            <h2 className="font-gilroy-bold text-[clamp(16px,1.7vw,22px)] tracking-[-0.01em] text-[#3f3f3f]">
              Popular Articles
            </h2>
            <a
              href="/blog"
              className="inline-flex shrink-0 items-center gap-2 rounded-[8px] border border-[#dcdcdc] bg-white px-4 py-2 font-gilroy-medium text-[clamp(10px,0.9vw,12px)] text-[#3f3f3f] transition-colors hover:border-[#928322]"
            >
              View All Articles
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {visibleArticles.length ? (
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {visibleArticles.map((article) => (
                <Link
                  key={article.slug}
                  to={articlePath(article.slug)}
                  className="js-help-article group block"
                >
                  {/* Placeholder tile until article artwork is supplied. */}
                  <span
                    className="block aspect-[16/11] w-full rounded-[10px] bg-[#E5E5E5] transition-transform duration-300 group-hover:-translate-y-1"
                    aria-hidden="true"
                  />
                  <span className="mt-3 block font-gilroy-semibold text-[clamp(11px,0.95vw,13px)] leading-snug text-[#2f2f2f]">
                    {article.title}
                  </span>
                  <span className="mt-1.5 inline-flex items-center gap-0.5 text-[clamp(10px,0.85vw,11.5px)] text-[#7b7b7b] transition-colors group-hover:text-[#928322]">
                    Read article
                    <ChevronRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          ) : null}
        </div>

        {noResults ? (
          <p className="mt-10 text-center text-[13px] text-[#7b7b7b]">
            Nothing matched &ldquo;{query.trim()}&rdquo;. Try a different term,
            or{" "}
            <a href="#still-need-help" className="underline">
              ask our support team
            </a>
            .
          </p>
        ) : null}
      </div>
    </section>
  );
}
