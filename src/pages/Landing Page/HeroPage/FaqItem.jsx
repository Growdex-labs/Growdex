import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

// Two skins over identical behaviour, so the accordion interaction is the same
// wherever it appears.
const tones = {
  light: {
    card: "bg-white",
    question: "text-[#1f1f1f]",
    chevron: "text-[#6b6b6b]",
    answer: "text-[#4a4a4a]",
    rule: null,
  },
  dark: {
    card: "bg-[#232323]",
    question: "text-white",
    chevron: "text-[#8f8f8f]",
    answer: "text-[#9a9a9a]",
    rule: "bg-white/10",
  },
};

function FaqItem({ question, answer, isOpen, onClick, tone = "light" }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);
  const skin = tones[tone] ?? tones.light;

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        setIsAnimating(true);
        setContentHeight(contentRef.current.scrollHeight);
      } else {
        setContentHeight(0);
        const timer = setTimeout(() => setIsAnimating(false), 300);
        return () => clearTimeout(timer);
      }
    }
  }, [isOpen]);

  return (
    <div className={`js-faq-item overflow-hidden rounded-[10px] ${skin.card}`}>
      <button
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 px-5 pb-3 pt-4 text-left"
      >
        <h3
          className={`font-gilroy-semibold text-[clamp(13px,1.15vw,15px)] leading-snug ${skin.question}`}
        >
          {question}
        </h3>
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform duration-300 ${skin.chevron} ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: isAnimating || isOpen ? `${contentHeight}px` : "0px",
          overflow: "hidden",
          transition: "max-height 0.3s ease-in-out",
        }}
      >
        {skin.rule ? (
          <div className={`mx-5 mb-3 h-px ${skin.rule}`} aria-hidden="true" />
        ) : null}
        <p
          className={`px-5 pb-4 font-gilroy-regular text-[clamp(10px,0.95vw,12.5px)] leading-[1.55] ${skin.answer}`}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

export default FaqItem;
