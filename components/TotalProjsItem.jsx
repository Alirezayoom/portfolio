import React from "react";

const TotalProjsItem = (props) => {
  return (
    <div className="border-gray-300 border-2">
      <div className="p-6 w-[300px] text-center">
        <p className="text-5xl pb-4">{props.number}</p>
        <p className="text-gray-700">{props.desc}</p>
      </div>
    </div>
  );
};

export default TotalProjsItem;
