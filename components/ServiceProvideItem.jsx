import React from "react";

const ServiceProvideItem = (props) => {
  return (
    <div className={`shadow-xl shadow-[#121212] ${props.color}`}>
      <div className="p-8">
        <img
          src={props.logo}
          alt="icon"
          width="100px"
          className="text-red-400 grid justify-center mx-auto"
        />
        <p className="text-2xl pt-6 pb-8">{props.title}</p>
        <p className="text-gray-400">{props.content}</p>
      </div>
    </div>
  );
};

export default ServiceProvideItem;
