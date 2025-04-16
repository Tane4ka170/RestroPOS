import React, { useState } from "react";
import BottomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton";
import TableCard from "../components/tables/TableCard";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getTables } from "../https";
import { enqueueSnackbar } from "notistack";

const Tables = () => {
  const [status, setStatus] = useState("all");

  const { data: resData, isError } = useQuery({
    queryKey: ["tables"],
    queryFn: async () => {
      return await getTables();
    },
    placeholderData: keepPreviousData,
  });

  if (isError) {
    enqueueSnackbar("An error has occurred", { variant: "error" });
  }

  return (
    <section className="bg-paleBlue-400 h-[calc(100vh-5rem)] overflow-hidden flex flex-col">
      <div className="flex items-center justify-between px-10 py-4">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-xl font-bold tracking-wider text-paleBlue-100">
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

      <div className="flex-1 px-10 py-4 pb-20 overflow-y-auto scrollbar-hide">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resData?.data.data.map((table) => (
            <TableCard
              id={table._id}
              name={table.tableNo}
              status={table?.currentOrder?.customerDetails.name}
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
