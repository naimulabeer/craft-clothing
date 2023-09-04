import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
import { CiCircleRemove } from "react-icons/ci";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import "./checkout-item.styles.scss";

function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => {
    clearItemFromCart(cartItem);
  };
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          <FaChevronCircleLeft />
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          <FaChevronCircleRight />
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        <CiCircleRemove />
      </div>
    </div>
  );
}

export default CheckoutItem;
