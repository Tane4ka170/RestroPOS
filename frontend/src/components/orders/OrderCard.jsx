import React from "react";
import { FaCheck, FaCircle } from "react-icons/fa";

const OrderCard = () => {
  return (
    <div className="w-[500px] bg-paleBlue-600 p-4 rounded-lg mb-4">
      <div className="flex items-center gap-5">
        <button className="bg-[#74bebb] p-4 text-xl font-bold rounded-lg text-paleBlue-100">
          TS
        </button>

        <div className="flex items-center justify-between w-[100%]">
          <div className="items-start flex flex-col gap-1">
            <h1 className="text-paleBlue-100 text-lg font-semibold tracking-wide">
              Taylor Swift
            </h1>
            <p className="text-paleBlue-200 text-sm">#101/Dine in</p>
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

      <div className="flex justify-between items-center mt-4 text-paleBlue-200">
        <p>March 8, 2025 16:33</p>
        <p>8 items</p>
      </div>
      <hr className="w-full text-paleBlue-100 mt-4 border-t-1 border-royalBlue-500" />
      <div className="flex items-center justify-between mt-4">
        <h1>Total</h1>
        <p className="text-paleBlue-100 text-lg font-semibold">$ 250.00</p>
      </div>
    </div>
  );
};

export default OrderCard;
