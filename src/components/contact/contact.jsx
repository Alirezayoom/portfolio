import classes from "./contact.module.css";

export default function Contact() {
  return (
    <section className={classes.contact}>
      <div className="container">
        <h2>Contact Me</h2>
        <form>
          <div className={classes.name}>
            <input type="text" placeholder="Name" />
          </div>
          <div className={classes.email}>
            <input type="email" placeholder="Email" />
          </div>
          <div className={classes.subject}>
            <input type="text" placeholder="Subject" />
          </div>
          <div className={classes.message}>
            <textarea placeholder="Message" rows={8}></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
