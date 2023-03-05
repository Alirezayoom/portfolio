import classes from "./footer.module.css";

export default function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.logo}>
        <img src="/icons/ak.svg" alt="alireza karimi" />
      </div>
      <div className={classes.social}>
        <a href="https://twitter.com/Alirezayoom" target="_blank">
          <img src="icons/twitter.svg" alt="twitter" />
        </a>
        <a href="https://www.linkedin.com/in/alirezayoom" target="_blank">
          <img src="/icons/linkedin.svg" alt="linkedin" />
        </a>
        <a href="https://t.me/Alirezayoom" target="_blank">
          <img src="/icons/telegram.svg" alt="telegram" />
        </a>
        <a href="https://github.com/Alirezayoom" target="_blank">
          <img src="/icons/github.svg" alt="github" />
        </a>
      </div>
      <div className={classes.connect}>
        <div>
          <span>
            <img src="/icons/phone.svg" alt="phone" />
            <a href="tel:0093789908646">+93789908646</a>
          </span>
        </div>
        <div>
          <span>
            <img src="/icons/email.svg" alt="email" />
            <a href="mailto:alirezayoom@gmail.com">alirezayoom@gmail.com</a>
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
