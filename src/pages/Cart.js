import React, { useContext } from "react";
import CartItems from "../components/CartItems";
import AllProducts from "../data/Allproducts";

import { ShopContext } from "../context/ShopContext";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  return (
    <div>
      <CartItems />
      <div>
        <h1>YOUR CART ITEMS</h1>
      </div>
      <div>
        {AllProducts.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItems data={product} />;
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
