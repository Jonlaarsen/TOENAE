import React, { useContext } from "react";
import "./Cartitems.css";
import { ShopContext } from "../context/ShopContext";

const CartItems = (props) => {
  // const { title, images } = props.data;
  console.log(props.data);

  return (
    <div className="cart-items">
      <h1>{props.data.title}</h1>
      {/* <div className="format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {AllProducts.map((e) => {
        if (cartItems[e.id] > 0) {
          <div>
            <div className="format">
              <img alt={e.images} className="item-icon" />
              <p>{e.title}</p>
              <p>${e.price}</p>
              <button className="quantity">{cartItems[e.id]}</button>
              <p>{e.price * cartItems[e.id]}</p>
              <button
                onClick={() => {
                  removeFromCart();
                }}
                alt=""
              >
                Remove
              </button>
            </div>
            <hr />
          </div>;
        }
      })} */}
    </div>
  );
};

export default CartItems;
