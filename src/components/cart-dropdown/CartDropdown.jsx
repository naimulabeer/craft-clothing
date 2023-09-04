import { useContext } from "react";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";

import { CartContext } from "../../contexts/cart-context";
import "./cart-dropdown.styles.scss";

function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>CHECKOUT</Button>
    </div>
  );
}

export default CartDropdown;
