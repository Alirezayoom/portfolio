import React from "react";
import moment from "moment/moment";

const PostDetail = (props) => {
  return (
    <div className="w-[1080px] mx-auto grid grid-cols-12 pt-24">
      <div className="grid col-span-8">
        <div className="text-4xl mb-6">{props.title}</div>
        <div className="mb-6">
          <img src={props.image} alt="" />
        </div>
        <div className="text-neutral-800">{props.detail}</div>

        <div className="p-4 bg-gray-100 text-gray-900 my-4 rounded">
          <div>Author: {props.author}</div>
          <div>Publish Date: {moment(props.pdate).format("MMM DD, YYYY")}</div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
