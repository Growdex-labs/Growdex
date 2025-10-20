import { useSubscriptionStore } from "../store/subscriptionStore";

const SubscriptionPage = () => {
  const { plan, billingCycle, setPlan, setBillingCycle, subscribe } = useSubscriptionStore();

  const plans = [
    { id: "starter", name: "Starter", priceMonthly: 15, priceAnnual: 150, desc: "Basic features" },
    { id: "pro", name: "Pro", priceMonthly: 30, priceAnnual: 300, desc: "Advanced features" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Choose Your Plan</h1>

      <div className="flex flex-wrap gap-6 justify-center">
        {plans.map((p) => (
          <div
            key={p.id}
            onClick={() => setPlan(p.id)}
            className={`border rounded-xl p-6 w-64 cursor-pointer ${
              plan === p.id ? "border-green-500 shadow-xl" : "border-gray-300"
            }`}
          >
            <h2 className="text-xl font-bold mb-2">{p.name}</h2>
            <p className="text-gray-500 mb-4">{p.desc}</p>
            <p className="text-2xl font-semibold">
              ${billingCycle === "monthly" ? p.priceMonthly : p.priceAnnual} / {billingCycle}
            </p>
            <p className="text-sm mt-2 text-gray-400">7-day free trial, card required</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            checked={billingCycle === "monthly"}
            onChange={() => setBillingCycle("monthly")}
          />
          Monthly
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            checked={billingCycle === "annual"}
            onChange={() => setBillingCycle("annual")}
          />
          Annual
        </label>
      </div>

      <button
        onClick={subscribe}
        className="mt-6 px-6 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition"
        disabled={!plan}
      >
        Continue to Payment
      </button>
    </div>
  );
};
