import React from "react";
import { FaArrowAltCircleRight, FaCheck, FaCircle } from "react-icons/fa";
import { getAvatarName } from "../../utils";

const OrderList = ({ order, orderKey }) => {
  return (
    <div className="flex items-center gap-6">
      <button className="bg-aquaTeal-500 p-4 text-xl font-bold rounded-lg text-paleBlue-100">
        {getAvatarName(order.customerDetails.name)}
      </button>
      <div className="flex items-center justify-between w-[100%]">
        <div className="items-start flex flex-col gap-1">
          <h1 className="text-paleBlue-100 text-lg font-semibold tracking-wide">
            {order.customerDetails.name}
          </h1>
          <p className="text-paleBlue-200 text-sm">
            {order.items?.length || 0} items
          </p>
        </div>

        <div>
          {order.table ? (
            <h1 className="text-aquaTeal-500 font-semibold border border-aquaTeal-500 p-1">
              Table{" "}
              <FaArrowAltCircleRight className="inline ml-2 text-paleBlue-700" />{" "}
              {order.table.tableNo}
            </h1>
          ) : (
            <h1 className="text-red-400 text-sm">No table assigned</h1>
          )}
        </div>

        <div className="items-end flex flex-col gap-2">
          {order.orderStatus === "Ready" ? (
            <>
              <p className="text-green-600 px-2 bg-green-300 rounded-lg py-1">
                <FaCheck className="mr-2 inline" />
                {order.orderStatus}
              </p>
              <p className="text-paleBlue-200 text-sm">
                <FaCircle className="inline mr-2 text-green-600" /> Ready to
                serve
              </p>
            </>
          ) : (
            <>
              <p className="text-green-600 px-2 bg-aquaTeal-200 rounded-lg py-1">
                <FaCircle className="mr-2 inline" />
                {order.orderStatus}
              </p>
              <p className="text-paleBlue-200 text-sm">
                <FaCircle className="inline mr-2 text-green-600" /> Getting your
                order ready
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderList;
