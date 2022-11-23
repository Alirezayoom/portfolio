import React from "react";

const ServiceProvideItem2 = (props) => {
  return (
    <div className="w-full py-4 px-8 bg-[#1e1e1e] shadow-xl shadow-[#121212] ">
      <p className="text-4xl font-bold  text-[#ee3f3e] pb-1">{props.number}</p>
      <p className="text-sm">{props.text}</p>
    </div>
  );
};

export default ServiceProvideItem2;
