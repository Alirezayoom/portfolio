import classes from "./footer.module.css";

export default function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.logo}>
        <img src="src/assets/icons/ak.svg" alt="alireza karimi" />
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
      <div className={classes.social}>
        <img src="" alt="telegram" />
        <img src="" alt="twitter" />
        <img src="" alt="linkedin" />
      </div>
      <div>
        Design & Developed By <a href="#">Alireza Karimi</a> - 2023
      </div>
    </div>
  );
}
