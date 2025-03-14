import React from "react";
import { getRandomBg } from "../../utils";

const TableCard = ({ key, name, status, initials }) => {
  return (
    <div
      className="w-[300px] bg-paleBlue-600 p-4 rounded-lg cursor-pointer hover:bg-paleBlue-700"
      key={key}
    >
      <div className="flex items-center justify-between px-1">
        <h1 className="text-paleBlue-100 text-xl font-semibold">{name}</h1>
        <p
          className={`${
            status === "Booked"
              ? "text-green-600 bg-green-300"
              : "bg-aquaTeal-800 text-paleBlue-100"
          } px-2  rounded-lg py-1`}
        >
          {status}
        </p>
      </div>
      <div className="flex items-center justify-between mt-5 mb-9">
        <h1
          className={`${getRandomBg()} text-paleBlue-100 rounded-full p-4 text-xl`}
        >
          {initials}
        </h1>
      </div>
    </div>
  );
};

export default TableCard;
