import React from "react";

const PostDetail = (props) => {
  return (
    <div className="w-[1080px] mx-auto grid grid-cols-12 pt-24">
      <div className="grid col-span-8">
        <div>
          <img src={props.image} alt="" />
        </div>
        <div>{props.detail}</div>
      </div>
    </div>
  );
};

export default PostDetail;
