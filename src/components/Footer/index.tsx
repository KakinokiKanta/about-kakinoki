import { HEADER_ITEMS } from "../Header";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>kakinoki</div>
        <div>links</div>
      </div>
    </footer>
  );
};
