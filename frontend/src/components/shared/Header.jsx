import React from "react";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-paleBlue-500">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-8 w-8" />
        <h1 className="text-lg font-semibold text-paleBlue-100">Restro</h1>
      </div>
    </header>
  );
};

export default Header;
