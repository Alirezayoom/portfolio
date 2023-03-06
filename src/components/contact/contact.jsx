import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

import classes from "./contact.module.css";
import Notification from "./notification";

export default function Contact() {
  const form = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [status, setStatus] = useState();

  useEffect(() => {
    const timer = setTimeout(() => setStatus(), 3000);
    return () => clearTimeout(timer);
  }, [status]);

  const sendEmail = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    if (!email.includes("@")) return;

    setStatus("sending");

    if (nameRef)
      emailjs
        .sendForm(
          `${import.meta.env.VITE_SERVICE_ID}`,
          `${import.meta.env.VITE_TEMPLATE_ID}`,
          form.current,
          `${import.meta.env.VITE_PUBLIC_KEY}`
        )
        .then(
          (result) => {
            setStatus("success");
            console.log("sent");
            e.target.reset();
          },
          (error) => {
            setStatus("faild");
            console.log("error");
          }
        );
  };

  let notification;
  if (status === "sending") {
    notification = {
      status: "Sending...",
      message: "Your message is sending.",
    };
  }

  if (status === "success") {
    notification = {
      status: "Success",
      message: "Your message sent successfully",
    };
  }

  if (status === "faild!") {
    notification = {
      status: "Faild",
      message: "Something went wrong.",
    };
  }

  return (
    <section className={classes.contact} id="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className={classes.name}>
            <input type="text" placeholder="Name" name="name" ref={nameRef} />
          </div>
          <div className={classes.email}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              ref={emailRef}
            />
          </div>
          <div className={classes.subject}>
            <input type="text" placeholder="Subject" name="subject" />
          </div>
          <div className={classes.message}>
            <textarea
              placeholder="Message"
              rows={8}
              name="message"
              ref={messageRef}
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>

      {status && (
        <Notification
          status={notification.status}
          message={notification.message}
        />
      )}
    </section>
  );
}
