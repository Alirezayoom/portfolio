import React from "react";
import PostDetail from "../../components/blog/PostDetail";

const slug = ({ posts }) => {
  return (
    <>
      {posts.data.map((post) => (
        <PostDetail
          key={post.attributes.slug}
          title={post.attributes.title}
          detail={post.attributes.content}
          image={
            "http://localhost:1337" +
            post.attributes.featuredImage.data[0].attributes.url
          }
          author={post.attributes.author.data.attributes.name}
          pdate={post.attributes.createdAt}
        />
      ))}
    </>
  );
};

export async function getServerSideProps({ params: { slug } }) {
  const res = await fetch(
    `http://localhost:1337/api/posts?populate=*&filters[slug]=${slug}`
  );
  const posts = await res.json();

  return {
    props: {
      posts: posts,
    },
  };
}

export default slug;
