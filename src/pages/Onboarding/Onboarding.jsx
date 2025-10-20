// import React, { useState } from "react";
// import CompanySetup from "../Onboarding/CompanySetup";
// import BillingPlan from "../Onboarding/BillingPlan";
// import SelectPlan from "../Onboarding/selectPlan"; // ✅ fixed casing
// import SetupPassword from "../Onboarding/SetUpPassword";
// import SocialAuth from "../Onboarding/SocialAuth";
// import background from "../../assets/Select Plan.png";

// const steps = [
//   { id: 1, title: "Company Setup", component: CompanySetup },
//   { id: 2, title: "Select Plan", component: SelectPlan },
//   { id: 3, title: "Billing Plan", component: BillingPlan },
//   { id: 4, title: "Social Auth", component: SocialAuth },
//   { id: 5, title: "Setup Password", component: SetupPassword },
// ];

// const Onboarding = () => {
//   const [step, setStep] = useState(1);
//   const StepComponent = steps[step - 1].component;

//   const handleNext = (data) => {
//     console.log("Step data:", data); // you can pass data back from child
//     if (step < steps.length) {
//       setStep(step + 1);
//     } else {
//       console.log("✅ Onboarding completed!");
//     }
//   };

//   return (
//     <div
//       className="flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-yellow-50 relative"
//       style={{ backgroundImage: `url(${background})` }}
//     >
//       {/* Stepper Top-Right */}
//       <div className="absolute top-6 right-6 flex items-center gap-3">
//         <div className="flex items-center gap-2">
//           {steps.map((s, index) => (
//             <div key={s.id} className="flex items-center gap-2">
//               <div
//                 className={`flex items-center justify-center rounded-full border w-7 h-7 text-sm font-medium
//                 ${
//                   step === s.id
//                     ? "bg-black text-white"
//                     : step > s.id
//                     ? "bg-black text-white w-2 h-2"
//                     : "bg-white border-gray-300 text-gray-400"
//                 }`}
//               >
//                 {step === s.id ? s.id : step > s.id ? "" : s.id}
//               </div>
//               {index < steps.length - 1 && (
//                 <span className="w-6 h-px bg-gray-300" />
//               )}
//             </div>
//           ))}
//         </div>
//         <p className="text-sm font-medium">{steps[step - 1].title}</p>
//       </div>

//       {/* Card */}
    //   <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md">
//         <h1 className="text-2xl font-bold text-center mb-2">
//           {steps[step - 1].title}
//         </h1>
        // <p className="text-gray-500 text-center mb-6 text-sm">
        //   {step === 1 &&
        //     "This will take a couple of minutes and will help us to get to know you better"}
//           {step === 2 && "Choose the plan that works best for your business"}
//           {step === 3 && "Invite team members to collaborate with you"}
//           {step === 4 && "Secure your account with Social Login"}
//           {step === 5 && "Set up your password to finish onboarding"}
//         </p>

//         {/* Render Step Component */}
//         <StepComponent onNext={handleNext} />
//       </div>
//     </div>
//   );
// };

// export default Onboarding;

import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CompanySetup from "../Onboarding/CompanySetup";
import BillingPlan from "../Onboarding/BillingPlan";
import SelectPlan from "../Onboarding/SelectPlan";
import SetupPassword from "../Onboarding/SetUpPassword";
import SocialAuth from "../Onboarding/SocialAuth";
import background from "../../assets/Select Plan.png";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Loader } from "lucide-react";


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);



const Onboarding = () => {
  const [step, setStep] = useState(1);

const [loading, setLoading] = useState(true); // New
  const location = useLocation();



  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sessionId = params.get("session_id");
    const queryStep = parseInt(params.get("step"));

 
  const verifyPayment = async () => {
    if (sessionId) {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/stripe/verify-session?session_id=${sessionId}`
        );
        if (res.data.success) {
          // ✅ After successful payment, continue where queryStep says or default to step 4
          setStep(queryStep || 4);
        } else {
          alert("Payment not completed. Please try again.");
          setStep(3);
        }
      } catch (err) {
        console.error("Stripe verify error:", err);
        setStep(3);
      }
    } else if (queryStep) {
      setStep(queryStep);
    } else {
      setStep(1); // ✅ always start from Company Setup if nothing else
    }

    setLoading(false);
  };

  verifyPayment();
}, [location.search]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
<Loader/>
      </div>
    );
  }

 
  const handleNext = (data) => {
    console.log("Step data:", data);

     //  Support Skip-to-Step
    if (data?.skipToStep) {
      setStep(data.skipToStep);
      return;
    }

    if (step < steps.length) {
      setStep(step + 1);
    } else {
      console.log(" Onboarding completed!");
    }
  };
  //  Stripe payment handler
  const handlePaymentMethod = async (paymentMethodId) => {
    console.log("Stripe PaymentMethod ID:", paymentMethodId);

    // TODO: Call your backend to create subscription / attach payment method
    // await api.post("/subscribe", { paymentMethodId });

    // Move to next step
    setStep(step + 1);
  };


  const steps = [
  { id: 1,  component: (props) => <CompanySetup {...props} embedded /> },
  { id: 2, component: SelectPlan },
  { 
    id: 3, 
    component: (props) => (
      <Elements stripe={stripePromise}>
         <BillingPlan {...props} onSubmit={handlePaymentMethod} />
      </Elements>
    ),
  },
  { id: 4, title: "Social Auth", component: SocialAuth },
  { id: 5, title: "Setup Password", component: SetupPassword },
];
 const StepComponent = steps[step - 1].component;



  return (
<div
  className="flex items-center justify-center min-h-screen bg-no-repeat bg-cover bg-center relative"
  style={{ backgroundImage: `url(${background})` }}
>

      {/* Stepper Top-Right */}
      <div className="absolute top-6 right-6 flex items-center gap-3">
        <div className="flex items-center gap-2">
          {steps.map((s, index) => (
            <div key={s.id} className="flex items-center gap-2">
            <div
  onClick={() => {
    if (s.id < step) setStep(s.id); // ✅ only allow going back
  }}
  className={`flex items-center justify-center rounded-full border w-7 h-7 text-sm font-medium cursor-pointer transition
  ${step === s.id 
    ? "bg-black text-white" 
    : step > s.id 
      ? "bg-black text-white w-2 h-2 hover:opacity-80" 
      : "bg-white border-gray-300 text-gray-400"
  }`}
>
  {step === s.id ? s.id : step > s.id ? "" : s.id}
</div>

              {index < steps.length - 1 && <span className="w-6 h-px bg-gray-300" />}
            </div>
          ))}
        </div>
        <p className="text-sm font-medium">{steps[step - 1].title}</p>
      </div>

      {/* Card */}
   
        <h1 className="text-2xl font-bold text-center mb-2">
          {steps[step - 1].title}
        </h1>
        <p className="text-gray-500 text-center mb-6 text-lg">
       
          {/* {step === 2 && "Choose the plan that works best for your business"} */}
          {/* {step === 3 && "Invite team members to collaborate with you"} */}
          {step === 4 && "Secure your account with Social Login"}
          {step === 5 && "Set up your password to finish onboarding"}
        </p>

        {/* Render Step Component */}

  <StepComponent onNext={handleNext} onBack={() => setStep(step - 1)} />


    </div>
  );
};

export default Onboarding;
