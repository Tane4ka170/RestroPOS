import React from "react";
import { popularDishes } from "../../constants";

const PopularDishes = () => {
  return (
    <div className="mt-6 pr-6">
      <div className="bg-paleBlue-700 w-full rounded-md">
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-paleBlue-100 text-lg font-semibold tracking-wide">
            Popular Dishes
          </h1>
          <a href="" className="text-[#de4d13] text-sm font-semibold">
            View all
          </a>
        </div>

        <div className="overflow-y-scroll h-[650px] scrollbar-hide">
          {popularDishes.map((dish) => {
            return (
              <div
                key={dish.id}
                className="flex items-center gap-4 bg-paleBlue-800 rounded-[15px] px-6 py-4 mt-4 mx-6"
              >
                <h1 className="text-paleBlue-100 font-bold text-xl mr-4">
                  {dish.id < 10 ? `0${dish.id}` : dish.id}
                </h1>
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-[50px] h-[50px] rounded-full"
                />
                <div>
                  <h1 className="text-paleBlue-100 font-semibold tracking-wide">
                    {dish.name}
                  </h1>
                  <p className="text-paleBlue-100 text-sm font-semibold mt-1">
                    <span className="text-paleBlue-200">Orders: </span>
                    {dish.numberOfOrders}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularDishes;
