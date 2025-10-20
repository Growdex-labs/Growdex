// // src/pages/SignUpPage.jsx
// import { motion } from "framer-motion";
// import Input from "../components/Input";
// import { Lock, Mail } from "lucide-react";
// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { GoogleLogin } from "@react-oauth/google";
// import { useAuthStore } from "../store/authStore";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { Loader } from "lucide-react";

// import Bayview from "../../assets/Bayview.png";
// import fusion from "../../assets/fusion.png";
// import uni from "../../assets/UNI.png";
// import Assiniboine from "../../assets/Assiniboine.png";

// const logos = [uni, Bayview, fusion, Assiniboine];

// const SignUpPage = () => {
//   const navigate = useNavigate();
//   const { isAuthenticated, signup, error, loginWithGoogle, isLoading } =
//     useAuthStore();

//   useEffect(() => {
//     if (isAuthenticated === true) {
//       navigate("/dashboard");
//     }
//   }, [isAuthenticated, navigate]);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [visible, setVisible] = useState(false);

//   const handleSignUp = async (e) => {
//     e.preventDefault();

//     try {
//       const result = await signup(email, password);

//       if (result?.pending) {
//         localStorage.setItem("pendingEmail", email);
//         navigate("/verify-email", { state: { email } });
//       } else {
//         localStorage.setItem("pendingEmail", email);
//         navigate("/verify-email", { state: { email } });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-black text-white p-24">
//       {/* Left side */}
//       <div className="flex flex-col justify-between w-1/2 px-12 py-10">
//         {/* Logo + description */}
//         <div>
//           <div className="flex items-center space-x-2 mb-6">
//             <img src="/growdex-logo.svg" alt="Growdex Logo" className="h-6" />
//             <span className="font-bold">Growdex</span>
//           </div>
//           <p className="text-gray-300 leading-relaxed">
//             Lorem ipsum dolor sit amet consectetur. Nisi quam neque augue sed
//             aenean turpis dignissim arcu. Senectus eros id a laoreet nulla sit ut
//             porta potenti. Eget nisi feugiat tristique ornare enim varius. Integer
//             faucibus eget morbi est egestas eu elit sed.
//           </p>
//         </div>

//         {/* Testimonial */}
//         <div className="mt-10">
//           <div className="flex items-center space-x-3">
//             <img
//               src="/sochima.png"
//               alt="Sochima Onah"
//               className="w-10 h-10 rounded-full"
//             />
//             <div>
//               <p className="font-semibold">Sochima Onah</p>
//               <p className="text-sm text-gray-400">CEO at Sochima Apes</p>
//             </div>
//           </div>
//         </div>

//         {/* Logo carousel */}
//         <div className="mt-10 overflow-hidden">
//           <motion.div
//             className="flex space-x-10"
//             animate={{ x: ["0%", "-100%"] }}
//             transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
//           >
//             {logos.concat(logos).map((logo, index) => (
//               <img
//                 key={index}
//                 src={logo}
//                 alt="partner logo"
//                 className="h-10 opacity-80"
//               />
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       {/* Right side form */}
//       <div className="flex items-center justify-center w-1/2 ">
//         <div className="bg-white rounded-2xl shadow-lg  p-8">
//           <h2 className="text-xl font-bold mb-2 text-black">
//             See Growdex in action
//           </h2>
//           <p className="text-sm text-gray-500 mb-6">
//             Sign up below to manage your Growdex account and more.
//           </p>

//           {/* Google login */}
//           <div className="mb-6 flex justify-center">
//             <GoogleLogin
        
//               onSuccess={(res) => loginWithGoogle(res.credential)}
//               onError={() => console.log("Google Sign-In failed")}
//             />
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSignUp}>
//             {/* Email */}
//             <div className="mb-4">
//               <Input
//                 icon={Mail}
//                 type="email"
//                 placeholder="Email Address"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             {/* Password */}
//             {/* <div className="relative w-full mb-4">
//               <Input
//                 type={visible ? "text" : ""}
//                 icon={Lock}
//                 placeholder="Password"
//                 value={}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               {visible ? (
//                 <AiOutlineEye
//                   className="absolute right-2 top-2 cursor-pointer"
//                   size={25}
//                   onClick={() => setVisible(false)}
//                 />
//               ) : (
//                 <AiOutlineEyeInvisible
//                   className="absolute right-2 top-2 cursor-pointer"
//                   size={25}
//                   onClick={() => setVisible(true)}
//                 />
//               )}
//               {error && (
//                 <p className="text-red-500 font-semibold mt-2">{error}</p>
//               )}
//             </div> */}

//             {/* Submit button */}
//             <motion.button
//               className="mt-2 w-full py-3 px-4 bg-black text-white 
//                 font-bold rounded-lg hover:bg-gray-900 transition duration-200"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               type="submit"
//               disabled={isLoading}
//             >
//               {isLoading ? (
//                 <Loader className=" animate-spin mx-auto" size={24} />
//               ) : (
//                 "Continue"
//               )}
//             </motion.button>
//           </form>

//           {/* Already registered */}
//           <p className="text-xs text-gray-500 mt-4">
//             Already have an account?{" "}
//             <Link to={"/login"} className="text-indigo-500 hover:underline">
//               Login
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUpPage;

// src/pages/SignUpPage.jsx
import { motion } from "framer-motion";
import Input from "../components/Input";
import { Lock, Mail, Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { useAuthStore } from "../store/authStore";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import logo from "../../assets/Frame 1686560934 (1).png"
import charles from "../../assets/IMG_9925.jpg" 
import Bayview from "../../assets/Bayview.png";
import fusion from "../../assets/fusion.png";
import uni from "../../assets/UNI.png";
import Assiniboine from "../../assets/Assiniboine.png";
import iconLogo from "../../assets/tail-right.png"
import { FcGoogle } from "react-icons/fc";

const logos = [uni, Bayview, fusion, Assiniboine];

const SignUpPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated,  signup, error, loginWithGoogle, isLoading } =
    useAuthStore();

  useEffect(() => {
    if (isAuthenticated === true) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

const handleSignUp = async (e) => {
  e.preventDefault();

  try {
    const result = await signup(email);

    if (result?.pending) {
      localStorage.setItem("pendingEmail", email);
      navigate("/verify-email", { state: { email } });
    } else {
      localStorage.setItem("pendingEmail", email);
      navigate("/verify-email", { state: { email } });
    }
  } catch (error) {
    console.log(error);
  }
};


  return (
<div className="flex flex-col-reverse lg:flex-row min-h-screen bg-black text-white p-6 lg:p-24">

      {/* Left side */}
 <div className="w-full lg:w-1/2 flex flex-col justify-between px-6 lg:px-12 py-10">
        {/* Logo + description */}
        <div className="hidden lg:block">
      <div className="flex items-center space-x-2 mb-6 mt-14">
        <img src={logo} alt="Growdex Logo" className="h-6" />
        <span className="font-bold">Growdex</span>
      </div>
          <p className="text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Nisi quam neque augue sed
            aenean turpis dignissim arcu. Senectus eros id a laoreet nulla sit ut
            porta potenti. Eget nisi feugiat tristique ornare enim varius. Integer
            faucibus eget morbi est egestas eu elit sed.
          </p>
        </div>

        {/* Testimonial */}
       <div className="hidden lg:flex -mt-8">
      <div className="flex items-center space-x-3">
        <img src={charles} alt="Sochima Onah" className="w-12 h-12 object-contain rounded-xl" />
        <div>
          <p className="font-semibold">Sochima Onah</p>
          <p className="text-sm text-gray-400">CEO at Sochima Apes</p>
        </div>
      </div>
    </div>

        {/* Logo carousel */}
    <div className="mt-10 overflow-hidden">
      <motion.div
        className="flex space-x-6 lg:space-x-10"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: window.innerWidth < 1024 ? 25 : 15,
          ease: "linear",
        }}
      >
        {logos.concat(logos).map((logo, index) => (
          <img key={index} src={logo} alt="partner logo" className="h-10 opacity-80" />
        ))}
      </motion.div>
    </div>
  </div>


      {/* Right side form */}
  <div className="flex items-center justify-center w-full lg:w-1/2 px-6 lg:px-0 mt-6 lg:mt-0">
  <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 w-full max-w-md">

          <h2 className="text-xl font-bold mb-2 text-black">
            See Growdex in action
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Sign up below to manage your Growdex account and more.
          </p>

          {/* Google login */}
          {/* <div className="mb-4">
           <GoogleLogin
  onSuccess={async (res) => {
    if (!res.credential) return console.error("No credential returned");

    try {
      const data = await loginWithGoogle(res.credential);
      if (data.isNewUser) {
        navigate("/welcome"); // first-time Google user
      } else {
        navigate("/dashboard"); // existing user
      }
    } catch (err) {
      console.error(err);
    }
  }}
  onError={() => console.log("Google Sign-In failed")}
/>

          </div> */}
          <GoogleLogin
  onSuccess={async (res) => {
    if (!res.credential) return console.error("No credential returned");

    try {
      const data = await loginWithGoogle(res.credential);
      if (!data.user.onboardingCompleted) {
        navigate("/onboarding-steps"); // first-time Google user
      } else {
        navigate("/dashboard"); // existing user
      }
    } catch (err) {
    const msg = err.response?.data?.message || err.message || "Google login failed";
    toast.error(msg);
  }
  }}
  onError={() => console.log("Google Sign-Up failed")}
  useOneTap={false}
  text="signup_with"
    render={({ onClick }) => (
        <button
          onClick={onClick}
          className="flex items-center gap-2 border rounded-md px-4 py-2 w-full justify-center hover:bg-gray-50 transition"
        >
          <FcGoogle className="text-xl" />
          <span className="text-gray-700 font-medium">Sign up with Google</span>
        </button>
      )}
  
/>


          {/* Form */}
          <form onSubmit={handleSignUp}>
            {/* Email */}
            <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1 mt-4">
    Email <span className="text-red-500">*</span>
  </label>
              <Input
                icon={Mail}
                type="email"
                placeholder="ovagacharles@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password (optional, currently hidden) */}
            {/* <div className="relative w-full mb-4">
              <Input
                type={visible ? "text" : "password"}
                icon={Lock}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {visible ? (
                <AiOutlineEye
                  className="absolute right-2 top-2 cursor-pointer"
                  size={25}
                  onClick={() => setVisible(false)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className="absolute right-2 top-2 cursor-pointer"
                  size={25}
                  onClick={() => setVisible(true)}
                />
              )}
              {error && (
                <p className="text-red-500 font-semibold mt-2">{error}</p>
              )}
            </div> */}
               {error && (
                <p className="text-red-500 font-semibold mt-2">{error}</p>
              )}
            <div className="flex justify-between">
            {/* Submit button */}

                     {/* Already registered */}
          <p className="text-xs text-gray-500 mt-2">
          
            <Link to={"/login"} className="text-black">
              I'm already registered
            </Link>
          </p>

      <motion.button
  className=" flex items-center justify-center gap-3 py-3 px-4 bg-black text-white 
 rounded-lg hover:bg-gray-900 transition duration-200"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  type="submit"
  disabled={isLoading}
>
  {isLoading ? (
    <Loader className="animate-spin mx-auto" size={24} />
  ) : (
    <>
      Continue
      <img src={iconLogo} alt="icon" className="w-4 h-4" />
    </>
  )}
</motion.button>

       
          </div>
          </form>

      
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
