import React from "react";
import { BlogHero, PostCard, PostWidget, Categories } from "../components";

const Blog = () => {
  return (
    <div className="w-[1080px] mx-auto">
      <BlogHero />
      <div className="grid grid-cols-12">
        <div className="grid col-span-8">
          <PostCard />
        </div>
        <div className="grid col-span-4">hi</div>
      </div>
    </div>
  );
};

export default Blog;
