import React from "react";
import "./popular.css";

import Card from "./Card";
import AllProducts from "../data/Allproducts";

const Popular = () => {
  return (
    <div className="popular">
      <h1>ALL</h1>
      <hr></hr>
      <div className="popular-item">
        {AllProducts.map((product, i) => {
          return (
            <Card
              key={i}
              id={product.id}
              title={product.title}
              images={product.images}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
