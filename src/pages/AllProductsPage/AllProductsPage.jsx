import { useCallback } from "react";

import Products from "/src/modules/Products/Products";

import BreadCrumbs from "/src/shared/components/BreadCrumbs/BreadCrumbs";
import SectionTitle from "/src/shared/components/SectionTitle/SectionTitle";
import Container from "/src/shared/components/Container/Container";
import Output from "/src/shared/components/Output/Output";

import useFetch from "/src/shared/hooks/useFetch";
import { getAllProductsApi } from "/src/shared/api/productsApi";

import styles from "./AllProductsPage.module.css";

const breadcrumbs = [
  {
    href: "/",
    title: "Main Page",
  },
  {
    href: "/products/all",
    title: "All products",
  },
];

export default function ProductsPage() {
  const {
    state: products,
    error,
    loading,
  } = useFetch({
    request: useCallback(() => getAllProductsApi(), []),
    initialState: [],
  });

 

  return (
    <Container>
      <div className={styles.productsPage}>
        <BreadCrumbs breadcrumbs={breadcrumbs} />
        <SectionTitle>All products</SectionTitle>
        <Output
          error={error}
          loading={loading}
          condition={Boolean(products.length)}
          altMessage="No categories available"
        >
          <Products products={products} />
        </Output>
      </div>
      ;
    </Container>
  );
}
