import style from './notification.module.css';

export const Notification = ({ heading, content }) => {
  return (
    <div className={style.notificationBox}>
      <p className={style.notificationHeading}>{heading}</p>
      <p className={style.notificationContent}>{content}</p>
    </div>
  );
};
