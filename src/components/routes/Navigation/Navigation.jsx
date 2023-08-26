import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CraftLogo } from "../../../assets/ccraft.svg";
import "./navigation.styles.scss";

function Navigation() {
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
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
