import { Route, Routes } from "react-router-dom";
import "./shop.styles.scss";
import Category from "../Category/Category";
import CategoriesPreview from "../CategoriesPreview/CategoriesPreview";

function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}

export default Shop;
