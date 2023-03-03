import classes from "./footer.module.css";

export default function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.logo}>
        <img src="src/assets/icons/ak.svg" alt="alireza karimi" />
      </div>
      <div className={classes.social}>
        <a href="https://twitter.com/Alirezayoom" target="_blank">
          <img src="src/assets/icons/twitter.svg" alt="twitter" />
        </a>
        <a href="https://www.linkedin.com/in/alirezayoom" target="_blank">
          <img src="src/assets/icons/linkedin.svg" alt="linkedin" />
        </a>
        <a href="https://t.me/Alirezayoom" target="_blank">
          <img src="src/assets/icons/telegram.svg" alt="telegram" />
        </a>
        <a href="https://github.com/Alirezayoom" target="_blank">
          <img src="src/assets/icons/github.svg" alt="github" />
        </a>
      </div>
      <div className={classes.connect}>
        <div>
          <span>
            <img src="src/assets/icons/phone.svg" alt="phone" />
            +93789908646
          </span>
        </div>
        <div>
          <span>
            <img src="src/assets/icons/email.svg" alt="email" />
            alirezayoom@gmail.com
          </span>
        </div>
      </div>

      <div className={classes.developer}>
        2023 - Design & Developed by{" "}
        <a href="https://github.com/Alirezayoom">Alireza Karimi</a>
      </div>
    </div>
  );
}
