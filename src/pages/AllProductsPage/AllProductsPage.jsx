
import Products from "/src/modules/Products/Products";
import ControlBar from "/src/modules/Products/ControlBar/ControlBar";

import BreadCrumbs from "/src/shared/components/BreadCrumbs/BreadCrumbs";
import SectionTitle from "/src/shared/components/SectionTitle/SectionTitle";
import Container from "/src/shared/components/Container/Container";
import Output from "/src/shared/components/Output/Output";

import useFetch from "/src/shared/hooks/useFetch";
import useFilter from "/src/shared/hooks/useFilter";
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
  const { params, handleFilterChange } = useFilter({});

  const {
    state: { products },
    error,
    loading,
  } = useFetch({
    request: getAllProductsApi,
    initialState: [],
    requestParams: params,
  });

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
