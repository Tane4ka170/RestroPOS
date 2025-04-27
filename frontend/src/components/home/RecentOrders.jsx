import React from "react";
import { FaSearch } from "react-icons/fa";
import OrderList from "./OrderList";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getOrders } from "../../https";
import { enqueueSnackbar } from "notistack";

const RecentOrders = () => {
  const { data: resData, isError } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      return await getOrders();
    },
    placeholderData: keepPreviousData,
  });

  if (isError) {
    enqueueSnackbar("An error has occurred", { variant: "error" });
  }
  return (
    <div className="px-8 mt-6">
      <div className="bg-paleBlue-800 w-full h-[450px] rounded-lg">
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-paleBlue-100 text-lg">Recent Orders</h1>
          <a href="" className="text-[#de4d13] text-sm font-semibold">
            View all
          </a>
        </div>

        <div className="flex items-center gap-4 bg-paleBlue-900 rounded-[15px] px-6 py-4 mx-6">
          <FaSearch className="text-paleBlue-100" />
          <input
            type="text"
            placeholder="Search resent orders"
            className="bg-paleBlue-900 text-paleBlue-100  outline-none"
          />
        </div>

        {/* Order list */}
        <div className="mt-4 px-6 overflow-y-scroll h-[300px] scrollbar-hide">
          {resData?.data.data.length > 0 ? (
            resData.data.data.map((order) => {
              return <OrderList key={order._id} order={order} />;
            })
          ) : (
            <p className="col-span-3 text-paleBlue-100">No orders found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;
