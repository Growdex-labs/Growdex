import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GoogleLogin } from "@react-oauth/google";
import { Mail, Lock, Loader } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";
import iconLogo from "../../assets/tail-right.png"
import background from  "../../assets/Login - OTP.png"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Logo from "../../assets/Frame 1686560898 (1).png"
const LoginPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user, loginWithGoogle, login, isLoading, error } = useAuthStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  // Navigate to dashboard when authenticated
useEffect(() => {
  if (isAuthenticated && user) {
    if (!user.onboardingCompleted) {
      navigate("/onboarding-steps");
    } else {
      navigate("/dashboard");
    }
  }
}, [isAuthenticated, user, navigate]);


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      // navigation handled by useEffect
    } catch (err) {
      console.log(err.message || "Login failed");
    }
  };

const handleGoogleLogin = async (credential) => {
  try {
    const data = await loginWithGoogle(credential);
    
    if (!data.user.onboardingCompleted) {
      navigate("/onboarding-steps"); // first-time or incomplete onboarding
    } else {
      navigate("/dashboard"); // fully onboarded
    }
  } catch (err) {
    const msg = err.response?.data?.message || err.message || "Google login failed";
    toast.error(msg);
  }
};



  return (
<div
  className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: `url(${background})` }}
>
                <div className="flex justify-center mb-6">
            <img src={Logo} alt="Logo" className="h-8 w-auto" />
          </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden"
      >
     <div className="p-8">
 

  {/* Google Login */}
  <div className="flex justify-center">
    <GoogleLogin
      onSuccess={(res) => handleGoogleLogin(res.credential)}
      onError={() => toast.error("Google Sign-In failed")}
    />
  </div>

  {/* OR Divider */}
  <div className="flex items-center my-2">
    <div className="flex-grow h-px bg-gray-200"></div>
    <span className="px-2 text-black text-xs">OR</span>
    <div className="flex-grow h-px bg-gray-200"></div>
  </div>

  <form onSubmit={handleLogin}>
             <label className="block text-xs font-medium text-black  mb-1 ">
    Email <span className="text-red-500">*</span>
  </label>
    <Input
      icon={Mail}
      type="email"
      placeholder="Email Address"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <div className="mt-1 relative">
        <div className="flex justify-between -mt-4">
                     <label className="block text-xs font-medium text-black  mb-1">
    Password <span className="text-red-500">*</span>
  </label>
    <div className="flex items-center">
      <Link to="/forgot-password" className="text-xs text-black font-medium ">
        Forgot password?
      </Link>
    </div>
        </div>
      <Input
        icon={Lock}
        type={visible ? "text" : "password"}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {visible ? (
        <AiOutlineEye
          className="absolute right-2 top-8 cursor-pointer"
          size={25}
          onClick={() => setVisible(false)}
        />
      ) : (
        <AiOutlineEyeInvisible
          className="absolute right-2 top-8 cursor-pointer"
          size={25}
          onClick={() => setVisible(true)}
        />
      )}
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
    <Loader className="w-6 h-6 animate-spin mx-auto" />
  ) : (
    <>
      <span>Sign in</span>
      <img src={iconLogo} alt="icon" className="w-4 h-4" />
    </>
  )}
</motion.button>

  </form>
</div>


        <div className="mb-4 -mt-4  flex justify-center">
          <p className="text-sm ">
           
            <Link to="/signup" className="text-black">
            I don't have an account
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
