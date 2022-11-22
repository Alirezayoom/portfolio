import React from "react";
import ServiceProvideItem from "./ServiceProvideItem";

function ServiceProvide() {
  return (
    <section className="w-[1080px] mx-auto mb-12">
      <div className="grid justify-center text-center">
        <div className="mb-2 before:'' justify-center grid before:w-[2px] before:h-16 before:bg-gray-900 before:block"></div>
        <p className="mb-4">SERVICE PROVIDED</p>
        <p className="text-4xl">
          Build brands campaigns <br />& digital projects
        </p>
        <div className="flex gap-4 pt-12">
          <ServiceProvideItem
            logo="LOGO 1"
            title="Graphic Design"
            content="lorem lorem lorem lorem lorem lorme lorem lorem lorem lorem lorem lorme "
          />

          <ServiceProvideItem
            logo="LOGO 1"
            title="Graphic Design"
            content="lorem lorem lorem lorem lorem lorme lorem lorem lorem lorem lorem lorme"
          />

          <ServiceProvideItem
            logo="LOGO 1"
            title="Graphic Design"
            content="lorem lorem lorem lorem lorem lorme lorem lorem lorem lorem lorem lorme"
          />
        </div>
      </div>
    </section>
  );
}

export default ServiceProvide;
