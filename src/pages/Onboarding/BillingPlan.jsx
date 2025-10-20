// Without 7days free trial plan
// import React from "react";
// import { useOnboardingStore } from "../store/onboardingStore";

// const BillingPlan = ({ onNext, onBack }) => {
//   const { plan, updateStepData } = useOnboardingStore();
//   const billingCycle = plan.billingCycle || "monthly";

//   const toggleCycle = (cycle) => {
//     updateStepData("plan", { billingCycle: cycle });
//   };

//   const displayPrice =
//     billingCycle === "monthly"
//       ? plan.selectedPlan?.monthly
//       : plan.selectedPlan?.annually;

//       const getNextBillingDate = (cycle) => {
//   const today = new Date();
//   const next = new Date(today);

//   if (cycle === "monthly") {
//     next.setMonth(today.getMonth() + 1);
//   } else if (cycle === "annually") {
//     next.setFullYear(today.getFullYear() + 1);
//   }

//   return next.toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });
// };


//   return (
//     <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto gap-8 p-6">
//       {/* LEFT SIDE - Plan Card */}
//       <div className="w-full lg:w-1/2">
//         {/* Toggle */}
//         <div className="flex items-center gap-3 mb-6">
//           <div className="bg-gray-100 rounded-full p-1 flex">
//             <button
//               onClick={() => toggleCycle("monthly")}
//               className={`px-4 py-2 rounded-full text-sm font-medium ${
//                 billingCycle === "monthly"
//                   ? "bg-black text-white"
//                   : "text-gray-600"
//               }`}
//             >
//               Monthly
//             </button>
//             <button
//               onClick={() => toggleCycle("annually")}
//               className={`px-4 py-2 rounded-full text-sm font-medium ${
//                 billingCycle === "annually"
//                   ? "bg-black text-white"
//                   : "text-gray-600"
//               }`}
//             >
//               Annually
//             </button>
//           </div>
//         </div>

//         {/* Plan Card */}
//         <div className="bg-white rounded-2xl shadow-sm border p-6">
//           {/* <h3 className="text-lg font-semibold">
//             {plan.selectedPlan?.title} Free Trial
//           </h3>
//           <p className="text-gray-500 text-sm mt-1">
//             Get started with your {plan.selectedPlan?.title} plan free for 14 days.
//           </p> */}
//           {/* <p className="mt-2 font-bold text-xl">$0.00</p> */}

//           {/* <div className="mt-6 border-t pt-4"> */}
//           <div className="">
//             <h3 className="text-lg font-semibold">Paid Plan after Trial</h3>
//             <p className="text-gray-500 text-sm mt-1">
//               Cancel anytime! Price is adjusted based on your country
//             </p>
//             <p className="mt-2 font-bold text-xl">
//               ${displayPrice} /mo
//             </p>
//           </div>

//           {/* Features */}
//           <ul className="mt-6 space-y-2 text-gray-600 text-sm">
//             {plan.selectedPlan?.features?.map((feature, idx) => (
//               <li key={idx}>✔ {feature}</li>
//             ))}
//           </ul>

//           {/* Back link */}
//           <button
//             onClick={onBack}
//             className="mt-6 text-gray-600 hover:text-black text-sm"
//           >
//             ← Select a different plan
//           </button>
//         </div>
//       </div>

//       {/* RIGHT SIDE - Payment Confirmation */}
//       <div className="w-full lg:w-1/2">
//         <div className="bg-white rounded-2xl shadow-sm border p-6">
//           <h2 className="font-semibold mb-4">Confirm your payment details</h2>

// {/* Due Today */}
// <div className="flex justify-between items-center bg-gray-100 rounded-lg px-4 py-3">
//   <span className="font-medium">Due Today</span>
//   <span className="font-medium">
//     {plan.freeTrial
//       ? "$0.00"
//       : billingCycle === "monthly"
//       ? `$${plan.selectedPlan?.monthly}`
//       : `$${plan.selectedPlan?.annually}`}
//   </span>
// </div>


//           {/* Details */}
//           <div className="mt-4 text-sm text-gray-600 space-y-3">
//             <p> Your {plan.selectedPlan?.title} free trial starts today.</p>
//             <p>
//                You will be billed{" "}
//               <span className="font-semibold">
//                 ${displayPrice} / month
//               </span>{" "}
//               starting from{" "}
//              <span className="font-semibold">{getNextBillingDate(billingCycle)}</span>

//             </p>
//           </div>

//           {/* Footer */}
//           <div className="flex justify-between items-center mt-6">
//             <button
//               onClick={onNext}
//               className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800"
//             >
//               Add Billing Information
//             </button>
//             <button className="text-gray-400 hover:text-gray-600 text-sm">
//               Skip
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BillingPlan;



// // With 7days free trial plan
// import React from "react";
// import { useOnboardingStore } from "../store/onboardingStore";

// const BillingPlan = ({ onNext, onBack }) => {
//   const { plan, updateStepData } = useOnboardingStore();
//   const billingCycle = plan.billingCycle || "monthly";

//   const toggleCycle = (cycle) => {
//     updateStepData("plan", { billingCycle: cycle });
//   };

// // const dueToday = plan.selectedPlan?.trial ? 0 : billingCycle === "monthly"
// //   ? plan.selectedPlan?.monthly
// //   : plan.selectedPlan?.annually;

// // const nextBillingAmount = billingCycle === "monthly"
// //   ? plan.selectedPlan?.monthly
// //   : plan.selectedPlan?.annually;




//     // Actual plan price based on billing cycle
// const displayPrice =
//   billingCycle === "monthly"
//     ? plan.selectedPlan?.monthly
//     : plan.selectedPlan?.annually;

// // Due today amount (0 if trial, otherwise actual price)
// const dueToday = plan.selectedPlan?.trial ? 0 : displayPrice;

// // Next billing amount after trial
// const nextBillingAmount = displayPrice;




// const getNextBillingDate = (cycle, hasTrial) => {
//   const today = new Date();
//   const next = new Date(today);

//   if (hasTrial) {
//     next.setDate(today.getDate() + 7);
//   } else {
//     if (cycle === "monthly") next.setMonth(today.getMonth() + 1);
//     else if (cycle === "annually") next.setFullYear(today.getFullYear() + 1);
//   }

//   return next.toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });
// };



//   return (
//     <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto gap-8 p-6">
//       {/* LEFT SIDE - Plan Card */}
//       <div className="w-full lg:w-1/2">
//         {/* Toggle */}
//         <div className="flex items-center gap-3 mb-6">
//           <div className="bg-gray-100 rounded-full p-1 flex">
//             <button
//               onClick={() => toggleCycle("monthly")}
//               className={`px-4 py-2 rounded-full text-sm font-medium ${
//                 billingCycle === "monthly"
//                   ? "bg-black text-white"
//                   : "text-gray-600"
//               }`}
//             >
//               Monthly
//             </button>
//             <button
//               onClick={() => toggleCycle("annually")}
//               className={`px-4 py-2 rounded-full text-sm font-medium ${
//                 billingCycle === "annually"
//                   ? "bg-black text-white"
//                   : "text-gray-600"
//               }`}
//             >
//               Annually
//             </button>
//           </div>
//         </div>

//         {/* Plan Card */}
//         <div className="bg-white rounded-2xl shadow-sm border p-6">
//           {/* <h3 className="text-lg font-semibold">
//             {plan.selectedPlan?.title} Free Trial
//           </h3>
//           <p className="text-gray-500 text-sm mt-1">
//             Get started with your {plan.selectedPlan?.title} plan free for 14 days.
//           </p> */}
//           {/* <p className="mt-2 font-bold text-xl">$0.00</p> */}

//           {/* <div className="mt-6 border-t pt-4"> */}
//           <div className="">
//           <h3 className="text-lg font-semibold">
//   {plan.selectedPlan?.trial
//     ? "Paid Plan after Trial"
//     : "Plan Details"}
// </h3>

//             <p className="text-gray-500 text-sm mt-1">
//               Cancel anytime! Price is adjusted based on your country
//             </p>
//            <p className="mt-2 font-bold text-xl">
//   ${displayPrice} {billingCycle === "monthly" ? "/mo" : "/yr"}
// </p>

//           </div>

//           {/* Features */}
//           <ul className="mt-6 space-y-2 text-gray-600 text-sm">
//             {plan.selectedPlan?.features?.map((feature, idx) => (
//               <li key={idx}>✔ {feature}</li>
//             ))}
//           </ul>

//           {/* Back link */}
//           <button
//             onClick={onBack}
//             className="mt-6 text-gray-600 hover:text-black text-sm"
//           >
//             ← Select a different plan
//           </button>
//         </div>
//       </div>

//       {/* RIGHT SIDE - Payment Confirmation */}
//       <div className="w-full lg:w-1/2">
//         <div className="bg-white rounded-2xl shadow-sm border p-6">
//           <h2 className="font-semibold mb-4">Confirm your payment details</h2>

// {/* Due Today */}
// <div className="flex justify-between items-center bg-gray-100 rounded-lg px-4 py-3">
//   <span className="font-medium">Due Today</span>
//   <span className="font-medium">${dueToday}.00</span>
// </div>

// {/* Details */}
// <div className="mt-4 text-sm text-gray-600 space-y-3">
//   {plan.selectedPlan?.trial ? (
//   <>
//   <p>Your {plan.selectedPlan?.title} free trial starts today.</p>
//   <p>
//     You will be billed{" "}
//     <span className="font-semibold">
//       ${nextBillingAmount} {billingCycle === "monthly" ? "/ month" : "/ year"}
//     </span>{" "}
//     starting from{" "}
//     <span className="font-semibold">
//       {getNextBillingDate(billingCycle, plan.selectedPlan?.trial)}
//     </span>
//   </p>
// </>

//   ) : (
//     <p>
//       You will be billed{" "}
//     <span className="font-semibold">
//       ${nextBillingAmount} {billingCycle === "monthly" ? "/ month" : "/ year"}
//     </span>{" "} today
//       and every {billingCycle === "monthly" ? "month" : "year"} after.
//     </p>
//   )}
// </div>



//           {/* Footer */}
//           <div className="flex justify-between items-center mt-6">
//             <button
//               onClick={onNext}
//               className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800"
//             >
//               Add Billing Information
//             </button>
//             <button className="text-gray-400 hover:text-gray-600 text-sm">
//               Skip
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BillingPlan;


// billing information added
import React, { useState } from "react";

import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js";
import { useOnboardingStore } from "../store/onboardingStore";
import { Loader } from "lucide-react";
import axiosInstance from "../../utils/axiosInstance";
import { useAuthStore } from "../store/authStore";

const BillingPlan = ({ onNext, onBack, onSubmit }) => {
  const { plan, updateStepData } = useOnboardingStore();
  const billingCycle = plan.billingCycle || "monthly";
  const stripe = useStripe();
  const elements = useElements();
  const [showCardForm, setShowCardForm] = useState(false);

  const toggleCycle = (cycle) => {
    updateStepData("plan", { billingCycle: cycle });
  };

  const displayPrice =
    billingCycle === "monthly"
      ? plan.selectedPlan?.monthly
      : plan.selectedPlan?.annually;

  const dueToday = plan.selectedPlan?.trial ? 0 : displayPrice;
  const nextBillingAmount = displayPrice;
  const [errorMessage, setErrorMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const { user } = useAuthStore();
  const getNextBillingDate = (cycle, hasTrial) => {
    const today = new Date();
    const next = new Date(today);
    if (hasTrial) next.setDate(today.getDate() + 7);
    else if (cycle === "monthly") next.setMonth(today.getMonth() + 1);
    else next.setFullYear(today.getFullYear() + 1);

    return next.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

 const handleCheckout = async () => {
    try {
      setIsProcessing(true);
      const res = await axiosInstance.post("/stripe/checkout-session", {
        email: user?.email,
        plan: plan.selectedPlan.id,
        billingCycle: billingCycle,
      });

      const { checkoutUrl } = res.data;
      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      } else {
        setErrorMessage("Failed to get Stripe checkout URL");
      }
    } catch (err) {
      console.error("Checkout session error:", err);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };


  const inputStyle = {
    style: {
      base: {
        fontSize: "16px",
        color: "#000",
        "::placeholder": { color: "#999" },
      },
    },
  };

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto gap-8 p-6">
      {/* LEFT SIDE - Plan Card */}
      <div className="w-full lg:w-1/2">
        {/* Toggle */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-gray-100 rounded-full p-1 flex">
            <button
              onClick={() => toggleCycle("monthly")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                billingCycle === "monthly" ? "bg-black text-white" : "text-gray-600"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => toggleCycle("annually")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                billingCycle === "annually" ? "bg-black text-white" : "text-gray-600"
              }`}
            >
              Annually
            </button>
          </div>
        </div>

        {/* Plan Card */}
        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <h3 className="text-lg font-semibold">
            {plan.selectedPlan?.trial ? "Paid Plan after Trial" : "Plan Details"}
          </h3>
          <p className="text-gray-500 text-sm mt-1">
            Cancel anytime! Price is adjusted based on your country
          </p>
          <p className="mt-2 font-bold text-xl">
            ${displayPrice} {billingCycle === "monthly" ? "/mo" : "/yr"}
          </p>
          <ul className="mt-6 space-y-2 text-gray-600 text-sm">
            {plan.selectedPlan?.features?.map((feature, idx) => (
              <li key={idx}>✔ {feature}</li>
            ))}
          </ul>
          <button
            onClick={onBack}
            className="mt-6 text-gray-600 hover:text-black text-sm"
          >
            ← Select a different plan
          </button>
        </div>
      </div>

      {/* RIGHT SIDE - Payment Confirmation */}
      <div className="w-full lg:w-1/2">
        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <h2 className="font-semibold mb-4">Confirm your payment details</h2>

          <div className="flex justify-between items-center bg-gray-100 rounded-lg px-4 py-3">
            <span className="font-medium">Due Today</span>
            <span className="font-medium">${dueToday}.00</span>
          </div>

          <div className="mt-4 text-sm text-gray-600 space-y-3">
            {plan.selectedPlan?.trial ? (
              <>
                <p>Your {plan.selectedPlan?.title} free trial starts today.</p>
                <p>
                  You will be billed{" "}
                  <span className="font-semibold">
                    ${nextBillingAmount} {billingCycle === "monthly" ? "/ month" : "/ year"}
                  </span>{" "}
                  starting from{" "}
                  <span className="font-semibold">
                    {getNextBillingDate(billingCycle, plan.selectedPlan?.trial)}
                  </span>
                </p>
              </>
            ) : (
              <p>
                You will be billed{" "}
                <span className="font-semibold">
                  ${nextBillingAmount} {billingCycle === "monthly" ? "/ month" : "/ year"}
                </span>{" "}
                today and every {billingCycle === "monthly" ? "month" : "year"} after.
              </p>
            )}
          </div>

          {/* Footer */}
          {/* <div className="flex flex-col gap-3 mt-6">
            {!showCardForm ? (
              <button
                onClick={() => setShowCardForm(true)}
                className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800"
              >
                Add Billing Information
              </button>
            ) : (
           <form onSubmit={handleSubmit}>
      <div className="mb-4 border p-2 rounded">
        <label>Card Number</label>
<CardNumberElement
  options={inputStyle}
  onChange={(e) => {
    if (e.error) setErrorMessage(e.error.message);
    else setErrorMessage("");
  }}
/>
      </div>
      {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}

      <div className="mb-4 flex gap-2">
        <div className="flex-1 border p-2 rounded">
          <label>Expiry</label>
<CardExpiryElement
  options={inputStyle}
  onChange={(e) => {
    if (e.error) setErrorMessage(e.error.message);
    else setErrorMessage("");
  }}
/>
        </div>
        <div className="flex-1 border p-2 rounded">
          <label>CVC</label>
         <CardCvcElement
  options={inputStyle}
  onChange={(e) => {
    if (e.error) setErrorMessage(e.error.message);
    else setErrorMessage("");
  }}
/>
        </div>
      </div>
<button
  onClick={handleSubmit}
  className="bg-black text-white px-6 py-2 rounded font-semibold w-full flex items-center justify-center gap-2"
  disabled={isProcessing}
>
  {isProcessing ? <Loader className="w-6 h-6 animate-spin mx-auto" /> : "Pay"}
</button>


    </form>
            )}
            <button className="text-gray-400 hover:text-gray-600 text-sm">Skip</button>
          </div> */}

           <div className="flex flex-col gap-3 mt-6">
            <button
              onClick={handleCheckout}
              className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 flex items-center justify-center gap-2"
              disabled={isProcessing}
            >
              {isProcessing ? (
                <Loader className="w-6 h-6 animate-spin" />
              ) : (
                "Add Billing Information"
              )}
            </button>
            <button className="text-gray-400 hover:text-gray-600 text-sm">
              Skip
            </button>
          </div>
          {errorMessage && <p className="text-red-500 text-sm mt-4">{errorMessage}</p>}
        
        </div>
      </div>
    </div>
  );
};

export default BillingPlan;
