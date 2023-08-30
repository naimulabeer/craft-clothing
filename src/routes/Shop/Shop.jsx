import { useContext } from "react";

import "./shop.styles.scss";

import { ProductsContext } from "../../contexts/product-context";
import ProductCard from "../../components/product-card/ProductCard";

function Shop() {
  const { products } = useContext(ProductsContext);
  return (
    <div className="shop-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Shop;
