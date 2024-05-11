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
              <a href={project.live}>
                <div className={classes["card-image"]}>
                  <img src={`/covers/${project.cover}`} alt={project.name} />
                </div>
              </a>
              <div className={classes["card-description"]}>
                <div className={classes["project-name"]}>{project.name}</div>
                <div className={classes["project-technologies"]}>
                  {project.technologies.map((technology) => (
                    <div key={technology.name}>
                      <img
                        src={`/skills/${technology.name}.svg`}
                        alt={technology.name}
                      />
                    </div>
                  ))}
                </div>
                <div className={classes["project-description"]}>
                  {project.description}
                </div>
                <div className={classes["project-links"]}>
                  <a href={project.repository}>
                    <button>
                      <img src="/icons/github.svg" alt="github" />
                      Github
                    </button>
                  </a>
                  <a href={project.live}>
                    <button>
                      <img src="/icons/globe.svg" alt="globe" />
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
