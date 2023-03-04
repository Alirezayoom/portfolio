import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import classes from "./contact.module.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${import.meta.env.VITE_SERVICE_ID}`,
        `${import.meta.env.VITE_TEMPLATE_ID}`,
        form.current,
        `${import.meta.env.VITE_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log("sent");
        },
        (error) => {
          console.log("error");
        }
      );
  };

  return (
    <section className={classes.contact} id="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className={classes.name}>
            <input type="text" placeholder="Name" name="name" />
          </div>
          <div className={classes.email}>
            <input type="email" placeholder="Email" name="email" />
          </div>
          <div className={classes.subject}>
            <input type="text" placeholder="Subject" name="subject" />
          </div>
          <div className={classes.message}>
            <textarea placeholder="Message" rows={8} name="message"></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}
