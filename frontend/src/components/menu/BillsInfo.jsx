import React from "react";

const BillsInfo = () => {
  return (
    <>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-xs text-paleBlue-200 font-medium mt-2">Items(4)</p>
        <h1 className="text-paleBlue-100 text-md font-bold">$240</h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-xs text-paleBlue-200 font-medium mt-2">Tax(5,25%)</p>
        <h1 className="text-paleBlue-100 text-md font-bold">$24</h1>
      </div>

      <div className="flex items-center gap-3 px-5 mt-4">
        <button className="bg-paleBlue-600 px-4 py-3 w-full rounded-lg text-paleBlue-200 font-semibold">
          Cash
        </button>
        <button className="bg-paleBlue-600 px-4 py-3 w-full rounded-lg text-paleBlue-200 font-semibold">
          Online
        </button>
      </div>

      <div className="flex items-center gap-3 px-5 mt-4">
        <button className="bg-green-600 px-4 py-3 w-full rounded-lg text-paleBlue-100 font-semibold text-lg">
          Print Receipt
        </button>
        <button className="bg-royalBlue-300 px-4 py-3 w-full rounded-lg text-paleBlue-100 font-semibold text-lg">
          Place Order
        </button>
      </div>
    </>
  );
};

export default BillsInfo;
