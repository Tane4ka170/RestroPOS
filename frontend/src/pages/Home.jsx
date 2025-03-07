import React from "react";
import BottomNav from "../components/shared/BottomNav";
import Greetings from "../components/home/Greetings";
import { FaCashRegister } from "react-icons/fa";
import { RiProgress1Line } from "react-icons/ri";
import MiniCard from "../components/home/MiniCard";
import RecentOrders from "../components/home/RecentOrders";
import PopularDishes from "../components/home/PopularDishes";

const Home = () => {
  return (
    <section className="bg-paleBlue-400 h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
      {/* Left div */}
      <div className="flex-[3] bg-paleBlue-700">
        <Greetings />
        <div className="flex items-center w-full gap-3 px-8 mt-8">
          <MiniCard
            title="Total Earnings"
            icon={<FaCashRegister />}
            number={512}
            footerNum={1.6}
          />
          <MiniCard
            title="In Progress"
            icon={<RiProgress1Line />}
            number={1}
            footerNum={3.6}
          />
        </div>
        <RecentOrders />
      </div>

      {/* Right div */}
      <div className="flex-[2] bg-paleBlue-700">
        <PopularDishes />
      </div>

      <BottomNav />
    </section>
  );
};

export default Home;
