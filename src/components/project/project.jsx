import classes from "./project.module.css";

import avatar from "../../assets/avatar.jpeg";

export default function Project() {
  return (
    <section className={classes.project}>
      <div className="container">
        <div className={classes.card}>
          <div className={classes["card-image"]}>
            <img src={avatar} alt={avatar} />
          </div>
          <div className={classes["card-description"]}>
            <div className={classes["project-name"]}>Project Name</div>
            <div className={classes["project-technologies"]}>
              html, css, javascirpt
            </div>
            <div className={classes["project-description"]}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae,
              sequi.
            </div>
            <div className={classes["project-links"]}>
              <div>Github</div>
              <div>Visit</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
