import { React, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [{ user }] = useState();

  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" />
      </Link>

      <div className="header-search">
        <input className="header-searchInput" type="text" />
      </div>

      <div className="header-nav">
        <Link to={!user && "/login"}>
          <div className="header-option">
            <span className="header-optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header-optionLineTwo"></span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header-option">
            <span className="header-optionLineOne">Returns</span>
            <span className="header-optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header-option">
          <span>Your</span>
          <span>Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header-optionBasket"></div>
        </Link>
      </div>
    </div>
  );
}
