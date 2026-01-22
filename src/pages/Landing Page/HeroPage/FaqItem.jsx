import { ChevronDown, ChevronUp } from "lucide-react";

function FaqItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="rounded-2xl border border-gray-200/70 bg-white px-6 py-5 shadow-sm">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-6 text-left"
      >
        <h3 className="text-sm font-semibold text-gray-900 md:text-base">
          {question}
        </h3>
        <span className="text-gray-500">
          {isOpen ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </span>
      </button>

      {isOpen && (
        <p className="mt-3 text-sm text-gray-600 leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

export default FaqItem;
