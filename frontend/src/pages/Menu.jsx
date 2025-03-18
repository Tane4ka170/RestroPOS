import React from "react";
import BottomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton";
import { IoIosRestaurant } from "react-icons/io";
import MenuContainer from "../components/menu/MenuContainer";

const Menu = () => {
  return (
    <section className="bg-paleBlue-400 h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
      {/* Left div */}
      <div className="flex-[3]">
        <div className="flex items-center justify-between px-10 py-4">
          <div className="flex items-center gap-4">
            <BackButton />
            <h1 className="text-paleBlue-100 text-xl font-bold tracking-wider">
              Menu
            </h1>
          </div>
          <div className="flex items-center justify-around gap-4">
            <div className="flex items-center gap-3 cursor-pointer">
              <IoIosRestaurant className="text-paleBlue-100 text-4xl" />
              <div className="flex flex-col items-start">
                <h1 className="text-md text-paleBlue-100 font-semibold">
                  Customer Name
                </h1>
                <p className="text-xs text-paleBlue-300">Table No:2</p>
              </div>
            </div>
          </div>
        </div>
        <MenuContainer />
      </div>

      {/* Right div */}
      <div className="flex-[1] bg-paleBlue-700 mr-4 mt-3 h-[780px] rounded-lg pt-2">
        {/* Customer info */}
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex flex-col items-start">
            <h1 className="text-md text-paleBlue-100 font-semibold tracking-wide">
              Customer Name
            </h1>
            <p className="text-xs text-paleBlue-200 font-medium mt-1">
              #101/Dine In
            </p>
            <p className="text-xs text-paleBlue-200 font-medium mt-2">
              March 18, 2025 20:11
            </p>
          </div>
          <button className="bg-aquaTeal-500 p-3 text-xl font-bold rounded-lg">
            TS
          </button>
        </div>
        <hr className="border-paleBlue-900 border-t-2" />
        {/* Cart Items */}
        <div className="px-4 py-2">
          <h1 className="text-lg text-royalBlue-100 font-semibold tracking-wide">
            Order Details
          </h1>
        </div>
        {/* Bills */}
      </div>

      <BottomNav />
    </section>
  );
};

export default Menu;
