import avatar from "../../assets/avatar.jpeg";

import classes from "./hero.module.css";

export default function Hero() {
  return (
    <header className={classes.header}>
      <div className={classes.avatar}>
        <img src={avatar} alt="avatar" />
      </div>
      <div className={classes.info}>
        <h1>Hi, I'm Alireza Karimi</h1>
        <h2>Front-end Web Developer</h2>
      </div>
      <button>Linkedin</button>
    </header>
  );
}
