import { Routes, Route } from "react-router-dom";

import HomePage from "/src/pages/HomePage/HomePage";
import CategoriesPage from "/src/pages/CategoriesPage/CategoriesPage";
import ProductsPage from "/src/pages/ProductsPage/ProductsPage";

import NotFoundPage from "/src/pages/NotFoundPage/NotFoundPage";

export default function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/categories/:id" element={<ProductsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
