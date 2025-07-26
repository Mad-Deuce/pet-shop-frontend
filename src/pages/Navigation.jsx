import { Routes, Route } from "react-router-dom";

import HomePage from "/src/pages/HomePage/HomePage";
import CategoriesPage from "/src/pages/CategoriesPage/CategoriesPage";
import AllProductsPage from "/src/pages/AllProductsPage/AllProductsPage";

import NotFoundPage from "/src/pages/NotFoundPage/NotFoundPage";

export default function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/products/all" element={<AllProductsPage />} />
      <Route path="/categories/:id" element={<AllProductsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
