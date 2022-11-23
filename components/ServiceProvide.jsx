import React from "react";
import ServiceProvideItem from "./ServiceProvideItem";

function ServiceProvide() {
  return (
    <section className=" relative">
      <div className="before:'' before:w-1/2 before:h-full before:bg-[#151515] before:absolute">
        <div className=" w-[1080px] mx-auto p-24 ">
          <div className="grid justify-center text-center">
            {/* <div className="mb-2 before:'' justify-center grid before:w-[2px] before:h-16 before:bg-slate-100 before:block"></div> */}
            <p className="z-50 mb-4">SERVICE PROVIDED</p>
            <p className="z-50 text-4xl">
              Build brands campaigns <br />& digital projects
            </p>
            <div className="z-50 flex gap-6 pt-12">
              <ServiceProvideItem
                color="bg-[#1e1e1e]"
                logo="LOGO 1"
                title="Web Design"
                content="lorem lorem lorem lorem lorem lorme lorem lorem lorem lorem lorem lorme "
              />

              <ServiceProvideItem
                color="bg-gradient-to-tl from-[#6d1017] to-[#d61e2b]"
                logo="LOGO 2"
                title="Web Development"
                content="lorem lorem lorem lorem lorem lorme lorem lorem lorem lorem lorem lorme"
              />

              <ServiceProvideItem
                color="bg-[#1e1e1e]"
                logo="LOGO 3"
                title="Graphic Design"
                content="lorem lorem lorem lorem lorem lorme lorem lorem lorem lorem lorem lorme"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceProvide;
