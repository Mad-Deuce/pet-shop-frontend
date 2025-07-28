import {  useState } from "react";

import Products from "/src/modules/Products/Products";
import ControlBar from "/src/modules/Products/ControlBar/ControlBar";

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
  const [params, setParams] = useState({});

  const {
    state: { products },
    error,
    loading,
  } = useFetch({
    request: getAllProductsApi,
    initialState: [],
    params: params,
  });

  const handleFilterChange = (filter) => {
    const modifyFilter = { ...filter };
    if (!modifyFilter.minPrice) {
      delete modifyFilter.minPrice;
    }
    if (!modifyFilter.maxPrice) {
      delete modifyFilter.maxPrice;
    }
    if (!modifyFilter.discont) {
      delete modifyFilter.discont;
    }
    modifyFilter.sortBy = modifyFilter.sortBy.value;
    console.log("filteredValue: ", modifyFilter);

    setParams(modifyFilter);
  };

  return (
    <Container>
      <div className={styles.productsPage}>
        <BreadCrumbs breadcrumbs={breadcrumbs} />
        <SectionTitle>All products</SectionTitle>
        <ControlBar
          handleFilterChange={handleFilterChange}
          onlyDiscounted={false}
        />

        <Output
          error={error}
          loading={loading}
          condition={Boolean(products?.length)}
          altMessage="No products available"
        >
          <Products
            products={products}
            handleFilterChange={handleFilterChange}
          />
        </Output>
      </div>
      ;
    </Container>
  );
}
