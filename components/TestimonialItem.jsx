import React from "react";

const TestimonialItem = (props) => {
  return (
    <div
      className=" mx-auto text-center grid justify-center  min-w-[100%]
                    h-72 transition-all w-[100%] items-center"
    >
      <p className="text-5xl">"</p>
      <p className="">{props.text}</p>
      <img
        src={props.img}
        alt=""
        className="mx-auto my-4 rounded-full"
        width="100px"
      />
      <div>{props.name}</div>
    </div>
  );
};

export default TestimonialItem;
