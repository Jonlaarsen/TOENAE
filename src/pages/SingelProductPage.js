import React, { useContext } from "react";

import { useParams } from "react-router-dom";
import AllProducts from "../data/Allproducts";
import ProductDisplay from "../components/ProductDisplay";
import Breadcrumbs from "../components/Breadcrumbs";
import Description from "../components/Description";

const SingelProductPage = () => {
  const { productId } = useParams();
  const product = AllProducts.find((e) => e.id === Number(productId));

  return (
    <div className="product-container">
      <Breadcrumbs product={product} />
      <ProductDisplay product={product} />
      <Description />
    </div>
  );
};

export default SingelProductPage;
