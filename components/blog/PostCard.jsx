import React from "react";

const PostCard = (props) => {
  return (
    <div className="grid mb-20 ">
      <div className="w-full h-[300px] overflow-hidden bg-cover grid content-center mb-4">
        <img src={props.image} alt="" height="300px" />
      </div>
      <div className="flex justify-between">
        <div>
          <div className="w-full text-2xl text-sky-900">{props.title}</div>
          <div className="w-full text-lg text-neutral-800">{props.excerpt}</div>
        </div>
        <div
          className="px-3 py-2 self-center bg-sky-900 text-white w-[120px] text-center cursor-pointer"
          onClick={props.click}
        >
          Read More
        </div>
      </div>
    </div>
  );
};

export default PostCard;
