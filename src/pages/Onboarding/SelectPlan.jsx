// // // // import React, { useState } from "react";
// // // // import { motion, AnimatePresence } from "framer-motion";
// // // // import { Check, X } from "lucide-react";

// // // // const plans = [
// // // //   {
// // // //     id: "basic",
// // // //     title: "Basic",
// // // //     desc: "Best for personal use.",
// // // //     price: 49,
// // // //     features: [
// // // //       "Employee directory",
// // // //       "Task management",
// // // //       "File storage",
// // // //       "Reporting and analytics",
// // // //       "Extra feature A",
// // // //       "Extra feature B",
// // // //     ],
// // // //   },
// // // //   {
// // // //     id: "enterprise",
// // // //     title: "Enterprise",
// // // //     desc: "For large teams & corporations.",
// // // //     price: 90,
// // // //     features: [
// // // //       "Employee directory",
// // // //       "Task management",
// // // //       "File storage",
// // // //       "Reporting and analytics",
// // // //       "Advanced analytics",
// // // //       "Priority support",
// // // //     ],
// // // //   },
// // // //   {
// // // //     id: "business",
// // // //     title: "Business",
// // // //     desc: "Best for Business use.",
// // // //     price: 300,
// // // //     features: [
// // // //       "Employee directory",
// // // //       "Task management",
// // // //       "File storage",
// // // //       "Reporting and analytics",
// // // //       "Dedicated account manager",
// // // //       "Custom integrations",
// // // //     ],
// // // //   },
// // // // ];

// // // // const SelectPlan = ({ onNext, onBack }) => {
// // // //   const [billingCycle, setBillingCycle] = useState("monthly");
// // // //   const [selectedPlan, setSelectedPlan] = useState(null);
// // // //   const [modalPlan, setModalPlan] = useState(null);

// // // //   const calculatePrice = (price) => {
// // // //     if (billingCycle === "annually") {
// // // //       return ((price * 12 * 0.65) / 12).toFixed(2); // 35% off
// // // //     }
// // // //     return price.toFixed(2);
// // // //   };

// // // //   return (
// // // //     <div className="w-full flex flex-col items-center">
// // // //       {/* Billing Toggle */}
// // // //       <div className="flex items-center gap-2 mb-8">
// // // //         <button
// // // //           className={`px-4 py-2 rounded-lg text-sm font-medium ${
// // // //             billingCycle === "monthly"
// // // //               ? "bg-black text-white"
// // // //               : "bg-gray-200 text-gray-600"
// // // //           }`}
// // // //           onClick={() => setBillingCycle("monthly")}
// // // //         >
// // // //           Monthly
// // // //         </button>
// // // //         <button
// // // //           className={`px-4 py-2 rounded-lg text-sm font-medium ${
// // // //             billingCycle === "annually"
// // // //               ? "bg-black text-white"
// // // //               : "bg-gray-200 text-gray-600"
// // // //           }`}
// // // //           onClick={() => setBillingCycle("annually")}
// // // //         >
// // // //           Annually <span className="ml-1 text-green-600">35% off</span>
// // // //         </button>
// // // //       </div>

// // // //       {/* Plans */}
// // // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
// // // //         {plans.map((plan) => (
// // // //           <div
// // // //             key={plan.id}
// // // //             className={`rounded-2xl border p-6 flex flex-col shadow-md ${
// // // //               plan.id === "enterprise"
// // // //                 ? "bg-gradient-to-b from-black to-gray-800 text-white scale-105"
// // // //                 : "bg-white text-black"
// // // //             }`}
// // // //           >
// // // //             <h3 className="text-xl font-semibold">{plan.title}</h3>
// // // //             <p className="text-sm text-gray-500 mb-4">{plan.desc}</p>
// // // //             <p className="text-3xl font-bold mb-4">
// // // //               ${calculatePrice(plan.price)}{" "}
// // // //               <span className="text-base font-normal">/mo</span>
// // // //             </p>
// // // //             <button
// // // //               onClick={() => setSelectedPlan(plan.id)}
// // // //               className="bg-yellow-400 text-black py-2 rounded-lg font-semibold mb-6"
// // // //             >
// // // //               Subscribe
// // // //             </button>

// // // //             {/* Features preview */}
// // // //             <ul className="space-y-2 text-sm mb-4">
// // // //               {plan.features.slice(0, 4).map((f, idx) => (
// // // //                 <li key={idx} className="flex items-center gap-2">
// // // //                   <Check className="w-4 h-4 text-green-500" /> {f}
// // // //                 </li>
// // // //               ))}
// // // //             </ul>

// // // //             <button
// // // //               onClick={() => setModalPlan(plan)}
// // // //               className="text-sm text-gray-600 underline"
// // // //             >
// // // //               More
// // // //             </button>
// // // //           </div>
// // // //         ))}
// // // //       </div>

// // // //       {/* Footer Buttons */}
// // // //       <div className="flex justify-between w-full max-w-5xl mt-8">
// // // //         <button onClick={onBack} className="text-gray-500">
// // // //           Back
// // // //         </button>
// // // //         <div className="flex gap-4">
// // // //           <button className="text-gray-500">Skip</button>
// // // //           <button
// // // //             onClick={() => onNext({ selectedPlan })}
// // // //             className="bg-black text-white px-6 py-2 rounded-lg font-semibold"
// // // //           >
// // // //             Continue →
// // // //           </button>
// // // //         </div>
// // // //       </div>

// // // //       {/* Modal */}
// // // //       <AnimatePresence>
// // // //         {modalPlan && (
// // // //           <motion.div
// // // //             className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
// // // //             initial={{ opacity: 0 }}
// // // //             animate={{ opacity: 1 }}
// // // //             exit={{ opacity: 0 }}
// // // //             onClick={() => setModalPlan(null)}
// // // //           >
// // // //             <motion.div
// // // //               className="bg-white rounded-2xl p-6 max-w-lg w-full relative"
// // // //               initial={{ scale: 0.9 }}
// // // //               animate={{ scale: 1 }}
// // // //               exit={{ scale: 0.9 }}
// // // //               onClick={(e) => e.stopPropagation()}
// // // //             >
// // // //               {/* Close button */}
// // // //               <button
// // // //                 className="absolute top-4 right-4 text-gray-500"
// // // //                 onClick={() => setModalPlan(null)}
// // // //               >
// // // //                 <X className="w-6 h-6" />
// // // //               </button>

// // // //               <h2 className="text-2xl font-bold mb-2">{modalPlan.title}</h2>
// // // //               <p className="text-gray-500 mb-4">{modalPlan.desc}</p>
// // // //               <p className="text-3xl font-bold mb-6">
// // // //                 ${calculatePrice(modalPlan.price)}{" "}
// // // //                 <span className="text-base font-normal">/ per month</span>
// // // //               </p>

// // // //               <h3 className="font-semibold mb-3">Features</h3>
// // // //               <ul className="space-y-2 mb-6">
// // // //                 {modalPlan.features.map((f, idx) => (
// // // //                   <li key={idx} className="flex items-center gap-2">
// // // //                     <Check className="w-4 h-4 text-green-500" /> {f}
// // // //                   </li>
// // // //                 ))}
// // // //               </ul>

// // // //               <button
// // // //                 onClick={() => onNext({ selectedPlan })}
// // // //                 className="w-full bg-black text-white py-3 rounded-lg font-semibold"
// // // //               >
// // // //                 Continue →
// // // //               </button>
// // // //             </motion.div>
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>
// // // //     </div>
// // // //   );
// // // // };


// // // // export default SelectPlan;


// // // import React, { useState } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import { Check, X } from "lucide-react";

// // // const plans = [
// // //   {
// // //     id: "basic",
// // //     title: "Basic",
// // //     desc: "Best for personal use.",
// // //     price: 49,
// // //     features: [
// // //       "Employee directory",
// // //       "Task management",
// // //       "File storage",
// // //       "Reporting and analytics",
// // //       "Extra feature A",
// // //       "Extra feature B",
// // //     ],
// // //   },
// // //   {
// // //     id: "enterprise",
// // //     title: "Enterprise",
// // //     desc: "For large teams & corporations.",
// // //     price: 90,
// // //     features: [
// // //       "Employee directory",
// // //       "Task management",
// // //       "File storage",
// // //       "Reporting and analytics",
// // //       "Advanced analytics",
// // //       "Priority support",
// // //     ],
// // //   },
// // //   {
// // //     id: "business",
// // //     title: "Business",
// // //     desc: "Best for Business use.",
// // //     price: 300,
// // //     features: [
// // //       "Employee directory",
// // //       "Task management",
// // //       "File storage",
// // //       "Reporting and analytics",
// // //       "Dedicated account manager",
// // //       "Custom integrations",
// // //     ],
// // //   },
// // // ];

// // // const SelectPlan = ({ onNext, onBack }) => {
// // //   const [selectedPlan, setSelectedPlan] = useState(null);
// // //   const [modalPlan, setModalPlan] = useState(null);

// // //   return (
// // //     <div className="w-full flex flex-col items-center">
// // //       {/* Plans */}
// // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
// // //         {plans.map((plan) => (
// // //           <div
// // //             key={plan.id}
// // //             className={`relative rounded-2xl border p-6 flex flex-col shadow-md ${
// // //               plan.id === "enterprise"
// // //                 ? "bg-gradient-to-b from-black to-gray-800 text-white scale-105"
// // //                 : "bg-white text-black"
// // //             }`}
// // //           >
// // //             {/* 🔥 Static 35% OFF Badge */}
// // //             <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
// // //               35% OFF
// // //             </div>

// // //             <h3 className="text-xl font-semibold">{plan.title}</h3>
// // //             <p className="text-sm text-gray-500 mb-4">{plan.desc}</p>
// // //             <p className="text-3xl font-bold mb-4">
// // //               ${plan.price} <span className="text-base font-normal">/mo</span>
// // //             </p>
// // //             <button
// // //               onClick={() => setSelectedPlan(plan.id)}
// // //               className="bg-yellow-400 text-black py-2 rounded-lg font-semibold mb-6"
// // //             >
// // //               Subscribe
// // //             </button>

// // //             {/* Features preview */}
// // //             <ul className="space-y-2 text-sm mb-4">
// // //               {plan.features.slice(0, 4).map((f, idx) => (
// // //                 <li key={idx} className="flex items-center gap-2">
// // //                   <Check className="w-4 h-4 text-green-500" /> {f}
// // //                 </li>
// // //               ))}
// // //             </ul>

// // //             <button
// // //               onClick={() => setModalPlan(plan)}
// // //               className="text-sm text-gray-600 underline"
// // //             >
// // //               More
// // //             </button>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       {/* Footer Buttons */}
// // //       <div className="flex justify-between w-full max-w-5xl mt-8">
// // //         <button onClick={onBack} className="text-gray-500">
// // //           Back
// // //         </button>
// // //         <div className="flex gap-4">
// // //           <button className="text-gray-500">Skip</button>
// // //           <button
// // //             onClick={() => onNext({ selectedPlan })}
// // //             className="bg-black text-white px-6 py-2 rounded-lg font-semibold"
// // //           >
// // //             Continue →
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* Modal */}
// // //       <AnimatePresence>
// // //         {modalPlan && (
// // //           <motion.div
// // //             className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             exit={{ opacity: 0 }}
// // //             onClick={() => setModalPlan(null)}
// // //           >
// // //             <motion.div
// // //               className="bg-white rounded-2xl p-6 max-w-lg w-full relative"
// // //               initial={{ scale: 0.9 }}
// // //               animate={{ scale: 1 }}
// // //               exit={{ scale: 0.9 }}
// // //               onClick={(e) => e.stopPropagation()}
// // //             >
// // //               {/* Close button */}
// // //               <button
// // //                 className="absolute top-4 right-4 text-gray-500"
// // //                 onClick={() => setModalPlan(null)}
// // //               >
// // //                 <X className="w-6 h-6" />
// // //               </button>

// // //               <h2 className="text-2xl font-bold mb-2">{modalPlan.title}</h2>
// // //               <p className="text-gray-500 mb-4">{modalPlan.desc}</p>
// // //               <p className="text-3xl font-bold mb-6">
// // //                 ${modalPlan.price}{" "}
// // //                 <span className="text-base font-normal">/ per month</span>
// // //               </p>

// // //               <h3 className="font-semibold mb-3">Features</h3>
// // //               <ul className="space-y-2 mb-6">
// // //                 {modalPlan.features.map((f, idx) => (
// // //                   <li key={idx} className="flex items-center gap-2">
// // //                     <Check className="w-4 h-4 text-green-500" /> {f}
// // //                   </li>
// // //                 ))}
// // //               </ul>

// // //               <button
// // //                 onClick={() => onNext({ selectedPlan })}
// // //                 className="w-full bg-black text-white py-3 rounded-lg font-semibold"
// // //               >
// // //                 Continue →
// // //               </button>
// // //             </motion.div>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //     </div>
// // //   );
// // // };

// // // export default SelectPlan;

// // import React, { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { Check, X } from "lucide-react";
// // import { useOnboardingStore } from "../store/onboardingStore";

// // const plans = [
// //   {
// //     id: "basic",
// //     title: "Basic",
// //     desc: "Best for personal use.",
// //     price: 49,
// //     features: [
// //       "Employee directory",
// //       "Task management",
// //       "File storage",
// //       "Reporting and analytics",
// //       "Extra feature A",
// //       "Extra feature B",
// //     ],
// //   },
// //   {
// //     id: "enterprise",
// //     title: "Enterprise",
// //     desc: "For large teams & corporations.",
// //     price: 90,
// //     features: [
// //       "Employee directory",
// //       "Task management",
// //       "File storage",
// //       "Reporting and analytics",
// //       "Advanced analytics",
// //       "Priority support",
// //     ],
// //   },
// //   {
// //     id: "business",
// //     title: "Business",
// //     desc: "Best for Business use.",
// //     price: 300,
// //     features: [
// //       "Employee directory",
// //       "Task management",
// //       "File storage",
// //       "Reporting and analytics",
// //       "Dedicated account manager",
// //       "Custom integrations",
// //     ],
// //   },
// // ];

// // const SelectPlan = ({ onNext, onBack }) => {
// //   const [billingCycle, setBillingCycle] = useState("monthly");
// //   const [selectedPlan, setSelectedPlan] = useState(null);
// //   const [modalPlan, setModalPlan] = useState(null);
// //   const { updateStepData } = useOnboardingStore();

// //    const handleSubscribe = (plan) => {
// //     // Save plan + billing cycle into store
// //     updateStepData("plan", {
// //       selectedPlan: plan.id,
// //       billingCycle,
// //     });

// //     // move to Billing step
// //     onNext();
// //   };

// //   return (
// //     <div className="w-full flex flex-col items-center">
// //       {/* Billing Toggle */}
// //       <div className="flex items-center gap-2 mb-8">
// //         <button
// //           className={`px-4 py-2 rounded-lg text-sm font-medium ${
// //             billingCycle === "monthly"
// //               ? "bg-black text-white"
// //               : "bg-gray-200 text-gray-600"
// //           }`}
// //           onClick={() => setBillingCycle("monthly")}
// //         >
// //           Monthly
// //         </button>
// //         <button
// //           className={`px-4 py-2 rounded-lg text-sm font-medium ${
// //             billingCycle === "annually"
// //               ? "bg-black text-white"
// //               : "bg-gray-200 text-gray-600"
// //           }`}
// //           onClick={() => setBillingCycle("annually")}
// //         >
// //           Annually
// //         </button>
// //       </div>

// //       {/* Plans */}
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
// //         {plans.map((plan) => (
// //           <div
// //             key={plan.id}
// //             className={`relative rounded-2xl border p-6 flex flex-col shadow-md ${
// //               plan.id === "enterprise"
// //                 ? "bg-gradient-to-b from-black to-gray-800 text-white scale-105"
// //                 : "bg-white text-black"
// //             }`}
// //           >
// //             {/*  Show static badge only when Annually is active */}
// //             {/* {billingCycle === "annually" && (
// //               <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
// //                 35% OFF
// //               </div>
// //             )} */}
// //             {/* Static 35% OFF Badge */}
// // <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
// //   35% OFF
// // </div>


// //             <h3 className="text-xl font-semibold">{plan.title}</h3>
// //             <p className="text-sm text-gray-500 mb-4">{plan.desc}</p>
// //             <p className="text-3xl font-bold mb-4">
// //               ${plan.price} <span className="text-base font-normal">/mo</span>
// //             </p>
// //             {/* <button
// //               onClick={() => setSelectedPlan(plan.id)}
// //               className="bg-yellow-400 text-black py-2 rounded-lg font-semibold mb-6"
// //             >
// //               Subscribe
// //             </button> */}


// //            {/* <button
// //   onClick={() => onNext({ selectedPlan: plan })}
// //   className="bg-yellow-400 text-black py-2 rounded-lg font-semibold mb-6"
// // >
// //   Subscribe
// // </button> */}
// //  <button
// //               onClick={() => handleSubscribe(plan)}
// //               className="bg-yellow-400 text-black py-2 rounded-lg font-semibold mb-6"
// //             >
// //               Subscribe
// //             </button>


// //             {/* Features preview */}
// //             <ul className="space-y-2 text-sm mb-4">
// //               {plan.features.slice(0, 4).map((f, idx) => (
// //                 <li key={idx} className="flex items-center gap-2">
// //                   <Check className="w-4 h-4 text-green-500" /> {f}
// //                 </li>
// //               ))}
// //             </ul>

// //             <button
// //               onClick={() => setModalPlan(plan)}
// //               className="text-sm text-gray-600 underline"
// //             >
// //               More
// //             </button>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Footer Buttons */}
// //       <div className="flex justify-between w-full max-w-5xl mt-8">
// //         <button onClick={onBack} className="text-gray-500">
// //           Back
// //         </button>
// //         <div className="flex gap-4">
// // <button
// //   onClick={() => onNext({ selectedPlan: null, skipToStep: 4 })}
// //   className="text-gray-500"
// // >
// //   Skip
// // </button>

// //           {/* <button
// //             onClick={() => onNext({ selectedPlan })}
// //             className="bg-black text-white px-6 py-2 rounded-lg font-semibold"
// //           >
// //             Continue →
// //           </button> */}
// //         </div>
// //       </div>

// //       {/* Modal */}
// //       <AnimatePresence>
// //         {modalPlan && (
// //           <motion.div
// //             className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             onClick={() => setModalPlan(null)}
// //           >
// //             <motion.div
// //               className="bg-white rounded-2xl p-6 max-w-lg w-full relative"
// //               initial={{ scale: 0.9 }}
// //               animate={{ scale: 1 }}
// //               exit={{ scale: 0.9 }}
// //               onClick={(e) => e.stopPropagation()}
// //             >
// //               {/* Close button */}
// //               {/* <button
// //                 className="absolute top-4 right-4 text-gray-500"
// //                 onClick={() => setModalPlan(null)}
// //               >
// //                 <X className="w-6 h-6" />
// //               </button> */}

// //               <h2 className="text-2xl font-bold mb-2">{modalPlan.title}</h2>
// //               <p className="text-gray-500 mb-4">{modalPlan.desc}</p>
// //               <p className="text-3xl font-bold mb-6">
// //                 ${modalPlan.price}{" "}
// //                 <span className="text-base font-normal">/ per month</span>
// //               </p>

// //               <h3 className="font-semibold mb-3">Features</h3>
// //               <ul className="space-y-2 mb-6">
// //                 {modalPlan.features.map((f, idx) => (
// //                   <li key={idx} className="flex items-center gap-2">
// //                     <Check className="w-4 h-4 text-green-500" /> {f}
// //                   </li>
// //                 ))}
// //               </ul>

// //                  {/* Close button */}
// //               <button
// //                                 onClick={() => setModalPlan(null)}
// //                 className="w-full bg-black text-white py-3 rounded-lg font-semibold"
// //               >
// //                Close
// //               </button>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </div>
// //   );
// // };

// // export default SelectPlan;

// Without 7day free trial

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Check } from "lucide-react";
// import { useOnboardingStore } from "../store/onboardingStore";

// const plans = [
//   {
//     id: "basic",
//     title: "Basic",
//     desc: "Best for personal use.",
//     monthly: 49,
//     annually: 490,
//     features: [
//       "Employee directory",
//       "Task management",
//       "File storage",
//       "Reporting and analytics",
//       "Extra feature A",
//       "Extra feature B",
//     ],
//   },
//   {
//     id: "enterprise",
//     title: "Enterprise",
//     desc: "For large teams & corporations.",
//     monthly: 90,
//     annually: 900,
//     features: [
//       "Employee directory",
//       "Task management",
//       "File storage",
//       "Reporting and analytics",
//       "Advanced analytics",
//       "Priority support",
//     ],
//   },
//   {
//     id: "business",
//     title: "Business",
//     desc: "Best for Business use.",
//     monthly: 300,
//     annually: 3000,
//     features: [
//       "Employee directory",
//       "Task management",
//       "File storage",
//       "Reporting and analytics",
//       "Dedicated account manager",
//       "Custom integrations",
//     ],
//   },
// ];

// const SelectPlan = ({ onNext, onBack }) => {
//   const [billingCycle, setBillingCycle] = useState("monthly");
//   const [modalPlan, setModalPlan] = useState(null);
//   const { updateStepData } = useOnboardingStore();

// const handleSubscribe = (plan) => {
//   const selectedPrice =
//     billingCycle === "monthly" ? plan.monthly : plan.annually;

//   updateStepData("plan", {
//     selectedPlan: {
//       id: plan.id,
//       title: plan.title,
//         features: plan.features,
//       desc: plan.desc,
//       price: selectedPrice,
//     },
//     billingCycle, // "monthly" or "annually"
//   });

//   onNext();
// };



//   return (
//     <div className="w-full flex flex-col items-center">
//       {/* Billing Toggle */}
//       <div className="flex items-center gap-2 mb-8">
//         <button
//           className={`px-4 py-2 rounded-lg text-sm font-medium ${
//             billingCycle === "monthly"
//               ? "bg-black text-white"
//               : "bg-gray-200 text-gray-600"
//           }`}
//           onClick={() => setBillingCycle("monthly")}
//         >
//           Monthly
//         </button>
//         <button
//           className={`px-4 py-2 rounded-lg text-sm font-medium ${
//             billingCycle === "annually"
//               ? "bg-black text-white"
//               : "bg-gray-200 text-gray-600"
//           }`}
//           onClick={() => setBillingCycle("annually")}
//         >
//           Annually
//         </button>
//       </div>

//       {/* Plans */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
//         {plans.map((plan) => (
//           <div
//             key={plan.id}
//             className={`relative rounded-2xl border p-6 flex flex-col shadow-md ${
//               plan.id === "enterprise"
//                 ? "bg-gradient-to-b from-black to-gray-800 text-white scale-105"
//                 : "bg-white text-black"
//             }`}
//           >
//             <h3 className="text-xl font-semibold">{plan.title}</h3>
//             <p className="text-sm text-gray-500 mb-4">{plan.desc}</p>

//             {/* Dynamic price */}
//             <p className="text-3xl font-bold mb-4">
//               $
//               {billingCycle === "monthly" ? plan.monthly : plan.annually}
//               <span className="text-base font-normal">
//                 {billingCycle === "monthly" ? "/mo" : "/yr"}
//               </span>
//             </p>

//             <button
//               onClick={() => handleSubscribe(plan)}
//               className="bg-yellow-400 text-black py-2 rounded-lg font-semibold mb-6"
//             >
//               Subscribe
//             </button>

//             {/* Features preview */}
//             <ul className="space-y-2 text-sm mb-4">
//               {plan.features.slice(0, 4).map((f, idx) => (
//                 <li key={idx} className="flex items-center gap-2">
//                   <Check className="w-4 h-4 text-green-500" /> {f}
//                 </li>
//               ))}
//             </ul>

//             <button
//               onClick={() => setModalPlan(plan)}
//               className="text-sm text-gray-600 underline"
//             >
//               More
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Footer */}
//       <div className="flex justify-between w-full max-w-5xl mt-8">
//         <button onClick={onBack} className="text-gray-500">
//           Back
//         </button>
//         <div className="flex gap-4">
//           <button
//             onClick={() => onNext({ selectedPlan: null, skipToStep: 4 })}
//             className="text-gray-500"
//           >
//             Skip
//           </button>
//         </div>
//       </div>

//       {/* Modal */}
//       <AnimatePresence>
//         {modalPlan && (
//           <motion.div
//             className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setModalPlan(null)}
//           >
//             <motion.div
//               className="bg-white rounded-2xl p-6 max-w-lg w-full relative"
//               initial={{ scale: 0.9 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.9 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <h2 className="text-2xl font-bold mb-2">{modalPlan.title}</h2>
//               <p className="text-gray-500 mb-4">{modalPlan.desc}</p>
//               <p className="text-3xl font-bold mb-6">
//                 $
//                 {billingCycle === "monthly"
//                   ? modalPlan.monthly
//                   : modalPlan.annually}{" "}
//                 <span className="text-base font-normal">
//                   {billingCycle === "monthly" ? "/mo" : "/yr"}
//                 </span>
//               </p>

//               <h3 className="font-semibold mb-3">Features</h3>
//               <ul className="space-y-2 mb-6">
//                 {modalPlan.features.map((f, idx) => (
//                   <li key={idx} className="flex items-center gap-2">
//                     <Check className="w-4 h-4 text-green-500" /> {f}
//                   </li>
//                 ))}
//               </ul>

//               <button
//                 onClick={() => setModalPlan(null)}
//                 className="w-full bg-black text-white py-3 rounded-lg font-semibold"
//               >
//                 Close
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default SelectPlan;


// With 7day free trial
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { useOnboardingStore } from "../store/onboardingStore";

const plans = [
  {
    id: "basic",
    title: "Basic",
    desc: "Best for personal use.",
    monthly: 49,
    annually: 490,
    trial: true, // ✅ has trial
    features: [
      "Employee directory",
      "Task management",
      "File storage",
      "Reporting and analytics",
      "Extra feature A",
      "Extra feature B",
    ],
  },
  {
    id: "enterprise",
    title: "Enterprise",
    desc: "For large teams & corporations.",
    monthly: 90,
    annually: 900,
    trial: true, // ✅ has trial
    features: [
      "Employee directory",
      "Task management",
      "File storage",
      "Reporting and analytics",
      "Advanced analytics",
      "Priority support",
    ],
  },
  {
    id: "business",
    title: "Business",
    desc: "Best for Business use.",
    monthly: 300,
    annually: 3000,
    trial: false, // ❌ no trial
    features: [
      "Employee directory",
      "Task management",
      "File storage",
      "Reporting and analytics",
      "Dedicated account manager",
      "Custom integrations",
    ],
  },
];


const SelectPlan = ({ onNext, onBack }) => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [modalPlan, setModalPlan] = useState(null);
  const { updateStepData } = useOnboardingStore();

const handleSubscribe = (plan) => {
  const selectedPrice =
    billingCycle === "monthly" ? plan.monthly : plan.annually;

 updateStepData("plan", {
  selectedPlan: {
    id: plan.id,
    title: plan.title,
    features: plan.features,
    desc: plan.desc,
    monthly: plan.monthly,   //  keep monthly
    annually: plan.annually, //  keep annually
     trial: plan.trial,
  },
  billingCycle,
});

  onNext();
};



  return (
    <div className="w-full flex flex-col items-center">
      {/* Billing Toggle */}
      <div className="flex items-center gap-2 mb-8">
        <button
          className={`px-4 py-2 rounded-lg text-sm font-medium ${
            billingCycle === "monthly"
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => setBillingCycle("monthly")}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 rounded-lg text-sm font-medium ${
            billingCycle === "annually"
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => setBillingCycle("annually")}
        >
          Annually
        </button>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {plans.map((plan) => (
     <div
  key={plan.id}
  className={`relative rounded-2xl border p-6 flex flex-col shadow-md ${
    plan.id === "enterprise"
      ? "bg-gradient-to-b from-black to-gray-800 text-white scale-105"
      : "bg-white text-black"
  }`}
>
  {/* 🔥 Trial Badge */}
  {plan.trial && (
    <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
      7-Day Free Trial
    </div>
  )}

  <h3 className="text-xl font-semibold">{plan.title}</h3>
  <p className="text-sm text-gray-500 mb-4">{plan.desc}</p>

  <p className="text-3xl font-bold mb-4">
    ${billingCycle === "monthly" ? plan.monthly : plan.annually}
    <span className="text-base font-normal">
      {billingCycle === "monthly" ? "/mo" : "/yr"}
    </span>
  </p>

  <button
    onClick={() => handleSubscribe(plan)}
    className="bg-yellow-400 text-black py-2 rounded-lg font-semibold mb-6"
  >
    {plan.trial ? "Start Free Trial" : "Subscribe"}
  </button>


            {/* Features preview */}
            <ul className="space-y-2 text-sm mb-4">
              {plan.features.slice(0, 4).map((f, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" /> {f}
                </li>
              ))}
            </ul>

            <button
              onClick={() => setModalPlan(plan)}
              className="text-sm text-gray-600 underline"
            >
              More
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between w-full max-w-5xl mt-8">
        <button onClick={onBack} className="text-gray-500">
          Back
        </button>
        <div className="flex gap-4">
          <button
            onClick={() => onNext({ selectedPlan: null, skipToStep: 4 })}
            className="text-gray-500"
          >
            Skip
          </button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalPlan && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalPlan(null)}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 max-w-lg w-full relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-2">{modalPlan.title}</h2>
              <p className="text-gray-500 mb-4">{modalPlan.desc}</p>
              <p className="text-3xl font-bold mb-6">
                $
                {billingCycle === "monthly"
                  ? modalPlan.monthly
                  : modalPlan.annually}{" "}
                <span className="text-base font-normal">
                  {billingCycle === "monthly" ? "/mo" : "/yr"}
                </span>
              </p>

              <h3 className="font-semibold mb-3">Features</h3>
              <ul className="space-y-2 mb-6">
                {modalPlan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" /> {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setModalPlan(null)}
                className="w-full bg-black text-white py-3 rounded-lg font-semibold"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SelectPlan;
