import { Fragment, useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";

import { ReactComponent as CraftLogo } from "../../assets/ccraft.svg";

import { UserContext } from "../../contexts/user-context";
import { CartContext } from "../../contexts/cart-context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

function Navigation() {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  useEffect(() => {
    const closeCartOnOutsideClick = (event) => {
      if (isCartOpen && !event.target.closest(".cart-dropdown-container")) {
        setIsCartOpen(false);
      }
    };

    if (isCartOpen) {
      document.addEventListener("mousedown", closeCartOnOutsideClick);
    } else {
      document.removeEventListener("mousedown", closeCartOnOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", closeCartOnOutsideClick);
    };
  }, [isCartOpen, setIsCartOpen]);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CraftLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
