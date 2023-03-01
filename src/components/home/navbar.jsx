import classes from "./navbar.module.css";

const items = [
  { name: "Home", link: "#" },
  { name: "About", link: "#about" },
  { name: "Project", link: "#project" },
  { name: "Contact", link: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="container">
      <div className={classes.navbar}>
        <div className={classes.logo}>
          <a href="#">ALIREZA KARIMI</a>
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
