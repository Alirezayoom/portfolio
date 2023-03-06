import classes from "./notification.module.css";

export default function Notification({ status, message }) {
  let statusBg = "";

  if (status === "Sending") {
    statusBg = classes.sending;
  }

  if (status === "Faild") {
    statusBg = classes.faild;
  }

  if (status === "Success") {
    statusBg = classes.success;
  }

  const notificationClasses = `${classes.notification} ${statusBg}`;

  return (
    <div className={notificationClasses}>
      <div className={classes.status}>{status}</div>
      <div className={classes.message}>{message}</div>
    </div>
  );
}
