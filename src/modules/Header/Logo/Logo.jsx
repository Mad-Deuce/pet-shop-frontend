import { Link } from "react-router-dom";

import { LogoIcon } from "/src/shared/components/icons";

import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <Link to={"/"} className={styles.logo}>
      <LogoIcon />
    </Link>
  );
}
