import React from "react";
import { getAvatarName, getBgColor } from "../../utils";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateTable } from "../../redux/slices/customerSlice";
import { FaArrowAltCircleRight } from "react-icons/fa";

const TableCard = ({ id, name, status, initials }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (name) => {
    if (status === "Booked") return;

    const table = { tableId: id, tableNo: name };
    dispatch(updateTable({ table }));
    navigate("/menu");
  };
  return (
    <div
      className="w-[300px] bg-paleBlue-600 p-4 rounded-lg cursor-pointer hover:bg-paleBlue-700"
      key={id}
      onClick={() => handleClick(name)}
    >
      <div className="flex items-center justify-between px-1">
        <h1 className="text-xl font-semibold text-paleBlue-100">
          Table{" "}
          <FaArrowAltCircleRight className="inline ml-2 text-paleBlue-700" />{" "}
          {name}
        </h1>
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
          className={` text-paleBlue-100 rounded-full p-4 text-xl`}
          style={{ backgroundColor: initials ? getBgColor() : "#cfcef1" }}
        >
          {getAvatarName(initials) || "N/A"}
        </h1>
      </div>
    </div>
  );
};

export default TableCard;
