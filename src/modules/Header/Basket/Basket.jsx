import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectCart } from "/src/redux/cart/cart-selector";

import { BasketIcon } from "/src/shared/components/icons";

import styles from "./Basket.module.css";

export default function Basket() {
  const { products: productsInCart } = useSelector(selectCart);

  const totalCount = productsInCart.reduce((acc, { count }) => acc + count, 0);

  return (
    <Link to="/cart" className={styles.basket}>
      <BasketIcon className={styles.icon} />
      {totalCount > 0 && <span className={styles.badge}>{totalCount}</span>}
    </Link>
  );
}
