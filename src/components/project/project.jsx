import classes from "./project.module.css";

import avatar from "../../assets/avatar.jpeg";

import html from "../../assets/skills/html.svg";
import css from "../../assets/skills/css.svg";
import sass from "../../assets/skills/sass.svg";
import bootstrap from "../../assets/skills/bootstrap.svg";
import tailwind from "../../assets/skills/tailwindcss.svg";
import javascript from "../../assets/skills/javascript.svg";
import typescript from "../../assets/skills/typescript.svg";
import react from "../../assets/skills/react.svg";
import next from "../../assets/skills/nextjs.svg";
import git from "../../assets/skills/git.svg";

const technologies = [
  { name: "html", icon: html },
  { name: "css", icon: css },
  { name: "react", icon: react },
];

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
              {technologies.map((technology) => (
                <div key={technology.name}>
                  <img src={technology.icon} alt={technology.name} />
                </div>
              ))}
            </div>
            <div className={classes["project-description"]}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae,
              sequi.
            </div>
            <div className={classes["project-links"]}>
              <button>Github</button>
              <button>Visit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
