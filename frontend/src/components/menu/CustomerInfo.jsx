import React from "react";

const CustomerInfo = () => {
  return (
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
  );
};

export default CustomerInfo;
