import { format } from "date-fns";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        MealTop © 2020 - {format(new Date(), "yyyy")} All rights reserved
      </div>
      <a href="#" className={styles.link}>
        User Agreement
      </a>
      <a href="#" className={styles.link}>
        Privacy Policy
      </a>
    </footer>
  );
};
export default Footer;
