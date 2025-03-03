import React from "react";
import logo from "../../assets/images/logo.png";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-paleBlue-500">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-8 w-8" />
        <h1 className="text-lg font-semibold text-paleBlue-100">Restro</h1>
      </div>

      {/* SearchBar */}
      <div className="flex items-center gap-2 bg-paleBlue-900 p-2 rounded-[20px]">
        <FaSearch className="text-paleBlue-100" />
        <input
          type="text"
          placeholder="Search"
          className="bg-paleBlue-800 text-paleBlue-100 px-2 py-1 rounded-md"
        />
      </div>
    </header>
  );
};

export default Header;
