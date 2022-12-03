import React from "react";
import { BlogHero, PostCard, PostWidget, Categories } from "../components";

const Blog = ({ posts }) => {
  return (
    <div className="w-[1080px] mx-auto">
      <BlogHero />
      <div className="grid grid-cols-12 gap-12">
        <div className="grid col-span-8">
          {posts.data.map((post) => (
            <PostCard
              key={post.id}
              title={post.attributes.title}
              excerpt={post.attributes.excerpt}
              image={
                "http://localhost:1337" +
                post.attributes.featuredImage.data[0].attributes.url
              }
            />
          ))}
        </div>
        <div className="grid col-span-4">hi</div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/api/posts?populate=*");
  const posts = await res.json();

  return {
    props: { posts },
  };
}

export default Blog;
