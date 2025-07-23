import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectCart } from "/src/redux/cart/cart-selector";

import { BasketIcon } from "/src/shared/components/icons";

import styles from "./Basket.module.css";

export default function Basket() {
  const cart = useSelector(selectCart);
  // const totalCount = cart.reduce((item, acc)=>acc+item.count, 0)
  console.log("cart: ", cart);
  
  return (
    <Link to="/cart" className={styles.basket}>
      <BasketIcon className={styles.icon} />
      <span className={styles.badge}>99</span>
    </Link>
  );
}
