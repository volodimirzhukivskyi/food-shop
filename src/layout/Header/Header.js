import styles from "./Header.module.css";
import globalStyles from "../../styles/global.module.css";
import NavList from "../NavList/NavList";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={globalStyles.container}>
        <NavList />
      </div>
    </header>
  );
};
export default Header;
