import React from "react";
import { NewProducts } from "../data/Products";
import Card from "./Card";
import "./New.css";

const New = () => {
  return (
    <div className="new">
      <h1>NEW</h1>
      <div className="new-items">
        {NewProducts.map((product, i) => {
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

export default New;
