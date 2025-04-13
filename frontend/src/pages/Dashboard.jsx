import React, { useState } from "react";
import { BiDish } from "react-icons/bi";
import { MdCategory, MdOutlineTableBar } from "react-icons/md";
import Metrics from "../components/dashboard/Metrics";
import RecentOrders from "../components/dashboard/RecentOrders";

const buttons = [
  { label: "Add Table", icon: <MdOutlineTableBar />, action: "table" },
  { label: "Add Category", icon: <MdCategory />, action: "category" },
  { label: "Add Dishes", icon: <BiDish />, action: "dishes" },
];

const tabs = ["Metrics", "Orders", "Payments"];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Metrics");
  return (
    <div className="bg-paleBlue-400 h-[calc(100vh-5rem)]">
      <div className="container mx-auto flex items-center justify-between py-14 px-6 md:px-4">
        <div className="flex items-center gap-3">
          {buttons.map(({ label, icon, action }) => {
            return (
              <button
                className="bg-paleBlue-100 hover:bg-paleBlue-300 px-8 py-3 rounded-lg text-paleBlue-400 font-semibold text-md flex items-center gap-2"
                key={action}
              >
                {label} {icon}
              </button>
            );
          })}
        </div>
        <div className="flex items-center gap-3">
          {tabs.map((tab) => {
            return (
              <button
                className={` px-8 py-3 rounded-lg text-paleBlue-400 font-semibold text-md flex items-center gap-2 ${
                  activeTab === tab
                    ? "bg-paleBlue-300"
                    : "bg-paleBlue-100 hover:bg-paleBlue-300"
                }`}
                key={tab}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>
      {activeTab === "Metrics" && <Metrics />}
      {activeTab === "Orders" && <RecentOrders />}
    </div>
  );
};

export default Dashboard;
