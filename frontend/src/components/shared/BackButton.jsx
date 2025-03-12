import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className="bg-aquaTeal-500 p-3 text-xl font-bold rounded-full text-paleBlue-100"
      onClick={() => navigate(-1)}
    >
      <IoIosArrowRoundBack />
    </button>
  );
};

export default BackButton;
