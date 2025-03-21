import React from "react";
import { MdDelete } from "react-icons/md";
import { FaNotesMedical } from "react-icons/fa6";

const CartInfo = () => {
  return (
    <div className="px-4 py-2">
      <h1 className="text-lg text-royalBlue-100 font-semibold tracking-wide">
        Order Details
      </h1>
      <div className="mt-4 overflow-y-scroll scrollbar-hide h-[380px]">
        <div className="bg-paleBlue-900 rounded-lg px-4 py-4 mb-2">
          <div className="flex items-center justify-between">
            <h1 className="text-paleBlue-200 font-semibold tracking-wide text-md">
              Vegetable Lasagna
            </h1>
            <p className="text-paleBlue-200 font-semibold">x2</p>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex">
              <MdDelete
                className="text-paleBlue-200 cursor-pointer"
                size={20}
              />
              <FaNotesMedical
                className="text-paleBlue-200 cursor-pointer"
                size={20}
              />
            </div>
            <p className="text-paleBlue-100 text-md font-bold">$123</p>
          </div>
        </div>
        <div className="bg-paleBlue-900 rounded-lg px-4 py-4 mb-2">
          <div className="flex items-center justify-between">
            <h1 className="text-paleBlue-200 font-semibold tracking-wide text-md">
              Vegetable Lasagna
            </h1>
            <p className="text-paleBlue-200 font-semibold">x2</p>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex">
              <MdDelete
                className="text-paleBlue-200 cursor-pointer"
                size={20}
              />
              <FaNotesMedical
                className="text-paleBlue-200 cursor-pointer"
                size={20}
              />
            </div>
            <p className="text-paleBlue-100 text-md font-bold">$123</p>
          </div>
        </div>
        <div className="bg-paleBlue-900 rounded-lg px-4 py-4 mb-2">
          <div className="flex items-center justify-between">
            <h1 className="text-paleBlue-200 font-semibold tracking-wide text-md">
              Vegetable Lasagna
            </h1>
            <p className="text-paleBlue-200 font-semibold">x2</p>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex">
              <MdDelete
                className="text-paleBlue-200 cursor-pointer"
                size={20}
              />
              <FaNotesMedical
                className="text-paleBlue-200 cursor-pointer"
                size={20}
              />
            </div>
            <p className="text-paleBlue-100 text-md font-bold">$123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartInfo;
