import React from "react";

const Modal = ({ title, onClose, isOpen, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-paleBlue-900 bg-opacity-50 flex items-center justify-center z-10">
      <div className="bg-paleBlue-800 shadow-lg w-full max-w-lg mx-4 rounded-lg p-4">
        <div className="flex justify-between items-center px-6 py-4">
          <h2>{title}</h2>
          <button>&times;</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
