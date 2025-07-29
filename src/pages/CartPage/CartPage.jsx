import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Cart from "/src/modules/Cart/Cart";

import SectionTitle from "/src/shared/components/SectionTitle/SectionTitle";
import Container from "/src/shared/components/Container/Container";
import Modal from "/src/shared/components/Modal/Modal";

import { selectCart } from "/src/redux/cart/cart-selector.js";
import { sendOrderThunk, syncCartThunk } from "/src/redux/cart/cart-thunk.js";

import styles from "./CartPage.module.css";
import { useEffect, useState } from "react";

export default function CartPage() {
  const cart = useSelector(selectCart);
  const productsIds = cart.products.map(({ id }) => id);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(syncCartThunk({ productsIds }));
  }, []);

  const redirectToPreviousPage = () => navigate(-1);

  const handleSubmit = (values) => {
    if (cart.products.length > 0) {
      dispatch(sendOrderThunk({ user: values, products: cart.products }));
      if (!cart.loading && !cart.error) {
        setShowModal(true);
      }
    }
  };

  const modalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Container>
        <div className={styles.cartPage}>
          <SectionTitle
            showButton
            buttonLabel="Back to the store"
            onClick={redirectToPreviousPage}
          >
            Shopping cart
          </SectionTitle>
          <Cart cart={cart} onSubmit={handleSubmit} />
        </div>
      </Container>
      {showModal && (
        <Modal className={styles.modal} modalClose={modalClose}>
          <div className={styles.modalWrapper}>
            <h2 className={styles.modalTitle}>Congratulations!</h2>
            <div className={styles.modalTextWrapper}>
              <p className={styles.modalText}>
                Your order has been successfully placed on the website.
              </p>
              <p className={styles.modalText}>
                A manager will contact you shortly to confirm your order.
              </p>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
