import React from "react";
import TotalProjsItem from "./TotalProjsItem";

const TotalProjs = () => {
  return (
    <section className="w-[1080px] mx-auto mb-24">
      <div className="flex gap-4 pt-12 justify-center">
        <TotalProjsItem number="12+" desc="Total Projects" />
        <TotalProjsItem number="25" desc="On Going Projects" />
        <TotalProjsItem number="95%" desc="Job Success" />
      </div>
    </section>
  );
};

export default TotalProjs;
