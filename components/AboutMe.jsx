import React from "react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section className="bg-sky-50">
      <div className="w-[1080px] mx-auto grid grid-cols-2 py-24">
        <div className="grid pl-12 items-center">
          <p className="text-3xl mb-4">About Me</p>
          <p className="text-neutral-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In nobis at
            fugit odit explicabo quo doloribus quas veritatis eveniet cum saepe
            a harum ipsum ex blanditiis aliquam reprehenderit, neque eaque.
          </p>
          <button className="bg-sky-900 grid self-start w-max py-2 px-6 text-white">
            Downlaod CV
          </button>
        </div>
        <div className="flex justify-center">
          <Image src="/about.jpeg" alt="" width="300" height="300" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
