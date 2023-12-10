import React, { useContext } from "react";
import "./productdisplay.css";
import { ShopContext } from "../context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemsAmount = cartItems[product.id];

  return (
    <div className="product-display">
      <div className="product-left">
        <div className="image-list">
          <img src={product.images} alt="" />
          <img src={product.images} alt="" />
          <img src={product.images} alt="" />
          <img src={product.images} alt="" />
        </div>
        <div className="product-img">
          <img className="main-img" src={product.images} alt="" />
        </div>
        <div className="product-right">
          <h1>{product.title}</h1>
          {/* <div className="product-star"></div> */}
          <div className="price"> ${product.price}</div>

          <div className="product-desc">{product.desc}</div>

          <div className="product-size">
            <h1>SELECT SIZE</h1>
            <div className="sizes">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
            </div>
          </div>
          <button
            onClick={() => {
              addToCart(product.id);
            }}
          >
            ADD TO CART {cartItemsAmount > 0 && <>({cartItemsAmount})</>}
          </button>
          <p className="product-category">
            <span>Category :</span> {product.category}
          </p>
          {/* <div className="product-sizes">
            {product.sizes.map((e) => {
              return <p>{e}</p>;
            })}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
