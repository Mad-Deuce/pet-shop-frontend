import Card from "./Card/Card";

import styles from "./Categories.module.css";

export default function Categories({ categories = [], limit = 50 }) {
  const elements = categories
    ?.slice(0, limit)
    .map((item) => <Card key={item.id} category={item} />);

  return <div className={styles.categories}>{elements}</div>;
}
