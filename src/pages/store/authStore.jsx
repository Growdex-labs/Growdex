import { create } from "zustand";
import toast from "react-hot-toast";
import axiosInstance from "../../utils/axiosInstance";

const API_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000/api/user"
    : `${import.meta.env.VITE_API_URL}/api/user`;

axiosInstance.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
    onboardingCompleted: false,


  setUser: (user) => set({ user, isAuthenticated: !!user }),
  startOnboarding: () => set({ onboardingCompleted: true }),
  finishOnboarding: () => set({ onboardingCompleted: false, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false, onboardingCompleted: false }),
  error: null,
  isLoading: false,
  isCheckingAuth: true,
  message: null,

  // signup: async (email, password) => {
  //   set({ isLoading: true, error: null });

  //   const lowerCaseEmail = email.toLowerCase();

  //   try {
  //     const response = await axiosInstance.post(`${API_URL}/signup`, {
  //       email: lowerCaseEmail,
  //       password,
  
       
       
  //     });
  //     set({
  //       user: response.data.user,
  //       message: response.data.message,
  //       isAuthenticated: false, 
  //       isLoading: false,
  //     });
  //     toast.success(response.data.message);
  //   } catch (error) {
  //     set({
  //       error: error.response?.data?.message || "Error signing up",
  //       isLoading: false,
  //     });
  //     throw error;
  //   }
  // },

  signup: async (email, password) => {
  set({ isLoading: true, error: null });

  const lowerCaseEmail = email.toLowerCase();

  try {
    const response = await axiosInstance.post(`${API_URL}/signup`, {
      email: lowerCaseEmail,
      // password,
    });

    set({
      user: response.data.user,
      message: response.data.message,
      isAuthenticated: false,
      isLoading: false,
    });

    toast.success(response.data.message);
    return response.data; // return so SignUpPage can act on it
  } catch (error) {
    const errMsg = error.response?.data?.message || "Error signing up";

    //  Special case: pending user already exists
    if (errMsg.includes("Please verify your email")) {
      toast.error("You already signed up. Redirecting to verification...");
      return { pending: true }; //  signal frontend
    }

    set({
      error: errMsg,
      isLoading: false,
    });
    throw error;
  }
},
resendVerificationEmail: async (email) => {
  set({ isLoading: true, error: null });
  try {
    const response = await axiosInstance.post(`${API_URL}/resend-verification`, { email });
    set({ message: response.data.message, isLoading: false });
    toast.success(response.data.message);

    // Return minutesLeft if available
    return { ...response.data, minutesLeft: response.data.minutesLeft || 0 };
  } catch (error) {
    const message = error.response?.data?.message || "Error resending verification email";
    const minutesLeft = error.response?.data?.minutesLeft || 0;

    set({ isLoading: false, error: message });
    toast.error(message);

    throw { message, minutesLeft };
  }
},

setPassword: async ({ email, password }) => {
  set({ isLoading: true, error: null });
  try {
    const res = await axiosInstance.post(`${API_URL}/set-password`, { email, password });

    set({
      user: res.data.user,
      message: res.data.message,
      isAuthenticated: true,
      onboardingCompleted: true,   // ✅ mark onboarding done
      isLoading: false,
    });

    toast.success(res.data.message);
    return res.data;
  } catch (error) {
    set({
      error: error.response?.data?.message || "Error setting password",
      isLoading: false,
    });
    throw error;
  }
},



login: async (email, password) => {
  set({ isLoading: true, error: null });

  const lowerCaseEmail = email.toLowerCase();

  try {
    const response = await axiosInstance.post(
      `${API_URL}/login`,
      { email: lowerCaseEmail, password },
      { withCredentials: true }
    );

    const { user, onboardingCompleted, message } = response.data;

    set({
      user,
      isAuthenticated: true,
      onboardingCompleted: onboardingCompleted || false,
      message,
      error: null,
      isLoading: false,
    });

    toast.success(message);
    return { user, onboardingCompleted };
  } catch (error) {
    set({
      error: error.response?.data?.message || "Error logging in",
      isLoading: false,
    });
    throw error;
  }
},


  
// Google Login
loginWithGoogle: async (credential) => {
  set({ isLoading: true, error: null });
  try {
    const response = await axiosInstance.post(
      `${API_URL}/google-login`,
      { credential },
      { withCredentials: true }
    );

    const { user, onboardingCompleted, message } = response.data;

    if (!onboardingCompleted) {
      // Don't mark them fully authenticated yet
      set({
        user,
        isAuthenticated: true,
          onboardingCompleted: false, 
        message: "Please complete onboarding",
        error: null,
        isLoading: false,
      });
      return { user, requiresOnboarding: true };
    }

    // Normal login
    set({
      isAuthenticated: true,
      user,
      message: message || "Logged in successfully",
      error: null,
      isLoading: false,
    });

    return response.data;
  } catch (error) {
    set({
      error: error.response?.data?.message || "Google login failed",
      isLoading: false,
    });
    throw error;
  }
},



  logout: async (navigate) => {
    set({ isLoading: true, error: null });
    try {
      await axiosInstance.get(`${API_URL}/logout`, { withCredentials: true });
      set({
        user: null,
        isAuthenticated: false,
        error: null,
        isLoading: false,
      });
      toast.success("Logged out");
      if (navigate) navigate("/login"); // pass navigate from component
    } catch (error) {
      set({ error: "Error logging out", isLoading: false });
      throw error;
    }
  },
verifyEmail: async ({ email, code }) => {
  set({ isLoading: true, error: null });
  try {
    const response = await axiosInstance.post(`${API_URL}/verify-email`, { email, code });
    set({
      user: response.data.user,
      message: response.data.message,
      isAuthenticated: false,
      isLoading: false,
    });
    return response.data;
  } catch (error) {
    set({
      error: error.response?.data?.message || "Error verifying email",
      isLoading: false,
    });
    throw error;
  }
},

checkAuth: async () => {
  set({ isCheckingAuth: true, error: null });
  try {
    const response = await axiosInstance.get(`${API_URL}/check-auth`, {
      withCredentials: true,
    });

    const { user, onboardingCompleted } = response.data;

    set({
      user,
      isAuthenticated: true,
      onboardingCompleted: onboardingCompleted || false,
      isCheckingAuth: false,
    });

    return { user, onboardingCompleted };
  } catch {
    set({
      user: null,
      isAuthenticated: false,
      onboardingCompleted: false,
      isCheckingAuth: false,
    });
    return { user: null, onboardingCompleted: false };
  }
},




forgotPassword: async (email) => {
  set({ isLoading: true, error: null, message: null });

  const lowerCaseEmail = email.toLowerCase();

  try {
    const response = await axiosInstance.post(`${API_URL}/forgot-password`, {
      email: lowerCaseEmail,
    });

    set({ message: response.data.message, isLoading: false });
    // Return minutesLeft if provided by the server
    return { ...response.data, minutesLeft: response.data.minutesLeft || 0 };
  } catch (error) {
    const message = error.response?.data?.message || "Error sending OTP";
    const minutesLeft = error.response?.data?.minutesLeft || 0;

    set({ isLoading: false, error: message });
    throw { message, minutesLeft }; // component can handle toast + timer
  }
},


verifyPasswordOtp: async ({ email, code }) => {
  set({ isLoading: true, error: null, message: null });
  try {
    const response = await axiosInstance.post(`${API_URL}/verify-password-otp`, {
      email,
      code,
    });
    set({ message: response.data.message, isLoading: false });
    return response.data; 
  } catch (error) {
    set({
      isLoading: false,
      error: error.response?.data?.message || "Invalid or expired OTP",
    });
    throw error; 
  }
},

resetPassword: async ({ email, code, password }) => {
  set({ isLoading: true, error: null, message: null });
  try {
    const response = await axiosInstance.post(`${API_URL}/reset-password`, {
      email,
      code,
      password,
    });
    set({ message: response.data.message, isLoading: false });
    return response.data; 
  } catch (error) {
    set({
      isLoading: false,
      error: error.response?.data?.message || "Error resetting password",
    });
    throw error; 
  }
},

}));


// export const useSubscriptionStore = create((set) => ({
//   plan: null,
//   billingCycle: "monthly",
//   isLoading: false,
//   error: null,

//   setPlan: (plan) => set({ plan }),
//   setBillingCycle: (cycle) => set({ billingCycle: cycle }),

//   subscribe: async () => {
//     set({ isLoading: true, error: null });
//     const state = get(); // get current store state
//     try {
//       const response = await axiosInstance.post(`${API_URL}/create-checkout-session`, {
//         plan: state.plan,
//         billingCycle: state.billingCycle,
//       });
//       window.location.href = response.data.checkoutUrl; // redirect to Stripe Checkout
//     } catch (err) {
//       set({ error: err.response?.data?.error || "Subscription failed" });
//       toast.error(err.response?.data?.error || "Subscription failed");
//     } finally {
//       set({ isLoading: false });
//     }
//   },
// }));


export const useSubscriptionStore = create((set, get) => ({
  plan: null,
  billingCycle: "monthly",
  subscriptionStatus: null, // active, trialing, canceled
  trialEnd: null,
  isLoading: false,
  error: null,

  setPlan: (plan) => set({ plan }),
  setBillingCycle: (cycle) => set({ billingCycle: cycle }),

  subscribe: async () => {
    set({ isLoading: true, error: null });
    const state = get();
    if (!state.plan) {
      toast.error("Please select a plan");
      set({ isLoading: false });
      return;
    }

    try {
      const response = await axiosInstance.post(`${API_URL}/create-checkout-session`, {
        plan: state.plan,
        billingCycle: state.billingCycle,
      });
      // Redirect to Stripe Checkout
      window.location.href = response.data.checkoutUrl;
    } catch (err) {
      const message = err.response?.data?.error || "Subscription failed";
      set({ error: message });
      toast.error(message);
    } finally {
      set({ isLoading: false });
    }
  },

  fetchSubscriptionStatus: async () => {
    try {
      const response = await axiosInstance.get(`${API_URL}/subscription-status`);
      set({
        subscriptionStatus: response.data.status,
        trialEnd: response.data.trialEnd ? new Date(response.data.trialEnd) : null,
      });
    } catch (err) {
      console.error("Failed to fetch subscription status", err);
    }
  },
}));
