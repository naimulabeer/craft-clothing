import { Fragment, useContext } from "react";

import "./shop.styles.scss";

import { CategoriesContext } from "../../contexts/categories-context";
import ProductCard from "../../components/product-card/ProductCard";

function Shop() {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="shop-container">
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
}

export default Shop;
