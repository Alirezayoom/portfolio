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
    <div className="p-4 bg-gray-900">
      <div className="w-[1080px] mx-auto ">
        <ul className=" mx-auto  flex justify-center content-center">
          {links.map((link) => (
            <Link
              className={`px-4 py-3 mx-2 hover-bg-gray-100 text-gray-300 hover:text-gray-100 ${
                selectedRoute == link.link ? "bg-gray-100 !text-gray-900" : ""
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
  );
};

export default Navbar;
