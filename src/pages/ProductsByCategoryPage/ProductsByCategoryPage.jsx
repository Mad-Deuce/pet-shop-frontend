import { useParams } from "react-router-dom";

import Products from "/src/modules/Products/Products";
import ControlBar from "/src/modules/ControlBar/ControlBar";

import Breadcrumbs from "/src/shared/components/Breadcrumbs/Breadcrumbs";
import SectionTitle from "/src/shared/components/SectionTitle/SectionTitle";
import Container from "/src/shared/components/Container/Container";
import Output from "/src/shared/components/Output/Output";

import useFetch from "/src/shared/hooks/useFetch";
import useFilter from "/src/shared/hooks/useFilter";
import { getProductsByCategoryApi } from "/src/shared/api/productsApi";

import styles from "./ProductsByCategoryPage.module.css";

export default function ProductsByCategoryPage() {
  const categorySlug = useParams().slug;
  const { params, handleFilterChange } = useFilter({});

  const {
    state: { category, data },
    error,
    loading,
  } = useFetch({
    request: () => getProductsByCategoryApi({ categorySlug, params }),

    initialState: [],
    requestParams: params,
    slug: categorySlug,
  });

  const breadcrumbs = [
    {
      href: "/",
      title: "Main Page",
    },
    {
      href: "/categories",
      title: "Categories",
    },
    {
      href: "/categories/" + categorySlug,
      title: category?.title,
    },
  ];

  return (
    <Container>
      <div className={styles.productsPage}>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <SectionTitle>{category?.title}</SectionTitle>
        <ControlBar
          handleFilterChange={handleFilterChange}
          onlyDiscounted={false}
        />
        <Output
          error={error}
          loading={loading}
          condition={data?.total > 0}
          altMessage="No products available"
        >
          <Products products={data?.products} />
        </Output>
      </div>
    </Container>
  );
}
