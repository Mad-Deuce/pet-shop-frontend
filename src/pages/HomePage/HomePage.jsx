import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import DiscountBanner from "/src/modules/DiscountBanner/DiscountBanner";
import Categories from "/src/modules/Categories/Categories";
import FirstOrderBanner from "/src/modules/FirstOrderBanner/FirstOrderBanner";
import Products from "/src/modules/Products/Products";

import Output from "/src/shared/components/Output/Output";
import Container from "/src/shared/components/Container/Container";
import SectionTitle from "/src/shared/components/SectionTitle/SectionTitle";
import Modal from "/src/shared/components/Modal/Modal";
import Dialog from "/src/shared/components/Dialog/Dialog";
import Preface from "/src/shared/components/Preface/Preface";

import useFetch from "/src/shared/hooks/useFetch";
import { getPopularCategoriesApi } from "/src/shared/api/categoriesApi";
import { getPopularProductsApi } from "/src/shared/api/productsApi";

import { selectPrefaceVisible } from "/src/redux/preface/preface-selector.js";
import { disableModal } from "/src/redux/preface/preface-slice.js";

import styles from "./HomePage.module.css";

export default function HomePage() {
  const {
    state: categories,
    error: categoriesError,
    loading: categoriesLoading,
  } = useFetch({
    request: useCallback(() => getPopularCategoriesApi(), []),
    initialState: [],
  });

  const {
    state: { products },
    error: productsError,
    loading: productsLoading,
  } = useFetch({
    request: useCallback(() => getPopularProductsApi(), []),
    initialState: [],
  });

  const showModal = useSelector(selectPrefaceVisible);
  const dispatch = useDispatch();

  return (
    <>
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
              <Categories limit={4} categories={categories} />
            </Output>

            <FirstOrderBanner />
            <SectionTitle
              showButton
              buttonLabel="All Sales"
              buttonLink="/sales"
            >
              Sale
            </SectionTitle>
            <Output
              error={productsError}
              loading={productsLoading}
              condition={true}
              altMessage="No popular products available"
            >
              <Products
                products={products}
                limit={4}
                showControl={false}
                onlyDiscounted={true}
              />
            </Output>
          </div>
        </Container>
      </div>
      {showModal && (
        <Modal
          className={styles.modal}
          modalClose={() => {
            dispatch(disableModal());
          }}
        >
          <Dialog className={styles.dialog}>
            <Preface />
          </Dialog>
        </Modal>
      )}
    </>
  );
}
