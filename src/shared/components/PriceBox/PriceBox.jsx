import styles from "./PriceBox.module.css";

export default function PriceBox({ price, discontPrice, variant = "small" }) {
  const moneySign = "$";

  return (
    <div className={`${styles.priceBox} ${styles[variant]}`}>
      <p className={`${styles.currentPrice} ${styles[variant]}`}>
        {moneySign}
        {discontPrice ? discontPrice : price}
      </p>
      {discontPrice && (
        <p className={`${styles.previousPrice} ${styles[variant]}`}>
          {moneySign}
          {price}
        </p>
      )}
    </div>
  );
}
