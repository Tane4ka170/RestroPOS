import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getTotalPrice } from "../../redux/slices/cartSlice";
import { enqueueSnackbar } from "notistack";
import { useMutation } from "@tanstack/react-query";

const BillsInfo = () => {
  const cartData = useSelector((state) => state.cart);
  const customerData = useSelector((state) => state.customer);
  const total = useSelector(getTotalPrice);
  const [paymentMethod, setPaymentMethod] = useState();
  const [showInvoice, setShowInvoice] = useState(false);
  const [orderInfo, setOrderInfo] = useState();
  const [clientSecret, setClientSecret] = useState("");

  const taxRate = 5.25;
  const tax = (total * taxRate) / 1000;
  const totalPriceWithTax = total + tax;

  const handlePlaceOrder = async () => {
    if (!paymentMethod) {
      enqueueSnackbar("Please select a payment method!", {
        variant: "warning",
      });
      return;
    }

    if (paymentMethod === "Online") {
      try {
        const reqData = {
          amount: totalPriceWithTax.toFixed(2),
        };

        const { data } = await createPaymentIntent(reqData);
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.log(error);
        enqueueSnackbar("Payment Failed!", {
          variant: "error",
        });
      }
    } else {
      // Place the order
      const orderData = {
        customerDetails: {
          name: customerData.customerName,
          phone: customerData.customerPhone,
          guests: customerData.guests,
        },
        orderStatus: "In Progress",
        bills: {
          total: total,
          tax: tax,
          totalWithTax: totalPriceWithTax,
        },
        items: cartData,
        table: customerData.table.tableId,
        paymentMethod: paymentMethod,
      };
      orderMutation.mutate(orderData);
    }
  };

  const handlePaymentSuccess = (paymentIntent) => {
    const orderData = {
      customerDetails: {
        name: customerData.customerName,
        phone: customerData.customerPhone,
        guests: customerData.guests,
      },
      orderStatus: "In Progress",
      bills: {
        total: total,
        tax: tax,
        totalWithTax: totalPriceWithTax,
      },
      items: cartData,
      table: customerData.table.tableId,
      paymentMethod: paymentMethod,
      paymentData: {
        paymentIntentId: paymentIntent.id,
      },
    };

    orderMutation.mutate(orderData);
  };

  const orderMutation = useMutation({
    mutationFn: (reqData) => addOrder(reqData),
    onSuccess: (resData) => {
      const { data } = resData.data;
      console.log(data);

      setOrderInfo(data);

      // Update Table
      const tableData = {
        status: "Booked",
        orderId: data._id,
        tableId: data.table,
      };

      setTimeout(() => {
        tableUpdateMutation.mutate(tableData);
      }, 1500);

      enqueueSnackbar("Order Placed!", {
        variant: "success",
      });
      setShowInvoice(true);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const tableUpdateMutation = useMutation({
    mutationFn: (reqData) => updateTable(reqData),
    onSuccess: (resData) => {
      console.log(resData);
      dispatch(removeCustomer());
      dispatch(removeAllItems());
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return (
    <>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-xs text-paleBlue-200 font-medium mt-2">
          {cartData.length}
        </p>
        <h1 className="text-paleBlue-100 text-md font-bold">
          {total.toFixed(2)}
        </h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-xs text-paleBlue-200 font-medium mt-2">Tax(5,25%)</p>
        <h1 className="text-paleBlue-100 text-md font-bold">
          ${tax.toFixed(2)}
        </h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-xs text-paleBlue-200 font-medium mt-2">
          Total with tax (5,25%)
        </p>
        <h1 className="text-paleBlue-100 text-md font-bold">
          ${totalPriceWithTax.toFixed(2)}
        </h1>
      </div>

      <div className="flex items-center gap-3 px-5 mt-4">
        <button
          className="bg-paleBlue-600 px-4 py-3 w-full rounded-lg text-paleBlue-200 font-semibold"
          onClick={() => setPaymentMethod("Cash")}
        >
          Cash
        </button>
        <button
          className="bg-paleBlue-600 px-4 py-3 w-full rounded-lg text-paleBlue-200 font-semibold"
          onClick={() => setPaymentMethod("Online")}
        >
          Online
        </button>
      </div>

      <div className="flex items-center gap-3 px-5 mt-4">
        <button className="bg-green-600 px-4 py-3 w-full rounded-lg text-paleBlue-100 font-semibold text-lg">
          Print Receipt
        </button>
        <button className="bg-royalBlue-300 px-4 py-3 w-full rounded-lg text-paleBlue-100 font-semibold text-lg">
          Place Order
        </button>
      </div>
    </>
  );
};

export default BillsInfo;
