import React, { useState } from "react";
import restaurant from "../assets/images/restoraunt.jpg";
import logo from "../assets/images/logo.png";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <div className="flex min-h-screen w-full">
      {/* Left section */}
      <div className="w-1/2 relative flex items-center justify-center bg-cover">
        {/* Bg img */}
        <img
          src={restaurant}
          alt="Restaurant Imag"
          className="w-full h-full object-cover"
        />

        {/* Black overlay */}
        <div className="absolute inset-0 bg-[#000] bg-opacity-80"></div>

        {/* Quote at bottom */}
        <blockquote className="absolute bottom-10 px-8 mb-10 text-2xl italic text-paleBlue-100">
          "Offer customers delicious food, quick and friendly service, and a
          warm atmosphere — and they'll return time and again"
          <br />
          <span className="block mt-4 text-aquaTeal-600">
            - Founder of Restro
          </span>
        </blockquote>
      </div>

      {/* Right section */}
      <div className="w-1/2 min-h-screen bg-paleBlue-900 p-10">
        <div className="flex flex-col items-center gap-2">
          <img
            src={logo}
            alt="logo"
            className="h-14 w-14 border-2 rounded-full p-1"
          />
          <h1 className="text-lg font-semibold text-paleBlue-100 tracking-wide">
            Restro
          </h1>
        </div>

        <h2 className="text-4xl text-center mt-10 font-semibold text-aquaTeal-600 mb-10">
          {isRegister ? "Employee Registration" : "Employee Login"}
        </h2>
        {/* Components */}
        {isRegister ? <Register /> : <Login />}

        <div className="flex justify-center mt-6">
          <p className="text-sm text-paleBlue-200">
            {isRegister
              ? "Do you already have an account?"
              : "Need to create an account?"}

            <a
              href="#"
              className="text-aquaTeal-600 font-semibold hover:underline"
              onClick={() => setIsRegister(!isRegister)}
            >
              {isRegister ? "Sign in" : "Sign up"}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
