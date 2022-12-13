import React from "react";

const ServiceProvideItem2 = (props) => {
  return (
    <div className="w-full py-4 px-8 bg-sky-200 shadow-xl shadow-sky-900/20 ">
      <p className="text-4xl font-bold  text-sky-900 pb-1">{props.number}</p>
      <p className="text-sm">{props.text}</p>
    </div>
  );
};

export default ServiceProvideItem2;
