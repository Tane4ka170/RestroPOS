import React from "react";

const MiniCard = ({ title, icon, number, footerNum }) => {
  return (
    <div className="bg-paleBlue-800 py-5 px-5 rounded-lg w-[50%]">
      <div className="flex items-center justify-between">
        <h1 className="text-paleBlue-100 text-lg font-semibold tracking-wide">
          {title}
        </h1>
        <button
          className={`${
            title === "Total Earning" ? "bg-[#9ea4cc]" : "bg-[#070121]"
          } p-3 rounded-lg text-paleBlue-100 text-2xl`}
        >
          {icon}
        </button>
      </div>
      <div>
        <h1>{number}</h1>
        <h1>{footerNum} than yesterday</h1>
      </div>
    </div>
  );
};

export default MiniCard;
