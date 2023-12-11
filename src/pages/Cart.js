import React, { useContext } from "react";
import CartItems from "../components/CartItems";
import AllProducts from "../data/Allproducts";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

import { ShopContext } from "../context/ShopContext";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <div className="cart-container">
      <div className="cart">
        {AllProducts.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItems data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <h1>CHECKOUT</h1>
          <p>
            subtotal: $ <span>{totalAmount}</span>
          </p>
          <button onClick={() => navigate("/")} className="addBtn">
            Continue Shopping
          </button>
          <button className="addBtn">Checkout</button>
        </div>
      ) : (
        <h1>YOUR CART IS EMPTY</h1>
      )}
    </div>
  );
};

export default Cart;
