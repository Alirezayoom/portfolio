import React from "react";

const ServiceProvideItem = (props) => {
  return (
    <div className={`shadow-xl shadow-[#121212] ${props.color}`}>
      <div className="px-8 py-12">
        <img
          src={props.logo}
          alt="icon"
          width="64px"
          className="text-red-400 grid justify-center mx-auto"
        />
        <p className="text-2xl pt-6 pb-8">{props.title}</p>
        <p className="text-gray-400">{props.content}</p>
      </div>
    </div>
  );
};

export default ServiceProvideItem;
