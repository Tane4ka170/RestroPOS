import React, { useState } from "react";
import { GrRadialSelected } from "react-icons/gr";
import { menus } from "../../constants";
import { FaShoppingCart } from "react-icons/fa";

const MenuContainer = () => {
  const [selected, setSelected] = useState(menus[0]);
  const [itemCount, setItemCount] = useState(0);
  const [itemId, setItemId] = useState();

  const increment = (id) => {
    setItemId(id);
    if (itemCount >= 4) return;
    setItemCount((prev) => prev + 1);
  };
  const decrement = (id) => {
    setItemId(id);
    if (itemCount <= 0) return;
    setItemCount((prev) => prev - 1);
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
                <h1 className="text-paleBlue-100 text-lg font-semibold">
                  {menu.icon} {menu.name}
                </h1>
                {selected.id === menu.id && (
                  <GrRadialSelected className="text-paleBlue-100" size={20} />
                )}
              </div>
              <p className="text-paleBlue-200 text-sm font-semibold">
                {menu.items.length} Items
              </p>
            </div>
          );
        })}
      </div>

      <hr className="border-paleBlue-400 border-t-2 mt-4" />

      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
        {selected?.items.map((menu) => {
          return (
            <div
              key={menu.id}
              className="flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer hover:bg-paleBlue-500 bg-paleBlue-900"
            >
              <div className="flex items-start justify-between w-full">
                <h1 className="text-paleBlue-100 text-lg font-semibold">
                  {menu.name}
                </h1>
                <button className="bg-green-300 text-green-600 p-2 rounded-lg">
                  <FaShoppingCart className="" size={20} />
                </button>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="text-paleBlue-100 text-xl font-bold">
                  $ {menu.price}
                </p>
                <div className="flex items-center justify-between bg-paleBlue-700 px-2 py-1 rounded-lg gap-6">
                  <button
                    className="text-aquaTeal-500 text-2xl"
                    onClick={() => decrement(menu.id)}
                  >
                    &minus;
                  </button>
                  <span className="text-paleBlue-100">
                    {menu.id === itemId ? itemCount : "0"}
                  </span>
                  <button
                    className="text-aquaTeal-500 text-2xl"
                    onClick={() => increment(menu.id)}
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
