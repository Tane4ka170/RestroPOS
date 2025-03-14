import React, { useState } from "react";
import { CiCircleMore, CiHome } from "react-icons/ci";
import { GoListOrdered } from "react-icons/go";
import { MdOutlineTableBar } from "react-icons/md";
import { BiDish } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

const BottomNav = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [guestCount, setGuestCount] = useState(0);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const increment = () => {
    if (guestCount >= 6) return;
    setGuestCount((prev) => prev + 1);
  };
  const decrement = () => {
    if (guestCount <= 0) return;
    setGuestCount((prev) => prev - 1);
  };

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

      <button
        className="bg-aquaTeal-500 rounded-full text-paleBlue-100 p-3 absolute bottom-4"
        onClick={openModal}
      >
        <BiDish size={30} />
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Create Order">
        <div>
          <label className="block text-paleBlue-200 mb-2 text-sm font-medium">
            Customer Name
          </label>
          <div className="flex items-center rounded-lg p-3 px-4 bg-paleBlue-700">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter customer name"
              className="bg-transparent flex-1 text-paleBlue-100 focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label className="block text-paleBlue-200 mb-2 mt-3 text-sm font-medium">
            Customer Phone
          </label>
          <div className="flex items-center rounded-lg p-3 px-4 bg-paleBlue-700">
            <input
              type="number"
              name=""
              id=""
              placeholder="+11 1 11 11 11 11"
              className="bg-transparent flex-1 text-paleBlue-100 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 mt-3 text-sm font-medium text-paleBlue-200">
            Guest
          </label>
          <div className="flex items-center justify-between bg-paleBlue-700 px-4 py-3 rounded-lg">
            <button className="text-aquaTeal-500 text-2xl" onClick={decrement}>
              &minus;
            </button>
            <span className="text-paleBlue-100">{guestCount} persons</span>
            <button className="text-aquaTeal-500 text-2xl" onClick={increment}>
              &#43;
            </button>
          </div>
        </div>
        <button
          className="w-full bg-aquaTeal-800 text-paleBlue-100 rounded-lg py-3 mt-8 hover:bg-aquaTeal-300"
          onClick={() => navigate("/tables")}
        >
          Create Order
        </button>
      </Modal>
    </div>
  );
};

export default BottomNav;
