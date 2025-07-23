import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectCart } from "/src/redux/cart/cart-selector";

import { BasketIcon } from "/src/shared/components/icons";

import styles from "./Basket.module.css";

export default function Basket() {
  const cart = useSelector(selectCart);
  const totalCount = cart.reduce((acc, { count }) => acc + count, 0);

  return (
    <Link to="/cart" className={styles.basket}>
      <BasketIcon className={styles.icon} />
      <span className={styles.badge}>{totalCount}</span>
    </Link>
  );
}
