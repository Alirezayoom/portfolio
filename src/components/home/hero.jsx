import avatar from "../../assets/avatar.jpeg";

import classes from "./hero.module.css";

export default function Hero() {
  return (
    <header className={classes.header}>
      <div className={classes.avatar}>
        <img src={avatar} alt="avatar" />
      </div>
    </header>
  );
}
