import { Link } from "react-router-dom";

import { URL } from "/src/shared/api/config.js";

import styles from "./Card.module.css";

export default function Card({ category }) {
  return (
    <Link to={`${category.id}`} className={styles.card}>
      <div className={styles.imgWrapper}>
        <img src={URL + category.image} alt="no image" className={styles.img} />
      </div>
      <h2 className={styles.title}>{category.title}</h2>
    </Link>
  );
}
