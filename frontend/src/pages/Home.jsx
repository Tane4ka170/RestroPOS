import React from "react";
import BottomNav from "../components/shared/BottomNav";
import Greetings from "../components/home/Greetings";

const Home = () => {
  return (
    <section className="bg-paleBlue-400 h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
      {/* Left div */}
      <div className="flex-[3] bg-paleBlue-700">
        <Greetings />
      </div>

      {/* Right div */}
      <div className="flex-[7] bg-paleBlue-700"></div>

      <BottomNav />
    </section>
  );
};

export default Home;
