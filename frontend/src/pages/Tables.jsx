import React, { useState } from "react";
import BottomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton";
import TableCard from "../components/tables/TableCard";
import { tables } from "../constants";

const Tables = () => {
  const [status, setStatus] = useState("all");

  return (
    <section className="bg-paleBlue-400 h-[calc(100vh-5rem)] overflow-hidden flex flex-col">
      <div className="flex items-center justify-between px-10 py-4">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-paleBlue-100 text-xl font-bold tracking-wider">
            Tables
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
              status === "booked" && "bg-paleBlue-700 rounded-lg px-5 py-2"
            }`}
            onClick={() => setStatus("booked")}
          >
            Booked
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-10 py-4 pb-20 scrollbar-hide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tables.map((table) => (
            <TableCard
              key={table.id}
              name={table.name}
              status={table.status}
              initials={table.initial}
            />
          ))}
        </div>
      </div>

      <BottomNav />
    </section>
  );
};

export default Tables;
