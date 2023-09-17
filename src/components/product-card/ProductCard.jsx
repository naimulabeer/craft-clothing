import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";

import "./product-card.styles.scss";

import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import { toast } from "react-toastify";

function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
    toast.success(`Added ${product.name} to the cart`, {
      position: "top-center",
      autoClose: 2000,
    });
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to Cart
      </Button>
    </div>
  );
}

export default ProductCard;
