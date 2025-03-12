import React from "react";
import { CiCircleMore, CiHome } from "react-icons/ci";
import { GoListOrdered } from "react-icons/go";
import { MdOutlineTableBar } from "react-icons/md";
import { BiDish } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-paleBlue-800 p-2 flex justify-around">
      <button
        className="text-paleBlue-100 bg-paleBlue-700 w-[200px] rounded-[20px] items-center flex justify-center"
        onClick={() => navigate("/")}
      >
        <CiHome className="inline mr-2" size={20} /> <p>Home</p>
      </button>
      <button
        className="text-paleBlue-200 bg-paleBlue-800 w-[200px] rounded-[20px] items-center flex justify-center"
        onClick={() => navigate("/orders")}
      >
        <GoListOrdered className="inline mr-2" size={20} /> <p>Orders</p>
      </button>
      <button
        className="text-paleBlue-200 bg-paleBlue-800 w-[200px] rounded-[20px] items-center flex justify-center"
        onClick={() => navigate("/tables")}
      >
        <MdOutlineTableBar className="inline mr-2" size={20} /> <p>Tables</p>
      </button>
      <button className="text-paleBlue-200 bg-paleBlue-800 w-[200px] rounded-[20px] items-center flex justify-center">
        <CiCircleMore className="inline mr-2" size={20} /> <p>More</p>
      </button>

      <button className="bg-aquaTeal-500 rounded-full text-paleBlue-100 p-3 absolute bottom-4">
        <BiDish size={30} />
      </button>
    </div>
  );
};

export default BottomNav;
