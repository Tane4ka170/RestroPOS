import React, { useState } from "react";
import BottomNav from "../components/shared/BottomNav";
import OrderCard from "../components/orders/OrderCard";
import BackButton from "../components/shared/BackButton";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getOrders } from "../https";
import { enqueueSnackbar } from "notistack";

const Orders = () => {
  const [status, setStatus] = useState("all");

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

  const filteredOrders = resData?.data.data.filter((order) => {
    if (status === "all") return true;
    return order.orderStatus?.toLowerCase() === status;
  });

  return (
    <section className="bg-paleBlue-400 h-[calc(100vh-5rem)] overflow-hidden">
      <div className="flex items-center justify-between px-10 py-4">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-xl font-bold tracking-wider text-paleBlue-100">
            Orders
          </h1>
        </div>
        <div className="flex items-center justify-around gap-4">
          {["all", "pending", "ready", "completed"].map((stat) => (
            <button
              key={stat}
              className={`text-paleBlue-200 text-lg rounded-lg px-5 py-2 font-semibold ${
                status === stat && "bg-paleBlue-700"
              }`}
              onClick={() => setStatus(stat)}
            >
              {stat === "all"
                ? "All"
                : stat === "progress"
                ? "In Progress"
                : stat.charAt(0).toUpperCase() + stat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-scroll h-[650px] px-10 py-4 scrollbar-hide">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredOrders?.length > 0 ? (
            filteredOrders.map((order) => (
              <OrderCard key={order._id} order={order} />
            ))
          ) : (
            <p className="col-span-3 text-paleBlue-100">No orders found</p>
          )}
        </div>
      </div>

      <BottomNav />
    </section>
  );
};

export default Orders;
