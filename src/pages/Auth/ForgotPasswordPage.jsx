// import { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useAuthStore } from "../store/authStore";
// import toast from "react-hot-toast";
// import background from "../../assets/Login - OTP.png";
// import { Loader } from "lucide-react";
// import iconLogo from "../../assets/tail-right.png";
// import Logo from "../../assets/Frame 1686560898 (1).png"

// const ForgotPasswordPage = () => {
//   const [step, setStep] = useState("request"); // request | verify | reset
//   const [email, setEmail] = useState("");
//   const [code, setCode] = useState(["", "", "", "", "", ""]);
//    const [passwordError, setPasswordError] = useState("");
//   const inputRefs = useRef([]);
//   const navigate = useNavigate();

//   const {
//     isLoading,
//     error,
//     forgotPassword, // will send OTP
//     verifyPasswordOtp, // new API to verify OTP
//     resetPassword,
//     resendVerificationEmail // final reset
//   } = useAuthStore();

//   // Handle OTP input
//   const handleChange = (index, value) => {
//     const newCode = [...code];
//     if (value.length > 1) {
//       const pasted = value.slice(0, 6).split("");
//       for (let i = 0; i < 6; i++) newCode[i] = pasted[i] || "";
//     } else {
//       newCode[index] = value;
//     }
//     setCode(newCode);

//     if (value && index < 5) {
//       inputRefs.current[index + 1].focus();
//     }
//   };

//   const handleKeyDown = (index, e) => {
//     if (e.key === "Backspace" && !code[index] && index > 0) {
//       inputRefs.current[index - 1].focus();
//     }
//   };

//  // Request OTP
// const handleRequest = async (e) => {
//   e.preventDefault();
//   setRequestError(""); // clear old error
//   try {
//     await forgotPassword(email);
//     setStep("verify");
//   } catch (err) {
//     setRequestError(err?.response?.data?.message || "Something went wrong. Please try again.");
//   }
// };

// // Verify OTP
// const handleVerify = async (e) => {
//   e.preventDefault();
//   setVerifyError("");
//   try {
//     await verifyPasswordOtp({ email, code: code.join("") });
//     setStep("reset");
//   } catch (err) {
//     setVerifyError(err?.response?.data?.message || "Invalid or expired OTP");
//   }
// };

// // Reset Password
// const handleReset = async (e) => {
//   e.preventDefault();
//   setResetError("");
//   const password = e.target.password.value;
//   const confirmPassword = e.target.confirmPassword.value;

//   if (password !== confirmPassword) {
//     setResetError("Passwords do not match");
//     return;
//   }

//   try {
//     await resetPassword({ email, code: code.join(""), password });
//     navigate("/login");
//   } catch (err) {
//     setResetError(err?.response?.data?.message || "Error resetting password");
//   }
// };

//     const handleResend = async () => {
//     if (!email) {
//       toast.error("Email not available");
//       return;
//     }
//     try {
//       await resendVerificationEmail(email);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div
//       className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-cover bg-center"
//       style={{ backgroundImage: `url(${background})` }}
//     >
//                 <div className="flex justify-center mb-6">
//         <img src={Logo} alt="Logo" className="h-8 w-auto" />
//       </div>

      
//       <div className="max-w-md w-full rounded-2xl shadow-xl overflow-hidden">
 
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
//         >

            
//          {step === "request" && (
//   <>
//     <h2 className="text-xl font-bold mb-4 text-start">Recover Password</h2>
//     <p className="text-start text-xs text-gray-400 mb-4">
//       Enter your email below to recover your password
//     </p>
//     <form
//       onSubmit={async (e) => {
//         e.preventDefault();
//         try {
//           await forgotPassword(email);
//           setStep("verify")
//         } catch (err) {
//           console.error(err);

//           setPasswordError(err?.response?.data?.message || "Something went wrong. Please try again.");
//         }
//       }}
//       className="space-y-6"
//     >
//       <label className="block text-xs text-gray-700 font-semibold mb-1 mt-4">
//         Email <span className="text-red-500">*</span>
//       </label>
//       <input
//         type="email"
//         placeholder="Enter your email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//         className="w-full px-3 py-2 border-2 border-gray-200 rounded-md focus:border-gray-300 focus:outline-none"
//       />


//       {passwordError && (
//         <p className="text-red-500 text-sm -mt-2">{passwordError}</p>
//       )}

//       <motion.button
//         whileHover={{ scale: 1.02 }}
//         whileTap={{ scale: 0.98 }}
//         className="w-full py-2 px-4 bg-black text-white rounded-lg flex items-center justify-center gap-2"
//         type="submit"
//         disabled={isLoading}
//       >
//         {isLoading ? (
//           <Loader className="w-5 h-5 animate-spin" />
//         ) : (
//           "Send OTP"
//         )}
//       </motion.button>
//     </form>
//   </>
// )}


//          {step === "verify" && (
//   <>
//     <h2 className="text-xl font-bold mb-4 text-start">Verify OTP</h2>
//        <p className="text-start text-xs text-gray-700 mb-6">
//             Enter the 6-digit code sent to <span className="font-semibold">{email}.</span> if you didn't get that email, check you junk folder or  <button
//               onClick={handleResend}
//               disabled={isLoading}
//               className=" text-black font-bold disabled:opacity-50"
//             >
//               Resend Code
//             </button>
//           </p>
//     <form
//       onSubmit={async (e) => {
//         e.preventDefault();
//         try {
//           await verifyPasswordOtp({ email, code: code.join("") });
//           setStep("reset");
//         } catch (err) {
//           setPasswordError(
//             err?.response?.data?.message || "Invalid or expired OTP"
//           );
//         }
//       }}
//       className="space-y-6"
//     >
//       <div className="flex justify-between">
//         {code.map((digit, index) => (
//           <input
//             key={index}
//             ref={(el) => (inputRefs.current[index] = el)}
//             type="text"
//             maxLength="1"
//             value={digit}
//             onChange={(e) => handleChange(index, e.target.value)}
//             onKeyDown={(e) => handleKeyDown(index, e)}
//             className="w-12 h-16 text-center text-3xl font-base text-black border-2 border-gray-200 rounded-md focus:border-gray-300 focus:outline-none"
//           />
//         ))}
//       </div>

    
//       {passwordError && (
//         <p className="text-red-500 text-sm">{passwordError}</p>
//       )}

//       <motion.button
//         whileHover={{ scale: 1.02 }}
//         whileTap={{ scale: 0.98 }}
//         className="w-full py-2 px-4 bg-black text-white rounded-lg flex items-center justify-center gap-2"
//         type="submit"
//         disabled={isLoading}
//       >
//         {isLoading ? <Loader className="w-5 h-5 animate-spin" /> : "Verify"}
//       </motion.button>
//     </form>
//   </>
// )}

// {step === "reset" && (
//   <>
//     <h2 className="text-xl font-bold mb-4 text-start">Reset Password</h2>
//     <form
//       onSubmit={async (e) => {
//         e.preventDefault();
//         const password = e.target.password.value;
//         const confirmPassword = e.target.confirmPassword.value;

//         if (password !== confirmPassword) {
//           setPasswordError("Passwords do not match");
//           return;
//         } else {
//           setPasswordError(""); // clear error
//         }

//         try {
//           await resetPassword({ email, code: code.join(""), password });
//           navigate("/login"); // ✅ success
//         } catch (err) {
//           setPasswordError(
//             err?.response?.data?.message || "Error resetting password"
//           );
//         }
//       }}
//       className="space-y-6"
//     >
//       <input
//         type="password"
//         name="password"
//         placeholder="Enter new password"
//         required
//         className="w-full px-3 py-2 border-2 border-gray-200 rounded-md focus:border-gray-300 focus:outline-none"
//       />

//       <input
//         type="password"
//         name="confirmPassword"
//         placeholder="Confirm new password"
//         required
//         className="w-full px-3 py-2 border-2 border-gray-200 rounded-md focus:border-gray-300 focus:outline-none"
//       />

//       {/* ✅ Inline error */}
//       {passwordError && (
//         <p className="text-red-500 text-sm -mt-4">{passwordError}</p>
//       )}

//       <motion.button
//         whileHover={{ scale: 1.02 }}
//         whileTap={{ scale: 0.98 }}
//         className="w-full py-2 px-4 bg-black text-white rounded-lg flex items-center justify-center gap-2"
//         type="submit"
//         disabled={isLoading}
//       >
//         {isLoading ? <Loader className="w-5 h-5 animate-spin" /> : "Reset Password"}
//       </motion.button>
//     </form>
//   </>
// )}


//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default ForgotPasswordPage;

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";
import background from "../../assets/Login - OTP.png";
import { Loader } from "lucide-react";
import iconLogo from "../../assets/tail-right.png";
import Logo from "../../assets/Frame 1686560898 (1).png";

const ForgotPasswordPage = () => {
    const [resendTimer, setResendTimer] = useState(0);

  const [step, setStep] = useState("request"); // request | verify | reset
  const [email, setEmail] = useState("");
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [errorMessage, setErrorMessage] = useState("");
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const {
    isLoading,
    forgotPassword, // send OTP
    verifyPasswordOtp, // verify OTP
    resetPassword,
    resendVerificationEmail,
  } = useAuthStore();

  // ===== Handle OTP Input =====
  const handleChange = (index, value) => {
    const newCode = [...code];

    if (value.length > 1) {
      // pasted
      const pastedCode = value.slice(0, 6).split("");
      for (let i = 0; i < 6; i++) newCode[i] = pastedCode[i] || "";
      setCode(newCode);

      const lastFilledIndex = newCode.findLastIndex((d) => d !== "");
      const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
      inputRefs.current[focusIndex]?.focus();
    } else {
      newCode[index] = value;
      setCode(newCode);
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // ===== Step Handlers =====
  const handleRequest = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      await forgotPassword(email);
      setStep("verify");
    } catch (err) {
      setErrorMessage(err?.response?.data?.message || "Something went wrong");
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      await verifyPasswordOtp({ email, code: code.join("") });
      setStep("reset");
    } catch (err) {
      setErrorMessage(err?.response?.data?.message || "Invalid or expired OTP");
    }
  };

  const handleReset = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      await resetPassword({ email, code: code.join(""), password });
      toast.success("Password reset successful!");
      navigate("/login");
    } catch (err) {
      setErrorMessage(err?.response?.data?.message || "Error resetting password");
    }
  };

//   const handleResend = async () => {
//     if (!email) {
//       toast.error("Email not available");
//       return;
//     }
//     try {
//    await forgotPassword(email);
//       toast.success("OTP resent successfully!");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // Auto-submit OTP when all fields are filled (step === verify)
//   useEffect(() => {
//     if (step === "verify" && code.every((digit) => digit !== "")) {
//       handleVerify(new Event("submit"));
//     }
//   }, [code]);

  // ===== Resend OTP with countdown =====
  const handleResend = async () => {
    if (!email) {
      toast.error("Email not available");
      return;
    }
    if (resendTimer > 0) return; // prevent resend during countdown
    try {
      const res = await forgotPassword(email);
      toast.success(res.message || "OTP resent successfully!");

      // If server returned minutesLeft, start countdown
      if (res.minutesLeft) {
        setResendTimer(res.minutesLeft * 60);
      }
    } catch (err) {
      console.log(err);
      // if server returns minutesLeft on 429
      if (err.minutesLeft) {
        setResendTimer(err.minutesLeft * 60);
        toast.error(err.message);
      } else {
        toast.error(err.message || "Error resending OTP");
      }
    }
  };

  // countdown effect
  useEffect(() => {
    if (resendTimer <= 0) return;
    const interval = setInterval(() => setResendTimer((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [resendTimer]);

  // Auto-submit OTP when all fields are filled
  useEffect(() => {
    if (step === "verify" && code.every((digit) => digit !== "")) {
      handleVerify(new Event("submit"));
    }
  }, [code]);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <img src={Logo} alt="Logo" className="h-8 w-auto" />
      </div>

      <div className="max-w-md w-full rounded-2xl shadow-xl overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
        >
          {/* Step 1: Request */}
          {step === "request" && (
            <>
              <h2 className="text-xl font-bold mb-4 text-start">
                Recover Password
              </h2>
              <p className="text-start text-xs text-gray-400 mb-4">
                Enter your email below to recover your password
              </p>

              <form onSubmit={handleRequest} className="space-y-6">
                <label className="block text-xs text-gray-700 font-semibold mb-1 mt-4">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 border-2 border-gray-200 rounded-md focus:border-gray-300 focus:outline-none"
                />

                {errorMessage && (
                  <p className="text-red-500 text-sm -mt-2">{errorMessage}</p>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2 px-4 bg-black text-white rounded-lg flex items-center justify-center gap-2"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader className="w-5 h-5 animate-spin" />
                  ) : (
                    "Send OTP"
                  )}
                </motion.button>
              </form>
            </>
          )}

          {/* Step 2: Verify */}
          {step === "verify" && (
            <>
              <h2 className="text-xl font-bold mb-4 text-start">Verify OTP</h2>
              <p className="text-start text-xs text-gray-700 mb-6">
                Enter the 6-digit code sent to{" "}
                <span className="font-semibold">{email}</span>. If you didn’t get
                the email, check your junk folder or{" "}
                <button
                  onClick={handleResend}
                  disabled={isLoading}
                  className="text-black font-bold disabled:opacity-50"
                >
                  Resend Code
                </button>
              </p>

              <form onSubmit={handleVerify} className="space-y-6">
                <div className="flex justify-between">
                  {code.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className={`w-12 h-16 text-center text-3xl font-base text-black rounded-md focus:outline-none transition-colors
                        ${
                          errorMessage
                            ? "border-2 border-red-400 focus:border-red-500"
                            : "border-2 border-gray-200 focus:border-gray-300"
                        }`}
                    />
                  ))}
                </div>

                {errorMessage && (
                  <p className="text-red-500 text-sm">{errorMessage}</p>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full -mt-4 py-2 px-4 bg-black text-white text-[14px] font-medium rounded-lg shadow-lg flex items-center justify-center gap-2 transition duration-200"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      <span>Verifying...</span>
                    </>
                  ) : (
                    <>
                      <span>Next</span>
                      <img src={iconLogo} alt="icon" className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>
            </>
          )}

          {/* Step 3: Reset */}
          {step === "reset" && (
            <>
              <h2 className="text-xl font-bold mb-4 text-start">
                Reset Password
              </h2>
              <form onSubmit={handleReset} className="space-y-6">
                  <p className="text-start text-xs text-gray-400 mb-3">
                Enter your new password below
              </p>

   
                <label className="block text-xs text-gray-700 font-semibold mt-1 mb-1">
                  New Password <span className="text-red-500">*</span>
                </label>

                <input
                  type="password"
                  name="password"
                  placeholder="Enter new password"
                  required
                  className="w-full px-3 py-2 border-2 border-gray-200 rounded-md focus:border-gray-300 focus:outline-none"
                />
        
                <label className="block text-xs text-gray-700 font-semibold mb-1 -mt-4">
                  Re-enter New Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm new password"
                  required
                  className="w-full px-3 py-2 border-2 border-gray-200 rounded-md focus:border-gray-300 focus:outline-none"
                />

                {errorMessage && (
                  <p className="text-red-500 text-sm -mt-4">{errorMessage}</p>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2 px-4 bg-black text-white rounded-lg flex items-center justify-center gap-2"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader className="w-5 h-5 animate-spin" />
                  ) : (
                    "Reset Password"
                  )}
                </motion.button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
