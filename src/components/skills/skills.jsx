import classes from "./skills.module.css";

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

const skills = [
  { name: "html", icon: html },
  { name: "css", icon: css },
  { name: "sass", icon: sass },
  { name: "bootstrap", icon: bootstrap },
  { name: "tailwind", icon: tailwind },
  { name: "javascirpt", icon: javascript },
  { name: "typescript", icon: typescript },
  { name: "react", icon: react },
  { name: "next", icon: next },
  { name: "git", icon: git },
];

export default function Skills() {
  return (
    <section className={classes.skills}>
      <h2>My Web Skills</h2>
      <div className={classes.skillswrapper}>
        {skills.map((skill) => (
          <div key={skill.name} className={classes.icons}>
            <img src={skill.icon} alt={skill.name} />
          </div>
        ))}
      </div>
    </section>
  );
}
