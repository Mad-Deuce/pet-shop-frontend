import { Link } from "react-router-dom";

import OrderForm from "/src/modules/OrderForm/OrderForm";
import Output from "/src/shared/components/Output/Output";
import Button from "/src/shared/components/Button/Button";

import Card from "./Card/Card";

import styles from "./Cart.module.css";

export default function Cart({ cart = [], onSubmit }) {
  console.log(cart);

  const totalItems = cart.products.reduce((acc, { count }) => acc + count, 0);
  const totalCost = cart.products.reduce(
    (acc, { count, price, discont_price }) =>
      acc + count * (discont_price ? discont_price : price),
    0
  );

  const elements = cart.products.map((item) => (
    <Card key={item.id} product={item} />
  ));

  return (
    <>
      {totalItems > 0 ? (
        <div className={styles.cart}>
          <div className={styles.productList}>{elements}</div>
          <div className={styles.formWrapper}>
            <h2 className={styles.formTitle}>Order details</h2>
            <div>
              <p className={styles.text}>{totalItems} items</p>
              <div className={styles.totalCostWrapper}>
                <p className={styles.text}>Total</p>
                <p className={styles.cost}>${totalCost.toFixed(2)}</p>
              </div>
            </div>

            <OrderForm
              className={styles.form}
              buttonVariant="contained"
              condition={true}
              inputVariant="outlined"
              onSubmit={onSubmit}
            />
          </div>
        </div>
      ) : (
        <div className={styles.altCart}>
          <p className={styles.altCartMessage}>
            Looks like you have no items in your basket currently.
          </p>
          <Link to={"/"}>
            <Button variant="contained"> Continue shopping</Button>
          </Link>
        </div>
      )}
    </>
  );
}
