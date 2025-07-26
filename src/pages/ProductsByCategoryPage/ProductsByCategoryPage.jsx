import { useCallback } from "react";
import { useParams } from "react-router-dom";

import Products from "/src/modules/Products/Products";

import BreadCrumbs from "/src/shared/components/BreadCrumbs/BreadCrumbs";
import SectionTitle from "/src/shared/components/SectionTitle/SectionTitle";
import Container from "/src/shared/components/Container/Container";
import Output from "/src/shared/components/Output/Output";

import useFetch from "/src/shared/hooks/useFetch";
import { getProductsByCategoryApi } from "/src/shared/api/productsApi";

import styles from "./ProductsByCategoryPage.module.css";

export default function ProductsByCategoryPage() {
  const categoryId = useParams().id;

  const {
    state: response,
    error,
    loading,
  } = useFetch({
    request: useCallback(
      () => getProductsByCategoryApi(categoryId),
      [categoryId]
    ),
    initialState: [],
  });

  const breadcrumbs = [
    {
      href: "/",
      title: "Main Page",
    },
    {
      href: "/categories/all",
      title: "Categories",
    },
    {
      href: "/categories/" + categoryId,
      title: response?.category?.title,
    },
  ];

  return (
    <Container>
      <div className={styles.productsPage}>
        <BreadCrumbs breadcrumbs={breadcrumbs} />
        <SectionTitle>{response?.category?.title}</SectionTitle>
        <Output
          error={error}
          loading={loading}
          condition={Boolean(response?.data?.length)}
          altMessage="No products available"
        >
          <Products products={response?.data} />
        </Output>
      </div>
      ;
    </Container>
  );
}
