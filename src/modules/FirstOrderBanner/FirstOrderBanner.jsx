import Container from "/src/shared/components/Container/Container";

import Form from "./Form/Form";

import firstOrderFormImg from "./img.svg";

import styles from "./FirstOrderBanner.module.css";

export default function FirstOrderForm() {
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
          <div className={styles.innerContainer}>
            <Form className={styles.form} />
          </div>
        </div>
      </div>
    </Container>
  );
}
