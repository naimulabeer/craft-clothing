import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";

import { CartContext } from "../../contexts/cart-context";
import "./cart-dropdown.styles.scss";

function CartDropdown() {
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
        <span className="total">Total:{cartTotal} Tk.</span>
      </div>

      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </div>
  );
}

export default CartDropdown;
