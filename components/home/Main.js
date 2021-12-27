import React from "react";
import Explore from "./Explore";
import LargeCard from "./LargeCard";
import LiveAnywhere from "./LiveAnywhere";

const Main = () => {
  return (
    <main className="w-3/4 mx-auto py-10 space-y-16">
      <Explore />
      <LiveAnywhere />
      <LargeCard />
    </main>
  );
};

export default Main;
