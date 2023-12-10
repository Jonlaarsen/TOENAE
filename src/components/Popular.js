import React from "react";
import "./popular.css";
import { Products } from "../data/Products";
import Card from "./Card";

const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR</h1>
      <hr></hr>
      <div className="popular-item">
        {Products.map((product, i) => {
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
