import DiscountBanner from "/src/modules/DiscountBanner/DiscountBanner";
import Categories from "/src/modules/Categories/Categories";
import FirstOrderForm from "/src/modules/FirstOrderForm/FirstOrderForm";
import Products from "/src/modules/Products/Products";

import Container from "/src/shared/components/Container/Container";
import SectionTitle from "/src/shared/components/SectionTitle/SectionTitle";

import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <DiscountBanner />
      <Container>
        <SectionTitle>Categories</SectionTitle>
        <Categories />
        <FirstOrderForm />
        <SectionTitle>Sale</SectionTitle>
        <Products />
      </Container>
    </div>
  );
}
