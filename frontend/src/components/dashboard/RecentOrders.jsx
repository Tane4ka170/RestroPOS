import React from "react";

const RecentOrders = () => {
  const handleStatusChange = () => {};
  return (
    <div className="container mx-auto bg-paleBlue-600 p-4 rounded-lg">
      <h2 className="text-paleBlue-500 text-xl font-semibold mb-4">
        Recent Orders
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-paleBlue-200">
          <thead className="bg-paleBlue-400 text-paleBlue-200">
            <tr>
              <th className="p-3">Order ID</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date & Time</th>
              <th className="p-3">Items</th>
              <th className="p-3">Table No</th>
              <th className="p-3">Total</th>
              <th className="p-3 text-center">Payment Method</th>
            </tr>
          </thead>
          <tbody>
            {resData?.data.data.map((order, index) => (
              <tr
                key={index}
                className="border-b border-royalBlue-200 hover:bg-paleBlue-300"
              >
                <td className="p-4">
                  #{Math.floor(new Date(order.orderDate).getTime())}
                </td>
                <td className="p-4">{order.customerDetails.name}</td>
                <td className="p-4">
                  <select
                    className={`bg-paleBlue-300 text-paleBlue-100 border border-royalBlue-500 p-2 rounded-lg focus:outline-none ${
                      order.orderStatus === "Ready"
                        ? "text-green-900"
                        : "text-aquaTeal-200"
                    }`}
                    value={order.orderStatus}
                    onChange={(e) =>
                      handleStatusChange({
                        orderId: order._id,
                        orderStatus: e.target.value,
                      })
                    }
                  >
                    <option className="text-aquaTeal-200" value="In Progress">
                      In Progress
                    </option>
                    <option className="text-green-900" value="Ready">
                      Ready
                    </option>
                  </select>
                </td>
                <td className="p-4">{formatDateAndTime(order.orderDate)}</td>
                <td className="p-4">{order.items.length} Items</td>
                <td className="p-4">Table - {order.table.tableNo}</td>
                <td className="p-4">₹{order.bills.totalWithTax}</td>
                <td className="p-4">{order.paymentMethod}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
