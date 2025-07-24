import { Link } from "react-router-dom";

import styles from "./Breadcrumbs.module.css";

export default function Breadcrumbs({ breadcrumbs = [] }) {
  const elements = breadcrumbs.map((item, idx, arr) => (
    <div key={idx} className={styles.wrapper}>
      {idx > 0 && <div className={styles.divider}></div>}
      <Link
        to={item.href}
        className={`${styles.link} ${
          idx === arr.length - 1 ? styles.active : ""
        }`}
      >
        {item.title}
      </Link>
    </div>
  ));

  return <div className={styles.breadcrumbs}>{elements}</div>;
}
