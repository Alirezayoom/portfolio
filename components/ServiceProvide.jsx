import React from "react";
import ServiceProvideItem from "./ServiceProvideItem";
import ServiceProvideItem2 from "./ServiceProvideItem2";

function ServiceProvide() {
  return (
    <section className=" relative">
      <div className="before:'' before:w-1/2 before:h-full before:bg-sky-50 before:absolute">
        <div className=" w-[1080px] mx-auto py-24 ">
          <div className="grid justify-center text-center">
            {/* <div className="mb-2 before:'' justify-center grid before:w-[2px] before:h-16 before:bg-slate-100 before:block"></div> */}
            <p className="z-50 mb-4">
              <span className="relative before:'' before:absolute before:right-0 before:left-0 before:flex before:w-full before:h-[50%] before:top-3 before:bg-sky-200 before:-z-10">
                SERVICE PROVIDED
              </span>
            </p>

            <p className="z-50 text-4xl">
              Build brands campaigns <br />& digital projects
            </p>
            <div className="z-50 grid grid-cols-3 gap-4 pt-12 mb-6">
              <ServiceProvideItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    fill="currentColor"
                    class="bi bi-layers"
                    viewBox="0 0 16 16"
                    className="text-sky-900"
                  >
                    <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0l3.515-1.874zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z" />
                  </svg>
                }
                title="UI/UX Design"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ullam, nam consequatur culpa molestiae dolorum ea praesent"
              />
              <ServiceProvideItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    fill="currentColor"
                    class="bi bi-code-slash"
                    viewBox="0 0 16 16"
                    className="text-sky-900"
                  >
                    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                  </svg>
                }
                title="Web Development"
                content="              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat dicta reiciendis facere error dolores quae fugiat"
              />

              <ServiceProvideItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    fill="currentColor"
                    class="bi bi-palette"
                    viewBox="0 0 16 16"
                    className="text-sky-900"
                  >
                    <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z" />
                  </svg>
                }
                title="Graphic Design"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis a dolorem molestiae minima, assumenda totam quas illo volu"
              />
            </div>
            <div className="z-50 grid grid-cols-3 gap-4 pt-12">
              <div className="w-full p-8 grid row-span-2 content-center">
                <p className="text-8xl font-bold  text-sky-900">3</p>
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
