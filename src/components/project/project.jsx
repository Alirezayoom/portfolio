import classes from "./project.module.css";

import avatar from "../../assets/avatar.jpeg";

import github from "../../assets/github.svg";
import arrow from "../../assets/arrow.svg";

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

const projects = [
  {
    id: 1,
    cover: avatar,
    name: "My Portfolio",
    technologies: [
      { id: 1, name: "html", icon: html },
      { id: 2, name: "css", icon: css },
      { id: 3, name: "react", icon: react },
      { id: 4, name: "javascript", icon: javascript },
    ],
    description: "Lorem ipsum.",
    repository: "https://github.com/Alirezayoom",
    live: "https://github.com/Alirezayoom",
  },
  {
    id: 2,
    cover: avatar,
    name: "Todo app",
    technologies: [
      { id: 1, name: "html", icon: html },
      { id: 2, name: "css", icon: css },
      { id: 3, name: "react", icon: react },
      { id: 4, name: "typescript", icon: typescript },
    ],
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    repository: "https://github.com/Alirezayoom",
    live: "https://github.com/Alirezayoom",
  },
  {
    id: 3,
    cover: avatar,
    name: "project 3",
    technologies: [
      { id: 1, name: "html", icon: html },
      { id: 2, name: "css", icon: css },
      { id: 3, name: "next", icon: next },
    ],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae consequuntur nemo laborum.",
    repository: "https://github.com/Alirezayoom",
    live: "https://github.com/Alirezayoom",
  },
  {
    id: 4,
    cover: avatar,
    name: "project 4",
    technologies: [
      { id: 1, name: "html", icon: html },
      { id: 2, name: "css", icon: css },
    ],
    description: "Lorem ipsum.",
    repository: "https://github.com/Alirezayoom",
    live: "https://github.com/Alirezayoom",
  },
  {
    id: 5,
    cover: avatar,
    name: "project 4",
    technologies: [
      { id: 1, name: "html", icon: html },
      { id: 2, name: "css", icon: css },
    ],
    description: "Lorem ipsum.",
    repository: "https://github.com/Alirezayoom",
    live: "https://github.com/Alirezayoom",
  },
  {
    id: 6,
    cover: avatar,
    name: "project 4",
    technologies: [
      { id: 1, name: "html", icon: html },
      { id: 2, name: "css", icon: css },
    ],
    description: "Lorem ipsum.",
    repository: "https://github.com/Alirezayoom",
    live: "https://github.com/Alirezayoom",
  },
];

export default function Project() {
  return (
    <section className={classes.project}>
      <div className={`container`}>
        <h2>My Projects</h2>
        <div className={classes.cards}>
          {projects.map((project) => (
            <div key={project.id} className={classes.card}>
              <div className={classes["card-image"]}>
                <img src={project.cover} alt={avatar} />
              </div>
              <div className={classes["card-description"]}>
                <div className={classes["project-name"]}>{project.name}</div>
                <div className={classes["project-technologies"]}>
                  {project.technologies.map((technology) => (
                    <div key={technology.name}>
                      <img src={technology.icon} alt={technology.name} />
                    </div>
                  ))}
                </div>
                <div className={classes["project-description"]}>
                  {project.description}
                </div>
                <div className={classes["project-links"]}>
                  <a href={project.repository} target="_blank">
                    <button>
                      <span>
                        <img src={github} alt="" />
                      </span>
                      Github
                    </button>
                  </a>
                  <a href={project.live} target="_blank">
                    <button>
                      Visit
                      <span>
                        <img src={arrow} alt="" />
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
