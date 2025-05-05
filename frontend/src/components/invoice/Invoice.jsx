import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa6";

const Invoice = ({ orderInfo, setShowInvoice }) => {
  const invoiceRef = useRef(null);
  const handlePrint = () => {
    const printContent = invoiceRef.current.innerHTML;
    const WinPrint = window.open("", "", "width=900,height=650");

    WinPrint.document.write(`
      <html>
        <head>
          <title>Order Receipt</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            .receipt-container { width: 300px; border: 1px solid #ddd; padding: 10px; }
            h2 { text-align: center; }
          </style>
        </head>
        <body>
          ${printContent}
        </body>
      </html>
    `);

    WinPrint.document.close();
    WinPrint.focus();
    setTimeout(() => {
      WinPrint.print();
      WinPrint.close();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-paleBlue-900">
      <div className="bg-paleBlue-100 p-4 rounded-lg shadow-lg w-[400px]">
        {/* Receipt Content for Printing */}
        <div ref={invoiceRef} className="p-4">
          {/* Receipt Header */}
          <div className="flex justify-center mb-4">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
              className="flex items-center justify-center w-12 h-12 border-8 rounded-full shadow-lg border-aquaTeal-200 bg-aquaTeal-200"
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="text-2xl"
              >
                <FaCheck className="text-paleBlue-100" />
              </motion.span>
            </motion.div>
          </div>

          <h2 className="mb-2 text-xl font-bold text-center">
            Order Confirmation
          </h2>
          <p className="text-center text-paleBlue-200">
            We Appreciate Your Purchase!
          </p>

          {/* Order Details */}
          <div className="pt-4 mt-4 text-sm border-t text-paleBlue-700">
            <p>
              <strong>Order ID:</strong>{" "}
              {Math.floor(new Date(orderInfo.orderDate).getTime())}
            </p>
            <p>
              <strong>Name:</strong> {orderInfo.customerDetails.name}
            </p>
            <p>
              <strong>Phone:</strong> {orderInfo.customerDetails.phone}
            </p>
            <p>
              <strong>Guests:</strong> {orderInfo.customerDetails.guests}
            </p>
          </div>

          {/* Items Summary */}
          <div className="pt-4 mt-4 border-t">
            <h3 className="text-sm font-semibold">Items Ordered</h3>
            <ul className="text-sm text-paleBlue-700">
              {Array.isArray(orderInfo?.items) ? (
                orderInfo.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between text-xs"
                  >
                    <span>
                      {item.name} x{item.quantity}
                    </span>
                    <span>${item.price.toFixed(2)}</span>
                  </li>
                ))
              ) : (
                <li className="text-xs italic text-red-500">No items found</li>
              )}
            </ul>
          </div>

          {/* Bills Summary */}
          <div className="pt-4 mt-4 text-sm border-t">
            <p>
              <strong>Subtotal:</strong> ${orderInfo.bills.total.toFixed(2)}
            </p>
            <p>
              <strong>Tax:</strong> ${orderInfo.bills.tax.toFixed(2)}
            </p>
            <p className="font-semibold text-md">
              <strong>Grand Total:</strong> $
              {orderInfo.bills.totalWithTax.toFixed(2)}
            </p>
          </div>

          {/* Payment Details */}
          <div className="mt-2 mb-2 text-xs">
            <p>
              <strong>Payment Method:</strong> {orderInfo.paymentMethod}
            </p>
            {orderInfo.paymentMethod === "Online" && (
              <>
                <p>
                  <strong>Stripe Payment ID:</strong>{" "}
                  {orderInfo.paymentData?.paymentIntent}
                </p>
                <p>
                  <strong>Stripe Session ID:</strong>{" "}
                  {orderInfo.paymentData?.sessionId}
                </p>
              </>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrint}
            className="px-4 py-2 text-xs rounded-lg text-royalBlue-900 hover:underline"
          >
            Print Receipt
          </button>
          <button
            onClick={() => setShowInvoice(false)}
            className="px-4 py-2 text-xs rounded-lg text-aquaTeal-800 hover:underline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
