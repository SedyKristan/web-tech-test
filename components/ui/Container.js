import styles from "./utils/ui.module.css";

const Container = ({ children }) => {
  return <section className={styles.container}>{children}</section>;
};

export default Container;
