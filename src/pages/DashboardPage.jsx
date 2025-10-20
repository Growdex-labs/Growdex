import React from "react";
import { useAuthStore } from "../pages/store/authStore";
import { AiOutlineLogin } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const logoutHandler = () => {
    logout(); // clear auth state
    navigate("/login"); // redirect to login page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Welcome to your Dashboard</h1>

      {/* Logout Button */}
      <div
        className="flex items-center cursor-pointer w-full max-w-xs justify-center mt-4 py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        onClick={logoutHandler}
      >
        <AiOutlineLogin size={20} />
        <span className="pl-2 text-sm">Log out</span>
      </div>
    </div>
  );
};

export default DashboardPage;
