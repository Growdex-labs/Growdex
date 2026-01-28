import React, { useState } from "react";
import FaqItem from "./FaqItem";
import FaqImage from "../../../assets/faq.png";

const faqList = [
  {
    question: "What platforms does Growdex support?",
    answer:
      "Growdex integrates with major advertising platforms including Google Ads, Meta (Facebook & Instagram), TikTok, LinkedIn, X (Twitter), and email marketing tools — all from one unified dashboard.",
  },
  {
    question: "Is Growdex for agencies or businesses?",
    answer:
      "Both. Growdex is built for individuals, businesses, marketing teams, and agencies managing one or multiple ad accounts.",
  },
  {
    question: "Do I need technical knowledge to use Growdex?",
    answer:
      "No. Growdex is designed to be intuitive and beginner-friendly, with AI guidance at every step.",
  },
  {
    question: "How does the AI optimization work?",
    answer:
      "Growdex analyzes campaign performance, identifies opportunities, suggests optimizations, and helps improve ROI automatically.",
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
      "We’re currently in beta. Join the waitlist to get early access at launch.",
  },
  {
    question: "How much will Growdex cost?",
    answer:
      "Pricing will be announced closer to launch, with flexible plans for all business sizes.",
  },
];

export default function FrequentlyAskedQuestions() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleToggle = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <section
      id="faqs"
      className="relative overflow-hidden py-16 md:py-24"
    >
      {/* ✅ Soft yellow glow (NOT a background fill) */}
      <div
        className="
          pointer-events-none
          absolute
          left-[100px]
          bottom-[600px]
          sm:left-[200px]
          sm:bottom-[200px]
          sm:h-[420px]
          sm:w-[520px]
          h-[350px]
          w-[250px]
          rounded-full
          bg-[#FFE27A]
          opacity-[0.65]
          blur-[160px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-12 md:grid-cols-[420px_1fr] md:gap-20">
          {/* LEFT COLUMN */}
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-medium text-gray-700">
              Ask us anything
            </div>

            <h2 className="text-4xl font-semibold leading-tight text-gray-900">
              Frequently Asked
              <br />
              Questions
            </h2>

            {/* Illustration */}
            <div className="relative hidden md:block">
              <img
                src={FaqImage}
                alt=""
                className="h-[280px] w-[280px] object-contain"
                draggable={false}
              />
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Be the first to use
                <br />
                Growdex
              </h3>
              <p className="max-w-[260px] text-sm leading-relaxed text-gray-600">
                Join the waitlist and get early access when we launch.
              </p>
              <a href="#waitlist-banner">
                <button className="rounded-lg bg-black px-6 py-3 text-xs font-semibold text-[#FFE95C] transition hover:bg-gray-800">
                  Join the waitlist
                </button>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN – FAQ LIST */}
          <div className="space-y-4">
            {faqList.map((item, index) => (
              <FaqItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndexes.includes(index)}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
