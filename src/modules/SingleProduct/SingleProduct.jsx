import  PriceBox  from "/src/shared/components/PriceBox/PriceBox";
import  Badge  from "/src/shared/components/Badge/Badge";
import  Counter  from "/src/shared/components/Counter/Counter";
import  Button  from "/src/shared/components/Button/Button";

import styles from "./SingleProduct.module.css";

export default function SingleProduct({ product={} }) {
  return (
    <div className={styles.singleProduct}>
      <div className={styles.imgWrapper}>
        img
      </div>
      <div className={styles.infoWrapper}>
        <h1 className={styles.title}>{product.title}</h1>
        <div className={styles.priceWrapper}></div>
        <div className={styles.controlWrapper}></div>
        <h2 className={styles.descriptionTitle}>Description</h2>
        <p className={styles.text}></p>
      </div>
    </div>
  );
}
