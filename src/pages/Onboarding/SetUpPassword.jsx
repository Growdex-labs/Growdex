// // components/onboarding/StepPassword.jsx
// import { useState } from "react";
// import  useAuthStore  from "../store/authStore";
// import  useOnboardingStore  from "../store/onboardingStore";

// export default function StepPassword({ email }) {
//   const [password, setPassword] = useState("");
//   const [confirm, setConfirm] = useState("");
//   const [loading, setLoading] = useState(false);

//   const { setPassword: savePassword } = useAuthStore();
//   const { completeOnboarding, nextStep } = useOnboardingStore();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!password || password.length < 6) {
//       return alert("Password must be at least 6 characters.");
//     }
//     if (password !== confirm) {
//       return alert("Passwords do not match.");
//     }

//     setLoading(true);
//     try {
//       // 1️⃣ Save password via authStore
//       await savePassword(email, password);

//       // 2️⃣ Mark onboarding as complete
//       await completeOnboarding();

//       // 3️⃣ Move forward (or redirect to dashboard)
//       nextStep(); 
//       // OR navigate("/dashboard");
//     } catch (err) {
//       console.error(err);
//       alert("Failed to set password. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md"
//     >
//       <h2 className="text-xl font-bold mb-2">Create a Password</h2>
//       <p className="text-gray-500 text-sm mb-6">
//         Secure your account before finishing setup.
//       </p>

//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700 mb-1">
//           Password
//         </label>
//         <input
//           type="password"
//           className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Enter password"
//         />
//       </div>

//       <div className="mb-6">
//         <label className="block text-sm font-medium text-gray-700 mb-1">
//           Confirm Password
//         </label>
//         <input
//           type="password"
//           className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none"
//           value={confirm}
//           onChange={(e) => setConfirm(e.target.value)}
//           placeholder="Confirm password"
//         />
//       </div>

//       <button
//         type="submit"
//         disabled={loading}
//         className="bg-black text-white w-full py-2 rounded-lg font-medium hover:bg-gray-800 transition"
//       >
//         {loading ? "Saving..." : "Finish Setup →"}
//       </button>
//     </form>
//   );
// }
import React from 'react'

const SetUpPassword = () => {
  return (
    <div>
      
    </div>
  )
}

export default SetUpPassword

