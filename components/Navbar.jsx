import React from "react";
import Link from "next/link";

const Navbar = () => {
  const links = [
    { name: "HOME", link: "./" },
    { name: "ABOUT", link: "./About" },
    { name: "SERVICES", link: "./Services" },
    { name: "BLOG", link: "./Blog" },
    { name: "CONTACT", link: "./Contact" },
  ];

  return (
    <div className="w-[1080px] bg-gray-300 mx-auto py-4">
      <ul className=" mx-auto  flex justify-center content-center">
        {links.map((link) => (
          <Link
            className="p-4 hover:bg-gray-900 hover:text-white"
            key={link.name}
            href={link.link}
          >
            {link.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
