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
          </div>
        </div>
        {/* Cart Items */}
        {/* Bills */}
      </div>

      <BottomNav />
    </section>
  );
};

export default Menu;
