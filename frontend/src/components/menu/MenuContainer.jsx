import React, { useState } from "react";
import { GrRadialSelected } from "react-icons/gr";
import { menus } from "../../constants";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItems } from "../../redux/slices/cartSlice";

const MenuContainer = () => {
  const [selected, setSelected] = useState(menus[0]);
  const [itemCount, setItemCount] = useState({});
  const [itemId, setItemId] = useState();
  const dispatch = useDispatch();

  const increment = (id) => {
    setItemId(id);
    if (itemCount >= 4) return;
    setItemCount((prev) => prev + 1);
  };
  const decrement = (id) => {
    setItemCount((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) > 0 ? prev[id] - 1 : 0,
    }));
  };

  const handleAddToCart = (item) => {
    const count = itemCount[item.id] || 0;
    if (count === 0) return;

    const { name, price } = item;
    const newObj = {
      id: Date.now().toString(),
      name,
      pricePerQuantity: price,
      quantity: count,
      price: price * count,
    };

    dispatch(addItems(newObj));
    setItemCount((prev) => ({ ...prev, [item.id]: 0 }));
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
        {menus.map((menu) => {
          return (
            <div
              key={menu.id}
              className="flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer"
              style={{ backgroundColor: menu.bgColor }}
              onClick={() => {
                setSelected(menu);
                setItemId(0);
                setItemCount(0);
              }}
            >
              <div className="flex items-center justify-between w-full">
                <h1 className="text-lg font-semibold text-paleBlue-100">
                  {menu.icon} {menu.name}
                </h1>
                {selected.id === menu.id && (
                  <GrRadialSelected className="text-paleBlue-100" size={20} />
                )}
              </div>
              <p className="text-sm font-semibold text-paleBlue-200">
                {menu.items.length} Items
              </p>
            </div>
          );
        })}
      </div>

      <hr className="mt-4 border-t-2 border-paleBlue-400" />

      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
        {selected?.items.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer hover:bg-paleBlue-500 bg-paleBlue-900"
            >
              <div className="flex items-start justify-between w-full">
                <h1 className="text-lg font-semibold text-paleBlue-100">
                  {item.name}
                </h1>
                <button
                  className="p-2 text-green-600 bg-green-300 rounded-lg"
                  onClick={() => handleAddToCart(item)}
                >
                  <FaShoppingCart className="" size={20} />
                </button>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="text-xl font-bold text-paleBlue-100">
                  $ {item.price}
                </p>
                <div className="flex items-center justify-between gap-6 px-2 py-1 rounded-lg bg-paleBlue-700">
                  <button
                    className="text-2xl text-aquaTeal-500"
                    onClick={() => decrement(item.id)}
                  >
                    &minus;
                  </button>
                  <span className="text-paleBlue-100">
                    {item.id === itemId ? itemCount : "0"}
                  </span>
                  <button
                    className="text-2xl text-aquaTeal-500"
                    onClick={() => increment(item.id)}
                  >
                    &#43;
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MenuContainer;
