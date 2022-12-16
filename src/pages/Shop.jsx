import React from "react";
import "../stylePages/shop.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ProductsShop from "../components/ProductsShop/ProductsShop";

const Shop = () => {
  return (
    <div>
      <Navbar />
      <div className="s-row">
        <div className="s-col">
          <ProductsShop />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
