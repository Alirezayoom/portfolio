import React from "react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section className="w-[1080px] mx-auto grid grid-cols-2 py-24">
      <div className="grid pl-12">
        <p className="text-3xl mb-6">About Me</p>
        <p className="text-slate-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In nobis at
          fugit odit explicabo quo doloribus quas veritatis eveniet cum saepe a
          harum ipsum ex blanditiis aliquam reprehenderit, neque eaque.
        </p>
        <button className="bg-[#ee3f3e] inline-block my-6 w-40 py-2 px-4 text-gray-100 ">
          Downlaod CV
        </button>
      </div>
      <div className="flex justify-center">
        <Image src="/about.jpeg" alt="" width="300" height="300" />
      </div>
    </section>
  );
};

export default AboutMe;
