import classes from "./avatar.module.css";

export default function Avatar() {
  return (
    <div className={classes.avatar}>
      <img src="/avatar.jpg" alt="avatar" />
    </div>
  );
}
