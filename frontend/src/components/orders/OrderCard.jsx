import React from "react";
import { FaArrowAltCircleRight, FaCheck, FaCircle } from "react-icons/fa";
import { formatDateAndTime, getAvatarName } from "../../utils";

const OrderCard = ({ key, order }) => {
  return (
    <div className="w-full max-w-[400px] bg-paleBlue-600 p-4 rounded-lg mb-4">
      <div className="flex items-center gap-5">
        <button className="p-3 text-xl font-bold rounded-lg bg-aquaTeal-500">
          {getAvatarName(order.customerDetails.name)}
        </button>

        <div className="flex items-center justify-between w-[100%]">
          <div className="flex flex-col items-start gap-1">
            <h1 className="text-lg font-semibold tracking-wide text-paleBlue-100">
              {order.customerDetails.name}
            </h1>
            <p className="text-sm text-paleBlue-200">
              #{Math.floor(new Date(order._id).getTime())}/Dine in
            </p>
            <p className="text-sm text-paleBlue-200">
              Table{" "}
              <FaArrowAltCircleRight className="inline ml-2 text-paleBlue-700" />{" "}
              {order.table?.tableNo || "Unknown"}
            </p>
          </div>

          <div className="flex flex-col items-end gap-2">
            {order.orderStatus === "Ready" ? (
              <>
                <p className="px-2 py-1 text-green-600 bg-green-300 rounded-lg">
                  <FaCheck className="inline mr-2" />
                  {order.orderStatus}
                </p>
                <p className="text-sm text-paleBlue-200">
                  <FaCircle className="inline mr-2 text-green-600" /> Ready to
                  serve
                </p>
              </>
            ) : (
              <>
                <p className="px-2 py-1 text-green-600 rounded-lg bg-aquaTeal-200">
                  <FaCircle className="inline mr-2" />
                  {order.orderStatus}
                </p>
                <p className="text-sm text-paleBlue-200">
                  <FaCircle className="inline mr-2 text-green-600" /> Getting
                  your order ready
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 text-paleBlue-200">
        <p>{formatDateAndTime(order.createdAt)}</p>
        <p>{order.items.length} items</p>
      </div>
      <hr className="w-full mt-4 text-paleBlue-100 border-t-1 border-royalBlue-500" />
      <div className="flex items-center justify-between mt-4">
        <h1 className="text-lg font-semibold text-paleBlue-100">Total</h1>
        <p className="text-lg font-semibold text-paleBlue-100">
          ${order.bulls?.totalWithTax?.toFixed(2) || "0.00"}
        </p>
      </div>
    </div>
  );
};

export default OrderCard;
