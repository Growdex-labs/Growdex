import { Navigate, useLocation } from "react-router-dom";

const RedirectFlowGuard = ({ children, type }) => {
  const location = useLocation();

  // pull from navigation state or localStorage
  const email = location.state?.email || localStorage.getItem("pendingEmail");
  const resetEmail = location.state?.resetEmail || localStorage.getItem("resetEmail");

  if (type === "verify-email" && !email) {
    return <Navigate to="/signup" replace />;
  }

  if (type === "reset-password" && !resetEmail) {
    return <Navigate to="/forgot-password" replace />;
  }

  return children;
};

export default RedirectFlowGuard;
