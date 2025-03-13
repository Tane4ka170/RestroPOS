import React from "react";

const Modal = ({ title, onClose, isOpen, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-paleBlue-900 bg-opacity-50 flex items-center justify-center z-10">
      <div className="bg-paleBlue-800 shadow-lg w-full max-w-lg mx-4 rounded-lg p-4">
        <div className="flex justify-between items-center px-6 py-4 border-b border-paleBlue-700">
          <h2 className="text-xl text-paleBlue-100 font-semibold">{title}</h2>
          <button
            className="text-paleBlue-500 text-2xl hover:text-paleBlue-300"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
