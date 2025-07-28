import { useSelector, useDispatch } from "react-redux";

import OrderForm from "/src/modules/OrderForm/OrderForm";
import Container from "/src/shared/components/Container/Container";

import { selectIsFirstOrder } from "/src/redux/first-order/first-order-selectors";
import { sendFirstOrderThunk } from "/src/redux/first-order/first-order-thunk";

import firstOrderFormImg from "./img.svg";

import styles from "./FirstOrderBanner.module.css";

export default function FirstOrderForm() {
  const dispatch = useDispatch();
  const { isFirstOrder, loading, error } = useSelector(selectIsFirstOrder);

  const handleSubmit = (values) => {
    dispatch(sendFirstOrderThunk(values));
  };

  return (
    <Container>
      <div className={styles.firstOrderForm}>
        <h1 className={styles.title}>5% off on the first order</h1>
        <div className={styles.content}>
          <div className={styles.innerContainer}>
            <img
              className={styles.img}
              src={firstOrderFormImg}
              alt="no image"
            />
          </div>
          <div className={`${styles.innerContainer} ${styles.form}`}>
            <OrderForm
              className={styles.form}
              condition={isFirstOrder}
              loading={loading}
              error={error}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
