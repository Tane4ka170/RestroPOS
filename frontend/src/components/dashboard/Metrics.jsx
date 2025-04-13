import React from "react";
import { itemsData, metricsData } from "../../constants";

const Metrics = () => {
  return (
    <div className="container mx-auto py-2 px-6 md:px-4">
      <div className="flex justify-between items-center">
        <div className="">
          <h2 className="font-semibold text-paleBlue-800 text-xl">
            Overall Performance
          </h2>
          <p className="text-sm text-paleBlue-200">
            Monitor your restaurant's key performance indicators. Get a quick
            overview of sales, order counts, and average check size over the
            past month to optimize operations and boost revenue.
          </p>
        </div>
        <button className="flex items-center gap-1 px-4 py-2 rounded-md text-paleBlue-400 bg-paleBlue-100">
          Last 1 month
          <svg
            className="w-3 h-3"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="4"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <div className="mt-6 grid grid-cols-4 gap-4">
        {metricsData.map((metric, index) => {
          return (
            <div
              key={index}
              className="shadow-sm rounded-lg p-4"
              style={{ backgroundColor: metric.color }}
            >
              <div className="flex justify-between items-center">
                <p className="font-medium text-xs text-paleBlue-600">
                  {metric.title}
                </p>
                <div className="flex items-center gap-1">
                  <svg
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    style={{ color: metric.isIncrease ? "#8c8ab9" : "red" }}
                  >
                    <path
                      d={metric.isIncrease ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                    />
                  </svg>
                  <p
                    className="font-medium text-xs"
                    style={{ color: metric.isIncrease ? "#8c8ab9" : "red" }}
                  >
                    {metric.percentage}
                  </p>
                </div>
              </div>
              <p className="mt-1 font-semibold text-2xl text-paleBlue-600">
                {metric.value}
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between items-center mt-12">
        <div className="">
          <h2 className="font-semibold text-paleBlue-800 text-xl">
            Item Details
          </h2>
          <p className="text-sm text-paleBlue-200">
            Analyze sales details of individual dishes and beverages. Identify
            top-selling menu items, track their sales and inventory to
            effectively manage your assortment and minimize waste.
          </p>
        </div>
      </div>

      <div lassName="mt-6 grid grid-cols-4 gap-4">
        {itemsData.map((item, index) => {
          return (
            <div
              key={index}
              className="shadow-sm rounded-lg p-4"
              style={{ backgroundColor: item.color }}
            >
              <div className="flex justify-between items-center">
                <p className="font-medium text-xs text-paleBlue-600">
                  {item.title}
                </p>
                <div className="flex items-center gap-1">
                  <svg
                    className="w-3 h-3 text-white"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  >
                    <path d="M5 15l7-7 7 7" />
                  </svg>
                  <p className="font-medium text-xs text-paleBlue-600">
                    {item.percentage}
                  </p>
                </div>
              </div>
              <p className="mt-1 font-semibold text-2xl text-paleBlue-600">
                {item.value}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Metrics;
