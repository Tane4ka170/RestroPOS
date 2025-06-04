import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosClose } from "react-icons/io";
import { useMutation } from "@tanstack/react-query";
import { addTable } from "../../https";
import { enqueueSnackbar } from "notistack";

const Modal = ({ setIsTableModalOpen }) => {
  const [tableData, setTableData] = useState({
    tableNo: "",
    seats: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTableData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    tableMutation.mutate(tableData);
  };

  const handleCloseModal = () => {
    setIsTableModalOpen(false);
  };

  const tableMutation = useMutation({
    mutationFn: (reqData) => addTable(reqData),
    onSuccess: (res) => {
      setIsTableModalOpen(false);
      const { data } = res;
      enqueueSnackbar(data.message, { variant: "success" });
    },
    onError: (error) => {
      const { data } = error.response;
      enqueueSnackbar(data.message, { variant: "error" });
      console.log(error);
    },
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 bg-paleBlue-900">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="p-6 rounded-lg shadow-lg bg-paleBlue-800 w-96"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-paleBlue-100">Add Table</h2>
          <button
            className="text-paleBlue-700 hover:text-green-900"
            onClick={handleCloseModal}
          >
            <IoIosClose size={24} />
          </button>
        </div>

        {/* Modal Body */}
        <form className="mt-10 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mt-3 mb-2 text-sm font-medium text-paleBlue-200">
              Table Number
            </label>
            <div className="flex items-center p-5 px-4 rounded-lg bg-paleBlue-200">
              <input
                type="number"
                name="tableNo"
                className="flex-1 bg-transparent text-paleBlue-800 focus:outline-none"
                required
                value={tableData.tableNo}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <label className="block mt-3 mb-2 text-sm font-medium text-paleBlue-200">
              Number of Seats
            </label>
            <div className="flex items-center p-5 px-4 rounded-lg bg-paleBlue-200">
              <input
                type="number"
                name="seats"
                className="flex-1 bg-transparent text-paleBlue-800 focus:outline-none"
                required
                value={tableData.seats}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <button
            className="w-full py-3 mt-6 text-lg font-bold bg-aquaTeal-600 text-paleBlue-200"
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
