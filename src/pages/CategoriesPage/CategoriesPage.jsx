import { useCallback } from "react";

// import BreadCrumbs from "/src/shared/components/BreadCrumbs/BreadCrumbs";
import BreadCrumbs from "../../shared/components/Breadcrumbs/Breadcrumbs";
import SectionTitle from "/src/shared/components/SectionTitle/SectionTitle";
import Container from "/src/shared/components/Container/Container";
import Output from "/src/shared/components/Output/Output";
import Categories from "/src/modules/Categories/Categories";

import useFetch from "/src/shared/hooks/useFetch";
import { getAllCategoriesApi } from "/src/shared/api/categoriesApi";

import styles from "./CategoriesPage.module.css";

export default function CategoriesPage() {

  const { state: categories, error, loading } = useFetch({
    request: useCallback(() => getAllCategoriesApi(), []),
    initialState: [],
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
  ];

  return (
    <Container>
      <div className={styles.categoriesPage}>
        <BreadCrumbs breadcrumbs={breadcrumbs} />
        <SectionTitle>Categories</SectionTitle>
        <Output
          error={error}
          loading={loading}
          condition={Boolean(categories.length)}
          altMessage="No categories available"
        >
          <Categories categories={categories} />
        </Output>
      </div>
    </Container>
  );
}
