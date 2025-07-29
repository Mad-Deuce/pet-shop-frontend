import { useParams } from "react-router-dom";

import SingleProduct from "/src/modules/SingleProduct/SingleProduct";

import BreadCrumbs from "/src/shared/components/BreadCrumbs/BreadCrumbs";
import Container from "/src/shared/components/Container/Container";
import Output from "/src/shared/components/Output/Output";

import useFetch from "/src/shared/hooks/useFetch";

import { getProductBySlugApi } from "/src/shared/api/productsApi";

import styles from "./SingleProductPage.module.css";

export default function SingleProductPage() {
  const productSlug = useParams().slug;

  const {
    state: product,
    error,
    loading,
  } = useFetch({
    request: () => getProductBySlugApi({ productSlug }),

    initialState: [],
    slug: productSlug,
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
      href: "/categories/" + product?.category?.slug,
      title: product?.category?.title,
    },
    {
      href: "/products/" + product?.slug,
      title: product?.title,
    },
  ];

  return (
    <Container>
      <div className={styles.singleProductPage}>
        <BreadCrumbs breadcrumbs={breadcrumbs} />
        <Output
          error={error}
          loading={loading}
          condition={product && product != {}}
          altMessage="No product available"
        >
          <SingleProduct product={product} />
        </Output>
      </div>
    </Container>
  );
}
