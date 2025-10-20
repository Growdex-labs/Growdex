import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";
import background from  "../../assets/Login - OTP.png"
import { Loader } from "lucide-react";
import iconLogo from "../../assets/tail-right.png"
import Logo from "../../assets/Frame 1686560898 (1).png"

const EmailVerificationPage = () => {
    const [resendTimer, setResendTimer] = useState(0);

  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();

  const { error, isLoading, verifyEmail, resendVerificationEmail } = useAuthStore();

    //  grab email from navigation state
const email = location.state?.email || localStorage.getItem("pendingEmail");

// save to localStorage if it exists
useEffect(() => {
  if (location.state?.email) {
    localStorage.setItem("pendingEmail", location.state.email);
  }
}, [location.state?.email]);

  const handleChange = (index, value) => {
    const newCode = [...code];

    // Handle pasted content
    if (value.length > 1) {
      const pastedCode = value.slice(0, 6).split("");
      for (let i = 0; i < 6; i++) {
        newCode[i] = pastedCode[i] || "";
      }
      setCode(newCode);

      // Focus on the last non-empty input or the first empty one
      const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
      const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
      inputRefs.current[focusIndex].focus();
    } else {
      newCode[index] = value;
      setCode(newCode);

      // Move focus to the next input field if value is entered
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const verificationCode = code.join("");
    try {
 await verifyEmail({ email, code: verificationCode });
      navigate("/login");
      toast.success("Email verified successfully");
    } catch (error) {
      console.log(error);
    }
  };

//   const handleResend = async () => {
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

//   // Auto submit when all fields are filled
//   useEffect(() => {
//     if (code.every((digit) => digit !== "")) {
//       handleSubmit(new Event("submit"));
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
      const res = await resendVerificationEmail(email);
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
    if (code.every((digit) => digit !== "")) {
      handleSubmit(new Event("submit"));
    }
  }, [code]);

  return (
   <div
     className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-cover bg-center"
     style={{ backgroundImage: `url(${background})` }}
   >
            <div className="flex justify-center mb-6">
            <img src={Logo} alt="Logo" className="h-8 w-auto" />
          </div>
      <div className="max-w-md w-full rounded-2xl shadow-xl overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white  rounded-2xl shadow-2xl p-8 w-full max-w-md"
        >
          <h2 className="text-xl font-bold mb-4 text-start ">
            Verify Email
          </h2>
          <p className="text-start text-xs text-gray-700 mb-6">
            Enter the 6-digit code sent to <span className="font-semibold">{email}.</span> if you didn't get that email, check you junk folder or  <button
              onClick={handleResend}
              disabled={isLoading}
              className=" text-black font-bold disabled:opacity-50"
            >
              Resend Code
            </button>
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
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
      className={`w-12 h-16 text-center text-5xl font-base text-black rounded-md focus:outline-none transition-colors
        ${error ? "border-2 border-red-400 focus:border-red-500" : "border-2 border-gray-200 focus:border-gray-300"}`}
    />
  ))}
</div>

         {error && <p className="text-red-500 font-semibold text-sm -mt-4 mb-5">{error}</p>}
        
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
    <span>Let’s go</span>
  </>
) : (
  <>
    <span>Next</span>
    <img src={iconLogo} alt="icon" className="w-4 h-4" />
  </>
)}

        </motion.button>
          </form>

        </motion.div>
      </div>
    </div>
  );
};
export default EmailVerificationPage;
