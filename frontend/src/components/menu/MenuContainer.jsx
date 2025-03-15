import React from "react";
import { menus } from "../../constants";

const MenuContainer = () => {
  return (
    <>
      <div>
        {menus.map((menu) => {
          return <div key={menu.id}></div>;
        })}
      </div>
    </>
  );
};

export default MenuContainer;
