import React from "react";
import { FaCheck, FaCircle } from "react-icons/fa";

const OrderList = () => {
  return (
    <div className="flex items-center gap-6">
      <button className="bg-[#070121] p-4 text-xl font-bold rounded-lg text-paleBlue-100">
        TS
      </button>
      <div className="flex items-center justify-between w-[100%]">
        <div className="items-start flex flex-col gap-1">
          <h1 className="text-paleBlue-100 text-lg font-semibold tracking-wide">
            Taylor Swift
          </h1>
          <p className="text-paleBlue-200 text-sm">8 items</p>
        </div>
        <div className="items-start flex flex-col gap-2">
          <p className="text-green-600 px-4">
            {" "}
            <FaCheck className="mr-2 inline" />
            Ready
          </p>
          <p className="text-paleBlue-200 text-sm">
            <FaCircle className="inline mr-2 text-green-600" /> Ready to serve
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
