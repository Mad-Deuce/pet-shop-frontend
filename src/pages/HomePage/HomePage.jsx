import { useCallback, useRef } from "react";

import DiscountBanner from "/src/modules/DiscountBanner/DiscountBanner";
import Categories from "/src/modules/Categories/Categories";
import FirstOrderBanner from "/src/modules/FirstOrderBanner/FirstOrderBanner";
import Products from "/src/modules/Products/Products";

import Output from "/src/shared/components/Output/Output";
import Container from "/src/shared/components/Container/Container";
import SectionTitle from "/src/shared/components/SectionTitle/SectionTitle";

import useFetch from "/src/shared/hooks/useFetch";
import { getPopularCategoriesApi } from "/src/shared/api/categoriesApi";

import styles from "./HomePage.module.css";

export default function HomePage() {
  const popularCategoriesParams = useRef({ page: 1, perPage: 4 });
  const {
    state: categories,
    error: categoriesError,
    loading: categoriesLoading,
  } = useFetch({
    request: useCallback(
      () => getPopularCategoriesApi(popularCategoriesParams.current),
      []
    ),
    initialState: [],
  });

  return (
    <div className={styles.homePage}>
      <DiscountBanner />
      <Container>
        <div className={styles.content}>
          <SectionTitle
            showButton
            buttonLabel="All Categories"
            buttonLink="/categories"
          >
            Categories
          </SectionTitle>
          <Output
            error={categoriesError}
            loading={categoriesLoading}
            condition={true}
            altMessage="No popular categories available"
          >
            <Categories categories={categories} />
          </Output>

          <FirstOrderBanner />
          <SectionTitle showButton buttonLabel="All Sales" buttonLink="/sales">
            Sale
          </SectionTitle>
          <Products />
        </div>
      </Container>
    </div>
  );
}
