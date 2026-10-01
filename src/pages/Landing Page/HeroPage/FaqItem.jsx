import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, useRef, useEffect } from "react";

function FaqItem({ question, answer, isOpen, onClick }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

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
    <div className="rounded-2xl border border-gray-200/70 bg-white shadow-sm overflow-hidden">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
      >
        <h3 className="text-sm font-semibold text-gray-900 md:text-base">
          {question}
        </h3>
        <span
          className={`text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          <ChevronDown className="h-5 w-5" />
        </span>
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: isAnimating || isOpen ? `${contentHeight}px` : "0px",
          overflow: "hidden",
          transition: "max-height 0.3s ease-in-out",
        }}
      >
        <div className="px-6 py-4 border-t border-gray-100">
          <p className="text-sm text-gray-600 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default FaqItem;
