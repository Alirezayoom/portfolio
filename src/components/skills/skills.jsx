import classes from "./skills.module.css";

const skills = [
  { name: "html", link: "https://www.w3schools.com/html" },
  { name: "css", link: "https://www.w3schools.com/css" },
  { name: "sass", link: "https://sass-lang.com" },
  { name: "bootstrap", link: "https://getbootstrap.com" },
  { name: "tailwind", link: "https://tailwindcss.com" },
  { name: "javascript", link: "https://javascript.info/" },
  { name: "typescript", link: "https://www.typescriptlang.org" },
  { name: "react", link: "https://reactjs.org" },
  { name: "next", link: "https://nextjs.org" },
  { name: "git", link: "https://git-scm.com" },
];

export default function Skills() {
  return (
    <section className={classes.skills} id="skills">
      <div className="container">
        <h2>My Web Skills</h2>
        <div className={classes.skillswrapper}>
          {skills.map((skill) => (
            <div key={skill.name} className={classes.icons}>
              <a href={skill.link} target="_blank">
                <div className={classes.icon}>
                  <img src={`/skills/${skill.name}.svg`} alt={skill.name} />
                </div>
              </a>
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
