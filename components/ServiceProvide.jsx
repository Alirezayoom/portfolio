import React from "react";
import ServiceProvideItem from "./ServiceProvideItem";
import ServiceProvideItem2 from "./ServiceProvideItem2";

function ServiceProvide() {
  return (
    <section className=" relative">
      <div className="before:'' before:w-1/2 before:h-full before:bg-[#98bae3] before:absolute">
        <div className=" w-[1080px] mx-auto py-24 ">
          <div className="grid justify-center text-center">
            {/* <div className="mb-2 before:'' justify-center grid before:w-[2px] before:h-16 before:bg-slate-100 before:block"></div> */}
            <p className="z-50 mb-4">
              <span className="relative before:'' before:absolute before:right-0 before:left-0 before:flex before:w-full before:h-[50%] before:top-3 before:bg-[#d61e2b] before:-z-10">
                SERVICE PROVIDED
              </span>
            </p>

            <p className="z-50 text-4xl">
              Build brands campaigns <br />& digital projects
            </p>
            <div className="z-50 grid grid-cols-3 gap-4 pt-12 mb-6">
              <ServiceProvideItem
                color=""
                logo="./ui.svg"
                title="UI/UX Design"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ullam, nam consequatur culpa molestiae dolorum ea praesent"
              />
              <ServiceProvideItem
                color=""
                logo="./code.svg"
                title="Web Development"
                content="              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat dicta reiciendis facere error dolores quae fugiat"
              />

              <ServiceProvideItem
                color=""
                logo="./graphic.svg"
                title="Graphic Design"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis a dolorem molestiae minima, assumenda totam quas illo volu"
              />
            </div>
            <div className="z-50 grid grid-cols-3 gap-4 pt-12">
              <div className="w-full p-8 grid row-span-2 content-center">
                <p className="text-8xl font-bold  text-[#ee3f3e]">3</p>
                <p className="text-sm">years experience</p>
              </div>
              <div>
                <ServiceProvideItem2 number="2" text="clients" />
              </div>
              <div>
                <ServiceProvideItem2 number="5" text="completed projects" />
              </div>
              <div>
                <ServiceProvideItem2 number="3" text="years experience" />
              </div>
              <div>
                <ServiceProvideItem2 number="10" text="achivements" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceProvide;
