import React from "react";
import AboutMe from "./AboutMe";
import Testimonials from "./Testimonials";
import Connect from "./Connect";

const AboutHero = () => {
  return (
    <>
      <div className="w-[1080px] mx-auto ">
        <div className="h-[400px] grid content-center">
          <p className="text-6xl text-center ">About Me</p>
        </div>
      </div>
      <AboutMe />
      <Testimonials />
      <Connect />
    </>
  );
};

export default AboutHero;
