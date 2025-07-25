import { useDispatch } from "react-redux";

import Card from "./Card/Card";

import { addToCart } from "/src/redux/cart/cart-slice";

import styles from "./Products.module.css";

export default function Products({ products }) {
  const dispatch = useDispatch();

  const handleClick = ( product) => {
    dispatch(addToCart(product));
  };

  const elements = products?.map((item) => (
    <Card key={item.id} product={item} handleClick={handleClick} />
  ));

  return <div className={styles.products}>{elements}</div>;
}
