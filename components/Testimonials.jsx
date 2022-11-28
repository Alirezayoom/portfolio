import React, { useState, useEffect } from "react";
import TestimonialItem from "./TestimonialItem";

const Testimonials = () => {
  const data = [
    [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium excepturi aut voluptates totam perferendis qui provident pariatur in iure maiores, maxime incidunt officiis vero vitae nobis ex repudiandae aperiam suscipit!",
      "/about.jpeg",
      "ali",
    ],
    [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora accusantium temporibus qui nemo, voluptates repudiandae error architecto sed, ab ad labore cupiditate blanditiis fuga officiis. Quod recusandae sequi iure nemo",
      "/about.jpeg",
      "reza",
    ],
    [
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nemo mollitia rem vero id explicabo itaque excepturi odit! Excepturi rem tenetur quisquam libero eius aspernatur aut nihil eligendi asperiores! Amet.",

      "/about.jpeg",
      "ahmad",
    ],
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const infiniteScroll = () => {
    if (currentIndex === data.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      infiniteScroll();
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className=" bg-[#151515]">
      <div className="w-[1080px] mx-auto py-12">
        <div className="flex flex-nowrap overflow-hidden">
          {data.map((item, index) => {
            return (
              <div
                className="h-72 min-w-[100%] flex justify-center transition-all duration-500 w-[100%] items-center"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <TestimonialItem
                  key={index}
                  text={item[0]}
                  img={item[1]}
                  name={item[2]}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
