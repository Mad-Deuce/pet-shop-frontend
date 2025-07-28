import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import PriceBox from "/src/shared/components/PriceBox/PriceBox";
import Badge from "/src/shared/components/Badge/Badge";
import Counter from "/src/shared/components/Counter/Counter";
import Button from "/src/shared/components/Button/Button";

import { getPercentageDiscont } from "/src/shared/lib/price";
import { selectCart } from "/src/redux/cart/cart-selector.js";
import { deleteFromCart, updateInCart } from "../../redux/cart/cart-slice";

import styles from "./SingleProduct.module.css";

const { VITE_API_URL: baseURL } = import.meta.env;

export default function SingleProduct({ product = {} }) {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  const productCount =
    cart.products?.find((item) => item.id === product.id)?.count || 0;

  const [count, setCount] = useState(0);
  const textRef = useRef(null);
  const [isTextOverflowed, setIsTextOverflowed] = useState(false);

  const percentageDiscont = getPercentageDiscont(
    product.price,
    product.discont_price
  );

  useEffect(() => {
    setIsTextOverflowed(
      Boolean(textRef.current.offsetHeight - textRef.current.scrollHeight)
    );
  }, []);

  const handleChangeCounter = (counter) => {
    setCount(counter);
  };

  const handleClickAddToCartButton = () => {
    if (count === 0) dispatch(deleteFromCart(product.id));
    if (count > 0) dispatch(updateInCart({ ...product, count: count }));
  };

  const handleReadMore = () => {
    textRef.current.className = `${styles.text} ${styles.expanded}`;
    setIsTextOverflowed(false);
  };

  return (
    <div className={styles.singleProduct}>
      <div className={styles.imgContainer}>
        <div className={styles.imgSlider}>
          <div className={styles.imgWrapper}>
            <img src={baseURL + product.image} className={styles.img} />
          </div>
          <div className={styles.imgWrapper}>
            <img src={baseURL + product.image} className={styles.img} />
          </div>
          <div className={styles.imgWrapper}>
            <img src={baseURL + product.image} className={styles.img} />
          </div>
        </div>

        <div className={styles.imgWrapper}>
          <img src={baseURL + product.image} className={styles.img} />
        </div>
      </div>

      <div className={styles.infoWrapper}>
        <h1 className={styles.title}>{product.title}</h1>
        <div className={styles.priceWrapper}>
          <PriceBox
            price={product.price}
            discontPrice={product.discont_price}
            variant="big"
          />
          {product.discont_price && (
            <Badge className={styles.badge}>{percentageDiscont}%</Badge>
          )}
        </div>
        <div className={styles.controlWrapper}>
          <Counter
            handleChange={handleChangeCounter}
            initValue={productCount}
            max={99}
          />
          <Button
            variant={productCount > 0 ? "outlined" : "contained"}
            className={styles.button}
            handleClick={handleClickAddToCartButton}
          >
            {productCount > 0 ? "Added (update)" : "Add to cart"}
          </Button>
        </div>
        <h2 className={styles.descriptionTitle}>Description</h2>
        <p ref={textRef} className={styles.text}>
          {product.description}
        </p>
        {isTextOverflowed && (
          <p className={styles.readMore} onClick={handleReadMore}>
            Read More
          </p>
        )}
      </div>
    </div>
  );
}
