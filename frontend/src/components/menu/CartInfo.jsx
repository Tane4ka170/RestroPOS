import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { FaNotesMedical } from "react-icons/fa6";
import { removeItem } from "../../redux/slices/cartSlice";

const CartInfo = () => {
  const cartData = useSelector((state) => state.cart);
  const scrollRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [cartData]);

  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));
  };
  return (
    <div className="px-4 py-2">
      <h1 className="text-lg text-royalBlue-100 font-semibold tracking-wide">
        Order Details
      </h1>
      <div
        className="mt-4 overflow-y-scroll scrollbar-hide h-[380px]"
        ref={scrollRef}
      >
        {cartData.length === 0 ? (
          <p className="text-paleBlue-200 text-sm flex justify-center items-center h-[380px]">
            Your cart is currently empty. Add some items to get started!
          </p>
        ) : (
          cartData.map((item) => {
            return (
              <div
                className="bg-paleBlue-900 rounded-lg px-4 py-4 mb-2"
                key={item.id}
              >
                <div className="flex items-center justify-between">
                  <h1 className="text-paleBlue-200 font-semibold tracking-wide text-md">
                    {item.name}
                  </h1>
                  <p className="text-paleBlue-200 font-semibold">
                    x{item.quantity}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex">
                    <MdDelete
                      className="text-paleBlue-200 cursor-pointer"
                      size={20}
                      onClick={() => handleRemove(item.id)}
                    />
                    <FaNotesMedical
                      className="text-paleBlue-200 cursor-pointer"
                      size={20}
                    />
                  </div>
                  <p className="text-paleBlue-100 text-md font-bold">
                    ${item.price}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default CartInfo;
