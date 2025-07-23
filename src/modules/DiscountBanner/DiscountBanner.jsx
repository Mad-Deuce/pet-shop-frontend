import { Link } from "react-router-dom";

import Button from "/src/shared/components/Button/Button";

import styles from "./DiscountBanner.module.css";

export default function DiscountBanner() {
  return (
    <div className={styles.discountBanner}>
      <h1 className={styles.title}>Amazing Discounts on Pets Products!</h1>
      <Link to="/sales">
        <Button variant="contained">Check out</Button>
      </Link>
    </div>
  );
}
