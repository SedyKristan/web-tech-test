import styles from "./utils/ui.module.css";

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.cardAction}>
      {children}
    </button>
  );
};

export default Button;
