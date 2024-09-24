import styles from "./utils/ui.module.css";

const Message = ({ children, type = "success" }) => {
  return (
    <div className={`${styles.message} ${styles[type]}`}>
      <p>{children}</p>
    </div>
  );
};

export default Message;
