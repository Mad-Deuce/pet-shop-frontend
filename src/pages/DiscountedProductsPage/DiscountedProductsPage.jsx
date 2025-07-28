import { useCallback } from "react";

import Products from "/src/modules/Products/Products";

import BreadCrumbs from "/src/shared/components/BreadCrumbs/BreadCrumbs";
import SectionTitle from "/src/shared/components/SectionTitle/SectionTitle";
import Container from "/src/shared/components/Container/Container";
import Output from "/src/shared/components/Output/Output";

import useFetch from "/src/shared/hooks/useFetch";
import { getAllProductsApi } from "/src/shared/api/productsApi";


import styles from "./DiscountedProductsPage.module.css";

const breadcrumbs = [
  {
    href: "/",
    title: "Main Page",
  },
  {
    href: "/sales",
    title: "All sales",
  },
];

export default function DiscountedProductsPage() {
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
        <div className={styles.discountedProductsPage}>
          <BreadCrumbs breadcrumbs={breadcrumbs} />
          <SectionTitle>Discounted items</SectionTitle>
          <Output
            error={error}
            loading={loading}
            condition={Boolean(products.length)}
            altMessage="No products available"
          >
            <Products products={products} onlyDiscounted={true}/>
          </Output>
        </div>
        ;
      </Container>
    );
}
