import React, { createContext, useState } from "react";
import AllProducts from "../data/Allproducts";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < AllProducts.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, SetCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    SetCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    SetCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const contextValue = { cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

// const [cartItems, SetCartItems] = useState(getDefaultCart());

//   const addToCart = (productId) => {
//     SetCartItems((prev) => ({ ...prev, [productId]: prev[productId] + 1 }));
//     console.log(cartItems);
//   };
//   const removeFromCart = (productId) => {
//     SetCartItems((prev) => ({ ...prev, [productId]: prev[productId] - 1 }));
//   };

//   console.log(cartItems);
//   const contextValue = { AllProducts, cartItems, addToCart, removeFromCart };