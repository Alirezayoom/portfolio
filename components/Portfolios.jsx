import React from "react";
import Image from "next/image";

const Portfolios = () => {
  return (
    <section className="">
      <div className="w-[1080px] mx-auto ">
        <div className="text-center grid ">
          <p className="z-50 pt-24 pb-4">
            <span className="relative before:'' before:absolute before:right-0 before:left-0 before:flex before:w-full before:h-[50%] before:top-3 before:bg-[#d61e2b] before:-z-10">
              PORTFOLIOS
            </span>
          </p>

          <p className="text-3xl pb-12">
            Some of my awesome
            <br /> stuffs here
          </p>
        </div>
        <div className="grid grid-cols-6 gap-4 pb-12">
          <div className="overflow-hidden col-span-3 group bg-red-500 h-60 relative">
            <Image
              src="/1.png"
              alt="first project"
              className=" group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0
              
              "
              width="800"
              height="600"
            />
            <div
              className=" invisible w-full duration-100 ease-out transition-all bg-[#ee3f3e]/80 hover:cursor-pointer 
              h-[20%] absolute text-[#eee]
              z-[999] bottom-0 group-hover:visible text-center grid content-center"
            >
              Visit
            </div>
          </div>

          <div className="col-span-3 bg-black/50 h-60">hi</div>
          <div className="col-span-2 bg-black/50 h-60">hi</div>
          <div className="col-span-2 bg-black/50 h-60">hi</div>
          <div className="col-span-2 bg-black/50 h-60">hi</div>
        </div>

        <div className="py-2 px-4 hover:cursor-pointer bg-[#ee3f3e] flex justify-center w-36 mx-auto">
          Load More
        </div>
      </div>
    </section>
  );
};

export default Portfolios;
