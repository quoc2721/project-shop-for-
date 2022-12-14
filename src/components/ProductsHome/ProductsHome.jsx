import React from "react";
import { products } from "../../data";
import "../ProductsHome/productsHome.css";
import ProductHome from "./ProductHome";

const ProductsHome = () => {
  return (
    <div className="hps-container">
      <h2>Latest Products</h2>
      <div className="hps-row">
        {products.slice(0, 8).map((item) => (
          <ProductHome item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsHome;
