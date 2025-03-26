import React from "react";
import { useSelector } from "react-redux";
import { getTotalPrice } from "../../redux/slices/cartSlice";

const BillsInfo = () => {
  const cartData = useSelector((state) => state.cart);
  const total = useSelector(getTotalPrice);
  const taxRate = 5.25;
  const tax = (total * taxRate) / 1000;
  const totalPriceWithTax = total + tax;
  return (
    <>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-xs text-paleBlue-200 font-medium mt-2">
          {cartData.length}
        </p>
        <h1 className="text-paleBlue-100 text-md font-bold">
          {total.toFixed(2)}
        </h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-xs text-paleBlue-200 font-medium mt-2">Tax(5,25%)</p>
        <h1 className="text-paleBlue-100 text-md font-bold">
          ${tax.toFixed(2)}
        </h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-xs text-paleBlue-200 font-medium mt-2">
          Total with tax (5,25%)
        </p>
        <h1 className="text-paleBlue-100 text-md font-bold">
          ${totalPriceWithTax.toFixed(2)}
        </h1>
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
