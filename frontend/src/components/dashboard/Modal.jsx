import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosClose } from "react-icons/io";
import { useMutation } from "@tanstack/react-query";
import { addTable } from "../../https";
import { enqueueSnackbar } from "notistack";

const Modal = ({ setIsTableModalOpen }) => {
  const [tableData, setTableData] = useState({ tableNo: "", seats: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTableData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(tableData);
    tableMutation.mutate(tableData);
  };
  const handleCloseModal = () => {
    setIsTableModalOpen(false);
  };

  const tableMutation = useMutation({
    mutationFn: (reqData) => addTable(reqData),
    onSuccess: (data) => {
      setIsTableModalOpen(false), console.log(data);
    },
    onError: (error) => {
      const { data } = error.response;
      console.log(error);
      enqueueSnackbar(data.message, { variants: "error" });
    },
  });
  return (
    <div className="fixed inset-0 bg-paleBlue-900 bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-paleBlue-800 p-6 rounded-lg shadow-lg w-96"
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-paleBlue-100 text-xl font-semibold">Add Table</h2>
          <button
            className="text-paleBlue-700 hover:text-green-900"
            onClick={handleCloseModal}
          >
            <IoIosClose size={24} />
          </button>
        </div>

        {/* Modal Body */}
        <form className="space-y-4 mt-10" onSubmit={handleSubmit}>
          <div>
            <label className="block text-paleBlue-200 mb-2 mt-3 text-sm font-medium">
              Table Number
            </label>
            <div className="flex items-center rounded-lg p-5 px-4 bg-paleBlue-200">
              <input
                type="number"
                name="tableNo"
                className="bg-transparent flex-1 text-paleBlue-800 focus:outline-none"
                required
                value={tableData.tableNo}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <label className="block text-paleBlue-200 mb-2 mt-3 text-sm font-medium">
              Number of Seats
            </label>
            <div className="flex items-center rounded-lg p-5 px-4 bg-paleBlue-200">
              <input
                type="number"
                name="seats"
                className="bg-transparent flex-1 text-paleBlue-800 focus:outline-none"
                required
                value={tableData.seats}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <button
            className="w-full mt-6 py-3 text-lg bg-aquaTeal-600 text-paleBlue-200 font-bold"
            type="submit"
          >
            Add Table
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Modal;
