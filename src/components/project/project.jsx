import classes from "./project.module.css";
import projectJson from "../../../data/projects";

export default function Project() {
  return (
    <section className={classes.project} id="projects">
      <div className={`container`}>
        <h2>My Projects</h2>
        <div className={classes.cards}>
          {projectJson.projects.map((project) => (
            <div key={project.id} className={classes.card}>
              <div className={classes["card-image"]}>
                <img src={project.cover} alt={project.name} />
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
                      <img src="src/assets/icons/github.svg" alt="github" />
                      Github
                    </button>
                  </a>
                  <a href={project.live} target="_blank">
                    <button>
                      <img src="src/assets/icons/globe.svg" alt="arrow right" />
                      Visit
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
