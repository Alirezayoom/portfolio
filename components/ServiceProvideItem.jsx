import React from "react";

const ServiceProvideItem = (props) => {
  return (
    <div className={`shadow-xl shadow-sky-900/20 bg-sky-200`}>
      <div className="px-8 py-12">
        <div className="grid justify-center mx-auto">{props.icon}</div>
        <p className="text-2xl text-sky-900 pt-6 pb-8">{props.title}</p>
        <p className="text-neutral-800">{props.content}</p>
      </div>
    </div>
  );
};

export default ServiceProvideItem;
