import React from "react";
import Connect from "./Connect";
import ServiceProvide from "./ServiceProvide";
import Testimonials from "./Testimonials";

const ServicesHero = () => {
  return (
    <>
      <div className="w-[1080px] mx-auto h-[400px] grid content-center">
        <p className="text-6xl text-center ">Services</p>
      </div>
      <ServiceProvide />
      <Testimonials />
      <Connect />
    </>
  );
};

export default ServicesHero;
