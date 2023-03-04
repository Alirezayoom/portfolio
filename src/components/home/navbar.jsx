import classes from "./navbar.module.css";

const items = [
  { name: "Home", link: "#" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="container">
      <div className={classes.navbar}>
        <div className={classes.logo}>
          <a href="#">
            <img src="/icons/ak.svg" alt="alireza karimi" />
          </a>
        </div>
        <div className={classes.items}>
          <ul>
            {items.map((item) => (
              <li key={item.name}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
