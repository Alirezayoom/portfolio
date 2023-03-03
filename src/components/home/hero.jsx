import avatar from "../../assets/avatar.jpeg";

import classes from "./hero.module.css";

export default function Hero() {
  return (
    <div className={`${classes.hero}`}>
      <div className="container">
        <div className={classes.avatar}>
          <img src={avatar} alt="avatar" />
        </div>
        <div className={classes.info}>
          <h1>Hi, I'm Alireza Karimi</h1>
          <h2>Front-end Web Developer</h2>
        </div>
        <a href="https://www.linkedin.com/in/alirezayoom/" target="_blank">
          <button>
            Linkedin
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              className={classes.arrow}
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
              />
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
}
