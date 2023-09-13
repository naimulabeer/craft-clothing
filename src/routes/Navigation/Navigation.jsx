import { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";

import { ReactComponent as CraftLogo } from "../../assets/ccraft.svg";

import { UserContext } from "../../contexts/user-context";
import { CartContext } from "../../contexts/cart-context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
  LogoTitle,
} from "./navigation.styles";

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
      <NavigationContainer>
        <LogoContainer to="/">
          <CraftLogo className="logo" />
          <LogoTitle>Craft Clothing</LogoTitle>
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink onClick={signOutUser}>SIGN OUT</NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
}

export default Navigation;
