import { useEffect, useState } from "react";
import { ChevronDown, Loader } from "lucide-react";
import { useOnboardingStore } from "../store/onboardingStore";

export default function CompanySetup({ onNext }) {
  const { company, updateStepData, saveProgress, nextStep, options, fetchOptions } =
    useOnboardingStore();
    const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    fetchOptions();
  }, []);
    

  const handleContinue = async (e) => {
    e.preventDefault();
    if (
      !company.companyName ||
      !company.industry ||
      (company.industry === "other" && !company.customIndustry) ||
      !company.budget
    ) {
      alert("Please fill out all fields before continuing.");
      return;
    }
    try {
      await saveProgress();
      nextStep();
      onNext?.();
    } catch (err) {
      console.error(" Error saving company:", err);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form
      className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md space-y-4"
      onSubmit={handleContinue}
    >
      <h2 className="flex justify-center items-center font-bold text-2xl mb-2">
        Company Setup
      </h2>
      <p className="text-gray-500 text-start mb-4 text-[11px]">
        This will take a couple of minutes and will help us to get to know you better
      </p>

      {/* Company Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Company Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Company name"
          value={company.companyName}
          onChange={(e) =>
            updateStepData("company", { companyName: e.target.value })
          }
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none"
        />
      </div>

      {/* Industry */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Company Industry <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <select
            value={company.industry}
            onChange={(e) =>
              updateStepData("company", { industry: e.target.value })
            }
            className="w-full border border-gray-300 rounded-lg px-3 py-2 appearance-none focus:ring-2 focus:ring-black focus:outline-none"
          >
            <option value="">Select your industry</option>
            {options.industries.map((ind, idx) => (
              <option key={idx} value={ind.toLowerCase()}>
                {ind}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Custom Industry */}
      {company.industry === "other" && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Please specify <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your industry"
            value={company.customIndustry}
            onChange={(e) =>
              updateStepData("company", { customIndustry: e.target.value })
            }
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none"
          />
        </div>
      )}

      {/* Budget */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Monthly Ad Budget <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <select
            value={company.budget}
            onChange={(e) =>
              updateStepData("company", { budget: e.target.value })
            }
            className="w-full border border-gray-300 rounded-lg px-3 py-2 appearance-none focus:ring-2 focus:ring-black focus:outline-none"
          >
            <option value="">Select your budget</option>
            {options.budgets.map((b, idx) => (
              <option key={idx} value={b}>
                {b}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Continue */}
      <button
        type="submit"
        className="flex items-center justify-center gap-2 bg-black text-white w-full py-2 rounded-lg font-medium hover:bg-gray-800 transition"
          disabled={isProcessing}
      >
        {isProcessing ? (
    <Loader className="w-6 h-6 animate-spin mx-auto" />
  ) : (
    <>
              Continue <span className="text-lg">→</span>

      </>
  )}

      </button>
    </form>
  );
}
