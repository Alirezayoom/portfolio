import Avatar from "./avatar";

import classes from "./hero.module.css";

export default function Hero() {
  return (
    <div className={`${classes.hero}`}>
      <div className="container">
        <Avatar />
        <div className={classes.info}>
          <h1>Hi, I'm Alireza Karimi</h1>
          <h2>Front-end Web Developer</h2>
        </div>
        <a href="https://www.linkedin.com/in/alirezayoom/" target="_blank">
          <button>
            Linkedin
            <img src="/icons/arrow.svg" alt="arrow" className={classes.arrow} />
          </button>
        </a>
      </div>
    </div>
  );
}
