import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import OrderForm from "/src/modules/OrderForm/OrderForm";
import Button from "/src/shared/components/Button/Button";

import Card from "./Card/Card";

import { deleteFromCart } from "/src/redux/cart/cart-slice.js";

import styles from "./Cart.module.css";

export default function Cart({ cart = [], onSubmit }) {
  const dispatch = useDispatch();
  const totalItems = cart.products?.reduce((acc, { count }) => acc + count, 0);
  const totalCost = cart.products?.reduce(
    (acc, { count, price, discont_price }) =>
      acc + count * (discont_price ? discont_price : price),
    0
  );



  const handleDeleteProduct = (id) => {
    console.log(id);
    dispatch(deleteFromCart(id));
  };

  const elements = cart.products?.map((item) => (
    <Card
      key={item.id}
      product={item}
      handleDeleteProduct={handleDeleteProduct}
    />
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
              buttonLabel="Order"
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
