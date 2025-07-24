import Card from "./Card/Card";

import styles from "./Categories.module.css";

export default function Categories({ categories = [] }) {
  const elements = categories?.map((item) => (
    <Card key={item.id} category={item} />
  ));

  return <div className={styles.categories}>{elements}</div>;
}
