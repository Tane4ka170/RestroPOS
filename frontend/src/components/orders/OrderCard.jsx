import React from "react";
import { FaCheck, FaCircle } from "react-icons/fa";

const OrderCard = () => {
  return (
    <div className="w-full max-w-[400px] bg-paleBlue-600 p-4 rounded-lg mb-4">
      <div className="flex items-center gap-5">
        <button className="bg-aquaTeal-500  p-3 text-xl font-bold rounded-lg">
          TS
        </button>

        <div className="flex items-center justify-between w-[100%]">
          <div className="flex flex-col items-start gap-1">
            <h1 className="text-paleBlue-100 text-lg font-semibold tracking-wide">
              Taylor Swift
            </h1>
            <p className="text-paleBlue-200 text-sm">#101/Dine in</p>
          </div>

          <div className="flex flex-col items-end gap-2">
            <p className="text-green-600 px-2 bg-green-300 rounded-lg py-1">
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
        <h1 className="text-paleBlue-100 text-lg font-semibold">Total</h1>
        <p className="text-paleBlue-100 text-lg font-semibold">$ 250.00</p>
      </div>
    </div>
  );
};

export default OrderCard;
