import React from "react";
import { Link } from "react-router-dom";
import { FaUtensils } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-paleBlue-100 text-paleBlue-900 px-4 text-center">
      <FaUtensils className="text-royalBlue-500 text-6xl mb-4" />
      <h1 className="text-5xl font-bold mb-2">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Oops! Page Not Found</h2>
      <p className="text-lg mb-6">
        It looks like you’ve lost your way in the menu. But don’t worry, we’ll
        help you get back!
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-green-500 text-white text-lg rounded-lg shadow-md hover:bg-green-600 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
