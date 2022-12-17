import React from "react";
import AboutMe from "./AboutMe";
import Testimonials from "./Testimonials";
import Connect from "./Connect";

const PortfolioHero = () => {
  return (
    <>
      <div className="w-[1080px] mx-auto ">
        <div className="h-[400px] grid content-center">
          <p className="text-6xl text-center ">Portfolio</p>
        </div>
      </div>
      <AboutMe />
      <Testimonials />
      <Connect />
    </>
  );
};

export default PortfolioHero;
