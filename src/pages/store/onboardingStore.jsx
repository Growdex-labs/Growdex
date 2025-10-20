// store/onboardingStore.js
import { create } from "zustand";
import axios from "../../utils/axiosInstance";

const fallbackOptions = {
  industries: ["Technology", "Finance", "Healthcare", "Other"],
  budgets: ["$500", "$1,000", "$5,000+"],
};

export const useOnboardingStore = create((set, get) => ({
  step: 1,
  companyId: null,

  // ---- Data ----
  options: fallbackOptions,
  company: { companyName: "", industry: "", customIndustry: "", budget: "" },
  plan: {
    selectedPlan: null,
    billingCycle: "monthly",
    price: 0,
  },
  billing: { cardNumber: "", expiry: "", cvc: "" },
  socialAuth: { google: false, github: false },

  // ---- API ----
  fetchOptions: async () => {
    try {
      const res = await axios.get("/company-setup/options");
      set({ options: res.data });
    } catch (err) {
      console.warn("⚠️ Using fallback options:", err.message);
      set({ options: fallbackOptions });
    }
  },

  updateStepData: (stepName, fields) =>
    set((state) => ({
      [stepName]: { ...state[stepName], ...fields },
    })),

  setPlan: (plan) =>
    set((state) => ({
      plan: { ...state.plan, selectedPlan: plan, trial: plan.trial || false },
    })),

  setBillingCycle: (cycle) =>
    set((state) => ({
      plan: { ...state.plan, billingCycle: cycle },
    })),

  // ---- Backend persistence ----
  saveProgress: async () => {
    const { companyId, company, plan, billing, socialAuth } = get();

    const payload = {
      company: {
        ...company,
        industry:
          company.industry === "other"
            ? company.customIndustry
            : company.industry,
      },
      plan,
      billing,
      socialAuth,
    };

    let res;
    if (companyId) {
      res = await axios.put(`/company-setup/${companyId}`, payload);
    } else {
      res = await axios.post("/company-setup", payload);
      set({ companyId: res.data._id });
    }

    return res.data;
  },

  completeOnboarding: async () => {
    const res = await axios.patch(`/onboarding/complete`);
    return res.data;
  },

  // ---- Step navigation ----
  nextStep: () =>
    set((state) => {
      const newStep = state.step + 1;
      axios.put("/onboarding/step", { step: newStep }); // sync backend
      return { step: newStep };
    }),

  prevStep: () =>
    set((state) => {
      const newStep = state.step - 1;
      axios.put("/onboarding/step", { step: newStep });
      return { step: newStep };
    }),

  setStep: (step) => {
    set({ step });
    axios.put("/onboarding/step", { step }); // sync backend directly
  },
}));
