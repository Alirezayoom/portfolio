import React from "react";

const ServiceProvideItem = (props) => {
  return (
    <div
      className={`shadow-xl text-red-700 shadow-sky-900/20 bg-sky-200 ${props.color}`}
    >
      <div className="px-8 py-12 text-red-700">
        <div className="grid justify-center mx-auto">{props.icon}</div>
        {/* <img
          src={props.logo}
          alt="icon"
          width="64px"
          className="grid justify-center mx-auto"
        /> */}
        <p className="text-2xl text-sky-900 pt-6 pb-8">{props.title}</p>
        <p className="text-[#020408]">{props.content}</p>
      </div>
    </div>
  );
};

export default ServiceProvideItem;
