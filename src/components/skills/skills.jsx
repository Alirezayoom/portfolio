import classes from "./skills.module.css";

const skills = [
  { name: "html" },
  { name: "css" },
  { name: "sass" },
  { name: "bootstrap" },
  { name: "tailwind" },
  { name: "javascript" },
  { name: "typescript" },
  { name: "react" },
  { name: "next" },
  { name: "git" },
];

export default function Skills() {
  return (
    <section className={classes.skills} id="skills">
      <div className="container">
        <h2>My Web Skills</h2>
        <div className={classes.skillswrapper}>
          {skills.map((skill) => (
            <div key={skill.name} className={classes.icons}>
              <div className={classes.icon}>
                <img src={`/skills/${skill.name}.svg`} alt={skill.name} />
              </div>
            </div>
          ))}
        </div>
        <div className={classes.protip}>
          <span>
            <span>
              <img src="/icons/light.svg" alt="pro tip" />{" "}
            </span>
            <strong>ProTip! </strong>I am also familiar with React-router, Next
            Auth, Redux, Markdown, GraphQL, Strapi, MySQL, Mongodb and Firebase.
          </span>
        </div>
      </div>
    </section>
  );
}
