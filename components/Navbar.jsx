import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const selectedRoute = `.${router.asPath}`;

  const links = [
    { name: "HOME", link: "./" },
    { name: "ABOUT", link: "./About" },
    { name: "SERVICES", link: "./Services" },
    { name: "BLOG", link: "./Blog" },
    { name: "CONTACT", link: "./Contact" },
  ];

  return (
    <div className="w-full absolute z-10">
      <div className="p-4  block ">
        <div className="w-[1080px] mx-auto">
          <ul className=" mx-auto  flex justify-center content-center">
            {links.map((link) => (
              <Link
                className={`text-sm font-semibold py-1 mx-4 hover-bg-gray-100 text-[#020408] hover:text-[#365475] ${
                  selectedRoute == link.link
                    ? "inner-border border-[#365475]  border-b-4  !text-[#365475]"
                    : ""
                }`}
                key={link.name}
                href={link.link}
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
