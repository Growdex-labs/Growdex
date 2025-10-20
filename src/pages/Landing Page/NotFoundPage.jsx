import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-6xl font-bold text-orange-500 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
