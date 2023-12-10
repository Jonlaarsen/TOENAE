import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header({ cart }) {
  const [isOpen, setIsOpen] = useState("Home");

  return (
    <>
      <div className="header-container">
        <div>
          <Link to="/">
            <img
              id="logo"
              src="https://assets.bigcartel.com/theme_images/60399594/TOENAE_text_logo.png?auto=format&fit=max&h=400&w=1068"
              alt="logo"
            ></img>
          </Link>
        </div>
        <nav className="navbar">
          <Link
            onClick={() => {
              setIsOpen("Home");
            }}
            to="/"
            className="navbar-link"
          >
            Home {isOpen === "Home" ? <hr></hr> : <></>}
          </Link>
          <Link
            onClick={() => {
              setIsOpen("hoodies");
            }}
            className="navbar-link"
            to="hoodies"
          >
            Hoodies
            {isOpen === "hoodies" ? <hr /> : <></>}
          </Link>
          <Link
            onClick={() => {
              setIsOpen("t-shirt");
            }}
            className="navbar-link"
            to="t-shirt"
          >
            T-shirt
            {isOpen === "t-shirt" ? <hr /> : <></>}
          </Link>
          <Link
            onClick={() => {
              setIsOpen("pants");
            }}
            className="navbar-link"
            to="pants"
          >
            Pants
            {isOpen === "pants" ? <hr /> : <></>}
          </Link>
          <Link
            onClick={() => {
              setIsOpen("jackets");
            }}
            className="navbar-link"
            to="jackets"
          >
            jackets
            {isOpen === "jackets" ? <hr /> : <></>}
          </Link>
          <Link
            onClick={() => {
              setIsOpen("shoes");
            }}
            className="navbar-link"
            to="shoes"
          >
            shoes
            {isOpen === "shoes" ? <hr /> : <></>}
          </Link>
          <Link
            onClick={() => {
              setIsOpen("Cart");
            }}
            className="navbar-link"
            to="cart"
            cart={cart}
          >
            Cart{isOpen === "Cart" ? <hr /> : <></>}
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Header;
