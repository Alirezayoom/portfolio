import React from "react";

const ServiceProvideItem = (props) => {
  return (
    <div className="border-gray-300 border-2">
      <div className="p-12">
        <div>{props.logo}</div>
        <p className="text-2xl pt-6 pb-8">{props.title}</p>
        <p className="text-gray-700">{props.content}</p>
      </div>
    </div>
  );
};

export default ServiceProvideItem;
