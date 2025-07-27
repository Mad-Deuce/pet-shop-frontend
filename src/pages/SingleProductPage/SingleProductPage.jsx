import { useCallback, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import BreadCrumbs from "/src/shared/components/BreadCrumbs/BreadCrumbs";
import SectionTitle from "/src/shared/components/SectionTitle/SectionTitle";
import Container from "/src/shared/components/Container/Container";
import Output from "/src/shared/components/Output/Output";

import useFetch from "/src/shared/hooks/useFetch";
import { getProductByIdApi } from "/src/shared/api/productsApi";
import { getCategoryByIdApi } from "/src/shared/api/categoriesApi";
import { defaultBreadcrumbs } from "/src/shared/components/Breadcrumbs/breadcrumbsInit";

import styles from "./SingleProductPage.module.css";

export default function SingleProductPage() {
  const productId = useParams().id;
  const breadcrumbs = useRef(defaultBreadcrumbs);

  const {
    state: [product],
    error: productError,
    loading: productLoading,
  } = useFetch({
    request: useCallback(() => getProductByIdApi(productId), [productId]),
    initialState: [],
  });

  const {
    state: { category },
    error: categoryError,
    loading: categoryLoading,
  } = useFetch({
    request: useCallback(
      product ? () => getCategoryByIdApi(product.categoryId) : null,
      [product]
    ),
    initialState: {},
  });

  useEffect(() => {
    breadcrumbs.current = [
      {
        href: "/",
        title: "Main Page",
      },
      {
        href: "/categories",
        title: "Categories",
      },
      {
        href: "/categories/" + category?.id,
        title: category?.title,
      },
      {
        href: "/products/" + productId,
        title: product?.title,
      },
    ];
  }, [productId, product, category]);

  return (
    <Container>
      <div className={styles.singleProductPage}>
        <BreadCrumbs breadcrumbs={breadcrumbs.current} />
        {/* <SectionTitle>{product ? product[0].title : "something wrong"}</SectionTitle> */}
        {/* <Output
          error={error}
          loading={loading}
          condition={Boolean(response?.data?.length)}
          altMessage="No products available"
        > */}
        {/* <Products products={response?.data} /> */}
        {/* </Output> */}
      </div>
    </Container>
  );
}
