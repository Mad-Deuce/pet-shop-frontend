import { useEffect, useRef, useState, useCallback } from "react";
import { useParams } from "react-router-dom";

import SingleProduct from "/src/modules/SingleProduct/SingleProduct";

import BreadCrumbs from "/src/shared/components/BreadCrumbs/BreadCrumbs";

import Container from "/src/shared/components/Container/Container";
import Output from "/src/shared/components/Output/Output";

// import useFetch from "/src/shared/hooks/useFetch";
import { getProductByIdApi } from "/src/shared/api/productsApi";
import { getCategoryByIdApi } from "/src/shared/api/categoriesApi";
import { defaultBreadcrumbs } from "/src/shared/components/Breadcrumbs/breadcrumbsInit";

import styles from "./SingleProductPage.module.css";

export default function SingleProductPage() {
  const productId = useParams().id;
  const breadcrumbs = useRef(defaultBreadcrumbs);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const setBreadcrumbs = useCallback(
    (category = {}, product = {}) => {
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
          href: "/products/" + product?.id,
          title: product?.title,
        },
      ];
    },
    []
  );

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      setError(null);

      const {
        data: [productRes],
        error: productResError,
      } = await getProductByIdApi(productId);

      if (productResError) {
        setLoading(false);
        return setError(
          productResError.response?.data?.message || productResError.message
        );
      }
      setProduct(productRes);

      const { data: categoryRes, error: categoryResError } =
        await getCategoryByIdApi(productRes?.categoryId);
      setLoading(false);
      if (categoryResError) {
        return setError(
          categoryResError.response?.data?.message || categoryResError.message
        );
      }
      setBreadcrumbs(categoryRes.category, productRes);
    };

    fetchItems();
  }, [productId, setBreadcrumbs]);

  return (
    <Container>
      <div className={styles.singleProductPage}>
        <BreadCrumbs breadcrumbs={breadcrumbs.current} />
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
