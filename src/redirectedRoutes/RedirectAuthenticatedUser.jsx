import { Navigate } from "react-router-dom";
import { useAuthStore } from "../pages/store/authStore";

const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user, isCheckingAuth } = useAuthStore();

  if (isCheckingAuth) return null; // or <Loader /> if you want

  if (isAuthenticated && user?.isVerified) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RedirectAuthenticatedUser;
