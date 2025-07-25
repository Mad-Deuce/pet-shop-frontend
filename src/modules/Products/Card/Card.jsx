import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart } from "/src/redux/cart/cart-selector";

import Button from "/src/shared/components/Button/Button";
import Badge from "/src/shared/components/Badge/Badge";
import PriceBox from "/src/shared/components/PriceBox/PriceBox";

import { getPercentageDiscont } from "/src/shared/lib/price.js";

import styles from "./Card.module.css";

const { VITE_API_URL: baseURL } = import.meta.env;

export default function Card({ product, handleClick }) {
  const cart = useSelector(selectCart);
  const isInCart = cart.some((item) => item.id === product.id);

  const percentageDiscont = getPercentageDiscont(
    product.price,
    product.discont_price
  );

  return (
    <div className={styles.card}>
      <Link to={`/products/${product.id}`}>
        <div className={styles.wrapper}>
          <div className={styles.imgWrapper}>
            <img
              src={baseURL + product.image}
              alt="no image"
              className={styles.img}
            />
            {product.discont_price && (
              <Badge className={styles.badge}>{percentageDiscont}%</Badge>
            )}
          </div>
          <div className={styles.infoWrapper}>
            <h2 className={styles.title}>{product.title}</h2>
            <PriceBox
              price={product.price}
              discontPrice={product.discont_price}
            />
          </div>
        </div>
      </Link>
      <Button
        variant={isInCart ? "outlined" : "contained"}
        className={styles.button}
        handleClick={() => handleClick(product)}
      >
        {isInCart ? "Added" : "Add to cart"}
      </Button>
    </div>
  );
}
