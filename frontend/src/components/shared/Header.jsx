import React from "react";
import logo from "../../assets/images/logo.png";
import { FaRegUser, FaSearch } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-paleBlue-500">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-8 w-8" />
        <h1 className="text-lg font-semibold text-paleBlue-100">Restro</h1>
      </div>

      {/* SearchBar */}
      <div className="flex items-center gap-2 bg-paleBlue-600 rounded-[20px] px-5 py-2 w-[500px]">
        <FaSearch className="text-paleBlue-100" />
        <input
          type="text"
          placeholder="Search"
          className="bg-paleBlue-600 text-paleBlue-100 px-2 py-1 rounded-md outline-none"
        />
      </div>

      {/* Logged user details */}
      <div className="flex items-center gap-4">
        <div className="bg-paleBlue-600 rounded-[15px] p-3 cursor-pointer">
          <CiBellOn className="text-paleBlue-100 text-2xl" />
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <FaRegUser className="text-paleBlue-100 text-4xl" />
          <div className="flex flex-col items-start">
            <h1 className="text-md text-paleBlue-100 font-semibold">
              Taylor Swift
            </h1>
            <p className="text-xs text-paleBlue-300">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
