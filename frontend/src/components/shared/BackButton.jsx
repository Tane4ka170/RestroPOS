import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className="text-[#74bebb] p-3 text-xl font-bold rounded-lg"
      onClick={() => navigate(-1)}
    >
      <IoIosArrowRoundBack />
    </button>
  );
};

export default BackButton;
