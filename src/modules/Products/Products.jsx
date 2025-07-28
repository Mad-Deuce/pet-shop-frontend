import { useDispatch } from "react-redux";

import Card from "./Card/Card";

import { addToCart } from "/src/redux/cart/cart-slice";

import styles from "./Products.module.css";

export default function Products({ products = [], limit = 50 }) {
  const dispatch = useDispatch();

  const handleClick = (product) => {
    dispatch(addToCart(product));
  };

  const elements = products
    ?.slice(0, limit)
    .map((item) => (
      <Card key={item.id} product={item} handleClick={handleClick} />
    ));

  return <div className={styles.products}>{elements}</div>;
}
