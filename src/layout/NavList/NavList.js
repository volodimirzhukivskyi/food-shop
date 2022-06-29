import * as React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavList.module.css";

const NavList = () => {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li>
          <NavLink
            to="/"
            className={styles.link}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Shops
          </NavLink>
        </li>
        <span className={styles.line} />
        <li>
          <NavLink
            to="shop-cart"
            className={styles.link}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Shopping Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavList;
