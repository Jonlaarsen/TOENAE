import React from "react";
import "./Breadcrumbs.css";

const Breadcrumbs = (props) => {
  const { product } = props;
  return (
    <div className="breadcrumb">
      <p>
        {" "}
        HOME {`>`} SHOP {`>`} {product.category} {`>`} {product.title}{" "}
      </p>
    </div>
  );
};

export default Breadcrumbs;
