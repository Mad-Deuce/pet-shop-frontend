import Card from "./Card/Card";

import styles from "./Products.module.css";

export default function Products({products}) {
    const elements = products?.map((item) => (
      <Card key={item.id} product={item} />
    ));

  return <div className={styles.products}>{elements}</div>;
}
