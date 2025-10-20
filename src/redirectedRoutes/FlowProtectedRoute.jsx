// src/components/FlowProtectedRoute.jsx
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import Loader from "../components/loader/Loader";
import { useAuthStore } from "../pages/store/authStore";

const FlowProtectedRoute = ({ children, requireOnboarding = false }) => {
  const { isCheckingAuth, isAuthenticated, user } = useAuthStore();

  if (isCheckingAuth) return <Loader />;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // 🚨 FIX: If user hasn’t onboarded and we are on onboarding page, show children
  if (!user?.onboardingCompleted && !requireOnboarding) {
    return children;
  }

  // User hasn’t onboarded but tries to access other pages
  if (!user?.onboardingCompleted && requireOnboarding === false) {
    return <Navigate to="/onboarding-steps" replace />;
  }

  // User already onboarded but tries to access onboarding again
  if (user?.onboardingCompleted && requireOnboarding === true) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default FlowProtectedRoute;
