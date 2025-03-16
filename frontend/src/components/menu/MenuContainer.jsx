import React, { useState } from "react";
import { GrRadialSelected } from "react-icons/gr";
import { menus } from "../../constants";

const MenuContainer = () => {
  const [selected, setSelected] = useState(menus[0]);
  return (
    <>
      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
        {menus.map((menu) => {
          return (
            <div
              key={menu.id}
              className="flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer"
              style={{ backgroundColor: menu.bgColor }}
              onClick={() => setSelected(menu)}
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

      <hr />
    </>
  );
};

export default MenuContainer;
