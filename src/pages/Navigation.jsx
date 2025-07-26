import { Routes, Route } from "react-router-dom";

import HomePage from "/src/pages/HomePage/HomePage";
import CategoriesPage from "/src/pages/CategoriesPage/CategoriesPage";
import AllProductsPage from "/src/pages/AllProductsPage/AllProductsPage";
import DiscountedProductsPage from "/src/pages/DiscountedProductsPage/DiscountedProductsPage";

import NotFoundPage from "/src/pages/NotFoundPage/NotFoundPage";

export default function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/products/all" element={<AllProductsPage />} />
      <Route path="/sales" element={<DiscountedProductsPage />} />
      <Route path="/categories/:id" element={<AllProductsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
