import React, { useState } from "react";
import BottomNav from "../components/shared/BottomNav";
import OrderCard from "../components/orders/OrderCard";
import BackButton from "../components/shared/BackButton";

const Orders = () => {
  const [status, setStatus] = useState("all");

  return (
    <section className="bg-paleBlue-400 h-[calc(100vh-5rem)] overflow-hidden">
      <div className="flex items-center justify-between px-10 py-4">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-paleBlue-100 text-xl font-bold tracking-wider">
            Orders
          </h1>
        </div>
        <div className="flex items-center justify-around gap-4">
          <button
            className={`text-paleBlue-200 text-lg rounded-lg px-5 py-2 font-semibold ${
              status === "all" && "bg-paleBlue-700 rounded-lg px-5 py-2"
            }`}
            onClick={() => setStatus("all")}
          >
            All
          </button>
          <button
            className={`text-paleBlue-200 text-lg rounded-lg px-4 py-2 font-semibold ${
              status === "progress" && "bg-paleBlue-700 rounded-lg px-5 py-2"
            }`}
            onClick={() => setStatus("progress")}
          >
            In Progress
          </button>
          <button
            className={`text-paleBlue-200 text-lg rounded-lg px-4 py-2 font-semibold ${
              status === "ready" && "bg-paleBlue-700 rounded-lg px-5 py-2"
            }`}
            onClick={() => setStatus("ready")}
          >
            Ready
          </button>
          <button
            className={`text-paleBlue-200 text-lg rounded-lg px-4 py-2 font-semibold ${
              status === "completed" && "bg-paleBlue-700 rounded-lg px-5 py-2"
            }`}
            onClick={() => setStatus("completed")}
          >
            Completed
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-scroll h-[650px] px-10 py-4 scrollbar-hide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <OrderCard />
        </div>
      </div>

      <BottomNav />
    </section>
  );
};

export default Orders;
