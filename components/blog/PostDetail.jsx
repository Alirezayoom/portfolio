import React from "react";

const PostDetail = (props) => {
  return (
    <div className="w-[1080px] mx-auto grid grid-cols-12 pt-24">
      <div className="grid col-span-8">
        <div className="text-4xl mb-6">{props.title}</div>
        <div className="mb-6">
          <img src={props.image} alt="" />
        </div>
        <div>{props.detail}</div>
      </div>
    </div>
  );
};

export default PostDetail;
