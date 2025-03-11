import React from "react";

const TableCard = () => {
  return (
    <div className="w-[300px] bg-paleBlue-600 p-4 rounded-lg mb-4 cursor-pointer shadow-lg">
      <div className="flex items-center justify-between px-1">
        <h1 className="text-paleBlue-100 text-xl font-semibold">Table 1</h1>
        <p className="text-green-600 px-2 bg-green-300 rounded-lg py-1">
          Booked
        </p>
      </div>
      <div className="flex items-center justify-between my-5">
        <h1 className="bg-[#74bebb] text-paleBlue-100 rounded-full p-4 text-xl">
          TS
        </h1>
      </div>
    </div>
  );
};

export default TableCard;
