import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Cart from "/src/modules/Cart/Cart";

import SectionTitle from "/src/shared/components/SectionTitle/SectionTitle";
import Container from "/src/shared/components/Container/Container";

import { selectCart } from "/src/redux/cart/cart-selector.js";

import styles from "./CartPage.module.css";

export default function CartPage() {
  const cart = useSelector(selectCart);
  const navigate = useNavigate();

  const redirectToPreviousPage = () => navigate(-1);

  const handleSubmit = (values) => {
    console.log({user: values, products: cart.products});
  };

  return (
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
  );
}
