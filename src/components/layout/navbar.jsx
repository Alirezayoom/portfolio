import { useState } from "react";

import classes from "./navbar.module.css";

const items = [
  { name: "Home", link: "#" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);

  window.addEventListener("scroll", () =>
    window.scrollY > 0 ? setNavbar(true) : setNavbar(false)
  );

  return (
    <nav
      className={`${classes["navbar-full"]} ${
        navbar && `${classes["navbar-active"]}`
      }`}
    >
      <div className="container">
        <div className={`${classes.navbar}`}>
          <div className={classes.logo}>
            <a href="#">
              <img src="/icons/ak.svg" alt="alireza karimi" />
            </a>
          </div>
          <div className={classes.items}>
            <div className={`${classes.toggle}`} onClick={() => setMenu(!menu)}>
              <img
                className={`${classes.open} ${
                  menu === true && `${classes.openmenu}`
                }  `}
                src="/icons/close.svg"
                alt="toggle navbar"
              />
              <img
                className={`${classes.close} ${
                  menu === false && `${classes.closemenu}`
                } `}
                src="/icons/open.svg"
                alt="toggle navbar"
              />
            </div>
            <ul className={` ${menu === true && `${classes.menu}`}`}>
              {items.map((item) => (
                <li key={item.name}>
                  <a href={item.link} onClick={() => setMenu(false)}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
