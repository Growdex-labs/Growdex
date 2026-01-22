import React, { useState } from "react";
import FaqItem from "./FaqItem";
import FaqImage from "../../../assets/faq.png";

const faqList = [
  {
    question: "What platforms does Growdex support?",
    answer:
      "Growdex integrates with major advertising platforms including Google Ads, Meta (Facebook & Instagram), TikTok, LinkedIn, X (Twitter), and email marketing tools. All managed from one unified dashboard.",
  },
  {
    question: "Is Growdex for agencies or businesses?",
    answer:
      "Both! Growdex is built for small business owners, marketing teams, agencies, and anyone who runs digital ads. Whether you manage one account or multiple clients, we've got you covered.",
  },
  {
    question: "Do I need technical knowledge to use Growdex?",
    answer:
      "Not at all. Growdex is designed to be user-friendly with AI-powered guidance. Our platform walks you through campaign creation, budget setup, and optimization — no technical expertise required.",
  },
  {
    question: "How does the AI optimization work?",
    answer:
      "Growdex analyzes campaign data, identifies underperforming ads, suggests budget adjustments, generates copy variations, and provides actionable recommendations — helping you get better results faster.",
  },
  {
    question: "Will Growdex run ads automatically for me?",
    answer:
      "You're always in control. Growdex provides AI-powered recommendations and automation options, but you decide when and how to launch campaigns, adjust budgets, or implement changes.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Absolutely. We use enterprise-grade encryption and follow strict security protocols. Your campaign data, payment information, and client details are fully protected.",
  },
  {
    question: "When will Growdex be available?",
    answer:
      "We're currently in beta development. Join the waitlist to get early access and be among the first to experience Growdex when we launch.",
  },
  {
    question: "How much will Growdex cost?",
    answer:
      "Pricing will be announced closer to launch. We're designing affordable plans for businesses of all sizes — from solopreneurs to agencies managing multiple clients.",
  },
];

function FrequentlyAskedQuestions() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleToggle = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="relative overflow-hidden bg-gray-50 py-20 md:py-24">
      {/* Soft yellow wash behind the left column (like the design) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[52%] bg-gradient-to-b from-transparent via-amber-100/50 to-white" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-14 md:grid-cols-[420px_1fr] md:gap-16 items-start">
          {/* Left side */}
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 text-[11px] font-medium text-gray-700">
              Ask us anything
            </div>

            <h2 className="text-4xl font-semibold text-gray-900 leading-tight">
              Frequently Asked
              <br />
              Questions
            </h2>

            {/* Illustration */}
            <div className="relative flex min-h-[340px] items-center justify-start">
              <img
                src={FaqImage}
                alt=""
                className="h-[280px] w-[280px] object-contain"
                draggable={false}
              />
            </div>

            {/* CTA */}
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-gray-900 leading-snug">
                Be the first to use
                <br />
                Growdex
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-[260px]">
                Join the waitlist and get early access when we launch.
              </p>
              <a href="#waitlist-banner" className="inline-block">
                <button className="rounded-full bg-black px-5 py-2.5 text-xs font-medium text-white hover:bg-gray-800 transition-colors">
                  Join the waitlist
                </button>
              </a>
            </div>
          </div>

          {/* Right side - FAQ list */}
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

export default FrequentlyAskedQuestions;
