import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotalPrice } from "../../redux/slices/cartSlice";
import { enqueueSnackbar } from "notistack";
import { useMutation } from "@tanstack/react-query";
import { loadStripe } from "@stripe/stripe-js";
import { addOrder, createOrderStripe, updateTable } from "../../https";
import { removeAllItems } from "../../redux/slices/cartSlice";
import { removeCustomer } from "../../redux/slices/customerSlice";
import Invoice from "../invoice/Invoice";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const BillsInfo = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);
  const customerData = useSelector((state) => state.customer);
  const total = useSelector(getTotalPrice);

  const [paymentMethod, setPaymentMethod] = useState();
  const [showInvoice, setShowInvoice] = useState(false);
  const [orderInfo, setOrderInfo] = useState();

  const taxRate = 5.25;
  const tax = (total * taxRate) / 1000;
  const totalPriceWithTax = total + tax;

  const tableUpdateMutation = useMutation({
    mutationFn: (reqData) => updateTable(reqData),
    onSuccess: () => {
      dispatch(removeCustomer());
      dispatch(removeAllItems());
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const orderMutation = useMutation({
    mutationFn: (reqData) => addOrder(reqData),
    onSuccess: (resData) => {
      const { data } = resData.data;

      setOrderInfo(data);

      const tableUpdateData = {
        tableId: data.table,
        status: "Booked",
        orderId: data._id,
        currentOrder: data,
      };
      console.log("Sending to updateTable:", tableUpdateData);
      setTimeout(() => {
        tableUpdateMutation.mutate(tableUpdateData);
      }, 1500);

      enqueueSnackbar("Order Successfully Created!", {
        variant: "success",
      });

      setShowInvoice(true);
    },
    onError: (error) => {
      console.log(error);
      enqueueSnackbar("Order placement failed!", {
        variant: "error",
      });
    },
  });

  const handlePlaceOrder = async () => {
    if (!paymentMethod) {
      enqueueSnackbar("Kindly choose a payment option!", {
        variant: "warning",
      });
      return;
    }

    const orderData = {
      customerDetails: {
        name: customerData.customerName,
        phone: customerData.customerPhone,
        guests: customerData.guests,
      },
      orderStatus: "In Progress",
      paymentMethod: paymentMethod,
      items: cartData,
      bills: {
        total: total,
        tax: tax,
        totalWithTax: totalPriceWithTax,
      },
      orderDate: new Date(),
      table: customerData.tableId,
    };

    if (paymentMethod === "Online") {
      try {
        const reqData = {
          amount: totalPriceWithTax.toFixed(2),
        };

        const { data } = await createOrderStripe(reqData);
        const stripe = await stripePromise;

        const extendedOrderData = {
          ...orderData,
          paymentData: {
            sessionId: data.sessionId,
            paymentIntent: data.paymentIntent,
          },
        };

        setOrderInfo(extendedOrderData);
        setShowInvoice(true);

        const result = await stripe.redirectToCheckout({
          sessionId: data.sessionId,
        });

        if (result.error) {
          enqueueSnackbar(result.error.message, { variant: "error" });
        }
      } catch (error) {
        console.error(error);
        enqueueSnackbar("Transaction Unsuccessful!", {
          variant: "error",
        });
      }
    } else {
      orderMutation.mutate(orderData);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="mt-2 text-xs font-medium text-paleBlue-200">
          {cartData.length}
        </p>
        <h1 className="font-bold text-paleBlue-100 text-md">
          {total.toFixed(2)}
        </h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="mt-2 text-xs font-medium text-paleBlue-200">Tax(5,25%)</p>
        <h1 className="font-bold text-paleBlue-100 text-md">
          ${tax.toFixed(2)}
        </h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="mt-2 text-xs font-medium text-paleBlue-200">
          Total with tax (5,25%)
        </p>
        <h1 className="font-bold text-paleBlue-100 text-md">
          ${totalPriceWithTax.toFixed(2)}
        </h1>
      </div>

      <div className="flex items-center gap-3 px-5 mt-4">
        <button
          className={`bg-paleBlue-600 px-4 py-3 w-full rounded-lg text-paleBlue-200 font-semibold ${
            paymentMethod === "Cash" ? "bg-paleBlue-700" : ""
          }`}
          onClick={() => setPaymentMethod("Cash")}
        >
          Cash
        </button>
        <button
          className={`bg-paleBlue-600 px-4 py-3 w-full rounded-lg text-paleBlue-200 font-semibold ${
            paymentMethod === "Online" ? "bg-paleBlue-700" : ""
          }`}
          onClick={() => setPaymentMethod("Online")}
        >
          Online
        </button>
      </div>

      <div className="flex items-center gap-3 px-5 mt-4">
        <button className="w-full px-4 py-3 text-lg font-semibold bg-green-600 rounded-lg text-paleBlue-100">
          Print Receipt
        </button>
        <button
          className="w-full px-4 py-3 text-lg font-semibold rounded-lg bg-royalBlue-300 text-paleBlue-100"
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>
      </div>

      {showInvoice && (
        <Invoice orderInfo={orderInfo} setShowInvoice={setShowInvoice} />
      )}
    </>
  );
};

export default BillsInfo;
