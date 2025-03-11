import React from "react";
import BottomNav from "../components/shared/BottomNav";

const Tables = () => {
  return (
    <section className="bg-paleBlue-400 h-[calc(100vh-5rem)] overflow-hidden">
      <div className="flex items-center justify-between px-10 py-4">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-paleBlue-100 text-xl font-bold tracking-wider">
            Orders
          </h1>
        </div>{" "}
      </div>
      <BottomNav />
    </section>
  );
};

export default Tables;
