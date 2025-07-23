import { NavLink } from "react-router-dom";

import { menuItems } from "./menu-items.js";

import styles from "./NavMenu.module.css";

export default function Menu() {
  const elements = menuItems.map((item) => (
    <li key={item.id}>
      <NavLink to={item.href} className={styles.link}>
        {item.title}
      </NavLink>
    </li>
  ));

  return <ul className={styles.menu}>{elements}</ul>;
}
