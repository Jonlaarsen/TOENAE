import React, { useContext } from "react";
import "./ShopCategory.css";
import { ShopContext } from "../context/ShopContext";
import Card from "../components/Card";
import AllProducts from "../data/Allproducts";

const ShopCategory = (props) => {
  //   const { Allproducts } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <h1>{props.category}</h1>

      <div className="category-items">
        {AllProducts.map((product, i) => {
          if (props.category === product.category) {
            return (
              <Card
                key={i}
                id={product.id}
                title={product.title}
                images={product.images}
                price={product.price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
