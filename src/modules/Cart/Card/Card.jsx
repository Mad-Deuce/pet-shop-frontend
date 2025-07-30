import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { CloseIcon } from "/src/shared/components/icons";
import PriceBox from "/src/shared/components/PriceBox/PriceBox";
import Counter from "/src/shared/components/Counter/Counter";

import { deleteFromCart, updateInCart } from "/src/redux/cart/cart-slice.js";

import styles from "./Card.module.css";

const { VITE_API_URL: baseURL } = import.meta.env;

export default function Card({ product, handleDeleteProduct }) {
  const dispatch = useDispatch();

  const handleChangeCounter = (counter) => {
    if (counter === 0) dispatch(deleteFromCart(product.id));
    if (counter > 0) dispatch(updateInCart({ ...product, count: counter }));
  };

  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <Link to={`/products/${product.slug}`}>
          <div className={styles.imgWrapper}>
            <img
              src={baseURL + product.image}
              alt="no image"
              className={styles.img}
            />
          </div>
        </Link>

        <div className={styles.infoWrapper}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>{product.title}</h2>
            <div onClick={() => handleDeleteProduct(product.id)}>
              <CloseIcon className={styles.closeIcon} />
            </div>
          </div>
          <div className={styles.priceWrapper}>
            <Counter
              initValue={product.count}
              max={99}
              handleChange={handleChangeCounter}
            />
            <PriceBox
              price={product.price}
              discontPrice={product.discont_price}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
