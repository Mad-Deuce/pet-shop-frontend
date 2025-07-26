import { Link } from "react-router-dom";

import styles from "./Card.module.css";

const { VITE_API_URL: baseURL } = import.meta.env;

export default function Card({ category }) {
  return (
    <Link
      to={{
        pathname: `/categories/${category.id}`,
      }}
      className={styles.card}
    >
      <div className={styles.imgWrapper}>
        <img
          src={baseURL + category.image}
          alt="no image"
          className={styles.img}
        />
      </div>
      <h2 className={styles.title}>{category.title}</h2>
    </Link>
  );
}
