import React from "react";
import BottomNav from "../components/shared/BottomNav";
import OrderCard from "../components/orders/OrderCard";

const Orders = () => {
  return (
    <section className="bg-paleBlue-400 h-[calc(100vh-5rem)] overflow-hidden">
      <div className="flex items-center justify-between px-10 py-4">
        <h1 className="text-paleBlue-100 text-xl font-bold tracking-wider">
          Orders
        </h1>
        <div className="flex items-center justify-around gap-4">
          <button className="text-paleBlue-200 text-lg  rounded-lg px-4 py-2 font-semibold">
            All
          </button>
          <button className="text-paleBlue-200 text-lg bg-paleBlue-700 rounded-lg px-4 py-2 font-semibold">
            In Progress
          </button>
          <button className="text-paleBlue-200 text-lg  rounded-lg px-4 py-2 font-semibold">
            Ready
          </button>
          <button className="text-paleBlue-200 text-lg rounded-lg px-4 py-2 font-semibold">
            Completed
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 px-16 py-4 overflow-y-scroll scrollbar-hide">
        <OrderCard />
      </div>

      <BottomNav />
    </section>
  );
};

export default Orders;
